// Industry / buyer-segment pages.
module.exports = [
  {
    path: '/industries/apparel-brands/',
    title: 'Fabric Sourcing for Apparel Brands | YOU LI',
    meta: 'For brand and procurement teams: compliant, technically suitable material with documentation an audit can read, and China-connected sourcing executed in Bangladesh.',
    crumbs: [['Industries', '/industries/apparel-brands/']],
    hero: {
      eyebrow: 'Industries · Apparel Brands',
      title: 'For the brand team that answers for the material',
      lead: 'Compliant, technically suitable fabric with documentation your audit can read — sourced through China-connected mill relationships, executed and delivered in Bangladesh.',
      image: '/assets/img/hero.jpg',
    },
    sections: [
      { t: 'h2', title: 'The problems a brand team carries' },
      {
        t: 'cards',
        items: [
          { k: 'Compliance exposure', v: 'Every material claim — recycled content, performance, ethical sourcing — is an audit item. The documentation has to exist before the question, not after it.' },
          { k: 'Technical fit at scale', v: 'The approved sample is one roll. The program is ten thousand. The specification tolerances are what keep them the same.' },
          { k: 'Supply continuity', v: 'Multi-season programs need a source that can hold construction, shade and lead time across repeats — and say so with data.' },
          { k: 'Risk of the middle', v: 'Between the mill and your factory there are handoffs. Each unowned handoff is a place where a program quietly breaks.' },
        ],
      },
      { t: 'h2', title: 'What the service looks like for you' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Program brief', body: 'Your season’s material needs: constructions, targets, volumes, compliance requirements, timeline. Sent once, through one form.' },
          { n: '2', title: 'Options with evidence', body: 'Mill-matched options with relationship types, specification comparisons, test plans and — where required — the compliance documentation status at each layer.' },
          { n: '3', title: 'Sampling & approval', body: 'Strike-offs and functional trials against your references, with written comparisons. Your approval is recorded with its basis.' },
          { n: '4', title: 'Bulk under the gates', body: 'Production with inline and pre-shipment verification against your acceptance criteria — the same two gates your audit can inspect.' },
          { n: '5', title: 'Delivery & documentation', body: 'Fabric delivered to your factory in Bangladesh with the verification report; the order file carries the complete document trail.' },
        ],
      },
      { t: 'h2', title: 'Documentation your audit can read' },
      {
        t: 'table',
        head: ['Audit question', 'The answer lives in'],
        rows: [
          ['Who is the source, and what is the relationship?', 'Sourcing register entry with relationship type and review date'],
          ['How was quality verified?', 'Findings log (Gate 1) and verification report (Gate 2), with acceptance criteria'],
          ['What is the material claim, and what supports it?', 'Product record with evidence state and document index'],
          ['What are the test results?', 'Test plan record with method, target and result per property'],
          ['Who is responsible for delivery?', 'Responsibility matrix in the order file, per step'],
        ],
      },
      { t: 'h2', title: 'What you should expect from a sourcing partner' },
      {
        t: 'list',
        items: [
          'A relationship-type disclosure for every recommended source — direct, partner or cooperative, stated, not implied.',
          'Acceptance criteria in writing before production, and a verification report after it.',
          'MOQ and lead time confirmed per option — a number without a basis is not a quote.',
          'A named contact who owns the thread from brief to delivery, across both offices.',
          'Evidence states on every claim: verified, company statement, or in verification. The third state is normal; hiding it is not.',
        ],
      },
      { t: 'cta', title: 'Send a program brief', lead: 'Request a Fabric Match — the first answer you get is the quality of the answer.' },
    ],
    next: [
      ['Buying Houses', 'The parallel service for multi-brand coordination.', '/industries/buying-houses/'],
      ['Quality Assurance', 'The two gates, in full.', '/quality-compliance/quality-assurance/'],
      ['Sustainability', 'Material-level evidence states.', '/quality-compliance/sustainability/'],
    ],
  },
  {
    path: '/industries/garment-exporters/',
    title: 'Fabric Sourcing for Garment Exporters & Factories | YOU LI',
    meta: 'For Bangladesh garment factories and exporters: verified fabric, less sourcing friction, local delivery to the line and a quality report the factory receives with the delivery.',
    crumbs: [['Industries', '/industries/apparel-brands/'], ['Garment Exporters']],
    hero: {
      eyebrow: 'Industries · Garment Exporters & Factories',
      title: 'For the factory that takes the delivery',
      lead: 'Verified fabric, less sourcing friction, and local delivery from Uttara to your line — with the verification report in your hands when the rolls are on the floor.',
      image: '/assets/img/rolls.jpg',
    },
    sections: [
      { t: 'h2', title: 'The problems a factory carries' },
      {
        t: 'cards',
        items: [
          { k: 'Sourcing friction', v: 'The buyer specifies; the factory finds. Every gap between specification and delivered fabric is a conversation the factory should not have to lead.' },
          { k: 'Delivery risk', v: 'A late container, a short count, a mislabeled roll — each one lands on the production calendar, and the production calendar is not flexible.' },
          { k: 'Dispute cost', v: 'When the delivered state is questioned, the factory is between the buyer and the supplier — holding both phones, with no document of its own.' },
          { k: 'Reorder uncertainty', v: 'The repeat order needs the same shade, the same weight, the same behaviour. “Same as last time” is not a specification.' },
        ],
      },
      { t: 'h2', title: 'What the service looks like for you' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'The brief, in your terms', body: 'Send what you have: the buyer’s specification, the tech pack, or a reference roll. The brief intake marks the gaps instead of guessing them.' },
          { n: '2', title: 'Options that arrive verified', body: 'Mill-matched options with the specification comparison — and bulk that runs the two quality gates, so the fabric is checked before it ever reaches your gate.' },
          { n: '3', title: 'The report travels with the rolls', body: 'The pre-shipment verification report is delivered to you as well as the buyer: the same weights, widths, shades and counts, in one document both sides hold.' },
          { n: '4', title: 'Delivery to the line', body: 'Scheduling aligned to your production plan, count verified at handoff, and a named Dhaka contact for the receiving team.' },
        ],
      },
      { t: 'h2', title: 'The shared document' },
      {
        t: 'paras',
        body: [
          'The design point for a factory is the verification report. When the buyer and the factory hold the same document — the measured weights, the shade records, the count, the dispositions — the dispute that would take three weeks of phone calls starts from a one-page fact base. That is not a courtesy; it is the operating model: one version of the facts, held by every party who needs it.',
          'The same design applies to repeats. The order file holds the approved specification, the approval record and the verification history for the original lot — so a repeat is re-run against the recorded specification, and the delta, if any, is documented the moment it happens.',
        ],
      },
      { t: 'h2', title: 'What to ask any fabric supplier — including us' },
      {
        t: 'list',
        items: [
          'Who verifies the fabric before it ships, and what document does that produce?',
          'Do I receive that document, or only the buyer?',
          'What are the tolerances for weight and width, and where are they written down?',
          'Who owns delivery, and what is the record when it is late?',
          'For a repeat, what exactly is re-checked against the approved lot?',
        ],
      },
      { t: 'cta', title: 'Start a factory brief', lead: 'Send the specification or the reference roll. The Dhaka office takes the thread from there.' },
    ],
    next: [
      ['Buying Houses', 'The multi-brand coordination side.', '/industries/buying-houses/'],
      ['Import & Distribution', 'The delivery service in full.', '/services/import-distribution/'],
      ['Pre-Shipment Verification', 'The report your factory receives.', '/quality-compliance/pre-shipment-verification/'],
    ],
  },
  {
    path: '/industries/buying-houses/',
    title: 'Fabric Sourcing for Buying Houses | YOU LI',
    meta: 'For buying houses and sourcing offices: comparison-ready options, brand-safe documentation and a single sourcing thread across the brands you serve.',
    crumbs: [['Industries', '/industries/apparel-brands/'], ['Buying Houses']],
    hero: {
      eyebrow: 'Industries · Buying Houses',
      title: 'For the office that coordinates many brands’ material',
      lead: 'Comparison-ready fabric options, documentation safe to show a brand, and one sourcing thread per brand — coordinated from Dhaka, sourced from China.',
    },
    sections: [
      { t: 'h2', title: 'The problems a buying house carries' },
      {
        t: 'cards',
        items: [
          { k: 'Multi-brand documentation', v: 'Every brand has its own compliance file and its own audit. The sourcing partner’s documentation has to be clean enough to appear in all of them.' },
          { k: 'Comparison speed', v: 'The brand meeting asks for options, not essays. The format has to be comparison-ready: side by side, field by field, with the differences visible at a glance.' },
          { k: 'Confidentiality boundaries', v: 'Brand A must not see Brand B’s program. The sourcing relationship has to hold per-brand boundaries without slowing the work.' },
          { k: 'Reputation transfer', v: 'The buying house’s name is on the recommendation. A supplier failure is a buying-house failure — the diligence standard reflects that.' },
        ],
      },
      { t: 'h2', title: 'What the service looks like for you' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Per-brand program files', body: 'Each brand’s programs run in their own order file: specification, options, approvals, documents. Boundaries are structural, not a promise.' },
          { n: '2', title: 'Comparison-ready options', body: 'Mill-matched options formatted for the meeting: specification comparison, relationship type, MOQ, lead time, documentation status — side by side, field by field.' },
          { n: '3', title: 'Brand-safe documentation', body: 'Documents produced for your file to forward: specification comparisons, test plans, verification reports. Clean formatting, no third-party data beyond what is disclosed.' },
          { n: '4', title: 'One thread, your name', body: 'A named contact per brand program, with the Dhaka office handling local coordination across your factory base.' },
        ],
      },
      { t: 'h2', title: 'The comparison format' },
      {
        t: 'table',
        head: ['Field', 'Why the meeting needs it'],
        rows: [
          ['Construction & composition', 'The primary match decision'],
          ['GSM / width / finish', 'The specification the garment lives on'],
          ['Relationship type', 'Direct / partner / cooperative — the diligence signal'],
          ['MOQ & lead time', 'The commercial reality, per option'],
          ['Performance / test status', 'Method, target, result or test plan'],
          ['Documentation status', 'Verified / company statement / in verification — per claim'],
        ],
      },
      { t: 'h2', title: 'Confidentiality, stated plainly' },
      {
        t: 'paras',
        body: [
          'Buyer identities and program details are confidential by default. This website does not display client names, and the service does not cross-reference brands without instruction — the per-brand order file is the boundary. Where a brand’s own documentation requirement is stricter than the default, it is applied to that brand’s file and stated in the file’s terms.',
          'For your diligence of us: the same standard we ask of brands is askable of the service. Ask which brands we serve and we will tell you the answer is not public, and why. Ask how the boundary is enforced structurally and we will show you the file design. The two answers together are the real answer.',
        ],
      },
      { t: 'cta', title: 'Open a program file', lead: 'Send the brand’s brief — or the season’s briefs. Each runs in its own thread.' },
    ],
    next: [
      ['Apparel Brands', 'The single-brand view of the same service.', '/industries/apparel-brands/'],
      ['Product Development Teams', 'The development-side view.', '/industries/product-development-teams/'],
      ['Sourcing Process', 'The six stages every program runs.', '/services/sourcing-process/'],
    ],
  },
  {
    path: '/industries/product-development-teams/',
    title: 'Fabric Sourcing for Product Development Teams | YOU LI',
    meta: 'For development teams: converting design intent into an approvable material — sampling workflow, hand-feel discipline, test plans and revision history.',
    crumbs: [['Industries', '/industries/apparel-brands/'], ['Product Development Teams']],
    hero: {
      eyebrow: 'Industries · Product Development Teams',
      title: 'For the team that turns design intent into material',
      lead: 'From sketch or sample to an approvable fabric: a sampling workflow with written comparisons, a hand-feel discipline, and a revision history that survives the season.',
      image: '/assets/img/knit.jpg',
    },
    sections: [
      { t: 'h2', title: 'The problems a development team carries' },
      {
        t: 'cards',
        items: [
          { k: 'Intent-to-material gap', v: 'The design says “softer, heavier, with more recovery.” The fabric has to say the same thing in GSM, fibre and construction — and prove it.' },
          { k: 'Hand-feel transfer', v: 'The hardest specification to ship across an ocean is the one that lives in the hand. It needs a reference, a delta record and an approval note.' },
          { k: 'Revision chaos', v: 'Twelve rounds of “one more tweak” without a record means the team cannot say why the fabric ended up where it did.' },
          { k: 'Performance late in the loop', v: 'A wicking or stretch requirement discovered in round eight re-prices the program. Performance belongs in the brief, not the revision.' },
        ],
      },
      { t: 'h2', title: 'What the service looks like for you' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Intent in, gaps named', body: 'The tech pack, sketch or reference sample goes in. The sample plan comes back with the reference gaps listed — what we can sample against, what we need from you.' },
          { n: '2', title: 'Samples with comparisons', body: 'Lab dips, strike-offs and functional trials arrive with written specification comparisons. The approval runs from the document, not the memory.' },
          { n: '3', title: 'Hand-feel as a record', body: 'Where hand is the criterion, the reference defines it and the delta note records how the sample reads against it — approved, or revised with the reason.' },
          { n: '4', title: 'Revision history', body: 'Every round adds to the record: what changed, against which reference, with which approval. The development history is part of the order file.' },
          { n: '5', title: 'Bulk handoff without re-baselining', body: 'The approved sample hands into production on the same specification and acceptance criteria. No re-baselining, no drift at the handoff.' },
        ],
      },
      { t: 'h2', title: 'A development brief that works' },
      {
        t: 'table',
        head: ['Element', 'What to send', 'What we do with it'],
        rows: [
          ['Design intent', 'Tech pack, sketch, reference garment', 'Sets the construction shortlist'],
          ['Hand-feel reference', 'Physical sample, or the closest available', 'Defines the hand criterion and the delta record'],
          ['Target spec', 'Composition, weight, width — as known', 'Sets the specification; gaps marked “need guidance”'],
          ['Performance needs', 'Property, target, standard where known', 'Sets the test plan before sampling, not after'],
          ['Approver & criteria', 'Who decides, and on what basis', 'Sets the approval record format'],
          ['Timeline', 'The decision date, not just the delivery date', 'Sets the sample plan against it'],
        ],
      },
      { t: 'h2', title: 'Why the record matters at the season review' },
      {
        t: 'paras',
        body: [
          'At the season review, the question is rarely “what did we make” — it is “why does it feel like this, cost like this, and behave like this?” A development team with the documented history answers in minutes: the reference, the deltas, the approvals, the test results, all in the order file. A team without it answers in a week of reconstruction, and usually wrong. The sampling workflow’s quiet product is that answer — the reason, recorded when it was known, instead of guessed when it is needed.',
        ],
      },
      { t: 'cta', title: 'Send the design intent', lead: 'Sketch, tech pack or reference sample — the sample plan comes back dated, with the gaps named.' },
    ],
    next: [
      ['Product Development Service', 'The workflow in service form.', '/services/product-development/'],
      ['Fabric Library', 'Constructions with full technical profiles.', '/products/'],
      ['Fabric Construction Guide', 'The standing reference for the team.', '/resources/fabric-guides/fabric-construction-guide/'],
    ],
  },
];
