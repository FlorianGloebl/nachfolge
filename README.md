# G&P Unternehmensnachfolge – Landingpage

Landingpage für G&P Management Consultants zum Thema Unternehmensnachfolge im
Mittelstand. Astro + TypeScript + Tailwind CSS, statischer Build, Deployment über
GitHub Pages (GitHub Actions).

## Setup

```sh
npm install
npm run dev       # lokaler Dev-Server, http://localhost:4321
npm run build     # statischer Build nach ./dist/
npm run preview   # Build lokal testen
```

## Projektstruktur

```text
/
├── public/
│   ├── images/{hero,team,partners,content}/
│   ├── logos/            # G&P- und AmbergTax-Logo
│   └── downloads/        # Ablage für den Nachfolge-Check-PDF-Download (siehe TODOs)
├── src/
│   ├── components/       # eine Komponente pro Seitensektion
│   ├── layouts/BaseLayout.astro
│   ├── pages/{index,impressum,datenschutz}.astro
│   └── styles/global.css # Design-Tokens (Farben, Fonts) über Tailwind @theme
├── astro.config.mjs
└── .github/workflows/deploy-pages.yml
```

## Deployment (GitHub Pages)

Push nach `main` löst automatisch `.github/workflows/deploy-pages.yml` aus:
Build → Upload als Pages-Artefakt → Deploy. Repo-Einstellung **Pages → Source:
GitHub Actions** muss einmalig aktiviert sein.

- Live unter der Custom Domain **https://www.nachfolge.g-u-p.de** (DNS-CNAME auf
  `<user>.github.io`, in `public/CNAME` hinterlegt). Der Workflow baut ohne
  `BASE_PATH`-Override, `astro.config.mjs` läuft mit `base: "/"`.
- Falls die Custom Domain vorübergehend nicht erreichbar ist (DNS-Ausfall o.ä.),
  kann testweise wieder unter `https://<user>.github.io/nachfolge/` deployt werden:
  dazu `BASE_PATH: /nachfolge/` als `env:` beim Build-Step in `deploy-pages.yml`
  ergänzen und `public/CNAME` temporär entfernen.

## Bildquellen

Siehe [`IMAGE_SOURCES.md`](./IMAGE_SOURCES.md) für alle verwendeten Stockfotos
(Pexels License) sowie Team-/Partnerfotos und deren offizielle Quellen.

## Offene TODOs

1. **Brevo Double-Opt-in einbinden**: `src/components/WhitepaperSection.astro`
   enthält aktuell nur ein Platzhalter-Formular (rein clientseitig, kein
   Versand). Der reale Brevo-Embed-Code muss die markierte Stelle ersetzen
   (siehe Kommentar `BREVO EMBED` im Code). Keine API-Keys ins Frontend.
2. **Nachfolge-Check-PDF hinterlegen**: Der eigentliche Download-Link wird laut
   Konzept erst nach Bestätigung der E-Mail-Adresse automatisiert verschickt
   (über Brevo), nicht öffentlich im HTML verlinkt.
3. **Impressum vervollständigen**: Handelsregister, Registergericht,
   Registernummer und USt-ID fehlen noch (`src/pages/impressum.astro`).
4. **V&S-Co-Branding klären**: Ein früherer HTML-Entwurf im Projektordner war
   als gemeinsame G&P × Vollmer & Scheffczyk-Seite angelegt. Diese Version ist
   bewusst reines G&P gemäß Master-Briefing — mit dem Team abstimmen, ob ein
   V&S-Co-Branding tatsächlich gewünscht ist.
5. **Stockfotos perspektivisch ersetzen**: Aktuell lizenzfreie Pexels-Fotos.
   Eigene G&P-Projektfotos würden die Seite noch authentischer machen.

Erledigt: Custom Domain (www.nachfolge.g-u-p.de, DNS + HTTPS aktiv), Kim
Flores/Michael Kasteleiner/Susanne Stroet-Fotos (von Florian bereitgestellt),
AmbergTax-Logo-Freigabe (von Florian erteilt).

## Design-System

Farben, Fonts und Radien liegen als Tailwind-v4-`@theme`-Tokens in
`src/styles/global.css` (`--color-gp-red`, `--font-display`, …). Schriften
(Inter, Manrope) sind selbst gehostet (`@fontsource/*`) — keine Anfrage an
Google-Server (DSGVO).
