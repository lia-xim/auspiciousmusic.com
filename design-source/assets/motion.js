/* ==========================================================================
   Auspicious Music — concept motion
   --------------------------------------------------------------------------
   Phase 1 stands in for the GSAP layer with native primitives so the concept
   runs offline and the choreography can be judged as-is. Each block names the
   GSAP/ScrollTrigger construct that replaces it in src/scripts/motion/.

   Invariants that carry over unchanged:
     · content is complete and readable before this file runs
     · the reveal opt-in class is added by JS, so no-JS renders the end state
     · everything is disabled under prefers-reduced-motion
     · LCP (hero copy + artwork) never waits on this file
   ========================================================================== */

(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 1. header: transparent → solid surface after scroll ---------------
     → GSAP: ScrollTrigger.create({ start: 64, toggleClass: 'is-scrolled' }) */
  var header = document.querySelector("[data-header]");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 64);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- 2. mobile sheet --------------------------------------------------- */
  var sheet = document.querySelector("[data-sheet]");
  var openBtn = document.querySelector("[data-sheet-open]");
  var closeBtn = document.querySelector("[data-sheet-close]");

  if (sheet && openBtn && closeBtn) {
    var setSheet = function (open) {
      sheet.dataset.open = String(open);
      openBtn.setAttribute("aria-expanded", String(open));
      document.documentElement.style.overflow = open ? "hidden" : "";
      (open ? closeBtn : openBtn).focus();
    };
    openBtn.addEventListener("click", function () { setSheet(true); });
    closeBtn.addEventListener("click", function () { setSheet(false); });
    sheet.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setSheet(false);
    });
    /* Focus stays inside the sheet while it is open (WCAG 2.1.2 permits a
       modal trap that Escape and the close button both release). */
    sheet.addEventListener("keydown", function (e) {
      if (e.key !== "Tab" || sheet.dataset.open !== "true") return;
      var items = sheet.querySelectorAll("a[href], button");
      if (!items.length) return;
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* ---- 2b. two-click external media ------------------------------------
     The frame carries the video id in a data attribute and nothing else.
     Only on activation is an iframe created and pointed at
     youtube-nocookie.com — so no request leaves the browser, and no cookie
     is set, unless the reader asks for it. Runs before the reduced-motion
     return because consent is not a motion feature. */
  document.querySelectorAll("[data-embed]").forEach(function (embed) {
    var button = embed.querySelector("[data-embed-play]");
    var frame = embed.querySelector(".embed__frame");
    if (!button || !frame) return;

    button.addEventListener("click", function () {
      var id = embed.dataset.embed;
      if (!id) return;
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) +
                   "?autoplay=1&rel=0&modestbranding=1";
      iframe.title = embed.dataset.embedTitle || "Video";
      iframe.allow = "accelerometer; autoplay; encrypted-media; picture-in-picture";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.setAttribute("allowfullscreen", "");
      frame.innerHTML = "";
      frame.appendChild(iframe);
    });
  });

  if (reduced) return;

  /* ---- 3. editorial reveals: 16px rise, restrained stagger ---------------
     → GSAP: gsap.from(rows, { y: 16, opacity: 0, stagger: 0.06,
              scrollTrigger: { trigger: section, start: 'top 82%' } }) */
  var targets = document.querySelectorAll("[data-reveal]");
  if (targets.length && "IntersectionObserver" in window) {

    var release = function (el) {
      el.classList.remove("will-reveal");
      el.classList.add("is-in");
    };

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var delay = Number(entry.target.dataset.revealDelay || 0);
        setTimeout(function () { release(entry.target); }, delay);
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.05 });

    var pending = [];

    targets.forEach(function (el, i) {
      /* Stagger is assigned per group, not globally, so a long index never
         accumulates a visible delay on later rows. */
      if (!el.dataset.revealDelay) {
        var group = el.closest("[data-reveal-group]");
        var siblings = group ? group.querySelectorAll("[data-reveal]") : null;
        var idx = siblings ? Array.prototype.indexOf.call(siblings, el) : i;
        el.dataset.revealDelay = String(Math.min(idx, 6) * 60);
      }

      /* Only hide what is genuinely below the fold. Anything already on
         screen is left alone, so the first viewport — and the LCP element
         with it — never depends on this script running at all. */
      if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
        el.classList.add("will-reveal");
        pending.push(el);
      }
      io.observe(el);
    });

    /* Safety net. If the observer never fires — a headless renderer that
       stitches a full-page capture, a crawler, an aggressive extension —
       everything is released rather than left invisible. Content visibility
       is never allowed to depend on a callback arriving. */
    window.setTimeout(function () {
      pending.forEach(function (el) {
        if (!el.classList.contains("is-in")) release(el);
      });
    }, 2500);
  }

  /* ---- 4. spectral rail: node tracks scroll through the first bands ------
     → GSAP: ScrollTrigger.create({ trigger: rail, scrub: 0.6,
              onUpdate: s => rail.style.setProperty('--node-y', …) })
     Capped at the rail's own extent — this never pins or hijacks scroll. */
  var rail = document.querySelector("[data-rail]");
  if (rail) {
    var ticking = false;
    var track = function () {
      var box = rail.getBoundingClientRect();
      var progress = (window.innerHeight * 0.5 - box.top) / box.height;
      progress = Math.max(0.02, Math.min(0.98, progress));
      rail.style.setProperty("--node-y", (progress * 100).toFixed(2) + "%");
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(track);
    }, { passive: true });
    track();
  }
})();
