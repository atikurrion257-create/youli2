// Resources: indexes, guides, insights, FAQ, case studies, success stories.
const FG = '/resources/fabric-guides/';
const TI = '/resources/textile-insights/';
const QG = '/resources/quality-compliance-guides/';
module.exports = [
  {
    path: FG,
    title: 'Fabric Guides — Buyer Reference Library | YOU LI',
    meta: 'Practical fabric guides for sourcing and development teams: preparing an RFQ, understanding GSM, reading constructions and running fabric inspections.',
    crumbs: [['Resources', FG]],
    hero: {
      eyebrow: 'Resources · Fabric Guides',
      title: 'Fabric guides for the people who answer these questions weekly',
      lead: 'Written for procurement, technical and development teams — practical, assumption-stated, and linked to the product records and RFQ they feed.',
    },
    sections: [
      { t: 'h2', title: 'The guide set' },
      {
        t: 'cards',
        items: [
          { k: 'How to prepare a fabric RFQ', v: 'The fields that matter, the sample checklist, and what a good RFQ returns. The buyer-side companion to our Request a Fabric Match.' },
          { k: 'Understanding GSM', v: 'What grams per square meter actually measures, the ranges by application, the ounce conversion, and the tolerances that keep it honest.' },
          { k: 'Fabric construction guide', v: 'Woven versus knit versus denim; plain, twill, sateen and the loop structures — what each construction does and when to choose it.' },
          { k: 'How fabric inspection works', v: 'The inspection types, the AQL basics, the checkpoint set and the documents a program should hold.' },
        ],
      },
      { t: 'h2', title: 'How the guides are written' },
      {
        t: 'paras',
        body: [
          'Each guide states its assumptions the way the product pages state their evidence: ranges are reference ranges, methods are reference methods, and program-specific values are the ones you agree in the order file. A guide that pretends to be a program specification is a brochure; a guide that tells you where the program-specific values live is a working document. These are built to be the second kind — including the links to the product records, the quality pages and the RFQ that carry them into the workflow.',
        ],
      },
      { t: 'cta', title: 'From guide to brief', lead: 'When a guide points at a decision, the Request a Fabric Match form carries it into the sourcing process.' },
    ],
    next: [
      ['Textile Insights', 'Process and market reference.', TI],
      ['Quality & Compliance Guides', 'The compliance-side references.', QG],
      ['Fabric Library', 'The product records the guides reference.', '/products/'],
    ],
  },
  {
    path: '/resources/fabric-guides/prepare-a-fabric-rfq/',
    title: 'How to Prepare a Fabric RFQ | YOU LI',
    meta: 'A practical guide to writing a fabric RFQ that returns useful options: the fields, the sample checklist, and what a qualified response looks like.',
    crumbs: [['Resources', FG], ['Fabric Guides', FG], ['Prepare a Fabric RFQ']],
    hero: {
      eyebrow: 'Fabric Guide',
      title: 'How to prepare a fabric RFQ that returns options, not essays',
      lead: 'The difference between a fast, useful quotation and a week of clarification emails is usually the brief. This guide is the field list, the sample checklist and the standard for what a good response looks like.',
    },
    sections: [
      { t: 'h2', title: 'The fields that matter — and why' },
      {
        t: 'table',
        head: ['Field', 'Why it matters', 'Acceptable when unknown'],
        rows: [
          ['Construction / category', 'Sets the mill shortlist — a twill brief and a jersey brief go to different mills', 'Describe the garment; ask for constructions'],
          ['Composition', 'Cost, hand, care and shrinkage behaviour all follow the fibre', '“Need guidance” — get a recommendation with tradeoffs'],
          ['GSM / oz', 'The weight tolerance is the specification; “about 200” is not a value', 'Ask for a range by application'],
          ['Width', 'Pattern consumption and machine fit depend on it', 'Ask for the mill’s standard widths'],
          ['Finish / performance', 'Sets the test plan; a finish is a specification, not an adjective', 'State the function (“water-resistant”) and let the method be proposed'],
          ['Quantity', 'MOQ and commercial structure follow the number', 'State the development stage — development quantities are quoted as programs'],
          ['Destination', 'Sets the delivery route and the terms', '“TBD” with the intended factory region'],
          ['Timeline', 'The decision date, not just the delivery date', 'State the constraint (season, buyer review date)'],
          ['Compliance requirements', 'Sets the documentation plan per layer', 'List the program type — the typical set can be proposed'],
        ],
      },
      { t: 'h2', title: 'The sample checklist' },
      {
        t: 'list',
        items: [
          'A physical reference where the hand-feel or the colour is the criterion — photos cannot carry hand-feel.',
          'The colour reference: a Pantone card, a lab-dipped standard, or “match the attached.”',
          'The specification sheet or tech pack, even a draft — the gaps in it are the first thing a good response will name.',
          'The application context: the garment, the wash regime, the expected life. A fabric for a 50-wash uniform is specified differently from a fashion piece.',
          'The approver: who decides the sample is right, and on what basis. Approvals without a named basis drift.',
        ],
      },
      { t: 'h2', title: 'What a qualified response looks like' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'It names the gaps', body: 'A good response starts with the brief’s gaps — the fields it needs from you, listed, not implied. If the response assumes your unknowns, it will quote against the assumptions.' },
          { n: '2', title: 'It returns options with a basis', body: 'Two to five options, each with the specification comparison against your target — field by field — and the relationship type of the source. One option with no comparison is a catalogue entry, not a quotation.' },
          { n: '3', title: 'It confirms the numbers', body: 'MOQ, lead time and terms per option, each with its basis (construction, colour, source). Generic numbers (“5,000 m minimum”) are the signature of a template answer.' },
          { n: '4', title: 'It states the next artifact', body: 'The response ends with the next evidence artifact — the sample, the specification sheet, the quotation or the feasibility answer — with a date. A response without a next step is a conversation, not a workflow.' },
        ],
      },
      { t: 'h2', title: 'The anti-patterns' },
      {
        t: 'paras',
        body: [
          'Three brief habits produce three failure modes. A brief that says “best price for this fabric” (attach a photo) produces a quotation with no basis and a sample that is not the fabric. A brief that buries the compliance requirements in paragraph four produces a program that discovers the documentation problem in week eight. A brief that gives a delivery date but no decision date produces a lead-time plan that is optimised for the wrong date — the container arrives on time for a review that happened two weeks earlier.',
          'The fix for all three is the same discipline: the fields, the references, and the dates — explicit, in the brief, from the start. Our Request a Fabric Match form is built on exactly that structure; the guide is the reasoning behind it.',
        ],
      },
      { t: 'cta', title: 'Send the brief through the form', lead: 'Request a Fabric Match carries the fields, the files and the consent in one place — the guide’s structure, implemented.' },
    ],
    next: [
      ['Understanding GSM', 'The weight field, explained.', '/resources/fabric-guides/understanding-gsm/'],
      ['Fabric Construction Guide', 'The construction field, explained.', '/resources/fabric-guides/fabric-construction-guide/'],
      ['Request a Quote', 'The form this guide prepares you for.', '/request-a-quote/'],
    ],
  },
  {
    path: '/resources/fabric-guides/understanding-gsm/',
    title: 'Understanding GSM — Fabric Weight Explained | YOU LI',
    meta: 'What GSM measures, the reference ranges by application, the ounce conversion, and the tolerances that make a weight value a specification.',
    crumbs: [['Resources', FG], ['Fabric Guides', FG], ['Understanding GSM']],
    hero: {
      eyebrow: 'Fabric Guide',
      title: 'Understanding GSM — the number the specification runs on',
      lead: 'Grams per square meter is the most common and most misused field in a fabric specification. This guide covers what it measures, the reference ranges by application, the ounce conversion, and the tolerance that turns it into a specification.',
    },
    sections: [
      { t: 'h2', title: 'What GSM actually measures' },
      {
        t: 'paras',
        body: [
          'GSM — grams per square meter — is areal density: the mass of a square meter of fabric. It is measured by cutting a known area (commonly via a circular cutter and scale, with the area calculated from the diameter) and dividing the mass by the area. It is a property of the fabric as constructed and finished, not of the fibre alone — the same fibre at a different yarn count, weave density or finishing will give a different GSM.',
          'That is why GSM is both the most useful single number in a specification and the most dangerous when quoted alone. “200 GSM” without construction, composition and tolerance describes a band of fabrics, not a fabric. The specification is the triple: value, tolerance, and the construction that produces it.',
        ],
      },
      { t: 'h2', title: 'Reference ranges by application' },
      {
        t: 'table',
        note: 'Reference ranges as published in the product library; program values are confirmed per order.',
        head: ['Application area', 'Typical range', 'What the range buys'],
        rows: [
          ['T-shirts & light knits', '130–200 GSM', 'Drape, breathability, cost; below ~150 reads light and open'],
          ['Structured T-shirts & polos', '200–300 GSM', 'Body, opacity, a premium hand'],
          ['Shirting (poplin, dobby)', '90–160 GSM', 'Crispness, dry hand, structure'],
          ['Trousers & jackets (twill)', '140–260 GSM', 'Drape at the light end, durability at the heavy'],
          ['Workwear & overalls', '260–680 GSM', 'Abrasion resistance, protection, warmth'],
          ['Denim', '200–490 GSM (6–14.5 oz)', 'The full fashion-to-workwear spectrum'],
          ['Fleece', '200–480 GSM', 'Warmth-to-weight; heavier reads coarser'],
          ['Technical shells (ripstop)', '60–130 GSM', 'Low weight with structural tear control'],
        ],
      },
      { t: 'h2', title: 'The ounce conversion' },
      {
        t: 'paras',
        body: [
          'Ounces per square yard (oz/yd²) is the same areal density in imperial units: 1 oz/yd² ≈ 33.906 g/m². Denim lives in ounces by convention, so the conversions a buyer actually uses: 6 oz ≈ 204 GSM, 8 oz ≈ 271, 10 oz ≈ 339, 12 oz ≈ 407, 14 oz ≈ 475. The conversion is exact; the reason to keep both units in the specification is that the tolerance is stated in the unit the factory and the mill work in.',
          'A practical caution: a “10 oz denim” is a specification band, not a number. The order file states the GSM value, the tolerance (commonly ±3–5%, program-specific), and the measurement method reference — so the 10 oz and the 339 GSM ±5% are the same specification, not two of them.',
        ],
      },
      { t: 'h2', title: 'Why the tolerance is the specification' },
      {
        t: 'paras',
        body: [
          'Two factories can both make “300 GSM interlock” and ship fabrics that differ by 30 GSM — and both can be within “industry normal.” The garment, however, does not average: a 30 GSM drift changes hand, drape, shrinkage behaviour and consumption. That is why the tolerance is written into the order specification, checked at both quality gates, and recorded per roll. The verification report shows the measured values against the stated tolerance — the document that makes “within spec” a fact instead of an opinion.',
          'For a buyer preparing a brief: state the target, accept the tolerance proposal, and keep the measurement method reference in the file. The three together are what a mill quotes against and what the two gates verify.',
        ],
      },
      { t: 'cta', title: 'Use the guide in a brief', lead: 'State the target, the application and the tolerance you need. The library records carry the reference ranges per construction.' },
    ],
    next: [
      ['Prepare a Fabric RFQ', 'The weight field in the full brief.', '/resources/fabric-guides/prepare-a-fabric-rfq/'],
      ['Fabric Construction Guide', 'What produces the weight.', '/resources/fabric-guides/fabric-construction-guide/'],
      ['Fabric Inspection Guide', 'Where the weight is checked.', '/resources/fabric-guides/fabric-inspection-guide/'],
    ],
  },
  {
    path: '/resources/fabric-guides/fabric-construction-guide/',
    title: 'Fabric Construction Guide — Woven, Knit and Denim | YOU LI',
    meta: 'A working guide to fabric constructions: woven structures (plain, twill, sateen, dobby), knit loop structures and denim — what each does and when to choose it.',
    crumbs: [['Resources', FG], ['Fabric Guides', FG], ['Fabric Construction Guide']],
    hero: {
      eyebrow: 'Fabric Guide',
      title: 'The construction guide — choosing the structure before the style',
      lead: 'Woven, knit and denim are three different physics. This guide is the working map: what each structure does, the sub-constructions within it, and the choice criteria a development team actually uses.',
    },
    sections: [
      { t: 'h2', title: 'The three families' },
      {
        t: 'table',
        head: ['Family', 'How it is made', 'What it gives you', 'What it does not'],
        rows: [
          ['Woven', 'Warp and weft interlaced at right angles on a loom', 'Stability, shape retention, structure, drape control', 'Inherent stretch (unless blended or engineered)'],
          ['Knit', 'One continuous loop structure, knitted on a machine', 'Stretch, drape, recovery, speed of production', 'Edge stability without binding; some constructions curl'],
          ['Denim', 'Warp-faced twill, typically indigo warp / undyed weft', 'Durability, character, a defined weight system (oz)', 'Lightweight stretch (only via engineered versions)'],
        ],
      },
      { t: 'h2', title: 'Woven structures' },
      {
        t: 'cards',
        items: [
          { k: 'Plain (poplin)', v: 'One-over-one. The crisp, dry, stable base — shirting, fine T-shirt-adjacent cloth. Maximum interlacement, maximum stability, least drape.' },
          { k: 'Twill', v: 'The diagonal. Drape plus durability; trousers, jackets, overalls. The yarn count and the step (2/1, 2/2, 3/1) set the character from suiting-adjacent to workwear.' },
          { k: 'Sateen (satin)', v: 'Floats the weft. Lustrous, fluid, soft face — linings, dresses, sportswear bases. Less abrasion-resistant; chosen for hand, not for abuse.' },
          { k: 'Dobby', v: 'Small geometric patterns on the dobby mechanism. Texture without printing; the pattern’s fastness follows the yarn’s fastness.' },
          { k: 'Ripstop', v: 'Plain weave with a reinforcing grid. Tear confinement for workwear, outdoor and protective applications — a structure doing the work of a performance claim.' },
          { k: 'Yarn-dyed', v: 'Colour set at the yarn stage: gingham, stripe, check. Fastness controlled before the loom; the uniform program’s pattern answer.' },
        ],
      },
      { t: 'h2', title: 'Knit structures' },
      {
        t: 'cards',
        items: [
          { k: 'Single jersey', v: 'One loop, one face. The T-shirt default: light, drapey, economical. The reverse shows the loops — a design fact, not a defect.' },
          { k: 'Rib', v: 'Alternating tuck courses, vertical ribs. Crosswise stretch and recovery — cuffs, collars, fitted programs. The count (1×1 to 5 rib) sets the character.' },
          { k: 'Interlock', v: 'Double knit, flat both sides. Denser, more stable, no reverse loops — polos, structured T-shirts, activewear bases.' },
          { k: 'Velour & fleece', v: 'Cut pile and brushed loft respectively. Plush hand (velour) and warmth-to-weight (fleece) — comfort programs, warm-weather wear, insulation.' },
          { k: 'Jacquard knit', v: 'Multi-feed colour patterns knitted in the loop. Pattern integrity that prints cannot match — premium T-shirts, dresses, sportswear.' },
        ],
      },
      { t: 'h2', title: 'Denim: a family with its own units' },
      {
        t: 'paras',
        body: [
          'Denim is warp-faced twill with a colour convention (indigo warp, undyed weft) and a unit convention (ounces per square yard). Within it, the character is set by the yarn: even yarn (regular), slubbed yarn (texture and vintage character), ring-spun yarn (soft, premium hand), opposing twill directions (cross-hatch surface) and a coating system (water resistance). The choice sequence is weight first, yarn second, finish third — the same sequence the library’s five records follow.',
        ],
      },
      { t: 'h2', title: 'The choice criteria, in order' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Function first', body: 'What must the fabric do? Stretch, structure, drape, protection, warmth, performance. The function sets the family — you do not argue a T-shirt into being a canvas.' },
          { n: '2', title: 'Hand second', body: 'Within the family, the hand-feel criterion sets the sub-construction and the yarn. “Crisp,” “soft,” “plush,” “technical” each point at a construction and a finish.' },
          { n: '3', title: 'Weight third', body: 'The GSM/oz target within the construction’s range. The tolerance is stated with the value.' },
          { n: '4', title: 'Finish fourth', body: 'The finish and any performance property, with the test plan where performance is involved. A finish specified before the construction is a specification that will not survive the mill.' },
        ],
      },
      { t: 'cta', title: 'Match a construction to your program', lead: 'Send the function and the hand-feel reference. The library records and the brief form carry it from here.' },
    ],
    next: [
      ['Woven Library', 'The woven records with full profiles.', '/products/woven-fabrics/'],
      ['Knit Library', 'The knit records with full profiles.', '/products/knit-fabrics/'],
      ['Denim Library', 'The five denim families.', '/products/denim-fabrics/'],
    ],
  },
  {
    path: '/resources/fabric-guides/fabric-inspection-guide/',
    title: 'How Fabric Inspection Works — Gates, AQL and Documents | YOU LI',
    meta: 'The inspection types, AQL basics, the checkpoint set and the documents a fabric program should hold — the buyer’s working reference for quality diligence.',
    crumbs: [['Resources', FG], ['Fabric Guides', FG], ['Fabric Inspection Guide']],
    hero: {
      eyebrow: 'Fabric Guide',
      title: 'How fabric inspection works — before you outsource the gate',
      lead: 'The inspection types, the AQL basics, the checkpoint set and the document chain — a working reference for the buyer who needs to audit the gate, not just trust it.',
    },
    sections: [
      { t: 'h2', title: 'The three inspection moments' },
      {
        t: 'table',
        head: ['Moment', 'Where & when', 'What it can still fix', 'The document it produces'],
        rows: [
          ['Inline (at source)', 'During production at the mill', 'Everything — weight, shade, construction drift while the run is live', 'Findings log with dispositions'],
          ['Pre-shipment (final)', 'Before the container seals', 'The delivered state — counts, labels, sampling acceptance', 'Verification report'],
          ['Receiving (at factory)', 'At the buyer’s factory', 'The handoff — count, condition, document match', 'Receiving record against the verification report'],
        ],
      },
      { t: 'h2', title: 'AQL, the minimum working knowledge' },
      {
        t: 'paras',
        body: [
          'AQL (Acceptable Quality Limit) is a sampling scheme: you define defect classes (major, minor, critical), choose a sampling level and a sample size from the standard’s tables, inspect the sample, and accept or reject the lot against the acceptance limits. The buyer’s working knowledge needs three facts: the scheme is a lot-acceptance decision, not a quality measurement (a passed lot can still carry defects); the sampling level and limits are the buyer’s choices and should be in the order specification; and the report must state the method, the sample, the findings and the disposition — four fields, or the “AQL passed” line is decoration.',
          'In practice, most programs run a lighter or heavier version than the full standard: a defined checkpoint set at a stated density, or the full AQL scheme for compliance programs. Both are legitimate; the illegitimate version is the one where the method is not written down. That is the diligence question: which scheme, at what level, with what limits — and where in the order file is it stated?',
        ],
      },
      { t: 'h2', title: 'The checkpoint set' },
      {
        t: 'list',
        items: [
          'Appearance against the approved strike-off, under standard lighting.',
          'Weight (GSM/oz) against the stated tolerance, measured per sampled roll.',
          'Width against the stated tolerance, measured per sampled roll.',
          'Colour against the approved master at the light-source reference; ΔE where specified.',
          'Construction and finish character against the order specification.',
          'Functional properties per the agreed test plan, where the program has performance.',
          'Count, labels and packaging at the pre-shipment gate.',
        ],
      },
      { t: 'h2', title: 'The document chain' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Specification', body: 'The approved values both gates run against — with tolerances and the sampling method where defined. Without this document, “within spec” has no referent.' },
          { n: '2', title: 'Findings log', body: 'Every inline finding with its location, description, measurement and disposition. The log is the run’s quality history.' },
          { n: '3', title: 'Verification report', body: 'The pre-shipment gate’s output: the delivered state, measured and sampled, with the method stated and the dispositions recorded.' },
          { n: '4', title: 'Receiving record', body: 'The factory’s handoff record, run against the verification report — the chain closes when the two documents agree by design.' },
        ],
      },
      { t: 'h2', title: 'The diligence questions' },
      {
        t: 'paras',
        body: [
          'When auditing any supplier’s quality story — including ours — run the same five questions: What is checked, against what criteria, by whom, with what method, and in what document? A quality story that answers all five with named values and retrievable documents is a process. A quality story that answers with adjectives is a slogan. The two-stage model on the Quality Assurance page is designed to pass the five-question test at both gates — and the evidence register states exactly which artifacts are published, which are in preparation, and which are available on request.',
        ],
      },
      { t: 'cta', title: 'See the gates in operation', lead: 'The Quality Assurance page shows the two-stage model with the checkpoints and the evidence states.' },
    ],
    next: [
      ['Quality Assurance', 'The two-stage model in full.', '/quality-compliance/quality-assurance/'],
      ['Two-Stage QC Guide', 'The compliance-side walkthrough.', '/resources/quality-compliance-guides/two-stage-qc/'],
      ['Understanding GSM', 'The weight checkpoint, explained.', '/resources/fabric-guides/understanding-gsm/'],
    ],
  },
  {
    path: TI,
    title: 'Textile Insights — Process & Market Reference | YOU LI',
    meta: 'Insights on the China-to-Bangladesh sourcing route and functional yarn systems — process references for buyers and development teams.',
    crumbs: [['Resources', FG], ['Textile Insights']],
    hero: {
      eyebrow: 'Resources · Textile Insights',
      title: 'Insights on the route and the yarn',
      lead: 'Process references that explain how the China-to-Bangladesh corridor actually runs, and how functional yarns carry performance — written for the buyers who plan against them.',
    },
    sections: [
      { t: 'h2', title: 'The insight set' },
      {
        t: 'cards',
        items: [
          { k: 'The China-to-Bangladesh route, end to end', v: 'The stages, the documents, the responsibilities and the honest timeline — the corridor as an operating model, not a map.' },
          { k: 'Functional yarns, explained', v: 'Why performance starts in the yarn: capillary, ionic, FR, tenacity and micro systems, and how to specify each honestly.' },
        ],
      },
      { t: 'h2', title: 'What this section is — and is not' },
      {
        t: 'paras',
        body: [
          'Textile Insights is process reference, not market commentary: it explains how the route runs and how the systems work, because those are the facts a program is planned against. It does not publish traffic, volume or market-share claims about the corridor, and it does not present the company’s capabilities as independently verified beyond their stated evidence states. Where a claim needs verification, the insight says so — the same discipline as the product library, applied to the narrative.',
        ],
      },
      { t: 'cta', title: 'Use the insights in planning', lead: 'The route and the yarn are the two axes of a sourcing plan. The guides in Fabric Guides cover the specification side.' },
    ],
    next: [
      ['Sourcing Process', 'The six stages the route runs on.', '/services/sourcing-process/'],
      ['Performance Yarns', 'The yarn library with evidence states.', '/products/performance-yarns/'],
      ['Sourcing Network', 'The regions, with their statuses.', '/sourcing-network/china/'],
    ],
  },
  {
    path: '/resources/textile-insights/china-to-bangladesh-route/',
    title: 'The China-to-Bangladesh Fabric Route, End to End | YOU LI',
    meta: 'How the China-to-Bangladesh fabric route runs in practice: the stages, the documents, the responsibilities and the timeline a buyer should plan against.',
    crumbs: [['Resources', TI], ['Textile Insights', TI], ['China-to-Bangladesh Route']],
    hero: {
      eyebrow: 'Textile Insight',
      title: 'The China-to-Bangladesh route, end to end',
      lead: 'Two offices, one corridor, and a chain of documents. This insight walks the route the way it actually runs — stage, document, responsibility — so a program can be planned against it.',
    },
    sections: [
      { t: 'h2', title: 'The shape of the corridor' },
      {
        t: 'paras',
        body: [
          'The route is a handoff chain: the mill side ends where the buyer side begins, and the quality of the program is the quality of the handoffs. On the China side (Shanghai office), the work is capability — mill matching, sampling, inline inspection, export documentation. On the Bangladesh side (Uttara, Dhaka office), the work is execution — import and customs coordination, local distribution, factory delivery, and the final verification gate. The order file is the object that travels with the fabric, and every handoff appends to it.',
          'The insight below states the stages, the documents and the responsibilities as the operating model runs them. The timeline figures are reference ranges for planning — the dated plan for a specific program is the artifact the sourcing process produces, and it is the number to plan against.',
        ],
      },
      { t: 'h2', title: 'Stage by stage' },
      {
        t: 'table',
        head: ['Stage', 'Owned by', 'Document produced', 'Reference duration*'],
        rows: [
          ['Brief intake & gap list', 'YOU LI (both offices)', 'Order file opened; gap list', '1–2 business days'],
          ['Mill matching & options', 'Shanghai office', 'Shortlist with relationship types', '3–5 business days'],
          ['Sampling round', 'Shanghai office', 'Samples + specification comparisons', '5–10 business days per round'],
          ['Approval & order', 'Buyer + YOU LI', 'Approval record; PO terms', 'Buyer-dependent'],
          ['Production + inline inspection', 'Mill + YOU LI QA', 'Findings log', 'Per program (2–6 weeks reference)'],
          ['Pre-shipment verification', 'YOU LI QA', 'Verification report', '2–4 business days'],
          ['Shipment & transit', 'Shanghai office (export side)', 'Shipping documents; milestone log', 'Per route (reference, confirmed per order)'],
          ['Import & customs coordination', 'Uttara office', 'Clearance follow-through record', 'Per shipment (reference, confirmed per order)'],
          ['Local delivery & handoff', 'Uttara office + factory', 'Delivery schedule; receiving record', 'Scheduled per production plan'],
        ],
      },
      {
        t: 'note',
        text: '*Reference durations are planning ranges as described in company service materials, not commitments. The dated plan for a program is confirmed per order against construction, colour, source and route.',
      },
      { t: 'h2', title: 'The documents that carry the program' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'The order file', body: 'Opened at intake, it is the spine: specification, options, approvals, findings, reports, schedule. One file, both offices, every party who needs it.' },
          { n: '2', title: 'The specification comparisons', body: 'Per sample round: the target vs the option, field by field. The approval document — the record of what was approved and why.' },
          { n: '3', title: 'The findings log', body: 'The inline gate’s history: every finding, its disposition, its re-verification. The run’s quality record.' },
          { n: '4', title: 'The verification report', body: 'The pre-shipment gate’s output: the delivered state, method stated, dispositions recorded. Held by the buyer and the factory alike.' },
          { n: '5', title: 'The delivery chain', body: 'Shipping documents, clearance follow-through, delivery schedule, receiving record — the tail of the file, closed at the cutting table.' },
        ],
      },
      { t: 'h2', title: 'Where programs actually break' },
      {
        t: 'paras',
        body: [
          'The corridor’s failure modes are the handoffs, and they follow a pattern. The mill-to-exporter handoff breaks when the specification was never written down — the mill makes the fabric it knows, not the one the order file says. The exporter-to-importer handoff breaks when the terms are implied rather than stated, and the responsibility for a late or short shipment has no owner. The importer-to-factory handoff breaks when the delivery is scheduled to the port instead of the production plan, and the count at the gate does not match the count at the mill.',
          'Each of the three has the same fix, and the fix is structural: the document that states the fact, held by every party, produced before the handoff. The route runs on documents because the documents are the handoffs. That is the whole insight, and it is why the operating model is described in terms of artifacts rather than promises.',
        ],
      },
      { t: 'cta', title: 'Plan your program on the route', lead: 'Send the brief — the dated plan against these stages is the first artifact back.' },
    ],
    next: [
      ['Sourcing Process', 'The six-stage operating model.', '/services/sourcing-process/'],
      ['Import & Distribution', 'The Bangladesh side in service form.', '/services/import-distribution/'],
      ['Sourcing Network — China', 'The mill side of the corridor.', '/sourcing-network/china/'],
    ],
  },
  {
    path: '/resources/textile-insights/functional-yarns-explained/',
    title: 'Functional Yarns Explained — Performance Starts in the Yarn | YOU LI',
    meta: 'How functional yarn systems carry performance: capillary wicking, ionic antibacterial, FR fibres, high-tenacity and micro-soft systems — and how to specify each honestly.',
    crumbs: [['Resources', TI], ['Textile Insights', TI], ['Functional Yarns Explained']],
    hero: {
      eyebrow: 'Textile Insight',
      title: 'Functional yarns, explained — performance starts in the yarn',
      lead: 'A finish can wash out; a fibre cannot. This insight explains the six functional yarn systems, the physics behind each, and the honest way to specify and verify them.',
      image: '/assets/img/yarns.jpg',
    },
    sections: [
      { t: 'h2', title: 'Why the yarn layer matters' },
      {
        t: 'paras',
        body: [
          'Fabric performance is built from three layers, in order of durability: the fibre (the molecule), the yarn (the structure), and the finish (the surface treatment). A performance claim carried by the finish is real until the washing regime decides otherwise; a claim carried by the fibre is real for the garment’s life. That is the whole argument for yarn-level sourcing in one sentence: the function survives the working life because it is in the working part.',
          'The argument also explains the verification structure. A finish can be measured on the finished fabric, but the measurement says little about durability; a yarn’s function is verifiable at the yarn — the cross-section, the ion loading, the fibre chemistry — and again at the fabric, against the program target. Two verifiable points instead of one is the diligence advantage of the yarn layer.',
        ],
      },
      { t: 'h2', title: 'The six systems' },
      {
        t: 'table',
        head: ['System', 'The physics', 'What survives', 'How to specify it'],
        rows: [
          ['Capillary (wicking)', 'Hollow or grooved cross-section draws moisture from skin to surface', 'The cross-section — permanent', 'Wicking target + reference method (AATM 1979 family); the cross-section in the supplier dossier'],
          ['Antibacterial (ionic)', 'Silver/zinc ions disrupt microbial function at the fibre', 'The ion in the yarn — wash-durable by design', 'Efficacy + wash-durability targets (ISO 20743/22196 family); ion system in the dossier'],
          ['FR fibre', 'Flame resistance in the molecular structure (FR cotton, FR viscose, aramid, modacrylic)', 'The molecule — permanent', 'The fibre system + FR content; program-standard evidence (NFPA/EN-type references)'],
          ['High-tenacity', 'Drawn and oriented yarn for maximum tensile strength', 'The orientation — permanent', 'Tensile/tear targets (ISO 13935/13937 family); the tenacity class in the dossier'],
          ['Waterproof / hydrophobic', 'Hydrophobic treatment or impregnation at the yarn', 'Depends on system — stated per dossier', 'Hydrostatic target (AATM 42 reference); the system type named per record'],
          ['Super-soft micro', 'Fine, micro-count fibre for hand-feel', 'The count — permanent', 'The hand-feel criterion + reference sample; the count class in the dossier'],
        ],
      },
      { t: 'h2', title: 'Brand systems and the authorisation question' },
      {
        t: 'paras',
        body: [
          'Some systems are brand names — Coolmax® is the reference case, a capillary polyester system whose name carries expectations. Using the brand name and its claims requires the manufacturer’s authorisation, and a sourcing partner’s answer to “do you have that authorisation?” should be a status, not a gesture: verified with the document, in progress with the state named, or not applicable because the program uses an equivalent system. The yarn library on this site tracks the authorisation status per record — “verification in progress” is a published state, because the alternative (implying the authorisation) is exactly the trust failure the evidence discipline exists to prevent.',
          'For the buyer, the practical consequence: specify the function and the target, and let the brand be a preference with a status. A program specified on “capillary polyester, wicking target X, method Y” can run on the brand system when authorisation is in place and on an equivalent system when it is not — without re-baselining the garment.',
        ],
      },
      { t: 'h2', title: 'The honest specification, per system' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Name the system', body: 'The physics in one line — capillary cross-section, ionic loading, FR molecule, tenacity class. A name without the system is a marketing word.' },
          { n: '2', title: 'State the target and method', body: 'The property, the number, the reference method. “Wicking, AATM 1979 reference, target height X” — not “moisture-wicking.”' },
          { n: '3', title: 'Attach the dossier', body: 'The supplier’s technical dossier for the yarn: fibre base, system description, the authorisation status where a brand is involved.' },
          { n: '4', title: 'Verify at both levels', body: 'Yarn level where the program specifies; fabric level at both quality gates. The test plan record carries the results against the targets.' },
        ],
      },
      { t: 'cta', title: 'Specify a function, get a shortlist', lead: 'Send the performance, the garment and the washing regime. The yarn shortlist comes back with dossiers and test plans.' },
    ],
    next: [
      ['Performance Yarns Library', 'The six yarn records with evidence states.', '/products/performance-yarns/'],
      ['Yarn Sourcing Service', 'The service that runs this insight.', '/services/yarn-sourcing/'],
      ['Functional & Technical Fabrics', 'The fabric side of the performance stack.', '/products/functional-technical/'],
    ],
  },
  {
    path: QG,
    title: 'Quality & Compliance Guides | YOU LI',
    meta: 'Compliance-side working references: the two-stage QC walkthrough and the certification glossary for diligence conversations.',
    crumbs: [['Resources', FG], ['Quality & Compliance Guides']],
    hero: {
      eyebrow: 'Resources · Quality & Compliance',
      title: 'The compliance-side references',
      lead: 'Two working documents for the diligence file: the two-stage quality process walked end to end, and the glossary that ends the “which one is it?” conversation.',
    },
    sections: [
      { t: 'h2', title: 'The guide set' },
      {
        t: 'cards',
        items: [
          { k: 'Two-stage QC, walked end to end', v: 'The inline and pre-shipment gates as a single walkthrough: checkpoints, documents, escalation and the buyer’s audit points.' },
          { k: 'Certification glossary', v: 'Sedex, Higg, GRS, OEKO-TEX, BCI and the others — what each framework actually is, what it certifies and what it does not.' },
        ],
      },
      { t: 'h2', title: 'The purpose of the compliance guides' },
      {
        t: 'paras',
        body: [
          'Compliance conversations fail in two ways: the supplier’s story is uncheckable, or the buyer’s vocabulary does not match the supplier’s. These guides are built to fix the second failure and expose the first. The glossary gives both sides the same definitions — so when a supplier says “Sedex” and a buyer means “ethical audit with a verifiable score,” the mismatch surfaces in the conversation, not in the audit. The two-stage walkthrough gives the buyer the checkpoints and documents to ask for — the five-question test from the inspection guide, applied to the quality story.',
          'The guides reference the company’s own evidence states: where the process artifact is published, where it is in preparation, and where it is available on request. A compliance reference that does not show its own evidence status is a brochure; these are built to be audit material.',
        ],
      },
      { t: 'cta', title: 'Add the guides to the diligence file', lead: 'Both are written to be forwarded — definitions and checkpoints that hold up in a supplier review.' },
    ],
    next: [
      ['Quality Assurance', 'The model the walkthrough describes.', '/quality-compliance/quality-assurance/'],
      ['Certifications & Compliance', 'The register and the three-layer distinction.', '/quality-compliance/certifications-compliance/'],
      ['Fabric Inspection Guide', 'The inspection-side reference.', '/resources/fabric-guides/fabric-inspection-guide/'],
    ],
  },
  {
    path: '/resources/quality-compliance-guides/two-stage-qc/',
    title: 'Two-Stage QC, Walked End to End | YOU LI',
    meta: 'The inline and pre-shipment quality gates as a single walkthrough: what is checked at each gate, the documents, the escalation path and the buyer’s audit points.',
    crumbs: [['Resources', QG], ['Quality & Compliance Guides', QG], ['Two-Stage QC Walkthrough']],
    hero: {
      eyebrow: 'Compliance Guide',
      title: 'Two-stage QC, walked end to end',
      lead: 'One walkthrough of the whole process: the inline gate at the source mill, the pre-shipment gate, the documents each produces, and the points where a buyer’s audit enters.',
      image: '/assets/img/inspection.jpg',
    },
    sections: [
      { t: 'h2', title: 'The walk' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Specification locked', body: 'The order specification holds the acceptance criteria: weight, width, colour, construction, finish, and the sampling method where the program defines one. This is the document both gates run against — it is produced before production, and it is the first audit point.' },
          { n: '2', title: 'Inline gate, during production', body: 'Appearance vs strike-off, weight, width, colour, construction and finish — checked against the specification while the run is live. Findings enter the log with photographs where applicable; a breach of an acceptance criterion triggers the stop-the-run decision and a documented correction path. Audit point: the findings log.' },
          { n: '3', title: 'Re-verification of corrected runs', body: 'Corrected runs are re-checked against the same criteria before continuing. The re-verification record closes the finding — an open finding is a program risk, and the log shows which findings are open and which are closed. Audit point: the closure records.' },
          { n: '4', title: 'Pre-shipment gate', body: 'The delivered state: roll weights and widths measured, colour sampled against the master, count and labels checked, packaging verified, documentation completed. The sampling plan runs where the program defines one — method, sample, findings, disposition, all stated. Audit point: the verification report.' },
          { n: '5', title: 'Report distribution', body: 'The verification report goes to the buyer and the receiving factory — the same document, so the receiving check runs from the same facts. The order file is closed for the shipment with the document index. Audit point: the document index itself.' },
        ],
      },
      { t: 'h2', title: 'The document set, at a glance' },
      {
        t: 'table',
        head: ['Document', 'Produced at', 'Held by', 'The audit question it answers'],
        rows: [
          ['Order specification (criteria)', 'Before production', 'All parties', '“What were we making to?”'],
          ['Findings log', 'During production', 'YOU LI + buyer', '“What happened in the run, and what was done about it?”'],
          ['Verification report', 'Before shipment', 'YOU LI + buyer + factory', '“What was actually delivered, and how was it checked?”'],
          ['Document index', 'Shipment close', 'All parties', '“Where is everything?”'],
        ],
      },
      { t: 'h2', title: 'Where the buyer’s audit enters' },
      {
        t: 'list',
        items: [
          'Before production — audit the specification: are the criteria values or adjectives? Is the sampling method stated where the program uses one?',
          'Mid-run — audit the findings log: are findings recorded, dispositioned and closed? A log with no findings is not evidence of quality; it is evidence of no inspection.',
          'Pre-shipment — run a parallel third-party inspection from the verification report, or witness the gate. The report is designed for both.',
          'At receipt — run the factory’s receiving check from the same report. Agreement by design; disagreement by document.',
          'After the season — audit the repeat discipline: does the repeat re-run against the recorded specification, with the delta documented?',
        ],
      },
      { t: 'h2', title: 'The honest limits' },
      {
        t: 'paras',
        body: [
          'The walk has limits, and stating them is part of the reference. A gate cannot inspect what it does not sample — density is a program choice, and the report states the method used. A specification cannot cover what was not specified — a property left out of the criteria is not verified even though the gate runs. And a process cannot promise an outcome — the two gates make quality inspectable; they do not make it perfect, and no honest process claim should try.',
          'The evidence states for the process artifacts — the SOP, the inspection forms, the sample report — are published on the Quality Assurance page: what is documented, what is in preparation for publication, and what is available on request for diligence. The walkthrough above is the process; those states are its audit trail.',
        ],
      },
      { t: 'cta', title: 'Run your program through the walk', lead: 'Send the brief with your acceptance criteria. The gates run against the numbers you approve.' },
    ],
    next: [
      ['Quality Assurance', 'The model page with the evidence states.', '/quality-compliance/quality-assurance/'],
      ['Certification Glossary', 'The vocabulary companion.', '/resources/quality-compliance-guides/certification-glossary/'],
      ['Fabric Inspection Guide', 'The checkpoint reference.', '/resources/fabric-guides/fabric-inspection-guide/'],
    ],
  },
  {
    path: '/resources/quality-compliance-guides/certification-glossary/',
    title: 'Certification Glossary — Sedex, Higg, GRS and More | YOU LI',
    meta: 'What the named textile frameworks actually are: Sedex, Higg, GRS, OEKO-TEX, BCI and others — the layer, the issuer, what they certify, and what they do not.',
    crumbs: [['Resources', QG], ['Quality & Compliance Guides', QG], ['Certification Glossary']],
    hero: {
      eyebrow: 'Compliance Guide',
      title: 'The certification glossary — end the “which one is it?” conversation',
      lead: 'Sedex is not a certification. Higg is not a score. GRS is a chain of custody. This glossary gives both sides of a compliance conversation the same definitions — layer, issuer, scope, and the thing each framework does not do.',
    },
    sections: [
      { t: 'h2', title: 'The three layers, again' },
      {
        t: 'paras',
        body: [
          'Every entry below names its layer: company-level (the sourcing company’s own credentials), mill-level (the source factory’s certification), or material/product-level (the fibre or fabric claim). The layer is the first fact, because most compliance confusion is a layer collision — a buyer asking for a product certification and a supplier answering with a company audit, both sincere, both wrong.',
          'The glossary is a reference for diligence conversations: when a framework name appears in a supplier’s story, the entry tells you what to ask for. The questions are the point — issuer, scope, number, validity, and the document itself.',
        ],
      },
      { t: 'h2', title: 'The entries' },
      {
        t: 'table',
        head: ['Name', 'Layer', 'What it actually is', 'What it is not', 'The diligence question'],
        rows: [
          ['Sedex', 'Company / supplier', 'A supply-chain ethics audit platform (SMETA-type audits): labour, health & safety, environment, business ethics', 'A certification, a score, or an endorsement; participation ≠ publication of results', 'Who audited, when, at which site, and is the result shareable?'],
          ['Higg (FEM / SQ)', 'Company / facility', 'Self-assessment frameworks (Facility Environmental Module, Social & Labor) that produce a module score when completed', 'A certification or a third-party audit; a score is only as good as the assessor and the data', 'Was the module completed by a third party or self-completed? When? For which site?'],
          ['GRS (Global Recycled Standard)', 'Material / product', 'A chain-of-custody standard for recycled content: audited custody from feedstock to product, with content verification', 'A fabric performance standard; it certifies the content trail, not the garment’s behaviour', 'The transaction certificate for the lot, and the audit certificate covering the conversion step'],
          ['OEKO-TEX (STANDARD 100)', 'Product', 'A product-level test for harmful substances in textile articles, with an annual licence and a label', 'An ecological certification or a “green” label in the environmental sense', 'The label number, the product category, the issuing institute and the validity'],
          ['BCI (Better Cotton)', 'Fibre origin', 'A fibre-origin initiative: BCI cotton is produced to specific standards, tracked through the mass-balance chain of custody', 'A certification of a finished fabric; the claim ends where the custody trail ends', 'The BCI share, the mass-balance documentation, and where the trail terminates'],
          ['ISO 9001', 'Company (QMS)', 'A quality-management-system standard: the process framework is certified, not any product output', 'A product quality certificate; a certified QMS does not certify a fabric lot', 'The certificate scope, the certification body, the site, the validity'],
          ['Inditex (reference)', 'Buyer program', 'A major buyer; references typically describe a buyer requirement or audit ecosystem, not a certification of the supplier', 'A certification, a framework or an endorsement — treat it as a relationship reference until verified', 'What exactly is the reference: requirement, audit, program? With the document'],
        ],
      },
      { t: 'h2', title: 'How to read a supplier’s certification list' },
      {
        t: 'steps',
        items: [
          { n: '1', title: 'Sort by layer', body: 'Separate the list into company, mill and material/product. A list that mixes the three without saying so is the first finding of the conversation.' },
          { n: '2', title: 'Check scope against the program', body: 'A mill certification for one product line does not cover another. Ask which construction and material the certificate’s scope covers — for your order, not in general.' },
          { n: '3', title: 'Request the metadata', body: 'Issuer, scope, certificate number, site, validity. Five fields. A real credential answers all five; a badge answers none.' },
          { n: '4', title: 'Ask for the document', body: 'The certificate or report itself, intact enough to verify. “Available on request” that produces the PDF in the meeting is the standard; the one that doesn’t is the finding.' },
        ],
      },
      { t: 'h2', title: 'The register, applied to our own references' },
      {
        t: 'paras',
        body: [
          'The glossary’s standard is applied to the company’s own references on the Certifications & Compliance page: the Sedex, Higg and Inditex mentions from company materials are tracked in the verification register with their exact status — not publicly verified, and not presented as endorsements or credentials while verification runs. A glossary that defined the frameworks without applying them to the house’s own list would be literature; applying them is the reference.',
        ],
      },
      { t: 'cta', title: 'Bring the glossary to the review', lead: 'Forward the entries to the supplier review. The five-field question is the same for every framework.' },
    ],
    next: [
      ['Certifications & Compliance', 'The register with the house references.', '/quality-compliance/certifications-compliance/'],
      ['Two-Stage QC Walkthrough', 'The process-side companion.', '/resources/quality-compliance-guides/two-stage-qc/'],
      ['Sustainability', 'Material-level evidence states.', '/quality-compliance/sustainability/'],
    ],
  },
  {
    path: '/resources/faq/',
    title: 'FAQ — Sourcing, Sampling, Quality, Logistics | YOU LI',
    meta: 'Frequently asked questions across commercial terms, sampling, quality, compliance and logistics — the buyer’s quick reference before the first brief.',
    crumbs: [['Resources', FG], ['FAQ']],
    hero: {
      eyebrow: 'Resources · FAQ',
      title: 'The questions every first brief starts with',
      lead: 'Commercial, technical, quality and logistics — grouped, answered directly, and linked to the page that carries the detail. If your question is not here, the Contact page routes it to a named person.',
    },
    sections: [
      { t: 'h2', title: 'Commercial' },
      {
        t: 'faq',
        items: [
          ['What is your MOQ?', 'MOQ is confirmed per construction, colour and source mill — it is a value with a basis, not a website number. Every mill-matched option we return carries its MOQ, and multi-colour programs are quoted together for better minimums.'],
          ['What are your lead times?', 'Sampling, bulk and delivery lead times are confirmed per option against construction, colour count, source and route. The dated plan for a program is produced at quotation stage and tracked in the order file.'],
          ['What are your payment and shipping terms?', 'Terms (FOB, CIF or equivalent) and the payment structure are confirmed per order with the responsibility split stated in the order file. Development and bulk programs are quoted separately.'],
          ['Do you stock fabric in Bangladesh?', 'Local distribution is coordinated from Uttara, Dhaka. Stocked items are stated in the library; made-to-order items follow the sourcing process with confirmed lead times.'],
          ['Can you match a competitor’s price?', 'We quote against the specification, not the price list. If the target price implies a different construction, fibre or source, the answer is a specification comparison showing the tradeoffs — that comparison is the quote.'],
        ],
      },
      { t: 'h2', title: 'Sampling & development' },
      {
        t: 'faq',
        items: [
          ['How does sampling work?', 'Three sample types: lab dips for colour, strike-offs for construction, functional strike-offs for performance properties. Each arrives with a written specification comparison; your approval is recorded with its basis.'],
          ['How many rounds can we revise?', 'Revision rounds are part of the workflow, not an exception — each adds a delta document to the record. The sample plan states the expected rounds for the program; a round with a new criterion is a new specification decision, and it is handled as one.'],
          ['Can you sample from a physical reference?', 'Yes — send the reference. The hand-feel and colour are defined by it, and the strike-off comparison records the delta your team perceives.'],
          ['What does sampling cost?', 'Sample handling follows the program; development programs typically carry sampling within the development scope. Costs are confirmed in the sample plan.'],
        ],
      },
      { t: 'h2', title: 'Quality & compliance' },
      {
        t: 'faq',
        items: [
          ['How do you inspect fabric?', 'Two gates: inline inspection at the source mill during production, and pre-shipment verification before the container seals. Both run against acceptance criteria you approve, and both produce documents — the findings log and the verification report.'],
          ['Do you work to AQL?', 'Where your program defines an AQL-type scheme, the sampling plan (level, defect classes, acceptance limits) is part of the order specification and the report records method, sample, findings and disposition. Where it does not, verification runs a program-agreed checkpoint density, stated in the report.'],
          ['What are your certifications?', 'Certification claims are handled in the verification register with issuer, scope, number and validity — and the three layers (company, mill, material/product) are kept distinct. References from company materials (Sedex, Higg, Inditex) are tracked as not publicly verified and are not presented as endorsements until verified.'],
          ['Can we run a third-party inspection?', 'Yes — at pre-shipment, alongside our verification, or as a buyer audit of the source. The verification report is available to the third party, and the order file carries the arrangement.'],
          ['What happens if a lot fails?', 'A breach of an acceptance criterion triggers the defined escalation: stop-the-run decision, correction plan, re-verification. The path and its outcomes are documented in the findings log — there is no “we will sort it out” state.'],
        ],
      },
      { t: 'h2', title: 'Logistics & delivery' },
      {
        t: 'faq',
        items: [
          ['How does delivery work in Bangladesh?', 'Import and customs coordination run from the Uttara office, then local distribution is scheduled to your factory or warehouse against your production plan. Roll count is verified at the handoff.'],
          ['Who is responsible if the shipment is late?', 'The responsibility matrix in the order file states the owner per step. A late shipment produces an exception record: when it was known, what was decided, what the new date is — held in the same file your factory reads.'],
          ['What documentation comes with the fabric?', 'The pre-shipment verification report (weights, widths, shades, count, dispositions) and the order-file document index. Your factory receives the same verification report the buyer does.'],
          ['Do you deliver to factories outside Dhaka?', 'Local distribution is coordinated from the Uttara hub across the garment belt; the delivery schedule is built per program with the destination named in the brief.'],
        ],
      },
      { t: 'h2', title: 'The company' },
      {
        t: 'faq',
        items: [
          ['Are you a mill or a trading company?', 'A sourcing and distribution partner: sourcing, mill matching, import, local distribution and quality verification. Each recommended option states its relationship type — direct, partner or cooperative mill.'],
          ['Where do you source from?', 'China is the active, documented sourcing region, with the sourcing register maintained by mill. Company materials describe a scope across Asia and Europe; Europe is in verification, and Vietnam, India and Turkey are named as planned regions.'],
          ['Who does the company serve?', 'Apparel brands and procurement teams, Bangladesh garment exporters and factories, buying houses, and product development teams — the industries section carries the program view for each.'],
          ['Why does the website label claims?', 'Every claim carries an evidence state — verified document, company statement, or in verification — because a fabric buyer is choosing a verification system as much as a supply route. The labels are the system, made visible.'],
        ],
      },
      { t: 'cta', title: 'Question not answered here', lead: 'The Contact page routes it to a named person — the answer comes back as a document.' },
    ],
    next: [
      ['Request a Quote', 'The brief that starts the workflow.', '/request-a-quote/'],
      ['Sourcing Process', 'The six stages, with artifacts.', '/services/sourcing-process/'],
      ['Quality Assurance', 'The two gates in full.', '/quality-compliance/quality-assurance/'],
    ],
  },
  {
    path: '/resources/case-studies/',
    title: 'Case Studies — Permissioned Program Outcomes | YOU LI',
    meta: 'The case-study program: how program outcomes are documented, the permission gate, and the format a published case study follows.',
    crumbs: [['Resources', FG], ['Case Studies']],
    hero: {
      eyebrow: 'Resources · Case Studies',
      title: 'Case studies, published only with permission and proof',
      lead: 'A case study is a program outcome with the numbers and the permission. This page explains the format, the gate, and what is in preparation — without publishing any outcome the buyer has not approved.',
    },
    sections: [
      { t: 'h2', title: 'The standard a case study must meet' },
      {
        t: 'cards',
        items: [
          { k: 'Written permission', v: 'The buyer’s written approval of the content, the name (or the anonymity) and the publication. No permission, no case study — regardless of how good the program was.' },
          { k: 'Measurable outcome', v: 'The numbers the program produced: the specification held across the lot, the delivery against plan, the quality result at the gates. Outcomes from the order file, not from memory.' },
          { k: 'The problem, stated', v: 'What the buyer was trying to solve — the function, the compliance requirement, the delivery risk. A case study without the problem is a brochure with a logo.' },
          { k: 'The route, stated', v: 'The stages the program ran, the gates it passed, and the artifacts it produced — the operating model in one program’s evidence.' },
        ],
      },
      { t: 'h2', title: 'What is in preparation' },
      {
        t: 'evidence',
        items: [
          { label: 'Case study pipeline', status: 'In verification', note: 'Program outcomes from the order files are being prepared for the permission process. Each entry moves to published only with the buyer’s written approval.' },
          { label: 'Published case studies', status: 'None yet', note: 'None are published. The alternative — publishing “selected programs” without the permission gate — is the trust failure this website is designed to avoid.' },
        ],
      },
      { t: 'h2', title: 'The format a published case study follows' },
      {
        t: 'table',
        head: ['Section', 'Content', 'Source'],
        rows: [
          ['Program context', 'Buyer type (named or anonymous by approval), garment category, program scale', 'Buyer-approved brief summary'],
          ['The problem', 'The function, compliance or delivery requirement that drove the brief', 'Order file'],
          ['The options', 'The mill-matched shortlist, the specification comparison, the decision', 'Order file'],
          ['The gates', 'The inline findings and the pre-shipment verification result', 'Findings log; verification report'],
          ['The outcome', 'The measurable result: specification held, delivery against plan, repeat behaviour', 'Order file'],
          ['The quote', 'The buyer’s words, attributable, with approval date', 'Buyer permission record'],
        ],
      },
      { t: 'h2', title: 'For buyers considering a case study' },
      {
        t: 'paras',
        body: [
          'Publishing a program outcome is a decision about your own name as much as ours — which is why the gate runs on your terms: the content is drafted from the order file, you approve every section, the naming is your call (named, initialled or anonymous), and the approval is dated and on record. Programs with confidential specifications are published in a redacted form that preserves the outcome without the specification. If the answer is no, the program simply is not published — and the case-study pipeline reflects that without apology.',
        ],
      },
      { t: 'cta', title: 'Consider your program for the pipeline', lead: 'If your program produced a result worth documenting, the Contact page reaches the team that runs the permission process.' },
    ],
    next: [
      ['Buyer Success Stories', 'The testimonial program, with its own gate.', '/resources/buyer-success-stories/'],
      ['Sourcing Process', 'The stages a case study documents.', '/services/sourcing-process/'],
      ['Quality Assurance', 'The gates the outcome runs through.', '/quality-compliance/quality-assurance/'],
    ],
  },
  {
    path: '/resources/buyer-success-stories/',
    title: 'Buyer Success Stories — Attributable, Approved, Dated | YOU LI',
    meta: 'The buyer story program: the standard for a published quote — attributable, with name and role, with approval and a date — and the pipeline status.',
    crumbs: [['Resources', FG], ['Buyer Success Stories']],
    hero: {
      eyebrow: 'Resources · Buyer Success Stories',
      title: 'Buyer stories that carry a name, an approval and a date',
      lead: 'A success story on this site is a quote with attribution and permission — not a logo wall, not an anonymous “a global buyer says.” This page states the standard and the pipeline status.',
    },
    sections: [
      { t: 'h2', title: 'The standard' },
      {
        t: 'cards',
        items: [
          { k: 'Attributable', v: 'Name, role and organization — or the approved anonymization (“a leading export house”). An unattributable quote is an unverifiable claim; it does not publish.' },
          { k: 'Approved in writing', v: 'The buyer approves the exact text and the attribution before publication. The approval is dated and held in the permission record.' },
          { k: 'Factually scoped', v: 'The quote describes the program it describes. A story that drifts from “our delivery was on time” to “they never miss a delivery” is edited back to the facts, with the buyer’s re-approval.' },
          { k: 'Current', v: 'A story carries its approval date and is reviewed against the relationship’s current state. A stale or superseded story is withdrawn, not buried.' },
        ],
      },
      { t: 'h2', title: 'Pipeline status' },
      {
        t: 'evidence',
        items: [
          { label: 'Published buyer stories', status: 'None yet', note: 'No buyer story is published on this site. The permission process is in place; the pipeline is populated from the order files as programs close and buyers consent.' },
          { label: 'Client name display', status: 'Buyer permission required', note: 'The supplied client list from company materials is held in the diligence register. No client name appears on this site until each relationship is confirmed and the publication is permissioned.' },
        ],
      },
      { t: 'h2', title: 'Why the standard is strict' },
      {
        t: 'paras',
        body: [
          'The competitive set this website exists to answer includes logo walls — rows of brand marks doing the work of evidence, several of them unverifiable, some of them stale. A logo wall is not proof of anything: it does not say which programs, which outcomes, or which relationships still exist. The standard above exists to make every story on this site checkable by the same five-field discipline the certification register runs: who, what, when, approved by, documented where.',
          'The practical consequence for a buyer evaluating the company: the absence of stories is itself information. A sourcing partner that publishes no unpermissioned stories has either no programs or a verification system. The order file, the quality reports and the sourcing register are the way to tell which — and the answer, for a partner that is working, is that the system is there and the permission process is simply running ahead of the publication.',
        ],
      },
      { t: 'h2', title: 'For current buyers' },
      {
        t: 'paras',
        body: [
          'If your program produced a result you would recognise in a short, factual paragraph — the specification held, the delivery against plan, the quality result at the gates — the permission process takes it from the order file. You approve the text, the attribution and the scope; the approval is dated; the story publishes with its permission record behind it. If the answer is no, nothing is published and nothing is implied. Either answer is the process working.',
        ],
      },
      { t: 'cta', title: 'Start a story from your order file', lead: 'The Contact page reaches the team that runs the permission process.' },
    ],
    next: [
      ['Case Studies', 'The program-outcome version of the same standard.', '/resources/case-studies/'],
      ['Why YOU LI', 'The four reasons the stories would be about.', '/about/why-youli/'],
      ['Quality Assurance', 'The gates that produce the facts.', '/quality-compliance/quality-assurance/'],
    ],
  },
];
