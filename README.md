::: {align="center"}
# 💜 TrishaQA --- Report Studio

`<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=6D4AFF&center=true&vCenter=true&width=700&lines=Your+QA+Reporting+Assistant;Turn+testing+findings+into+clear+reports;Bug+Reports+%E2%80%A2+Improvements+%E2%80%A2+Acceptance+Criteria" alt="Animated typing introduction" />`{=html}

```{=html}
<p>
```
`<b>`{=html}A simple AI-powered QA report generator for clearer, more
consistent testing documentation.`</b>`{=html}
```{=html}
</p>
```
```{=html}
<p>
```
`<img src="https://img.shields.io/badge/HTML5-Frontend-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />`{=html}
`<img src="https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />`{=html}
`<img src="https://img.shields.io/badge/JavaScript-Logic-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />`{=html}
`<img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />`{=html}
`<img src="https://img.shields.io/badge/Express-API-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />`{=html}
`<img src="https://img.shields.io/badge/Groq-AI-F55036?style=for-the-badge" alt="Groq AI" />`{=html}
```{=html}
</p>
```
:::

------------------------------------------------------------------------

## ✨ About the Project

**TrishaQA --- Report Studio** helps QA testers turn testing
observations into structured bug reports and improvement reports. Enter
the issue in the Form tab or describe it naturally in the Chat tab, then
let the AI organize the details into a report.

The interface uses a customizable accent color, light/dark theme,
screenshot previews, and separate report panels to keep generated
reports easy to read and copy.

## 🚀 Features

-   📝 **Form Mode** --- Enter the issue, expected behavior, steps or
    test data, and evidence notes.
-   💬 **Chat Mode** --- Describe an issue conversationally and answer
    follow-up questions when details are missing.
-   🐞 **Bug & Improvement Reports** --- Generate structured reports
    based on the supplied information.
-   📋 **Separate Copy Buttons** --- Copy the title, description and
    reproduction steps, environment, or acceptance criteria
    individually.
-   🧭 **Independent Report Panels** --- Form reports stay in Form; Chat
    reports stay in Chat and are not inserted into the conversation.
-   🖼️ **Screenshot Evidence** --- Attach up to four images to help
    explain a problem.
-   🌎 **Environment Details** --- Add the application, URL, username,
    password, browser, and date/time.
-   🔒 **Password Handling** --- The environment password is assembled
    into the report locally and is not included in the AI prompt. Avoid
    using real account passwords; use approved test credentials.
-   🎨 **Customizable Appearance** --- Choose an accent color and switch
    between light and dark themes.
-   📱 **Responsive Layout** --- Designed to adapt to smaller screens.

## 🧰 Tech Stack

  -----------------------------------------------------------------------
  Technology                          Purpose
  ----------------------------------- -----------------------------------
  HTML                                Application structure

  CSS                                 Styling, responsive layout, themes,
                                      and animations

  JavaScript                          UI interactions, report parsing,
                                      screenshots, and copy actions

  Node.js                             Server runtime

  Express                             Serves the frontend and exposes the
                                      generation endpoint

  Groq API                            Generates report content using the
                                      configured language or vision model
  -----------------------------------------------------------------------

## 📂 Project Structure

``` text
trishaqa/
├── public/
│   └── index.html       # Frontend UI and client-side logic
├── server.js            # Express server and Groq API integration
├── .env                 # API key and optional model settings (do not commit)
├── .gitignore
└── package.json
```

## ⚙️ Getting Started

### 1. Requirements

-   Node.js and npm
-   A Groq API key
-   Internet access for the configured AI API and the animated typing
    banner

### 2. Install dependencies

``` bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

``` env
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.3-70b-versatile
GROQ_VISION_MODEL=meta-llama/llama-4-scout-17b-16e-instruct
```

Use model IDs supported by your Groq account. Keep your API key private
and never place it in frontend code or commit it to GitHub.

### 4. Start the application

``` bash
npm start
```

Open:

``` text
http://localhost:3000
```

## 🧪 How to Use

### Form Mode

1.  Select **Bug**, **Improvement**, or **Let the tool decide**.
2.  Describe what happened and where it happened.
3.  Add the expected behavior, steps/test data, and evidence notes when
    available.
4.  Optionally expand **Environment Details** and enter the details you
    want included.
5.  Attach up to four screenshots if useful.
6.  Click **Generate report**.
7.  Copy each report section using its own copy button.

### Chat Mode

1.  Open the **Chat** tab.
2.  Describe the issue in your own words.
3.  Answer any short follow-up questions.
4.  When enough details are available, the report appears in the
    separate **Generated Report** panel below the chat.
5.  Use the copy buttons to copy individual sections.

**Note:** Form and Chat maintain separate report panels. Clearing the
Form clears its fields and report only; it does not clear the Chat
conversation or Chat report.

## 📄 Generated Report Sections

A generated report contains these sections:

1.  **Title** --- A concise title describing the module, page, feature,
    and issue or improvement.
2.  **Description + Steps to Reproduce** --- A short description and a
    structured table for bug reports, or improvement details for
    enhancement requests.
3.  **Environment** --- The environment values entered by the user.
4.  **Acceptance Criteria** --- One or two concise, testable criteria.

The AI should only use details provided by the tester. Review the
generated report before sharing it with a team or adding it to a
tracking system.

## 🔐 Security & Privacy Notes

-   Keep `.env` out of version control.
-   Never expose `GROQ_API_KEY` in `public/index.html` or any
    browser-side JavaScript.
-   The password field is intended for local report assembly and is not
    sent in the AI prompt by the frontend code.
-   Use test credentials rather than real personal or production
    credentials.
-   Screenshots may contain sensitive data. Remove or obscure
    confidential information before uploading.
-   AI-generated content can be inaccurate. Verify details, steps, and
    acceptance criteria before using the report.

## 🛠️ Troubleshooting

  -----------------------------------------------------------------------
  Problem                             What to check
  ----------------------------------- -----------------------------------
  Report generation fails             Confirm the server is running and
                                      `GROQ_API_KEY` is valid.

  Screenshot generation fails         Check the selected vision model and
                                      confirm the files are images.

  Chat shows a question instead of a  Provide the missing details
  report                              requested by the assistant.

  Copy button does not work           Use a supported browser context
                                      such as localhost or HTTPS, or copy
                                      the text manually.

  Animated banner does not appear     Check your internet connection or
                                      remove the animated SVG image if
                                      you prefer an offline README.
  -----------------------------------------------------------------------

## 🗺️ Possible Future Enhancements

-   Export reports to Markdown or PDF
-   Save and revisit previous reports
-   Add report templates for different QA workflows
-   Integrate with issue trackers
-   Add automated tests for report parsing and UI behavior

------------------------------------------------------------------------

::: {align="center"}
### Made for clearer QA documentation 💜

`<img src="https://capsule-render.vercel.app/api?type=waving&color=6D4AFF&height=100&section=footer" alt="Decorative animated-style purple footer" />`{=html}
:::
