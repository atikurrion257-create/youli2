/* YOU LI — site behaviour: nav, library filter/compare, multi-step forms, reveal. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var scriptTag = document.querySelector('script[src*="assets/js/main.js"]');
  var basePath = scriptTag ? new URL(scriptTag.getAttribute('src'), window.location.href).pathname.replace(/assets\/js\/main\.js$/, '') : '';
  function siteUrl(path) { return basePath.replace(/\/$/, '') + path; }

  /* ---------- mobile nav ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var open = mobileNav.hasAttribute('hidden');
      if (open) mobileNav.removeAttribute('hidden'); else mobileNav.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        mobileNav.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---------- mega / drop panels: click + keyboard ---------- */
  document.querySelectorAll('.nav-item.mega, .nav-item.has-drop').forEach(function (item) {
    var btn = item.querySelector('.nav-btn');
    if (!btn || !btn.hasAttribute('aria-expanded')) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var wasOpen = item.classList.contains('open');
      closeAll();
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { item.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  });
  function closeAll() {
    document.querySelectorAll('.nav-item.open').forEach(function (i) {
      i.classList.remove('open');
      var b = i.querySelector('.nav-btn[aria-expanded]');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item')) closeAll();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });

  /* ---------- header shadow on scroll + sticky CTA ---------- */
  var header = document.querySelector('.site-header');
  var sticky = document.querySelector('.sticky-cta');
  var onScroll = function () {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
    if (sticky) sticky.classList.toggle('is-on', window.scrollY > 700 && !document.body.classList.contains('has-cmp'));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- reveal on scroll ---------- */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.sec, .cta-band, .next-wrap').forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  /* ---------- product library: filter + compare ---------- */
  var grid = document.getElementById('lib-grid');
  if (grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.p-card'));
    var search = document.getElementById('lib-search');
    var catSel = document.getElementById('lib-cat');
    var appSel = document.getElementById('lib-app');
    var count = document.getElementById('lib-count');
    var empty = document.getElementById('lib-empty');
    var resetBtn = document.getElementById('lib-reset');
    var clearBtn = document.getElementById('lib-clear');

    function applyFilters() {
      var q = (search.value || '').toLowerCase();
      var c = catSel.value;
      var a = appSel.value;
      var shown = 0;
      cards.forEach(function (card) {
        var ok = true;
        if (q) {
          var hay = (card.getAttribute('data-name') + ' ' + card.textContent).toLowerCase();
          ok = hay.indexOf(q) !== -1;
        }
        if (ok && c) ok = card.getAttribute('data-cats') === c;
        if (ok && a) ok = card.getAttribute('data-apps').split('|').indexOf(a) !== -1;
        card.style.display = ok ? '' : 'none';
        if (ok) shown += 1;
      });
      if (count) count.textContent = shown + ' record' + (shown === 1 ? '' : 's');
      if (empty) empty.hidden = shown !== 0;
    }
    [search, catSel, appSel].forEach(function (el) {
      if (el) el.addEventListener('input', applyFilters);
    });
    function resetFilters() {
      if (search) search.value = '';
      if (catSel) catSel.value = '';
      if (appSel) appSel.value = '';
      applyFilters();
    }
    if (resetBtn) resetBtn.addEventListener('click', resetFilters);
    if (clearBtn) clearBtn.addEventListener('click', resetFilters);

    /* compare (up to 3) */
    var CMP_KEY = 'youli_compare';
    var cmpBar = document.createElement('div');
    cmpBar.className = 'cmp-bar';
    cmpBar.innerHTML = '<div class="container cmp-inner"><strong style="font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--bronze-2)">Compare</strong><span class="cmp-items"></span><span class="cmp-actions"><button class="btn btn-ghost btn-sm" data-cmp-clear type="button">Clear</button><a class="btn btn-bronze btn-sm" data-cmp-rfq href="' + siteUrl('/request-a-quote/') + '">Send in one RFQ</a></span></div>';
    document.body.appendChild(cmpBar);
    var cmpItems = cmpBar.querySelector('.cmp-items');
    var cmpRfq = cmpBar.querySelector('[data-cmp-rfq]');

    function getCompare() {
      try { return JSON.parse(localStorage.getItem(CMP_KEY) || '[]'); } catch (e) { return []; }
    }
    function setCompare(list) {
      try { localStorage.setItem(CMP_KEY, JSON.stringify(list)); } catch (e) {}
      renderCompare(list);
    }
    function renderCompare(list) {
      cmpItems.innerHTML = '';
      list.forEach(function (s) {
        var chip = document.createElement('span');
        chip.className = 'cmp-chip';
        chip.textContent = s.name + ' ';
        var x = document.createElement('button');
        x.type = 'button';
        x.textContent = '×';
        x.setAttribute('aria-label', 'Remove ' + s.name + ' from comparison');
        x.addEventListener('click', function () { setCompare(getCompare().filter(function (i) { return i.slug !== s.slug; })); });
        chip.appendChild(x);
        cmpItems.appendChild(chip);
      });
      var on = list.length > 0;
      cmpBar.classList.toggle('is-on', on);
      document.body.classList.toggle('has-cmp', on);
      if (on) cmpRfq.setAttribute('href', siteUrl('/request-a-quote/?compare=' + list.map(function (i) { return i.slug; }).join(',')));
      else cmpRfq.setAttribute('href', siteUrl('/request-a-quote/'));
      document.querySelectorAll('.cmp-toggle').forEach(function (b) {
        b.setAttribute('aria-pressed', String(list.some(function (i) { return i.slug === b.getAttribute('data-slug'); })));
      });
    }
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.cmp-toggle');
      if (!btn) return;
      var list = getCompare();
      var slug = btn.getAttribute('data-slug');
      var name = btn.getAttribute('data-name');
      var idx = list.findIndex(function (i) { return i.slug === slug; });
      if (idx >= 0) list.splice(idx, 1);
      else {
        if (list.length >= 3) {
          var bar = cmpBar.querySelector('.cmp-inner');
          flash(bar, 'Up to three — remove one first.');
          return;
        }
        list.push({ slug: slug, name: name });
      }
      setCompare(list);
    });
    var cmpClear = cmpBar.querySelector('[data-cmp-clear]');
    if (cmpClear) cmpClear.addEventListener('click', function () { setCompare([]); });
    function flash(el, msg) {
      var old = el.dataset.flash || '';
      var s = document.createElement('span');
      s.style.cssText = 'font-family:var(--mono);font-size:11px;color:var(--bronze-2)';
      s.textContent = msg;
      el.appendChild(s);
      setTimeout(function () { s.remove(); }, 1800);
    }
    renderCompare(getCompare());
  }

  /* ---------- multi-step forms ---------- */
  document.querySelectorAll('form.rfq-form').forEach(function (form) {
    var panels = form.querySelectorAll('.rfq-panel');
    var steps = form.querySelectorAll('.rfq-step');
    var success = form.querySelector('.rfq-success');

    function goto(n) {
      panels.forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== String(n); });
      steps.forEach(function (s) {
        var sn = Number(s.getAttribute('data-step'));
        s.classList.toggle('is-on', sn === n);
        s.classList.toggle('is-done', sn < n);
      });
    }
    function validPanel(n) {
      var panel = form.querySelector('.rfq-panel[data-panel="' + n + '"]');
      if (!panel) return true;
      var fields = panel.querySelectorAll('[required]');
      var ok = true;
      fields.forEach(function (f) {
        var bad = !f.checkValidity();
        f.style.outline = bad ? '1.5px solid #B7791F' : '';
        if (bad) ok = false;
      });
      if (!ok) {
        var first = panel.querySelector('[required]:invalid');
        if (first) first.focus();
      }
      return ok;
    }
    form.querySelectorAll('[data-next]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!validPanel(Number(b.closest('.rfq-panel').getAttribute('data-panel')))) return;
        goto(Number(b.getAttribute('data-next')));
        form.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      });
    });
    form.querySelectorAll('[data-prev]').forEach(function (b) {
      b.addEventListener('click', function () { goto(Number(b.getAttribute('data-prev'))); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstBad = null;
      panels.forEach(function (p) {
        p.querySelectorAll('[required]').forEach(function (f) {
          var bad = !f.checkValidity();
          f.style.outline = bad ? '1.5px solid #B7791F' : '';
          if (bad && !firstBad) firstBad = { field: f, panel: Number(p.getAttribute('data-panel')) };
        });
      });
      if (firstBad) {
        goto(firstBad.panel);
        firstBad.field.focus();
        return;
      }
      var id = 'YL-' + new Date().getFullYear() + '-' + Math.random().toString(36).slice(2, 7).toUpperCase();
      panels.forEach(function (p) { p.hidden = true; });
      if (steps.length) steps.forEach(function (s) { s.classList.add('is-done'); s.classList.remove('is-on'); });
      var idEl = form.querySelector('.inq-id');
      if (idEl) idEl.textContent = id;
      if (success) success.hidden = false;
      form.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
    if (panels.length) goto(1);
  });

  /* ---------- prefill from query (?products= / ?compare= / ?product= / ?category=) ---------- */
  var params = new URLSearchParams(location.search);
  function setVal(form, name, val) {
    var f = form.querySelector('[name="' + name + '"]');
    if (f) f.value = val;
  }
  var rfq = document.getElementById('rfq');
  if (rfq) {
    var src = params.get('compare') || params.get('products') || '';
    if (src) {
      var el = document.getElementById('rfq-products');
      if (el) el.value = src;
      var msg = rfq.querySelector('[name="message"]');
      if (msg && !msg.value) {
        msg.value = 'Requested products (from the library): ' + src.split(',').join(', ') + '\n\n';
      }
    }
    var cat = params.get('category');
    if (cat) {
      var sel = rfq.querySelector('[name="category"]');
      if (sel) {
        var label = {
          'woven-fabrics': 'Woven Fabrics', 'knit-fabrics': 'Knit Fabrics', 'denim-fabrics': 'Denim Fabrics',
          'sportswear-activewear': 'Sportswear & Activewear Fabrics', 'functional-technical': 'Functional & Technical Fabrics',
          'performance-yarns': 'Functional / Performance Yarns'
        }[cat] || '';
        if (label) sel.value = label;
      }
    }
  }
  var sample = document.getElementById('sample');
  if (sample) {
    var prod = params.get('product') || params.get('products');
    if (prod) {
      var pel = document.getElementById('sample-product');
      if (pel) pel.value = prod.split(',')[0];
    }
  }
})();
