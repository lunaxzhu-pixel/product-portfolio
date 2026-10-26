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
    "description": "Co-owned CloudWatch Application Signals’ roadmap, PRDs, feature prioritization, and launch readiness with Product and Engineering. Independently led pricing, business strategy, and cost economics across cloud products.",
    "skills": [
      "Product roadmaps & PRDs",
      "Launch readiness",
      "Usage-based pricing",
      "Metering & billing",
      "Cloud portfolio strategy",
      "Engineering collaboration"
    ],
    "achievements": [
      "CloudWatch Application Signals — Co-owned the product roadmap and launch; independently led tiered usage-based pricing and cost strategy. Advanced cross-service bundled pricing as a subsequent phase after the initial GA.",
      "AWS X-Ray Repricing — Led product requirements, pricing documentation, customer-impact analysis, and rollout planning for a GB + spans billing model, partnering with Engineering on metering and billing changes.",
      "Internal usage platform — Built the business case and adoption strategy, secured customer commitments, and partnered with Engineering and internal teams on delivery and value realization.",
      "Cloud portfolio — Connected customer needs, competitive positioning, and unit economics to product and commercial decisions."
    ],
    "cases": [
      {
        "key": "aws",
        "title": "CloudWatch Application Signals"
      },
      {
        "key": "xray",
        "title": "AWS X-Ray Repricing"
      },
      {
        "key": "internal-platform",
        "title": "AWS Internal Usage Platform"
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
      "GenAI Virtual Try-On — Led strategy and MVP prioritization across engineering, UX, and research teams. Synthesized customer research, adoption data, and 13 competitor benchmarks; led iterative Figma prototyping and deprioritized custom avatars.",
      "Experimentation — Defined success measures and quality guardrails for a large-scale customer A/B test. Partnered with senior leadership to pause broader rollout after fit-accuracy and return-rate concerns.",
      "Global Size Intelligence — Isolated a 100–200 basis-point category-adjusted sizing-related return-rate gap. Turned SQL analysis, seller interviews, and listing audits into ML size-mapping requirements.",
      "Pilot validation — Launched a top-seller pilot achieving approximately 10% gap closure, equivalent to roughly 10–20 basis points of return-rate reduction. Broader expansion remains a future decision."
    ],
    "cases": [
      {
        "key": "vto",
        "title": "GenAI Virtual Try-On"
      },
      {
        "key": "sizing",
        "title": "Global Size Intelligence"
      }
    ]
  }
};

function addElement(tag, className, text, parent) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  if (parent) parent.append(element);
  return element;
}

function renderDecisionDiagram(key, scope) {
  const item = cases[key];
  const diagram = item.diagram;
  const figure = addElement('figure', `project-visual decision-visual decision-framework diagram-${diagram.variant}`);
  const titleId = `${scope}-${key}-diagram-title`;
  figure.setAttribute('aria-labelledby', titleId);
  const caption = addElement('figcaption', '', undefined, figure);
  addElement('span', 'eyebrow', 'PRODUCT DECISION FRAMEWORK', caption);
  addElement('h4', '', diagram.title, caption).id = titleId;
  addElement('p', '', diagram.intro, caption);
  const node = (pair, parent, className = '') => {
    const box = addElement('div', `framework-node ${className}`, undefined, parent);
    addElement('strong', '', pair[0], box);
    addElement('p', '', pair[1], box);
    return box;
  };
  if (diagram.sources) {
    const sources = addElement('div', 'framework-sources', undefined, figure);
    diagram.sources.forEach(pair => node(pair, sources));
    addElement('p', 'framework-connector', 'Evidence → requirements', figure);
  }
  if (diagram.options) {
    const options = addElement('div', 'framework-options', undefined, figure);
    diagram.options.forEach((pair, index) => node(pair, options, index === 2 ? 'is-selected' : ''));
  }
  if (diagram.lanes) {
    const lanes = addElement('div', 'framework-lanes', undefined, figure);
    diagram.lanes.forEach(([heading, entries]) => {
      const lane = addElement('div', 'framework-lane', undefined, lanes);
      addElement('p', 'eyebrow', heading, lane);
      const steps = addElement('ol', '', undefined, lane);
      entries.forEach(label => addElement('li', '', label, steps));
    });
  }
  if (diagram.steps) {
    const steps = addElement('ol', 'tryon-flow', undefined, figure);
    diagram.steps.forEach((pair, index) => {
      const step = addElement('li', '', undefined, steps);
      addElement('span', 'flow-number', String(index + 1).padStart(2, '0'), step).setAttribute('aria-hidden', 'true');
      const copy = addElement('div', '', undefined, step);
      addElement('strong', '', pair[0], copy);
      addElement('p', '', pair[1], copy);
    });
  }
  if (diagram.branches) {
    const gate = addElement('div', 'framework-gate', undefined, figure);
    addElement('p', 'eyebrow', 'FIT ACCURACY + RETURN-RATE GUARDRAILS', gate);
    const branches = addElement('div', 'framework-branches', undefined, gate);
    diagram.branches.forEach((pair, index) => node(pair, branches, index === 1 ? 'is-selected' : ''));
  }
  if (diagram.stages) {
    const stages = addElement('ol', 'framework-stages', undefined, figure);
    diagram.stages.forEach((pair, index) => {
      const stage = addElement('li', '', undefined, stages);
      addElement('span', 'eyebrow', String(index + 1).padStart(2, '0'), stage);
      addElement('strong', '', pair[0], stage);
      addElement('p', '', pair[1], stage);
    });
  }
  const decision = addElement('div', 'flow-decision', undefined, figure);
  addElement('span', 'eyebrow', diagram.decision[0], decision);
  addElement('strong', '', diagram.decision[1], decision);
  return figure;
}

function renderDecisionPreview(key) {
  const item = cases[key];
  const preview = item.preview;
  const figure = addElement('figure', `project-visual decision-visual decision-framework decision-preview diagram-${item.diagram.variant}`);
  const titleId = `card-${key}-diagram-title`;
  figure.setAttribute('aria-labelledby', titleId);
  const caption = addElement('figcaption', '', undefined, figure);
  addElement('span', 'eyebrow', 'THE PRODUCT CHOICE', caption);
  addElement('h4', '', preview.title, caption).id = titleId;
  const choices = addElement('dl', 'preview-choices', undefined, figure);
  preview.steps.forEach(([label, text]) => {
    const step = addElement('div', '', undefined, choices);
    addElement('dt', '', label, step);
    addElement('dd', '', text, step);
  });
  const tradeoff = addElement('div', 'flow-decision', undefined, figure);
  addElement('span', 'eyebrow', 'THE TRADEOFF', tradeoff);
  addElement('strong', '', preview.tradeoff, tradeoff);
  return figure;
}

function renderWork() {
  const container = document.querySelector('#project-list');
  const jumpLinks = document.querySelector('#work-index');
  caseOrder.forEach((key, index) => {
    const item = cases[key];
    const jump = addElement('a', '', undefined, jumpLinks);
    jump.href = `#project-${key}`;
    addElement('span', 'work-index-number', String(index + 1).padStart(2, '0'), jump).setAttribute('aria-hidden', 'true');
    addElement('span', '', item.name, jump);
    const card = addElement('article', 'project compact', undefined, container);
    card.id = `project-${key}`;
    card.dataset.project = key;
    card.setAttribute('aria-labelledby', `project-${key}-title`);
    const copy = addElement('div', 'project-copy', undefined, card);
    const tags = addElement('div', 'tags', undefined, copy);
    item.category.forEach(tag => addElement('span', '', tag, tags));
    addElement('p', 'project-label', item.name, copy);
    addElement('h3', '', item.title, copy).id = `project-${key}-title`;
    const ownership = addElement('p', 'project-ownership', undefined, copy);
    addElement('strong', '', 'My ownership: ', ownership);
    ownership.append(document.createTextNode(item.ownership));
    const evidence = addElement('div', 'project-proof', undefined, copy);
    addElement('p', 'eyebrow', 'KEY EVIDENCE', evidence);
    const metrics = addElement('div', 'project-metrics', undefined, evidence);
    item.evidence.forEach(([value, label]) => {
      const metric = addElement('div', '', undefined, metrics);
      addElement('strong', '', value, metric);
      addElement('span', '', label, metric);
    });
    const button = addElement('button', 'case-study-button', undefined, copy);
    button.type = 'button';
    button.dataset.case = key;
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', 'case-dialog');
    button.setAttribute('aria-label', `Read the full case study: ${item.name}`);
    const label = addElement('span', '', 'Read the full case study', button);
    addElement('small', '', 'Decisions, delivery & outcomes', label);
    addElement('span', 'case-button-arrow', '→', button).setAttribute('aria-hidden', 'true');
    card.append(renderDecisionPreview(key));
  });
}
renderWork();

const dialog = document.querySelector('#case-dialog');
const content = document.querySelector('#case-content');
let caseTrigger = null;
let dialogMode = 'case';
let returnToRole = null;

function setDialogLabels(mode, origin) {
  document.querySelector('.dialog-top .eyebrow').textContent = mode === 'role' ? 'STRATEGIC TRAJECTORY / LUNA ZHU' : 'SELECTED WORK / LUNA ZHU';
  document.querySelector('.dialog-close').setAttribute('aria-label', mode === 'role' ? 'Close role details' : 'Close case study');
  document.querySelector('.dialog-done').textContent = mode === 'role' ? 'Back to trajectory' : origin ? 'Back to role' : 'Back to Selected Work';
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
function renderLifecycle(key) {
  const lifecycle = cases[key].lifecycle;
  const section = addElement('section', 'case-lifecycle');
  section.id = `lifecycle-${key}`;
  const headingId = `lifecycle-${key}-title`;
  section.setAttribute('aria-labelledby', headingId);
  const header = addElement('header', 'lifecycle-header', undefined, section);
  addElement('p', 'eyebrow', 'FROM EVIDENCE TO EXECUTION', header);
  const heading = addElement('h3', '', 'Product Development Lifecycle', header);
  heading.id = headingId;
  heading.tabIndex = -1;
  addElement('p', 'lifecycle-intro', lifecycle.intro, header);
  const stages = addElement('ol', 'lifecycle-stages', undefined, section);
  stages.setAttribute('role', 'list');
  lifecycle.stages.forEach((stage, index) => {
    const pivotal = index === lifecycle.highlight;
    const item = addElement('li', `lifecycle-stage${pivotal ? ' is-pivotal' : ''}`, undefined, stages);
    const stageHeader = addElement('header', 'lifecycle-stage-header', undefined, item);
    addElement('span', 'lifecycle-number', String(index + 1).padStart(2, '0'), stageHeader).setAttribute('aria-hidden', 'true');
    const title = addElement('div', '', undefined, stageHeader);
    if (pivotal) addElement('p', 'eyebrow', 'PIVOTAL DECISION', title);
    const stageTitle = addElement('h4', '', undefined, title);
    addElement('span', 'lifecycle-phase', stage.phase, stageTitle);
    stageTitle.append(document.createTextNode(` — ${stage.title}`));
    const body = addElement('div', 'lifecycle-stage-body', undefined, item);
    const points = addElement('ul', 'lifecycle-points', undefined, body);
    stage.points.forEach(({ label, text }) => {
      const point = addElement('li', '', undefined, points);
      addElement('strong', '', label + ': ', point);
      point.append(document.createTextNode(text));
    });
  });
  const back = addElement('button', 'lifecycle-back', 'Back to case overview ↑', section);
  back.type = 'button';
  back.addEventListener('click', () => {
    document.querySelector('#case-title').focus({ preventScroll: true });
    dialog.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
  return section;
}

function renderCase(key) {
  const item = cases[key];
  if (!item) return;
  content.replaceChildren();
  content.dataset.activeCase = key;
  const add = (tag, className, text, parent = content) => addElement(tag, className, text, parent);
  add('p', 'case-kicker', item.kicker);
  add('p', 'case-project-name', item.name);
  const title = add('h2', '', item.title);
  title.id = 'case-title';
  title.tabIndex = -1;
  add('p', 'case-deck', item.intro);
  const lifecycleJump = add('button', 'lifecycle-jump', 'Explore the product development lifecycle ↓');
  lifecycleJump.type = 'button';
  lifecycleJump.setAttribute('aria-controls', `lifecycle-${key}`);
  lifecycleJump.addEventListener('click', () => {
    const target = document.querySelector(`#lifecycle-${key}-title`);
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
  const stat = add('div', 'case-stat', '');
  add('strong', '', item.metric, stat);
  add('span', '', item.metricLabel, stat);
  if (item.milestones) {
    const milestones = add('ol', 'case-milestones', '');
    item.milestones.forEach(([date, label]) => {
      const milestone = add('li', '', '', milestones);
      add('strong', '', date, milestone);
      add('span', '', label, milestone);
    });
  }
  const framework = add('details', 'case-framework', '');
  add('summary', '', 'Explore the decision framework', framework);
  framework.append(renderDecisionDiagram(key, 'detail'));
  for (const [heading, body] of item.sections) {
    const section = add('section', 'case-section', '');
    if (heading === 'Product Decisions') section.classList.add('case-key-decision');
    if (heading === 'Lessons & Tradeoffs') section.classList.add('case-key-tradeoff');
    add('h3', '', heading, section);
    if (Array.isArray(body)) {
      const list = add('ul', '', '', section);
      body.forEach(text => add('li', '', text, list));
    } else add('p', '', body, section);
  }
  content.append(renderLifecycle(key));
  if (item.sources && item.sources.length) {
    const sources = add('div', 'case-sources', '');
    add('span', 'eyebrow', 'PUBLIC PRODUCT CONTEXT', sources);
    item.sources.forEach(source => {
      const link = add('a', 'text-link', source.label + ' ↗', sources);
      link.href = source.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
  }
  add('p', 'case-note', item.note);
  const navigation = add('nav', 'case-pagination', '');
  navigation.setAttribute('aria-label', 'Other case studies');
  const index = caseOrder.indexOf(key);
  [[index - 1, 'Previous'], [index + 1, 'Next']].forEach(([targetIndex, label]) => {
    const target = caseOrder[targetIndex];
    const button = add('button', '', '', navigation);
    button.type = 'button';
    button.disabled = !target;
    add('span', 'eyebrow', label, button);
    add('span', '', target ? cases[target].name : (label === 'Previous' ? 'First case study' : 'Last case study'), button);
    if (target) button.addEventListener('click', () => {
      history.replaceState(null, '', `#case-${target}`);
      openCase(target, caseTrigger, returnToRole);
    });
  });
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
  const requestedKey = location.hash.replace('#case-', '');
  const key = requestedKey === 'timber' ? 'internal-platform' : requestedKey === 'application-signals' ? 'aws' : requestedKey;
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
