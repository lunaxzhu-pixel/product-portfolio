const cases = {
  "aws": {
    "kicker": "AWS · Cloud infrastructure monetization · Unit economics · Pricing & GTM",
    "title": "A growth engine, built into the pricing.",
    "intro": "I owned pricing and monetization strategy for AWS observability, shaping the early roadmap, packaging, and GTM while partnering on infrastructure economics.",
    "metric": "100+ bps",
    "metricLabel": "Gross-margin improvement achieved through architecture and unit-economics tradeoffs.",
    "sections": [
      [
        "The problem",
        "Increasingly complex enterprise cloud architectures made basic logs and metrics insufficient for fast incident triage. Datadog, Dynatrace, and New Relic offered specialized platforms, while AWS needed an end-to-end, full-stack observability solution. The challenge was to design pricing that gave small businesses and enterprise customers predictable costs while supporting cost-effective infrastructure and sustainable margins."
      ],
      [
        "The approach",
        "Aligned pricing units with customer usage and value. Used competitive TCO research, elasticity modeling, and customer interviews to shape predictable tiers, free trials, and bundles. Partnered on architecture choices to protect unit economics."
      ],
      [
        "The outcome",
        [
          "Revenue and adoption — Established a model projecting billion-dollar-scale revenue potential, with a strategy to support business partners and enterprise customers.",
          "Margin expansion — Helped achieve a 100+ basis-point gross-margin improvement by translating architecture tradeoffs into customer performance and unit economics."
        ]
      ]
    ],
    "note": "The observability opportunity is described at billion-dollar scale; exact revenue forecasts and customer counts are omitted. The 100+ basis-point figure refers to achieved gross-margin improvement.",
    "lifecycle": [
      {
        "phase": "Discover",
        "title": "Customer elasticity & competitive research",
        "body": "Combined pricing elasticity modeling with competitive total-cost-of-ownership (TCO) benchmarking against Datadog and Dynatrace across enterprise workloads. Identified demand for cost predictability and transparent usage-based billing."
      },
      {
        "phase": "Define",
        "title": "Monetization framework & value metrics",
        "body": "Built pricing, packaging, and monetization from the ground up for a portfolio with an established recurring-revenue baseline. Established six principles: cost-following pricing units, predictable billing, competitive TCO, margin-protective architecture, free-tier acquisition, and targeted migration paths."
      },
      {
        "phase": "Design",
        "title": "Architecture & pricing model pair",
        "body": "Partnered with infrastructure architects to pair efficient logging and metrics pipelines with tiered bundling. Aligned customer costs with usage scale and designed free tiers, trials, and packaging to encourage migration from third-party tools while protecting unit economics."
      },
      {
        "phase": "Build",
        "title": "Cross-functional monetization infrastructure",
        "body": "Partnered across Engineering, Product, Finance, Business Development, and Economics to deliver automated metering, billing, and invoicing infrastructure."
      },
      {
        "phase": "Launch",
        "title": "Global AWS ecosystem rollout",
        "body": "Shipped within the AWS Monitoring portfolio across global AWS regions, introducing free trials, tiered discounts, and bundle packaging."
      },
      {
        "phase": "Measure",
        "title": "Revenue & margin expansion",
        "body": "Tracked customer adoption, migration velocity, revenue, and margins. Used these measures to guide pricing, packaging, and investment decisions for a billion-dollar-scale opportunity."
      }
    ]
  },
  "vto": {
    "kicker": "Amazon Fashion · GenAI applications · Product-led growth · Experimentation",
    "title": "Less uncertainty. More confident shopping.",
    "intro": "I led GenAI virtual try-on strategy, MVP prioritization, and Figma UX prototyping, using customer research and controlled experimentation to guide the rollout decision.",
    "metric": "Large-scale",
    "metricLabel": "Controlled Weblab A/B experiment. Broader rollout was jointly paused with senior leadership after the return-rate guardrail was triggered.",
    "sections": [
      [
        "The problem",
        "Online apparel shoppers could not confidently predict fit or appearance. Fit-related returns and trial shopping pointed to unresolved customer uncertainty. Historical virtual try-on adoption data and customer research revealed friction and rendering-quality limitations in earlier experiences."
      ],
      [
        "The approach",
        "Embedded photo upload, side-by-side try-on, and add-to-cart in the existing shopping flow. Customer surveys and 13 competitor benchmarks informed MVP priorities and the decision to exclude custom avatars. Partnered with Applied Science on model selection and tested the experience in a large-scale Weblab A/B experiment."
      ],
      [
        "The outcome",
        [
          "Validated customer demand — Delivered statistically significant lifts in cart conversion, GMV, and OPS, demonstrating that GenAI visualization could increase purchase intent.",
          "Identified the critical tradeoff — The experiment also triggered the return-rate guardrail. We hypothesized that visual try-on alone was insufficient without size-and-fit guidance.",
          "Protected unit economics — Recommended pausing full rollout until fit prediction matured, avoiding a rollout that could materially increase return-related costs. Shifted the roadmap toward integrated size-and-fit capabilities and established a reusable AI evaluation framework."
        ]
      ]
    ],
    "note": "The experiment was conducted at scale. The conversion gains did not lead to a full rollout because downstream returns failed the guardrail.",
    "lifecycle": [
      {
        "phase": "Discover",
        "title": "Identifying root friction via data telemetry",
        "body": "Analyzed purchase and return datasets and historical VTO Shoes telemetry to isolate friction and visual-realism problems. Surveyed apparel shoppers to validate the sources of hesitation before adding to cart."
      },
      {
        "phase": "Define",
        "title": "Scoping the opportunity & data-driven de-scoping",
        "body": "Benchmarked 13 market solutions and internal categories. Triangulated customer research, competitor analysis, and historical adoption to de-scope custom avatars before engineering investment. Set click-through, cart conversion, GMV, and Ordered Product Sales (OPS) as success measures, with Customer-Initiated Returns as the guardrail."
      },
      {
        "phase": "Design",
        "title": "Designing the low-friction experience",
        "body": "Personally created Figma prototypes, incorporating customer insights, UX tradeoffs, and senior leadership reviews. Integrated product-page entry, photo upload, side-by-side try-on, and seamless add-to-cart into the natural shopping journey."
      },
      {
        "phase": "Build",
        "title": "Translating customer needs into technical requirements",
        "body": "Partnered with the Technical Product Manager, Applied Science, and engineering to define latency, scale, product-page integration, and measurement requirements. Compared proprietary Amazon diffusion models with open-source approaches and chose open source for pilot validation, balancing realism, development speed, latency, and infrastructure cost."
      },
      {
        "phase": "Launch",
        "title": "Large-scale Weblab experimentation",
        "body": "Ran the complete experience through a large-scale controlled Weblab A/B test, measuring engagement and purchase intent alongside downstream fulfillment impact."
      },
      {
        "phase": "Measure",
        "title": "When a positive experiment becomes a no-go",
        "body": "The experiment improved cart conversion, GMV, and OPS, but also increased Customer-Initiated Returns. I treated the return-rate movement as evidence that the product solved only part of the customer problem: visual realism helped answer “How will this look on me?” but not “Will this actually fit me?” Because fit prediction was not yet mature enough, I recommended against full rollout and shifted the roadmap toward integrated size-and-fit capabilities."
      }
    ]
  },
  "sizing": {
    "kicker": "Amazon Fashion · Global platform strategy · ML recommendations · Unit economics",
    "title": "Better fit starts with better foundations.",
    "intro": "I diagnosed sizing-related returns, defined requirements for garment-based ML mapping, and aligned U.S. Tech and China business teams around a top-seller pilot.",
    "metric": "100–200 bps",
    "metricLabel": "Net sizing-defect return-rate gap isolated after category-mix normalization.",
    "sections": [
      [
        "The problem",
        "China FBA apparel sellers had a higher return rate than domestic US sellers. Historical assumptions blamed customer trial behavior or product mix. Through SQL analysis, category-mix normalization, and benchmarking, I isolated a 100–200 basis-point sizing-related return-rate gap and validated the root causes through seller interviews and ASIN audits."
      ],
      [
        "The approach",
        "Seller interviews and ASIN audits traced the gap to inconsistent garment measurements and size mappings. I reframed the issue as a garment-based ML platform opportunity: sellers provide raw dimensions in Seller Central, and the model recommends U.S. size mappings without requiring customer body data."
      ],
      [
        "The outcome",
        [
          "Cross-organizational alignment — Aligned senior leadership, U.S. Tech, and China business teams to prioritize a previously deprioritized sizing issue and pursue garment-based ML recommendations.",
          "Pilot launch — Launched a top-seller pilot to validate usability and mapping precision and establish a path toward broader U.S. rollout.",
          "Next steps — Defined adoption, recommendation coverage, and fit-related returns as measures for broader rollout, with potential international expansion."
        ]
      ]
    ],
    "note": "The 100–200 basis-point figure is the diagnosed sizing-related return-rate gap, not an achieved reduction. The solution reached a top-seller pilot; broader rollout and international expansion remain prospective.",
    "lifecycle": [
      {
        "phase": "Discover",
        "title": "Data telemetry & qualitative root-cause isolation",
        "body": "Used SQL analysis and category-mix normalization to isolate a 100–200 basis-point sizing-related return-rate gap. Interviewed sellers and Mandarin-speaking internal teams, and audited garment measurements against size charts. Identified inconsistent measurements and size mappings as root causes."
      },
      {
        "phase": "Define",
        "title": "Reframing from regional fix to global ML platform",
        "body": "Reframed a regional compliance issue as a global ML platform opportunity. Replaced manual chart corrections with garment-measurement inputs and automated US size mapping, resolving the need without sharing raw US customer body data."
      },
      {
        "phase": "Design",
        "title": "Requirements & input taxonomy",
        "body": "Defined Seller Central input schemas, required fields, data freshness, and accuracy validation thresholds. Partnered with Applied Science to move from rule-based mapping to ML size recommendations."
      },
      {
        "phase": "Build",
        "title": "Cross-organizational alignment",
        "body": "Aligned US Tech, China regional teams, Returns, Catalog, Seller Experience, and Applied Science. Used concrete ASIN measurement discrepancies to secure senior leadership support and prioritize the Seller Central engineering work."
      },
      {
        "phase": "Launch",
        "title": "Top-seller pilot",
        "body": "Launched a top-seller pilot to evaluate usability and mapping precision, establishing a path toward broader U.S. rollout and potential international expansion."
      },
      {
        "phase": "Measure",
        "title": "Measurement framework",
        "body": "Defined seller adoption, size-chart completeness, recommendation coverage, and fit-related returns as measures to evaluate the pilot and guide broader rollout decisions."
      }
    ]
  }
};

const roles = {
  "rrd": {
    "company": "R.R. Donnelley",
    "title": "Pricing Analyst",
    "period": "August 2015 – August 2017",
    "location": "Los Angeles, CA",
    "focus": "Pricing & analytics",
    "description": "Built the analytical foundation for my work in product economics: understanding customer purchasing behavior, modeling pricing decisions, and evaluating deal profitability.",
    "skills": [
      "Statistical modeling",
      "Scenario analysis",
      "Pricing strategy",
      "Oracle Database"
    ],
    "achievements": [
      "Built statistical pricing models and scenario simulations to optimize deal profitability.",
      "Analyzed customer purchasing trends in Oracle Database to inform pricing strategy."
    ],
    "cases": []
  },
  "internet-brands": {
    "company": "Internet Brands",
    "title": "Senior Financial Analyst / Business Partner",
    "period": "August 2017 – May 2021",
    "location": "Los Angeles, CA",
    "focus": "SaaS growth & monetization",
    "description": "Served as product and finance partner for a $20M ARR SaaS business, leading pricing, segmentation, and performance management across the customer lifecycle.",
    "skills": [
      "SaaS monetization",
      "Customer segmentation",
      "Funnel optimization",
      "Salesforce & Tableau"
    ],
    "achievements": [
      "Increased ARR by 10% through bundling, upsell, and cross-sell monetization models.",
      "Improved lead-to-paid conversion by 50% through digital funnel optimization.",
      "Built Salesforce and Tableau dashboards for activation, churn, and revenue, cutting reporting time from 10 days to 4."
    ],
    "cases": []
  },
  "aws": {
    "company": "Amazon Web Services (AWS)",
    "title": "Finance Strategy Manager",
    "period": "June 2021 – February 2025",
    "location": "Seattle, WA",
    "focus": "Product economics & monetization",
    "description": "Partnered directly with the GM for AWS Application Performance Monitoring to drive portfolio strategy across pricing, monetization, P&L, investment planning, and margin optimization.",
    "skills": [
      "Early product roadmaps",
      "Pricing & packaging",
      "Go-to-market strategy",
      "Cloud unit economics",
      "Portfolio strategy"
    ],
    "achievements": [
      "Defined the early roadmap, pricing, and go-to-market strategy for a new observability product with billion-dollar-scale potential.",
      "Translated customer interviews, competitive research, usage analysis, and elasticity modeling into feature priorities and packaging decisions.",
      "Partnered with Engineering and Applied Science on compute, storage, indexing, and data-transfer tradeoffs, helping achieve a 100+ basis-point gross-margin improvement.",
      "Owned APM pricing models, discount structures, and contract economics with Product, Sales, Finance, Legal, and Economics.",
      "Repriced a service generating $50M in annual revenue and increased gross margin by 30+ percentage points."
    ],
    "cases": [
      {
        "key": "aws",
        "title": "AWS observability: pricing for sustainable growth"
      }
    ]
  },
  "amazon": {
    "company": "Amazon Retail · Fashion",
    "title": "Senior Product Manager",
    "period": "February 2025 – Present",
    "location": "Seattle, WA",
    "focus": "GenAI experiences & global sizing platforms",
    "description": "Lead product strategy across GenAI virtual try-on and sizing intelligence, connecting customer research, hands-on prototyping, controlled experimentation, and ML platform requirements with long-term unit economics.",
    "skills": [
      "GenAI product strategy",
      "Figma UX prototyping",
      "Weblab experimentation",
      "SQL & customer research",
      "ML platform requirements",
      "Cross-functional leadership"
    ],
    "achievements": [
      "Led 0-to-1 strategy and Figma UX prototyping for virtual try-on; de-scoped lower-value features such as custom avatars using research, historical adoption data, and benchmarking of 13 competing offerings.",
      "Defined success and guardrail metrics and tested the end-to-end VTO experience through a large-scale Weblab A/B experiment. Made the strategic call with senior leadership to pause full rollout after elevated return-rate risk exposed fit-accuracy gaps.",
      "Partnered with Applied Science to evaluate image realism, latency, scale, development speed, and infrastructure cost, contributing to the selection of an open-source approach for early validation.",
      "Diagnosed a 100–200 basis-point sizing-related return-rate gap among China FBA sellers after normalizing for category mix; traced the gap to inconsistent garment measurements and size mappings.",
      "Combined SQL analysis, seller interviews, ASIN-level audits, and GB/T versus ASTM research to define requirements for an ML-based size-mapping solution.",
      "Aligned senior leadership, U.S. Tech, and China business teams to prioritize the sizing issue; launched a top-seller pilot to establish a path toward broader U.S. rollout and potential international expansion."
    ],
    "cases": [
      {
        "key": "vto",
        "title": "Virtual try-on: from prototype to go/no-go decision"
      },
      {
        "key": "sizing",
        "title": "Global size intelligence: research to ML requirements"
      }
    ]
  }
};

const dialog = document.querySelector('#case-dialog');
const content = document.querySelector('#case-content');
let caseTrigger = null;
let dialogMode = 'case';
let returnToRole = null;

function setDialogLabels(mode, origin) {
  document.querySelector('.dialog-top .eyebrow').textContent = mode === 'role' ? 'STRATEGIC TRAJECTORY / LUNA ZHU' : 'SELECTED WORK / LUNA ZHU';
  document.querySelector('.dialog-close').setAttribute('aria-label', mode === 'role' ? 'Close role details' : 'Close case study');
  document.querySelector('.dialog-done').textContent = mode === 'role' ? 'Back to trajectory' : origin ? 'Back to role' : 'Back to portfolio';
}

function highlightMilestone(key) {
  document.querySelectorAll('[data-role]').forEach(button => button.classList.toggle('is-active', button.dataset.role === key));
}

function openRole(key) {
  const role = roles[key];
  if (!role) return;
  dialogMode = 'role';
  returnToRole = null;
  caseTrigger = document.querySelector(`[data-role="${key}"]`);
  history.replaceState(null, '', `#role-${key}`);
  highlightMilestone(key);
  setDialogLabels('role');
  content.replaceChildren();
  const add = (tag, className, text, parent = content) => {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    parent.append(element);
    return element;
  };
  add('p', 'case-kicker', role.focus);
  add('h2', '', role.title).id = 'case-title';
  const company = add('p', 'career-company', role.company);
  add('span', '', `${role.period} · ${role.location}`, company);
  add('p', 'case-deck', role.description);
  const skills = add('div', 'career-skills', '');
  role.skills.forEach(skill => add('span', '', skill, skills));
  const achievements = add('section', 'case-section role-achievements', '');
  add('h3', '', 'Key achievements', achievements);
  const list = add('ul', '', '', achievements);
  role.achievements.forEach(achievement => add('li', '', achievement, list));
  if (role.cases.length) {
    const related = add('section', 'case-section related-cases', '');
    add('h3', '', 'Explore the work', related);
    role.cases.forEach(item => {
      const button = add('button', 'role-case-link', item.title, related);
      button.type = 'button';
      button.dataset.relatedCase = item.key;
      add('span', '', '↗', button).setAttribute('aria-hidden', 'true');
      button.addEventListener('click', () => {
        history.replaceState(null, '', `#case-${item.key}`);
        openCase(item.key, caseTrigger, key);
      });
    });
  }
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.scrollTop = 0;
  document.querySelector('.dialog-close').focus({ preventScroll: true });
}
function renderCase(key) {
  const item = cases[key];
  if (!item) return;
  content.replaceChildren();
  const add = (tag, className, text, parent = content) => {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    parent.append(element);
    return element;
  };
  add('p', 'case-kicker', item.kicker);
  add('h2', '', item.title).id = 'case-title';
  add('p', 'case-deck', item.intro);
  const stat = add('div', 'case-stat', '');
  add('strong', '', item.metric, stat);
  add('span', '', item.metricLabel, stat);
  for (const [heading, body] of item.sections) {
    const section = add('section', 'case-section', '');
    add('h3', '', heading, section);
    if (Array.isArray(body)) {
      const list = add('ul', '', '', section);
      body.forEach(text => add('li', '', text, list));
    } else add('p', '', body, section);
  }
  const lifecycle = add('section', 'case-section case-lifecycle', '');
  add('h3', '', 'Product Development Lifecycle', lifecycle);
  const steps = add('ol', 'lifecycle-steps', '', lifecycle);
  item.lifecycle.forEach((step, index) => {
    const entry = add('li', 'lifecycle-step', '', steps);
    add('span', 'lifecycle-number', String(index + 1).padStart(2, '0'), entry).setAttribute('aria-hidden', 'true');
    const detail = add('div', 'lifecycle-detail', '', entry);
    add('h4', '', `${step.phase} — ${step.title}`, detail);
    add('p', '', step.body, detail);
  });
  add('p', 'case-note', item.note);
}
function openCase(key, trigger, origin = null) {
  if (!cases[key]) return;
  dialogMode = 'case';
  returnToRole = origin;
  highlightMilestone(origin);
  setDialogLabels('case', origin);
  caseTrigger = trigger || document.querySelector(`[data-case="${key}"]`);
  renderCase(key);
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.scrollTop = 0;
  document.querySelector('.dialog-close').focus({ preventScroll: true });
}
function closeCase() { dialog.close(); }
document.querySelectorAll('[data-case]').forEach(button => {
  button.addEventListener('click', () => {
    history.replaceState(null, '', `#case-${button.dataset.case}`);
    openCase(button.dataset.case, button);
  });
});
document.querySelector('.dialog-close').addEventListener('click', closeCase);
document.querySelector('.dialog-done').addEventListener('click', () => {
  if (returnToRole) openRole(returnToRole);
  else closeCase();
});
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closeCase();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  if (/^#(case|role)-/.test(location.hash)) history.replaceState(null, '', dialogMode === 'role' || returnToRole ? '#experience' : '#work');
  highlightMilestone(null);
  if (caseTrigger) caseTrigger.focus({ preventScroll: true });
});
function syncCaseHash() {
  const key = location.hash.replace('#case-', '');
  const roleKey = location.hash.replace('#role-', '');
  if (location.hash.startsWith('#role-') && roles[roleKey]) openRole(roleKey);
  else if (location.hash.startsWith('#case-') && cases[key]) openCase(key);
  else if (dialog.open) closeCase();
}
window.addEventListener('hashchange', syncCaseHash);
syncCaseHash();

document.querySelectorAll('[data-role]').forEach(button => button.addEventListener('click', () => openRole(button.dataset.role)));
const trajectoryScroll = document.querySelector('#trajectory-scroll');
const earlierRole = document.querySelector('.trajectory-prev');
const laterRole = document.querySelector('.trajectory-next');
const trajectoryTrack = document.querySelector('.trajectory-track');
const chronologicalMilestones = [...trajectoryTrack.children];
chronologicalMilestones.forEach((milestone, index) => milestone.dataset.chronologicalOrder = index + 1);
const mobileTrajectory = window.matchMedia('(max-width: 600px)');
function updateTrajectoryOrder() {
  const mobile = mobileTrajectory.matches;
  trajectoryTrack.append(...(mobile ? [...chronologicalMilestones].reverse() : chronologicalMilestones));
  trajectoryScroll.setAttribute('aria-label', `Career milestones, ordered from ${mobile ? 'latest to earliest' : 'earliest to latest'}`);
  document.querySelector('.trajectory-toolbar > span').innerHTML = mobile
    ? 'TODAY <span aria-hidden="true">→</span> 2015'
    : '2015 <span aria-hidden="true">→</span> TODAY';
  earlierRole.setAttribute('aria-label', mobile ? 'Scroll to later roles' : 'Scroll to earlier roles');
  laterRole.setAttribute('aria-label', mobile ? 'Scroll to earlier roles' : 'Scroll to later roles');
  trajectoryScroll.scrollLeft = 0;
  updateTrajectoryControls();
}
mobileTrajectory.addEventListener('change', updateTrajectoryOrder);
function updateTrajectoryControls() {
  const maxScroll = trajectoryScroll.scrollWidth - trajectoryScroll.clientWidth;
  document.querySelector('.trajectory-controls').hidden = maxScroll < 2;
  earlierRole.disabled = trajectoryScroll.scrollLeft <= 2;
  laterRole.disabled = trajectoryScroll.scrollLeft >= maxScroll - 2;
}
function scrollTrajectory(direction) {
  const cards = document.querySelector('.trajectory-track');
  const step = cards.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(cards).columnGap);
  trajectoryScroll.scrollBy({ left: direction * step, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}
earlierRole.addEventListener('click', () => scrollTrajectory(-1));
laterRole.addEventListener('click', () => scrollTrajectory(1));
trajectoryScroll.addEventListener('scroll', updateTrajectoryControls, { passive: true });
window.addEventListener('resize', updateTrajectoryControls);
updateTrajectoryOrder();
if ('IntersectionObserver' in window) {
  const trajectoryObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      document.querySelector('.trajectory-track').classList.add('trajectory-revealed');
      trajectoryObserver.disconnect();
    }
  }, { threshold: .15 });
  trajectoryObserver.observe(trajectoryScroll);
}

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('open', open);
}
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    const focusInNavigation = navigation.contains(document.activeElement);
    setMenu(false);
    if (focusInNavigation) menu.focus({ preventScroll: true });
  }
});
document.addEventListener('click', event => { if (!event.target.closest('.nav')) setMenu(false); });
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      navigation.querySelectorAll('a').forEach(link => {
        const current = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', current);
        if (current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-15% 0px -55% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
document.querySelector('#copy-email').addEventListener('click', async event => {
  const email = event.currentTarget.dataset.email;
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(email);
    status.textContent = 'Email copied. Talk soon!';
  } catch {
    status.textContent = 'Copy the address above, or use Say hello to email me.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
