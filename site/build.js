#!/usr/bin/env node
/* YOU LI CHINA WORLD BANGLADESH — static site generator.
   Usage: node site/build.js  → writes public/
   Zero dependencies. */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'public');
const SITE = require('./content/site.js');
const CORE = require('./content/pages-core.js');
const PRODUCTS = [
  require('./content/products-woven.js'),
  require('./content/products-knit.js'),
  require('./content/products-denim.js'),
  require('./content/products-activewear.js'),
  require('./content/products-functional.js'),
  require('./content/products-yarns.js'),
];
const PAGES = [
  ...require('./content/pages-company.js'),
  ...require('./content/pages-quality.js'),
  ...require('./content/pages-services.js'),
  ...require('./content/pages-industries.js'),
  ...require('./content/pages-resources.js'),
  ...require('./content/pages-legal.js'),
];

const M = SITE.meta;
const URL = M.url;

/* ---------------- helpers ---------------- */
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pad = (n) => String(n).padStart(2, '0');

function pill(status) {
  if (!status || status === '—' || status === 'None') return '';
  const k = status.toLowerCase();
  let cls = 'pill-neutral';
  if (/verified document|certified$|compliance$|documented to/.test(k)) cls = 'pill-doc';
  else if (/statement/.test(k)) cls = 'pill-stmt';
  else if (/reference/.test(k)) cls = 'pill-ref';
  else if (/progress|verification|preparation|none yet|in progress/.test(k)) cls = 'pill-prog';
  else if (/permission/.test(k)) cls = 'pill-perm';
  else if (/not publicly/.test(k)) cls = 'pill-unv';
  else if (/test|verified per|buyer specification/.test(k)) cls = 'pill-test';
  return `<span class="pill ${cls}">${esc(status)}</span>`;
}

function crumbsHTML(crumbs) {
  if (!crumbs || !crumbs.length) return '';
  const items = crumbs.map(([label, href], i) =>
    i === crumbs.length - 1
      ? `<span class="crumb-cur" aria-current="page">${esc(label)}</span>`
      : `<a href="${esc(href)}">${esc(label)}</a>`
  ).join('<span class="crumb-sep" aria-hidden="true">/</span>');
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><div class="container"><a href="/">Home</a><span class="crumb-sep" aria-hidden="true">/</span>${items}</div></nav>`;
}

/* ---------------- header / nav ---------------- */
function megaGroupsHTML(groups) {
  return groups.map((g) => `
    <div class="mega-group">
      <a class="mega-head" href="${g.href}">${esc(g.heading)} <span class="mega-count">${g.items.length}</span></a>
      <ul class="mega-list">
        ${g.items.map(([label, href]) => `<li><a href="${href}">${esc(label)}</a></li>`).join('')}
      </ul>
    </div>`).join('');
}
function dropListHTML(items) {
  return `<div class="drop-list"><ul>${items.map(([label, href]) => `<li><a href="${href}">${esc(label)}</a></li>`).join('')}</ul></div>`;
}
function navHTML(activePath) {
  return SITE.nav.map((n, ni) => {
    const open = n.mega ? 'mega' : n.items ? 'has-drop' : '';
    const active = activePath === n.href ? ' is-active' : '';
    const alignR = n.items && ni >= SITE.nav.length - 3 ? ' align-r' : '';
    if (n.mega) {
      return `<div class="nav-item ${open}${active}">
        <button class="nav-btn" aria-expanded="false" aria-haspopup="true">${esc(n.label)}<span class="chev" aria-hidden="true"></span></button>
        <div class="mega-panel"><div class="container">${megaGroupsHTML(n.groups)}</div></div>
      </div>`;
    }
    if (n.items) {
      return `<div class="nav-item ${open}${active}${alignR}">
        <button class="nav-btn" aria-expanded="false" aria-haspopup="true">${esc(n.label)}<span class="chev" aria-hidden="true"></span></button>
        <div class="drop-panel"><div class="container drop-inner">${dropListHTML(n.items)}</div></div>
      </div>`;
    }
    return `<div class="nav-item plain${active}"><a class="nav-btn" href="${n.href}">${esc(n.label)}</a></div>`;
  }).join('');
}

function headerHTML(activePath = '') {
  return `
<header class="site-header" id="top">
  <div class="topbar">
    <div class="container topbar-inner">
      <p class="topbar-tag">${esc(M.tagline)}</p>
      <div class="topbar-right">
        <a href="mailto:${esc(SITE.contact.email)}">${esc(SITE.contact.email)}</a>
        <span class="topbar-sep" aria-hidden="true">·</span>
        <span>Dhaka</span><span class="topbar-sep" aria-hidden="true">/</span><span>Shanghai</span>
      </div>
    </div>
  </div>
  <div class="mainbar">
    <div class="container mainbar-inner">
      <a class="logo" href="/" aria-label="YOU LI home">
        <span class="logo-mark" aria-hidden="true">YL</span>
        <span class="logo-text"><strong>YOU&nbsp;LI</strong><small>CHINA WORLD BANGLADESH</small></span>
      </a>
      <nav class="main-nav" aria-label="Primary">${navHTML(activePath)}</nav>
      <div class="mainbar-actions">
        <a class="link-sample" href="/request-a-sample/">Request a Sample</a>
        <a class="btn btn-primary btn-quote" href="/request-a-quote/">Request a Quote</a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </div>
  <div class="mobile-nav" id="mobile-nav" hidden>
    ${SITE.nav.map((n) => {
      if (n.mega) {
        return `<details class="m-group"><summary>${esc(n.label)}</summary><div class="m-body">
          ${n.groups.map((g) => `<div class="m-sub"><a class="m-sub-head" href="${g.href}">${esc(g.heading)}</a><ul>${g.items.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul></div>`).join('')}
        </div></details>`;
      }
      if (n.items) {
        return `<details class="m-group"><summary>${esc(n.label)}</summary><div class="m-body"><ul class="m-list">${n.items.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul></div></details>`;
      }
      return `<a class="m-link" href="${n.href}">${esc(n.label)}</a>`;
    }).join('')}
    <div class="m-ctas"><a class="btn btn-primary" href="/request-a-quote/">Request a Quote</a><a class="btn btn-ghost" href="/request-a-sample/">Request a Sample</a></div>
  </div>
</header>`;
}

function footerHTML() {
  const c = SITE.contact;
  const col = (head, links, sub) => `
    <div class="f-col">
      <h4>${head}${sub ? `<small>${sub}</small>` : ''}</h4>
      <ul>${links.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul>
    </div>`;
  const prodLinks = [['Fabric Library', '/products/']];
  PRODUCTS.forEach((p) => prodLinks.push([p.name, `/products/${p.slug}/`]));
  const prodMega = SITE.nav.find((n) => n.label === 'Products');
  const svcLinks = SITE.nav.find((n) => n.label === 'Services').items;
  const coLinks = SITE.nav.find((n) => n.label === 'Company').items;
  const netLinks = SITE.nav.find((n) => n.label === 'Sourcing Network').items;
  const qLinks = SITE.nav.find((n) => n.label === 'Quality & Compliance').items;
  const indLinks = SITE.nav.find((n) => n.label === 'Industries').items;
  const resLinks = SITE.nav.find((n) => n.label === 'Resources').items;
  return `
<footer class="site-footer">
  <div class="container f-grid">
    <div class="f-brand">
      <a class="logo f-logo" href="/"><span class="logo-mark" aria-hidden="true">YL</span><span class="logo-text"><strong>YOU&nbsp;LI</strong><small>CHINA WORLD BANGLADESH</small></span></a>
      <p class="f-tag">${esc(M.tagline)}</p>
      <p class="f-cn">${M.chineseName} — fabric sourcing partner connecting Chinese mills with Bangladesh’s apparel industry.</p>
      <div class="f-ctas"><a class="btn btn-bronze" href="/request-a-quote/">Request a Fabric Match</a></div>
    </div>
    ${col('Products', prodLinks)}
    ${col('Services', svcLinks)}
    ${col('Company', coLinks)}
    <div class="f-col">
      <h4>Sourcing Network</h4>
      <ul>${netLinks.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul>
      <h4>Quality &amp; Compliance</h4>
      <ul>${qLinks.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul>
    </div>
    <div class="f-col">
      <h4>Industries</h4>
      <ul>${indLinks.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul>
      <h4>Resources</h4>
      <ul>${resLinks.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul>
    </div>
    <div class="f-col f-contact">
      <h4>Contact</h4>
      ${c.offices.map((o) => `<p class="f-office"><strong>${esc(o.name)}</strong><span>${esc(o.line1)}</span></p>`).join('')}
      <ul class="f-contact-list">
        <li><a href="mailto:${c.email}">${c.email}</a></li>
        <li><a href="tel:${c.phoneBd.replace(/[^+\d]/g, '')}">${c.phoneBd}</a></li>
        <li><a href="/contact/">All routes &amp; hours</a></li>
      </ul>
    </div>
  </div>
  <div class="f-bottom">
    <div class="container f-bottom-inner">
      <p>© 2026 ${esc(M.name)}. All rights reserved.</p>
      <div class="f-legal"><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="/cookies/">Cookies</a></div>
      <p class="f-note">Claims on this site carry evidence labels; see the <a href="/terms/">Terms</a> for the convention. Imagery is conceptual and does not depict real operations.</p>
    </div>
  </div>
</footer>
<div class="sticky-cta" aria-hidden="true"><div class="container sticky-inner"><span>Fabric brief ready? Get mill-matched options with evidence.</span><a class="btn btn-primary btn-sm" href="/request-a-quote/">Request a Fabric Match</a></div></div>`;
}

/* ---------------- schema ---------------- */
function orgSchema() {
  return {
    '@type': 'Organization',
    name: M.name,
    alternateName: M.chineseName,
    url: URL,
    email: SITE.contact.email,
    slogan: M.tagline,
    description: M.description,
  };
}
function schemaPage({ url, name, desc, crumbs, faq, extra = [] }) {
  const graph = [orgSchema()];
  if (crumbs && crumbs.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map(([label, href], i) => ({
        '@type': 'ListItem', position: i + 1, name: label, item: i === crumbs.length - 1 ? URL + url : URL + (href || '/'),
      })),
    });
  }
  graph.push({ '@type': 'WebPage', name, url: URL + url, description: desc });
  if (faq && faq.length) {
    graph.push({ '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
  }
  extra.forEach((e) => graph.push(e));
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
}

/* ---------------- layout ---------------- */
function layout({ url, title, meta, body, crumbs, activePath = '', headExtra = '', schemaExtra = [], faq = [], noSticky = false }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(meta)}">
<link rel="canonical" href="${URL}${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(M.short)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(meta)}">
<meta property="og:url" content="${URL}${url}">
<link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Manrope:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/style.css">
${schemaPage({ url, name: title, desc: meta, crumbs, faq, extra: schemaExtra })}
${headExtra}
</head>
<body>
${headerHTML(activePath)}
${crumbsHTML(crumbs)}
<main id="main">${body}</main>
${footerHTML()}
${noSticky ? '' : ''}
<script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

/* ---------------- block renderer ---------------- */
function block(s) {
  switch (s.t) {
    case 'note': return `<p class="callout-note">${s.text}</p>`;
    case 'paras': return `<div class="prose">${s.body.map((p) => `<p>${p}</p>`).join('')}</div>`;
    case 'cards': return `<div class="cards">${s.items.map((i) => `<div class="card"><h3>${esc(i.k)}</h3><p>${i.v}</p></div>`).join('')}</div>`;
    case 'table': return `<div class="table-wrap"><table><thead><tr>${s.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${s.rows.map((r) => `<tr>${r.map((c, i) => (i === r.length - 1 && r.length > 2 && (typeof c === 'string' && /statement|range|verified|progress|permission|unverified|reference|buyer|none|active|company|document|tested/i.test(c))) ? `<td>${pill(c) || esc(c)}</td>` : `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${s.note ? `<p class="table-note">${s.note}</p>` : ''}`;
    case 'steps': return `<ol class="steps">${s.items.map((i) => `<li><span class="step-n">${esc(i.n)}</span><div class="step-body"><h3>${esc(i.title)}</h3><p>${i.body}</p></div></li>`).join('')}</ol>`;
    case 'list': return `<ul class="checklist">${s.items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
    case 'quote': return `<blockquote>${s.text}${s.by ? `<cite>— ${esc(s.by)}</cite>` : ''}</blockquote>`;
    case 'split': return `<div class="split${s.flip ? ' flip' : ''}"><div class="split-media"><img src="${s.image}" alt="${esc(s.caption || s.title || '')}" loading="lazy"><span class="img-cap">${esc(s.caption || 'Conceptual imagery')}</span></div><div class="prose">${(s.body ? [s.body] : []).concat(s.paras || []).map((p) => `<p>${p}</p>`).join('')}</div></div>`;
    case 'evidence': return `<div class="evidence">${s.items.map((i) => `<div class="ev-row"><div class="ev-head"><span class="ev-label">${esc(i.label)}</span>${pill(i.status)}</div><p>${i.note}</p></div>`).join('')}</div>`;
    case 'cta': return `<div class="cta-band"><div class="container cta-inner"><div class="cta-copy"><h2>${esc(s.title || 'Start with a fabric brief')}</h2><p>${esc(s.lead || '')}</p></div><div class="cta-actions"><a class="btn btn-primary" href="/request-a-quote/">Request a Fabric Match</a><a class="btn btn-ghost" href="/contact/">Contact the team</a></div></div></div>`;
    case 'faq': return `<div class="faq">${s.items.map(([q, a]) => `<details class="faq-item"><summary>${esc(q)}<span class="faq-chev" aria-hidden="true"></span></summary><div class="faq-a"><p>${a}</p></div></details>`).join('')}</div>`;
    default: return '';
  }
}

function sectionsHTML(sections) {
  let idx = 0, html = '', open = false;
  const close = () => { if (open) { html += '</section>'; open = false; } };
  for (const s of sections) {
    if (s.t === 'h2') {
      close();
      idx += 1;
      html += `<section class="sec" id="${slugify(s.title)}"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">${pad(idx)}</span><h2>${esc(s.title)}</h2></div>${s.lead ? `<p class="sec-lead">${s.lead}</p>` : ''}</div>`;
      open = true;
    } else {
      html += `<div class="container sec-body">${block(s)}</div>`;
    }
  }
  close();
  return html;
}

function heroHTML(h, opts = {}) {
  const ctas = opts.ctas !== false;
  return `<section class="hero${h.image ? ' hero-media' : ''}">
    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="eyebrow">${esc(h.eyebrow)}</p>
        <h1>${esc(h.title)}</h1>
        <p class="lead">${esc(h.lead)}</p>
        ${ctas ? `<div class="hero-actions"><a class="btn btn-primary" href="/request-a-quote/">Request a Fabric Match</a><a class="btn btn-ghost" href="/products/">Browse the Fabric Library</a></div>` : ''}
      </div>
      ${h.image ? `<figure class="hero-media-fig"><img src="${h.image}" alt=""><span class="img-cap">Conceptual imagery — not a depiction of real operations</span></figure>` : ''}
    </div>
  </section>`;
}

function nextHTML(next) {
  if (!next) return '';
  return `<div class="container next-wrap"><p class="next-label">Continue</p><div class="next-grid">${next.map(([t, sub, h]) => `<a class="next-card" href="${h}"><span class="next-t">${esc(t)}</span><span class="next-s">${esc(sub)}</span><span class="next-arrow" aria-hidden="true">→</span></a>`).join('')}</div></div>`;
}

/* ---------------- generic page ---------------- */
function genericPage(p) {
  const body = heroHTML(p.hero) + sectionsHTML(p.sections) + nextHTML(p.next) + (p.sections.some((s) => s.t === 'cta') ? '' : '<div class="cta-band"><div class="container cta-inner"><div class="cta-copy"><h2>Start with a fabric brief</h2><p>Send the construction, the target spec and the program. Options come back with relationship types, MOQ and dated lead times.</p></div><div class="cta-actions"><a class="btn btn-primary" href="/request-a-quote/">Request a Fabric Match</a><a class="btn btn-ghost" href="/contact/">Contact</a></div></div></div>');
  const faq = p.sections.filter((s) => s.t === 'faq').flatMap((s) => s.items);
  return {
    html: layout({ url: p.path, title: p.title, meta: p.meta, body, crumbs: p.crumbs, activePath: p.path, schemaExtra: [], faq }),
  };
}

/* ---------------- product pages ---------------- */
function itemChips(item) {
  return (item.specs || []).slice(0, 3).map(([l, v]) => `<span class="chip"><b>${esc(l)}</b>${esc(v)}</span>`).join('');
}
function productCard(item, hub, { compare = true } = {}) {
  return `<article class="p-card" data-name="${esc(item.name).toLowerCase()}" data-cats="${esc(hub.slug)}" data-apps="${esc((item.applications || []).map((a) => a[0]).join('|').toLowerCase())}">
    <a class="p-card-media" href="/products/${hub.slug}/${item.slug}/"><img src="${hub.image}" alt="" loading="lazy"><span class="p-card-cat">${esc(hub.name)}</span></a>
    <div class="p-card-body">
      <h3 class="p-card-name"><a href="/products/${hub.slug}/${item.slug}/">${esc(item.name)}</a></h3>
      <p class="p-card-short">${esc(item.short)}</p>
      <div class="p-card-chips">${itemChips(item)}</div>
      <div class="p-card-foot">
        <span class="pill pill-stmt">Company statement</span>
        ${compare ? `<button class="cmp-toggle" data-slug="${esc(item.slug)}" data-name="${esc(item.name)}" aria-pressed="false">+ Compare</button>` : ''}
      </div>
      <div class="p-card-actions"><a class="p-link" href="/products/${hub.slug}/${item.slug}/">Full record →</a><a class="p-link" href="/request-a-quote/?products=${esc(item.slug)}">Request specification</a></div>
    </div>
  </article>`;
}

function productItemPage(hub, item) {
  const url = `/products/${hub.slug}/${item.slug}/`;
  const crumbs = [['Products', '/products/'], [hub.name, `/products/${hub.slug}/`], item.name];
  const related = (item.related || []).map((slug) => {
    const h2 = PRODUCTS.find((h) => (h.items || []).some((i) => i.slug === slug));
    if (!h2) return null;
    const i2 = h2.items.find((i) => i.slug === slug);
    return `<a class="rel-card" href="/products/${h2.slug}/${i2.slug}/"><span class="rel-cat">${esc(h2.name)}</span><span class="rel-name">${esc(i2.name)}</span><span class="rel-short">${esc(i2.short)}</span></a>`;
  }).filter(Boolean).join('');
  const perf = item.performance ? `<div class="container sec-body"><div class="perf-block"><p class="perf-claim">${item.performance.claim}</p><p class="perf-test"><b>Reference:</b> ${item.performance.test}</p><div class="perf-status">${pill(item.performance.status)}</div></div></div>` : '';
  const body = `
${heroHTML({ ...hub.hero, eyebrow: `Fabric Library · ${hub.name}`, title: item.name, lead: item.short }, { ctas: true })}
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">01</span><h2>Overview</h2></div></div><div class="container sec-body"><div class="prose">${item.intro.map((p) => `<p>${p}</p>`).join('')}</div></div></section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">02</span><h2>Specification</h2></div></div>
<div class="container sec-body"><div class="table-wrap"><table class="spec-table"><tbody>${item.specs.map(([l, v, st]) => `<tr><th>${esc(l)}</th><td>${esc(v)}</td><td>${pill(st) || '—'}</td></tr>`).join('')}</tbody></table></div><p class="table-note">Fields marked “Reference range” are indicative and confirmed per order; “Company statement” values derive from company materials. Unknown fields are requested, never estimated — select <em>Request specification</em> below.</p></div></section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">03</span><h2>Construction</h2></div></div><div class="container sec-body"><div class="prose"><p>${item.construction}</p></div></div></section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">04</span><h2>Applications</h2></div></div><div class="container sec-body"><div class="cards">${item.applications.map(([a, n]) => `<div class="card"><h3>${esc(a)}</h3><p>${n}</p></div>`).join('')}</div></div></section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">05</span><h2>Finishing options</h2></div></div><div class="container sec-body"><div class="tags">${item.finishes.map((f) => `<span class="tag">${esc(f)}</span>`).join('')}</div><p class="table-note">Finishes are confirmed per order and recorded in the order specification; functional finishes carry a test plan.</p></div></section>
${perf ? `<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">06</span><h2>Performance &amp; evidence</h2></div></div>${perf}</section>` : ''}
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">0${perf ? 7 : 6}</span><h2>Sourcing &amp; commercial terms</h2></div></div>
<div class="container sec-body"><ol class="steps compact">
<li><span class="step-n">1</span><div class="step-body"><h3>Mill matching</h3><p>Mills shortlisted by construction, fibre and finish capability — relationship type (direct, partner, cooperative) stated per option.</p></div></li>
<li><span class="step-n">2</span><div class="step-body"><h3>Sampling</h3><p>Lab dips and strike-offs against your references, with a written specification comparison for approval.</p></div></li>
<li><span class="step-n">3</span><div class="step-body"><h3>MOQ &amp; lead time</h3><p>Confirmed per construction, colour and source mill, with the basis stated per option — never a generic website number.</p></div></li>
<li><span class="step-n">4</span><div class="step-body"><h3>Delivery</h3><p>Import, customs coordination and local delivery from Uttara, Dhaka; responsibility per step in the order file.</p></div></li>
</ol></div></section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">0${perf ? 8 : 7}</span><h2>Quality gates for ${esc(item.name.toLowerCase())}</h2></div></div>
<div class="container sec-body"><div class="prose"><p>Every ${esc(item.name.toLowerCase())} program runs the two documented gates: <a href="/quality-compliance/inline-inspection/">inline inspection at the source mill</a> during production and <a href="/quality-compliance/pre-shipment-verification/">pre-shipment verification</a> before the container seals — both against the acceptance criteria you approve, both documented in the order file.</p></div><div class="gates-duo"><a class="gate-card" href="/quality-compliance/quality-assurance/"><span class="gate-n">Gate 1</span><strong>Inline inspection</strong><span class="gate-s">Findings log · escalation path</span></a><a class="gate-card" href="/quality-compliance/pre-shipment-verification/"><span class="gate-n">Gate 2</span><strong>Pre-shipment verification</strong><span class="gate-s">Verification report to you and your factory</span></a></div></div></section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">0${perf ? 9 : 8}</span><h2>Questions from the ${esc(hub.name.toLowerCase())} desk</h2></div></div><div class="container sec-body"><div class="faq">${hub.faq.slice(0, 4).map(([q, a]) => `<details class="faq-item"><summary>${esc(q)}<span class="faq-chev" aria-hidden="true"></span></summary><div class="faq-a"><p>${a}</p></div></details>`).join('')}</div></div></section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">0${perf ? 10 : 9}</span><h2>Related constructions</h2></div></div><div class="container sec-body"><div class="rel-grid">${related}</div></div></section>
<div class="cta-band"><div class="container cta-inner"><div class="cta-copy"><h2>Request a specification pack for ${esc(item.name)}</h2><p>Send the brief — mill-matched options return with relationship type, specification comparison, MOQ and dated lead time. Add up to three constructions to one request.</p></div><div class="cta-actions"><a class="btn btn-primary" href="/request-a-quote/?products=${esc(item.slug)}">Request a Fabric Match</a><a class="btn btn-ghost" href="/request-a-sample/?product=${esc(item.slug)}">Request a sample</a></div></div></div>`;
  return {
    html: layout({
      url, title: `${item.name} — ${hub.name} | YOU LI`, meta: `${item.short} Composition, weight, width, finish and application data with evidence status; mill matching, sampling and two-stage quality verification.`,
      body, crumbs, activePath: `/products/${hub.slug}/`,
      schemaExtra: [{ '@type': 'Product', name: `${item.name} (${hub.name})`, description: item.short, brand: { '@type': 'Brand', name: M.short }, url: URL + url }],
      faq: hub.faq.slice(0, 4),
    }),
  };
}

function productHubPage(hub) {
  const url = `/products/${hub.slug}/`;
  const body = `
${heroHTML(hub.hero)}
<section class="sec sec-paper"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">01</span><h2>In this category — ${hub.items.length} records</h2></div></div>
<div class="container sec-body"><div class="p-grid">${hub.items.map((i) => productCard(i, hub)).join('')}</div></div></section>
${sectionsHTML([
  { t: 'h2', title: 'Overview' }, { t: 'paras', body: hub.intro },
  { t: 'cards', items: hub.highlights.map((h) => ({ k: h.k, v: h.v })) },
  { t: 'h2', title: 'Why this category, through YOU LI' }, { t: 'cards', items: hub.why.map((w) => ({ k: w.title, v: w.body })) },
  { t: 'h2', title: 'Category specification (reference)' }, { t: 'table', head: ['Field', 'Typical value', 'Status'], rows: hub.specs },
  { t: 'h2', title: 'Applications' }, { t: 'cards', items: hub.applications.map(([a, n]) => ({ k: a, v: n })) },
  { t: 'h2', title: 'Sourcing' }, { t: 'paras', body: [hub.sourcing.body] }, { t: 'list', items: hub.sourcing.points },
  { t: 'h2', title: 'Quality gates' }, { t: 'paras', body: [`Every program in this category runs the two documented gates — <a href="/quality-compliance/inline-inspection/">inline inspection at the source mill</a> and <a href="/quality-compliance/pre-shipment-verification/">pre-shipment verification</a> — against acceptance criteria you approve, with the findings log and verification report delivered to you and your factory.`] },
  { t: 'h2', title: 'Frequently asked questions' }, { t: 'faq', items: hub.faq },
])}
${nextHTML([
  ['Fabric Library', 'All 36 records, filterable by category and application.', '/products/'],
  ['Sourcing Process', 'The six stages every record runs through.', '/services/sourcing-process/'],
  ['Quality Assurance', 'The two gates in full.', '/quality-compliance/quality-assurance/'],
])}
<div class="cta-band"><div class="container cta-inner"><div class="cta-copy"><h2>Request a ${esc(hub.name.toLowerCase())} brief</h2><p>Send the construction, target spec and program. Options return with relationship types, MOQ and dated lead times.</p></div><div class="cta-actions"><a class="btn btn-primary" href="/request-a-quote/?category=${esc(hub.slug)}">Request a Fabric Match</a><a class="btn btn-ghost" href="/contact/">Contact</a></div></div></div>`;
  return {
    html: layout({ url, title: `${hub.name} — Fabric Library | YOU LI`, meta: hub.hero.lead, body, crumbs: [['Products', '/products/'], hub.name], activePath: url, faq: hub.faq }),
  };
}

function libraryPage() {
  const data = [];
  PRODUCTS.forEach((h) => h.items.forEach((i) => {
    data.push({
      name: i.name, slug: i.slug, href: `/products/${h.slug}/${i.slug}/`,
      cat: h.slug, catName: h.name, catHref: `/products/${h.slug}/`, image: h.image, short: i.short,
      chips: (i.specs || []).slice(0, 3), apps: (i.applications || []).map((a) => a[0]),
    });
  }));
  const catOptions = PRODUCTS.map((h) => `<option value="${h.slug}">${esc(h.name)} (${h.items.length})</option>`).join('');
  const appSet = [...new Set(data.flatMap((d) => d.apps))].sort();
  const appOptions = appSet.map((a) => `<option value="${esc(a.toLowerCase())}">${esc(a)}</option>`).join('');
  const body = `
${heroHTML({ eyebrow: 'Fabric Library', title: 'The fabric and performance-material library', lead: `${data.length} records across woven, knit, denim, sportswear, functional-technical and performance yarns — filter by category and application, compare up to three, and send them together in one request. Every record carries its evidence status.` })}
<section class="sec sec-paper"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">01</span><h2>Browse by category</h2></div></div>
<div class="container sec-body"><div class="cat-grid">${PRODUCTS.map((h) => `<a class="cat-card" href="/products/${h.slug}/"><span class="cat-media"><img src="${h.image}" alt="" loading="lazy"></span><span class="cat-name">${esc(h.name)}</span><span class="cat-meta">${h.items.length} records · ${esc(h.highlights[1] ? h.highlights[1].v : '')}</span></a>`).join('')}</div></div></section>
<section class="sec" id="library"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">02</span><h2>All records</h2></div></div>
<div class="container sec-body">
  <div class="toolbar" role="search">
    <input type="search" id="lib-search" class="field" placeholder="Search by name, construction, fibre…" aria-label="Search the fabric library">
    <select id="lib-cat" class="field" aria-label="Filter by category"><option value="">All categories</option>${catOptions}</select>
    <select id="lib-app" class="field" aria-label="Filter by application"><option value="">All applications</option>${appOptions}</select>
    <button class="btn btn-ghost btn-sm" id="lib-reset" type="button">Reset</button>
    <span class="lib-count" id="lib-count" aria-live="polite">${data.length} records</span>
  </div>
  <div class="p-grid" id="lib-grid">${data.map((d) => productCard({ name: d.name, slug: d.slug, short: d.short, specs: d.chips, applications: d.apps.map((a) => [a, '']) }, { slug: d.cat, name: d.catName, image: d.image })).join('')}</div>
  <p class="table-note" id="lib-empty" hidden>No records match the current filters — <button class="linklike" id="lib-clear" type="button">clear them</button>.</p>
</div></section>
<section class="sec sec-paper"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">03</span><h2>How to read the evidence</h2></div></div>
<div class="container sec-body"><div class="evidence">
  <div class="ev-row"><div class="ev-head"><span class="ev-label">Verified document</span><span class="pill pill-doc">Verified document</span></div><p>The claim is backed by a document with issuer, scope and validity — published with the record.</p></div>
  <div class="ev-row"><div class="ev-head"><span class="ev-label">Company statement</span><span class="pill pill-stmt">Company statement</span></div><p>The claim comes from company materials; it is the working basis for the record and is tracked in the evidence register.</p></div>
  <div class="ev-row"><div class="ev-head"><span class="ev-label">Reference range</span><span class="pill pill-ref">Reference range</span></div><p>An indicative industry range. The program value is confirmed per order in the order specification.</p></div>
  <div class="ev-row"><div class="ev-head"><span class="ev-label">Verification in progress</span><span class="pill pill-prog">Verification in progress</span></div><p>The evidence process is running — documents requested, status tracked, state shown per record.</p></div>
</div><p class="table-note">Unknown fields are labeled “request specification,” never filled with an industry average.</p></div></section>
${nextHTML([['Fabric Guides', 'GSM, constructions, inspection and RFQ preparation.', '/resources/fabric-guides/'], ['Sourcing Process', 'From brief to delivery, with artifacts.', '/services/sourcing-process/'], ['Quality Assurance', 'The gates every record runs through.', '/quality-compliance/quality-assurance/']])}
<div class="cta-band"><div class="container cta-inner"><div class="cta-copy"><h2>Send your shortlist in one request</h2><p>Add up to three records to the comparison, then send them together — the brief, the files and the consent in one place.</p></div><div class="cta-actions"><a class="btn btn-primary" href="/request-a-quote/">Request a Fabric Match</a><a class="btn btn-ghost" href="/resources/fabric-guides/prepare-a-fabric-rfq/">How to prepare the brief</a></div></div></div>`;
  const headExtra = `<script>window.__LIB__=${JSON.stringify(data.map(({ chips, ...r }) => r))};</script>`;
  return { html: layout({ url: '/products/', title: 'Fabric & Performance-Material Library | YOU LI', meta: 'Searchable library of 36 fabric and yarn records across woven, knit, denim, sportswear, functional-technical and performance categories — with evidence status on every record.', body, crumbs: [[ 'Fabric Library', '/products/']], headExtra }) };
}

/* ---------------- home ---------------- */
function productCardLite(d) {
  return `<a class="feat-card" href="${d.href}"><span class="feat-media"><img src="${d.image}" alt="" loading="lazy"><span class="feat-cat">${esc(d.catName)}</span></span><span class="feat-body"><span class="feat-name">${esc(d.name)}</span><span class="feat-chips">${d.chips.map(([l, v]) => `<i><b>${esc(l)}</b>${esc(v)}</i>`).join('')}</span><span class="feat-cta">Full record →</span></span></a>`;
}

function homePage() {
  const h = CORE.home;
  const lib = [];
  PRODUCTS.forEach((p) => p.items.forEach((i) => lib.push({ name: i.name, slug: i.slug, href: `/products/${p.slug}/${i.slug}/`, cat: p.slug, catName: p.name, image: p.image, short: i.short, chips: (i.specs || []).slice(0, 2) })));
  const featured = ['poplin', 'interlock', 'regular', 'yoga', 'waterproof', 'coolmax'].map((s) => lib.find((d) => d.slug === s)).filter(Boolean);
  const body = `
<section class="hero hero-home">
  <div class="hero-home-media" aria-hidden="true"><img src="${h.hero.image}" alt=""></div>
  <div class="container hero-inner">
    <div class="hero-copy">
      <p class="eyebrow">${esc(h.hero.eyebrow)}</p>
      <h1>${esc(h.hero.title)}</h1>
      <p class="lead">${esc(h.hero.lead)}</p>
      <div class="hero-actions"><a class="btn btn-primary" href="/request-a-quote/">Request a Fabric Match</a><a class="btn btn-ghost" href="/products/">Browse the Fabric Library</a></div>
    </div>
  </div>
  <div class="proof-strip" role="list"><div class="container proof-inner">${h.proofStrip.map(([k, v, st]) => `<span class="proof-item" role="listitem"><b>${esc(k)}</b>${esc(v)}${pill(st)}</span>`).join('')}</div></div>
</section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">01</span><h2>Where you are coming from</h2></div></div>
<div class="container sec-body"><div class="path-grid">${h.buyerPaths.map((p) => `<a class="path-card" href="${p.href}"><span class="path-t">${esc(p.title)}</span><span class="path-s">${esc(p.body)}</span><span class="path-c">${esc(p.cta)} →</span></a>`).join('')}</div></div></section>
<section class="sec sec-paper"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">02</span><h2>The categories</h2></div></div>
<div class="container sec-body"><div class="cat-grid">${PRODUCTS.map((p) => `<a class="cat-card" href="/products/${p.slug}/"><span class="cat-media"><img src="${p.image}" alt="" loading="lazy"></span><span class="cat-name">${esc(p.name)}</span><span class="cat-meta">${p.items.length} records · ${esc(p.short)}</span></a>`).join('')}</div></div></section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">03</span><h2>Why YOU LI</h2></div></div>
<div class="container sec-body"><div class="why-grid">${h.why.map((w) => `<div class="why-card"><span class="why-n">${w.n}</span><h3>${esc(w.title)}</h3><p>${esc(w.body)}</p>${pill(w.status)}</div>`).join('')}</div></div></section>
<section class="sec sec-ink">
  <div class="container"><div class="sec-head light"><span class="sec-idx" aria-hidden="true">04</span><h2>The China-to-Bangladesh route</h2><p class="sec-lead">Six steps, a named owner per step, an artifact at each handoff. The route is the product.</p></div></div>
  <div class="container sec-body"><ol class="route-grid">${h.route.map((r) => `<li class="route-card"><span class="route-n">${r.n}</span><h3>${esc(r.title)}</h3><p class="route-owner">${esc(r.owner)}</p><p>${esc(r.body)}</p></li>`).join('')}</ol></div>
  <div class="container sec-body"><a class="link-ghost light" href="/services/sourcing-process/">The full process with artifacts →</a></div>
</section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">05</span><h2>Quality, as a process with documents</h2></div></div>
<div class="container sec-body"><div class="split">
  <div class="prose"><p>Two gates, both documented: <strong>inline inspection at the source mill</strong> while the fabric is being made, and <strong>pre-shipment verification</strong> before the container seals. Both run against acceptance criteria you approve; both produce reports you and your factory both hold.</p><p>There is no “zero defect” claim on this site — the process is the claim. The findings log and the verification report are the evidence, dated and in the order file.</p><p class="split-links"><a href="/quality-compliance/quality-assurance/">Quality Assurance →</a> <a href="/quality-compliance/certifications-compliance/">Certifications &amp; the evidence register →</a></p></div>
  <div class="split-media"><img src="/assets/img/inspection.jpg" alt="Quality inspector checking fabric under an inspection lamp — conceptual imagery"><span class="img-cap">Conceptual imagery — not a depiction of real operations</span></div>
</div></div></section>
<section class="sec sec-paper"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">06</span><h2>${esc(h.performanceMatrix.title)}</h2><p class="sec-lead">${esc(h.performanceMatrix.note)}</p></div></div>
<div class="container sec-body"><div class="table-wrap"><table><thead><tr>${h.performanceMatrix.head.map((x) => `<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${h.performanceMatrix.rows.map((r) => `<tr>${r.slice(0, 3).map((c) => `<td>${esc(c)}</td>`).join('')}<td>${pill(r[3])}</td></tr>`).join('')}</tbody></table></div></div></section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">07</span><h2>Sustainability, evidence-coded</h2></div></div>
<div class="container sec-body"><div class="state-grid">${h.sustainability.map((s) => `<div class="state-card"><h3>${esc(s.state)}</h3><p>${esc(s.body)}</p></div>`).join('')}</div><p class="split-links"><a href="/quality-compliance/sustainability/">The sustainability page →</a> <a href="/products/functional-technical/recycled/">Recycled fabric record →</a></p></div></section>
<section class="sec sec-paper"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">08</span><h2>Featured records from the library</h2></div></div>
<div class="container sec-body"><div class="feat-grid">${featured.map(productCardLite).join('')}</div><p class="split-links"><a href="/products/">Browse all ${lib.length} records →</a></p></div></section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">09</span><h2>How it works, in one screen</h2></div></div>
<div class="container sec-body"><div class="proc-strip">${['Brief', 'Match', 'Sample', 'Approve', 'Inspect', 'Deliver'].map((s, i) => `<a class="proc-step" href="/services/sourcing-process/"><span>${pad(i + 1)}</span>${s}</a>`).join('')}</div><p class="table-note">Each stage has a named owner and an artifact — the full process is on the <a href="/services/sourcing-process/">Sourcing Process</a> page.</p></div></section>
<section class="sec sec-paper"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">10</span><h2>Questions, answered directly</h2></div></div>
<div class="container sec-body"><div class="faq">${h.faq.map(([q, a]) => `<details class="faq-item"><summary>${esc(q)}<span class="faq-chev" aria-hidden="true"></span></summary><div class="faq-a"><p>${a}</p></div></details>`).join('')}</div></div></section>
<div class="cta-band cta-final"><div class="container cta-inner"><div class="cta-copy"><h2>The first answer you get is the evidence</h2><p>Send one construction or a reference sample. Options return with relationship types, specification comparisons, MOQ and dated lead times — and the quality plan for each.</p></div><div class="cta-actions"><a class="btn btn-primary" href="/request-a-quote/">Request a Fabric Match</a><a class="btn btn-ghost" href="/contact/">Or talk to the team</a></div></div></div>`;
  return { html: layout({ url: '/', title: h.title, meta: h.meta, body, activePath: '/', faq: h.faq, schemaExtra: [{ '@type': 'WebSite', name: M.name, url: URL, potentialAction: { '@type': 'SearchAction', target: URL + '/products/?q={search_term_string}', 'query-input': 'required name=search_term_string' } }] }) };
}

/* ---------------- RFQ / sample / contact ---------------- */
function formField({ id, label, type = 'text', req = false, placeholder = '', hint = '', opts = [], as = 'input' }) {
  const reqMark = req ? ' <span class="req" aria-hidden="true">*</span>' : '';
  const idFull = `f-${id}`;
  const common = `<label class="flabel" for="${idFull}">${esc(label)}${reqMark}${hint ? ` <span class="fhint">${esc(hint)}</span>` : ''}</label>`;
  if (as === 'textarea') return `${common}<textarea id="${idFull}" name="${id}" rows="4" ${req ? 'required' : ''} placeholder="${esc(placeholder)}"></textarea>`;
  if (as === 'select') return `${common}<div class="selwrap"><select id="${idFull}" name="${id}" ${req ? 'required' : ''}><option value="">Select…</option>${opts.map((o) => `<option value="${esc(o)}">${esc(o)}</option>`).join('')}</select></div>`;
  if (as === 'file') return `${common}<div class="filewrap"><input type="file" id="${idFull}" name="${id}" multiple><p class="fhint">PDF, images or spreadsheets — stated limits applied at launch.</p></div>`;
  if (as === 'check') return `<label class="checkline"><input type="checkbox" id="${idFull}" name="${id}" ${req ? 'required' : ''}><span>${esc(label)}${reqMark}</span></label>`;
  return `${common}<input class="field" type="${type}" id="${idFull}" name="${id}" ${req ? 'required' : ''} placeholder="${esc(placeholder)}" ${type === 'email' ? 'inputmode="email"' : ''}>`;
}

function rfqPage() {
  const h = CORE.rfq;
  const field = ({ id, label, type = 'text', req = false, placeholder = '', as = 'input' }) => {
    const reqMark = req ? ' <span class="req" aria-hidden="true">*</span>' : '';
    const labelHTML = '<label class="flabel" for="f-' + id + '">' + label + reqMark + '</label>';
    const control = as === 'textarea' ? '<textarea class="field" id="f-' + id + '" name="' + id + '" rows="4"' + (req ? ' required' : '') + ' placeholder="' + esc(placeholder) + '"></textarea>' : '<input class="field" type="' + type + '" id="f-' + id + '" name="' + id + '"' + (req ? ' required' : '') + ' placeholder="' + esc(placeholder) + '">';
    return '<div class="rfq-field">' + labelHTML + control + '</div>';
  };
  const select = (id, label, options, required = false) => {
    const req = required ? ' <span class="req" aria-hidden="true">*</span>' : '';
    return '<div class="rfq-field"><label class="flabel" for="f-' + id + '">' + label + req + '</label><div class="selwrap"><select class="field" id="f-' + id + '" name="' + id + '"' + (required ? ' required' : '') + '>' + options.map((o) => '<option value="' + esc(o) + '">' + esc(o) + '</option>').join('') + '</select></div></div>';
  };
  const side = '<aside class="rfq-aside"><div class="rfq-info"><span class="rfq-info-mark">i</span><div><h3>What happens after you submit</h3><p>Your inquiry is logged with a unique ID and routed by buyer location and product category. A named contact confirms what is known, what is missing, and the next evidence artifact.</p></div></div><div class="rfq-office-card"><p class="eyebrow">Prefer to talk directly?</p><h2>Contact an office</h2><p><strong>Bangladesh Office — Uttara, Dhaka</strong><br>Local execution, delivery coordination and inspection scheduling.</p><p><strong>China Office — Shanghai</strong><br>Mill matching, sampling and export documentation.</p></div><div class="rfq-ready"><p>Before you submit, have ready:</p><ul><li>Composition, construction and weight (if known)</li><li>Target quantity and delivery destination</li><li>Reference swatch, tech pack or product photo</li><li>Certification or compliance requirement</li></ul></div></aside>';
  const body = '<section class="hero"><div class="container hero-inner"><div class="hero-copy"><p class="eyebrow">Request a Quote</p><h1>Request a fabric match or quotation</h1><p class="lead">Two short steps — intent and technical brief — followed by a confirmation with a tracked inquiry ID. Mark any field “unknown” if you need guidance.</p></div></div></section><section class="sec rfq-reference"><div class="container"><div class="rfq-layout"><div class="rfq-shell"><div class="rfq-steps"><span class="rfq-step is-on" data-step="1">1. Intent &amp; Contact</span><span class="rfq-step" data-step="2">2. Technical Brief</span><span class="rfq-step" data-step="3">3. Confirm</span></div><form id="rfq" class="rfq-form" data-multi="1" novalidate><div class="rfq-panel" data-panel="1">' +
    select('inquiry_type', 'Inquiry type', ['General fabric sourcing inquiry','Product / category inquiry','Sample request','Specification request','Quotation request']) +
    select('buyer_type', 'Buyer type', ['Apparel brand','Garment exporter / factory','Buying house','Product development team','Other']) +
    field({ id: 'name', label: 'Full name', req: true, placeholder: 'Your full name' }) +
    field({ id: 'email', label: 'Work email', type: 'email', req: true, placeholder: 'you@company.com' }) +
    field({ id: 'company', label: 'Company', placeholder: 'Company / buying house' }) +
    field({ id: 'country', label: 'Country', placeholder: 'Country' }) +
    select('category', 'Product category', ['Woven fabrics','Knit fabrics','Denim fabrics','Sportswear & activewear','Functional & technical fabrics']) +
    field({ id: 'message', label: 'Message', as: 'textarea', req: true, placeholder: 'Briefly describe what you\'re looking to source, and any deadline.' }) +
    '<div class="form-actions"><button type="button" class="btn btn-primary" data-next="2">Continue →</button></div></div><div class="rfq-panel" data-panel="2" hidden><p class="rfq-panel-intro">Provide as much detail as you know. Leave any field blank or type “unknown” — the sourcing team will match your questions.</p>' +
    field({ id: 'composition', label: 'Composition / fibre', placeholder: 'e.g. 100% cotton, TC 65/35' }) +
    field({ id: 'gsm', label: 'Target GSM / oz', placeholder: 'e.g. 180 gsm' }) +
    field({ id: 'width', label: 'Width', placeholder: 'e.g. 58–60 in' }) +
    field({ id: 'finish', label: 'Finish / performance requirement', placeholder: 'e.g. water-repellent, brushed' }) +
    field({ id: 'quantity', label: 'Quantity', placeholder: 'e.g. 20,000 yards' }) +
    field({ id: 'destination', label: 'Delivery destination', placeholder: 'e.g. Chattogram / Dhaka' }) +
    field({ id: 'timeline', label: 'Target timeline', placeholder: 'e.g. bulk by Oct 2026' }) +
    field({ id: 'compliance', label: 'Certification / compliance requirement', placeholder: 'e.g. OEKO-TEX, GRS' }) +
    '<div class="filewrap rfq-upload"><label class="flabel" for="f-files">Attach a tech pack, reference photo or spec sheet</label><input type="file" id="f-files" name="files" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx"><p class="fhint">Drag a file here, or click to browse (PDF, JPG, PNG — max 15MB)</p></div><div class="form-actions"><button type="button" class="btn btn-ghost" data-prev="1">← Back</button><button type="button" class="btn btn-primary" data-next="3">Continue →</button></div></div><div class="rfq-panel" data-panel="3" hidden><div class="rfq-confirm"><p class="eyebrow">Final step</p><h2>Confirm your request</h2><p>We will use your brief to prepare a specification comparison, mill-matched options, and the next evidence artifact.</p></div>' +
    select('contact_pref', 'Preferred contact channel', ['Email','Phone','WhatsApp','No preference']) +
    '<label class="checkline"><input type="checkbox" id="f-consent" name="consent" required><span>I consent to YOU LI storing this inquiry to prepare and document my request, per the privacy policy. <span class="req">*</span></span></label><div class="form-actions"><button type="button" class="btn btn-ghost" data-prev="2">← Back</button><button type="submit" class="btn btn-primary">Submit inquiry</button></div><p class="fallback">Prefer to skip the form? <a href="mailto:' + SITE.contact.email + '">Email the team (' + SITE.contact.email + ')</a></p></div><div class="rfq-success" hidden><p class="success-eyebrow">Inquiry received</p><h3>Your inquiry ID: <span class="inq-id"></span></h3><p class="success-note">A confirmation has been prepared. A named contact will state what is known, what is missing, and the next evidence artifact.</p><div class="success-actions"><a class="btn btn-primary" href="/products/">Back to the library</a><a class="btn btn-ghost" href="/contact/">Contact</a></div></div></form></div>' + side + '</div></div></section>' +
    sectionsHTML([{ t: 'h2', title: 'How the response works' }, { t: 'steps', items: h.howItWorks }, { t: 'h2', title: 'FAQ' }, { t: 'faq', items: h.faq }]);
  return { html: layout({ url: '/request-a-quote/', title: 'Request a fabric match or quotation — YOU LI', meta: 'Two short steps to send a fabric sourcing brief, technical specification and request for quotation.', body, crumbs: [['Request a Quote', '/request-a-quote/']], faq: h.faq }) };
}

function samplePage() {
  const h = CORE.sample;
  const cats = PRODUCTS.map((p) => p.name);
  const body = `
${heroHTML(h.hero, { ctas: false })}
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">01</span><h2>Request samples</h2><p class="sec-lead">Lab dips, strike-offs and functional trials — the sampling step, requested through one form.</p></div></div>
<div class="container sec-body"><p class="prose-intro">${h.intro[0]}</p><p class="prose-intro">${h.intro[1]}</p></div></section>
<section class="sec sec-paper" id="sample-form"><div class="container"><div class="rfq-shell"><form id="sample" class="rfq-form" novalidate>
  <input type="hidden" name="source" id="sample-source" value="">
  <input type="hidden" name="product" id="sample-product" value="">
  ${formField({ id: 's_category', label: 'Category / construction', as: 'select', req: true, opts: cats })}
  ${formField({ id: 's_spec', label: 'Target specification', as: 'textarea', hint: 'or “need guidance”', placeholder: 'Composition, GSM, width, finish — as known' })}
  ${formField({ id: 's_reference', label: 'Reference (photo of sample / colour card)', as: 'file', hint: 'hand-feel travels in a physical sample; photos help' })}
  ${formField({ id: 's_stage', label: 'Development stage', as: 'select', opts: ['Concept / exploration', 'Development sampling', 'Pre-production', 'Repeat'] })}
  ${formField({ id: 's_quantity', label: 'Program quantity or stage volume', placeholder: 'e.g. 10,000 m / 3 development rounds' })}
  ${formField({ id: 's_destination', label: 'Destination', placeholder: 'Factory / lab, city and country' })}
  ${formField({ id: 's_name', label: 'Name', req: true })}
  ${formField({ id: 's_company', label: 'Company / organization' })}
  ${formField({ id: 's_email', label: 'Work email', type: 'email', req: true })}
  ${formField({ id: 's_notes', label: 'Notes', as: 'textarea', placeholder: 'Colour references, performance targets, decision date…' })}
  ${formField({ id: 's_consent', label: 'I consent to YOU LI storing this request to prepare the sample plan, per the privacy policy.', as: 'check', req: true })}
  <div class="form-actions"><button type="submit" class="btn btn-primary">Submit sample request</button></div>
  <p class="fallback">Prefer to skip the form? <a href="mailto:${SITE.contact.email}">Email the team (${SITE.contact.email})</a> with the brief — same workflow, same artifacts.</p>
  <div class="rfq-success" hidden>
    <p class="success-eyebrow">Request received</p>
    <h3>Your sample request ID: <span class="inq-id"></span></h3>
    <p class="success-note">The sample plan comes back with types, quantities, a dated lead time, and the specification comparison each sample will carry.</p>
    <div class="success-actions"><a class="btn btn-primary" href="/products/">Back to the library</a><a class="btn btn-ghost" href="/contact/">Contact</a></div>
  </div>
</form></div></div></section>
${sectionsHTML([{ t: 'h2', title: 'The sampling workflow' }, { t: 'steps', items: h.howItWorks }, { t: 'h2', title: 'FAQ' }, { t: 'faq', items: h.faq }])}
${nextHTML([['Product Development', 'Sampling inside the development loop.', '/services/product-development/'], ['Prepare a Fabric RFQ', 'The reference checklist.', '/resources/fabric-guides/prepare-a-fabric-rfq/'], ['Fabric Library', 'Pick the constructions to sample.', '/products/']])}`;
  return { html: layout({ url: '/request-a-sample/', title: h.title, meta: h.meta, body, crumbs: [['Request a Sample', '/request-a-sample/']], faq: h.faq }) };
}

function contactPage() {
  const h = CORE.contact;
  const c = SITE.contact;
  const body = `
${heroHTML(h.hero, { ctas: false })}
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">01</span><h2>Offices &amp; routing</h2></div></div>
<div class="container sec-body"><div class="office-grid">
${c.offices.map((o) => `<div class="office-card"><h3>${esc(o.name)}</h3><p class="office-role">${esc(o.role)}</p><p class="office-addr">${esc(o.line1)} <span class="pill pill-stmt">${esc(o.status)}</span></p><p class="office-hours">${esc(o.hours)}</p></div>`).join('')}
</div><p class="callout-note">${esc(c.note)}</p></div></section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">02</span><h2>How routing works</h2></div></div>
<div class="container sec-body"><div class="prose">${h.intro.map((p) => `<p>${p}</p>`).join('')}</div></div></section>
<section class="sec sec-paper"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">03</span><h2>Send a message</h2></div></div>
<div class="container sec-body"><div class="rfq-shell"><form id="contact" class="rfq-form" novalidate>
  ${formField({ id: 'c_name', label: 'Name', req: true })}
  ${formField({ id: 'c_email', label: 'Work email', type: 'email', req: true })}
  ${formField({ id: 'c_company', label: 'Company / organization' })}
  ${formField({ id: 'c_route', label: 'Route to', as: 'select', opts: ['Dhaka office (local / delivery)', 'Shanghai office (sourcing / sampling)', 'Either — route it'] })}
  ${formField({ id: 'c_message', label: 'Message', as: 'textarea', req: true, placeholder: 'The question, the introduction, the first conversation…' })}
  ${formField({ id: 'c_consent', label: 'I consent to YOU LI storing this message to respond, per the privacy policy.', as: 'check', req: true })}
  <div class="form-actions"><button type="submit" class="btn btn-primary">Send message</button></div>
  <div class="rfq-success" hidden><p class="success-eyebrow">Message received</p><h3>Reference: <span class="inq-id"></span></h3><p class="success-note">Messages queue to the next business day of the routed office: Sunday–Thursday in Dhaka, Monday–Saturday in Shanghai.</p><div class="success-actions"><a class="btn btn-primary" href="/">Back home</a></div></div>
</form></div></div></section>
<section class="sec"><div class="container"><div class="sec-head"><span class="sec-idx" aria-hidden="true">04</span><h2>Direct channels</h2></div></div>
<div class="container sec-body"><div class="table-wrap"><table><thead><tr><th>Channel</th><th>Detail</th><th>Routing</th></tr></thead><tbody>
<tr><td>Email (primary)</td><td><a href="mailto:${c.email}">${c.email}</a></td><td>All inquiries; routed by location and category</td></tr>
<tr><td>Email (general)</td><td><a href="mailto:${c.emailAlt}">${c.emailAlt}</a></td><td>Company and press</td></tr>
<tr><td>Dhaka phone</td><td><a href="tel:${c.phoneBd.replace(/[^+\d]/g, '')}">${c.phoneBd}</a></td><td>Local delivery &amp; factory coordination</td></tr>
<tr><td>Shanghai phone</td><td><a href="tel:${c.phoneCn.replace(/[^+\d]/g, '')}">${c.phoneCn}</a></td><td>Sourcing &amp; sampling</td></tr>
</tbody></table></div><p class="table-note">Phone values are launch-draft placeholders pending final verification — see the note above.</p></div></section>
${sectionsHTML([{ t: 'h2', title: 'FAQ' }, { t: 'faq', items: h.faq }])}
${nextHTML([['Request a Quote', 'The structured brief path.', '/request-a-quote/'], ['Request a Sample', 'The sampling path.', '/request-a-sample/'], ['Team', 'How inquiries are routed and owned.', '/about/team/']])}`;
  return { html: layout({ url: '/contact/', title: h.title, meta: h.meta, body, crumbs: [['Contact', '/contact/']], faq: h.faq }) };
}

/* ---------------- 404 ---------------- */
function page404() {
  const body = `<section class="hero"><div class="container hero-inner"><div class="hero-copy"><p class="eyebrow">404</p><h1>This page is not in the library</h1><p class="lead">The address may have changed. The fabric, however, is in the library.</p><div class="hero-actions"><a class="btn btn-primary" href="/">Back to the home page</a><a class="btn btn-ghost" href="/products/">Browse the Fabric Library</a></div></div></div></section>`;
  return { html: layout({ url: '/404.html', title: 'Page not found | YOU LI', meta: 'Page not found.', body, noIndex: true }) };
}

/* ---------------- build ---------------- */
function cleanPath(p) { return p.replace(/\/$/, ''); }
function writePage(relPath, html) {
  const dir = path.join(OUT, relPath === '/' ? '' : cleanPath(relPath));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

function main() {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  const counts = { pages: 0 };
  const sitemapUrls = [];

  writePage('/', homePage().html); counts.pages += 1; sitemapUrls.push({ u: '/', d: M.updated });
  writePage('/products/', libraryPage().html); counts.pages += 1; sitemapUrls.push({ u: '/products/', d: M.updated });

  PRODUCTS.forEach((hub) => {
    writePage(`/products/${hub.slug}/`, productHubPage(hub).html); counts.pages += 1; sitemapUrls.push({ u: `/products/${hub.slug}/`, d: M.updated });
    hub.items.forEach((item) => {
      writePage(`/products/${hub.slug}/${item.slug}/`, productItemPage(hub, item).html); counts.pages += 1; sitemapUrls.push({ u: `/products/${hub.slug}/${item.slug}/`, d: M.updated });
    });
  });

  PAGES.forEach((p) => { writePage(p.path, genericPage(p).html); counts.pages += 1; sitemapUrls.push({ u: p.path, d: M.updated }); });

  writePage('/request-a-quote/', rfqPage().html); counts.pages += 1; sitemapUrls.push({ u: '/request-a-quote/', d: M.updated });
  writePage('/request-a-sample/', samplePage().html); counts.pages += 1; sitemapUrls.push({ u: '/request-a-sample/', d: M.updated });
  writePage('/contact/', contactPage().html); counts.pages += 1; sitemapUrls.push({ u: '/contact/', d: M.updated });

  // 404
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, '404.html'), page404().html); counts.pages += 1;

  // assets
  const assetsSrc = path.join(__dirname, 'assets');
  fs.cpSync(assetsSrc, path.join(OUT, 'assets'), { recursive: true });

  // sitemap + robots
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((s) => `  <url><loc>${URL}${s.u}</loc><lastmod>${s.d}</lastmod></url>`).join('\n')}\n</urlset>\n`;
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${URL}/sitemap.xml\n`);

  console.log(`Built ${counts.pages} pages → ${OUT}`);
}

main();
