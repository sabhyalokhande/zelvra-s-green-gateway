export type PostSection = {
  heading?: string;
  body: string;
};

export type Post = {
  slug: string;
  n: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "iso-14064-singapore-businesses",
    n: "01",
    tag: "ISO 14064",
    title: "What ISO 14064 actually means for Singapore businesses",
    excerpt:
      "ISO 14064 is the international standard for GHG quantification and reporting. For Singapore businesses facing SGX climate disclosure requirements, it provides the methodology backbone — but many organisations do not know where the standard begins, what it requires, or how to engage a qualified assessor.",
    readTime: "6 min read",
    date: "June 2026",
    sections: [
      {
        body: "Singapore's sustainability reporting landscape is shifting rapidly. SGX-listed companies must now disclose climate-related risks aligned with the Task Force on Climate-related Financial Disclosures (TCFD) framework, and the pressure is extending beyond listed entities to their suppliers and partners. At the centre of this shift is a standard that many Singapore business leaders have heard of but few have read: ISO 14064.",
      },
      {
        heading: "What the standard actually covers",
        body: "ISO 14064 is an international standard published by the International Organisation for Standardisation that provides a framework for the quantification, monitoring, reporting and verification of greenhouse gas (GHG) emissions. It is structured in three parts: Part 1 covers organisation-level GHG inventories; Part 2 covers project-level GHG emission reductions and removal enhancements; Part 3 covers the validation and verification of GHG assertions.\n\nFor most Singapore businesses beginning their reporting journey, Part 1 is the relevant starting point. It specifies requirements and guidance for designing, developing, managing and reporting an organisation-wide GHG inventory. Critically, it requires organisations to identify and categorise their emission sources (Scope 1, 2 and 3), select appropriate quantification methodologies, and establish data management procedures that can be independently verified.",
      },
      {
        heading: "Why it matters for SGX climate disclosure",
        body: "The SGX climate reporting framework references both the TCFD and internationally recognised GHG accounting standards including the GHG Protocol and ISO 14064. When a listed company discloses Scope 1 and Scope 2 emissions — as is now required for certain categories — that disclosure needs to be based on a defensible, auditable methodology. ISO 14064 provides exactly that.\n\nBeyond compliance, institutional investors and large corporate procurers are increasingly asking their Singapore counterparts for emission disclosures that are third-party verified. An ISO 14064-aligned inventory, verified by an accredited body, is the most credible response to that request. Companies that build this infrastructure early will have a competitive advantage in procurement and capital markets.",
      },
      {
        heading: "What implementation actually involves",
        body: "For a first-time implementer, an ISO 14064 Part 1 engagement typically involves five stages: establishing the organisational boundary and base year; identifying and categorising all emission sources and sinks; selecting quantification methodologies for each source type (activity data multiplied by emission factors); compiling the GHG inventory with full documentation; and preparing a GHG report structured for external verification.\n\nThe most common areas of difficulty for Singapore businesses are establishing complete Scope 3 data (particularly purchased goods and services, upstream transport, and business travel), selecting appropriate emission factors for the Singapore grid and regional supply chains, and building the internal data management processes that allow year-on-year comparability.",
      },
      {
        heading: "Where to begin",
        body: "The most practical first step is a GHG boundary assessment — a structured review of your organisation's operational and financial boundaries that determines what emissions you are responsible for reporting. This typically takes two to four weeks depending on organisational complexity and data availability.\n\nFrom there, a phased approach works best: build and verify your Scope 1 and Scope 2 inventory in Year 1; extend into material Scope 3 categories in Year 2; and establish a continuous improvement cycle that reduces both emissions and reporting risk over time.\n\nZelvra works with organisations at every stage of this journey — from GHG boundary assessment through to audit-ready disclosure. If you have a reporting deadline approaching or are beginning to build your first GHG inventory, the time to start is now.",
      },
    ],
  },
  {
    slug: "ghg-accounting-scope-1-2-3",
    n: "02",
    tag: "GHG Accounting",
    title: "GHG accounting basics: Scope 1, 2 and the Scope 3 question",
    excerpt:
      "Before selecting a carbon tracking tool, hiring a consultant, or building an ESG dashboard — you need to understand what you are actually measuring. Scope 1 and 2 emissions are well-defined; Scope 3 is where most organisations are under-prepared, and where the greatest regulatory pressure is now landing.",
    readTime: "7 min read",
    date: "June 2026",
    sections: [
      {
        body: "Every sustainability reporting framework — whether SGX climate disclosure, CDP, TCFD, or GRI — depends on the same underlying accounting logic: the GHG Protocol Corporate Standard and its three-scope framework. Understanding what each scope covers, and why the distinctions matter, is the foundation of any credible emissions disclosure programme.",
      },
      {
        heading: "Scope 1: Direct emissions you own",
        body: "Scope 1 covers direct greenhouse gas emissions from sources owned or controlled by the reporting organisation. In practice, this means combustion in boilers, furnaces and vehicles owned by the company; process emissions from industrial operations; and fugitive emissions from refrigerants and air conditioning systems.\n\nFor most office-based businesses in Singapore, Scope 1 emissions are relatively modest. For organisations in manufacturing, logistics, petrochemicals or facilities management — where Zelvra has significant cross-industry experience — Scope 1 can represent the majority of the reportable footprint. The data sources are generally available: fuel purchase records, vehicle fleet logs, process monitoring data.",
      },
      {
        heading: "Scope 2: Indirect emissions from purchased energy",
        body: "Scope 2 covers indirect emissions from the generation of purchased electricity, heat, steam or cooling consumed by the organisation. In Singapore, this means the emissions associated with electricity purchased from SP Group and the national grid.\n\nThe GHG Protocol provides two approaches for Scope 2 accounting: the location-based method (using the average grid emission factor for Singapore, published annually by the Energy Market Authority) and the market-based method (using contractual emission factors from power purchase agreements or renewable energy certificates). Most Singapore companies use the location-based approach for SGX disclosure. The current Singapore grid emission factor should be verified against the EMA's latest publication each reporting year.",
      },
      {
        heading: "Scope 3: The question most organisations are not ready for",
        body: "Scope 3 covers all other indirect emissions that occur in a company's value chain — both upstream (suppliers, raw materials, business travel, purchased goods and services) and downstream (use of sold products, end-of-life treatment of sold products, investments). The GHG Protocol Corporate Value Chain Standard identifies 15 categories of Scope 3 emissions.\n\nThis is where most organisations are under-prepared, and where the regulatory pressure is moving fastest. SGX has signalled that Scope 3 disclosure requirements will expand. Institutional investors are incorporating Scope 3 into ESG scoring. Large corporate procurers — particularly MNCs with their own net-zero commitments — are beginning to require Scope 3 data from Tier 1 suppliers.\n\nThe practical challenge with Scope 3 is data availability. Calculating Scope 3 emissions requires either primary data from suppliers (difficult to obtain at scale) or spend-based estimation using environmentally extended input-output tables. A materiality assessment — identifying which Scope 3 categories are largest and most relevant to your business — is the essential first step before attempting a full Scope 3 inventory.",
      },
      {
        heading: "Choosing where to start",
        body: "For organisations building their first GHG inventory, the recommended approach is: establish a complete and verified Scope 1 and Scope 2 inventory first; identify the most material Scope 3 categories based on your business model; build a phased plan to bring those categories into scope over two to three years.\n\nThe tools matter less than the methodology. A well-constructed spreadsheet inventory with documented assumptions and consistent emission factors is more defensible than a carbon tracking software subscription that produces numbers without clear methodology. Build the logic first; automate it second.\n\nZelvra provides GHG accounting advisory that covers boundary setting, methodology selection, data management design and SGX-aligned reporting. If you are starting from scratch or rebuilding a poorly documented existing inventory, we can help you build something that will stand up to external verification.",
      },
    ],
  },
  {
    slug: "circular-economy-smes-singapore",
    n: "03",
    tag: "Circular Economy",
    title: "Circular economy for SMEs: where to begin without a dedicated team",
    excerpt:
      "Most circular economy guidance is written for large corporates with sustainability departments and dedicated budget. This article sets out a lean, practical framework that SMEs can apply to procurement, operations and asset management — without adding headcount or disrupting core business operations.",
    readTime: "6 min read",
    date: "June 2026",
    sections: [
      {
        body: "The circular economy is increasingly cited in Singapore government policy, corporate sustainability reports and investor communications. For SMEs, it can feel like a concept designed for companies with larger budgets and dedicated sustainability teams. The reality is different: the principles of circular economy — keeping materials in use longer, designing out waste, regenerating natural systems — can be applied at any scale, and the financial case for doing so is stronger than most SME leaders realise.",
      },
      {
        heading: "What circular economy actually means in practice",
        body: "Strip away the policy language, and circular economy for an SME comes down to three practical questions: Where are you buying things you could be recovering and reusing? Where are materials or equipment reaching end-of-life and going to waste when they still have value? Where are there waste streams in your operations that represent a cost you do not have to pay?\n\nA manufacturing SME that sends defective components to landfill when a refurbishment process could recover 60% of them is leaving money in the skip. A services company that refreshes IT equipment on a fixed three-year cycle regardless of actual condition is spending on procurement it does not need. An F&B operator with a high food waste percentage is paying twice — once for the food purchased, and once for the waste disposal. Circular economy starts with identifying these loops and closing them.",
      },
      {
        heading: "The three entry points most accessible to SMEs",
        body: "Based on experience across manufacturing, logistics, IT services and facilities management, the most accessible entry points for SMEs are: IT and physical asset lifecycle extension; procurement policy revision to include end-of-life criteria; and waste stream monetisation.\n\nAsset lifecycle extension requires a structured IT asset management process — tracking what you own, when it was deployed, what its current condition and residual value is, and what the most value-preserving end-of-life route is (resale, refurbishment, certified recycling). Most SMEs do not have this tracking in place, which means they are making asset replacement decisions based on age rather than condition.\n\nProcurement policy revision involves adding circularity criteria to vendor selection: Does this supplier take back products at end-of-life? What is the repairability of this equipment? Is there a secondary market for this asset class? These questions cost nothing to ask and can significantly change the lifecycle economics of purchasing decisions.\n\nWaste stream monetisation requires mapping all waste outputs — materials, components, packaging, organic waste — and identifying whether any have a secondary value. Singapore has an active network of certified recyclers, material recovery facilities, and industrial symbiosis programmes through the National Environment Agency.",
      },
      {
        heading: "Connecting to Singapore's regulatory environment",
        body: "Singapore's Zero Waste Masterplan and the Extended Producer Responsibility (EPR) framework are creating increasing obligations for SMEs — particularly in e-waste, packaging, and food waste. The NEA's e-waste regulations already require producers and retailers to provide free consumer take-back for electrical and electronic equipment. Businesses that build circular processes now are better positioned to meet these obligations without emergency compliance costs.\n\nFor SMEs in the supply chain of large MNCs or government-linked companies, there is a further commercial pressure: corporate customers are beginning to include supplier sustainability criteria in procurement requirements. An SME that can demonstrate circular practices — even at a basic level — has a differentiating answer to that question.",
      },
      {
        heading: "A practical starting framework",
        body: "A manageable circular economy programme for an SME can be built around four actions in the first twelve months: conduct an asset inventory to understand what you own and its current lifecycle status; map your top five waste streams by cost and volume; revise the procurement checklist for your top ten categories to include end-of-life criteria; and identify one material recovery partnership to establish with a certified local recycler.\n\nNone of these require a sustainability team. They require a project owner, three to four weeks of structured assessment, and the willingness to change a few processes. Zelvra works with SMEs at exactly this level — practical, operational, and focused on the actions that create measurable results.",
      },
    ],
  },
  {
    slug: "sgx-climate-reporting-readiness",
    n: "04",
    tag: "SGX Climate",
    title: "SGX mandatory climate reporting: a readiness checklist for listed companies",
    excerpt:
      "The Singapore Exchange has issued mandatory climate-related disclosure requirements aligned with the TCFD framework. Listed companies and those on the watch list need baseline data, governance processes and reporting infrastructure in place well before the deadline. This checklist identifies the gaps most organisations have not yet addressed.",
    readTime: "8 min read",
    date: "June 2026",
    sections: [
      {
        body: "In 2022, SGX RegCo made climate reporting mandatory for listed companies across three industry groups — financial institutions, energy, and materials and buildings — with a requirement to apply TCFD recommendations. The scope has since expanded, and all SGX-listed issuers are now required to report on climate-related matters on a comply-or-explain basis. Understanding what this actually requires — in practical, operational terms — is the purpose of this checklist.",
      },
      {
        heading: "What TCFD requires: the four pillars",
        body: "The TCFD framework organises climate-related disclosure across four thematic areas: Governance (how the board and management oversee climate-related risks and opportunities); Strategy (the actual and potential impacts of climate-related risks on the organisation's strategy and financial planning); Risk Management (how the organisation identifies, assesses and manages climate-related risks); and Metrics and Targets (the metrics used to assess climate-related risks and opportunities, and performance against targets).\n\nFor most listed companies, Governance and Risk Management are the sections where gaps are largest — not because the processes do not exist, but because they have not been formally documented and connected to board-level oversight in a way that satisfies the disclosure requirements.",
      },
      {
        heading: "The readiness checklist",
        body: "Governance:\n— Has the board formally assigned responsibility for climate-related risk oversight to a committee or designated director?\n— Is climate risk included in the board's annual risk review process?\n— Does management have a defined process for reporting climate-related matters to the board?\n\nStrategy:\n— Has the company conducted a climate risk and opportunity assessment covering both physical risks (flooding, heat stress, water scarcity) and transition risks (carbon pricing, policy change, technology disruption)?\n— Has a scenario analysis been conducted, including a 1.5°C and a 2°C+ scenario?\n— Are the financial implications of material climate risks reflected in the financial planning assumptions?\n\nRisk Management:\n— Is climate risk formally included in the enterprise risk management (ERM) framework?\n— Are climate risks assessed against the same likelihood/impact matrix as other material risks?\n— Is there a defined process for reviewing and updating climate risk assessments annually?\n\nMetrics and Targets:\n— Is a Scope 1 and Scope 2 GHG inventory in place, using a recognised methodology (GHG Protocol or ISO 14064)?\n— Have material Scope 3 categories been identified and assessed?\n— Has the company set a GHG reduction target, and is it being tracked against a base year?\n— Are the metrics used in external disclosure consistent with the metrics used for internal management?",
      },
      {
        heading: "The gaps most companies have not closed",
        body: "In our experience, the areas where most companies have significant gaps are: scenario analysis (many have never conducted a structured climate scenario exercise); Scope 3 inventory (most have Scope 1 and 2 data but lack methodology for even the most material Scope 3 categories); and board-level governance documentation (risk management processes exist but are not formally connected to board oversight in a way that satisfies the disclosure requirement).\n\nScenario analysis is often cited as the most technically demanding element — but the SGX guidance allows for qualitative scenarios, which means a structured workshop-based approach is sufficient for initial disclosure. The investment required is proportionate to the organisation's size and complexity.",
      },
      {
        heading: "Timeline and practical next steps",
        body: "The most common mistake companies make is treating TCFD disclosure as an annual report exercise rather than an operational programme. By the time the annual report is being written, it is too late to build the underlying processes — you can only disclose what you have already done.\n\nThe practical sequencing for a company that is 12 to 18 months from its next reporting deadline: begin with a gap assessment against the TCFD framework; commission or build a baseline GHG inventory; conduct a climate risk and opportunity identification workshop; formalise governance documentation; and draft scenario narratives. Each element takes time, and they are partly sequential.\n\nZelvra provides end-to-end SGX climate disclosure support — from gap assessment to audit-ready report. If you are approaching a reporting deadline and are not confident about your current state of readiness, a scoping call is the most efficient way to understand what needs to be done and in what order.",
      },
    ],
  },
  {
    slug: "itam-circular-discipline",
    n: "05",
    tag: "ITAM",
    title: "IT asset management as a circular discipline, not an inventory exercise",
    excerpt:
      "Most organisations treat IT asset management as a logistics and compliance function. Reframed through a circular economy lens, ITAM becomes a Scope 3 reduction strategy — one that extends asset useful life, recovers residual value at end-of-life, and reduces the procurement costs of replacement cycles.",
    readTime: "7 min read",
    date: "June 2026",
    sections: [
      {
        body: "IT asset management is one of the most underleveraged sustainability levers available to Singapore businesses. Most organisations have an ITAM process of some kind — typically a spreadsheet or a module in their ITSM platform that tracks what hardware they own, where it is, and when the warranty expires. This is ITAM as a compliance exercise. ITAM as a circular discipline is something fundamentally different, and the financial and sustainability returns from the shift are significant.",
      },
      {
        heading: "Why IT assets are a material sustainability issue",
        body: "The manufacturing and distribution of IT hardware is a major source of greenhouse gas emissions. A typical enterprise laptop carries an embedded carbon footprint of approximately 300 to 400 kg CO₂e — most of which is incurred during manufacturing, before the device is ever switched on. When an organisation replaces a laptop that is three years old but still fully functional, it is incurring that embedded carbon cost again, entirely unnecessarily.\n\nUnder the GHG Protocol's Scope 3 framework, purchased goods and services — including IT hardware — are classified as Category 1 upstream emissions. For organisations with large IT fleets, this category can represent the single largest component of their Scope 3 inventory. Reducing it does not require operational process change; it requires a different approach to asset lifecycle decisions.",
      },
      {
        heading: "The circular ITAM model",
        body: "Circular ITAM operates on three principles: maximise useful life, capture residual value, and verify end-of-life.\n\nMaximising useful life means extending the active service period of assets beyond the arbitrary refresh cycles that many organisations apply (typically three years for laptops, five for servers). In practice, a device that is three years old is often performing identically to its replacement — the upgrade is driven by procurement schedule, not by performance requirement. A condition-based refresh model, supported by reliable asset health data, can extend average lifecycle by 12 to 24 months without any measurable impact on user productivity. The cost saving is direct: fewer devices purchased per year.\n\nCapturing residual value means treating end-of-life assets as a recoverable resource rather than a disposal problem. A three-year-old enterprise laptop sold through a certified refurbisher typically realises S$150 to S$400 in residual value. Multiplied across hundreds or thousands of devices, this represents a meaningful offset against hardware procurement costs — and it diverts the asset from landfill.\n\nVerifying end-of-life means ensuring that assets disposed of through certified channels have data sanitised to an auditable standard (NIST 800-88 or equivalent) and that certificates of destruction or recycling are issued and retained. This is both a data protection obligation under Singapore's PDPA and a Scope 3 accounting requirement.",
      },
      {
        heading: "The connection to Scope 3 reporting",
        body: "For organisations under pressure to reduce their Scope 3 emissions, circular ITAM is one of the most actionable levers available. Unlike Scope 3 Category 11 (use of sold products) or Category 15 (investments), which require supply chain data that is difficult to obtain, Category 1 (purchased goods) is directly within the organisation's control.\n\nExtending laptop lifecycle from three to four years reduces the annual Category 1 emission from device procurement by 25%. Diverting devices to refurbishment rather than landfill reduces end-of-life emissions and generates verified waste diversion data that can be reported under Category 12 (end-of-life treatment of sold products — or in this context, disposed assets). These are real, measurable, reportable reductions that require no capital investment and no new technology.",
      },
      {
        heading: "Implementing circular ITAM in practice",
        body: "The implementation sequence for circular ITAM typically involves: establishing complete asset visibility (a reliable, current inventory of all IT assets with condition and age data); defining a condition-based refresh policy to replace the age-based cycle; identifying certified refurbishment and recycling partners who can provide residual value realisation and certified end-of-life documentation; and integrating ITAM data into the GHG inventory to enable Scope 3 reporting.\n\nFor organisations that have not yet built this infrastructure, the starting point is an ITAM assessment — a structured review of what you own, how it is being managed, and what the circular improvement opportunity looks like. Zelvra conducts these assessments and builds the circular ITAM operating model that turns asset lifecycle management from a compliance cost into a sustainability and financial asset.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
