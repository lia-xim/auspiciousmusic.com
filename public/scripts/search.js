(function () {
  'use strict';

  var form = document.querySelector('[data-site-search]');
  var input = form && form.querySelector('input[type="search"]');
  var results = document.querySelector('[data-search-results]');
  var status = document.querySelector('[data-search-status]');
  var de = document.documentElement.lang === 'de';
  if (!form || !input || !results || !status) return;

  var index = [];

  function normalize(value) {
    return String(value || '').toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character];
    });
  }

  function search(query) {
    var terms = normalize(query).split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return index
      .map(function (item) {
        var title = normalize(item.title + ' ' + item.h1);
        var body = normalize(item.description + ' ' + item.route);
        var matched = terms.every(function (term) { return title.includes(term) || body.includes(term); });
        var score = terms.reduce(function (total, term) {
          return total + (title.includes(term) ? 3 : 0) + (body.includes(term) ? 1 : 0);
        }, 0);
        return { item: item, matched: matched, score: score };
      })
      .filter(function (entry) { return entry.matched; })
      .sort(function (a, b) { return b.score - a.score || a.item.title.localeCompare(b.item.title); })
      .slice(0, 20)
      .map(function (entry) { return entry.item; });
  }

  function render(query) {
    var matches = search(query);
    results.innerHTML = matches.map(function (item) {
      return '<li><a href="' + escapeHtml(item.route) + '"><h2>' + escapeHtml(item.h1 || item.title) +
        '</h2><p>' + escapeHtml(item.description) + '</p><code>' + escapeHtml(item.route) + '</code></a></li>';
    }).join('');
    status.textContent = query.trim()
      ? (matches.length ? matches.length + (de ? (matches.length === 1 ? ' Ergebnis' : ' Ergebnisse') : (matches.length === 1 ? ' result' : ' results')) : (de ? 'Keine passende Seite gefunden.' : 'No matching page found.'))
      : (de ? 'Gib ein Wort oder eine Wortgruppe ein.' : 'Type a word or phrase to search.');
  }

  fetch('/search-index.json')
    .then(function (response) { if (!response.ok) throw new Error('Search index unavailable'); return response.json(); })
    .then(function (data) {
      index = Array.isArray(data) ? data : [];
      var query = new URLSearchParams(window.location.search).get('q') || '';
      input.value = query;
      if (query) render(query);
    })
    .catch(function () { status.textContent = de ? 'Die Suche ist vorübergehend nicht verfügbar.' : 'Search is temporarily unavailable.'; });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var query = input.value.trim();
    var url = new URL(window.location.href);
    query ? url.searchParams.set('q', query) : url.searchParams.delete('q');
    window.history.replaceState({}, '', url);
    render(query);
  });
})();
