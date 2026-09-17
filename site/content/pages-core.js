// Core pages: Home, Request a Quote, Request a Sample, Contact.
module.exports = {
  home: {
    title: 'China-Connected Fabric Sourcing for Bangladesh Apparel — YOU LI',
    meta: 'Woven, knit, denim and performance materials matched to your specification, with buyer-facing quality checks at the source mill and before shipment, and delivery coordination in Bangladesh.',
    hero: {
      eyebrow: 'China-Connected Sourcing · Bangladesh Apparel Support',
      title: 'Fabric sourcing that connects China supply with Bangladesh execution',
      lead: 'Woven, knit, denim and performance materials matched to your specification, with buyer-facing quality checks at the source mill and before shipment — and delivery coordination from our Uttara, Dhaka office.',
      image: '/assets/img/hero.jpg',
    },
    proofStrip: [
      ['Bangladesh office', 'Uttara, Dhaka', 'Company statement'],
      ['China office', 'Shanghai', 'Company statement'],
      ['Woven', '8 constructions', 'Company statement'],
      ['Knit', '7 constructions', 'Company statement'],
      ['Denim', '5 constructions', 'Company statement'],
      ['Performance', 'Fabrics & yarns', 'Company statement'],
    ],
    buyerPaths: [
      {
        title: 'I am a brand or procurement team',
        body: 'Compliant, technically suitable material with documentation your audit can read.',
        href: '/industries/apparel-brands/',
        cta: 'Brand program page',
      },
      {
        title: 'I am a garment exporter or factory',
        body: 'Less sourcing friction, verified fabric and local delivery to your line.',
        href: '/industries/garment-exporters/',
        cta: 'Exporter program page',
      },
      {
        title: 'I am a buying house',
        body: 'Comparison-ready options and documentation for the brands you serve.',
        href: '/industries/buying-houses/',
        cta: 'Buying-house program page',
      },
      {
        title: 'I need a technical material',
        body: 'Functional fabric or yarn specified by test method and acceptance target.',
        href: '/products/functional-technical/',
        cta: 'Functional library',
      },
    ],
    why: [
      {
        n: '01',
        title: 'China-connected mill access',
        body: 'Direct, partner and cooperative mill relationships across China’s weaving, knitting and finishing regions — with the relationship type stated for every option we recommend.',
        status: 'Company statement',
      },
      {
        n: '02',
        title: 'Bangladesh execution',
        body: 'Import, customs coordination, local distribution and factory delivery from Uttara, Dhaka — with the responsibility for each step written into your order file.',
        status: 'Company statement',
      },
      {
        n: '03',
        title: 'Two-stage quality verification',
        body: 'Inline inspection at the source mill and final pre-shipment verification, against acceptance criteria you approve — a process, not a slogan.',
        status: 'Company statement',
      },
      {
        n: '04',
        title: 'Specification-led service',
        body: 'We start from construction, composition, weight, width, finish, application or a reference sample — and we answer with data sheets, samples and evidence, not adjectives.',
        status: 'Company statement',
      },
    ],
    route: [
      { n: '1', title: 'Fabric brief', owner: 'You + YOU LI', body: 'Construction, target spec, quantity, timeline and compliance requirements — or a reference sample.' },
      { n: '2', title: 'Mill matching', owner: 'Shanghai office', body: 'Mills shortlisted by construction, fibre and finish capability. Relationship type stated per option.' },
      { n: '3', title: 'Sampling', owner: 'Shanghai office', body: 'Lab dips, strike-offs and functional strike-offs against your approved references.' },
      { n: '4', title: 'Order & inline inspection', owner: 'Mill + YOU LI QA', body: 'Production with inline inspection at the source mill against your acceptance criteria.' },
      { n: '5', title: 'Pre-shipment verification', owner: 'YOU LI QA', body: 'Final checks — weight, width, colour, count, labels, packaging — with a documented report.' },
      { n: '6', title: 'Import & local delivery', owner: 'Uttara office', body: 'Import, customs coordination and delivery to your factory or warehouse in Bangladesh.' },
    ],
    performanceMatrix: {
      title: 'Performance matrix',
      note: 'Functional claims are testable properties. Methods are agreed per program; results are delivered against your acceptance targets.',
      head: ['Application', 'Property', 'Reference method', 'Evidence status'],
      rows: [
        ['Uniforms & hygiene', 'Antibacterial efficacy', 'ISO 20743 / ISO 22196 family', 'Tested to buyer specification'],
        ['Workwear & outerwear', 'Water resistance', 'AATM 42 / ISO 4920', 'Tested to buyer specification'],
        ['Protective workwear', 'Flame performance', 'NFPA 2112 / 2113, EN-type', 'Tested to buyer specification'],
        ['Tactical & protective', 'Tensile / tear strength', 'ISO 13935 / ISO 13937 family', 'Tested to buyer specification'],
        ['Sustainable programs', 'Recycled content', 'Chain-of-custody documentation', 'Verification in progress'],
        ['Activewear & swim', 'Wicking / UPF', 'AATM 1979 / ASTM D3686', 'Tested to buyer specification'],
      ],
    },
    sustainability: [
      { state: 'Certified', body: 'Materials with current, documented certification. Evidence is published with issuer, scope and validity — no badge without the document.' },
      { state: 'Claim-level', body: 'Materials where the supplier claim exists but documentation is still being assembled. Labeled as such, never published as certified.' },
      { state: 'In verification', body: 'Materials in the evidence process — transaction certificates and chain-of-custody documents requested and tracked. Status shown per record.' },
    ],
    faq: [
      ['What is your MOQ?', 'MOQ varies by construction, colour and source mill. We confirm the exact MOQ with every mill-matched option we return — it is never a website number.'],
      ['How does sampling work?', 'Send a brief or a reference sample. We return lab dips, strike-offs or functional strike-offs with a written specification comparison, ready for your approval.'],
      ['What data do you need from me?', 'Construction, target composition, weight, width, finish, quantity, application, destination and timeline. Anything you do not know, mark “need guidance” — that is what we are for.'],
      ['How is quality checked?', 'Two stages: inline inspection at the source mill and final pre-shipment verification, both against acceptance criteria you approve, both documented.'],
      ['Which origins do you source from?', 'China is our active, documented sourcing region. Asia and Europe coverage is described in company materials and is being verified region by region; planned regions are labeled as planned.'],
      ['What do you need to show me before I commit?', 'Specification comparison, sample, inspection plan and — where the program requires it — certificate metadata (issuer, scope, number, validity).'],
    ],
  },

  rfq: {
    title: 'Request a Fabric Match or Quotation — YOU LI',
    meta: 'Two-step RFQ for fabric, yarn and performance-material sourcing. Minimal contact first, technical brief second, confirmation with inquiry ID.',
    hero: {
      eyebrow: 'Request a Quote',
      title: 'Request a fabric match or quotation',
      lead: 'Two steps. Step one is who you are and what you are after; step two is the technical brief, which you can leave partly blank — “need guidance” is a valid answer. You will receive an inquiry ID and a named contact.',
    },
    intro: [
      'This form is built the way a fabric brief should be: intent first, specification second. If you have a tech pack, a reference sample photo or a specification sheet, attach it in step two — we will work from it and tell you exactly what is missing before we quote.',
      'Qualified inquiries are routed by buyer location and product category to the responsible team in Dhaka or Shanghai. A qualified inquiry typically includes a defined product need, a company or organization, a destination, an approximate quantity or development stage, and a timeline.',
    ],
    howItWorks: [
      { n: '1', title: 'You send the brief', body: 'Intent and contact in step one; technical detail, files and preferences in step two. Nothing personal is collected beyond what the workflow needs.' },
      { n: '2', title: 'We confirm and assign', body: 'You receive an immediate confirmation with an inquiry ID. The brief is routed to the Dhaka or Shanghai team by location and category.' },
      { n: '3', title: 'A named contact responds', body: 'The responsible contact confirms what is known, requests missing specifications, and states the next evidence artifact: sample, specification sheet, quotation or feasibility answer.' },
      { n: '4', title: 'Options arrive with evidence', body: 'Mill-matched options with relationship type, specification comparison, MOQ, lead time and the inspection plan for each.' },
    ],
    faq: [
      ['What is the fastest way to get a response?', 'Attach a tech pack or reference photo and mark the fields you are unsure of as “need guidance.” Complete intent information plus a clear product reference is what we can quote fastest.'],
      ['Do I have to fill every field?', 'No. Name, work email and a message are required at step one. Everything else in step two is optional and can be marked “unknown.”'],
      ['Can I compare several fabrics in one request?', 'Yes — add up to three products from the Fabric Library to this request, or list constructions in the brief.'],
      ['What happens to my files?', 'Files are stored against your inquiry in our order system with the consent you give. They are used for your brief, not for marketing.'],
    ],
  },

  sample: {
    title: 'Request a Sample — YOU LI',
    meta: 'Request lab dips, strike-offs or functional samples against your specification. Sampling workflow, lead-time expectations and what to include.',
    hero: {
      eyebrow: 'Request a Sample',
      title: 'Request samples against your specification',
      lead: 'Lab dips, strike-offs and functional strike-offs against your approved references — the sampling step of the sourcing process, requested through one form.',
    },
    intro: [
      'Sampling is where a specification stops being an idea. We run three sample types: lab dips for colour, strike-offs for fabric construction, and functional strike-offs where a performance property (wicking, water resistance, FR) must be demonstrated before you commit. Each arrives with a written specification comparison so approval is a document, not a memory.',
      'Tell us the construction, the references and the quantity you are developing for. Sampling lead time depends on construction, colour count and the selected source — we give you a dated plan with the options, and track it in your order file.',
    ],
    howItWorks: [
      { n: '1', title: 'Reference check', body: 'We confirm references: colour standard, target spec, performance targets. Gaps are listed, not guessed.' },
      { n: '2', title: 'Sample plan', body: 'You receive the sample plan: types, quantities, dated lead time, and the specification comparison each sample will carry.' },
      { n: '3', title: 'Samples delivered', body: 'Samples arrive with their comparison documents. Approval is recorded; revision rounds follow the same discipline.' },
      { n: '4', title: 'Bulk handoff', body: 'Approved sampling hands into production with the same specification, the same acceptance criteria and the same two quality gates.' },
    ],
    faq: [
      ['How many samples can I request?', 'Sampling scope is per program — a colour run, a construction trial or a functional trial. Describe the program and we plan the set with you.'],
      ['What is the sampling lead time?', 'It depends on construction, colour count and source. We give a dated plan at request stage and track it in your order file.'],
      ['Can you sample from my tech pack?', 'Yes — attach it. We will mark the fields we can sample against and the fields we need clarified.'],
      ['What does a sample cost?', 'Sample handling follows the program; bulk programs typically carry sampling within the development scope. We confirm costs in the sample plan.'],
    ],
  },

  contact: {
    title: 'Contact the Bangladesh–China Sourcing Team — YOU LI',
    meta: 'Reach the YOU LI sourcing team in Dhaka and Shanghai. Offices, routing, working hours and direct contact routes.',
    hero: {
      eyebrow: 'Contact',
      title: 'Talk to the Bangladesh–China sourcing team',
      lead: 'Two offices, one order file. Bangladesh-side questions route to Uttara, Dhaka; China-side sourcing, sampling and inspection questions route to Shanghai.',
    },
    intro: [
      'Inquiries are routed by buyer location and product category: Bangladesh-based buyers typically work with the Uttara office on delivery, local distribution and factory coordination; sourcing, sampling and mill-side questions run through Shanghai. Either office can open your order file — you keep one thread, not two.',
      'For structured fabric needs, the Request a Fabric Match form is the fastest route — it carries the brief, the files and the consent in one place. This page is for everything else: questions, introductions, and first conversations.',
    ],
    faq: [
      ['Which office should I contact?', 'Either. The inquiry is routed by location and category to the responsible team, and you keep one thread.'],
      ['What languages does the team work in?', 'The team works across English, Bangla and Mandarin across the two offices — routing is set up so your conversation runs in the language you choose.'],
      ['Do you answer on weekends?', 'Working hours follow each office’s local week: Sunday–Thursday in Dhaka, Monday–Saturday in Shanghai. Outside hours, messages queue to the next business day.'],
    ],
  },
};
