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
- `assets/Luna-Zhu-Resume.pdf`: the updated `LunaZhu Resume_Product.pdf` supplied on September 30, 2026. All resume buttons link to this file.
- `assets/fonts`: self-hosted DM Sans and Manrope fonts, with their SIL Open Font Licenses.

## Profile photo

The homepage opens with Luna Zhu, the positioning line “AI Product Strategy | Growth | Pricing & Monetization,” the supplied introduction, and a larger oval standalone portrait from `assets/luna-zhu.png`. The photo has no surrounding card; the original image is preserved.

To update the photo, replace `assets/luna-zhu.png` or update the image source in `index.html`. Adjust `.profile-photo`'s `object-position` in `styles.css` to change its placement within the frame.

## Strategic Trajectory


Four clickable milestones trace R.R. Donnelley → Internet Brands → AWS → Amazon Fashion in progressively larger cards. Each opens a keyboard-accessible dialog with dates, responsibilities, skills, and achievements. AWS and Amazon include links to relevant case studies and a return-to-role action. On smaller screens, swipe or use the arrow controls to explore the timeline. Role detail links can be shared locally with `#role-rrd`, `#role-internet-brands`, `#role-aws`, and `#role-amazon`.

## Point of View and LinkedIn

The `#writing` section features two published LinkedIn articles with summaries, publication dates, and direct links to the originals:

- [NVIDIA Is Financing the AI Boom. Can AI Products Create Enough Value?](https://www.linkedin.com/pulse/nvidia-financing-ai-boom-can-products-create-enough-value-luna-zhu-vkj2c) — September 17, 2026. Featured article and short attributed quotation.
- [The Best Products Help Customers Make Better Decisions — Lessons Across Commerce, Cloud, and AI](https://www.linkedin.com/pulse/best-products-help-customers-make-better-decisions-lessons-luna-zhu-zly4c) — August 12, 2026.

Article cards live in `index.html`; their styles use `writing-` classes in `styles.css`. Links open the original LinkedIn articles in a new tab. The writing section, contact section, and footer link to the supplied [LinkedIn profile](https://www.linkedin.com/in/lunazhu555). Navigation includes a Point of View anchor. The editorial hierarchy draws inspiration from the [reference writing section](https://rachellemaranon.dev/#writing), using the portfolio's existing visual style.

## Content sources and editorial decisions

Current sources (reviewed September 30, 2026): `Downloads/LunaZhu Resume_Product.pdf` and the [updated project presentation](https://docs.google.com/presentation/d/1bLC-m8F8lt2LuWG3BswLLjb3vwQher_eRsiDI-bkJj0/edit?slide=id.g3f673470032_0_55#slide=id.g3f673470032_0_55), last modified September 29, 2026. The linked AWS problem/approach/outcome slide was read directly as well as the complete deck text. The user explicitly selected the PowerPoint as the source for each case study.

The [reference portfolio](https://saadmkhan.com/index.html) informed the navigation, career exploration, and case-study structure. The visual design and code are original.

- Positioning follows the requested senior product management and AI strategy focus. The new PDF retains a strategic-finance headline, while its updated experience emphasizes hands-on product work.
- Employment dates and titles follow the resume. AWS end date uses February 2025 from the resume rather than January 2025 from the deck overview.
- The $1B+ figure is a five-year AWS observability revenue projection, not realized revenue. The AWS case follows the deck’s portfolio framing, adoption figures, operating-margin improvement, and lifecycle growth result.
- VTO now emphasizes 13 competing offerings, a 300-customer survey, four Figma prototype iterations, open-source model evaluation, and a 500K+ customer Weblab experiment.
- The prior +10% engagement and +25% behavioral-lift claims are removed because they are not finalized in the updated source materials. Purchase-intent improvements are described qualitatively.
- VTO remains an experiment with a paused full rollout after return-rate guardrails exposed fit-accuracy gaps. No commercial launch is implied.
- Sizing distinguishes the initial 400 bps return gap from the 100–200 bps gap isolated after category-mix normalization. Neither is presented as an achieved return-rate reduction.
- The sizing case uses 30K+ for the analyzed seller population and subsequent adoption, following the deck. The 100M+ excess return units and $200M–$500M cost estimate quantify the identified problem, separate from the deck’s reported recovery of tens of millions in annual operating margins.
- **Source precedence:** the resume describes a top-seller pilot, while the deck describes rollout across 30K+ sellers. Following the user’s subsequent instruction to use the PowerPoint for each case study, the sizing case, homepage teaser, and related role achievement now follow the deck’s rollout account. EU/JP expansion remains future scope.
- Selected work is ordered vertically: GenAI Virtual Try-On (featured), AWS monetization, then FBA Global Size Intelligence. Each project highlights three metrics and three key decisions. The accompanying concepts illustrate the try-on shopping flow, observability tiered pricing, and garment-to-size ML mapping.
- Each case study starts with The problem, The approach, and The outcome, followed by a separate Product Development Lifecycle section. Six numbered steps preserve Discover, Define, Design, Build, Launch, and Measure from the presentation. Resume-only service repricing details remain in the career role rather than the AWS case.
- All `xx` draft placeholders are omitted. Case-study metrics follow the supplied presentation; diagnosed gaps, costs, projected revenue, and achieved outcomes are labeled separately.
- Point of View articles, LinkedIn links, the compact dark-green photo card, and career interactions are preserved.
- Illustrations are conceptual artwork, not product screenshots or measured data charts.
- Contact email, the updated resume, and the supplied LinkedIn profile are included. The profile card uses the supplied portrait.

## Hosting

The site is ready for any static host. Publish `index.html`, `styles.css`, `script.js`, and the `assets` directory at the same level. The ZIP alongside this project contains these files plus this README. There is no backend, database, analytics, or contact-form service to configure. Contact uses email.

The current preview is local to this computer and is not publicly hosted.

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
