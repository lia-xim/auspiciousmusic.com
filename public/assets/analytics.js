(() => {
  const blockedKeys = new Set(['date', 'location', 'query', 'hash', 'text', 'email', 'project', 'cue', 'song', 'title']);
  const track = (name, data = {}) => {
    if (!name || typeof window.umami?.track !== 'function') return;
    const clean = { page: window.location.pathname };
    Object.entries(data).forEach(([key, value]) => {
      if (!/^[a-z][a-z0-9_]{0,39}$/.test(key) || blockedKeys.has(key)) return;
      if (typeof value === 'string') clean[key] = value.slice(0, 160);
      else if (typeof value === 'number' || typeof value === 'boolean') clean[key] = value;
    });
    window.umami.track(name, clean);
  };

  window.trackAnalytics = track;

  const regionFor = (node) => {
    if (node.closest('header')) return 'header';
    if (node.closest('footer')) return 'footer';
    if (node.closest('nav')) return 'navigation';
    return 'content';
  };

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const target = event.target.closest('a, button');
    if (!(target instanceof HTMLElement) || target.hasAttribute('data-analytics-ignore')) return;

    const namedEvent = target.dataset.analyticsEvent;
    if (namedEvent) {
      const data = {};
      Object.entries(target.dataset).forEach(([key, value]) => {
        if (key === 'analyticsEvent' || !key.startsWith('analytics') || value === undefined) return;
        const property = key.slice('analytics'.length).replace(/^[A-Z]/, (letter) => letter.toLowerCase()).replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
        data[property] = value;
      });
      track(namedEvent, data);
      return;
    }

    if (!(target instanceof HTMLAnchorElement) || !target.href) return;
    const destination = new URL(target.href, window.location.href);
    if (destination.protocol === 'mailto:') {
      track('email-open', { region: regionFor(target) });
      return;
    }
    if (!['http:', 'https:'].includes(destination.protocol)) return;
    if (destination.hostname === 'www.youtube.com' || destination.hostname === 'youtube.com') {
      track('repertoire-listen', { surface: 'link', region: regionFor(target) });
      return;
    }
    if (destination.hostname === 'kim-marie-borger.com' || destination.hostname === 'www.kim-marie-borger.com') {
      track('expert-referral', { target: destination.pathname, region: regionFor(target) });
      return;
    }
    if (destination.origin !== window.location.origin) {
      track('outbound-link', { domain: destination.hostname, region: regionFor(target) });
      return;
    }
    if (destination.pathname === '/tools/eventmusik-planer/' || destination.pathname === '/en/tools/event-music-planner/') {
      track('planner-entry', { source: window.location.pathname, language: destination.pathname.startsWith('/en/') ? 'en' : 'de' });
      return;
    }
    if (target.classList.contains('header-language')) {
      track('language-switch', { target: destination.pathname });
      return;
    }
    track('internal-link', { target: destination.pathname, region: regionFor(target) });
  });

  document.addEventListener('submit', (event) => {
    if (!(event.target instanceof HTMLFormElement)) return;
    if (event.target.matches('[role="search"], .search-row')) track('site-search-submit');
  });

  const audioProgress = new WeakMap();
  document.addEventListener('play', (event) => {
    const audio = event.target;
    if (!(audio instanceof HTMLAudioElement) || !audio.matches('[data-audio-sample]')) return;
    track('audio-sample-play', { piece: audio.dataset.piece || 'unknown', surface: audio.dataset.surface || 'unknown' });
  }, true);

  document.addEventListener('timeupdate', (event) => {
    const audio = event.target;
    if (!(audio instanceof HTMLAudioElement) || !audio.matches('[data-audio-sample]') || !Number.isFinite(audio.duration) || audio.duration <= 0) return;
    const reached = audioProgress.get(audio) || new Set();
    const percent = Math.floor((audio.currentTime / audio.duration) * 100);
    [25, 50, 75].forEach((milestone) => {
      if (percent < milestone || reached.has(milestone)) return;
      reached.add(milestone);
      track('audio-sample-progress', { piece: audio.dataset.piece || 'unknown', surface: audio.dataset.surface || 'unknown', progress: milestone });
    });
    audioProgress.set(audio, reached);
  }, true);

  document.addEventListener('ended', (event) => {
    const audio = event.target;
    if (!(audio instanceof HTMLAudioElement) || !audio.matches('[data-audio-sample]')) return;
    track('audio-sample-complete', { piece: audio.dataset.piece || 'unknown', surface: audio.dataset.surface || 'unknown' });
  }, true);
})();
