# Free Job Search Toolkit

Three free tools for job seekers, built with AI and shared to spread knowledge. They run in your browser: no sign-up, no server, no tracking.

**Live site:** `https://venkatbanday.github.io/job-search-toolkit/` (after you turn on GitHub Pages, see below)

| Page | What it does |
|---|---|
| `index.html` | **Toolkit home.** CV vs job keyword match, application tracker, outreach messages, and a guide on approaching recruiters |
| `resume-builder.html` | **Resume Tailoring Tool.** Upload or paste a resume and a job description, confirm your skills, get a tailored resume in four templates, download Word, PDF or text |
| `linkedin-post.html` | **LinkedIn Post Maker.** Write posts with AI, make the image, open LinkedIn with your text ready, plan a week of content |

## Resume Tailoring Tool

1. Upload a `.docx`, `.pdf` or `.txt` file, or paste your resume text. Paste the job description.
2. Click **Analyse match**. Missing keywords are split into **skills** (tools, methods, certifications) and **job words** (ordinary words).
3. Tick only the skills that are **true for you**, and add a short phrase on where you used each. Job words are used automatically to reword your existing sentences where truthful.
4. Click **Create with AI** (needs a free Gemini key), or **Copy prompt** and paste it into any AI chat, then paste the reply into the text box.
5. Choose a template (Classic, Modern, Executive, Compact), edit the text, and download **Word**, **PDF** (browser print) or **text**.

It also shows keyword coverage, the keywords still missing, and simple format checks (contact details, headings, length, numbers).

**It never adds a skill you did not confirm, and the AI is told to use only facts in your resume.** There is no honest way to reach "100% ATS": no real ATS gives a percentage. Read the result and keep only what you can defend at interview.

## LinkedIn Post Maker

- Enter your name, role, audience and LinkedIn profile link or id (stored only in your browser).
- Add your real facts or idea, pick post type, tone, length, hashtags and emojis, and get three versions.
- Make a designed image (four styles, three sizes, optional photo) and download it as a PNG.
- **Copy text and open LinkedIn** opens LinkedIn's own composer. Attach the image and press Post.
- Create a seven-day content plan from the same facts.

**Why there is no one-click auto-post:** posting for you needs a LinkedIn-approved integration with your login, which a free static page cannot do safely, and bots risk account restrictions. The tool also cannot read your profile from LinkedIn.

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

1. Create a repository, for example `job-search-toolkit`.
2. Upload `index.html`, `resume-builder.html`, `linkedin-post.html` and this `README.md` to the main branch, keeping them in the same folder.
3. Open **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute the site is at `https://<your-username>.github.io/<repo-name>/`.
5. After changing a file, refresh with Ctrl+F5 to avoid seeing an old cached copy.

## Limits

- Keyword matching is a guide, not a real ATS score.
- Scanned PDFs and old `.doc` files cannot be read. Paste the text instead.
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
