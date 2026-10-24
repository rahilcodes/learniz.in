/**
 * Learniz — site runtime
 * Zero-dependency. CSS transitions + IntersectionObserver only.
 * Animates transform/opacity only; passive scroll listeners; never scrollIntoView.
 */
(function () {
  'use strict';

  var BASE = window.__BASE_PATH__ || '';
  /** Where lead forms POST (JSON). Empty string = simulate success locally. */
  var LEAD_ENDPOINT = window.LEARNIZ_LEAD_ENDPOINT || '';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initNav();
    initReveal();
    initSteps();
    initCountUp();
    initTabs();
    initFaq();
    initTilt();
    initSims();
    initGenerators();
    initLeadForms();
    initModal();
    initFoundingCounter();
  });

  // ---------------------------------------------------------------- theme
  function initTheme() {
    var root = document.documentElement;
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('lz-theme', next); } catch (e) { /* storage blocked */ }
        btn.setAttribute('aria-label', next === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
      });
    });
  }

  // ------------------------------------------------------------------ nav
  function initNav() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        nav.setAttribute('data-scrolled', window.scrollY > 24 ? 'true' : 'false');
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // mobile menu
    var menuBtn = nav.querySelector('[data-menu-toggle]');
    var mobile = nav.querySelector('.nav-mobile');
    function setMenu(open) {
      nav.setAttribute('data-open', open ? 'true' : 'false');
      if (menuBtn) menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (mobile) mobile.setAttribute('aria-hidden', open ? 'false' : 'true');
    }
    if (menuBtn) {
      menuBtn.addEventListener('click', function () { setMenu(nav.getAttribute('data-open') !== 'true'); });
      if (mobile) mobile.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
      window.addEventListener('resize', function () { if (window.innerWidth > 960) setMenu(false); }, { passive: true });
    }

    // desktop dropdowns
    var menus = nav.querySelectorAll('.has-menu');
    function closeAll(except) {
      menus.forEach(function (m) {
        if (m !== except) { m.setAttribute('data-open', 'false'); m.querySelector('button').setAttribute('aria-expanded', 'false'); }
      });
    }
    menus.forEach(function (m) {
      var btn = m.querySelector('button');
      var timer;
      function open() { clearTimeout(timer); closeAll(m); m.setAttribute('data-open', 'true'); btn.setAttribute('aria-expanded', 'true'); }
      function close() { timer = setTimeout(function () { m.setAttribute('data-open', 'false'); btn.setAttribute('aria-expanded', 'false'); }, 120); }
      btn.addEventListener('click', function () { m.getAttribute('data-open') === 'true' ? close() : open(); });
      if (finePointer) { m.addEventListener('mouseenter', open); m.addEventListener('mouseleave', close); }
      m.addEventListener('focusout', function (e) { if (!m.contains(e.relatedTarget)) close(); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeAll(); setMenu(false); }
    });
    document.addEventListener('click', function (e) { if (!nav.contains(e.target)) closeAll(); });
  }

  // --------------------------------------------------------------- reveal
  function initReveal() {
    var els = document.querySelectorAll('.rv');
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
    // fallback for anything already in view that the observer missed (hidden tabs, bfcache)
    setTimeout(function () {
      var h = window.innerHeight || 800;
      document.querySelectorAll('.rv:not(.in)').forEach(function (el) { if (el.getBoundingClientRect().top < h * 1.1) el.classList.add('in'); });
    }, 1500);
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) document.querySelectorAll('.rv:not(.in)').forEach(function (el) { if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in'); });
    });
  }

  // ---------------------------------------------------------- sticky steps
  function initSteps() {
    document.querySelectorAll('[data-story]').forEach(function (story) {
      var steps = story.querySelectorAll('[data-step]');
      var panes = story.querySelectorAll('[data-pane]');
      if (!steps.length) return;
      function activate(n) {
        steps.forEach(function (s) { s.setAttribute('data-active', s.getAttribute('data-step') === String(n) ? 'true' : 'false'); });
        panes.forEach(function (p) { p.setAttribute('data-active', p.getAttribute('data-pane') === String(n) ? 'true' : 'false'); });
      }
      activate(0);
      if (!('IntersectionObserver' in window)) return;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) activate(e.target.getAttribute('data-step')); });
      }, { rootMargin: '-45% 0px -45% 0px' });
      steps.forEach(function (s) { io.observe(s); });
    });
  }

  // ------------------------------------------------------------- count-up
  function initCountUp() {
    document.querySelectorAll('[data-stats]').forEach(function (band) {
      var nums = band.querySelectorAll('[data-count]');
      var done = false;
      function run() {
        if (done) return; done = true;
        if (reduce) { nums.forEach(function (n) { n.textContent = n.getAttribute('data-count') + (n.getAttribute('data-unit') || ''); }); return; }
        var t0 = performance.now(), d = 1500;
        function tick(now) {
          var p = Math.min(1, (now - t0) / d), e = 1 - Math.pow(1 - p, 3);
          nums.forEach(function (n) {
            var target = parseFloat(n.getAttribute('data-count'));
            var dec = (n.getAttribute('data-count').split('.')[1] || '').length;
            n.textContent = (target * e).toFixed(dec) + (n.getAttribute('data-unit') || '');
          });
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
      if (!('IntersectionObserver' in window)) { run(); return; }
      var io = new IntersectionObserver(function (entries) { if (entries[0].isIntersecting) { run(); io.disconnect(); } }, { threshold: 0.35 });
      io.observe(band);
      setTimeout(function () { if (band.getBoundingClientRect().top < window.innerHeight) run(); }, 1500);
    });
  }

  // ----------------------------------------------------------------- tabs
  function initTabs() {
    document.querySelectorAll('[role="tablist"][data-tabs]').forEach(function (list) {
      var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
      var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });
      function select(i, focus) {
        tabs.forEach(function (t, j) {
          var on = i === j;
          t.setAttribute('aria-selected', on ? 'true' : 'false');
          t.setAttribute('tabindex', on ? '0' : '-1');
          if (panels[j]) {
            if (on) {
              panels[j].hidden = false;
              // restart the fade animation
              panels[j].style.animation = 'none'; void panels[j].offsetWidth; panels[j].style.animation = '';
              panels[j].querySelectorAll('.bar b').forEach(function (b) { var w = b.style.getPropertyValue('--w'); b.style.setProperty('--w', '0%'); requestAnimationFrame(function () { b.style.setProperty('--w', w); }); });
            } else panels[j].hidden = true;
          }
        });
        if (focus) tabs[i].focus();
      }
      tabs.forEach(function (t, i) {
        t.addEventListener('click', function () { select(i); });
        t.addEventListener('keydown', function (e) {
          var k = e.key, n = i;
          if (k === 'ArrowRight') n = (i + 1) % tabs.length; else if (k === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length; else if (k === 'Home') n = 0; else if (k === 'End') n = tabs.length - 1; else return;
          e.preventDefault(); select(n, true);
        });
      });
      select(Math.max(0, tabs.findIndex(function (t) { return t.getAttribute('aria-selected') === 'true'; })));
    });
  }

  // ------------------------------------------------------------------ faq
  function initFaq() {
    document.querySelectorAll('[data-faq]').forEach(function (list) {
      var items = list.querySelectorAll('.faq-item');
      items.forEach(function (item) {
        var btn = item.querySelector('.faq-q');
        btn.addEventListener('click', function () {
          var open = item.getAttribute('data-open') === 'true';
          items.forEach(function (o) { o.setAttribute('data-open', 'false'); o.querySelector('.faq-q').setAttribute('aria-expanded', 'false'); });
          if (!open) { item.setAttribute('data-open', 'true'); btn.setAttribute('aria-expanded', 'true'); }
        });
      });

      // optional search + category filter (FAQ page)
      var search = document.querySelector('[data-faq-search]');
      var cats = document.querySelectorAll('[data-faq-cat]');
      var empty = document.querySelector('[data-faq-empty]');
      if (!search && !cats.length) return;
      function filter() {
        var q = search ? search.value.toLowerCase().trim() : '';
        var active = document.querySelector('[data-faq-cat][aria-selected="true"]');
        var cat = active ? active.getAttribute('data-faq-cat') : 'all';
        var shown = 0;
        items.forEach(function (item) {
          var ok = (cat === 'all' || item.getAttribute('data-cat') === cat) && (!q || item.textContent.toLowerCase().indexOf(q) > -1);
          item.hidden = !ok; if (ok) shown++;
        });
        if (empty) empty.hidden = shown > 0;
      }
      if (search) search.addEventListener('input', filter);
      cats.forEach(function (c) {
        c.addEventListener('click', function () {
          cats.forEach(function (o) { o.setAttribute('aria-selected', 'false'); o.setAttribute('tabindex', '-1'); });
          c.setAttribute('aria-selected', 'true'); c.setAttribute('tabindex', '0'); filter();
        });
      });
    });
  }

  // ------------------------------------------------------------- hero tilt
  function initTilt() {
    var hero = document.querySelector('[data-tilt-area]');
    var art = hero && hero.querySelector('[data-tilt]');
    if (!hero || !art || !finePointer || reduce) return;
    var raf = 0, rest = 'perspective(1600px) rotateY(-6deg) rotateX(2deg)';
    art.style.transform = rest;
    hero.addEventListener('mousemove', function (e) {
      if (raf || window.innerWidth < 961) return;
      var r = hero.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      raf = requestAnimationFrame(function () {
        raf = 0;
        art.style.transform = 'perspective(1600px) rotateY(' + (-6 + x * 7).toFixed(2) + 'deg) rotateX(' + (2 - y * 5).toFixed(2) + 'deg)';
      });
    });
    hero.addEventListener('mouseleave', function () { art.style.transform = rest; });
  }

  // ------------------------------------------------------ helicopter sims
  // Model (kept from the existing site): lift = 0.0736·rpm² N, weight = m·g.
  // At 400 rpm and 1,200 kg lift ≈ weight ≈ 11.8 kN (hover).
  function initSims() {
    document.querySelectorAll('[data-sim]').forEach(function (sim) {
      var rpm = sim.querySelector('[data-sim-rpm]');
      var mass = sim.querySelector('[data-sim-mass]');
      if (!rpm) return;
      var $ = function (s) { return sim.querySelector(s); };
      var rpmVal = $('[data-sim-rpm-val]'), massVal = $('[data-sim-mass-val]'), lift = $('[data-sim-lift]'), weight = $('[data-sim-weight]');
      var status = $('[data-sim-status]'), hint = $('[data-sim-hint]'), craft = $('[data-sim-craft]'), rotor = $('[data-sim-rotor]');
      var liftBar = $('[data-sim-liftbar]'), weightBar = $('[data-sim-weightbar]'), reset = $('[data-sim-reset]');
      function setP(input) {
        var p = (input.value - input.min) / (input.max - input.min) * 100;
        input.style.setProperty('--p', p + '%');
      }
      function update() {
        var r = Number(rpm.value), m = mass ? Number(mass.value) : 1200;
        var W = m * 9.81, L = 0.0736 * r * r, ratio = L / W, diff = (L - W) / 1000;
        setP(rpm); if (mass) setP(mass);
        if (rpmVal) rpmVal.textContent = r + ' rpm';
        if (massVal) massVal.textContent = m.toLocaleString('en-IN') + ' kg';
        if (lift) lift.textContent = (L / 1000).toFixed(1) + ' kN';
        if (weight) weight.textContent = (W / 1000).toFixed(1) + ' kN';
        var state = ratio > 1.03 ? 'Rising' : ratio < 0.97 ? 'Descending' : 'Hovering';
        if (status) status.textContent = state;
        if (hint) hint.textContent = state === 'Hovering' ? 'Lift balances weight.' : state === 'Rising' ? 'Net force upward.' : 'Net force downward.';
        if (craft) craft.style.setProperty('--y', Math.max(-60, Math.min(70, -diff * 6)).toFixed(1) + 'px');
        if (rotor) rotor.style.setProperty('--period', Math.max(0.12, 520 / r).toFixed(2) + 's');
        if (liftBar) liftBar.style.setProperty('--h', Math.round(Math.max(20, Math.min(110, ratio * 60))) + 'px');
        if (weightBar) weightBar.style.setProperty('--h', Math.round(Math.max(20, Math.min(110, (m / 1200) * 60))) + 'px');
      }
      rpm.addEventListener('input', update);
      if (mass) mass.addEventListener('input', update);
      if (reset) reset.addEventListener('click', function () { rpm.value = 400; if (mass) mass.value = 1200; update(); });
      update();
    });
  }

  // --------------------------------------------------- question generator
  var BANK = {
    Biology: { Photosynthesis: {
      mcq: [
        { text: 'Which pigment absorbs light energy during photosynthesis?', opts: ['Chlorophyll', 'Haemoglobin', 'Carotene only', 'Melanin'], ans: 0 },
        { text: 'In which part of the chloroplast do the light-dependent reactions take place?', opts: ['Stroma', 'Thylakoid membranes', 'Outer membrane', 'Cytoplasm'], ans: 1 },
        { text: 'Which gas is released as a by-product of photosynthesis?', opts: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'], ans: 2 },
        { text: 'What is the primary role of stomata during the daylight hours?', opts: ['Water intake only', 'Gas exchange (CO2 in, O2 out)', 'Sunlight filtration', 'Sugar storage'], ans: 1 },
        { text: 'In the dark reaction (Calvin cycle), which substance is converted into glucose?', opts: ['Carbon dioxide', 'Oxygen', 'Chlorophyll', 'Nitric acid'], ans: 0 }
      ],
      short: [
        { text: 'State the balanced equation for photosynthesis and name the reactants.', meta: '2 marks · expected answer attached' },
        { text: 'Explain why the rate of photosynthesis falls when a plant is kept in dim light.', meta: '3 marks · expected answer attached' },
        { text: 'Describe the role of stomata and guard cells in photosynthesis.', meta: '2 marks · expected answer attached' },
        { text: 'Differentiate between light-dependent and light-independent reactions.', meta: '3 marks · expected answer attached' }
      ],
      fill: [
        { text: 'Photosynthesis takes place in the ______ of plant cells.', meta: 'Answer: chloroplasts' },
        { text: 'The green pigment ______ absorbs light energy during daytime.', meta: 'Answer: chlorophyll' },
        { text: 'Glucose produced during photosynthesis is stored in plants as ______.', meta: 'Answer: starch' },
        { text: 'The tiny pores on leaf surfaces regulated by guard cells are called ______.', meta: 'Answer: stomata' }
      ] } },
    Physics: { 'Forces on a helicopter': {
      mcq: [
        { text: 'If rotor speed increases while mass stays constant, what happens to the net force on the helicopter?', opts: ['It decreases', 'It increases upward', 'It stays constant', 'It reverses downward'], ans: 1 },
        { text: 'What force directly opposes the downward gravitational weight of a hovering aircraft?', opts: ['Aerodynamic lift', 'Thrust', 'Induced drag', 'Centrifugal force'], ans: 0 },
        { text: 'When lift equals weight and thrust equals drag, what state of motion is the helicopter in?', opts: ['Rapid climb', 'Equilibrium (hovering or steady velocity)', 'Free fall', 'Uncontrolled rotation'], ans: 1 }
      ],
      short: [
        { text: 'State Newton’s third law of motion in the context of helicopter rotor blades pushing air downwards.', meta: '2 marks · expected answer attached' },
        { text: 'Explain why lift force is proportional to the square of the rotor rotational speed.', meta: '3 marks · expected answer attached' }
      ],
      fill: [
        { text: 'In level hover, the vertical lift generated by the rotors exactly equals the ______ of the helicopter.', meta: 'Answer: weight' },
        { text: 'The downward flow of air driven by helicopter rotors is called ______.', meta: 'Answer: downwash' }
      ] } },
    Chemistry: { 'Chemical Bonding': {
      mcq: [
        { text: 'What type of chemical bond is formed through the complete transfer of electrons between atoms?', opts: ['Ionic bond', 'Covalent bond', 'Metallic bond', 'Hydrogen bond'], ans: 0 },
        { text: 'Which molecule features a triple covalent bond between its constituent atoms?', opts: ['Oxygen (O2)', 'Nitrogen (N2)', 'Water (H2O)', 'Methane (CH4)'], ans: 1 }
      ],
      short: [{ text: 'Explain why ionic compounds have higher melting and boiling points compared to simple covalent compounds.', meta: '3 marks · expected answer attached' }],
      fill: [{ text: 'A covalent bond involves the ______ of electron pairs between non-metal atoms.', meta: 'Answer: sharing' }] } },
    Mathematics: { 'Quadratic Equations': {
      mcq: [
        { text: 'What is the discriminant of the quadratic equation ax² + bx + c = 0?', opts: ['b² - 4ac', 'b² + 4ac', '2a - 4bc', '4ab - c²'], ans: 0 },
        { text: 'If the discriminant is less than zero, what is the nature of the roots?', opts: ['Two real distinct roots', 'Two equal real roots', 'No real roots (complex conjugates)', 'Infinite roots'], ans: 2 }
      ],
      short: [{ text: 'Find the roots of 2x² - 7x + 3 = 0 using the quadratic formula.', meta: '3 marks · step-by-step working attached' }],
      fill: [{ text: 'The graph of a standard quadratic function forms a curve known as a ______.', meta: 'Answer: parabola' }] } }
  };
  var DEFAULT_TOPIC = { Biology: 'Photosynthesis', Physics: 'Forces on a helicopter', Chemistry: 'Chemical Bonding', Mathematics: 'Quadratic Equations' };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function initGenerators() {
    document.querySelectorAll('[data-generator]').forEach(function (gen) {
      var $ = function (s) { return gen.querySelector(s); };
      var subject = $('[data-gen-subject]'), topic = $('[data-gen-topic]'), type = $('[data-gen-type]'), countEl = $('[data-gen-count]');
      var inc = $('[data-gen-inc]'), dec = $('[data-gen-dec]'), btn = $('[data-gen-run]'), out = $('[data-gen-out]'), summary = $('[data-gen-summary]');
      var diffs = gen.querySelectorAll('[data-gen-diff]');
      if (!btn || !out) return;
      var count = 5, diff = 'Medium';
      diffs.forEach(function (d) { d.addEventListener('click', function () { diffs.forEach(function (o) { o.setAttribute('aria-pressed', 'false'); }); d.setAttribute('aria-pressed', 'true'); diff = d.getAttribute('data-gen-diff'); }); });
      if (inc) inc.addEventListener('click', function () { if (count < 20) countEl.textContent = ++count; });
      if (dec) dec.addEventListener('click', function () { if (count > 3) countEl.textContent = --count; });
      if (subject && topic) subject.addEventListener('change', function () { topic.value = DEFAULT_TOPIC[subject.value] || ''; });

      function render() {
        var s = subject ? subject.value : 'Biology', t = topic ? topic.value : DEFAULT_TOPIC[s], k = type ? type.value : 'mcq';
        var list = (BANK[s] && BANK[s][t] && BANK[s][t][k]) || (BANK[s] && BANK[s][DEFAULT_TOPIC[s]][k]) || BANK.Biology.Photosynthesis[k];
        var label = { mcq: 'multiple-choice', short: 'short-answer', fill: 'fill-in-the-blank' }[k] || '';
        if (summary) summary.textContent = 'Showing ' + Math.min(3, list.length) + ' of ' + count + ' ' + label + ' questions · ' + s + ' · ' + t;
        out.innerHTML = list.slice(0, 3).map(function (q, i) {
          var opts = q.opts ? '<div class="opts">' + q.opts.map(function (o, j) { return '<span class="opt' + (j === q.ans ? ' right' : '') + '"><b>' + 'ABCD'[j] + '</b>' + esc(o) + '</span>'; }).join('') + '</div>' : '';
          return '<div class="qrow" style="--d:' + (0.08 + i * 0.12).toFixed(2) + 's"><span class="n">Q' + (i + 1) + '</span><span class="t">' + esc(q.text) + '</span><span class="k">' + esc(q.meta || diff) + '</span>' + opts + '</div>';
        }).join('');
        out.setAttribute('data-active', 'false'); void out.offsetWidth; out.setAttribute('data-active', 'true');
      }
      btn.addEventListener('click', function () {
        btn.disabled = true; var orig = btn.innerHTML; btn.innerHTML = '<span class="spinner"></span> Drafting questions…';
        out.style.opacity = '0.35';
        setTimeout(function () { btn.disabled = false; btn.innerHTML = orig; out.style.opacity = ''; render(); }, 700);
      });
      render();
    });
  }

  // ------------------------------------------------------------ lead forms
  function validate(form) {
    var ok = true;
    form.querySelectorAll('[aria-invalid]').forEach(function (el) { el.removeAttribute('aria-invalid'); });
    form.querySelectorAll('.field-error').forEach(function (el) { el.textContent = ''; });
    function fail(input, msg) { ok = false; input.setAttribute('aria-invalid', 'true'); var err = input.parentElement.querySelector('.field-error'); if (err) err.textContent = msg; }
    form.querySelectorAll('[required]').forEach(function (input) {
      if (!input.value.trim()) fail(input, input.tagName === 'SELECT' ? 'Please select an option.' : 'This field is required.');
    });
    var phone = form.querySelector('[name="phone"]');
    if (phone && phone.value.trim()) {
      var digits = phone.value.replace(/\D/g, '');
      if (!/^(91)?[6-9]\d{9}$/.test(digits)) fail(phone, 'Enter a valid 10-digit Indian mobile number.');
    }
    var email = form.querySelector('[name="email"]');
    if (email && email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) fail(email, 'Enter a valid email address.');
    if (!ok) { var first = form.querySelector('[aria-invalid="true"]'); if (first) first.focus(); }
    return ok;
  }

  function submitLead(form, done) {
    var data = {};
    new FormData(form).forEach(function (v, k) { data[k] = v; });
    data.page = location.pathname; data.source = form.getAttribute('data-lead') || 'form';
    var btn = form.querySelector('[type="submit"]'), orig = btn.innerHTML;
    btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> Sending…';
    function finish(okay) {
      btn.disabled = false; btn.innerHTML = orig;
      if (okay) done(data); else { var err = form.querySelector('[data-form-error]'); if (err) err.textContent = 'Could not send just now. Please try again, or message us on WhatsApp.'; }
    }
    if (!LEAD_ENDPOINT) { setTimeout(function () { finish(true); }, 800); return; }
    fetch(LEAD_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
      .then(function (r) { finish(r.ok); }).catch(function () { finish(false); });
  }

  function initLeadForms() {
    document.querySelectorAll('form[data-lead]').forEach(function (form) {
      form.setAttribute('novalidate', '');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validate(form)) return;
        submitLead(form, function (data) {
          form.setAttribute('data-done', 'true');
          var ok = form.parentElement.querySelector('.form-success') || document.querySelector('[data-success-for="' + form.id + '"]');
          if (ok) {
            var n = ok.querySelector('[data-success-name]'); if (n) n.textContent = (data.name || '').trim().split(' ')[0] || 'there';
            var p = ok.querySelector('[data-success-phone]'); if (p) p.textContent = data.phone || '';
            ok.setAttribute('data-show', 'true'); ok.setAttribute('tabindex', '-1'); ok.focus();
          }
          var dlg = form.closest('.dialog'); if (dlg) dlg.setAttribute('data-done', 'true');
          form.reset();
        });
      });
    });
  }

  // ---------------------------------------------------------------- modal
  function initModal() {
    var backdrop = document.getElementById('lz-demo-modal');
    if (!backdrop) return;
    var dialog = backdrop.querySelector('.dialog'), lastFocus = null;
    function open() {
      lastFocus = document.activeElement;
      dialog.removeAttribute('data-done');
      var form = dialog.querySelector('form'); if (form) form.removeAttribute('data-done');
      backdrop.setAttribute('data-open', 'true'); backdrop.setAttribute('aria-hidden', 'false'); backdrop.removeAttribute('inert');
      document.body.style.overflow = 'hidden';
      var first = dialog.querySelector('input, select, textarea, button'); if (first) setTimeout(function () { first.focus(); }, 50);
    }
    function close() {
      backdrop.setAttribute('data-open', 'false'); backdrop.setAttribute('aria-hidden', 'true'); backdrop.setAttribute('inert', '');
      document.body.style.overflow = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    window.learnizBookDemo = open;
    window.addEventListener('learniz:book-demo', open);
    document.querySelectorAll('[data-open-demo]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); open(); }); });
    backdrop.querySelectorAll('[data-close-demo]').forEach(function (b) { b.addEventListener('click', close); });
    backdrop.addEventListener('click', function (e) { if (e.target === backdrop) close(); });
    document.addEventListener('keydown', function (e) {
      if (backdrop.getAttribute('data-open') !== 'true') return;
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') {
        var f = dialog.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])');
        f = Array.prototype.filter.call(f, function (el) { return el.offsetParent !== null; });
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  // ------------------------------------------------------ founding counter
  function initFoundingCounter() {
    document.querySelectorAll('[data-fs-grid]').forEach(function (grid) {
      var remaining = Math.max(0, Math.min(10, parseInt(grid.getAttribute('data-remaining') || '4', 10)));
      var enrolled = 10 - remaining, scope = grid.closest('[data-fs]') || document;
      var n = scope.querySelector('[data-fs-remaining]'); if (n) n.textContent = remaining;
      var e = scope.querySelector('[data-fs-enrolled]'); if (e) e.textContent = enrolled + ' schools enrolled or reserved';
      var o = scope.querySelector('[data-fs-open]'); if (o) o.textContent = remaining + ' spots open';
      var html = '';
      for (var i = 0; i < 10; i++) html += '<span title="Slot ' + (i + 1) + ': ' + (i < enrolled ? 'enrolled' : 'open') + '" style="height:8px;border-radius:2px;background:' + (i < enrolled ? 'var(--color-neutral-700)' : 'var(--color-accent)') + '"></span>';
      grid.innerHTML = html;
      grid.setAttribute('aria-label', remaining + ' of 10 places remaining, ' + enrolled + ' schools enrolled');
    });
  }
})();
