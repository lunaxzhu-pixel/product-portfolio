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
        "Fashion customers cannot confidently visualize how apparel will look on them before buying. A generated image could help, but the experience also needed to support realistic expectations about fit."
      ],
      [
        "Ownership",
        "I led product strategy and MVP prioritization across engineering, UX, and research teams. I synthesized customer research, adoption data, and 13 competitor benchmarks; led iterative Figma prototypes; and partnered on implementation tradeoffs. Technical partners owned the engineering build."
      ],
      [
        "Insights",
        "A try-on experience had to fit into the existing shopping journey. Research and adoption evidence challenged the value of custom avatars: extra setup could increase friction before customers reached a useful preview."
      ],
      [
        "Product Decisions",
        "I deprioritized custom avatars and focused the MVP on product-page entry, photo upload, comparison, and a clear path to purchase. We evaluated implementation feasibility and defined success measures alongside a return-rate quality guardrail."
      ],
      [
        "Execution",
        "I worked across disciplines to translate the experience into an achievable MVP, iterate on the prototype, and evaluate the full experience in a 500K+ customer A/B test. I reviewed the evidence with technical partners and senior leadership to inform rollout."
      ],
      [
        "Outcomes",
        [
          "Validated the rollout decision — The test surfaced fit-accuracy and return-rate concerns that required further work before scaling.",
          "Protected the quality bar — I partnered with senior leadership to pause broader rollout. The next product decision was to address fit and trust limitations before expanding the experience.",
          "Scope — This was a controlled experiment. No broad launch, return reduction, or conversion improvement is claimed."
        ]
      ],
      [
        "Lessons & Tradeoffs",
        "A compelling generated experience must help customers make a dependable decision. The tradeoff was between faster reach and confidence in product quality. Guardrails gave the team a concrete reason to keep learning before scaling."
      ]
    ],
    "note": "Scope: controlled customer experimentation and a rollout decision. The diagram is a conceptual view of the decision process.",
    "diagram": {
      "variant": "gate",
      "title": "A quality gate before scale.",
      "intro": "Work backward from the decision the shopper needs to make.",
      "steps": [
        [
          "Customer uncertainty",
          "What will this look like on me?"
        ],
        [
          "MVP prioritization",
          "Keep the core journey; remove avatar setup."
        ],
        [
          "Experimentation",
          "Test the experience with 500K+ customers."
        ]
      ],
      "branches": [
        [
          "Quality bar met",
          "Consider broader rollout"
        ],
        [
          "Fit / return concerns",
          "Pause and iterate"
        ]
      ],
      "decision": [
        "ROLLOUT DECISION",
        "Resolve quality risks before scaling."
      ]
    },
    "kicker": "GENERATIVE AI / PRODUCT EXPERIMENTATION",
    "intro": "An AI shopping experience evaluated against customer trust, fit accuracy, and return economics."
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
        "China-based FBA apparel sellers experienced a higher sizing-related return rate, even after adjusting for category mix. We needed to understand which part of that gap a product intervention could address."
      ],
      [
        "Ownership",
        "I led the SQL investigation, seller interviews, and ASIN-level audits. I translated the findings into ML size-mapping requirements and worked across U.S. technical and China business teams to launch a top-seller pilot."
      ],
      [
        "Insights",
        "Category-adjusted analysis isolated a 100–200 basis-point sizing-related gap. Interviews and product-listing audits identified inconsistent sizing information and mapping problems, connecting the return signal to a specific upstream data issue."
      ],
      [
        "Product Decisions",
        "I framed the opportunity around more consistent size mapping and translated the research into requirements for ML-assisted recommendations. We chose a top-seller pilot to test the solution before making broader rollout commitments."
      ],
      [
        "Execution",
        "I connected the quantitative investigation with seller context, aligned regional and technical partners, and supported delivery of the pilot. Validation linked the mapping intervention back to the sizing-related return gap."
      ],
      [
        "Outcomes",
        [
          "Measured pilot result — Approximately 10% of the diagnosed gap was closed, equivalent to roughly a 10–20 basis-point return-rate reduction.",
          "Reusable foundation — Seller evidence and data analysis became product requirements for an ML size-mapping solution.",
          "Future — Further expansion remains a rollout decision. These results do not represent a global launch or a 10% reduction in all returns."
        ]
      ],
      [
        "Lessons & Tradeoffs",
        "Better recommendations begin with understanding where input data becomes unreliable. Category adjustment and seller research helped separate a product problem from an assortment effect. A focused pilot produced evidence before a broader commitment."
      ]
    ],
    "note": "Baseline gap and pilot improvement are distinct measures. The observed result applies to the top-seller pilot; expansion remains a separate decision.",
    "diagram": {
      "variant": "mapping",
      "title": "From evidence to a mapping requirement.",
      "intro": "Combine quantitative and seller evidence before choosing the intervention.",
      "sources": [
        [
          "SQL analysis",
          "Adjust for category mix"
        ],
        [
          "Seller research",
          "Interviews + listing audits"
        ]
      ],
      "steps": [
        [
          "Identify the root cause",
          "Inconsistent size information and mappings"
        ],
        [
          "Define ML requirements",
          "Translate seller evidence into a product direction"
        ],
        [
          "Pilot with top sellers",
          "Validate against the diagnosed return gap"
        ]
      ],
      "decision": [
        "PILOT EVIDENCE",
        "≈10% gap closure · broader rollout remains a next step."
      ]
    },
    "kicker": "MACHINE LEARNING / SELLER PLATFORM",
    "intro": "A category-adjusted returns investigation became an ML size-mapping initiative, validated with top sellers."
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
        "Developers need connected application performance signals to investigate issues. Adoption also depends on supported workloads, useful integrations, and pricing customers can understand and predict."
      ],
      [
        "Ownership",
        "I co-owned the roadmap, product requirements, feature prioritization, and launch readiness with a Product Manager and Engineering. I independently led pricing, business strategy, and cost economics, working with senior technical and go-to-market partners. Engineering owned implementation."
      ],
      [
        "Insights",
        "Customer needs and workload analysis informed both feature priorities and the commercial model. Technical availability alone was insufficient: language support, integration, and predictable customer costs affected whether teams could adopt the product."
      ],
      [
        "Product Decisions",
        "I designed a three-tier usage-based pricing structure with free and usage-based allowances, and advocated for retaining that structure through leadership review. I worked with Engineering on usage efficiency and cost tradeoffs while we jointly prioritized product capabilities. Cross-service bundled pricing was a subsequent phase, separate from the initial GA."
      ],
      [
        "Execution",
        "I connected pricing and cost requirements to shared roadmap and launch decisions, collaborated on economics validation, and supported integration and adoption work across teams. Public preview began November 30, 2023, followed by general availability on June 10, 2024. Product and pricing iteration continued after launch."
      ],
      [
        "Outcomes",
        [
          "Delivered — A new application observability product reached preview and GA with a tiered usage-based commercial model.",
          "Subsequent work — I advanced a cross-service bundled pricing approach after the initial launch and supported decisions about product integration and adoption.",
          "Attribution — The product roadmap and launch were shared responsibilities; pricing, business strategy, and cost economics were my independent scope. Engineering owned the implementation."
        ]
      ],
      [
        "Lessons & Tradeoffs",
        "Roadmap decisions and commercial design should reinforce one another. A simpler bill must still work across different workloads, while a technically available product must fit the customer’s investigation workflow. Launch created a starting point for continued adoption work."
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
      "intro": "Coordinate product usefulness with a sustainable commercial model.",
      "lanes": [
        [
          "SHARED PRODUCT SCOPE",
          [
            "Customer observability needs",
            "Roadmap & feature tradeoffs",
            "Launch readiness"
          ]
        ],
        [
          "MY COMMERCIAL SCOPE",
          [
            "Tiered pricing design",
            "Economics validation",
            "Pricing iteration"
          ]
        ]
      ],
      "decision": [
        "DELIVERY SEQUENCE",
        "Preview → GA → later cross-service bundling."
      ]
    },
    "kicker": "CLOUD PRODUCT / 0-TO-1 LAUNCH",
    "intro": "A cloud product shaped through customer needs, roadmap tradeoffs, understandable pricing, and viable infrastructure economics."
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
        "The legacy per-trace charging unit no longer consistently followed the infrastructure work behind a trace. That mismatch put pressure on service economics and made the relationship between usage, charges, and cost less sustainable."
      ],
      [
        "Ownership",
        "I identified margin deterioration and its root causes, evaluated alternative models, and led product requirements and pricing documentation. I partnered with Engineering on metering and billing changes, modeled customer impacts, and prepared the executive recommendation and rollout plan. Engineering owned the technical implementation."
      ],
      [
        "Insights",
        "Application complexity changed how much work a trace represented. Understanding the underlying cost drivers showed that changing a price point alone would not resolve the structural issue; the charging unit also needed attention."
      ],
      [
        "Product Decisions",
        "I compared usage-volume, activity-based, and hybrid options, then selected a cost-aligned GB + spans model. A span represents an operation within a trace. Customer bill-impact, elasticity, and multi-year scenarios helped evaluate the model alongside migration risk."
      ],
      [
        "Execution",
        "I defined the product and commercial requirements, partnered on metering and billing logic, and built the case for leadership approval. Rollout planning incorporated customer migration and billing-risk considerations so the transition was part of the product decision."
      ],
      [
        "Outcomes",
        [
          "Delivered — The redesign moved from per-trace billing to a hybrid GB + spans approach, supported by requirements, customer-impact analysis, and rollout planning.",
          "Ownership — My contribution was leading the redesign and the decision framework. Engineering partners delivered the underlying system changes.",
          "Time boundary — Later service performance was observed after my transition out of AWS. It is separate from my delivery work and is not presented as a measured launch result."
        ]
      ],
      [
        "Lessons & Tradeoffs",
        "Pricing and billing are part of a technical product’s customer experience. Sustainable monetization requires understanding actual cost drivers, while migration planning has to account for customers whose bills change. The right long-term model can involve short-term commercial tradeoffs."
      ]
    ],
    "note": "Historical product account, not a statement that all current X-Ray usage follows one pricing model. Later financial results and customer migration metrics are omitted.",
    "diagram": {
      "variant": "comparison",
      "title": "Change the unit, then plan the transition.",
      "intro": "Diagnose cost drivers and compare the charging alternatives.",
      "options": [
        [
          "Volume",
          "Data consumed"
        ],
        [
          "Activity",
          "Operations counted"
        ],
        [
          "GB + spans",
          "Selected hybrid"
        ]
      ],
      "steps": [
        [
          "Define requirements",
          "Metering and billing behavior"
        ],
        [
          "Model customer impact",
          "Bills, elasticity, and migration risk"
        ],
        [
          "Approve & roll out",
          "Monitor the transition and subsequent outcomes"
        ]
      ],
      "decision": [
        "PRODUCT TRADEOFF",
        "Align service economics while protecting the customer transition."
      ]
    },
    "kicker": "MONETIZATION / BILLING PRODUCT REDESIGN",
    "intro": "A structural mismatch between the charging unit and service cost drivers called for a product and billing redesign."
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
        "Buy-in",
        "internal customer sponsorship"
      ],
      [
        "Delivery",
        "platform launch with Engineering"
      ],
      [
        "Adoption",
        "usage visibility tied to action"
      ]
    ],
    "metric": "Adoption",
    "metricLabel": "The platform’s value depended on teams using visibility to change consumption.",
    "sections": [
      [
        "Problem",
        "Manual tracking limited visibility into logging usage and the opportunities for internal teams to optimize consumption. Platform delivery had to compete for engineering capacity."
      ],
      [
        "Ownership",
        "I identified internal customer teams and optimization opportunities, developed the business case and adoption strategy, and helped restore executive priority. I joined an initiative with an existing product and technical design; Engineering owned the core architecture and implementation."
      ],
      [
        "Insights",
        "Usage visibility would create value only if teams were ready to act on it. Early customer commitments gave the platform a concrete value proposition and provided evidence for the prioritization discussion."
      ],
      [
        "Product Decisions",
        "I connected opportunity sizing to customer commitments, then used that business case with engineering partners to seek renewed priority. The adoption plan connected platform launch to team ownership of consumption and follow-up on benefits."
      ],
      [
        "Execution",
        "I partnered with Engineering to launch the platform and coordinated with internal teams on adoption and value realization. I tracked progress and helped identify optimization opportunities from usage patterns as the program expanded."
      ],
      [
        "Outcomes",
        [
          "Delivered — The internal platform launched through partnership with Engineering, supported by a business case and customer commitments.",
          "Adoption — Internal teams used the platform as part of a broader consumption-optimization program, extending the work beyond the initial commitments.",
          "Measurement — Commitments are planned impact; realized annualized savings are a separate later measure. Tracking value realization remained distinct from securing the initial commitments."
        ]
      ],
      [
        "Lessons & Tradeoffs",
        "Internal products need a customer value proposition as much as external products do. Commitments helped change priority, but delivery alone could not establish the outcome. The program needed adoption and follow-through to connect visibility with economic value."
      ]
    ],
    "note": "Scope: shared delivery of an internal usage platform, customer adoption, and follow-through on consumption optimization.",
    "diagram": {
      "variant": "adoption",
      "title": "Visibility becomes value through adoption.",
      "intro": "Connect the engineering investment to accountable customer action.",
      "stages": [
        [
          "Opportunity",
          "Identify visibility gaps and size the opportunity."
        ],
        [
          "Commitment",
          "Secure customer goals and restore priority."
        ],
        [
          "Delivery",
          "Launch the usage platform with Engineering."
        ],
        [
          "Realization",
          "Drive adoption and track actual outcomes."
        ]
      ],
      "decision": [
        "MEASUREMENT DISCIPLINE",
        "Customer commitments and realized savings are different measures."
      ]
    },
    "kicker": "INTERNAL CLOUD PLATFORM / PRODUCT ADOPTION",
    "intro": "Customer commitments and an adoption plan helped restore priority for an internal logging usage and metering platform."
  }
};
