# Luna Zhu — Personal Portfolio

A responsive, standalone portfolio focused on Senior and Principal Product Manager roles in AI/ML products, cloud platforms, and monetization. Built with HTML, CSS, and vanilla JavaScript; no build step or runtime dependencies. Fonts are included locally; the public resume has been removed.

## Preview

The local codebase is `/Users/lunaaaaa/luna-portfolio`. Open that folder in your code editor.

With Node.js/npm and Python 3 installed, run:

```sh
cd /Users/lunaaaaa/luna-portfolio
npm run dev
```

No `npm install` is needed: the website has no npm dependencies. Stop the server with Ctrl+C. If port 4173 is already in use by an existing preview, visit that preview or stop its server first.

You can also open `index.html` directly or start the preview without npm:

```sh
cd /Users/lunaaaaa/luna-portfolio
python3 -m http.server 4173 --bind 127.0.0.1
```

Visit http://127.0.0.1:4173. The clipboard button works on localhost and HTTPS; it provides a manual-copy fallback when clipboard access is unavailable.

## Project structure

```text
luna-portfolio/
├── index.html             Homepage and career milestone cards
├── styles.css             Styling and responsive layouts
├── case-studies.js        Shared case content, evidence, and diagram data
├── script.js              Card/diagram renderers, role content, and interactions
├── assets/
│   ├── favicon.svg
│   └── fonts/             Local fonts and licenses
├── review/
│   ├── check_portfolio.py Browser checks
│   └── requirements.txt   Optional test dependency
├── package.json           Development commands
├── .editorconfig          Editor defaults
├── .gitignore
└── README.md
```

This folder has its own local Git repository. Generated screenshots, local environments, and dependencies are excluded from version control.

## Development commands

- `npm run dev` or `npm start`: serve the portfolio locally at port 4173.
- `npm run check`: check both JavaScript files.
- No lint, type-check, or build commands are configured; the site has no compilation step.
- `npm run test:browser`: run the optional browser checks after setting up the test environment below.

Changes appear after refreshing the browser. No compilation or build step is required.

## Edit

- `index.html`: homepage text, career milestone cards, and contact information.
- `case-studies.js`: ordered case content, ownership, evidence, diagrams, milestones, and public source links.
- `script.js`: shared card/diagram renderers, career details, dialog navigation, timeline scrolling, mobile navigation, and email copy.
- `styles.css`: responsive layouts, colors, and typography.
- `assets/fonts`: self-hosted DM Sans and Manrope fonts, with their SIL Open Font Licenses.

## Profile photo

The homepage opens with Luna Zhu, the positioning “AI product experiences. Cloud platforms. Better customer decisions.”, an introduction connecting discovery, technical tradeoffs, and unit economics, and an oval portrait from `assets/luna-zhu.png`. The photo has no surrounding card; the original image is preserved.

To update the photo, replace `assets/luna-zhu.png` or update the image source in `index.html`. Adjust `.profile-photo`'s `object-position` in `styles.css` to change its placement within the frame.

## Strategic Trajectory


Four clickable milestones trace R.R. Donnelley → Internet Brands → AWS → Amazon Retail in progressively larger cards. Each opens a keyboard-accessible dialog with dates, responsibilities, skills, and achievements. AWS and Amazon include links to relevant case studies and a return-to-role action. On smaller screens, swipe or use the arrow controls to explore the timeline. Role detail links can be shared locally with `#role-rrd`, `#role-internet-brands`, `#role-aws`, and `#role-amazon`.

## Point of View and LinkedIn

The `#writing` section features two published LinkedIn articles with summaries, publication dates, and direct links to the originals:

- [NVIDIA Is Financing the AI Boom. Can AI Products Create Enough Value?](https://www.linkedin.com/pulse/nvidia-financing-ai-boom-can-products-create-enough-value-luna-zhu-vkj2c) — September 17, 2026. Featured article and short attributed quotation.
- [The Best Products Help Customers Make Better Decisions — Lessons Across Commerce, Cloud, and AI](https://www.linkedin.com/pulse/best-products-help-customers-make-better-decisions-lessons-luna-zhu-zly4c) — August 12, 2026.

Article cards live in `index.html`; their styles use `writing-` classes in `styles.css`. Links open the original LinkedIn articles in a new tab. The writing section, contact section, and footer link to the supplied [LinkedIn profile](https://www.linkedin.com/in/lunazhu555). Navigation includes a Point of View anchor. The editorial hierarchy draws inspiration from the [reference writing section](https://rachellemaranon.dev/#writing), using the portfolio's existing visual style.

## Selected Work: five cases

The site retains its static HTML/CSS/JavaScript architecture and editorial design. `case-studies.js` provides the single content model for cards and dialogs; `caseOrder` determines the visible sequence:

1. GenAI Virtual Try-On — `#case-vto`
2. Global Size Intelligence — `#case-sizing`
3. CloudWatch Application Signals — `#case-aws`
4. AWS X-Ray Repricing — `#case-xray`
5. AWS Internal Usage Platform — `#case-internal-platform`

The fifth project uses a descriptive public name at the user's direction. A legacy project hash and `#case-application-signals` remain supported for existing inbound links.

All five use the same full-width editorial card, ownership summary, three evidence points, and case-study CTA. The work index links to individual cards. Cards place the diagram on the left on desktop and the summary first on mobile. Each project has its own decision visualization: quality gate, combined research evidence, parallel product/commercial tracks, charging-model comparison, or adoption/value sequence.

Details retain the native accessible dialog and add an expandable framework and previous/next case navigation. Closing restores the opening trigger. Role-to-case navigation still returns to the role. Existing hash links, Escape handling, keyboard focus, mobile navigation, and reduced-motion behavior are retained.

## Content and disclosure decisions

The current work is authorized for the review branch and a shareable Vercel Preview only. The earlier production release was separately authorized; do not merge to main or update GitHub Pages without new explicit approval.

- The user cleared 13 competitor benchmarks, the 500K+ customer experiment, the 100–200 basis-point category-adjusted sizing gap, and approximately 10% pilot gap closure / 10–20 basis-point reduction.
- The user selected descriptive naming and qualitative internal-team scope and approval wording for AWS work. Those choices are applied to cards, dialogs, and career references.
- Financial outcomes and other uncleared internal measures are omitted from the public case data, including hidden data or alternate metric fields.
- VTO describes disciplined experimentation and a paused broader rollout, without claiming conversion lift or return reduction.
- Sizing distinguishes the baseline gap from the achieved pilot result and future expansion. No model architecture or accuracy is invented.
- Application Signals distinguishes shared product ownership from independent commercial strategy. Public preview and GA dates link to AWS announcements. Later bundling is distinct from initial GA; the exact bundle date is not asserted without public corroboration.
- X-Ray distinguishes redesign leadership from performance observed after the move out of AWS. Later financial outcomes are omitted.
- The internal platform case distinguishes customer commitments, platform delivery, adoption, and later value realization.
- Point of View, About, portrait, fonts, and existing external links are preserved. Resume download functionality is removed in the final polish.

The public-safe [content review](review/CONTENT_REVIEW.md) records the audit and editorial decisions. Detailed outstanding disclosure items are kept in the ignored `.private-review/` directory, not in website code or tracked documentation.

### Resume removal

The current review branch has no resume CTA or PDF in its deployable assets. The former resume path and common filename variants must return 404 on every new Preview. Do not restore a resume or add a replacement download without the owner's instruction.

The production GitHub Pages site, older immutable Vercel deployments, Git history, and third-party caches may retain earlier copies. Removing the current file does not purge those locations. Production and historical cleanup require separate authorization; see the ignored local exposure inventory for verified URLs. Files outside this repository are untouched.

## Hosting

The site is ready for any static host. Publish `index.html`, `styles.css`, `case-studies.js`, `script.js`, and the `assets` directory at the same level. There is no backend, database, analytics, or contact-form service to configure. Contact uses email.

### GitHub Pages

The publishing repository is [lunaxzhu-pixel/product-portfolio](https://github.com/lunaxzhu-pixel/product-portfolio). The site needs no build step, and `.nojekyll` tells GitHub Pages to serve the static files directly.

To publish:

1. Push the local `main` branch with `git push -u origin main`.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose **main** and **/(root)**, and click **Save**.
4. Wait for the Pages deployment to finish in the repository's **Actions** tab.

Once deployed, the site URL is https://lunaxzhu-pixel.github.io/product-portfolio/. Relative asset links support this repository path. Future pushes to `main` automatically publish updates after Pages is enabled.

### Custom domain: luna-zhu.com

The root `CNAME` file specifies `luna-zhu.com`. After pushing this file, confirm **Settings → Pages → Custom domain** is set to `luna-zhu.com` and saved before adding the DNS records below.

In Cloudflare, select **luna-zhu.com → DNS → Records** and add these records with **DNS only** (gray cloud) and **TTL: Auto**:

| Type | Name | Content |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | lunaxzhu-pixel.github.io |

Once GitHub's DNS check succeeds and its certificate is issued, enable **Enforce HTTPS** in Pages settings. DNS propagation and certificate provisioning can take up to 24 hours. The resulting website address is https://luna-zhu.com/; GitHub Pages also redirects `www.luna-zhu.com` to it. Keep `CNAME` in future deployments.

## Verification

For the optional browser checks on macOS, install Google Chrome in its default Applications location, start the preview in one terminal, then run in a second terminal:

```sh
cd /Users/lunaaaaa/luna-portfolio
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r review/requirements.txt
npm run test:browser
```

The browser test script currently uses the standard macOS Chrome path; adjust `executable_path` for other operating systems.

`review/check_portfolio.py` checks nine viewport widths (320, 390, 600, 601, 700, 768, 800, 1024, and 1440px), horizontal overflow, all five case dialogs, Escape/focus restoration, direct case URLs, four career milestone dialogs, related case-study navigation, keyboard activation, mobile timeline scrolling, internal anchors, resume CTA removal and old-path 404 responses, mobile navigation, clipboard success and fallback behavior, reduced-motion keyboard interaction, five-project ordering, expandable decision diagrams, case pagination, legacy hashes, focus containment, disclosure-safe case data, asset responses, and JavaScript errors.

Desktop, mobile, and case-study screenshots are stored in `review/`. Review files are excluded from the deployment ZIP.

### Lifecycle readability

Each detailed case retains six stages with contextual bullet headings, typically two or three points per stage. The central decision is highlighted, and lifecycle jump/return controls preserve keyboard focus and reduced-motion scrolling. The executive overview and Selected Work cards remain unchanged. Set `PORTFOLIO_BASE_URL` to validate a deployed Preview with the existing browser suite.
