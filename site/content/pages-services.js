// Services pages.
module.exports = [
  {
    path: '/services/fabric-sourcing/',
    title: 'Fabric Sourcing for Apparel Brands, Exporters and Buying Houses | YOU LI',
    meta: 'Specification-led fabric sourcing: brief, mill matching, sampling, quotation, bulk and delivery — with relationship types disclosed and both quality gates documented.',
    crumbs: [['Services', '/services/fabric-sourcing/']],
    hero: {
      eyebrow: 'Services',
      title: 'Fabric sourcing for apparel brands, exporters and buying houses',
      lead: 'One brief in, mill-matched options out — construction, composition, weight, width, finish and performance specified, sampled, inspected and delivered with the evidence in the order file.',
      image: '/assets/img/woven.jpg',
    },
    sections: [
      { t: 'h2', title: 'How the service runs' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Brief', body: 'Construction, target specification, quantity, application, destination, timeline and compliance requirements — or a reference sample. Missing fields are marked “need guidance,” not guessed.' },
          { n: '2', title: 'Mill matching', body: 'Mills shortlisted by construction, fibre and finish capability. Every option carries its relationship type: direct, partner or cooperative.' },
          { n: '3', title: 'Sampling', body: 'Lab dips, strike-offs and functional strike-offs against your references, each with a written specification comparison for approval.' },
          { n: '4', title: 'Quotation', body: 'Options with MOQ, lead time and terms per construction, colour and source — confirmed values, not website numbers.' },
          { n: '5', title: 'Bulk with gates', body: 'Production with inline inspection at the source mill and pre-shipment verification, both against your acceptance criteria.' },
          { n: '6', title: 'Delivery', body: 'Import, customs coordination and local delivery from Uttara, Dhaka — responsibility per step in the order file.' },
        ],
      },
      { t: 'h2', title: 'What we capture from you' },
      {
        t: 'table',
        head: ['Field', 'Why it matters', 'If you do not know it'],
        rows: [
          ['Construction / category', 'Sets the mill shortlist', 'Describe the garment; we propose constructions'],
          ['Composition', 'Sets cost, hand and care behaviour', 'Mark “need guidance” — we recommend'],
          ['GSM / oz and width', 'Sets the specification tolerances', 'We propose ranges for the application'],
          ['Finish / performance', 'Sets the test plan', 'We propose the reference methods'],
          ['Quantity', 'Sets MOQ and commercial structure', 'Development quantities are quoted as programs'],
          ['Destination', 'Sets the delivery route', 'State the factory or “TBD”'],
          ['Timeline', 'Sets the schedule plan', 'We propose milestones you approve'],
          ['Compliance requirements', 'Sets the documentation plan', 'We list what the program type typically needs'],
        ],
      },
      { t: 'h2', title: 'What you get back' },
      {
        t: 'cards',
        items: [
          { k: 'Mill-matched options', v: '2–5 options per brief, each with relationship type, specification comparison and capability notes.' },
          { k: 'Specification comparisons', v: 'Your target vs each option, field by field — the document your approval runs from.' },
          { k: 'Test plans', v: 'Where performance is involved: reference method, target and checkpoint, agreed before sampling.' },
          { k: 'Dated lead-time plan', v: 'Sampling, bulk and delivery milestones with owners — tracked in the order file.' },
          { k: 'Quality reports', v: 'Inline findings log and pre-shipment verification report, delivered to you and your factory.' },
        ],
      },
      { t: 'h2', title: 'What we do not do' },
      {
        t: 'list',
        items: [
          'We do not quote MOQ or lead time as a generic website number — the value is confirmed per construction, colour and source.',
          'We do not present unverified mills as “certified” — the relationship type is stated, and mill credentials carry their own scope and status.',
          'We do not close a brief without a next evidence artifact: sample, specification sheet, quotation or feasibility answer, named in the response.',
        ],
      },
      { t: 'cta', title: 'Start a sourcing brief', lead: 'Request a Fabric Match carries the brief, the files and the consent in one place.' },
    ],
    next: [
      ['Yarn Sourcing', 'The performance layer of the fabric.', '/services/yarn-sourcing/'],
      ['Sourcing Process', 'The six stages with owners and artifacts.', '/services/sourcing-process/'],
      ['Fabric Library', 'Browse constructions with evidence states.', '/products/'],
    ],
  },
  {
    path: '/services/yarn-sourcing/',
    title: 'Yarn Sourcing — Functional & Performance Yarn Systems | YOU LI',
    meta: 'Yarn-level sourcing for capillary, antibacterial, waterproof, FR, high-strength and super-soft systems — with supplier dossiers and authorisation status tracked.',
    crumbs: [['Services', '/services/fabric-sourcing/'], ['Yarn Sourcing']],
    hero: {
      eyebrow: 'Services',
      title: 'Yarn sourcing for performance programs',
      lead: 'Performance usually starts in the yarn. Supplier-first matching, technical dossiers, authorisation tracking and fabric-plus-yarn specified as one package.',
      image: '/assets/img/yarns.jpg',
    },
    sections: [
      { t: 'h2', title: 'Why source at yarn level' },
      {
        t: 'paras',
        body: [
          'A finish can wash out; a fibre cannot. Yarn-level sourcing is the honest route to durable performance — capillary wicking in the cross-section, antibacterial ions in the yarn, flame resistance in the molecule — and it is also the honest route to specification, because the function is verifiable at the yarn, not just promised on the finished fabric. For programs where performance must survive the garment’s working life, the yarn is where the contract lives.',
          'The service runs supplier-first: the functional-yarn supplier’s technical dossier and, where a brand system applies, the manufacturer authorisation status, are checked before quotation. The yarn and the fabric construction are then quoted as one package, so the performance specified at yarn level is the performance the fabric delivers.',
        ],
      },
      { t: 'h2', title: 'The systems we source' },
      {
        t: 'table',
        head: ['System', 'What it does', 'Typical programs', 'Evidence basis'],
        rows: [
          ['Capillary (wicking)', 'Draws moisture from skin to surface for faster dry-down', 'T-shirts, base layers, sportswear', 'Supplier dossier + wicking test to target'],
          ['Antibacterial', 'Microbial control with wash durability', 'Uniforms, hygiene, workwear', 'Supplier dossier + ISO 20743/22196 family to target'],
          ['Waterproof / hydrophobic', 'Water resistance with laundering durability', 'Workwear, outerwear', 'Supplier dossier + hydrostatic test to target'],
          ['FR fibre', 'Inherent flame resistance', 'Protective workwear', 'Supplier dossier + program-standard evidence'],
          ['High-tenacity', 'Elevated tensile and tear strength', 'Tactical, protective, heavy-duty', 'Supplier dossier + tensile/tear to target'],
          ['Super-soft micro', 'Premium hand-feel', 'Loungewear, premium T-shirts, basics', 'Supplier dossier + hand/loft verification'],
        ],
      },
      { t: 'h2', title: 'Brand systems and authorisation' },
      {
        t: 'paras',
        body: [
          'Some performance systems are brand names — Coolmax® is the reference case. Using a brand name and its claims requires the manufacturer’s authorisation, and the status of that authorisation is tracked per record: “verification in progress” is a state on this site, not an avoidance. Where a program does not require the brand, equivalent systems from equivalent suppliers are quoted with the same dossier discipline.',
          'For your diligence file, the yarn record carries: supplier, system description, fibre base, the authorisation status (where a brand is involved), and the test plan for the program. That is the full answer to “what exactly is this yarn and who says so.”',
        ],
      },
      { t: 'h2', title: 'The sampling path' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Function brief', body: 'The performance you need, the garment, the washing regime, and the test standard where you have one.' },
          { n: '2', title: 'Yarn shortlist', body: 'Suppliers matched to the function with dossiers; brand authorisation status stated where relevant.' },
          { n: '3', title: 'Yarn strike-offs into fabric', body: 'The yarn knitted or woven into your target construction, with the specification comparison and test plan.' },
          { n: '4', title: 'Bulk with yarn-level verification', body: 'Production with verification at yarn level where the program specifies, and at fabric level at both quality gates.' },
        ],
      },
      { t: 'cta', title: 'Brief a yarn function', lead: 'Tell us the performance and the garment. The shortlist comes back with dossiers and test plans attached.' },
    ],
    next: [
      ['Performance Yarns Library', 'The six yarn families with evidence states.', '/products/performance-yarns/'],
      ['Fabric Sourcing', 'The fabric-side service.', '/services/fabric-sourcing/'],
      ['Technical Support', 'Specification and test guidance.', '/services/technical-support/'],
    ],
  },
  {
    path: '/services/product-development/',
    title: 'Product Development — Sampling, Lab Dips and Strike-Offs | YOU LI',
    meta: 'Development service: lab dips, strike-offs, functional trials and revision rounds — sampling run as a documented workflow against your approved references.',
    crumbs: [['Services', '/services/fabric-sourcing/'], ['Product Development']],
    hero: {
      eyebrow: 'Services',
      title: 'Product development, run as a documented workflow',
      lead: 'From design intent to an approvable material: lab dips, strike-offs, functional trials and revision rounds — each with a written comparison, so approval is a document rather than a memory.',
      image: '/assets/img/knit.jpg',
    },
    sections: [
      { t: 'h2', title: 'The development loop' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Reference intake', body: 'Your references: colour standard, target specification, performance targets, hand-feel notes, or a physical sample. Gaps are listed, not guessed.' },
          { n: '2', title: 'Sample plan', body: 'The set you are developing against: sample types, quantities, dated lead time and the specification comparison each sample will carry.' },
          { n: '3', title: 'Samples delivered', body: 'Lab dips for colour, strike-offs for construction, functional strike-offs where a property must be demonstrated. Each arrives with its comparison document.' },
          { n: '4', title: 'Approval & revision', body: 'Approvals are recorded. Revision rounds run the same discipline — the delta document shows what changed and why.' },
          { n: '5', title: 'Bulk handoff', body: 'Approved sampling hands into production with the same specification, acceptance criteria and quality gates. No re-baselining at the handoff.' },
        ],
      },
      { t: 'h2', title: 'What a development brief should carry' },
      {
        t: 'table',
        head: ['Element', 'Form it takes', 'Why the workflow needs it'],
        rows: [
          ['Design intent', 'Tech pack, sketch, or reference garment photo', 'Sets the construction shortlist'],
          ['Colour', 'Pantone/reference card, or “match sample”', 'Sets the lab-dip targets'],
          ['Target specification', 'Composition, weight, width, finish', 'Sets the specification tolerances'],
          ['Performance (if any)', 'Property, target, standard where known', 'Sets the test plan'],
          ['Quantity & timing', 'Development quantities and deadline', 'Sets the sample plan dates'],
          ['Approver', 'Name and decision criteria', 'Sets the approval record'],
        ],
      },
      { t: 'h2', title: 'Hand-feel, the honest field' },
      {
        t: 'paras',
        body: [
          'Every development brief eventually contains the sentence “needs to feel softer / heavier / smoother.” Hand-feel is real, and it is the hardest specification to transfer across an ocean — which is why the workflow treats it as a two-step: the reference sample defines it physically, and the strike-off comparison document records the delta the way your team perceives it. When a sample is approved on hand, the approval note says what was approved; when it is revised, the delta document says what changed.',
          'That discipline sounds heavy until the first season where your development team can look back through twelve revision rounds and see exactly why the fabric ended up where it did. That is the product of a documented workflow: a development history that survives the people who wrote it.',
        ],
      },
      { t: 'h2', title: 'Lead time honesty' },
      {
        t: 'paras',
        body: [
          'Sampling lead time depends on construction, colour count and the selected source — the same three variables that drive bulk. The sample plan gives dated milestones against those variables, and the order file tracks them. Where a program’s deadline is tighter than the honest plan, the answer is a scope decision (fewer colours first, a closer source, a simplified construction) stated as a decision — not a slip discovered at the deadline.',
        ],
      },
      { t: 'cta', title: 'Start a development brief', lead: 'Send the intent and the references. The sample plan comes back dated, with the comparison documents named.' },
    ],
    next: [
      ['Request a Sample', 'The sampling request form.', '/request-a-sample/'],
      ['Fabric Sourcing', 'The full sourcing service.', '/services/fabric-sourcing/'],
      ['Sourcing Process', 'Where development sits in the six stages.', '/services/sourcing-process/'],
    ],
  },
  {
    path: '/services/import-distribution/',
    title: 'Import & Local Distribution in Bangladesh | YOU LI',
    meta: 'The buyer side of the corridor: import, customs coordination, local distribution and factory delivery from Uttara, Dhaka — with the responsibility matrix per step.',
    crumbs: [['Services', '/services/fabric-sourcing/'], ['Import & Distribution']],
    hero: {
      eyebrow: 'Services',
      title: 'Import and local distribution, with named responsibilities',
      lead: 'From the export side of the corridor to your cutting table: import and customs coordination, local distribution from Uttara, and delivery scheduling — with the responsibility for each step written into the order file.',
      image: '/assets/img/rolls.jpg',
    },
    sections: [
      { t: 'h2', title: 'The responsibility matrix' },
      {
        t: 'table',
        note: 'Responsibility split per order; the matrix in the order file is the governing document, this table is its shape.',
        head: ['Step', 'Owned by', 'Deliverable', 'Record in order file'],
        rows: [
          ['Export documentation & booking', 'Shanghai office', 'Shipping documents, booking confirmation', 'Document index'],
          ['In-transit follow-through', 'Shanghai office', 'Milestones and exceptions', 'Milestone log'],
          ['Import & customs coordination', 'Uttara office', 'Clearance and documentation follow-through', 'Customs record reference'],
          ['Local distribution', 'Uttara office', 'Delivery scheduling to factory/warehouse', 'Delivery schedule'],
          ['Receiving handoff', 'Factory (buyer side)', 'Receipt confirmation, roll count', 'Handoff record'],
          ['Post-delivery questions', 'Both offices, named contact', 'Answer with order-file reference', 'Correspondence in file'],
        ],
      },
      { t: 'h2', title: 'Terms and handoffs' },
      {
        t: 'paras',
        body: [
          'Commercial terms (FOB, CIF or equivalent) are confirmed per order with the port and the responsibility split stated — the handoff point where one party’s responsibility ends and the other’s begins is written into the order file, not implied by a term’s name. For Bangladesh-bound programs the handoff runs through the Uttara office: the import side receives the shipment, coordinates clearance, and schedules local delivery to the factory or warehouse.',
          'The delivery schedule is a working document: scheduled dates, actual dates, and exceptions with their causes. When a container is late, the exception record says when it was known, what was decided and what the new date is — the same order file your factory is reading.',
        ],
      },
      { t: 'h2', title: 'What local distribution includes' },
      {
        t: 'cards',
        items: [
          { k: 'Delivery scheduling', v: 'Aligned to your production plan, not just the port calendar.' },
          { k: 'Roll-count handoff', v: 'Count verified at the handoff; the pre-shipment count and the receiving count are the same document chain.' },
          { k: 'Exception handling', v: 'Late, short or damaged: a named path from discovery to resolution, recorded in the file.' },
          { k: 'Factory coordination', v: 'The on-the-ground contact for the receiving team — scheduling, queries, the human layer.' },
        ],
      },
      { t: 'h2', title: 'Why the handoff is the product' },
      {
        t: 'paras',
        body: [
          'Sourcing programs do not die in the ocean; they die in the handoffs — between mill and exporter, between exporter and importer, between importer and factory. Every handoff without an owner is a place where information rots. The matrix above exists because the handoffs are the actual service: the fabric is the same fabric whichever mill made it, but the delivery experience is what the factory remembers, and what the buyer reorders against.',
        ],
      },
      { t: 'cta', title: 'Add delivery to your brief', lead: 'State the destination factory and the timeline. The delivery plan is part of the quotation, not an afterthought.' },
    ],
    next: [
      ['Bangladesh Office', 'The office that owns this service.', '/about/offices/bangladesh/'],
      ['Pre-Shipment Verification', 'The gate that closes before this service starts.', '/quality-compliance/pre-shipment-verification/'],
      ['Sourcing Process', 'The full six-stage flow.', '/services/sourcing-process/'],
    ],
  },
  {
    path: '/services/sourcing-process/',
    title: 'Sourcing Process — From Fabric Brief to Delivery | YOU LI',
    meta: 'The six-stage sourcing process with owners, evidence artifacts and quality gates at each step — the operating model in its full form.',
    crumbs: [['Services', '/services/fabric-sourcing/'], ['Sourcing Process']],
    hero: {
      eyebrow: 'Services · The Process',
      title: 'From fabric brief to delivery — six stages, one file',
      lead: 'Every program runs the same six stages with a named owner, a defined artifact and — where quality is involved — a defined gate. This is the operating model, stated in full.',
    },
    sections: [
      { t: 'h2', title: 'The six stages' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Fabric brief', body: 'Owner: you + YOU LI. The brief captures construction, specification, quantity, application, destination, timeline and compliance requirements. Missing fields are marked “need guidance.” Artifact: the order file, opened.' },
          { n: '2', title: 'Mill matching', body: 'Owner: Shanghai office. Mills shortlisted by construction, fibre and finish capability; relationship type disclosed per option. Artifact: the mill-matched shortlist with capability notes.' },
          { n: '3', title: 'Sampling', body: 'Owner: Shanghai office. Lab dips, strike-offs and functional strike-offs against your references. Artifact: samples with written specification comparisons; your recorded approval.' },
          { n: '4', title: 'Order & production (Gate 1)', body: 'Owner: source mill + YOU LI QA. Production with inline inspection against your acceptance criteria. Artifact: the findings log and any escalation records.' },
          { n: '5', title: 'Pre-shipment verification (Gate 2)', body: 'Owner: YOU LI QA. Final verification of the delivered state; sampling per the program’s plan where defined. Artifact: the verification report, delivered to you and your factory.' },
          { n: '6', title: 'Import & delivery', body: 'Owner: Uttara office. Import, customs coordination, local distribution and delivery to your factory. Artifact: the delivery schedule and handoff record.' },
        ],
      },
      { t: 'h2', title: 'Artifacts per stage' },
      {
        t: 'table',
        head: ['Stage', 'Key artifact', 'Who holds it', 'When it is delivered'],
        rows: [
          ['Brief', 'Order file (opened)', 'YOU LI + buyer', 'At intake'],
          ['Mill matching', 'Shortlist with relationship types', 'YOU LI + buyer', 'With the options'],
          ['Sampling', 'Specification comparisons + approvals', 'YOU LI + buyer', 'With each sample round'],
          ['Production', 'Findings log, escalation records', 'YOU LI + buyer + mill', 'Continuous during run'],
          ['Pre-shipment', 'Verification report', 'YOU LI + buyer + factory', 'Before the container seals'],
          ['Delivery', 'Delivery schedule + handoff record', 'YOU LI + buyer + factory', 'At and after delivery'],
        ],
      },
      { t: 'h2', title: 'Where buyers usually add their own gates' },
      {
        t: 'list',
        items: [
          'After stage 2 — a buyer audit of the recommended source, using the relationship-type disclosure as the entry point.',
          'After stage 3 — a lab test of the approved strike-off against the buyer’s own standard, run in parallel with ours or instead of it.',
          'At stage 5 — the buyer’s own third-party inspection alongside pre-shipment verification; the verification report is available to it.',
          'At stage 6 — receiving inspection at the factory, run from the same verification report so the counts match by design.',
        ],
      },
      { t: 'h2', title: 'What the process deliberately does not contain' },
      {
        t: 'paras',
        body: [
          'There is no “guarantee” stage, because a guarantee is not an artifact. There is no “certified” stage, because certification belongs to the register, not the process. And there is no stage where a number is quoted before it is confirmed — MOQ, lead time and terms are stage-specific artifacts, each with its basis stated. The process is designed to be auditable: any stage can be asked for its artifact, and the answer is a document with a date and a name.',
        ],
      },
      { t: 'cta', title: 'Run your program through it', lead: 'Send the brief — stage one starts with the order file opening.' },
    ],
    next: [
      ['Quality Assurance', 'The two gates in detail.', '/quality-compliance/quality-assurance/'],
      ['Import & Distribution', 'Stage six in detail.', '/services/import-distribution/'],
      ['How to Prepare a Fabric RFQ', 'The buyer-side companion to stage one.', '/resources/fabric-guides/prepare-a-fabric-rfq/'],
    ],
  },
  {
    path: '/services/technical-support/',
    title: 'Technical Support — Specs, Tests and Construction Guidance | YOU LI',
    meta: 'Technical support for sourcing and development teams: specification packs, test interpretation, construction guidance and mill matching against a spec.',
    crumbs: [['Services', '/services/fabric-sourcing/'], ['Technical Support']],
    hero: {
      eyebrow: 'Services',
      title: 'Technical support for the team that owns the specification',
      lead: 'Specification packs, test interpretation, construction guidance and mill matching against a spec — the service layer that turns a technical question into a documented answer.',
      image: '/assets/img/functional.jpg',
    },
    sections: [
      { t: 'h2', title: 'What the support covers' },
      {
        t: 'cards',
        items: [
          { k: 'Specification packs', v: 'A construction’s full technical profile — composition options, weight, width, finish, applications and the fields to confirm — as a working document for your development team.' },
          { k: 'Test interpretation', v: 'What a test result means for the garment: method, reference values, and what the number does and does not guarantee in use.' },
          { k: 'Construction guidance', v: 'Construction-to-application matching: which weave or knit carries which garment, at which weight, with which finish.' },
          { k: 'Mill matching against a spec', v: 'The reverse of a normal brief: start from your specification, get the mills that can hold it, with relationship types.' },
          { k: 'Compliance documentation mapping', v: 'For a program’s compliance requirements: which documents exist at which layer (company / mill / material), and which are in progress.' },
        ],
      },
      { t: 'h2', title: 'How a question routes' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Question in', body: 'Technical questions arrive with the program context — the construction, the garment, the stage of development.' },
          { n: '2', title: 'Owned answer', body: 'A named contact owns the answer. Construction and finishing questions route to the technical function; test questions to QA; commercial-technical hybrids (MOQ logic, lead-time tradeoffs) to sourcing.' },
          { n: '3', title: 'Documented out', body: 'The answer goes back as a document attached to the order file — so the next question starts from the recorded answer, not from memory.' },
        ],
      },
      { t: 'h2', title: 'The reference library' },
      {
        t: 'paras',
        body: [
          'The Resources section is the standing part of technical support: the GSM guide, the construction guide, the inspection guide, the RFQ preparation guide and the certification glossary. They are written for the people who answer these questions every week — your technical and development team — and they state their assumptions the way the product pages state their evidence.',
          'The guides are a starting point, not a substitute for the program-specific answer. Where a question is program-specific — your specification, your standard, your garment — the answer comes from the support routing above, with the document attached to your order file.',
        ],
      },
      { t: 'cta', title: 'Ask the technical question', lead: 'Route it through the contact page or attach it to your brief. The answer comes back as a document.' },
    ],
    next: [
      ['Fabric Guides', 'The standing reference library.', '/resources/fabric-guides/'],
      ['Quality & Compliance Guides', 'Process and framework references.', '/resources/quality-compliance-guides/'],
      ['Fabric Library', 'Constructions with their full profiles.', '/products/'],
    ],
  },
];
