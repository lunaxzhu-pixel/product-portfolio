const cases = {
  "aws": {
    "kicker": "AWS · Cloud infrastructure monetization · Unit economics · Pricing & GTM",
    "title": "A growth engine, built into the pricing.",
    "intro": "Pricing & Monetization for the AWS Observability Portfolio: building a commercial model that pairs predictable customer costs with sustainable infrastructure economics.",
    "metric": "$1B+",
    "metricLabel": "Projected total revenue over five years for the AWS observability portfolio.",
    "sections": [
      [
        "The problem",
        "Increasingly complex enterprise cloud architectures made basic logs and metrics insufficient for fast incident triage. Datadog, Dynatrace, and New Relic offered specialized platforms, while AWS needed an end-to-end, full-stack observability solution. The challenge was to design pricing that gave small businesses and enterprise customers predictable costs while supporting cost-effective infrastructure and sustainable margins."
      ],
      [
        "The approach",
        "Built the pricing, packaging, and monetization strategy from the ground up for a new AWS observability product portfolio with a $100M+ ARR baseline. Designed a value-metric model that aligned customer cost directly with usage scale. Structured competitive total-cost-of-ownership models, free-tier and trial strategies, and multi-tier bundling to accelerate migration from third-party tools while maintaining healthy unit economics."
      ],
      [
        "The outcome",
        [
          "Revenue and adoption — Established a model projecting $1B+ in total revenue over five years, with adoption across 1M+ business partners and enterprise customers.",
          "Margin expansion — Improved overall portfolio operating margins by 100+ basis points by pairing efficient infrastructure architecture with predictable, tiered pricing.",
          "Growth — Achieved annual growth rates exceeding 999%."
        ]
      ]
    ],
    "note": "The $1B+ figure is projected revenue over five years. The 100+ basis-point improvement refers to portfolio operating margins.",
    "lifecycle": [
      {
        "phase": "Discover",
        "title": "Customer elasticity & competitive research",
        "body": "Combined pricing elasticity modeling with competitive total-cost-of-ownership (TCO) benchmarking against Datadog and Dynatrace across enterprise workloads. Identified demand for cost predictability and transparent usage-based billing."
      },
      {
        "phase": "Define",
        "title": "Monetization framework & value metrics",
        "body": "Built pricing, packaging, and monetization from the ground up for a portfolio with a $100M+ annual recurring revenue baseline. Established six principles: cost-following pricing units, predictable billing, competitive TCO, margin-protective architecture, free-tier acquisition, and targeted migration paths."
      },
      {
        "phase": "Design",
        "title": "Architecture & pricing model pair",
        "body": "Partnered with infrastructure architects to pair efficient logging and metrics pipelines with tiered bundling. Aligned customer costs with usage scale and designed free tiers, trials, and packaging to encourage migration from third-party tools while protecting unit economics."
      },
      {
        "phase": "Build",
        "title": "Cross-functional monetization infrastructure",
        "body": "Coordinated eight teams across Engineering, Product, Finance, Business Development, and Economics to deliver automated metering, billing, and invoicing infrastructure."
      },
      {
        "phase": "Launch",
        "title": "Global AWS ecosystem rollout",
        "body": "Shipped within the AWS Monitoring portfolio across global AWS regions, introducing free trials, tiered discounts, and bundle packaging."
      },
      {
        "phase": "Measure",
        "title": "Revenue & margin expansion",
        "body": "Tracked customer adoption, migration velocity, revenue, and margins. Achieved annual growth rates exceeding 999% and established $1B+ in five-year projected revenue."
      }
    ]
  },
  "vto": {
    "kicker": "Amazon Fashion · GenAI applications · Product-led growth · Experimentation",
    "title": "Less uncertainty. More confident shopping.",
    "intro": "GenAI Virtual Try-On: reframing apparel visualization as a decision-support tool, validating demand through experimentation, and using unit economics to guide the rollout decision.",
    "metric": "500K+",
    "metricLabel": "Customers in the controlled Weblab A/B test. Full rollout was paused after the return-rate guardrail was triggered.",
    "sections": [
      [
        "The problem",
        "Online apparel shoppers could not confidently predict fit or appearance. Fit-related returns accounted for 40%, while trial shopping—ordering multiple sizes or colors with the intent to return—grew 14.6% year over year to 164M trial-ordered units. Earlier 3D/AR experiences added friction: VTO for Shoes saw 1% click-through versus 20% on standard product detail pages, and 25% of users cited poor rendering quality."
      ],
      [
        "The approach",
        "Reframed virtual try-on from an immersive gimmick into a low-friction decision-support tool. Personally prototyped four iterations of Figma UX integrated directly into the shopping flow: entry point, photo upload, side-by-side try-on, and seamless add-to-cart. Validated preferences through analysis of 13 market solutions and a 300-customer survey, leading to de-scoping non-essential features such as custom avatars. Partnered with Applied Science to evaluate proprietary diffusion models against open-source approaches, then deployed the experience through a controlled Weblab A/B test with 500K+ customers."
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
    "note": "500K+ is experiment reach. The conversion gains did not lead to a full rollout because downstream returns failed the guardrail.",
    "lifecycle": [
      {
        "phase": "Discover",
        "title": "Identifying root friction via data telemetry",
        "body": "Analyzed billion-scale purchase and return datasets and historical VTO Shoes telemetry to isolate friction and visual-realism problems. Surveyed 300 apparel shoppers to validate the sources of hesitation before adding to cart."
      },
      {
        "phase": "Define",
        "title": "Scoping the opportunity & data-driven de-scoping",
        "body": "Benchmarked 13 market solutions and internal categories. Triangulated customer research, competitor analysis, and historical adoption to de-scope custom avatars before engineering investment. Set click-through, cart conversion, GMV, and Ordered Product Sales (OPS) as success measures, with Customer-Initiated Returns as the guardrail."
      },
      {
        "phase": "Design",
        "title": "Designing the low-friction experience",
        "body": "Personally created four iterations of Figma prototypes, incorporating customer insights, UX tradeoffs, and L8/L10 leadership reviews. Integrated product-page entry, photo upload, side-by-side try-on, and seamless add-to-cart into the natural shopping journey."
      },
      {
        "phase": "Build",
        "title": "Translating customer needs into technical requirements",
        "body": "Partnered with the Technical Product Manager, Applied Science, and engineering to define latency, scale, product-page integration, and measurement requirements. Compared proprietary Amazon diffusion models with open-source approaches and chose open source for pilot validation, balancing realism, development speed, latency, and infrastructure cost."
      },
      {
        "phase": "Launch",
        "title": "Large-scale Weblab experimentation",
        "body": "Ran the complete experience through a controlled Weblab A/B test with 500K+ customers, measuring engagement and purchase intent alongside downstream fulfillment impact."
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
    "intro": "Global Size Intelligence for FBA Apparel Sellers: turning a cross-border sizing problem into an automated ML mapping platform, from root-cause research through scaled adoption.",
    "metric": "100–200 bps",
    "metricLabel": "Net sizing-defect return-rate gap isolated after category-mix normalization.",
    "sections": [
      [
        "The problem",
        "More than 30K China FBA apparel sellers had a return rate 400 basis points higher than domestic US sellers. Historical assumptions blamed customer trial behavior or product mix. By analyzing 3B+ records, building a category-mix normalization methodology, and benchmarking against Amazon Essentials, I isolated a net 100–200 basis-point sizing-defect gap—representing 100M+ extra returned units and $200M–$500M in annual logistics costs."
      ],
      [
        "The approach",
        "Conducted one-on-one interviews with top FBA sellers and found that sellers inflated size-chart measurements to keep shoppers from perceiving garments as too small, inadvertently driving returns. Research into GB/T 1335 versus ASTM D5585 standards revealed deeper size-mapping disconnects. Reframed the issue from regional compliance into a global ML platform opportunity: sellers provide raw garment measurements in Seller Central, and an ML model recommends optimal US size mappings."
      ],
      [
        "The outcome",
        [
          "Cross-organizational alignment — Resolved years of regional misalignment over customer body-data access by aligning L8 leadership, US Tech, and China teams around garment-based ML recommendations.",
          "Scaled adoption — Expanded from a 20-seller pilot to broad adoption across 30K+ China FBA sellers, with Europe and Japan on the expansion roadmap.",
          "Customer and business impact — Expanded catalog recommendation coverage and seller adoption, reduced fit-related returns, and recovered tens of millions in annual operating margins."
        ]
      ]
    ],
    "note": "The 100–200 basis-point figure is the diagnosed sizing gap, not the achieved reduction. The $200M–$500M estimate describes the annual cost of the identified problem, separate from the margin recovery.",
    "lifecycle": [
      {
        "phase": "Discover",
        "title": "Data telemetry & qualitative root-cause isolation",
        "body": "Analyzed 3B+ records and built a category-mix normalization methodology to isolate a 100–200 basis-point sizing defect within the initial 400 basis-point return gap, representing 100M+ extra returned units and $200M–$500M in fulfillment costs. Interviewed top sellers and four Mandarin-speaking internal teams, and audited physical measurements against size charts. Found that sellers inflated measurements—for example, labeling a 31-inch waist as 37 inches because the fabric stretched. Research into GB/T 1335 and ASTM D5585 revealed deeper sizing-standard mismatches."
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
        "body": "Aligned US Tech, China regional teams, Returns, Catalog, Seller Experience, and Applied Science. Used concrete ASIN measurement discrepancies to secure L8 leadership support and prioritize the Seller Central engineering work."
      },
      {
        "phase": "Launch",
        "title": "Phased rollout",
        "body": "Tested usability and mapping precision with 20 top China FBA sellers, then expanded to all 30K+ China FBA sellers. Secured a roadmap for expansion to Europe and Japan."
      },
      {
        "phase": "Measure",
        "title": "Impact & margin recovery",
        "body": "Tracked seller adoption, size-chart completeness, and recommendation coverage. Used Weblab testing to validate downstream reductions in fit-related returns and fulfillment costs."
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
    "description": "Partnered directly with the L8 GM for AWS Application Performance Monitoring to drive portfolio strategy across pricing, monetization, P&L, investment planning, and margin optimization.",
    "skills": [
      "Early product roadmaps",
      "Pricing & packaging",
      "Go-to-market strategy",
      "Cloud unit economics",
      "Portfolio strategy"
    ],
    "achievements": [
      "Defined the early roadmap, pricing, and go-to-market strategy for a new observability product projected to generate $1B+ over five years.",
      "Translated customer interviews, competitive research, usage analysis, and elasticity modeling into feature priorities and packaging decisions.",
      "Partnered with Engineering and Applied Science on compute, storage, indexing, and data-transfer tradeoffs, improving gross margin by 100+ basis points.",
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
      "Defined success and guardrail metrics and tested the end-to-end VTO experience with 500K+ customers. Made the strategic call with L8/L10 leadership to pause full rollout after elevated return-rate risk exposed fit-accuracy gaps.",
      "Partnered with Applied Science to evaluate image realism, latency, scale, development speed, and infrastructure cost, contributing to the selection of an open-source approach for early validation.",
      "Identified a 100–200 basis-point sizing-related return gap across 30K+ China FBA sellers after category-mix normalization, quantifying 100M+ excess annual returns and $200M–$500M in associated fulfillment cost.",
      "Combined SQL analysis, seller interviews, ASIN-level audits, and GB/T versus ASTM research to define requirements for an ML-based size-mapping solution.",
      "Aligned L8 leadership, US Tech, and China business teams around garment-based ML size mapping; expanded from a 20-seller pilot to adoption across 30K+ China FBA sellers, improving coverage and reducing fit-related returns."
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
updateTrajectoryControls();
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
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
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
