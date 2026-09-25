const cases = {
  aws: {
    kicker: 'AWS · Pricing, monetization & go-to-market',
    title: 'A growth engine, built into the pricing.',
    intro: 'Designing a commercial model for a new observability product—connecting customer value, competitive pricing, and infrastructure economics.',
    metric: '$1B+', metricLabel: 'Projected revenue over five years. A business-case forecast, not realized revenue.',
    sections: [
      ['The challenge', 'Enterprise customers needed an end-to-end way to monitor application performance. The product also needed pricing that worked across very different customer sizes: predictable enough to adopt, competitive enough to switch, and sustainable enough to scale.'],
      ['My role', 'As Finance Strategy Manager for Product Economics & Monetization, I owned the pricing, go-to-market, and financial strategy, partnering with Product, Engineering, Applied Science, Economics, and commercial teams.'],
      ['The decisions that mattered', [
        'Start with customer value: combine customer interviews, usage analysis, competitive research, and price elasticity modeling to define the pricing approach.',
        'Connect the pricing unit to cost drivers: model compute, storage, indexing, and data transfer alongside customer-level cost to serve.',
        'Design for adoption and expansion: use free trials, tiering, and bundling to address different workloads and customer needs.',
        'Treat architecture as a commercial decision: evaluate infrastructure tradeoffs against price competitiveness and long-term margins.'
      ]],
      ['From strategy to launch', 'Aligned eight cross-functional teams around pricing, packaging, value metrics, and the monetization infrastructure. Free trial, tiering, and bundle pricing supported the product’s launch; post-launch measurement tracked adoption and revenue.'],
      ['The impact', 'The resulting business model was projected to generate more than $1B in revenue over five years. Related work across the AWS portfolio improved product margins by 100+ basis points by addressing infrastructure inefficiencies.'],
      ['My takeaway', 'Pricing is part of the product experience. The strongest model makes customer value easy to understand while giving the business a sustainable path to serve it.']
    ],
    note: 'Based on my project presentation and resume. The portfolio margin result describes broader AWS work; it is not presented as an isolated result of this launch.'
  },
  vto: {
    kicker: 'Amazon Fashion · Generative AI & experimentation',
    title: 'Less uncertainty. More confident shopping.',
    intro: 'Exploring how generative AI could help customers compare apparel and make more confident purchase decisions—with experiments that looked beyond engagement alone.',
    metric: '+10%', metricLabel: 'Engagement lift in virtual try-on experiments. Internal pilot; not a broad product launch.',
    sections: [
      ['The challenge', 'Customers struggle to predict how apparel will look and fit before it arrives. Product imagery and size charts provide information, but they do not always resolve the uncertainty that leads to trial purchases and returns.'],
      ['My role', 'As Senior Product Manager, I led product strategy and roadmap development, partnering with engineering and applied science on technical requirements, success metrics, and A/B experiments.'],
      ['The product insight', 'The value of virtual try-on comes from helping a customer make a decision—not simply generating an image. I focused the experience on personalized visualization, side-by-side comparison, and integration into the shopping journey.'],
      ['How I tested the idea', [
        'Defined engagement and fit-confidence behaviors alongside conversion-related signals.',
        'Coordinated dependencies across AI, shopping interface, and customer returns teams.',
        'Designed and executed A/B tests to assess how the experience changed customer behavior.',
        'Evaluated customer-initiated returns alongside commercial metrics to avoid optimizing a single part of the journey.'
      ]],
      ['What the experiments showed', 'Experiments showed a 10% lift in engagement and a 25% improvement in behaviors correlated with conversion. That second measure is a behavioral signal, not a 25% increase in purchase conversion.'],
      ['The launch decision', 'The pilot also exposed limitations in fit accuracy and an increase in customer-initiated returns. The product did not proceed to a broad launch. The results clarified the technical and customer-experience improvements needed before scaling.'],
      ['My takeaway', 'A promising engagement result is a reason to investigate further. For AI commerce, the product needs to improve the whole purchase experience—including what happens after delivery.']
    ],
    note: 'Experimental metrics come from my resume. Pilot limitations and the launch decision come from the detailed lifecycle account in my project presentation.'
  },
  sizing: {
    kicker: 'Amazon Fashion · Global strategy & platform thinking',
    title: 'Better fit starts with better foundations.',
    intro: 'Turning a regional returns problem into a scalable product opportunity by connecting sizing standards, seller inputs, and customer-facing recommendations.',
    metric: 'One system', metricLabel: 'Global standards → structured seller data → more consistent fit recommendations.',
    sections: [
      ['The challenge', 'Cross-border apparel sellers operate across different sizing conventions and measurement standards. Inconsistent size charts make it difficult for customers to choose a size and limit the usefulness of downstream recommendation systems.'],
      ['My role', 'I established a strategic partnership with the China team and aligned regional seller context, FBA needs, and global size-and-fit capabilities around the same customer problem.'],
      ['Reframing the problem', 'Instead of asking only how to reduce returns from a seller population, I asked how to make sizing information reliable enough for customers and recommendation systems to make better decisions.'],
      ['The approach', [
        'Trace fit-related returns back to uncertainty in the shopping journey.',
        'Connect global sizing standards with more structured and consistent seller inputs.',
        'Design the foundation to support multiple downstream recommendation experiences.',
        'Align teams around the relationship between input quality, customer decisions, and return economics.'
      ]],
      ['Measuring what matters', 'The measurement framework linked size-chart quality to recommendation effectiveness and, ultimately, fit-related return rates. This kept the initiative focused on customer outcomes rather than adoption of an internal standard alone.'],
      ['The outcome', 'The work established a repeatable approach to sizing intelligence: standardize the data, improve the decision, and evaluate the economic impact. It created a path to extend the model beyond one regional seller population.'],
      ['My takeaway', 'Sometimes the most valuable product work happens upstream. Improving the quality of the underlying information can unlock better experiences across an entire platform.']
    ],
    note: 'This case study describes the strategy and measurement framework. Quantitative outcomes are omitted because the source presentation contains unfinalized figures.'
  }
};

const roles = {
  rrd: {
    company: 'R.R. Donnelley', title: 'Pricing Analyst',
    period: 'August 2015 – August 2017', location: 'Los Angeles, CA',
    focus: 'Pricing & analytics',
    description: 'Built the analytical foundation for my work in product economics: understanding customer purchasing behavior, modeling pricing decisions, and evaluating deal profitability.',
    skills: ['Statistical modeling', 'Scenario analysis', 'Pricing strategy', 'Oracle Database'],
    achievements: [
      'Built statistical pricing models and scenario simulations to optimize deal profitability.',
      'Analyzed customer purchasing trends in Oracle Database to inform pricing strategy.'
    ],
    cases: []
  },
  'internet-brands': {
    company: 'Internet Brands', title: 'Senior Financial Analyst / Business Partner',
    period: 'August 2017 – May 2021', location: 'Los Angeles, CA',
    focus: 'SaaS growth & monetization',
    description: 'Served as a product and finance partner for a $20M ARR SaaS business, connecting pricing, segmentation, and performance management across the customer lifecycle.',
    skills: ['SaaS monetization', 'Customer segmentation', 'Funnel optimization', 'Salesforce & Tableau'],
    achievements: [
      'Increased ARR by 10% through bundling, upsell, and cross-sell monetization models.',
      'Improved lead-to-paid conversion by 50% through digital funnel optimization.',
      'Built Salesforce and Tableau dashboards for activation, churn, and revenue KPIs, reducing the reporting cycle from 10 days to 4.'
    ],
    cases: []
  },
  aws: {
    company: 'Amazon Web Services (AWS)', title: 'Finance Strategy Manager',
    period: 'June 2021 – February 2025', location: 'Seattle, WA',
    focus: 'Product economics & monetization',
    description: 'Owned go-to-market, pricing, and financial strategy for a new observability product projected to generate $1B+ in revenue over five years. Partnered across Product, Engineering, Applied Science, Sales, Legal, and Economics to connect customer value with sustainable growth.',
    skills: ['Pricing & packaging', 'Go-to-market strategy', 'Cloud unit economics', 'Investment planning'],
    achievements: [
      'Defined roadmap and pricing strategy through competitive research, customer interviews, usage analysis, and price elasticity modeling.',
      'Led annual planning and forecasting; built product P&Ls and business cases to guide investment decisions.',
      'Partnered with Engineering and Applied Science on architecture tradeoffs, improving product margins by 100+ basis points by addressing infrastructure inefficiencies.',
      'Repriced an AWS service generating $50M in annual revenue, increasing gross margin by 30+ percentage points.',
      'Led leadership business reviews that delivered $30M in capital expenditure savings.',
      'Supported bundling and go-to-market economics for a product suite projected to generate $600M in revenue over five years.'
    ],
    cases: [{ key: 'aws', title: 'AWS observability: pricing for sustainable growth' }]
  },
  amazon: {
    company: 'Amazon Retail · Fashion', title: 'Senior Product Manager',
    period: 'February 2025 – Present', location: 'Seattle, WA',
    focus: 'AI product strategy & customer experience',
    description: 'Lead product strategy for Amazon Fashion’s next-generation virtual try-on platform, connecting customer insight, technical requirements, and experimentation to help customers make more confident shopping decisions.',
    skills: ['Generative AI', 'Product roadmaps', 'A/B experimentation', 'Voice of Customer', 'Global strategy'],
    achievements: [
      'Shape a multi-year virtual try-on roadmap expected to influence 25% of apparel GMV and reduce return-driven losses by $50M annually; these are roadmap projections.',
      'Designed and executed A/B tests showing a 10% engagement lift and a 25% improvement in behaviors correlated with conversion—not a 25% lift in purchase conversion.',
      'Partner with engineering and applied science to define customer trial metrics, technical requirements, and experiments linking AI engagement to fit-confidence behaviors.',
      'Built a unified Voice of Customer view across billion-plus records and structured signals for an internal AI agent, reducing insight retrieval time by 50% and saving 100 team hours per month.',
      'Established a partnership with the China team to connect sizing standards, seller inputs, and customer-facing recommendations into a scalable global sizing approach.'
    ],
    cases: [{ key: 'vto', title: 'Virtual try-on: testing customer confidence' }, { key: 'sizing', title: 'Global size intelligence: better foundations for fit' }]
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
