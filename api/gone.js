export default function handler(_request, response) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
  response.setHeader('Cache-Control', 'public, max-age=300');
  response.status(410).send(`<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <link rel="canonical" href="https://www.auspiciousmusic.com/410/">
  <title>Adresse dauerhaft entfernt — Auspicious Music</title>
  <meta name="description" content="Diese Adresse wurde dauerhaft entfernt und wird nicht auf aktuelle Inhalte umgeleitet.">
  <style>
    :root{color-scheme:light;font-family:system-ui,sans-serif;background:#f4f2ed;color:#171714}
    body{margin:0;min-height:100vh;display:grid;place-items:center}
    main{width:min(42rem,calc(100% - 2rem));padding:3rem 0}
    p{line-height:1.7;color:#4b4a44}a{color:#8a3e25}nav{display:flex;gap:1rem;flex-wrap:wrap;margin-top:2rem}
  </style>
</head>
<body>
  <main>
    <p>HTTP 410 · Gone</p>
    <h1>Diese Adresse wurde dauerhaft entfernt</h1>
    <p>Für diesen früheren oder unerwünschten Pfad gibt es keinen sachgleichen Ersatz. Er wird deshalb weder auf die Startseite noch auf aktuelle Fach- oder Angebotsseiten umgeleitet.</p>
    <nav><a href="/about/history-and-relaunch/">Zur Domainhistorie</a><a href="/download/">Status alter Ressourcen</a></nav>
  </main>
</body>
</html>`);
}
