// Company (About + Offices) and Sourcing Network pages.
const C = '/about/company-overview/';
module.exports = [
  {
    path: '/about/company-overview/',
    title: 'Company Overview — YOU LI CHINA WORLD BANGLADESH',
    meta: 'Identity, operating model and service scope of YOU LI CHINA WORLD BANGLADESH — a fabric sourcing partner connecting Chinese mills with Bangladesh’s apparel industry.',
    crumbs: [['Company', '/about/company-overview/']],
    hero: {
      eyebrow: 'Company',
      title: 'A fabric sourcing partner between Chinese mills and Bangladesh’s apparel industry',
      lead: 'YOU LI CHINA WORLD BANGLADESH (尤利中制品有限公司) sources woven, knit, denim and performance materials through China-connected mill relationships, coordinates import and local distribution, and verifies quality at the source mill and before shipment.',
      image: '/assets/img/office.jpg',
    },
    sections: [
      { t: 'h2', title: 'Who we are' },
      {
        t: 'paras',
        body: [
          'YOU LI operates as a fabric sourcing specialist connecting textile producers with Bangladesh’s apparel industry. The model has two physical anchors — an office in Uttara, Dhaka that handles import, local distribution and factory coordination, and an office in Shanghai that handles mill liaison, sampling and source inspection — and one operating principle: every claim the company makes is attached to an evidence status, and every order runs a documented quality process. (Company statement; operational scope is subject to the evidence register.)',
          'The company description comes from company-supplied materials. This page states that material as company statement and distinguishes it from anything independently documented. That discipline is not a limitation of this website — it is the product. A fabric buyer choosing a sourcing partner is choosing a verification system as much as a supply route, and YOU LI’s website is built so that the verification is visible, dated and requestable.',
        ],
      },
      { t: 'h2', title: 'What we do' },
      {
        t: 'cards',
        items: [
          { k: 'Fabric sourcing', v: 'Woven, knit, denim, sportswear and functional fabrics matched from mill capability, not catalogue size.' },
          { k: 'Yarn sourcing', v: 'Functional and performance yarn systems — capillary, antibacterial, FR, high-tenacity, super-soft.' },
          { k: 'Product development', v: 'Sampling, lab dips, strike-offs and functional trials against your approved references.' },
          { k: 'Import & distribution', v: 'Import, customs coordination and local distribution from Uttara, Dhaka to your factory.' },
          { k: 'Quality verification', v: 'Inline inspection at the source mill plus final pre-shipment verification, documented.' },
          { k: 'Technical support', v: 'Specification packs, test interpretation and construction guidance for your development team.' },
        ],
      },
      { t: 'h2', title: 'Operating model' },
      {
        t: 'table',
        note: 'The arrows describe the operating model as supplied by the company; ownership and control of each stage are stated where the evidence supports them.',
        head: ['Stage', 'Function', 'Location', 'Status'],
        rows: [
          ['Textile mills & yarn producers', 'Weaving, knitting, dyeing, finishing, spinning', 'China (primary)', 'Company statement'],
          ['Sourcing & mill matching', 'Brief intake, mill shortlist, relationship-type disclosure', 'Shanghai', 'Company statement'],
          ['Import & logistics', 'Export coordination, shipment, import, customs', 'Shanghai → Dhaka', 'Company statement'],
          ['Local distribution', 'Delivery coordination to factories and warehouses', 'Uttara, Dhaka', 'Company statement'],
          ['Garment factories & exporters', 'Cut-and-sew production, brand delivery', 'Bangladesh', 'Buyer side'],
          ['International brands & procurement', 'Program ownership, compliance, approval', 'USA / Europe (buyer geographies per company materials)', 'Company statement'],
        ],
      },
      { t: 'h2', title: 'Identity register' },
      {
        t: 'evidence',
        items: [
          { label: 'Company name', status: 'Company statement', note: 'YOU LI CHINA WORLD BANGLADESH, as supplied in company materials. Legal registration confirmation is a launch checklist item.' },
          { label: 'Chinese entity name', status: 'Company statement', note: '尤利中制品有限公司, as supplied. Exact registered entity relationship is being confirmed.' },
          { label: 'Tagline', status: 'Company statement', note: 'Supplying Quality — Building Trust — Delivering Value.' },
          { label: 'Inception', status: 'Company statement', note: '1992, as stated in company materials. The site does not headline “30+ years” until documentary support is in place.' },
          { label: 'Offices', status: 'Company statement', note: 'Uttara, Dhaka and Shanghai, as stated. Addresses and publication consent confirmed at launch.' },
        ],
      },
      { t: 'h2', title: 'How we work' },
      {
        t: 'list',
        items: [
          'Specification first — every program starts from construction, composition, weight, width, finish, application or a reference sample.',
          'Relationship type disclosed — direct, partner or cooperative mill is stated for every recommended source.',
          'Performance as test — functional claims are converted into method, target and checkpoint, not adjectives.',
          'Two quality gates — inline at the source mill, final before shipment, against your acceptance criteria.',
          'One order file — specification, samples, inspection reports and delivery responsibility live together.',
        ],
      },
      { t: 'cta', title: 'Start with a fabric brief', lead: 'Tell us the construction, the target spec and the program. We return mill-matched options with relationship type, MOQ and lead time.' },
    ],
    next: [
      ['Our Story', 'The 1992-to-now narrative, stated as company history.', '/about/our-story/'],
      ['Why YOU LI', 'Four reasons to believe, each with its evidence state.', '/about/why-youli/'],
      ['Sourcing Process', 'Six stages from brief to delivery, with owners per step.', '/services/sourcing-process/'],
    ],
  },
  {
    path: '/about/our-story/',
    title: 'Our Story — YOU LI',
    meta: 'The history of YOU LI CHINA WORLD BANGLADESH as stated by the company — from a 1992 inception to a China-connected, Bangladesh-executing fabric sourcing model.',
    crumbs: [['Company', C], ['Our Story']],
    hero: {
      eyebrow: 'Company · Our Story',
      title: 'From a trading inception to a China–Bangladesh fabric corridor',
      lead: 'The company’s stated history begins in 1992 and ends at a deliberate operating model: China-connected sourcing, Bangladesh execution, and quality that is checked twice before it moves.',
      image: '/assets/img/rolls.jpg',
    },
    sections: [
      { t: 'h2', title: 'The story as stated' },
      {
        t: 'paras',
        body: [
          'According to company materials, YOU LI’s work began in 1992 and developed through the China–Bangladesh trade corridor into its current form: a fabric sourcing specialist with operating presence in both countries, direct relationships with Chinese mills, and a service scope that runs from mill matching through import to factory delivery in Bangladesh. (Company statement; the timeline below is the company’s stated history, and documentary verification is tracked in the evidence register.)',
          'What the history matters for is the shape of the model it produced. A company that has spent decades on both sides of the China–Bangladesh corridor builds its capability in the seams — the handoff between mill and importer, between inspection and shipment, between container and cutting table. Those seams are where sourcing programs actually fail, and they are where YOU LI’s operating model is concentrated.',
        ],
      },
      { t: 'h2', title: 'Timeline (company-stated)' },
      {
        t: 'steps',
        items: [
          { n: '1992', title: 'Inception', body: 'The company’s stated founding year. The early period is described in company materials as trade activity that would later formalize into the China–Bangladesh fabric corridor. (Company statement.)' },
          { n: 'Phase 2', title: 'The corridor takes shape', body: 'Sourcing across China, import into Bangladesh and local distribution develop into the two-office operating model — Shanghai for the mill side, Uttara (Dhaka) for the buyer side. (Company statement.)' },
          { n: 'Phase 3', title: 'Product breadth', body: 'The portfolio develops across woven, knit, denim, sportswear and functional fabrics, with a functional-yarn capability that extends the service into the performance layer. (Company statement.)' },
          { n: 'Now', title: 'Evidence-led sourcing', body: 'The current operating model: specification-led briefs, disclosed mill relationship types, two-stage quality verification and a public website that shows its evidence status. (Operating model as supplied.)' },
        ],
      },
      { t: 'h2', title: 'The tagline, unpacked' },
      {
        t: 'cards',
        items: [
          { k: 'Supplying Quality', v: 'Quality is a process with checkpoints, acceptance criteria and documents — inline at the mill, final before shipment — not a descriptor on a brochure.' },
          { k: 'Building Trust', v: 'Trust is built from verifiable facts: entity details, relationship types, inspection reports, certificate metadata, dated and requestable.' },
          { k: 'Delivering Value', v: 'Value is the reduced cost of risk: fewer failed lots, fewer surprises at the cutting table, fewer handoffs nobody owns.' },
        ],
      },
      { t: 'h2', title: 'Where the model is going' },
      {
        t: 'paras',
        body: [
          'Company materials describe a sourcing scope across Asia and Europe, with expansion toward Vietnam, India and Turkey described as planned rather than active. This website treats those regions exactly that way: the Sourcing Network section marks each region as active, described or planned, so a buyer never mistakes ambition for coverage. (Company statement; regional verification in progress.)',
        ],
      },
      { t: 'cta', title: 'See the model in operation', lead: 'The sourcing process page shows the six stages, the owners and the evidence artifacts at each step.' },
    ],
    next: [
      ['Company Overview', 'Identity, operating model and identity register.', C],
      ['Why YOU LI', 'The four evidence-linked reasons to believe.', '/about/why-youli/'],
      ['Planned Regions', 'Vietnam, India and Turkey — clearly labeled as planned.', '/sourcing-network/planned-regions/'],
    ],
  },
  {
    path: '/about/why-youli/',
    title: 'Why YOU LI — China-Connected Sourcing with Bangladesh Execution',
    meta: 'Four reasons to believe — China-connected mill access, Bangladesh execution, two-stage quality verification and specification-led service — each with its evidence state.',
    crumbs: [['Company', C], ['Why YOU LI']],
    hero: {
      eyebrow: 'Company · Why YOU LI',
      title: 'Why buyers use a sourcing partner — and why this one',
      lead: 'Four reasons to believe, each stated with its evidence state. The differentiators are strong as supplied; the website makes their verification visible rather than implying it.',
    },
    sections: [
      { t: 'h2', title: 'Reason 01 — China-connected mill access' },
      {
        t: 'paras',
        body: [
          'The core of the offer is access to Chinese mill capability through a buyer-facing team that has operated on the mill side long enough to know which mills actually do which constructions well. When YOU LI shortlists mills for your brief, the shortlist is by construction, fibre and finish capability — and every option carries its relationship type: direct, partner or cooperative. You always know what kind of relationship you are buying through.',
          'Evidence state: company statement. The mill network, its size and the relationship types are described in company materials and are being documented mill by mill in the sourcing register. Ask for the register entry for any recommended source.',
        ],
      },
      { t: 'h2', title: 'Reason 02 — Bangladesh execution' },
      {
        t: 'paras',
        body: [
          'China-side sourcing without Bangladesh-side execution creates a handoff problem: the fabric arrives in Chittagong and the coordination problem starts. YOU LI’s Uttara office owns the import side — customs coordination, local distribution and factory delivery — so the responsibility for each step is written into the order file before the container moves. For a garment factory in Dhaka, the difference is whether the fabric is on the cutting table when the line needs it.',
          'Evidence state: company statement. Office presence, delivery scope and responsibility split are as supplied; the delivery-responsibility matrix is documented per order.',
        ],
      },
      { t: 'h2', title: 'Reason 03 — Two-stage quality verification' },
      {
        t: 'paras',
        body: [
          'Most fabric fails after the sample: in the bulk run, at the wash, at the cutting table. The process answer is two checkpoints with documents — inline inspection at the source mill during production, and final pre-shipment verification before the fabric moves. Both run against acceptance criteria you approve, both produce reports, and both are available in your order file. The company does not publish a “zero defect” claim — it publishes the process that makes quality an inspectable fact.',
          'Evidence state: company statement. The SOP, inspection checkpoints and acceptance criteria are documented in the QA evidence pack; a redacted sample report is available on request once approved for publication.',
        ],
      },
      { t: 'h2', title: 'Reason 04 — Specification-led service' },
      {
        t: 'paras',
        body: [
          'A fabric brief that starts from a specification — construction, composition, weight, width, finish, application, performance targets — gets a specification back: mill-matched options with a written comparison, a test plan where performance is involved, and MOQ and lead time per option. The service is designed so that the answer to “can you prove it meets our requirement?” is a document, a sample and a test result — not a confident sentence.',
          'Evidence state: operating practice. The brief-to-sample-to-bulk workflow is the service design; its artifacts (specification comparisons, sample plans, inspection reports) are what you can request at any stage.',
        ],
      },
      { t: 'h2', title: 'Objections, handled directly' },
      {
        t: 'table',
        head: ['Objection', 'The answer structure'],
        rows: [
          ['“Are you a mill or an agent?”', 'A sourcing and distribution partner. Each option states whether it is mill-made, partner-supplied or stocked.'],
          ['“Can you prove the fabric meets our requirement?”', 'Specification comparison, sample and available test/certificate evidence — delivered as documents.'],
          ['“What happens if quality fails?”', 'Inspection, acceptance criteria, escalation and documentation. We do not promise zero defects; we publish the process.'],
          ['“What is the MOQ and lead time?”', 'Product-specific ranges, confirmed against construction, colour and source — never a website number.'],
          ['“Are the listed brands your clients?”', 'Buyer relationships are confidential unless permissioned. This site does not display unverified client names.'],
          ['“Are you certified?”', 'YOU LI, source-mill and material/product certifications are kept distinct, each with issuer, scope, number and validity.'],
        ],
      },
      { t: 'cta', title: 'Test the claim with a brief', lead: 'Send one construction or reference sample. The quality of the answer is the evidence.' },
    ],
    next: [
      ['Quality Assurance', 'The two-stage process in full, with checkpoints and escalation.', '/quality-compliance/quality-assurance/'],
      ['Sourcing Process', 'Six stages with owners and evidence artifacts.', '/services/sourcing-process/'],
      ['Sustainability', 'Evidence states for recycled and responsible materials.', '/quality-compliance/sustainability/'],
    ],
  },
  {
    path: '/about/team/',
    title: 'Team — YOU LI',
    meta: 'Leadership and core functions of the YOU LI sourcing team across Dhaka and Shanghai, with routing by inquiry type.',
    crumbs: [['Company', C], ['Team']],
    hero: {
      eyebrow: 'Company · Team',
      title: 'The team behind the order file',
      lead: 'Two offices, one file. Leadership and functions are presented with their routing; individual profiles are published with consent, per the evidence register.',
    },
    sections: [
      { t: 'h2', title: 'Leadership' },
      {
        t: 'cards',
        items: [
          { k: 'Country Manager — Bangladesh', v: 'Owns the Uttara office: import, local distribution, factory coordination and buyer relationships. First point of contact for delivery and local questions. Profile available on request; publication subject to individual consent.' },
          { k: 'Managing Director — China', v: 'Owns the Shanghai office: mill relationships, sourcing strategy, sampling and export coordination. First point of contact for mill-side and sourcing questions. Profile available on request; publication subject to individual consent.' },
        ],
      },
      {
        t: 'note',
        text: 'Per the company evidence register, named profiles are published with written consent. Until then, the roles are the contact — and each is reachable through the office contact routes on the Contact page.',
      },
      { t: 'h2', title: 'Core functions' },
      {
        t: 'table',
        head: ['Function', 'Owns', 'Routing', 'Languages'],
        rows: [
          ['Sourcing', 'Mill shortlist, relationship-type disclosure, option documentation', 'Via Shanghai office', 'Mandarin · English'],
          ['Quality assurance', 'Inline inspection, pre-shipment verification, escalation, reports', 'Both offices', 'English · Mandarin · Bangla'],
          ['Logistics & import', 'Shipment, customs coordination, local distribution, delivery', 'Via Uttara office', 'English · Bangla'],
          ['Technical support', 'Specification packs, test interpretation, construction guidance', 'Both offices', 'English · Mandarin'],
          ['Sales & account management', 'Brief intake, RFQ routing, order-file ownership', 'Both offices', 'English · Bangla · Mandarin'],
        ],
      },
      { t: 'h2', title: 'How an inquiry is routed' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Intake', body: 'The brief lands in one inbox. Category and location set the primary route — fabric and yarn to sourcing, delivery questions to logistics, quality questions to QA.' },
          { n: '2', title: 'Assignment', body: 'A named contact is assigned. You receive the confirmation with the inquiry ID and the name — one person owns your thread from here.' },
          { n: '3', title: 'Cross-office handoff', body: 'Where the question crosses offices (a Dhaka factory question with a Shanghai mill answer), the named contact carries it across. You keep one thread.' },
          { n: '4', title: 'Escalation', body: 'Quality failures, delivery failures or compliance questions escalate to the responsible office leadership on a defined path — documented in the order file.' },
        ],
      },
      { t: 'cta', title: 'Start a conversation', lead: 'Contact the team directly, or send a structured brief through Request a Fabric Match.' },
    ],
    next: [
      ['Contact', 'Office routes, hours and direct channels.', '/contact/'],
      ['Bangladesh Office', 'The Uttara office and its responsibilities.', '/about/offices/bangladesh/'],
      ['China Office', 'The Shanghai office and its responsibilities.', '/about/offices/china/'],
    ],
  },
  {
    path: '/about/offices/bangladesh/',
    title: 'Bangladesh Office — Uttara, Dhaka',
    meta: 'The Uttara, Dhaka office: import, local distribution, factory coordination and pre-shipment verification for the Bangladesh side of the order file.',
    crumbs: [['Company', C], ['Offices', '/about/offices/bangladesh/'], ['Bangladesh']],
    hero: {
      eyebrow: 'Company · Offices',
      title: 'Bangladesh fabric sourcing support, from Uttara',
      lead: 'The Dhaka office owns the buyer side of the corridor: import and customs coordination, local distribution, factory delivery and the final quality gate before fabric reaches your line.',
      image: '/assets/img/office.jpg',
    },
    sections: [
      { t: 'h2', title: 'What the office does' },
      {
        t: 'cards',
        items: [
          { k: 'Import & customs coordination', v: 'Shipment follow-through, documentation and customs coordination for fabric arriving in Bangladesh.' },
          { k: 'Local distribution', v: 'Delivery coordination from the Dhaka hub to factories and warehouses across the garment belt.' },
          { k: 'Factory coordination', v: 'Delivery scheduling, roll-count handoff and the on-the-ground contact for your production team.' },
          { k: 'Pre-shipment verification', v: 'The second quality gate — final checks against the approved specification, documented in the order file.' },
        ],
      },
      { t: 'h2', title: 'Service details' },
      {
        t: 'table',
        note: 'Office details as stated in company materials; street address and publication consent are launch checklist items.',
        head: ['Item', 'Detail', 'Status'],
        rows: [
          ['Location', 'Uttara, Dhaka 1230, Bangladesh', 'Company statement'],
          ['Primary role', 'Import, local distribution, factory coordination', 'Company statement'],
          ['Quality role', 'Pre-shipment verification (second gate)', 'Company statement'],
          ['Working hours', 'Sunday–Thursday, 9:30–18:00 (GMT+6)', 'Company statement'],
          ['Contact routing', 'Delivered via Contact page and RFQ routing', 'Company statement'],
        ],
      },
      { t: 'h2', title: 'What this means for your program' },
      {
        t: 'paras',
        body: [
          'For a garment factory in Dhaka, Gazipur or Savar, the office means the fabric’s last mile is owned by someone who answers the phone. Delivery responsibility is written into the order file: what moves when, who receives it, and what happens when it does not. For a buying house, it means local coordination for the factories you serve — one contact that carries the thread from container to cutting table.',
          'The office also holds the buyer-side evidence: pre-shipment reports, delivery records and the local side of the escalation path. When a buyer asks “what happened between the port and my factory?”, the answer is in the order file, with a name and a date.',
        ],
      },
      { t: 'cta', title: 'Talk to the Dhaka office', lead: 'Delivery, local distribution and factory coordination questions route here first.' },
    ],
    next: [
      ['China Office', 'The mill-side half of the corridor.', '/about/offices/china/'],
      ['Import & Distribution', 'The service in full, with the responsibility matrix.', '/services/import-distribution/'],
      ['Pre-Shipment Verification', 'The quality gate this office owns.', '/quality-compliance/pre-shipment-verification/'],
    ],
  },
  {
    path: '/about/offices/china/',
    title: 'China Office — Shanghai',
    meta: 'The Shanghai office: mill liaison, sampling, source inspection and export coordination for the China side of the order file.',
    crumbs: [['Company', C], ['Offices', '/about/offices/bangladesh/'], ['China']],
    hero: {
      eyebrow: 'Company · Offices',
      title: 'The mill side of the corridor, from Shanghai',
      lead: 'The Shanghai office owns the source side: mill relationships, matching, sampling, inline inspection at the source mill and export coordination.',
      image: '/assets/img/yarns.jpg',
    },
    sections: [
      { t: 'h2', title: 'What the office does' },
      {
        t: 'cards',
        items: [
          { k: 'Mill liaison', v: 'Relationships with Chinese weaving, knitting and finishing mills; capability knowledge by construction and region.' },
          { k: 'Mill matching', v: 'Shortlisting by construction, fibre and finish capability — with the relationship type (direct, partner, cooperative) stated per option.' },
          { k: 'Sampling', v: 'Lab dips, strike-offs and functional strike-offs against your approved references, with written specification comparisons.' },
          { k: 'Source inspection', v: 'Inline inspection at the source mill during production — the first quality gate, documented in the order file.' },
          { k: 'Export coordination', v: 'Shipment documentation, booking coordination and the handoff to the Dhaka office’s import side.' },
        ],
      },
      { t: 'h2', title: 'Service details' },
      {
        t: 'table',
        note: 'Office details as stated in company materials; street address and publication consent are launch checklist items.',
        head: ['Item', 'Detail', 'Status'],
        rows: [
          ['Location', 'Shanghai, People’s Republic of China', 'Company statement'],
          ['Primary role', 'Mill liaison, sourcing, sampling, export coordination', 'Company statement'],
          ['Quality role', 'Inline inspection at source mills (first gate)', 'Company statement'],
          ['Working hours', 'Monday–Saturday, 9:00–18:00 (GMT+8)', 'Company statement'],
          ['Contact routing', 'Delivered via Contact page and RFQ routing', 'Company statement'],
        ],
      },
      { t: 'h2', title: 'Why the mill-side office matters' },
      {
        t: 'paras',
        body: [
          'Sourcing quality is decided in two places: the mill floor during production, and the warehouse before shipment. A sourcing partner who only sees the fabric at the port has one of the two eyes closed. The Shanghai office exists to keep the first eye open — inline inspection at the source mill is where weight drifts, colour shifts and construction faults are caught while they are still cheap to fix.',
          'It is also where relationship type becomes a document rather than a claim. The office maintains the sourcing register: which mills, which constructions, which relationship type, which review date. When YOU LI recommends a source, the register entry is the answer.',
        ],
      },
      { t: 'cta', title: 'Talk to the Shanghai office', lead: 'Sourcing, sampling and mill-side questions route here first.' },
    ],
    next: [
      ['Bangladesh Office', 'The buyer-side half of the corridor.', '/about/offices/bangladesh/'],
      ['Sourcing Network — China', 'Regions, mill types and coverage.', '/sourcing-network/china/'],
      ['Inline Inspection', 'The first quality gate in full.', '/quality-compliance/inline-inspection/'],
    ],
  },
  // ---- Sourcing network ----
  {
    path: '/sourcing-network/china/',
    title: 'Sourcing Network — China',
    meta: 'China sourcing coverage: regions, mill types, relationship types and the documentation standard for every recommended source.',
    crumbs: [['Sourcing Network', '/sourcing-network/china/'], ['China']],
    hero: {
      eyebrow: 'Sourcing Network · Active',
      title: 'China — the active, documented sourcing region',
      lead: 'Weaving, knitting, dyeing and finishing capability across China’s textile regions, accessed through direct, partner and cooperative mill relationships — with the relationship type stated for every recommended source.',
      image: '/assets/img/rolls.jpg',
    },
    sections: [
      { t: 'h2', title: 'What “China sourcing” means here' },
      {
        t: 'paras',
        body: [
          'China is the region where this operating model was built, and it remains the active, documented sourcing region. In practice that means three things: the mill network is maintained region by region with capability notes; every recommended source carries a relationship type — direct, partner or cooperative — so you know what kind of access you are buying through; and the sourcing register entry for a recommended mill is available on request, with the relationship type and the last review date.',
          'The company’s stated scope describes sourcing across Asia and Europe; that is handled on its own pages, clearly separated from what is active today. This page is the honest one: what China coverage is, what it includes, and what the documentation looks like.',
        ],
      },
      { t: 'h2', title: 'Regions and capability' },
      {
        t: 'table',
        note: 'Regional capability map as stated in company sourcing materials; mill-by-mill detail lives in the sourcing register.',
        head: ['Region', 'Known for', 'Typical programs', 'Status'],
        rows: [
          ['Jiangsu', 'Woven and technical cloth, finishing depth', 'Woven, functional, workwear', 'Active — Company statement'],
          ['Zhejiang', 'Knit breadth, yarn depth, small-to-mid programs', 'Knit, denim-adjacent, yarn', 'Active — Company statement'],
          ['Pearl Delta (Guangdong)', 'Knit and functional finishing, fast sampling', 'Knit, activewear, functional', 'Active — Company statement'],
          ['Shanghai (office)', 'Coordination hub, sampling and inspection', 'All programs', 'Active — office location'],
        ],
      },
      { t: 'h2', title: 'Relationship types' },
      {
        t: 'cards',
        items: [
          { k: 'Direct', v: 'YOU LI works directly with the mill: specification, inspection access and commercial terms flow without an intermediary. The strongest control position; disclosed when it applies.' },
          { k: 'Partner', v: 'A standing commercial relationship with agreed terms and inspection access, without direct ownership of the production. The most common type in the network.' },
          { k: 'Cooperative', v: 'Capability accessed for specific programs through established working arrangements. Stated as such — never implied to be a direct relationship.' },
        ],
      },
      { t: 'h2', title: 'Documentation standard' },
      {
        t: 'list',
        items: [
          'Every recommended source carries: relationship type, construction capability, last review date, and the quality-gate access arrangement.',
          'Mill identity may be disclosed or anonymized per the mill’s consent — the relationship type and capability notes are always available.',
          'Certification references (mill-level) are recorded with issuer, scope, number and validity — and are never presented as YOU LI certifications.',
          'The sourcing register is the reference: ask for the entry for any recommended source, at any stage of the program.',
        ],
      },
      { t: 'cta', title: 'Ask for a mill-matched shortlist', lead: 'Send the construction and target spec. You get options with relationship types, not just names.' },
    ],
    next: [
      ['Asia', 'Current and planned coverage across the region.', '/sourcing-network/asia/'],
      ['Inline Inspection', 'How the first quality gate works at source.', '/quality-compliance/inline-inspection/'],
      ['Fabric Sourcing', 'The service, end to end.', '/services/fabric-sourcing/'],
    ],
  },
  {
    path: '/sourcing-network/asia/',
    title: 'Sourcing Network — Asia',
    meta: 'Asia sourcing coverage: China active and documented; Vietnam, India and Turkey described as planned expansion, clearly labeled.',
    crumbs: [['Sourcing Network', '/sourcing-network/china/'], ['Asia']],
    hero: {
      eyebrow: 'Sourcing Network · Asia',
      title: 'Asia — one active region, three planned',
      lead: 'Company materials describe sourcing across Asia, with Vietnam, India and Turkey as the named expansion targets. This page separates what is active and documented from what is planned — so the distinction is never accidental.',
    },
    sections: [
      { t: 'h2', title: 'Active today' },
      {
        t: 'paras',
        body: [
          'China is the active, documented sourcing region for Asia: the mill network, the relationship types and the sourcing register are maintained and available as described on the China page. That is the full statement of active Asian coverage — one region, documented at mill level.',
          'The discipline matters because “Asia sourcing” is a phrase that does a lot of quiet work in a brochure. A buyer planning a 2027 program against a region that is “being developed” and a buyer planning against a region with a maintained mill register are making two different risk decisions. This site shows which one you are making.',
        ],
      },
      { t: 'h2', title: 'Planned regions' },
      {
        t: 'table',
        note: 'Expansion targets as described in company materials. “Planned” is the status; it changes when coverage is active and documented.',
        head: ['Region', 'Why it is named', 'What “planned” requires', 'Status'],
        rows: [
          ['Vietnam', 'Adjacent apparel production base; complementary cost and lead-time options', 'Active mill relationships, inspection access, delivery coordination, register entries', 'Planned — Company statement'],
          ['India', 'Cotton depth, yarn and denim capability', 'Same activation standard', 'Planned — Company statement'],
          ['Turkey', 'Short-haul option for European-bound programs', 'Same activation standard', 'Planned — Company statement'],
        ],
      },
      { t: 'h2', title: 'The activation standard' },
      {
        t: 'paras',
        body: [
          'A region moves from “planned” to “active” on this site only when four things are true: active mill relationships with relationship types stated; inspection access at the quality gates; delivery or coordination capability for the region; and sourcing register entries in place. Until all four are documented, the region stays labeled planned — including in search results and in sales conversations.',
          'That standard exists for the buyer, not for the company: it is the difference between a claim and a fact you can verify during diligence.',
        ],
      },
      { t: 'cta', title: 'Plan against what is active', lead: 'China programs can start now with the documented network. Planned regions are available for roadmap conversations.' },
    ],
    next: [
      ['China', 'The active region in detail.', '/sourcing-network/china/'],
      ['Planned Regions', 'Vietnam, India, Turkey — and the activation standard.', '/sourcing-network/planned-regions/'],
      ['Europe', 'The other stated region, and its status.', '/sourcing-network/europe/'],
    ],
  },
  {
    path: '/sourcing-network/europe/',
    title: 'Sourcing Network — Europe',
    meta: 'Europe in the YOU LI sourcing scope as described in company materials — status, verification state and what buyers can and cannot assume.',
    crumbs: [['Sourcing Network', '/sourcing-network/china/'], ['Europe']],
    hero: {
      eyebrow: 'Sourcing Network · Europe',
      title: 'Europe — described in the scope, verification in progress',
      lead: 'Company materials describe a sourcing scope that includes Europe. This page states exactly what that means today: the scope is company-stated; region-by-region verification is in progress; no European mill coverage is represented as active on this site.',
    },
    sections: [
      { t: 'h2', title: 'What the scope says' },
      {
        t: 'paras',
        body: [
          'The company’s described sourcing scope spans Asia and Europe, with China as the primary, documented region. Europe appears in the scope as part of the company’s stated geographic ambition — the kind of coverage that serves European-bound programs with alternative origin options and European-standard compliance documentation.',
          'This page’s job is to keep that ambition at its honest status: described in company materials, not yet verified region by region, and therefore not represented as active sourcing capability. “Not publicly verified” is not a verdict on capability — it is a statement about evidence.',
        ],
      },
      { t: 'h2', title: 'Status register' },
      {
        t: 'evidence',
        items: [
          { label: 'Europe in company sourcing scope', status: 'Company statement', note: 'As described in company materials; the scope statement is published, the coverage is not yet documented.' },
          { label: 'European mill relationships', status: 'Not publicly verified', note: 'No mill-level coverage is documented for publication. Verification is region by region.' },
          { label: 'Inspection access (Europe)', status: 'Not publicly verified', note: 'Quality-gate access arrangements are not documented for European sources.' },
          { label: 'Compliance documentation', status: 'Verification in progress', note: 'Where European programs require specific standards, documentation is assembled per program.' },
        ],
      },
      { t: 'h2', title: 'What a buyer can assume' },
      {
        t: 'list',
        items: [
          'You can assume the scope is real intent: Europe is a named, planned dimension of the operating model, not a footer phrase.',
          'You can assume verification is underway: region-by-region coverage is being documented to the same standard as the China register.',
          'You cannot assume active European mill coverage today — and this site does not represent it.',
          'Programs with European compliance requirements can proceed on the documented regions, with European-standard documentation assembled per program where required.',
        ],
      },
      { t: 'cta', title: 'Ask about European-bound programs', lead: 'Tell us the program and the compliance requirements; we will tell you what is documented and what is in progress.' },
    ],
    next: [
      ['China', 'The documented region.', '/sourcing-network/china/'],
      ['Asia', 'Active and planned coverage.', '/sourcing-network/asia/'],
      ['Certifications & Compliance', 'How compliance documentation is handled.', '/quality-compliance/certifications-compliance/'],
    ],
  },
  {
    path: '/sourcing-network/planned-regions/',
    title: 'Sourcing Network — Planned Regions',
    meta: 'Vietnam, India and Turkey: the named expansion targets, why they are named, and the four-part activation standard that turns planned into active.',
    crumbs: [['Sourcing Network', '/sourcing-network/china/'], ['Planned Regions']],
    hero: {
      eyebrow: 'Sourcing Network · Planned',
      title: 'Planned regions — and the standard that makes them real',
      lead: 'Vietnam, India and Turkey are the named expansion targets in the company’s stated roadmap. “Planned” is a status, not a promise: each region activates on the same four-part standard.',
    },
    sections: [
      { t: 'h2', title: 'The three named regions' },
      {
        t: 'table',
        head: ['Region', 'Strategic logic', 'What it would add', 'Status'],
        rows: [
          ['Vietnam', 'Adjacent to Bangladesh production; complementary cost and lead-time profile; strong knit and woven base', 'Origin diversification for brands hedging single-country production', 'Planned — Company statement'],
          ['India', 'Deep cotton and yarn base; denim and woven capability; established export discipline', 'Fibre-origin options and denim depth', 'Planned — Company statement'],
          ['Turkey', 'Short-haul origin for European-bound programs; established apparel supply chain', 'Lead-time reduction for European programs', 'Planned — Company statement'],
        ],
      },
      { t: 'h2', title: 'The activation standard' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Active mill relationships', body: 'Mills with stated relationship types (direct, partner, cooperative) and capability notes by construction — the same register discipline as China.' },
          { n: '2', title: 'Quality-gate access', body: 'Inline and pre-shipment inspection access for the region, with the same acceptance-criteria discipline and reporting.' },
          { n: '3', title: 'Delivery or coordination capability', body: 'A documented route for the region — whether that is local delivery, coordinated logistics or a defined handoff arrangement.' },
          { n: '4', title: 'Register entries in place', body: 'Sourcing register entries: relationship type, capability, review date, quality access. No register entry, no active label.' },
        ],
      },
      { t: 'h2', title: 'Why the standard is public' },
      {
        t: 'paras',
        body: [
          'Sourcing roadmaps are usually marketing. This one is a checklist, and it is published for a reason: when a region is named as “planned” on your supplier’s website, the honest question is what “planned” will require before it becomes real. The answer here is four documented conditions, applied in the same order, with the result visible on this site when a region qualifies.',
          'For buyers planning multi-year programs, the standard is also a diligence shortcut: ask a sourcing partner what turns their roadmap into coverage, and listen for a checklist. The ones that answer with a checklist are the ones whose other claims are probably real too.',
        ],
      },
      { t: 'cta', title: 'Build a roadmap together', lead: 'If your program needs origin diversification, send the brief — we will show you what is documented today and what the activation timeline looks like.' },
    ],
    next: [
      ['Asia', 'The regional view: active and planned.', '/sourcing-network/asia/'],
      ['China', 'The documented baseline.', '/sourcing-network/china/'],
      ['Our Story', 'Where the expansion fits in the company narrative.', '/about/our-story/'],
    ],
  },
];
