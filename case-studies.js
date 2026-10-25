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
    }
  }
};
