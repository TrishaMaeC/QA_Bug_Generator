
import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json({ limit: "25mb" }));

// Serve the homepage from public/index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const KEY = process.env.GROQ_API_KEY;

const TEXT_MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-120b";

const VISION_MODEL = process.env.GROQ_VISION_MODEL || "qwen/qwen3.8-27b";


app.post("/api/generate", async (req, res) => {
  try {
    if (!KEY) {
      return res.status(500).json({
        error: "GROQ_API_KEY is not configured",
      });
    }

    const { messages, images = [] } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "messages must be a non-empty array",
      });
    }

    const msgs = messages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    if (images.length) {
      const last = msgs[msgs.length - 1];

      last.content = [
        { type: "text", text: String(last.content ?? "") },
        ...images.slice(0, 4).map((i) => ({
          type: "image_url",
          image_url: {
            url: `data:${i.media_type};base64,${i.data}`,
          },
        })),
      ];
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${KEY}`,
        },
        body: JSON.stringify({
          model: images.length ? VISION_MODEL : TEXT_MODEL,
          messages: msgs,
          max_tokens: 2000,
          temperature: 0.3,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API error:", data);
      return res.status(500).json({
        error: data.error?.message || "Groq API request failed",
      });
    }

    return res.json({
      text: data.choices[0].message.content,
    });
  } catch (error) {
    console.error("Generate error:", error);
    return res.status(500).json({ error: "Generation failed" });
  }
});

export default app;
