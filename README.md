# Free Job Search Toolkit

Three free tools for job seekers, built with AI and shared to spread knowledge. They run in your browser: no sign-up, no server, no tracking.

**Live site:** <https://venkatbanday.github.io/Automated-job-application-and-LinkedIn-posting-app/>

| Page | What it does |
|---|---|
| `index.html` | **Toolkit home.** CV vs job keyword match, application tracker, outreach messages, a guide on approaching recruiters, and free resources |
| `resume-builder.html` | **Resume Tailoring Tool.** Upload or paste a resume and a job description, get a tailored resume, a cover letter and interview prep; four templates; download Word, PDF or text |
| `linkedin-post.html` | **LinkedIn Post Maker.** Write posts with AI, make the image and banner, open LinkedIn with your text ready, plan a week of content |

## Resume Tailoring Tool

1. Upload a `.docx`, `.pdf` or `.txt` file, or paste your resume text. Paste the job description.
2. Click **Analyse and rewrite my resume**. It works **instantly with no AI key**: it writes a tailored summary, puts your most relevant achievements first, and builds Key Skills for the job. You see your keyword match before and after.
3. **Tick the missing skills you genuinely have** (or tick all) and click **Rewrite again**. The tool weaves each one into a matching sentence of your resume where it fits, and adds it to Key Skills, so your match rises.
4. Optional: **Polish with AI** (free Gemini key) or copy the prompt into any AI chat for smoother wording. The AI adds a skill only where your experience supports it and lists the rest as gaps.
5. **Style it:** nine templates (Classic, Modern, Executive, Compact, Banner navy, Banner teal, Elegant, Bold, Minimal), your own **accent colour**, a **font** choice, an optional **coloured header banner**, and an optional round **photo** (not usual on UK CVs). Everything shows in a live preview.
6. **Edit it easily:** the Easy editor lets you change any line, switch it between Section, Role, Bullet and Text, move lines or whole sections up and down, add bullets, add sections and delete lines. A plain Text tab is there too.
7. Download **Word**, **PDF** (browser print) or **text**. The banner and photo are included in the Word file and the PDF.
8. **Cover letter:** generated from your rewritten resume and the job description, with Word and PDF download.
9. **Interview preparation:** likely questions with answer outlines from your own resume, plus YouTube links on how to attend interviews for 18 kinds of position.

You can paste a job straight from LinkedIn: page clutter (buttons, "people you can reach out to", benefits) is removed automatically, and the job title and company are filled in for you. Lines that look unsuitable for a CV (personal investments, family details) are flagged with a one-click remove button.

It also shows the keywords still missing and simple format checks (contact details, headings, length, numbers).

**It never invents employers, dates, numbers or results, and it adds a skill to your sentences only if you tick it.** There is no honest way to reach "100% ATS": no real ATS gives a percentage. Read the result and keep only what you can defend at interview.

## LinkedIn Post Maker

- Enter your name, role, audience and LinkedIn profile link or id (stored only in your browser).
- Add your real facts or idea, or paste your resume so the AI picks real achievements. Choose post type, tone, length, hashtags and emojis, and get three versions.
- Make a designed image (four styles, three sizes, optional photo) and a **LinkedIn banner** (1584×396), and download them as PNG.
- **Copy text and open LinkedIn** opens LinkedIn's own composer. Attach the image and press Post.
- Create a seven-day content plan from the same facts.

**Why there is no one-click auto-post:** posting for you needs a LinkedIn-approved integration with your login, which a free static page cannot do safely, and bots risk account restrictions. The tool also cannot read your profile from LinkedIn.

## Free resources

The Toolkit home page has a **Free resources** tab: resume tools, AI assistants, LinkedIn tools, interview practice, UK job sites, and YouTube searches for interview videos for your target role. Free plans change, so check each site.

## AI key (free)

AI features use Google's Gemini API with **your own free key**:

1. Open [aistudio.google.com](https://aistudio.google.com) and click **Get API key**.
2. Paste it into the key box on the page. It is kept in the page only, not saved.
3. The default model is `gemini-3.1-flash-lite`. If Google renames it, edit the **AI model** box.

No key? Use **Copy prompt** and paste it into any AI chat.

Free-tier limits apply, and Google may use free-tier content to improve its products. Do not paste anything confidential.

## Privacy

- Your resume, tracker rows and LinkedIn details stay in your browser (localStorage). Nothing is uploaded to this site.
- Text is sent to Google only when you use the AI button with your own key.
- Resume upload and Word export load three libraries from the jsDelivr CDN: mammoth 1.6.0, pdf.js 3.11.174 and JSZip 3.10.1. You need an internet connection for those.

## Put it on GitHub Pages

1. Create a repository, for example `Automated-job-application-and-LinkedIn-posting-app`.
2. Upload `index.html`, `resume-builder.html`, `linkedin-post.html` and this `README.md` to the main branch, keeping them in the same folder.
3. Open **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute the site is at `https://<your-username>.github.io/<repo-name>/`.
5. After changing a file, refresh with Ctrl+F5 to avoid seeing an old cached copy.

## Limits

- Keyword matching is a guide, not a real ATS score.
- Scanned PDFs and old `.doc` files cannot be read. Paste the text instead.
- Banner styles use a coloured header block, so for the strictest ATS systems use Classic, Modern or Minimal.
- Uploaded PDFs sometimes split words; check the text box before downloading.
- Images are designed cards made from text, not AI-generated photos.
- Tested in code and sample files. Please report anything that looks wrong.

## Tips for job seekers

Targeted messages and referrals usually beat mass applications. Never pay anyone to be placed in a job, and never add skills you do not have.

## About the builder

**Venkateswararao Banday**: multi-sector programme and operations leader with the right to work in the UK and India, looking for roles in London. I build apps with AI and share them free. If this helped you and you can refer me to any opportunity, I would be very grateful.

- WhatsApp: [+91 9962507575](https://wa.me/919962507575) · [+44 7391 522993](https://wa.me/447391522993)
- LinkedIn: [linkedin.com/in/venkateswararao-banday](https://www.linkedin.com/in/venkateswararao-banday)

## Licence

Choose a licence when you publish (MIT is a common choice for free tools) and add it as a `LICENSE` file.
