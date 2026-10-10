# Luna Zhu — Personal Portfolio

A responsive, standalone portfolio focused on senior product management, AI strategy, growth, and monetization. Built with HTML, CSS, and vanilla JavaScript; no build step or runtime dependencies. Fonts and resume are included locally.

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
├── script.js              Role/case-study content and interactions
├── assets/
│   ├── Luna-Zhu-Resume.pdf
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
- `npm run check`: check JavaScript syntax.
- `npm run test:browser`: run the optional browser checks after setting up the test environment below.

Changes appear after refreshing the browser. No compilation or build step is required.

## Edit

- `index.html`: homepage text, career milestone cards, contact information, and resume links.
- `script.js`: career role details, three case-study narratives, dialog behavior, timeline scrolling, mobile navigation, and email copy.
- `styles.css`: responsive layouts, colors, and typography.
- `assets/Luna-Zhu-Resume.pdf`: the updated `Luna Zhu Resume_Product.pdf` supplied on October 9, 2026. All resume buttons link to this file.
- `assets/fonts`: self-hosted DM Sans and Manrope fonts, with their SIL Open Font Licenses.

## Profile photo

The homepage opens with Luna Zhu, the positioning line “AI Product Strategy | Pricing & Monetization,” the supplied introduction, and a larger oval standalone portrait from `assets/luna-zhu.png`. The photo has no surrounding card; the original image is preserved.

To update the photo, replace `assets/luna-zhu.png` or update the image source in `index.html`. Adjust `.profile-photo`'s `object-position` in `styles.css` to change its placement within the frame.

## Strategic Trajectory


Four clickable milestones trace R.R. Donnelley → Internet Brands → AWS → Amazon Fashion in progressively larger cards. Each opens a keyboard-accessible dialog with dates, responsibilities, skills, and achievements. AWS and Amazon include links to relevant case studies and a return-to-role action. On smaller screens, swipe or use the arrow controls to explore the timeline. Role detail links can be shared locally with `#role-rrd`, `#role-internet-brands`, `#role-aws`, and `#role-amazon`.

## Point of View and LinkedIn

The `#writing` section features two published LinkedIn articles with summaries, publication dates, and direct links to the originals:

- [NVIDIA Is Financing the AI Boom. Can AI Products Create Enough Value?](https://www.linkedin.com/pulse/nvidia-financing-ai-boom-can-products-create-enough-value-luna-zhu-vkj2c) — September 17, 2026. Featured article and short attributed quotation.
- [The Best Products Help Customers Make Better Decisions — Lessons Across Commerce, Cloud, and AI](https://www.linkedin.com/pulse/best-products-help-customers-make-better-decisions-lessons-luna-zhu-zly4c) — August 12, 2026.

Article cards live in `index.html`; their styles use `writing-` classes in `styles.css`. Links open the original LinkedIn articles in a new tab. The writing section, contact section, and footer link to the supplied [LinkedIn profile](https://www.linkedin.com/in/lunazhu555). Navigation includes a Point of View anchor. The editorial hierarchy draws inspiration from the [reference writing section](https://rachellemaranon.dev/#writing), using the portfolio's existing visual style.

## Content sources and editorial decisions

The updated `Luna Zhu Resume_Product.pdf`, supplied October 9, 2026, is the reference for public numeric detail and rollout status. The project presentation informs the qualitative case-study structure.

- Exact experiment participation, survey size, seller counts, detailed revenue forecasts, growth rates, and return-volume/cost estimates omitted from the updated resume are also omitted from the website and role dialogs.
- Resume-retained metrics remain, including competitor benchmarks, the diagnosed sizing-related return-rate gap, gross-margin improvement, and earlier pricing and SaaS achievements.
- AWS observability is described as a billion-dollar-scale opportunity; revenue potential is distinct from realized revenue.
- Virtual try-on remains a large-scale experiment with broader rollout jointly paused with senior leadership after the return-rate guardrail was triggered.
- Sizing reached a top-seller pilot. Broader U.S. rollout and potential international expansion are prospective. The diagnosed sizing gap is not an achieved return-rate reduction.
- All three project cards include sanitized decision diagrams and prominent buttons opening detailed case studies. Diagrams reconstruct the decision logic rather than reproducing internal interfaces.
- Mobile shows the latest career role first; desktop and laptop retain chronological order.
- The resume asset is replaced with the supplied PDF unchanged. Its link includes a version query to bypass older browser caches.
- Contact details, articles, LinkedIn links, portrait, and case-study interactions are preserved.

## Hosting

The site is ready for any static host. Publish `index.html`, `styles.css`, `script.js`, and the `assets` directory at the same level. The ZIP alongside this project contains these files plus this README. There is no backend, database, analytics, or contact-form service to configure. Contact uses email.

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

`review/check_portfolio.py` checks five viewport widths (320, 390, 768, 1024, and 1440px), horizontal overflow, all case dialogs, Escape/focus restoration, direct case URLs, four career milestone dialogs, related case-study navigation, keyboard activation, mobile timeline scrolling, internal anchors, the PDF, mobile navigation, clipboard behavior, and JavaScript errors.

Desktop, mobile, and case-study screenshots are stored in `review/`. Review files are excluded from the deployment ZIP.
