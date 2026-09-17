import { useEffect, useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import Home from "./pages/Home";
import "./index.css";

const navGroups = [
  {
    label: "Products",
    href: "/products/",
    mega: true,
    groups: [
      { heading: "Woven Fabrics", href: "/products/woven-fabrics/", items: ["Poplin", "Twill", "Canvas", "Corduroy", "Satin", "Ripstop", "Dobby", "Yarn-Dyed", "Cotton · TC · CVC · Polyester"] },
      { heading: "Knit Fabrics", href: "/products/knit-fabrics/", items: ["Single Jersey", "Rib", "Interlock", "Velour", "Fleece", "Sherpa", "Jacquard Knit"] },
      { heading: "Denim Fabrics", href: "/products/denim-fabrics/", items: ["Regular Denim", "Slub Denim", "Cross-Hatch Denim", "Ring-Spun Denim", "Coated Denim"] },
      { heading: "Sportswear & Activewear", href: "/products/sportswear-activewear/", items: ["Yoga Fabric", "Swimwear Fabric", "Activewear Fabric", "Functional Stretch"] },
      { heading: "Functional & Technical", href: "/products/functional-technical/", items: ["Antibacterial", "Waterproof", "Fireproof / FR", "High-Strength", "Recycled"] },
      { heading: "Performance Yarns", href: "/products/performance-yarns/", items: ["Coolmax® Type", "Antibacterial Yarn", "Waterproof Yarn", "Fireproof Yarn", "High-Strength Yarn", "Super-Soft Yarn"] },
    ],
  },
  { label: "Services", items: [["Fabric Sourcing", "/services/fabric-sourcing/"], ["Yarn Sourcing", "/services/yarn-sourcing/"], ["Product Development", "/services/product-development/"], ["Import & Distribution", "/services/import-distribution/"], ["Sourcing Process", "/services/sourcing-process/"], ["Technical Support", "/services/technical-support/"]] },
  { label: "Company", items: [["Company Overview", "/about/company-overview/"], ["Our Story", "/about/our-story/"], ["Why YOU LI", "/about/why-youli/"], ["Team", "/about/team/"], ["Bangladesh Office", "/about/offices/bangladesh/"], ["China Office", "/about/offices/china/"]] },
  { label: "Sourcing Network", items: [["China", "/sourcing-network/china/"], ["Asia", "/sourcing-network/asia/"], ["Europe", "/sourcing-network/europe/"], ["Planned Regions", "/sourcing-network/planned-regions/"]] },
  { label: "Quality & Compliance", items: [["Quality Assurance", "/quality-compliance/quality-assurance/"], ["Inline Inspection", "/quality-compliance/inline-inspection/"], ["Pre-Shipment Verification", "/quality-compliance/pre-shipment-verification/"], ["Certifications & Compliance", "/quality-compliance/certifications-compliance/"], ["Sustainability", "/quality-compliance/sustainability/"]] },
  { label: "Industries", items: [["Apparel Brands", "/industries/apparel-brands/"], ["Garment Exporters", "/industries/garment-exporters/"], ["Buying Houses", "/industries/buying-houses/"], ["Product Development Teams", "/industries/product-development-teams/"]] },
  { label: "Resources", items: [["Fabric Guides", "/resources/fabric-guides/"], ["Textile Insights", "/resources/textile-insights/"], ["Quality & Compliance Guides", "/resources/quality-compliance-guides/"], ["FAQ", "/resources/faq/"], ["Case Studies", "/resources/case-studies/"], ["Buyer Success Stories", "/resources/buyer-success-stories/"]] },
];

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/img/${name}`;
const img = {
  hero: asset("hero.jpg"),
  rolls: asset("rolls.jpg"),
  woven: asset("woven.jpg"),
  knit: asset("knit.jpg"),
  denim: asset("denim.jpg"),
  activewear: asset("activewear.jpg"),
  functional: asset("functional.jpg"),
  yarns: asset("yarns.jpg"),
  inspection: asset("inspection.jpg"),
  office: asset("office.jpg"),
};

function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const close = () => { setOpen(null); setMobile(false); document.body.style.overflow = ""; };
  const toggleMobile = () => { setMobile(!mobile); document.body.style.overflow = mobile ? "" : "hidden"; };
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="topbar"><div className="container topbar-inner"><p>SUPPLYING QUALITY — BUILDING TRUST — DELIVERING VALUE</p><div><a href="mailto:sales@youlichina.com">sales@youlichina.com</a><span>·</span><span>Dhaka</span><span>/</span><span>Shanghai</span></div></div></div>
    <div className="mainbar"><div className="container mainbar-inner">
      <Link href="/" className="logo" onClick={close}><span className="logo-mark">YL</span><span className="logo-text"><strong>YOU LI</strong><small>CHINA WORLD BANGLADESH</small></span></Link>
      <nav className="main-nav" aria-label="Primary">
        {navGroups.map((n, i) => n.mega ? <div key={n.label} className={`nav-item mega ${open === n.label ? "open" : ""}`}>
          <button className="nav-btn" onClick={() => setOpen(open === n.label ? null : n.label)} aria-expanded={open === n.label}>{n.label}<span className="chev" /></button>
          <div className="mega-panel"><div className="container mega-grid">{n.groups.map(g => <div className="mega-group" key={g.heading}><Link className="mega-head" href={g.href} onClick={close}>{g.heading}<span>{g.items.length}</span></Link><ul>{g.items.map(item => <li key={item}><Link href={`${g.href}${item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}/`} onClick={close}>{item}</Link></li>)}</ul></div>)}</div></div>
        </div> : <div key={n.label} className={`nav-item has-drop ${open === n.label ? "open" : ""}`}>
          <button className="nav-btn" onClick={() => setOpen(open === n.label ? null : n.label)} aria-expanded={open === n.label}>{n.label}<span className="chev" /></button>
          <div className="drop-panel"><div className="drop-inner"><ul>{(n.items as string[][]).map(([label, href]) => <li key={label}><Link href={href} onClick={close}>{label}</Link></li>)}</ul></div></div>
        </div>)}
        <div className="nav-item"><Link className="nav-btn" href="/contact/" onClick={close}>Contact</Link></div>
      </nav>
      <div className="mainbar-actions"><Link className="link-sample" href="/request-a-sample/" onClick={close}>Request a Sample</Link><Link className="btn btn-primary btn-quote" href="/request-a-quote/" onClick={close}>Request a Quote</Link><button className="nav-toggle" aria-expanded={mobile} onClick={toggleMobile} aria-label="Menu"><span /><span /><span /></button></div>
    </div></div>
    {mobile && <div className="mobile-nav">{navGroups.map(n => n.mega ? <details className="m-group" key={n.label}><summary>{n.label}</summary><div className="m-body">{n.groups.map(g => <div className="m-sub" key={g.heading}><Link className="m-sub-head" href={g.href} onClick={close}>{g.heading}</Link>{g.items.map(item => <Link key={item} href={`${g.href}${item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}/`} onClick={close}>{item}</Link>)}</div>)}</div></details> : <details className="m-group" key={n.label}><summary>{n.label}</summary><div className="m-body">{(n.items as string[][]).map(([label, href]) => <Link key={label} href={href} onClick={close}>{label}</Link>)}</div></details>)}<Link className="m-link" href="/contact/" onClick={close}>Contact</Link><div className="m-ctas"><Link className="btn btn-primary" href="/request-a-quote/" onClick={close}>Request a Quote</Link><Link className="btn btn-ghost" href="/request-a-sample/" onClick={close}>Request a Sample</Link></div></div>}
  </header>;
}

const footerGroups = [
  ["Products", [["Fabric Library", "/products/"], ["Woven Fabrics", "/products/woven-fabrics/"], ["Knit Fabrics", "/products/knit-fabrics/"], ["Denim Fabrics", "/products/denim-fabrics/"], ["Activewear", "/products/sportswear-activewear/"], ["Functional", "/products/functional-technical/"]]],
  ["Services", navGroups[1].items as string[][]],
  ["Company", navGroups[2].items as string[][]],
];
function Footer() { return <><footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><Link className="logo" href="/"><span className="logo-mark">YL</span><span className="logo-text"><strong>YOU LI</strong><small>CHINA WORLD BANGLADESH</small></span></Link><p>China-connected fabric sourcing for Bangladesh apparel.</p><p className="f-cn">尤利中制品有限公司 — fabric sourcing partner connecting Chinese mills with Bangladesh's apparel industry.</p><Link className="btn btn-bronze" href="/request-a-quote/">Request a Fabric Match</Link></div>{footerGroups.map(([head, links]) => <div className="f-col" key={head as string}><h4>{head as string}</h4><ul>{(links as string[][]).map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul></div>)}<div className="f-col"><h4>Sourcing Network</h4><ul>{(navGroups[3].items as string[][]).map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul><h4>Quality & Compliance</h4><ul>{(navGroups[4].items as string[][]).map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul></div><div className="f-col"><h4>Industries</h4><ul>{(navGroups[5].items as string[][]).map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul><h4>Resources</h4><ul>{(navGroups[6].items as string[][]).map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul></div><div className="f-col f-contact"><h4>Contact</h4><p><strong>Bangladesh — Dhaka (Uttara)</strong><span>Uttara, Dhaka 1230, Bangladesh</span></p><p><strong>China — Shanghai</strong><span>Shanghai, People's Republic of China</span></p><a href="mailto:sales@youlichina.com">sales@youlichina.com</a><a href="tel:+8801711000000">+880 1711-000-000</a></div></div><div className="f-bottom"><div className="container f-bottom-inner"><span>© 2026 YOU LI CHINA WORLD BANGLADESH. All rights reserved.</span><span><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link><Link href="/cookies/">Cookies</Link></span><span>Claims carry evidence labels. Imagery is conceptual.</span></div></div></footer><div className="sticky-cta"><div className="container sticky-inner"><span>Fabric brief ready? Get mill-matched options with evidence.</span><Link className="btn btn-primary btn-sm" href="/request-a-quote/">Request a Fabric Match</Link></div></div></>; }

function Shell({ children }: { children: React.ReactNode }) { return <><Header /><main id="main">{children}</main><Footer /></>; }

const pageCopy: Record<string, { eyebrow: string; title: string; lead: string; image?: string }> = {
  "/about/company-overview/": { eyebrow: "Company", title: "A sourcing partner built around evidence", lead: "YOU LI connects Chinese mill capability with Bangladesh apparel execution through a disciplined, specification-led route.", image: img.office },
  "/about/our-story/": { eyebrow: "Company", title: "A China-to-Bangladesh route, made legible", lead: "Our operating idea is simple: make the route, the relationship, and the evidence visible at every handoff.", image: img.hero },
  "/about/why-youli/": { eyebrow: "Company", title: "Precision is the service", lead: "From first brief to local delivery, YOU LI replaces sourcing ambiguity with comparison-ready options and documented gates.", image: img.inspection },
  "/sourcing-network/china/": { eyebrow: "Sourcing Network", title: "China-connected by construction", lead: "We match woven, knit, denim, technical and yarn requirements to mill capability across China's active production regions.", image: img.rolls },
  "/quality-compliance/quality-assurance/": { eyebrow: "Quality & Compliance", title: "Quality, as a process with documents", lead: "Two gates: inline inspection at the source mill and pre-shipment verification before the container seals.", image: img.inspection },
  "/services/sourcing-process/": { eyebrow: "Services", title: "Six steps. A named owner at every handoff.", lead: "The sourcing route is the product: brief, match, sample, approve, verify, deliver.", image: img.hero },
};

function PageHero({ eyebrow, title, lead, image }: { eyebrow: string; title: string; lead: string; image?: string }) { return <section className="inner-hero"><div className="container inner-hero-grid"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{lead}</p><div className="hero-actions"><Link className="btn btn-primary" href="/request-a-quote/">Request a Fabric Match</Link><Link className="btn btn-ghost" href="/products/">Browse the Fabric Library</Link></div></div>{image && <figure className="inner-hero-media"><img src={image} alt="Conceptual textile imagery" /><figcaption>Conceptual imagery — not a depiction of real operations</figcaption></figure>}</div></section>; }

function FormPage({ kind }: { kind: "quote" | "sample" | "contact" }) { const [sent, setSent] = useState(false); const title = kind === "quote" ? "Request a Fabric Match" : kind === "sample" ? "Request a Sample" : "Talk to the team"; return <><PageHero eyebrow="Conversion" title={title} lead="Share the brief you have. Anything you do not know can be marked ‘need guidance’ — that is what we are for." image={img.office} /><section className="sec"><div className="container form-layout"><div className="form-intro"><span className="sec-idx">01</span><h2>{kind === "quote" ? "Tell us what you are trying to make" : "A clear next step"}</h2><p>We return comparison-ready options with construction, composition, weight, width, finish, MOQ, dated lead time and the evidence status for each claim.</p><div className="callout-note">Placeholder contact details are launch-draft values pending final verification and publication consent.</div></div>{sent ? <div className="success-card"><span className="success-mark">✓</span><p className="eyebrow">Received</p><h2>Your brief is in the route</h2><p>Reference <strong>YL-2026-DEMO</strong>. A member of the team will review the details and respond with the next artifact.</p><Link className="btn btn-primary" href="/">Return home</Link></div> : <form className="brief-form" onSubmit={e => { e.preventDefault(); setSent(true); }}><label>Full name<input required placeholder="Your name" /></label><label>Work email<input required type="email" placeholder="you@company.com" /></label><label>Company<input placeholder="Company or brand" /></label>{kind !== "contact" && <><label>Material or product need<select defaultValue=""><option value="" disabled>Select a category</option><option>Woven Fabrics</option><option>Knit Fabrics</option><option>Denim Fabrics</option><option>Sportswear & Activewear</option><option>Functional & Technical</option><option>Performance Yarns</option></select></label><label>Brief or specification<textarea required rows={5} placeholder="Construction, composition, GSM, width, finish, quantity, destination and timeline — or just tell us what you know." /></label></>}<label>Message<textarea rows={4} placeholder="Anything else we should know?" /></label><button className="btn btn-primary" type="submit">Send the brief <span>→</span></button></form>}</div></section></>; }

function GenericPage() { const [location] = useLocation(); if (location.startsWith("/request-a-quote")) return <FormPage kind="quote" />; if (location.startsWith("/request-a-sample")) return <FormPage kind="sample" />; if (location.startsWith("/contact")) return <FormPage kind="contact" />; if (location === "/products/" || location.startsWith("/products/")) return <LibraryPage />; const copy = pageCopy[location] || { eyebrow: location.includes("resources") ? "Resources" : location.includes("industries") ? "Industries" : "YOU LI", title: "Fabric sourcing with a clear handoff", lead: "Specification-led sourcing, buyer-facing quality checks and delivery coordination from China to Bangladesh.", image: img.woven }; return <PageHero {...copy} />; }

function LibraryPage() { const cats = [{ name: "Woven Fabrics", image: img.woven, count: "9 records", href: "/products/woven-fabrics/" }, { name: "Knit Fabrics", image: img.knit, count: "7 records", href: "/products/knit-fabrics/" }, { name: "Denim Fabrics", image: img.denim, count: "5 records", href: "/products/denim-fabrics/" }, { name: "Sportswear & Activewear", image: img.activewear, count: "4 records", href: "/products/sportswear-activewear/" }, { name: "Functional & Technical", image: img.functional, count: "5 records", href: "/products/functional-technical/" }, { name: "Performance Yarns", image: img.yarns, count: "6 records", href: "/products/performance-yarns/" }]; return <><PageHero eyebrow="Fabric Library" title="Material options, organized for a real brief" lead="Browse woven, knit, denim, activewear, functional and yarn systems. Every record is written as a starting point for comparison and verification." image={img.rolls} /><section className="sec sec-paper"><div className="container"><div className="sec-head"><span className="sec-idx">01</span><h2>Six material families</h2></div><div className="cat-grid">{cats.map(c => <Link className="cat-card" href={c.href} key={c.name}><span className="cat-media"><img src={c.image} alt="" /></span><span className="cat-name">{c.name}</span><span className="cat-meta">{c.count} · Specification-led options with evidence status, application notes and a clear next step.</span></Link>)}</div></div></section><section className="sec"><div className="container"><div className="sec-head"><span className="sec-idx">02</span><h2>Need a starting point?</h2></div><div className="cta-inline"><p>Send one construction, one reference sample or simply describe the application. We will return the route.</p><Link className="btn btn-primary" href="/request-a-quote/">Request a Fabric Match</Link></div></div></section></>; }

function App() { return <Switch><Route path="/"><Shell><Home images={img} /></Shell></Route><Route><Shell><GenericPage /></Shell></Route></Switch>; }

export default App;
export { img };
