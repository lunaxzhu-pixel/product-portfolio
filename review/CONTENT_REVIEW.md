# Five-case portfolio review

## Phase 1: implementation audit

- Static HTML, vanilla JavaScript, plain CSS, no framework or build step.
- `index.html` originally hardcoded three large work cards and two smaller supporting cards. All five detailed views already used a shared `cases` object.
- Navigation uses page anchors and case/role hashes. Detail views use a native `<dialog>` with Escape, backdrop close, focus restoration, and role-return behavior.
- The design uses locally hosted DM Sans and Manrope, a green/cream palette, editorial typography, responsive grid cards, and a scrolling career timeline.
- Assets include the portrait, favicon, fonts, and existing product resume. GitHub Pages serves `main` at the repository root, with `.nojekyll` and `CNAME` retained.
- The fetched live homepage and script matched the checkout at audit time. The only pre-existing workspace change was an untracked package lock; it was left untouched.

## Phase 2: changes

`case-studies.js` is the shared data source for the five full-width cards and detailed cases. Explicit ordering is VTO, sizing, Application Signals, X-Ray, internal usage platform. The fifth name follows the user's preference for descriptive public naming.

Each case has a category, headline, summary, precise ownership, three evidence points, seven narrative sections, and a distinct framework. Card and dialog diagrams use the same data and renderer. All five preserve the established style and mobile summary-first ordering. Details include expandable frameworks and previous/next navigation.

Narrative sections: Problem, Ownership, Insights, Product Decisions, Execution, Outcomes, Lessons & Tradeoffs.

The existing AWS hash is retained. Legacy renamed-project links are resolved to the matching case. Career links and summaries, metadata, target-role copy, and the headline case count are synchronized. About and Point of View are preserved.

## Disclosure decisions

- Explicitly cleared by the user: 13 competitor benchmarks, 500K+ experiment customers, 100–200 bps category-adjusted sizing gap, and approximately 10% pilot gap closure / 10–20 bps reduction.
- User directed descriptive naming and qualitative internal-team scope and approval wording. These replace the internal platform name, team count, and specific executive levels in public-facing narratives.
- Financial claims remain omitted pending individual clearance. Historical publication and private notes are not treated as fresh approval.
- VTO has no claimed conversion improvement, broad launch, or return reduction.
- Sizing shows pilot results without implying global rollout or invented model implementation.
- Application Signals separates initial preview/GA from subsequent cross-service bundling and shared product ownership from independent pricing/cost scope.
- X-Ray separates redesign leadership from later outcomes observed after transition out of AWS.
- Internal-platform commitments and later realized value remain distinct.

## Public product sources

- [Preview announcement](https://aws.amazon.com/about-aws/whats-new/2023/11/amazon-cloudwatch-applications-signals-observe-preview/) — November 30, 2023.
- [GA announcement](https://aws.amazon.com/about-aws/whats-new/2024/06/amazon-cloudwatch-application-signals-application-monitoring/) — June 10, 2024.
- [CloudWatch pricing](https://aws.amazon.com/cloudwatch/pricing/) — public three-tier pricing example and trial/usage allowances; it does not verify personal ownership or historical approval details.

The supplied October 2024 bundle milestone was not independently corroborated by an official source in this review. Public copy uses “After GA” and does not present later bundling as an initial launch feature.

## Release boundary

The user authorized pushing and publishing the reviewed revision on October 24, 2026. The previously published resume remains unchanged and still contains details omitted from website narratives. Publication authorization does not clear those claims for reuse in the new narratives. Detailed withheld claims remain only in ignored local review notes.

## Phase 3: validation

Use `npm run check`, start the local server, and run `.venv/bin/python review/check_portfolio.py`. The suite covers the requested ordering, five dialogs, seven narrative sections, tailored expandable diagrams, previous/next navigation, role links, legacy hashes, keyboard focus, mobile navigation, assets, resume delivery, clipboard, responsive overflow, and console errors.

No lint, type-check, or build command exists. Do not install a framework or add a build pipeline solely for those checks.

Completed validation:

- `npm run check` and `git diff --check` passed.
- The Playwright suite passed at 320, 390, 600, 601, 700, 768, 800, 1024, and 1440 pixels, including all five cases, their diagrams, navigation, focus management, reduced-motion behavior, and local asset delivery.
- No JavaScript errors, console errors, failed asset requests, or horizontal overflow were reported.
- Desktop cards and mobile dialogs were visually reviewed for typography, spacing, and readable diagrams.
- About and Point of View match the starting revision; the resume PDF is byte-for-byte unchanged.
- Validation completed before publication. The user subsequently authorized publication; individual AWS financial claims remain excluded from website narratives.
