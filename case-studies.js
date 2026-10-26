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
        "A/B test",
        "large-scale customer experiment"
      ],
      [
        "Paused",
        "broader rollout at the quality gate"
      ]
    ],
    "metric": "A/B test",
    "metricLabel": "Large-scale customer experiment. The outcome was a disciplined rollout decision.",
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
        "I iterated on the prototype with UX and technical partners, evaluated implementation tradeoffs, and reviewed results from a large-scale customer A/B test with senior leadership."
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
          "points": [
            {
              "label": "Journey analysis",
              "text": "I examined purchase and return journeys and historical try-on adoption, including VTO Shoes, to locate unresolved apparel-shopping friction."
            },
            {
              "label": "Customer evidence",
              "text": "I combined journey telemetry with targeted shopper-survey evidence, examining immersive-mode entry and visual realism as potential adoption barriers."
            },
            {
              "label": "Problem to solve",
              "text": "I focused the opportunity on useful shopping assistance and realistic fit expectations, rather than a more immersive experience alone."
            }
          ]
        },
        {
          "phase": "Define",
          "title": "Scope the MVP and reject costly friction",
          "points": [
            {
              "label": "Competitive assessment",
              "text": "I benchmarked 13 competitors and relevant internal experiences, and assessed how improvements in diffusion approaches changed the feasible MVP."
            },
            {
              "label": "Avatar decision",
              "text": "Survey findings, competitor evidence, and adoption data led me to deprioritize custom avatars before substantial engineering investment."
            },
            {
              "label": "Evaluation plan",
              "text": "I defined CTR, cart conversion, and GMV/OPS as engagement and purchase measures, with Customer-Initiated Return Rate as the quality guardrail."
            }
          ]
        },
        {
          "phase": "Design",
          "title": "Make try-on part of shopping",
          "points": [
            {
              "label": "Hands-on prototyping",
              "text": "I personally developed iterative Figma prototypes, refining them through UX reviews and leadership feedback."
            },
            {
              "label": "Shopping flow",
              "text": "I explored product-detail-page entry, side-by-side style and color comparison, and direct add-to-cart. The prototypes made the customer journey concrete for technical scoping."
            },
            {
              "label": "Model strategy",
              "text": "I evaluated open-source and proprietary diffusion approaches with technical partners. Shopping utility and generated-image quality both mattered; visual novelty alone was insufficient."
            }
          ]
        },
        {
          "phase": "Build",
          "title": "Translate the experience into requirements",
          "points": [
            {
              "label": "Experience requirements",
              "text": "I partnered with a Technical PM, Applied Science, and Engineering on latency, product-detail-page integration, anticipated scale, and measurement requirements."
            },
            {
              "label": "Implementation tradeoffs",
              "text": "We weighed visual quality against development speed, scalability, and cost to define an achievable experiment scope."
            },
            {
              "label": "Ownership boundary",
              "text": "I owned product requirements and prioritization with technical partners; I did not independently engineer or train the diffusion model."
            }
          ]
        },
        {
          "phase": "Launch",
          "title": "Run a controlled customer experiment",
          "points": [
            {
              "label": "Controlled launch",
              "text": "I coordinated product and technical stakeholders around the large-scale customer A/B experiment. This was controlled testing, not unrestricted general availability."
            },
            {
              "label": "Different success signals",
              "text": "I evaluated engagement and purchase behavior alongside Customer-Initiated Return Rate. Purchase intent and return risk were distinct inputs to the scale decision."
            },
            {
              "label": "Rollout review",
              "text": "The experiment supplied evidence for the quality review rather than a presumption that the experience should expand."
            }
          ]
        },
        {
          "phase": "Measure",
          "title": "Know when not to scale",
          "points": [
            {
              "label": "Appearance versus fit",
              "text": "I reviewed experiment evidence with technical partners and senior leadership. A purchase-intent signal could not establish accurate fit."
            },
            {
              "label": "The no-go decision",
              "text": "I recommended against broader rollout while fit-accuracy and return-rate concerns remained, prioritizing trust and return risk over reach."
            },
            {
              "label": "Implication",
              "text": "Broader rollout was paused. The lesson was to evaluate size-and-fit capabilities alongside visualization; that direction is not presented as a delivered follow-on launch."
            }
          ]
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
          "points": [
            {
              "label": "SQL investigation",
              "text": "I investigated sizing-related returns among China-based FBA apparel sellers using category-adjusted comparisons."
            },
            {
              "label": "Separate the drivers",
              "text": "Adjusting for assortment differences isolated a 100–200 basis-point gap. I treated it as a problem to investigate, not proof that seller location caused returns."
            },
            {
              "label": "Baseline",
              "text": "The adjusted gap narrowed discovery to sizing-related causes; it did not establish how much an ML intervention could close."
            }
          ]
        },
        {
          "phase": "Diagnose",
          "title": "Connect return data to seller evidence",
          "points": [
            {
              "label": "Seller validation",
              "text": "I combined seller interviews with ASIN-level audits to test the quantitative findings against product-listing evidence."
            },
            {
              "label": "Upstream problem",
              "text": "Inconsistent size labels and mapping problems connected the return signal to unreliable sizing information. I distinguished these issues from other drivers of returns."
            },
            {
              "label": "Requirement direction",
              "text": "The intervention needed to improve size mapping; the aggregate return gap alone could not specify recommendation behavior."
            }
          ]
        },
        {
          "phase": "Define",
          "title": "Turn root causes into ML product requirements",
          "points": [
            {
              "label": "Research to requirements",
              "text": "I translated seller research and listing audits into ML-assisted size-mapping requirements, including data-quality needs and the seller workflow."
            },
            {
              "label": "Product scope",
              "text": "I described the intended mapping behavior and customer problem, leaving technical implementation to the relevant teams."
            },
            {
              "label": "Validation choice",
              "text": "I kept requirements tied to the diagnosed sizing issue and chose a targeted pilot before committing to wider expansion."
            }
          ]
        },
        {
          "phase": "Build",
          "title": "Align technical scope with regional context",
          "points": [
            {
              "label": "Cross-region alignment",
              "text": "I aligned U.S. technical and China business teams on solution requirements and pilot scope, connecting technical discussions to seller evidence and data quality."
            },
            {
              "label": "Delivery boundary",
              "text": "I owned research translation and product scope; technical teams owned ML implementation. The shared scope supported selected top sellers rather than an immediate global rollout."
            }
          ]
        },
        {
          "phase": "Pilot",
          "title": "Validate with selected top sellers",
          "points": [
            {
              "label": "Pilot delivery",
              "text": "I launched the top-seller pilot with regional and technical partners, linking the mapping intervention back to the diagnosed return gap."
            },
            {
              "label": "Bounded evidence",
              "text": "A focused cohort made validation practical. Its results informed the expansion decision without establishing effectiveness for every seller and category."
            }
          ]
        },
        {
          "phase": "Measure",
          "title": "Interpret gap closure carefully",
          "points": [
            {
              "label": "Reported result",
              "text": "I evaluated approximately 10% pilot gap closure against the diagnosed sizing-related baseline, rather than presenting it as a reduction in all returns."
            },
            {
              "label": "Measurement basis",
              "text": "Ten percent of a 100–200 basis-point gap corresponds to roughly 10–20 basis points when the cohort and return-rate definition are comparable."
            },
            {
              "label": "Rollout boundary",
              "text": "The pilot result does not establish global impact or model accuracy. Further expansion remains a separate decision."
            }
          ]
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
          "points": [
            {
              "label": "Customer workflow",
              "text": "I worked with Product and Engineering to connect observability problems and adoption barriers to requirements for moving across metrics, traces, and logs."
            },
            {
              "label": "Adoption constraints",
              "text": "Supported workloads, integrations, and predictable usage costs informed the opportunity. These workflow requirements do not imply every integration shipped at GA."
            },
            {
              "label": "Product implication",
              "text": "Technical availability alone was insufficient; capability and commercial-model work needed to address the same customer use cases."
            }
          ]
        },
        {
          "phase": "Define",
          "title": "Develop two connected product tracks",
          "points": [
            {
              "label": "Shared product track",
              "text": "I jointly developed roadmap and PRD decisions with Product and Engineering, considering customer segments and workloads."
            },
            {
              "label": "Independent commercial track",
              "text": "I led pricing, business strategy, and cost economics, connecting usage-based charges to customer needs with engineering input."
            },
            {
              "label": "Ownership boundary",
              "text": "I coordinated the tracks rather than claiming sole ownership of the product or core engineering architecture."
            }
          ]
        },
        {
          "phase": "Prioritize",
          "title": "Balance adoption and sustainable usage",
          "points": [
            {
              "label": "Launch choices",
              "text": "I participated in feature prioritization and launch-readiness decisions and designed the three-tier usage-based pricing structure."
            },
            {
              "label": "Adoption versus consumption",
              "text": "I evaluated free and usage-based allowances against usage efficiency and cost economics with technical partners. Low-friction entry still had to account for infrastructure consumption."
            },
            {
              "label": "One coherent model",
              "text": "Capability priorities and allowances needed to support the same use cases. Later bundling remained separate from initial GA."
            }
          ]
        },
        {
          "phase": "Build",
          "title": "Coordinate product and commercial requirements",
          "points": [
            {
              "label": "Requirements into delivery",
              "text": "I partnered with Product Management and Engineering on readiness, connecting pricing and cost requirements to shared roadmap and launch decisions."
            },
            {
              "label": "Technical partnership",
              "text": "I collaborated on economics validation and usage efficiency while supporting integration and adoption work. Engineering owned system implementation."
            },
            {
              "label": "Readiness bar",
              "text": "The customer-facing product and commercial experience had to be ready together; technical availability was only one part of that decision."
            }
          ]
        },
        {
          "phase": "Launch",
          "title": "Move from preview to general availability",
          "points": [
            {
              "label": "Launch coordination",
              "text": "I supported pricing approval and customer-facing coordination within the shared launch effort."
            },
            {
              "label": "Separate milestones",
              "text": "Public preview began November 30, 2023; GA followed on June 10, 2024. The linked announcements verify availability, while later cross-service packaging remains a separate phase."
            }
          ]
        },
        {
          "phase": "Iterate",
          "title": "Use adoption needs to revisit priorities",
          "points": [
            {
              "label": "Adoption-led iteration",
              "text": "I supported product integration and adoption decisions. Observations informed prioritization of integrations, language support, and packaging without establishing a quantified adoption lift."
            },
            {
              "label": "Later bundling",
              "text": "I subsequently advanced bundled pricing across observability services. This was another product and commercial decision after GA, not part of the original launch."
            }
          ]
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
          "points": [
            {
              "label": "Economics diagnosis",
              "text": "I investigated deteriorating service economics and the mismatch between per-trace charging and the work represented by each trace."
            },
            {
              "label": "Cost drivers",
              "text": "Application complexity changes data volume and tracing activity. I evaluated those drivers rather than assuming every trace represented equivalent work."
            },
            {
              "label": "Structural decision",
              "text": "A price-point adjustment alone would leave the mismatch in place, so I reframed the task as a billing-product redesign."
            }
          ]
        },
        {
          "phase": "Evaluate",
          "title": "Compare commercial and technical alternatives",
          "points": [
            {
              "label": "Alternatives",
              "text": "I compared usage-volume, metric/activity-based, and hybrid approaches."
            },
            {
              "label": "Evaluation lenses",
              "text": "I considered cost alignment, metering implications, and customer bill impact together, without disclosing internal measurements or a numerical ranking."
            },
            {
              "label": "Tradeoff",
              "text": "A single unit can be simpler to explain; a hybrid can represent multiple usage dimensions. Neither simplicity nor cost fit was sufficient on its own."
            }
          ]
        },
        {
          "phase": "Define",
          "title": "Translate GB + spans into product requirements",
          "points": [
            {
              "label": "Model selection",
              "text": "I selected GB + spans and led product requirements and pricing documentation with engineering input."
            },
            {
              "label": "From units to requirements",
              "text": "GB represents data volume; spans represent operations within traces. I translated those charging dimensions into metering and billing requirements."
            },
            {
              "label": "Customer lens",
              "text": "The hybrid better represents both dimensions than treating traces as equivalent, but adds bill complexity. Customer predictability had to be evaluated alongside cost alignment."
            }
          ]
        },
        {
          "phase": "Align",
          "title": "Evaluate the business and customer transition",
          "points": [
            {
              "label": "Scenario analysis",
              "text": "I prepared multi-year financial scenarios and assessed elasticity and customer bill impact alongside transition considerations."
            },
            {
              "label": "Approval case",
              "text": "I developed the leadership recommendation, weighing service economics against bill predictability and migration risk. Modeled benefits remained forecasts, not realized results."
            },
            {
              "label": "Alignment",
              "text": "Leadership approved the redesign, establishing a basis for engineering and rollout work."
            }
          ]
        },
        {
          "phase": "Implement",
          "title": "Partner on billing delivery and rollout",
          "points": [
            {
              "label": "Engineering coordination",
              "text": "I connected pricing documentation, product requirements, and bill-impact analysis to metering and billing redesign with Engineering."
            },
            {
              "label": "Transition planning",
              "text": "I developed rollout and customer-transition considerations. Cost alignment did not remove the need to address customers whose bills would change."
            },
            {
              "label": "Delivery attribution",
              "text": "Engineering delivered the underlying system changes; my work supplied the commercial requirements and transition planning."
            }
          ]
        },
        {
          "phase": "Measure",
          "title": "Separate redesign ownership from later results",
          "points": [
            {
              "label": "Direct contribution",
              "text": "I led diagnosis, model selection, requirements, customer-impact analysis, and rollout planning. Later service performance was observed after my transition out of AWS."
            },
            {
              "label": "Outcome boundary",
              "text": "I distinguish that later observation from modeled scenarios and personally measured launch results. Financial improvement values remain omitted pending authorization."
            }
          ]
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
          "points": [
            {
              "label": "Visibility problem",
              "text": "I identified limitations in manual internal usage tracking and assessed logging-cost visibility for customer teams."
            },
            {
              "label": "Customer action",
              "text": "I connected the platform opportunity to consumption optimization. The goal was visibility teams could act on, not simply more usage data."
            }
          ]
        },
        {
          "phase": "Size Opportunity",
          "title": "Build an economic case for prioritization",
          "points": [
            {
              "label": "Opportunity assessment",
              "text": "I identified potential internal customer teams and evaluated savings opportunities and economic value."
            },
            {
              "label": "Investment case",
              "text": "I connected those needs to a usage and metering platform competing for engineering capacity."
            },
            {
              "label": "Evidence boundary",
              "text": "Potential savings informed customer discussions and prioritization; they were not treated as realized benefits."
            }
          ]
        },
        {
          "phase": "Secure Buy-in",
          "title": "Turn potential demand into commitments",
          "points": [
            {
              "label": "Customer commitments",
              "text": "I developed the business case and secured initial commitments, connecting customer goals to the opportunity assessment and an adoption path."
            },
            {
              "label": "Prioritization decision",
              "text": "I used that concrete demand to help restore executive priority for engineering delivery."
            },
            {
              "label": "Commitment versus value",
              "text": "Commitments strengthened the investment case, but benefits still depended on delivery and customer action. I kept them separate from later value realization."
            }
          ]
        },
        {
          "phase": "Build",
          "title": "Partner on an existing platform initiative",
          "points": [
            {
              "label": "Delivery partnership",
              "text": "I joined an initiative with an existing product and technical design and partnered with Engineering on platform delivery."
            },
            {
              "label": "My scope",
              "text": "I connected the customer business case to prioritization, customer needs, and adoption planning. Engineering owned architecture and implementation; I did not independently build the platform."
            }
          ]
        },
        {
          "phase": "Launch",
          "title": "Connect delivery to internal onboarding",
          "points": [
            {
              "label": "Internal launch",
              "text": "I coordinated launch and stakeholder onboarding with Engineering and customer teams that had identified optimization opportunities."
            },
            {
              "label": "Beyond availability",
              "text": "A functioning usage platform was a delivery milestone, not proof of changed consumption or realized benefits. Launch established the basis for adoption follow-up."
            }
          ]
        },
        {
          "phase": "Scale",
          "title": "Track adoption and value realization",
          "points": [
            {
              "label": "Adoption work",
              "text": "I drove broader internal adoption and coordinated consumption optimization and value realization with customer teams."
            },
            {
              "label": "Tracking progress",
              "text": "As the program expanded beyond initial commitments, I kept committed and subsequently realized benefits distinct."
            },
            {
              "label": "Value test",
              "text": "Teams had to use the visibility and change consumption. Commitments and platform availability alone did not establish savings."
            }
          ]
        }
      ]
    }
  }
};
