// Public-facing case content. Disclosure decisions live in the local review notes.
const caseOrder = ["vto", "sizing", "aws", "xray", "internal-platform"];

const cases = {
  "vto": {
    "name": "GenAI Virtual Try-On",
    "category": [
      "GENERATIVE AI",
      "PRODUCT EXPERIMENTATION"
    ],
    "title": "Building shopping confidence through GenAI.",
    "summary": "An AI shopping experience evaluated against customer trust, fit accuracy, and return economics.",
    "ownership": "I led product strategy, MVP prioritization, and iterative Figma prototyping, then defined experiment measures and quality guardrails with technical and leadership partners.",
    "evidence": [
      [
        "13",
        "competitor solutions benchmarked"
      ],
      [
        "500K+",
        "customers in the A/B test"
      ],
      [
        "Paused",
        "broader rollout at the quality gate"
      ]
    ],
    "metric": "500K+",
    "metricLabel": "Customers in a controlled A/B test. The outcome was a disciplined rollout decision.",
    "sections": [
      [
        "Problem",
        "Fashion customers struggle to picture apparel on themselves. A generated image could help, but visual appeal alone could not establish realistic expectations about fit."
      ],
      [
        "Ownership",
        "I led product strategy, MVP prioritization, and Figma prototyping across engineering, UX, and research. I defined experiment measures and quality guardrails, then partnered with leadership on the rollout decision. Engineering owned implementation."
      ],
      [
        "Insights",
        "Customer research, adoption data, and 13 competitor benchmarks challenged the value of custom avatars. Setup added friction before shoppers reached a useful preview."
      ],
      [
        "Product Decisions",
        "I deprioritized custom avatars to focus the MVP on the core try-on journey. Fit accuracy and return-rate guardrails would determine whether the experience was ready to scale."
      ],
      [
        "Execution",
        "I iterated on the prototype with UX and technical partners, evaluated implementation tradeoffs, and reviewed results from a 500K+ customer A/B test with senior leadership."
      ],
      [
        "Outcomes",
        [
          "The experiment surfaced fit-accuracy and return-rate concerns. I partnered with leadership to pause broader rollout while those issues were addressed.",
          "The result was a rollout decision, not a broad launch or a demonstrated reduction in returns. No conversion improvement is claimed."
        ]
      ],
      [
        "Lessons & Tradeoffs",
        "Removing avatar setup reduced MVP scope; it did not remove the need to evaluate the AI experience. The harder tradeoff was reach versus trust: compelling output was insufficient when fit expectations and return risks remained unresolved."
      ]
    ],
    "note": "Scope: controlled customer experimentation and a rollout decision. The diagram is a conceptual view of the decision process.",
    "diagram": {
      "variant": "gate",
      "title": "A quality gate before scale.",
      "intro": "Work backward from the decision the shopper needs to make.",
      "steps": [
        [
          "Shopper question",
          "How will this look on me?"
        ],
        [
          "Core MVP",
          "Defer avatar setup."
        ],
        [
          "A/B test",
          "Evaluate the experience."
        ]
      ],
      "branches": [
        [
          "Meets quality bar",
          "Consider scale"
        ],
        [
          "Fit / return risks",
          "Pause and iterate"
        ]
      ],
      "decision": [
        "ROLLOUT DECISION",
        "Resolve quality risks before scaling."
      ]
    },
    "kicker": "GENERATIVE AI / PRODUCT EXPERIMENTATION",
    "intro": "An AI shopping experience evaluated against customer trust, fit accuracy, and return economics.",
    "preview": {
      "title": "Trust before scale.",
      "steps": [
        [
          "MVP choice",
          "Defer custom avatars."
        ],
        [
          "Rollout gate",
          "Resolve fit and return risks."
        ]
      ],
      "tradeoff": "A compelling image must also support a dependable buying decision."
    },
    "lifecycle": {
      "intro": "From understanding shopping friction to deciding whether an AI experience was ready to scale.",
      "highlight": 5,
      "stages": [
        {
          "phase": "Discover",
          "title": "Identify friction in the shopping journey",
          "focus": "Where did existing try-on experiences leave apparel shoppers uncertain?",
          "work": "I examined purchase and return journeys and historical try-on adoption, including the VTO Shoes experience.",
          "method": "I combined journey telemetry with targeted shopper-survey evidence. I examined immersive-mode entry friction and visual realism as potential barriers to useful adoption.",
          "decision": "The product problem was apparel shopping uncertainty, not simply access to a more immersive experience. Visual novelty would not be enough to resolve it.",
          "result": "Discovery focused the opportunity on a useful shopping aid that fit the purchase journey and set realistic expectations."
        },
        {
          "phase": "Define",
          "title": "Scope the MVP and reject costly friction",
          "focus": "Was a custom avatar necessary to deliver the core customer benefit?",
          "work": "I benchmarked 13 competitors and relevant internal experiences, and assessed how improvements in diffusion approaches changed what an MVP could deliver.",
          "method": "I brought together survey findings, competitor evidence, and adoption data to evaluate the proposed avatar feature before substantial engineering investment.",
          "decision": "I deprioritized custom avatars. I defined CTR, cart conversion, and GMV/OPS as engagement and purchase measures, with Customer-Initiated Return Rate as a quality guardrail.",
          "result": "The MVP had a narrower feature scope and an evaluation plan that considered customer behavior alongside return risk."
        },
        {
          "phase": "Design",
          "title": "Make try-on part of shopping",
          "focus": "How could shoppers reach useful comparisons without leaving their purchase flow?",
          "work": "I personally developed iterative Figma prototypes and used UX reviews and leadership feedback to refine the experience.",
          "method": "The designs explored product-detail-page entry, side-by-side style and color comparison, and direct add-to-cart. I also evaluated open-source and proprietary diffusion approaches with technical partners.",
          "decision": "I prioritized shopping utility over visual novelty: entry, comparison, and the next purchase action mattered alongside generated-image quality.",
          "result": "The prototypes gave UX reviews and technical scoping a concrete customer flow to assess before delivery."
        },
        {
          "phase": "Build",
          "title": "Translate the experience into requirements",
          "focus": "What needed to be true for the MVP to work within a product detail page?",
          "work": "I partnered with a Technical PM, Applied Science, and Engineering on customer and experience-level requirements.",
          "method": "Our scoping covered response latency, product-detail-page integration, anticipated scale, and measurement. I connected those considerations to the intended customer journey.",
          "decision": "We evaluated visual quality against development speed, scalability, and cost. My role was product requirements and prioritization, not independently engineering or training the diffusion model.",
          "result": "The work translated prototypes into an achievable experiment scope and explicit experience criteria for technical delivery."
        },
        {
          "phase": "Launch",
          "title": "Run a controlled customer experiment",
          "focus": "Could the experience support shopping decisions while meeting its quality guardrail?",
          "work": "I coordinated product and technical stakeholders around the controlled A/B experiment and the measures used to evaluate it.",
          "method": "The 500K+ customer test examined engagement and purchase behavior alongside Customer-Initiated Return Rate. These were different signals, not interchangeable definitions of success.",
          "decision": "This launch was controlled experimentation, not unrestricted general availability. The return guardrail remained part of the rollout decision.",
          "result": "The experiment produced evidence for the rollout review rather than an assumption that the experience was ready for general availability."
        },
        {
          "phase": "Measure",
          "title": "Know when not to scale",
          "focus": "Did the evidence justify broader rollout, beyond an appealing generated experience?",
          "work": "I reviewed the experiment with technical partners and senior leadership and recommended against broader rollout while fit-accuracy and return-rate concerns remained.",
          "method": "I considered purchase behavior alongside the quality guardrail, separating appearance visualization from actual fit prediction.",
          "decision": "A purchase-intent signal cannot establish accurate fit. I prioritized customer trust and return risk over expanding the experience before the quality bar was met.",
          "result": "Broader rollout was paused. The product lesson was to evaluate size-and-fit capabilities alongside visualization; that direction is not presented as a subsequently delivered launch."
        }
      ]
    }
  },
  "sizing": {
    "name": "Global Size Intelligence",
    "category": [
      "MACHINE LEARNING",
      "SELLER PLATFORM"
    ],
    "title": "Turning fragmented size data into better buying decisions.",
    "summary": "A category-adjusted returns investigation became an ML size-mapping initiative, validated with top sellers.",
    "ownership": "I led SQL analysis and seller research, translated the root causes into product requirements, and aligned U.S. technical and China business teams around the pilot.",
    "evidence": [
      [
        "100–200 bps",
        "category-adjusted return-rate gap"
      ],
      [
        "ML mapping",
        "product requirements defined"
      ],
      [
        "≈10%",
        "gap closed in the seller pilot"
      ]
    ],
    "metric": "≈10%",
    "metricLabel": "Of the diagnosed gap closed in the pilot, equivalent to roughly 10–20 basis points of return-rate reduction.",
    "sections": [
      [
        "Problem",
        "China-based FBA apparel sellers had a higher sizing-related return rate even after category adjustment. We needed to isolate the part a product intervention could address."
      ],
      [
        "Ownership",
        "I led SQL analysis, seller interviews, and ASIN-level audits, then translated the findings into ML size-mapping requirements. I aligned U.S. technical and China business teams around a top-seller pilot."
      ],
      [
        "Insights",
        "Adjusting for category mix isolated a 100–200 basis-point gap. Seller interviews and listing audits linked the return signal to inconsistent size information and mapping problems."
      ],
      [
        "Product Decisions",
        "I focused the requirements on size mapping rather than treating the gap as an assortment problem. A top-seller pilot would test the intervention before a broader rollout commitment."
      ],
      [
        "Execution",
        "I connected the data investigation with seller context, aligned requirements across regions, and supported pilot delivery. Validation measured progress against the diagnosed sizing-related return gap."
      ],
      [
        "Outcomes",
        [
          "The pilot closed approximately 10% of the gap, equivalent to roughly a 10–20 basis-point return-rate reduction.",
          "The findings became ML size-mapping requirements. Expansion remains a separate decision; the pilot is neither a global launch nor a 10% reduction in all returns."
        ]
      ],
      [
        "Lessons & Tradeoffs",
        "Category adjustment prevented an assortment effect from being mistaken for a sizing problem. A focused seller pilot made validation practical, but its result should not be generalized to every seller or category."
      ]
    ],
    "note": "Baseline gap and pilot improvement are distinct measures. The observed result applies to the top-seller pilot; expansion remains a separate decision.",
    "diagram": {
      "variant": "mapping",
      "title": "From evidence to a mapping requirement.",
      "intro": "Use data and seller context to choose the intervention.",
      "sources": [
        [
          "SQL analysis",
          "Adjust category mix"
        ],
        [
          "Seller research",
          "Interviews + ASIN audits"
        ]
      ],
      "steps": [
        [
          "Find the cause",
          "Size data and mapping gaps"
        ],
        [
          "Define requirements",
          "ML-assisted size mapping"
        ],
        [
          "Run a seller pilot",
          "Measure the diagnosed gap"
        ]
      ],
      "decision": [
        "PILOT SCOPE",
        "Validate locally before considering expansion."
      ]
    },
    "kicker": "MACHINE LEARNING / SELLER PLATFORM",
    "intro": "A category-adjusted returns investigation became an ML size-mapping initiative, validated with top sellers.",
    "preview": {
      "title": "Fix the input, then validate.",
      "steps": [
        [
          "Root cause",
          "Separate sizing from category mix."
        ],
        [
          "Product choice",
          "Pilot ML-assisted size mapping."
        ]
      ],
      "tradeoff": "Evidence from top sellers supports a pilot decision, not a global rollout."
    },
    "lifecycle": {
      "intro": "How a category-adjusted returns investigation became requirements for an ML-assisted seller solution.",
      "highlight": 2,
      "stages": [
        {
          "phase": "Discover",
          "title": "Separate a sizing signal from category mix",
          "focus": "Was the apparent return gap explained by what sellers sold, or by a sizing problem?",
          "work": "I investigated sizing-related returns among China-based FBA apparel sellers using SQL.",
          "method": "I used category-adjusted comparisons to distinguish the sizing-related signal from differences in assortment. The diagnosed gap was 100–200 basis points.",
          "decision": "I treated the adjusted gap as a problem to investigate, not proof that seller location caused returns or that an ML intervention would close the entire gap.",
          "result": "The analysis supplied a defined baseline and narrowed the investigation to sizing-related causes."
        },
        {
          "phase": "Diagnose",
          "title": "Connect return data to seller evidence",
          "focus": "Which listing and size-mapping problems could account for the signal?",
          "work": "I validated the quantitative findings through seller interviews and ASIN-level audits.",
          "method": "I compared seller explanations with product-listing evidence to identify inconsistent size labels and mapping problems, rather than treating every return as a sizing issue.",
          "decision": "The intervention needed to address an upstream data problem. A return-rate difference alone did not specify what a recommendation system should do.",
          "result": "Research connected the aggregate signal to concrete sizing information and mapping requirements."
        },
        {
          "phase": "Define",
          "title": "Turn root causes into ML product requirements",
          "focus": "What did the mapping solution need to help sellers and shoppers do more consistently?",
          "work": "I translated the seller research and listing audits into ML-assisted size-mapping requirements.",
          "method": "I used the observed label inconsistencies to frame data-quality needs and the seller workflow. Requirements described the customer problem and intended mapping behavior, with technical implementation owned by the relevant teams.",
          "decision": "I focused on size mapping instead of a general return-reduction program. The requirements had to remain tied to the sizing issue identified in discovery.",
          "result": "The result was a product direction that technical teams could scope and validate with a targeted seller pilot."
        },
        {
          "phase": "Build",
          "title": "Align technical scope with regional context",
          "focus": "How could the team deliver a useful pilot without assuming global readiness?",
          "work": "I worked across U.S. technical and China business teams to align solution requirements and pilot scope.",
          "method": "I connected technical discussions back to seller evidence, data quality, and the original category-adjusted return problem.",
          "decision": "My ownership was translating research and aligning the product scope. Technical teams owned the ML implementation; the pilot was the vehicle for testing whether the product addressed the diagnosed problem.",
          "result": "The shared scope supported a focused pilot with selected top sellers rather than an immediate global rollout."
        },
        {
          "phase": "Pilot",
          "title": "Validate with selected top sellers",
          "focus": "Did the proposed intervention address the diagnosed problem in practice?",
          "work": "I launched the targeted top-seller pilot with regional and technical partners.",
          "method": "The pilot linked the size-mapping intervention to the sizing-related return gap established by the investigation.",
          "decision": "A focused cohort made the solution testable. Its outcome would inform a broader decision, not establish effectiveness across every category and seller.",
          "result": "The pilot generated the reported gap-closure result and a basis for considering further expansion."
        },
        {
          "phase": "Measure",
          "title": "Interpret gap closure carefully",
          "focus": "What does the reported improvement mean relative to the baseline?",
          "work": "I evaluated the reported pilot result against the diagnosed sizing-related gap rather than presenting it as a reduction in all returns.",
          "method": "Approximately 10% gap closure corresponds to roughly 10–20 basis points against a 100–200 basis-point baseline when the cohort and return-rate definition are comparable.",
          "decision": "The distinction is relative gap closure versus an absolute return-rate change. The pilot result should not be generalized into a global impact or a causal model-accuracy claim.",
          "result": "Further expansion remains a separate decision. The pilot evidence supports a bounded result, rather than a claim of global effectiveness."
        }
      ]
    }
  },
  "aws": {
    "name": "CloudWatch Application Signals",
    "category": [
      "CLOUD PRODUCT",
      "0-TO-1 LAUNCH"
    ],
    "title": "From product vision to a scalable observability business.",
    "summary": "A cloud product shaped through customer needs, roadmap tradeoffs, understandable pricing, and viable infrastructure economics.",
    "ownership": "I co-owned roadmap, PRDs, prioritization, and launch readiness with Product and Engineering. I independently led pricing, business strategy, and cost economics.",
    "evidence": [
      [
        "0 → 1",
        "shared product launch ownership"
      ],
      [
        "3 tiers",
        "usage-based pricing design"
      ],
      [
        "Iteration",
        "post-launch product & packaging"
      ]
    ],
    "metric": "0 → 1",
    "metricLabel": "Shared product ownership from discovery to launch, with independent leadership of the commercial model.",
    "milestones": [
      [
        "Nov 30, 2023",
        "Public preview"
      ],
      [
        "Jun 10, 2024",
        "General availability"
      ],
      [
        "After GA",
        "Cross-service bundling"
      ]
    ],
    "sections": [
      [
        "Problem",
        "Developers need connected application signals to investigate issues. Adoption also depends on workload support, useful integrations, and predictable usage costs."
      ],
      [
        "Ownership",
        "I co-owned the roadmap, PRDs, prioritization, and launch readiness with a Product Manager and Engineering. I independently led pricing, business strategy, and cost economics. Engineering owned implementation."
      ],
      [
        "Insights",
        "Customer needs and workload analysis connected adoption barriers to roadmap choices. Language support and integration mattered alongside the commercial model; technical availability alone was not enough."
      ],
      [
        "Product Decisions",
        "I designed a three-tier usage-based structure with free and usage-based allowances. With Product and Engineering, I connected feature priorities to adoption needs and evaluated usage efficiency against cost economics. Later cross-service bundling was a separate iteration, not part of initial GA."
      ],
      [
        "Execution",
        "I coordinated commercial requirements with roadmap and launch decisions, partnered on economics validation, and supported integration and adoption work. After launch, I advanced bundled pricing across observability services."
      ],
      [
        "Outcomes",
        [
          "Application Signals reached public preview on November 30, 2023, and GA on June 10, 2024.",
          "Post-launch work continued across product integration, adoption decisions, and later cross-service bundling. No customer-growth or financial result is claimed here."
        ]
      ],
      [
        "Lessons & Tradeoffs",
        "Launch readiness and adoption readiness are different. Product usefulness, integration effort, bill predictability, and infrastructure economics must inform one another. The roadmap and commercial model need room to evolve as customers use the product."
      ]
    ],
    "note": "Official announcements support the preview and GA dates. The later bundle is not presented as part of the initial GA, and this account does not claim sole ownership of implementation.",
    "sources": [
      {
        "label": "AWS: public preview announcement",
        "url": "https://aws.amazon.com/about-aws/whats-new/2023/11/amazon-cloudwatch-applications-signals-observe-preview/"
      },
      {
        "label": "AWS: general availability announcement",
        "url": "https://aws.amazon.com/about-aws/whats-new/2024/06/amazon-cloudwatch-application-signals-application-monitoring/"
      },
      {
        "label": "AWS: public pricing structure",
        "url": "https://aws.amazon.com/cloudwatch/pricing/"
      }
    ],
    "diagram": {
      "variant": "lanes",
      "title": "Two tracks. One product decision.",
      "intro": "Connect adoption needs with commercial decisions.",
      "lanes": [
        [
          "SHARED PRODUCT",
          [
            "Customer needs",
            "Roadmap choices",
            "Launch & adoption"
          ]
        ],
        [
          "MY COMMERCIAL",
          [
            "Tiered pricing",
            "Cost economics",
            "Pricing iteration"
          ]
        ]
      ],
      "decision": [
        "DELIVERY SEQUENCE",
        "Preview → GA → Later Bundling"
      ]
    },
    "kicker": "CLOUD PRODUCT / 0-TO-1 LAUNCH",
    "intro": "A cloud product shaped through customer needs, roadmap tradeoffs, understandable pricing, and viable infrastructure economics.",
    "preview": {
      "title": "Two tracks, one launch.",
      "steps": [
        [
          "Shared product scope",
          "Roadmap, features, and launch."
        ],
        [
          "My commercial scope",
          "Pricing and cost economics."
        ]
      ],
      "tradeoff": "Make the product useful to adopt and the usage model understandable to buy."
    },
    "lifecycle": {
      "intro": "A cloud launch in which roadmap decisions, packaging, adoption, and infrastructure economics had to work together.",
      "highlight": 2,
      "stages": [
        {
          "phase": "Discover",
          "title": "Understand the observability workflow",
          "focus": "What prevented developers from adopting connected application observability?",
          "work": "I worked with Product and Engineering to connect customer observability problems and adoption barriers to product requirements.",
          "method": "Discovery considered the customer need to move across metrics, traces, and logs, alongside supported workloads and integration needs. This describes the workflow requirement, not a claim that every integration shipped at GA.",
          "decision": "Technical availability was insufficient if customers could not fit the service into their investigation workflow or predict its usage costs.",
          "result": "Customer needs informed both the capability roadmap and the commercial-model work."
        },
        {
          "phase": "Define",
          "title": "Develop two connected product tracks",
          "focus": "How should product usefulness and the commercial model reinforce one another?",
          "work": "I jointly developed roadmap and PRD decisions with Product and Engineering, while independently leading pricing, business strategy, and cost economics.",
          "method": "I considered customer segments and workloads alongside usage-based pricing and technical economics. This connected what customers needed with how usage would be charged.",
          "decision": "Shared product ownership did not mean sole ownership of engineering architecture. The commercial track was my independent responsibility, with technical input from Engineering.",
          "result": "Requirements and commercial design could be evaluated together rather than treating pricing as a final launch attachment."
        },
        {
          "phase": "Prioritize",
          "title": "Balance adoption and sustainable usage",
          "focus": "Which capability and packaging choices made the launch useful and economically viable?",
          "work": "I participated in feature prioritization and launch-readiness decisions and designed the three-tier usage-based pricing structure.",
          "method": "I evaluated free and usage-based allowances alongside cost economics, usage efficiency, and customer adoption needs with technical partners.",
          "decision": "A low-friction entry model still had to account for infrastructure consumption. Product priorities and pricing allowances needed to support the same customer use cases.",
          "result": "These tradeoffs informed the initial launch scope and commercial structure without making later bundling part of GA."
        },
        {
          "phase": "Build",
          "title": "Coordinate product and commercial requirements",
          "focus": "What needed to align before the service and its charging model could launch?",
          "work": "I partnered with Product Management and Engineering on product readiness and connected pricing and cost requirements to delivery decisions.",
          "method": "I collaborated on economics validation and usage efficiency while supporting integration and adoption work across teams.",
          "decision": "Engineering owned the system implementation. My contribution was aligning the product and commercial requirements and resolving their tradeoffs with the relevant owners.",
          "result": "Launch readiness covered the customer-facing product and commercial experience, not just technical availability."
        },
        {
          "phase": "Launch",
          "title": "Move from preview to general availability",
          "focus": "Was the product ready for customers to evaluate and then adopt more broadly?",
          "work": "I supported pricing approval and customer-facing launch coordination within the shared product launch effort.",
          "method": "Public preview began November 30, 2023; general availability followed on June 10, 2024. The official announcements are linked below.",
          "decision": "Preview and GA were separate milestones. Later cross-service packaging should not be retroactively attributed to the initial GA release.",
          "result": "The service reached GA with a tiered usage-based model. Public launch dates verify availability, not personal ownership or private business results."
        },
        {
          "phase": "Iterate",
          "title": "Use adoption needs to revisit priorities",
          "focus": "What still stood between a launched service and useful customer adoption?",
          "work": "I supported product integration and adoption decisions and subsequently advanced bundled pricing across observability services.",
          "method": "Adoption observations informed discussions about integrations, language support, and packaging. These were inputs to roadmap iteration, not evidence of a quantified adoption lift.",
          "decision": "Later bundling represented another product and commercial decision after GA. The public account separates that work from the original launch.",
          "result": "The work continued through adoption and packaging iteration, with later bundling kept separate from the original launch."
        }
      ]
    }
  },
  "xray": {
    "name": "AWS X-Ray Repricing",
    "category": [
      "MONETIZATION",
      "BILLING PRODUCT REDESIGN"
    ],
    "title": "Redesigning pricing around how the product actually works.",
    "summary": "A structural mismatch between the charging unit and service cost drivers called for a product and billing redesign.",
    "ownership": "I identified the problem, selected the commercial model, and led product requirements, pricing documentation, customer-impact analysis, and rollout planning with Engineering.",
    "evidence": [
      [
        "GB + spans",
        "hybrid charging model"
      ],
      [
        "PRD",
        "metering & billing redesign"
      ],
      [
        "Migration",
        "customer bill-impact planning"
      ]
    ],
    "metric": "GB + spans",
    "metricLabel": "Data volume and tracing operations informed the redesigned charging model.",
    "sections": [
      [
        "Problem",
        "Per-trace charging no longer consistently reflected the infrastructure work behind a trace. Changing the price alone would not resolve the mismatch between usage, customer charges, and cost."
      ],
      [
        "Ownership",
        "I diagnosed the economics problem, compared models, and led pricing documentation and product requirements. I modeled customer impact and partnered with Engineering on metering, billing requirements, and rollout planning. Engineering owned implementation."
      ],
      [
        "Insights",
        "A trace is not a uniform unit of work: application complexity changes what it represents. The evaluation needed to consider both data volume and tracing activity, alongside what each alternative would mean for customer bills."
      ],
      [
        "Product Decisions",
        "I selected a hybrid GB + spans model after evaluating volume-based and activity-based alternatives. GB represents data volume; spans represent operations within traces. Together they reflect two dimensions of usage instead of treating every trace as equivalent. I evaluated customer bill changes, elasticity, and multi-year scenarios alongside cost alignment; no quantitative ranking of alternatives is claimed."
      ],
      [
        "Execution",
        "I translated the model into metering and billing requirements with Engineering, prepared the leadership recommendation, and incorporated customer bill impact and migration risk into rollout planning."
      ],
      [
        "Outcomes",
        [
          "The redesign established a GB + spans approach supported by product requirements, customer-impact analysis, and rollout planning.",
          "Later service performance was observed after my transition out of AWS. It is separate from my redesign work and is not presented as a personally measured launch result."
        ]
      ],
      [
        "Lessons & Tradeoffs",
        "A hybrid model can better represent cost drivers while making bills harder to explain than a single charging unit. Evaluating the customer transition was therefore part of selecting the model, not a task to postpone until after pricing approval."
      ]
    ],
    "note": "Historical product account, not a statement that all current X-Ray usage follows one pricing model. Later financial results and customer migration metrics are omitted.",
    "diagram": {
      "variant": "comparison",
      "title": "Change the unit, then plan the transition.",
      "intro": "Evaluate cost alignment and customer bill changes together.",
      "options": [
        [
          "GB",
          "Data volume"
        ],
        [
          "Spans",
          "Tracing activity"
        ],
        [
          "GB + spans",
          "Selected hybrid"
        ]
      ],
      "steps": [
        [
          "Define metering",
          "Translate units into billing"
        ],
        [
          "Evaluate bills",
          "Model impact and migration risk"
        ],
        [
          "Plan transition",
          "Prepare rollout requirements"
        ]
      ],
      "decision": [
        "PRODUCT TRADEOFF",
        "Cost alignment must work for customers, too."
      ]
    },
    "kicker": "MONETIZATION / BILLING PRODUCT REDESIGN",
    "intro": "A structural mismatch between the charging unit and service cost drivers called for a product and billing redesign.",
    "preview": {
      "title": "Cost fit meets bill impact.",
      "steps": [
        [
          "Model choice",
          "Represent volume and tracing activity."
        ],
        [
          "Migration lens",
          "Evaluate changes to customer bills."
        ]
      ],
      "tradeoff": "Better cost alignment adds billing complexity that customers must be able to understand."
    },
    "lifecycle": {
      "intro": "From diagnosing a charging-unit mismatch to designing requirements and evaluating the customer transition.",
      "highlight": 2,
      "stages": [
        {
          "phase": "Diagnose",
          "title": "Question the billing unit",
          "focus": "Why was per-trace billing no longer tracking service economics reliably?",
          "work": "I identified deterioration in service economics and investigated the mismatch between per-trace charges and the work behind each trace.",
          "method": "I evaluated the underlying usage and cost drivers. A trace can represent different amounts of data and tracing activity as application complexity changes.",
          "decision": "A price-point adjustment alone would leave the structural mismatch in place. The charging unit itself needed evaluation.",
          "result": "The diagnosis reframed the task as a pricing and billing-product redesign rather than a simple rate change."
        },
        {
          "phase": "Evaluate",
          "title": "Compare commercial and technical alternatives",
          "focus": "Which model could represent usage while remaining understandable to customers?",
          "work": "I compared usage-volume, metric/activity-based, and hybrid approaches.",
          "method": "I evaluated cost alignment, metering implications, and customer bill impact together, rather than judging the commercial alternatives on service economics alone.",
          "decision": "A single unit can be simpler to explain, while a hybrid can represent more than one usage dimension. Neither simplicity nor cost fit was sufficient on its own.",
          "result": "The evaluation supported a model choice and identified the migration questions that had to accompany it."
        },
        {
          "phase": "Define",
          "title": "Translate GB + spans into product requirements",
          "focus": "How should the selected model map to charging and metering behavior?",
          "work": "I selected GB + spans and led product requirements and pricing documentation with engineering input.",
          "method": "GB represents data volume; spans represent operations within traces. I translated those charging dimensions into requirements for metering and billing logic.",
          "decision": "The hybrid reflects both dimensions instead of assuming every trace is equivalent. That cost-alignment rationale had to be weighed against a more complex customer bill.",
          "result": "The output was a defined commercial model and requirements for Engineering, not a claim that I authored the underlying implementation."
        },
        {
          "phase": "Align",
          "title": "Evaluate the business and customer transition",
          "focus": "Could the redesign be supported beyond a single expected usage scenario?",
          "work": "I prepared multi-year financial scenarios, assessed elasticity and customer bill impact, and developed the leadership recommendation.",
          "method": "Scenario modeling examined the commercial implications of the proposed charging units alongside customer-transition considerations.",
          "decision": "Modeled benefits were forecasts, not realized outcomes. Leadership alignment required considering bill predictability and migration risk as well as service economics.",
          "result": "Leadership approved the redesign, establishing a basis for the engineering and rollout work."
        },
        {
          "phase": "Implement",
          "title": "Partner on billing delivery and rollout",
          "focus": "How would the requirements become a customer-facing charging experience?",
          "work": "I coordinated with Engineering on metering and billing redesign and developed rollout and customer-transition considerations.",
          "method": "The work connected pricing documentation, product requirements, and bill-impact analysis to delivery discussions.",
          "decision": "The transition was part of the product design. Cost alignment did not remove the need to consider customers whose bills would change.",
          "result": "Engineering delivered the underlying system changes, supported by the product requirements and transition planning."
        },
        {
          "phase": "Measure",
          "title": "Separate redesign ownership from later results",
          "focus": "Which outcomes can be attributed to the period I directly led?",
          "work": "My direct contribution was the diagnosis, model selection, requirements, customer-impact analysis, and rollout planning.",
          "method": "Later service performance was observed after my transition out of AWS. The account keeps that timing separate from the work I directly led.",
          "decision": "A modeled margin scenario is not a measured launch result, and a later observed outcome should not be represented as one I personally measured at launch.",
          "result": "The public case describes the redesign and its rationale. Financial improvement values remain omitted pending disclosure authorization."
        }
      ]
    }
  },
  "internal-platform": {
    "name": "AWS Internal Usage Platform",
    "category": [
      "INTERNAL CLOUD PLATFORM",
      "PRODUCT ADOPTION"
    ],
    "title": "Turning usage visibility into measurable cost efficiency.",
    "summary": "Customer commitments and an adoption plan helped restore priority for an internal logging usage and metering platform.",
    "ownership": "I developed the business case and adoption strategy, secured customer commitments, and partnered with Engineering on delivery and internal teams on value realization.",
    "evidence": [
      [
        "Customer goals",
        "commitments informed prioritization"
      ],
      [
        "Metering",
        "usage platform launched with Engineering"
      ],
      [
        "Follow-up",
        "adoption and consumption review"
      ]
    ],
    "metric": "Adoption",
    "metricLabel": "The platform’s value depended on teams using visibility to change consumption.",
    "sections": [
      [
        "Problem",
        "Manual tracking limited logging-usage visibility and consumption optimization. The internal platform also had to compete for engineering capacity."
      ],
      [
        "Ownership",
        "I identified customer teams and opportunities, developed the business case, and led adoption planning. I joined an initiative with an existing product and technical design; Engineering owned architecture and implementation."
      ],
      [
        "Insights",
        "Visibility would create value only if teams acted on it. Customer commitments made the opportunity concrete enough to inform prioritization."
      ],
      [
        "Product Decisions",
        "I used opportunity sizing and customer commitments to seek renewed priority with Engineering and leadership. I tied platform delivery to an adoption plan and follow-up on consumption, rather than treating launch as the outcome."
      ],
      [
        "Execution",
        "I partnered with Engineering on launch, coordinated adoption with internal teams, and tracked value realization as the optimization program expanded."
      ],
      [
        "Outcomes",
        [
          "The usage and metering platform launched with Engineering, supported by a customer business case.",
          "Internal adoption extended the optimization program beyond its initial commitments. Commitments remained distinct from subsequently realized benefits; financial amounts are omitted."
        ]
      ],
      [
        "Lessons & Tradeoffs",
        "Internal demand must compete with other engineering priorities. Commitments can support an investment decision, but they are not realized value. Delivery, adoption, and benefit tracking each need ownership."
      ]
    ],
    "note": "Scope: shared delivery of an internal usage platform, customer adoption, and follow-through on consumption optimization.",
    "diagram": {
      "variant": "adoption",
      "title": "Visibility becomes value through adoption.",
      "intro": "Connect delivery to customer action.",
      "stages": [
        [
          "Opportunity",
          "Find usage-visibility gaps."
        ],
        [
          "Commitments",
          "Inform engineering priority."
        ],
        [
          "Delivery",
          "Launch with Engineering."
        ],
        [
          "Follow-through",
          "Track adoption and benefits."
        ]
      ],
      "decision": [
        "VALUE REALIZATION",
        "Commitments are not realized benefits."
      ]
    },
    "kicker": "INTERNAL CLOUD PLATFORM / PRODUCT ADOPTION",
    "intro": "Customer commitments and an adoption plan helped restore priority for an internal logging usage and metering platform.",
    "preview": {
      "title": "Demand before investment.",
      "steps": [
        [
          "Prioritization",
          "Connect customer goals to the business case."
        ],
        [
          "Value realization",
          "Follow delivery with adoption work."
        ]
      ],
      "tradeoff": "Commitments justify prioritization; realized benefits require follow-through."
    },
    "lifecycle": {
      "intro": "How customer commitments and an economic case helped an internal platform earn delivery priority and adoption.",
      "highlight": 2,
      "stages": [
        {
          "phase": "Discover",
          "title": "Identify the visibility gap",
          "focus": "What made logging consumption difficult for internal teams to understand and optimize?",
          "work": "I identified the limitations of manual internal usage tracking and the resulting visibility problem.",
          "method": "I assessed logging-cost visibility and the opportunity for internal customer teams to change consumption.",
          "decision": "The product problem was useful visibility that teams could act on, not simply collecting more usage data.",
          "result": "Discovery connected the platform opportunity to internal customers and their optimization needs."
        },
        {
          "phase": "Size Opportunity",
          "title": "Build an economic case for prioritization",
          "focus": "Where could the platform create enough value to justify engineering attention?",
          "work": "I identified potential internal customer teams and evaluated savings opportunities and economic value.",
          "method": "Opportunity sizing connected consumption-optimization needs to the proposed usage and metering platform.",
          "decision": "Potential savings could support a business case but could not be treated as realized benefits. Engineering capacity still had competing priorities.",
          "result": "The opportunity assessment informed customer discussions and the case for renewed investment."
        },
        {
          "phase": "Secure Buy-in",
          "title": "Turn potential demand into commitments",
          "focus": "What evidence would make the platform worth prioritizing?",
          "work": "I developed the customer business case, secured initial commitments, and helped restore executive prioritization.",
          "method": "I connected the opportunity assessment with customer goals and a proposed adoption path, so the prioritization discussion had concrete demand behind it.",
          "decision": "Commitments strengthened the investment case; they were not realized savings. The decision still depended on delivery and subsequent customer action.",
          "result": "The initiative regained priority for engineering delivery, with customer commitments distinct from the later value-realization work."
        },
        {
          "phase": "Build",
          "title": "Partner on an existing platform initiative",
          "focus": "How could product and adoption work support technical delivery?",
          "work": "I partnered with Engineering on platform delivery and connected the customer business case to the initiative.",
          "method": "I joined work with an existing product and technical design. My contribution centered on prioritization, customer needs, and adoption planning.",
          "decision": "Engineering owned architecture and implementation. I did not independently build the platform or author its core technical design.",
          "result": "The shared delivery effort produced a usage and metering platform for internal teams."
        },
        {
          "phase": "Launch",
          "title": "Connect delivery to internal onboarding",
          "focus": "What would help teams move from interest to actual platform use?",
          "work": "I coordinated internal launch and stakeholder onboarding with Engineering and customer teams.",
          "method": "The adoption work connected platform availability to teams with identified consumption-optimization opportunities.",
          "decision": "A functioning platform was a delivery milestone, not proof that customers had changed usage or realized benefits.",
          "result": "Launch created the basis for broader adoption and follow-up on customer goals."
        },
        {
          "phase": "Scale",
          "title": "Track adoption and value realization",
          "focus": "Was the platform creating value beyond its initial customer commitments?",
          "work": "I drove broader internal adoption and coordinated with teams on consumption optimization and value realization.",
          "method": "I tracked progress as the program expanded, keeping initial commitments separate from subsequently realized benefits.",
          "decision": "The economic case needed follow-through: teams had to use the visibility and change consumption. A commitment or platform launch alone did not establish savings.",
          "result": "The program extended beyond its initial commitments. Its value depended on adoption and follow-through, with committed and realized impact kept distinct."
        }
      ]
    }
  }
};
