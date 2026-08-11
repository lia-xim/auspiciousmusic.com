/* ==========================================================================
   Auspicious Music — the masthead string field
   --------------------------------------------------------------------------
   Six strings across the masthead, not one. Pluck any of them and its
   neighbours answer on their own — sympathetic resonance, the effect that
   makes a sitar ring after one note and a piano bloom with the sustain
   pedal down. On a publication about how sound behaves, the header is the
   demonstration.

   Each string is an independent solution of the discrete wave equation:

       a[i] = k · (y[i-1] + y[i+1] − 2·y[i])
       v[i] = (v[i] + a[i]) · damping
       y[i] = y[i] + v[i]

   What makes it read as an instrument rather than six copies of one line:

     · tension rises across the field, so the strings ring at different
       rates and the field beats against itself instead of moving as a block
     · damping falls with tension — low strings ring long, high strings die
       quickly, which is true of real strings and is what stops the whole
       thing turning to mush
     · a pluck couples into the neighbours at a fraction of its energy,
       weighted by distance. Nothing is triggered; the coupling is applied
       as force and the neighbouring string decides what to do with it

   Costs nothing at rest: the frame loop halts once total energy falls
   below threshold and restarts only on input. Under reduced motion the
   field draws once, statically, and binds no pointer handlers at all.
   ========================================================================== */

(function () {
  "use strict";

  var canvas = document.querySelector("[data-string]");
  if (!canvas) return;

  var ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  var COUNT = 6;               /* strings in the field */
  var N = 150;                 /* points per string */
  var GRAB = 30;               /* px band around a string that catches it */
  var MAX_PULL = 58;           /* px — a fast drag cannot tear one open */
  var REST_EPS = 0.015;
  var SYMPATHY = 0.16;         /* fraction of a pluck passed to neighbours */

  /* Tension climbs and damping falls across the field. The lowest string
     is slack and rings for seconds; the highest is tight and stops almost
     at once. */
  var strings = [];
  for (var s = 0; s < COUNT; s++) {
    var t = s / (COUNT - 1);
    strings.push({
      y: new Float32Array(N),
      v: new Float32Array(N),
      k: 0.19 + t * 0.26,            /* tension  0.19 → 0.45 */
      damp: 0.9955 - t * 0.0075,     /* decay    long → short */
      offset: 0,                     /* set on resize */
      energy: 0
    });
  }

  var w = 0, h = 0, dpr = 1;
  var running = false;
  var holding = false;
  var heldString = -1, holdIndex = -1, holdY = 0;
  var node = null;             /* {s, i, life} — the ember mark */
  var colour = { line: "currentColor", node: "currentColor" };

  function styles() {
    var root = getComputedStyle(document.documentElement);
    return {
      line: root.getPropertyValue("--ink").trim() || "currentColor",
      node: root.getPropertyValue("--ember-bright").trim() || "currentColor"
    };
  }

  function layout() {
    /* A compact set, not six lines spread across the panel. Spaced far
       apart they read as ruled paper; grouped at roughly 26px they read as
       an instrument — which is the entire point of the field. The set sits
       in the upper third, the region the headline leaves empty. */
    /* Spacing is graded, not even. Evenly spaced horizontal lines read as
       ruled paper however you position them; graded spacing — wide at the
       top, tightening downward — reads as a strung instrument, the way a
       harp or a piano frame actually looks. It also does two jobs at once:
       the open upper spacing occupies the empty part of the masthead, and
       the tight lower group threads through the headline. */
    /* A phone viewport is tall and narrow: the same spread that reads as a
       strung frame on a desktop turns back into separated rules there. The
       set closes up and gathers around the headline instead. */
    var narrow = w < 700;
    var top = h * (narrow ? 0.42 : 0.28);
    var bottom = h * (narrow ? 0.60 : 0.70);
    for (var s = 0; s < COUNT; s++) {
      var t = s / (COUNT - 1);
      var eased = 1 - (1 - t) * (1 - t);
      strings[s].offset = top + (bottom - top) * eased;
    }
  }

  function resize() {
    var rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width;
    h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    layout();
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    for (var s = 0; s < COUNT; s++) {
      var st = strings[s];
      var base = st.offset;

      /* A ringing string darkens. At rest the field is a whisper so the
         headline never has to compete with it. */
      var activity = Math.min(1, st.energy * 2.2);
      ctx.globalAlpha = 0.13 + activity * 0.66;

      ctx.beginPath();
      ctx.moveTo(0, base + st.y[0]);
      for (var i = 1; i < N - 1; i++) {
        var x0 = (i / (N - 1)) * w;
        var x1 = ((i + 1) / (N - 1)) * w;
        var cx = (x0 + x1) / 2;
        var cy = (base + st.y[i] + base + st.y[i + 1]) / 2;
        ctx.quadraticCurveTo(x0, base + st.y[i], cx, cy);
      }
      ctx.lineTo(w, base + st.y[N - 1]);

      ctx.strokeStyle = colour.line;
      ctx.lineWidth = 1 + activity * 0.55;
      ctx.lineCap = "round";
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    if (node && node.life > 0) {
      var ns = strings[node.s];
      var nx = (node.i / (N - 1)) * w;
      var ny = ns.offset + ns.y[node.i];
      ctx.beginPath();
      ctx.arc(nx, ny, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = colour.node;
      ctx.globalAlpha = Math.min(1, node.life);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function step() {
    var total = 0;

    for (var s = 0; s < COUNT; s++) {
      var st = strings[s];
      var e = 0;

      for (var i = 1; i < N - 1; i++) {
        var a = st.k * (st.y[i - 1] + st.y[i + 1] - 2 * st.y[i]);
        st.v[i] = (st.v[i] + a) * st.damp;
      }
      for (var j = 1; j < N - 1; j++) {
        st.y[j] += st.v[j];
        e += Math.abs(st.v[j]);
      }

      st.y[0] = st.y[N - 1] = 0;
      st.v[0] = st.v[N - 1] = 0;

      if (holding && s === heldString && holdIndex > 0 && holdIndex < N - 1) {
        for (var d = -3; d <= 3; d++) {
          var idx = holdIndex + d;
          if (idx <= 0 || idx >= N - 1) continue;
          st.y[idx] = holdY * (1 - Math.abs(d) / 4);
          st.v[idx] = 0;
        }
        e += 1;
      }

      st.energy = e / N;
      total += e;
    }

    if (node && node.life > 0) {
      node.life -= 0.011;
      total += node.life;
    }

    draw();

    if (total < REST_EPS && !holding) {
      for (var q = 0; q < COUNT; q++) { strings[q].y.fill(0); strings[q].v.fill(0); strings[q].energy = 0; }
      node = null;
      draw();
      running = false;
      return;
    }
    requestAnimationFrame(step);
  }

  function wake() {
    if (running) return;
    running = true;
    requestAnimationFrame(step);
  }

  /* Energy handed to the neighbours when a string is released. Falls off
     with distance, and never returns to the string that produced it. */
  function sympathise(source, index, force) {
    for (var s = 0; s < COUNT; s++) {
      if (s === source) continue;
      var distance = Math.abs(s - source);
      var share = force * SYMPATHY / (distance * distance);
      if (share < 0.05) continue;
      var st = strings[s];
      for (var d = -2; d <= 2; d++) {
        var idx = index + d;
        if (idx <= 0 || idx >= N - 1) continue;
        st.v[idx] += share * (1 - Math.abs(d) / 3);
      }
    }
  }

  function nearestString(dy) {
    var best = -1, bestDist = Infinity;
    for (var s = 0; s < COUNT; s++) {
      var dist = Math.abs(dy - strings[s].offset);
      if (dist < bestDist) { bestDist = dist; best = s; }
    }
    return bestDist <= GRAB ? best : -1;
  }

  function pointerAt(clientX, clientY) {
    var rect = canvas.getBoundingClientRect();
    var x = clientX - rect.left;
    var y = clientY - rect.top;

    if (x < 0 || x > rect.width) { release(); return; }

    if (!holding) {
      var s = nearestString(y);
      if (s === -1) return;
      heldString = s;
    }

    holding = true;
    holdIndex = Math.round((x / rect.width) * (N - 1));
    holdY = Math.max(-MAX_PULL, Math.min(MAX_PULL, y - strings[heldString].offset));
    wake();
  }

  function release() {
    if (!holding) return;
    holding = false;
    if (heldString >= 0 && holdIndex > 0 && holdIndex < N - 1) {
      sympathise(heldString, holdIndex, Math.abs(holdY) * 0.09);
      node = { s: heldString, i: holdIndex, life: 1 };
    }
    heldString = -1;
    holdIndex = -1;
    wake();
  }

  function bind() {
    colour = styles();
    resize();
    window.addEventListener("resize", resize, { passive: true });

    var host = canvas.parentElement || canvas;
    host.addEventListener("pointermove", function (e) { pointerAt(e.clientX, e.clientY); }, { passive: true });
    host.addEventListener("pointerdown", function (e) { pointerAt(e.clientX, e.clientY); }, { passive: true });
    host.addEventListener("pointerleave", release, { passive: true });
    host.addEventListener("pointerup", release, { passive: true });
    /* A touch that becomes a scroll ends as pointercancel, never pointerup.
       Without this the string stays held and never rings down. */
    host.addEventListener("pointercancel", release, { passive: true });

    /* Keyboard parity: strums the field from the lowest string upward, so
       the sympathetic behaviour is reachable without a pointer. */
    var trigger = document.querySelector("[data-string-pluck]");
    if (trigger) {
      trigger.addEventListener("click", function () {
        var i = Math.round(N * 0.42);
        for (var s = 0; s < COUNT; s++) {
          (function (str, idx, delay) {
            window.setTimeout(function () {
              str.v[idx] += 7.5;
              str.v[idx - 1] += 4; str.v[idx + 1] += 4;
              node = { s: strings.indexOf(str), i: idx, life: 1 };
              wake();
            }, delay);
          })(strings[s], i + s * 4, s * 55);
        }
      });
    }
  }

  if (reduced.matches) {
    colour = styles();
    resize();
    window.addEventListener("resize", resize, { passive: true });
  } else {
    bind();
  }

  reduced.addEventListener("change", function (e) {
    if (!e.matches) return;
    holding = false;
    for (var s = 0; s < COUNT; s++) { strings[s].y.fill(0); strings[s].v.fill(0); strings[s].energy = 0; }
    node = null;
    draw();
  });
})();
