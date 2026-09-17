// Quality & Compliance pages.
const Q = '/quality-compliance/quality-assurance/';
module.exports = [
  {
    path: Q,
    title: 'Quality Assurance — Two-Stage Fabric Verification | YOU LI',
    meta: 'The two-stage quality model: inline inspection at the source mill and final pre-shipment verification, with acceptance criteria, escalation and documentation.',
    crumbs: [['Quality & Compliance', Q]],
    hero: {
      eyebrow: 'Quality & Compliance',
      title: 'Two-stage fabric quality verification',
      lead: 'Quality is not a promise; it is a process with two checkpoints, acceptance criteria and documents. Inline at the source mill. Final before shipment. Both in your order file.',
      image: '/assets/img/inspection.jpg',
    },
    sections: [
      { t: 'h2', title: 'The model' },
      {
        t: 'paras',
        body: [
          'Fabric quality is decided in two moments: during production at the source mill, where drifts in weight, colour and construction are caught while correction is cheap; and before shipment, where the delivered state is verified against the approved specification. YOU LI runs both moments as named gates with defined checkpoints, defined records and a defined escalation path. (Process as supplied in company materials; the SOP and inspection forms are documented in the QA evidence pack and are available on request.)',
          'The model is deliberately unglamorous. There is no “zero defect” claim — nobody in textiles can honestly make one. There is instead a process that makes quality an inspectable fact: what was checked, against what criteria, by whom, with what result, and what happens when the result is not acceptable. That is the whole product of a quality section on a sourcing website.',
        ],
      },
      { t: 'h2', title: 'Gate 1 — Inline inspection at the source mill' },
      {
        t: 'paras',
        body: [
          'During production, the first gate checks the fabric as it is made: appearance against the approved strike-off, weight and width against specification, colour against the light-source reference, construction and finish against the order file. Findings are recorded with photographs where applicable, and a finding that breaches acceptance criteria triggers the escalation path before the run continues.',
          'The inline gate is where a sourcing partner’s mill relationships actually matter — inspection access is a relationship benefit, and the relationship type is disclosed for every source. Full checkpoint detail is on the Inline Inspection page.',
        ],
      },
      { t: 'h2', title: 'Gate 2 — Pre-shipment verification' },
      {
        t: 'paras',
        body: [
          'Before the fabric moves, the second gate verifies the delivered state: roll weights and widths against specification, colour against the approved master, count and labels, packaging condition and documentation completeness. The verification report is the last document in the chain before the container seals — and it is the document your factory receives with the delivery.',
          'For programs that require sampling-based acceptance (AQL-type schemes), the sampling plan is part of the order specification and the report records the sampling method, the acceptance target and the result. Full detail is on the Pre-Shipment Verification page.',
        ],
      },
      { t: 'h2', title: 'Checkpoints at a glance' },
      {
        t: 'table',
        head: ['Checkpoint', 'Gate', 'What is checked', 'Record'],
        rows: [
          ['Appearance vs strike-off', 'Inline', 'Surface, defects, construction character', 'Finding log with photographs'],
          ['Weight vs specification', 'Inline + Pre-shipment', 'GSM/oz against tolerance', 'Measurement record per roll'],
          ['Width vs specification', 'Inline + Pre-shipment', 'Width against tolerance', 'Measurement record per roll'],
          ['Colour vs master', 'Inline + Pre-shipment', 'Shade against light-source reference (D65 reference)', 'Shade record, ΔE where specified'],
          ['Finish & performance', 'Inline', 'Finish character; functional properties per test plan', 'Test plan record'],
          ['Count, labels, packaging', 'Pre-shipment', 'Roll count, labeling, packing condition', 'Verification report'],
          ['Documentation', 'Pre-shipment', 'Order-file completeness', 'Report + document index'],
        ],
      },
      { t: 'h2', title: 'Acceptance criteria and escalation' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Criteria are yours', body: 'Tolerances for weight, width, colour and construction are agreed in the order specification before production. “Industry standard” is not an acceptance criterion; a number with a source is.' },
          { n: '2', title: 'Findings are logged', body: 'Every inline finding is recorded with its location, description and photograph where applicable. The log is part of the order file, not an internal memo.' },
          { n: '3', title: 'Breaches escalate', body: 'A finding outside tolerance triggers a defined escalation: stop-the-run decision, correction plan, re-verification. The path and its outcomes are documented.' },
          { n: '4', title: 'Reports close the loop', body: 'The pre-shipment verification report is delivered with the fabric. Your factory receives the same document the buyer receives — one version of the facts.' },
        ],
      },
      { t: 'h2', title: 'Evidence status' },
      {
        t: 'evidence',
        items: [
          { label: 'Two-stage process (inline + pre-shipment)', status: 'Company statement', note: 'As supplied in company materials; SOP and inspection forms documented in the QA evidence pack.' },
          { label: 'Inspection forms & acceptance checklists', status: 'Verification in progress', note: 'Redacted sample forms are being prepared for publication; available on request for diligence.' },
          { label: '“Zero defect” claim', status: 'Not made', note: 'Deliberately not published. The process is the claim; a defect-free promise is not an inspectable fact.' },
        ],
      },
      { t: 'cta', title: 'Put your acceptance criteria in the brief', lead: 'Send the tolerances you want. They become the specification both gates run against.' },
    ],
    next: [
      ['Inline Inspection', 'Gate 1 in full — checkpoints, tools, escalation.', '/quality-compliance/inline-inspection/'],
      ['Pre-Shipment Verification', 'Gate 2 in full — the report your factory receives.', '/quality-compliance/pre-shipment-verification/'],
      ['Sourcing Process', 'Where the quality gates sit in the six stages.', '/services/sourcing-process/'],
    ],
  },
  {
    path: '/quality-compliance/inline-inspection/',
    title: 'Inline Inspection at Source Mills | YOU LI',
    meta: 'The first quality gate: inline inspection during production at the source mill — checkpoints, measurement discipline, finding logs and escalation.',
    crumbs: [['Quality & Compliance', Q], ['Inline Inspection']],
    hero: {
      eyebrow: 'Quality & Compliance · Gate 1',
      title: 'Inline inspection at the source mill',
      lead: 'The first gate runs while the fabric is being made: appearance, weight, width, colour and construction checked against the approved specification — with findings logged before the run continues.',
      image: '/assets/img/inspection.jpg',
    },
    sections: [
      { t: 'h2', title: 'Why inline, not just at the end' },
      {
        t: 'paras',
        body: [
          'A defect found after shipment is a claim; a defect found mid-run is a correction. The economics of fabric inspection are unforgiving: the cost of catching a weight drift, a shade shift or a construction fault during production is measured in hours; the cost of catching it at the cutting table is measured in the program. Inline inspection exists to buy that difference.',
          'It also disciplines the mill: a run that is inspected while it happens is a run that is made to the specification. The checkpoint set below is the minimum discipline — programs with tighter requirements (high-visibility apparel, compliance programs, performance fabrics) run an extended plan agreed in the order specification.',
        ],
      },
      { t: 'h2', title: 'The checkpoint set' },
      {
        t: 'table',
        head: ['Checkpoint', 'How it is checked', 'Acceptance basis', 'Finding record'],
        rows: [
          ['Appearance vs approved strike-off', 'Visual comparison under standard lighting', 'Approved strike-off in the order file', 'Finding log + photograph'],
          ['Weight (GSM/oz)', 'Measured against specification tolerance', 'Order specification value', 'Measurement per sampled roll'],
          ['Width', 'Measured against specification tolerance', 'Order specification value', 'Measurement per sampled roll'],
          ['Colour vs master', 'Shade comparison at D65 reference light', 'Approved master + ΔE target where specified', 'Shade record'],
          ['Construction & finish', 'Structure and finish character vs specification', 'Order specification', 'Finding log'],
          ['Functional property (where specified)', 'Per the agreed test plan', 'Program targets', 'Test plan record'],
        ],
      },
      { t: 'h2', title: 'The finding and escalation path' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Find', body: 'A checkpoint result outside tolerance is recorded immediately: location, description, measurement, photograph where applicable.' },
          { n: '2', title: 'Log', body: 'The finding enters the run’s finding log — the same log that appears in the order file. No internal-only findings.' },
          { n: '3', title: 'Decide', body: 'A breach of an acceptance criterion triggers the stop-the-run decision with the mill: continue, correct-and-continue, or stop. The decision and its basis are documented.' },
          { n: '4', title: 'Re-verify', body: 'Corrected runs are re-verified against the same criteria before continuing. The re-verification record closes the finding.' },
        ],
      },
      { t: 'h2', title: 'Access and relationship type' },
      {
        t: 'paras',
        body: [
          'Inline inspection requires mill access — and access is a relationship benefit. That is why the relationship type (direct, partner, cooperative) is disclosed for every recommended source: it tells you what kind of inspection access the arrangement supports, and it is part of the diligence a buyer is entitled to. For sources where access is arranged per program, the arrangement is stated in the order file.',
          'The inspection team works across both offices: mill-side checks run through the Shanghai office, with findings flowing into the order file that the Dhaka office and the buyer share. One file, two offices, one version of the facts.',
        ],
      },
      { t: 'cta', title: 'See the process in the sourcing flow', lead: 'The sourcing process page shows where Gate 1 sits between sampling and shipment.' },
    ],
    next: [
      ['Quality Assurance', 'The full two-stage model.', Q],
      ['Pre-Shipment Verification', 'Gate 2 — the delivered-state check.', '/quality-compliance/pre-shipment-verification/'],
      ['Certifications & Compliance', 'How credential claims are documented.', '/quality-compliance/certifications-compliance/'],
    ],
  },
  {
    path: '/quality-compliance/pre-shipment-verification/',
    title: 'Pre-Shipment Verification | YOU LI',
    meta: 'The second quality gate: final verification before shipment — weight, width, colour, count, labels, packaging and documentation, reported in one document.',
    crumbs: [['Quality & Compliance', Q], ['Pre-Shipment Verification']],
    hero: {
      eyebrow: 'Quality & Compliance · Gate 2',
      title: 'Pre-shipment verification',
      lead: 'The last document in the chain before the container seals: the delivered state of the fabric verified against the approved specification — and the report your factory receives with the delivery.',
    },
    sections: [
      { t: 'h2', title: 'What the gate verifies' },
      {
        t: 'table',
        head: ['Item', 'Verification', 'Basis'],
        rows: [
          ['Roll weights', 'Measured per roll against specification tolerance', 'Order specification'],
          ['Widths', 'Measured per roll against specification tolerance', 'Order specification'],
          ['Colour', 'Sampled rolls compared against the approved master', 'Approved master + ΔE target where specified'],
          ['Construction & finish', 'Sampled rolls checked against specification character', 'Order specification'],
          ['Count', 'Roll count against the order quantity', 'Order file'],
          ['Labels & documentation', 'Label content and order-file completeness', 'Order file standard'],
          ['Packaging condition', 'Packing integrity for transit', 'Packaging standard'],
        ],
      },
      { t: 'h2', title: 'Sampling, where the program requires it' },
      {
        t: 'paras',
        body: [
          'Many programs define acceptance by sampling — an AQL-type scheme where a defined sample of rolls is inspected against defined defect classes and acceptance limits. Where your program uses one, the sampling plan (level, defect classes, acceptance limits) is part of the order specification, and the verification report records the method, the sample, the findings and the disposition.',
          'Where a program does not define a sampling scheme, verification runs the checkpoint set above at a program-agreed density. Either way, the report says which method was used — so “we inspected it” never has to stand in for the facts of how.',
        ],
      },
      { t: 'h2', title: 'The report' },
      {
        t: 'list',
        items: [
          'Identification: order, construction, mill reference (per disclosure), date, verifier.',
          'Specification summary: the approved values both gates ran against.',
          'Findings: per checkpoint, with measurements and photographs where applicable.',
          'Dispositions: any non-conformities, their decisions and re-verification records.',
          'Documentation index: the order-file documents the report closes.',
        ],
      },
      { t: 'h2', title: 'Why the same report goes to your factory' },
      {
        t: 'paras',
        body: [
          'A verification report that only the buyer sees is a compliance document; one that the receiving factory also holds is a working document. The factory’s receiving check, the cutting-table allocation and any dispute about the delivered state all run from the same facts. That is the design intent: one version of the facts, shared by every party who needs it.',
          'The report is delivered with the pre-shipment gate complete and the order file closed for that shipment. Post-delivery questions run through the order file with a named contact — the same routing as every other part of the program.',
        ],
      },
      { t: 'cta', title: 'Define your sampling plan in the brief', lead: 'If your program uses AQL or another scheme, send it. It becomes part of the specification both gates run against.' },
    ],
    next: [
      ['Quality Assurance', 'The full two-stage model.', Q],
      ['Inline Inspection', 'Gate 1 — the mid-run checks.', '/quality-compliance/inline-inspection/'],
      ['Import & Distribution', 'What happens after the container seals.', '/services/import-distribution/'],
    ],
  },
  {
    path: '/quality-compliance/certifications-compliance/',
    title: 'Certifications & Compliance — The Evidence Register | YOU LI',
    meta: 'How YOU LI handles certification and compliance claims: the three-layer distinction (company, mill, material/product), the verification register, and the status of named references.',
    crumbs: [['Quality & Compliance', Q], ['Certifications & Compliance']],
    hero: {
      eyebrow: 'Quality & Compliance',
      title: 'Certifications and compliance, handled as evidence',
      lead: 'A certification badge without a document is a claim. This page explains the three-layer distinction, shows how the verification register works, and states the status of every named reference — including the ones that are not yet verified.',
    },
    sections: [
      { t: 'h2', title: 'The three-layer distinction' },
      {
        t: 'paras',
        body: [
          'Most certification confusion in textile sourcing comes from collapsing three different things into one: (1) the sourcing company’s own credentials and audits, (2) the source mills’ certifications, and (3) material- or product-level certifications (a fabric’s recycled content, a fibre’s compliance). Each layer has its own issuer, its own scope and its own validity — and each is verifiable separately. This site keeps the three layers distinct on every page, and the order file carries the documents for whatever a program actually requires.',
        ],
      },
      {
        t: 'table',
        head: ['Layer', 'What it covers', 'How it is documented here'],
        rows: [
          ['YOU LI (company)', 'Company-level credentials and audit participation', 'Issuer, scope, number, validity in the register — or its absence, stated'],
          ['Source mills', 'Mill-level certifications and audit status', 'Recorded per mill with scope; disclosed with the mill’s consent'],
          ['Material / product', 'Fibre or fabric claims (recycled content, performance compliance)', 'Transaction certificates / test reports per order, attached to the product record'],
        ],
      },
      { t: 'h2', title: 'The verification register' },
      {
        t: 'paras',
        body: [
          'Every credential that appears in company materials is an entry in the verification register. An entry carries: the reference, the claimed layer (company / mill / material), the issuer, the scope, the certificate number, the validity period, and the verification status. Nothing is published as a badge, logo or endorsement until the entry is verified and the holder has consented to publication.',
          'This is the page where the unverified references are named, because the alternative — quietly listing them — is exactly the trust failure this website exists to avoid.',
        ],
      },
      {
        t: 'evidence',
        items: [
          { label: 'Sedex (reference in company materials)', status: 'Not publicly verified', note: 'Sedex is a supply-chain ethics audit ecosystem. The reference describes a company-materials mention; scope, site and status are being verified. Not presented as an endorsement.' },
          { label: 'Higg (reference in company materials)', status: 'Not publicly verified', note: 'Higg indices are self-assessment frameworks (FEM/SQ), not certifications. The reference is tracked in the register; no index scores are published until verified.' },
          { label: 'Inditex (reference in company materials)', status: 'Not publicly verified', note: 'Particular sensitivity: this may describe a buyer requirement, an audit ecosystem or a relationship — not a certification. It is never presented as an endorsement or credential until verified with the holder.' },
        ],
      },
      {
        t: 'note',
        text: 'Until verification completes, no Sedex, Higg or Inditex badge, logo or endorsement language appears anywhere on this site. When an entry verifies, the register entry publishes with issuer, scope, number and validity — or, if the holder does not consent to publication, with the consent status stated.',
      },
      { t: 'h2', title: 'What a buyer should verify — and how' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Ask which layer', body: 'For any credential a supplier names, ask which layer it belongs to: company, mill, or material/product. A serious answer is instant; a vague one is the finding.' },
          { n: '2', title: 'Ask for the metadata', body: 'Issuer, scope, certificate number, site and validity. A real credential answers all five; a badge answers none.' },
          { n: '3', title: 'Ask for the document', body: 'The certificate or report itself, with the sensitive fields intact enough to be checked. “Available on request” that produces a PDF in a diligence meeting is the standard.' },
          { n: '4', title: 'Check the scope fits the program', body: 'A mill certification for one product line does not certify another. The scope must cover the construction and material in the order.' },
        ],
      },
      { t: 'cta', title: 'Run the register through diligence', lead: 'Ask for the register entry for any reference that matters to your program. The answer format is the point.' },
    ],
    next: [
      ['Quality Assurance', 'The process that produces the documents.', Q],
      ['Sustainability', 'Material-level evidence states.', '/quality-compliance/sustainability/'],
      ['Certification Glossary', 'What the named frameworks actually are.', '/resources/quality-compliance-guides/certification-glossary/'],
    ],
  },
  {
    path: '/quality-compliance/sustainability/',
    title: 'Sustainable & Recycled Fabric Sourcing | YOU LI',
    meta: 'Sustainability evidence states: certified, claim-level and in-verification — recycled content, responsible sourcing and the documentation process behind each.',
    crumbs: [['Quality & Compliance', Q], ['Sustainability']],
    hero: {
      eyebrow: 'Quality & Compliance · Sustainability',
      title: 'Sustainable and recycled fabric sourcing, evidence-coded',
      lead: 'Three states, one register. “Sustainable” is not a state; certified, claim-level and in-verification are. Every material in the library carries one of the three, and the documents that justify it are requestable.',
      image: '/assets/img/functional.jpg',
    },
    sections: [
      { t: 'h2', title: 'The three states' },
      {
        t: 'cards',
        items: [
          { k: 'Certified', v: 'Material with current, documented certification: issuer, scope, certificate number, validity — published with the product record. The badge earns its place with the document behind it.' },
          { k: 'Claim-level', v: 'Supplier claim exists (recycled content, responsible fibre) but the documentation is still being assembled. Labeled as claim-level on the record — never published as certified, never described as verified.' },
          { k: 'In verification', v: 'The evidence process is running: transaction certificates requested, chain-of-custody documentation tracked, status updated in the register. The record shows the state and the expected next step.' },
        ],
      },
      { t: 'h2', title: 'Recycled content: the process' },
      {
        t: 'paras',
        body: [
          'Recycled content is the sustainability claim brands audit hardest — and the one that is won or lost on chain-of-custody documentation. The process here is four documents: the supplier’s recycled-content specification; the transaction certificate for the material lot; the mill’s processing record showing content through conversion; and the program-level verification where the buyer’s standard requires it (GRS-type audit references where the program uses them).',
          'Where all four are in place, the product record publishes with the state “certified” and the document index. Where the process is mid-way, the record says “in verification” with the missing document named. There is no state in between, because the in-between is where buyers get burned.',
        ],
      },
      { t: 'h2', title: 'Responsible sourcing, stated plainly' },
      {
        t: 'paras',
        body: [
          'Beyond material-level claims, responsible sourcing is a mill-side question: audit participation, social compliance, and the governance of the working relationship. The company’s stated scope includes Sedex and Higg references — both are tracked in the verification register with their exact status as named on the Certifications & Compliance page, and neither is presented as an endorsement or credential while verification runs.',
          'What the operating model does, independently of any framework, is disclose relationship type per source, keep inspection access documented, and carry the evidence in the order file. Those are the parts of responsible sourcing that a buyer can verify by asking — and they are the parts this site makes askable.',
        ],
      },
      { t: 'h2', title: 'What we will not do' },
      {
        t: 'list',
        items: [
          'Publish a recycled or “eco” claim without its chain-of-custody documents.',
          'Use “sustainable” as an unqualified adjective on a category page.',
          'Present a framework name (Sedex, Higg) as a certification, score or endorsement before verification.',
          'Imply that a mill’s certification covers a product it does not cover — scope is stated with every credential.',
          'Substitute imagery or language for evidence: no leaf graphics doing the work of a transaction certificate.',
        ],
      },
      { t: 'cta', title: 'Build a sustainable program on documents', lead: 'Tell us the content percentage and the audit standard. We will tell you the state of every option, and the document trail behind it.' },
    ],
    next: [
      ['Certifications & Compliance', 'The register and the three-layer distinction.', '/quality-compliance/certifications-compliance/'],
      ['Recycled Fabrics', 'The product family with its evidence states.', '/products/functional-technical/recycled/'],
      ['Certification Glossary', 'Framework definitions for diligence conversations.', '/resources/quality-compliance-guides/certification-glossary/'],
    ],
  },
];
