# HULKs Website

Alle Inhalte (Team, Publikationen, Sponsoren, Events, Presse …) liegen als JSON in `src/data/`. Um Inhalte zu ändern, muss kein Code angepasst werden.

## Installation

Voraussetzung: Node.js 18 oder neuer (<https://nodejs.org/>).

```bash
git clone https://github.com/soerenpriess/HulksWebsite.git
cd HulksWebsite
npm install
npm run dev
```

Danach die Seite unter <http://localhost:5173> im Browser öffnen.

Für einen Produktions-Build: `npm run build` (Ergebnis liegt in `dist/`). Mit `npm run preview` lässt sich der Build lokal testen.

## Die Daten-JSONs

Alle Inhalte werden aus den Dateien in `src/data/` geladen.

**`site.json`** — Grunddaten der Seite: Teamname, Beschreibung, Gründungsjahr, Adresse, Kontakt-E-Mails, Social-Media-Links, Statistiken für die Startseite, „Über uns“-Text, YouTube-Video, Navigation.

**`team.json`** — Das aktuelle Team, gruppiert nach Rolle (Vorstand, Leads, Team). Pro Person: Name, Rolle, Studiengang, E-Mail, GitHub-Handle und Avatar-Bild.

**`team-history.json`** — Chronik vergangener Saisons mit Gruppenfoto und Mitgliedern pro Jahr. Wird auf der Team-Seite unterhalb des aktuellen Teams angezeigt.

**`code.json`** — Inhalte der Code-Seite: Einleitungstext, GitHub-Organisation, hervorgehobene Repositories

**`publications.json`** — Publikationsliste, geordnet nach Kategorien (Papers, Peer-Reviewed, White Papers, Theses …). Pro Eintrag: Titel, Autoren, optional Jahr und Link zur PDF (aus `public/publications/`).

**`events.json`** — Events und Wettbewerbe, die auf der Startseite als Karten erscheinen. Pro Event: Titel, Ort, Datum, Tags, kurze Beschreibung, Bild und optional ein Erfolgs-Highlight.

**`sponsors.json`** — Sponsoren der Seite `/sponsors`, gruppiert nach Stufen (Industry Partners, Supporters, Academic). Pro Sponsor: Name, Website, Logo (aus `public/sponsors/`) und optional eine Beschreibung.

**`press.json`** — Inhalte der Presse-Seite: Einleitung, Presse-Kontakt, Logo-Downloads (SVG/PDF/PNG) und der Pressespiegel mit Datum, Quelle, Titel und Link zum Artikel.

## Inhalte pflegen

1. Passende JSON-Datei in `src/data/` öffnen und bearbeiten.
2. Bilder und PDFs in den passenden Unterordner von `public/` legen:
   - Team-Fotos → `public/team/members/` bzw. `public/team/groups/`
   - Sponsoren-Logos → `public/sponsors/`
   - Logos → `public/logos/`
   - Publikations-PDFs → `public/publications/`
3. Im JSON den Pfad absolut zum Web-Root angeben, z. B. `/team/members/max.jpg`.

Solange `npm run dev` läuft, sind Änderungen dank Hot Reload sofort im Browser sichtbar.
