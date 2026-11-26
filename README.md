# CareerOS — Career & Job Search Suite

A free, static, browser-based career management application designed for GitHub Pages. It preserves the original job-search toolkit, Career Hub, Resume Tailoring Tool and LinkedIn Post Maker, and adds an evidence-led job-fit review, interview practice, LinkedIn carousel creation, PWA support and cross-tool data backup.

**Live deployment target:** GitHub Pages  
**Technology:** HTML, CSS and vanilla JavaScript  
**Backend required:** No  
**User account required:** No

## Application pages

| File | Purpose |
|---|---|
| `index.html` | CareerOS dashboard and pipeline summary |
| `toolkit.html` | Original CV/job keyword match, application tracker and outreach toolkit |
| `career-hub.html` | Original job pipeline, recruiter contact manager, messages, LinkedIn profile helper and 9-step plan |
| `job-fit.html` | Evidence-led job suitability assessment, essential criteria review, risks and optional multi-provider AI review |
| `resume-builder.html` | Original resume tailoring, templates, editing, cover-letter and interview preparation workflow |
| `interview-coach.html` | Interview question bank, STAR answer builder, local rubric, saved practice and optional AI feedback |
| `linkedin-post.html` | Original LinkedIn post generator, post graphics, banner and content plan |
| `carousel-studio.html` | Multi-slide LinkedIn carousel builder and PNG export |
| `data-tools.html` | Cross-tool JSON backup and restore |
| `manifest.webmanifest`, `sw.js`, `icon.svg` | PWA install metadata, offline shell and app icon |

## Deploy to GitHub Pages

1. Download and extract the release ZIP.
2. Open the target GitHub repository.
3. Upload **the contents** of the extracted `CareerOS-GitHub-Final` folder to the repository root (not the enclosing folder).
4. Commit to the branch selected for GitHub Pages, usually `main`.
5. Open **Settings → Pages**.
6. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
7. Wait for the GitHub Pages deployment to finish and open the published URL.

The root `index.html` is the dashboard entry point. If the repository is published as a project site, GitHub Pages serves it at `https://<username>.github.io/<repository>/`.

## How to use

- Start at the dashboard.
- Track applications and recruiter follow-ups in Career Hub.
- Use CV Match for keyword comparison, then use Job Fit AI for a deeper evidence review.
- Tailor your resume in Resume Studio and review every generated statement.
- Practise competency answers in Interview Coach using the STAR framework.
- Draft professional posts and banners in LinkedIn Studio; use Carousel Studio for slide sequences.
- Use Data Tools to export a portable backup before clearing browser data or moving devices.

## AI provider configuration

AI actions are optional and require the user's own API key. The AI pages currently offer provider choices where implemented (Gemini, OpenAI and Anthropic in Job Fit / Interview Coach; the original LinkedIn Post Maker uses Gemini). The key is held in the page's JavaScript memory and is not deliberately written to local storage by these new pages.

**Security note:** Browser-only AI integrations cannot keep an API key secret from the person using the browser or from browser extensions/devtools. Use a dedicated key with strict provider-side limits and monitor usage. For a public multi-user production service, route AI calls through a serverless backend with authentication, rate limits and secret storage. Do not commit API keys to GitHub.

## Privacy and data

- Career Hub data is stored in browser local storage under `ch`.
- The original toolkit and LinkedIn studio also use browser local storage.
- Data Tools exports CareerOS-owned local storage keys into a JSON backup. Treat that file as sensitive because it can contain CV text, contact details and job-search notes.
- No server-side account or cloud sync is included.
- Clearing browser data may permanently remove local records if no backup exists.
- Optional AI calls send the text required for the selected action to the chosen AI provider. Do not send confidential employer, client or third-party personal data without authorisation.

## Important limitations

- Keyword match percentages and job-fit indicators are heuristic decision aids, not actual ATS scores, hiring probabilities or guarantees.
- AI-generated content must be reviewed. The application is designed not to encourage fabricated achievements, credentials or metrics.
- LinkedIn publishing remains user-controlled. The app does not scrape LinkedIn or auto-send connection requests or posts.
- Offline mode caches the static application shell. AI provider calls, external links and some browser export functions require internet access or browser support.
- PDF output uses the browser's print-to-PDF workflow where the original tool provides it. Word export and document formatting should be checked in Microsoft Word or LibreOffice.
- The browser-only application does not provide multi-device sync or team collaboration.

## Testing

A lightweight smoke test is provided at `tests/smoke-test.mjs`. Run:

```bash
node tests/smoke-test.mjs
```

The GitHub Actions workflow runs the smoke test on pushes and pull requests. The smoke test validates the expected application files, internal page links, manifest and JavaScript parseability. It is not a substitute for manual browser testing of AI calls, downloads, PWA installation or real user workflows.

## Release

See [CHANGELOG.md](CHANGELOG.md) for release notes.

## License

MIT. See [LICENSE](LICENSE).
