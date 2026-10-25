const cases = {
  "aws": {
    "kicker": "AWS · Application Signals · 0-to-1 cloud product",
    "title": "From detecting a problem to knowing where to act.",
    "intro": "I partnered with the Technical Product Manager and GM to take Application Signals from customer discovery through launch and adoption. I owned the commercial strategy, cost model, and business requirements that shaped the product.",
    "metric": "0 → 1",
    "metricLabel": "A cloud monitoring product taken through discovery, production billing, and post-launch iteration.",
    "sections": [
      [
        "Problem",
        "Cloud applications were becoming harder to troubleshoot. Customers wanted a connected view of application health and a faster path from a failing service to the code or dependency that needed attention. They also needed to understand what that monitoring would cost."
      ],
      [
        "Ownership",
        "I participated in customer discovery and shared roadmap decisions with the PMT and GM. My PRD contributions covered workload priorities, commercial requirements, and architecture cost constraints. I owned pricing and the business model; the PMT led technical product work, and engineers designed the system."
      ],
      [
        "Decisions",
        "Customer interviews, workload analysis, and competitive total-cost comparisons informed a phased MVP. We prioritized language and compute-environment support around customer demand and engineering capacity. I proposed usage-based pricing, trial options, and packaging that connected the monitoring experience across services."
      ],
      [
        "Tradeoffs",
        "The initial cost model exposed a tension between competitive customer pricing and infrastructure economics. I brought that constraint to the Principal Engineer, who proposed a more efficient telemetry design. I evaluated workload scenarios and downside cases with Engineering. Cross-service monetization also required balancing customer simplicity with separate teams’ revenue interests; the GM approved the commercial approach."
      ],
      [
        "Execution",
        "I contributed to design reviews, sprint planning, and launch readiness, and worked with Engineering to identify versions ready for load testing. I partnered on metering, billing, and invoicing delivery so pricing could work in production. After launch, I reviewed adoption with the PMT and GM and escalated a gap between expected and actual uptake."
      ],
      [
        "Outcomes",
        [
          "Delivered — Application Signals launched with production billing and a usage-based commercial model. The architecture decision informed the product design; modeled economics are not presented here as realized savings.",
          "Observed — Follow-up interviews led by the GM and PMT showed customers needed more help investigating issues. I helped prioritize broader language support and deeper tracing integrations. Adoption accelerated as those capabilities became available; this was an observed relationship, not a measured causal lift."
        ]
      ],
      [
        "Lessons",
        "Discovery has to follow the customer through the full job. A dashboard could show a problem, but adoption depended on helping customers decide what to investigate next. Commercial performance became an input to the product roadmap."
      ]
    ],
    "note": "Public product context is linked below. Personal contributions describe my role during development; they do not imply sole ownership of the product. Internal financial data, workload measurements, and customer details are omitted.",
    "sources": [
      {
        "label": "AWS: Application Signals general availability",
        "url": "https://aws.amazon.com/about-aws/whats-new/2024/06/amazon-cloudwatch-application-signals-application-monitoring/"
      }
    ]
  },
  "vto": {
    "kicker": "Amazon Fashion · GenAI Virtual Try-On · Discovery & experimentation",
    "title": "Less uncertainty. More confident shopping.",
    "intro": "I led product discovery and the shopping experience for GenAI Virtual Try-On, turning customer uncertainty into a prototype, an experiment, and a decision about whether to scale.",
    "metric": "500K+",
    "metricLabel": "Customers in a controlled A/B test of the experience. Broader rollout was paused.",
    "sections": [
      [
        "Problem",
        "Apparel shoppers could see the garment but still struggled to judge how it would look and fit. Customer research and earlier virtual try-on usage showed that extra setup steps and weak visual realism could undermine an otherwise useful idea."
      ],
      [
        "Ownership",
        "I owned customer discovery, MVP priorities, and the experience prototype. I built four UX iterations in Figma, incorporating customer feedback, leadership reviews, and experiment learning. The Technical Product Manager and Engineering led the technical build; I partnered with Applied Science on model evaluation."
      ],
      [
        "Decisions",
        "I benchmarked 13 competing offerings and compared those findings with historical adoption and customer research. That evidence led me to remove custom avatars from the MVP. I kept entry on the product page and connected photo upload, side-by-side comparison, and add-to-cart in one shopping journey."
      ],
      [
        "Tradeoffs",
        "With Applied Science, I evaluated model approaches across image realism, generation latency, scalability, development speed, and infrastructure cost. We selected an open-source approach for early validation. A convincing image could increase confidence without accurately predicting fit, so purchase metrics alone could not determine readiness."
      ],
      [
        "Execution",
        "I translated the experience into customer requirements, including latency and scale expectations, and worked with technical and leadership teams on success measures and return-rate guardrails. We tested the full experience with 500K+ customers through Weblab, Amazon’s A/B testing system."
      ],
      [
        "Outcomes",
        [
          "Observed — The experiment improved cart conversion and purchase-intent measures, but customer-initiated returns breached the guardrail.",
          "Decision — I recommended pausing broader rollout and made that decision jointly with senior leadership. Fit-accuracy limitations informed the hypothesis that visualization needed size-and-fit guidance.",
          "Next step — Integrated fit capabilities became the roadmap direction. This case describes an experiment and a rollout decision, not a broadly launched product or realized return-cost savings."
        ]
      ],
      [
        "Lessons",
        "AI quality must be evaluated in the decision it supports. Visual realism helped shoppers imagine a purchase; it did not establish that the garment would fit. The return-rate guardrail changed the product decision."
      ]
    ],
    "note": "The 13 benchmarks, four UX iterations, and 500K+ experiment scope describe discovery and validation. Exact commercial uplift and return-cost estimates are omitted."
  },
  "sizing": {
    "kicker": "Amazon Fashion · Global ML Size Intelligence · Data & platform strategy",
    "title": "Better fit starts with better foundations.",
    "intro": "I used SQL analysis and seller research to turn a regional returns problem into requirements for garment-based ML size mapping, then aligned teams around a top-seller pilot.",
    "metric": "10%",
    "metricLabel": "Of the diagnosed sizing-related return-rate gap closed in the top-seller pilot, equivalent to a 10–20 basis-point reduction.",
    "sections": [
      [
        "Problem",
        "China-based apparel sellers had higher returns than domestic U.S. sellers. Product mix and customer trial behavior were plausible explanations, but neither established what the product team should change. We needed to isolate the sizing problem before choosing a solution."
      ],
      [
        "Ownership",
        "I led the root-cause investigation, seller research, and product requirements. I aligned U.S. Tech and China business teams, working with Returns, Catalog, Seller Experience, and Applied Science to move the issue into a pilot."
      ],
      [
        "Decisions",
        "I used SQL to investigate return patterns and normalized for category mix so differences in assortment would not be mistaken for a sizing defect. A sizing-related gap remained. Seller interviews and audits of individual product listings then traced the problem to inconsistent garment measurements and size mappings."
      ],
      [
        "Tradeoffs",
        "Correcting individual size charts could address symptoms but would not create a reusable foundation. I proposed garment measurements as the input to ML recommendations. That approach avoided dependence on raw customer body data while making seller input quality a central product requirement."
      ],
      [
        "Execution",
        "I defined Seller Central input schemas, required measurements, freshness expectations, and accuracy validation criteria with technical partners. Research into Chinese and U.S. sizing conventions helped explain why a label alone could not reliably map across markets. Concrete listing discrepancies helped secure leadership support and engineering priority."
      ],
      [
        "Outcomes",
        [
          "Delivered — Defined ML mapping requirements, aligned the cross-regional teams, and launched a top-seller pilot.",
          "Pilot result — The pilot closed 10% of the diagnosed 100–200 basis-point sizing-related return-rate gap, equivalent to a 10–20 basis-point reduction. This is a pilot outcome, not a global rollout result.",
          "Future — Broader U.S. rollout and international expansion remain next steps. Seller adoption, size-chart completeness, recommendation coverage, and fit-related returns guide further validation."
        ]
      ],
      [
        "Lessons",
        "A recommendation system needs trustworthy inputs. Combining normalized data with seller context changed the problem from correcting charts to building a sizing foundation that other experiences could use."
      ]
    ],
    "note": "The baseline gap and achieved pilot reduction are different measures. Results reflect the supplied product resume; broader rollout and international expansion remain prospective."
  },
  "xray": {
    "kicker": "AWS · X-Ray · Pricing & metering redesign",
    "title": "A charging model that follows the work.",
    "intro": "I identified a structural mismatch between X-Ray’s charging unit and its cost drivers, then led the product requirements, pricing proposal, and customer migration strategy for a hybrid GB + spans model.",
    "metric": "GB + spans",
    "metricLabel": "A hybrid model combining data volume with units of tracing work; a span represents an operation within a trace.",
    "sections": [
      [
        "Problem",
        "A trace could contain very different amounts of work as applications grew more complex. A charge per trace did not consistently follow that work, creating a sustainability problem and uneven billing outcomes across workloads."
      ],
      [
        "Ownership",
        "I initiated the redesign and owned the PRD, pricing document, and migration plan. The Engineering Manager owned detailed metering requirements and implementation. The Principal PM led launch readiness; I tracked metering and billing dependencies with Engineering."
      ],
      [
        "Decisions",
        "I compared volume-based, span-based, and hybrid charging models with Engineering. The hybrid GB + spans approach better reflected the cost drivers we needed to account for. I worked with Economics on elasticity and evaluated revenue, margin, and attrition scenarios to support executive review."
      ],
      [
        "Tradeoffs",
        "A more sustainable model involved a modeled near-term revenue tradeoff. It could also increase bills for some existing users. I analyzed expected bill changes by cohort and proposed specialist support and transitional credits so migration risk was part of the product design."
      ],
      [
        "Execution",
        "I translated the pricing proposal into billing behavior and customer-impact requirements, then coordinated with the Engineering Manager on metering changes and delivery milestones. I presented the decision framework for executive approval and aligned the migration plan with the Principal PM’s launch work."
      ],
      [
        "Outcomes",
        [
          "Delivered — Secured executive approval and transitioned from per-trace billing to a hybrid GB + spans model, with a customer migration plan supporting the change.",
          "Customer protection — Specialist support and transitional credits were incorporated into the migration approach. Forecast bill impacts were planning inputs, not evidence of realized customer savings.",
          "Scope — This account focuses on the decisions and delivery work I owned. It does not attribute later service growth or margin changes to this project."
        ]
      ],
      [
        "Lessons",
        "The charging unit is a product decision with engineering consequences. Changing it requires understanding both the work the system performs and the transition customers will experience."
      ]
    ],
    "note": "This is a historical project account, not a description of today’s universal X-Ray pricing. Financial forecasts, customer-level bill changes, and later business results are omitted."
  },
  "timber": {
    "kicker": "AWS · Timber · Internal platform delivery",
    "title": "Make usage visible. Make action possible.",
    "intro": "I helped unblock an internal logging platform’s billing integration by connecting engineering priority to commitments from the teams that would use it.",
    "metric": "Delivery",
    "metricLabel": "Engineering prioritization, executive sponsorship, and a shared approach to usage accountability.",
    "sections": [
      [
        "Problem",
        "Internal teams lacked a consistent view of their logging usage. A billing portal integration had an existing PRD and technical design, but limited capacity in the billing software team pushed delivery down the roadmap."
      ],
      [
        "Ownership",
        "I joined after product requirements and technical design were established. My contribution was securing priority, tracking delivery with the Engineering Manager, and coordinating the internal customers who would use the platform to act on their consumption."
      ],
      [
        "Decisions",
        "I used existing manual usage estimates to identify teams with meaningful optimization opportunities. I worked with those teams to establish commitments, then partnered with the Engineering Manager to take the business case to leadership and secure executive sponsorship."
      ],
      [
        "Tradeoffs",
        "The billing team had competing demands. A platform integration needed more than a projected benefit: it needed teams prepared to use the information and own follow-through. I connected the engineering request to that operating commitment."
      ],
      [
        "Execution",
        "I followed delivery milestones and dependencies with the Engineering Manager and kept the platform work tied to the sponsored goal. In parallel, I worked with internal customers to identify opportunities based on their usage patterns and track progress against their commitments."
      ],
      [
        "Outcomes",
        [
          "Delivered — The billing portal integration launched after executive sponsorship and internal customer commitments helped restore engineering priority. I coordinated delivery with the Engineering Manager.",
          "Operating model — Connected usage visibility with team ownership and recurring follow-up on optimization opportunities across organizations.",
          "Attribution — Engineering owned the platform design and implementation; customer teams owned changes to their usage. No financial savings figure is claimed here."
        ]
      ],
      [
        "Lessons",
        "Internal platforms need committed users as well as engineering capacity. Making the downstream action explicit gave leadership a concrete reason to prioritize the enabling platform work."
      ]
    ],
    "note": "Sanitized internal-platform account. Internal customer identities, usage volumes, financial commitments, and savings amounts are omitted."
  }
};

const roles = {
  "rrd": {
    "company": "R.R. Donnelley",
    "title": "Pricing Analyst",
    "period": "August 2015 – August 2017",
    "location": "Los Angeles, CA",
    "focus": "Pricing analysis & scenario modeling",
    "description": "Built quantitative pricing models using Oracle Database to support deal win rates and margins.",
    "skills": [
      "Quantitative pricing",
      "Statistical analysis",
      "Scenario modeling",
      "Oracle Database"
    ],
    "achievements": [
      "Built quantitative pricing models to support deal win rates and margins.",
      "Used statistical analysis and scenario modeling in Oracle Database to evaluate pricing decisions."
    ],
    "cases": []
  },
  "internet-brands": {
    "company": "Internet Brands",
    "title": "Senior Financial Analyst",
    "period": "August 2017 – May 2021",
    "location": "Los Angeles, CA",
    "focus": "SaaS Product Strategy & Monetization",
    "description": "Owned subscription pricing, customer segmentation, and digital funnel optimization for a $20M ARR consumer SaaS business, connecting customer economics with packaging and lifecycle decisions.",
    "skills": [
      "Subscription pricing",
      "Customer segmentation",
      "Elasticity & ARPU/LTV",
      "Funnel optimization",
      "Tableau & Salesforce"
    ],
    "achievements": [
      "Delivered 10% ARR growth and a 50% conversion improvement through consumer SaaS monetization and digital funnel optimization.",
      "Used elasticity and ARPU/LTV modeling to inform packaging, upsell, and conversion strategies.",
      "Automated Tableau and Salesforce dashboards, reducing reporting time from 10 days to 4—a 60% reduction—and improving access to customer lifecycle insights."
    ],
    "cases": []
  },
  "aws": {
    "company": "Amazon Web Services (AWS)",
    "title": "Finance Strategy Manager",
    "period": "June 2021 – February 2025",
    "location": "Seattle, WA",
    "focus": "AWS Product Strategy & Monetization",
    "description": "Drove cloud product strategy and monetization across four AWS services. Co-owned Application Signals’ roadmap, PRDs, feature prioritization, and launch readiness with Product and Engineering, while leading pricing and cost strategy.",
    "skills": [
      "Product roadmaps & PRDs",
      "Launch readiness",
      "Usage-based pricing",
      "Metering & billing",
      "Cloud portfolio strategy",
      "Engineering collaboration"
    ],
    "achievements": [
      "Application Signals — Co-owned the 0-to-1 product launch with Product and Engineering; secured SVP approval for tiered usage-based pricing and launched a cross-service observability bundle.",
      "X-Ray — Led the pricing and billing redesign, defined product requirements, and transitioned from per-trace billing to a GB + spans model. Secured VP approval through elasticity, margin, and customer bill-impact analysis.",
      "Timber — Secured initial customer commitments to restore executive priority for an internal usage-metering platform; partnered with Engineering and more than 40 internal teams to launch the platform and scale adoption.",
      "Cloud portfolio — Governed pricing and monetization decisions across four services, using customer elasticity, competitive total cost of ownership, and unit economics to guide product strategy."
    ],
    "cases": [
      {
        "key": "aws",
        "title": "Application Signals: discovery to adoption"
      },
      {
        "key": "xray",
        "title": "X-Ray: pricing, metering & customer migration"
      },
      {
        "key": "timber",
        "title": "Timber: internal platform delivery"
      }
    ]
  },
  "amazon": {
    "company": "Amazon Retail",
    "title": "Senior Product Manager",
    "period": "February 2025 – Present",
    "location": "Seattle, WA",
    "focus": "AI/ML products & scalable decision frameworks",
    "description": "Lead product strategy and roadmap prioritization for GenAI shopping experiences and ML sizing, combining customer research, experimentation, and cross-functional execution. Build reusable analysis frameworks that help teams make product and business decisions.",
    "skills": [
      "AI/ML product strategy",
      "Roadmap prioritization",
      "Customer experimentation",
      "SQL & seller research",
      "ML product requirements",
      "Cross-team adoption"
    ],
    "achievements": [
      "GenAI Virtual Try-On — Led product strategy and MVP prioritization across more than five engineering, UX, and research teams. Combined customer research, adoption data, and 13 competitor benchmarks to prioritize features and remove a high-friction custom avatar experience.",
      "Experimentation — Defined success measures and return-rate guardrails for a 500K+ customer A/B test. Identified fit-accuracy gaps and elevated return risks, and partnered with senior leadership to pause broader rollout.",
      "Global Size Intelligence — Diagnosed a 100–200 basis-point sizing-related return-rate gap through SQL analysis, seller interviews, and product-listing audits. Defined ML size-mapping requirements and launched a top-seller pilot that closed 10% of the gap, equivalent to a 10–20 basis-point return reduction.",
      "Decision frameworks — Scaled a reusable mix-analysis framework to more than 10 teams through training and documentation. Separately developed entitlement and opportunity-sizing frameworks adopted by two teams."
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
  if (item.sources && item.sources.length) {
    const sources = add('div', 'case-sources', '');
    add('span', 'eyebrow', 'PUBLIC PRODUCT CONTEXT', sources);
    for (const source of item.sources) {
      const link = add('a', 'text-link', source.label + ' ↗', sources);
      link.href = source.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  }
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
