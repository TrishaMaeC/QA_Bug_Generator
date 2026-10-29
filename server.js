import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json({ limit: "25mb" }));
app.use(express.static("public"));

const KEY = process.env.GROQ_API_KEY;
const TEXT_MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";
const VISION_MODEL = process.env.GROQ_VISION_MODEL || "meta-llama/llama-4-scout-17b-16e-instruct";

app.post("/api/generate", async (req, res) => {
  try {
    const { messages, images = [] } = req.body;
    const msgs = messages.map(m => ({ role: m.role, content: m.content }));
    if (images.length) {
      const last = msgs[msgs.length - 1];
      last.content = [
        { type: "text", text: last.content },
        ...images.slice(0, 4).map(i => ({ type: "image_url", image_url: { url: `data:${i.media_type};base64,${i.data}` } }))
      ];
    }
    const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
      body: JSON.stringify({ model: images.length ? VISION_MODEL : TEXT_MODEL, messages: msgs, max_tokens: 2000, temperature: 0.3 })
    });
    const data = await r.json();
    if (!r.ok) { console.error(data); return res.status(500).json({ error: data.error?.message || "failed" }); }
    res.json({ text: data.choices[0].message.content });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "failed" });
  }
});

app.listen(3000, () => console.log("Open http://localhost:3000"));
