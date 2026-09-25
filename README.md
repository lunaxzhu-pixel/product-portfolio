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
- `assets/Luna-Zhu-Resume.pdf`: the original strategic-finance resume supplied for this project. Replace this file with a PM-focused version when ready, keeping the same filename.
- `assets/fonts`: self-hosted DM Sans and Manrope fonts, with their SIL Open Font Licenses.

## Strategic Trajectory

Four clickable milestones trace R.R. Donnelley → Internet Brands → AWS → Amazon Fashion. Each opens a keyboard-accessible dialog with dates, responsibilities, skills, and achievements. AWS and Amazon include links to relevant case studies and a return-to-role action. On smaller screens, swipe or use the arrow controls to explore the timeline. Role detail links can be shared locally with `#role-rrd`, `#role-internet-brands`, `#role-aws`, and `#role-amazon`.

## Content sources and editorial decisions

Primary sources: `Downloads/LunaZhu Resume_Strategic Finance.pdf` and the [supplied project presentation](https://docs.google.com/presentation/d/1bLC-m8F8lt2LuWG3BswLLjb3vwQher_eRsiDI-bkJj0/edit).

The [reference portfolio](https://saadmkhan.com/index.html) informed the navigation, career exploration, and case-study structure. The visual design and code are original.

- Positioning follows the requested senior product management and AI strategy focus.
- Employment dates and titles follow the resume. AWS end date uses February 2025 from the resume rather than January 2025 from the deck.
- The $1B+ figure is explicitly a five-year AWS revenue projection.
- VTO engagement (+10%) and conversion-correlated behavior (+25%) metrics come from the resume. The latter is not described as a purchase conversion lift.
- The VTO case follows the deck's detailed account of an internal pilot that did not proceed to broad launch due to fit accuracy and return-rate limitations. It does not claim a successful commercial launch.
- All `xx` placeholders and unfinalized sizing impact metrics are omitted.
- AWS margin improvement is identified as broader portfolio work, not attributed exclusively to the featured launch.
- Illustrations are conceptual artwork, not product screenshots or measured data charts.
- Contact email and the original resume are included. No LinkedIn profile, portrait, or additional personal details were invented.

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
