---
name: Angel Perez · Portfolio
description: A backend engineer's portfolio that reads like a production deploy board.
colors:
  azul-deploy: "#4c63e6"
  azul-deploy-ink: "#ffffff"
  turquesa-pipeline: "#1fb5a8"
  turquesa-pipeline-text: "#138a80"
  marino-consola: "#1b1f3b"
  gris-registro: "#686d81"
  blanco-base: "#ffffff"
  bruma-celeste: "#f1f3fe"
  cielo-panel: "#c6d3df"
  cielo-panel-surface: "#d6e0e9"
  cielo-panel-ink: "#25303a"
  cielo-panel-accent: "#3f6a92"
typography:
  display:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(38px, 3.24vw + 25.4px, 72px)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(30px, 1.72vw + 23.3px, 48px)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 560
    lineHeight: 1.44
    letterSpacing: "-0.012em"
  stat:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(28px, 1.6vw + 18px, 48px)"
    fontWeight: 500
    lineHeight: 1
    fontFeature: "tnum"
  lead:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "14px"
    fontWeight: 400
rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
  btn: "8px"
  pill: "999px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "64px"
  s-9: "96px"
  s-10: "128px"
components:
  button-primary:
    backgroundColor: "{colors.azul-deploy}"
    textColor: "{colors.azul-deploy-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.btn}"
    padding: "0 24px"
    height: "44px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.marino-consola}"
    typography: "{typography.body}"
    padding: "0 8px"
    height: "44px"
  tag:
    backgroundColor: "color-mix(in oklab, #4c63e6 11%, #ffffff)"
    textColor: "color-mix(in oklab, #4c63e6 62%, #1b1f3b)"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
    height: "32px"
  accent-badge:
    backgroundColor: "{colors.azul-deploy}"
    textColor: "{colors.azul-deploy-ink}"
    rounded: "{rounded.pill}"
    padding: "0 10px"
    height: "28px"
  card:
    backgroundColor: "{colors.bruma-celeste}"
    textColor: "{colors.marino-consola}"
    rounded: "{rounded.lg}"
    padding: "32px"
  panel:
    backgroundColor: "{colors.cielo-panel}"
    rounded: "{rounded.md}"
  nav:
    backgroundColor: "{colors.blanco-base}"
    textColor: "{colors.marino-consola}"
    height: "72px"
---

# Design System: Angel Perez · Portfolio

## Overview

**Creative North Star: "El tablero de deploy"**

The page reads like a production console seen from outside: systems running, pipelines advancing, diagrams wired, tests passing. The interface itself stays white, navy and quiet so the running systems carry the interest. The hero opens on a live Visto Bueno deploy pipeline with Angel's card over it. The projects show architecture diagrams, a checklist and a terminal run. Each one is a real system from the CV rendered as UI, never a decorative mockup.

The density is calm: every section fills one or two screens, with generous top padding (120px, 96px on a phone) and a single 12-column grid that the header, the sections and the footer share. Colour is spare. Azul Deploy marks action, status and the facts that matter (the role, years, figures, group rules), and everything else is Marino Consola on white or on the Bruma Celeste band. Motion comes in three dealt beats (the hero's grain-gradient art, the specialty assembling letter by letter, the iris that opens the technology band), with quiet sections between them.

Depth is lightly lifted: cards rest with a hairline border and a 1–2px shadow, and the real objects (Angel's card in the hero, the CV's first page) float on a soft diffuse shadow. The owner has rejected black backgrounds: no dark bands, no inverse sections.

**Key Characteristics:**
- White ground, navy ink, one saturated blue for action and emphasis.
- Real systems from the CV shown as running UI (pipeline, diagrams, checklist, terminal).
- One 12-column grid at 1280px, sections one or two screens tall.
- Host Grotesk throughout, tight display tracking, JetBrains Mono only inside system UI.
- Lightly lifted cards, softly floating real objects.
- Three motion beats with still states; quiet sections between them.

## Colors

A cool, restrained palette: navy and white carry the page, one confident blue signals action, and a pale periwinkle wash forms the bands.

### Primary
- **Azul Deploy** (`azul-deploy`): the only action and emphasis colour. Filled primary button ("Descargar CV"), the role line in the hero, the year badges, the group rules over the technology columns, the rule and figure of the first focus stat, the language-level bars, the offset block behind the portrait, the brand mark, and focus outlines. It also sets `theme-color`.
- **Blanco sobre Deploy** (`azul-deploy-ink`): text and glyphs on Azul Deploy.

### Secondary
- **Turquesa Pipeline** (`turquesa-pipeline`, `--p-accent-2`): a second voice for data only. The rule over the second focus stat and the end of the language-level gradient (mixed 45% into the blue).
- **Turquesa Pipeline texto** (`turquesa-pipeline-text`, `--p-accent-2-text`): the darker turquoise for the second focus figure, so the number keeps text contrast on white.

### Neutral
- **Marino Consola** (`marino-consola`): all headings and body text. Card text uses it at 84% toward the card for a slightly softer read than titles.
- **Gris Registro** (`gris-registro`): muted meta only (labels in the about facts, language level, hero card meta). Never used for text people need to read in full.
- **Blanco Base** (`blanco-base`): the page ground, the header and the hero card.
- **Bruma Celeste** (`bruma-celeste`): the surface band (Tecnologías and Sobre mí) and the card fill on the base ground; on that band, cards flip to white.
- **Cielo Panel** (`cielo-panel`, `cielo-panel-surface`, `cielo-panel-ink`, `cielo-panel-accent`): the lit ground behind inset panels and diagrams. On this software page it is a soft mesh of its own tones, without grain.

Tints are derived, not new colours, and are set per ground in `src/styles.css` so they mix with the ground they sit on: `--accent-wash` (11% of the accent into the ground) fills the tags and the language-bar tracks, and `--accent-on-wash` (62% accent into the ink) is the text on that wash. Hairlines are navy at 11% (`--line`) and 20% (`--line-strong`). The certification checks use the kit's success green (#2f9e5b).

### Named Rules
**The One Blue Rule.** Azul Deploy is the only saturated hue in the chrome and the only action colour. Turquesa Pipeline speaks only inside data (figures, levels), never on a control; tool logos keep their own brand colours inside their tiles.

**The Daylight Rule.** No black or navy-filled section bands. The kit's inverse ground tokens exist but are not used; a contrast band is Bruma Celeste, never dark.

## Typography

**Display Font:** Host Grotesk (with system-ui, sans-serif)
**Body Font:** Host Grotesk (with system-ui, sans-serif)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SFMono-Regular, Menlo, Consolas)

**Character:** One grotesk across the whole page, set tight and medium at display sizes for an engineered, matter-of-fact voice; JetBrains Mono appears only where a system speaks (commands, file names, pipeline steps).

### Hierarchy
- **Display** (500, clamp 38→72px, 1.04, −0.035em): the hero line only ("Angel Perez, ingeniero de software backend"), with the role in Azul Deploy.
- **Headline** (500, clamp 30→48px, 1.1, −0.035em): section headings. A section head may continue in muted text after the heading sentence.
- **Section title / h3** (500, 24px → 28px from 1024px, 1.2): sub-heads inside sections.
- **Title** (560, 18px → 20px from 1024px, 26px line): card titles, in the text face.
- **Stat** (500, clamp 28→48px, 1, tabular figures): the three focus figures, always a step below the headline so a number never reads as a section heading.
- **Lead** (400, 18px → 20px from 1024px, 1.5): the line under the hero and the about lead (max 46ch).
- **Body** (400, 16px, 1.55): reading text, max 62ch; card text max 46ch.
- **Small** (14px, 1.5) and **Label** (500, 13px, 1.4, +0.01em): meta, tags, list labels.
- **Mono** (400–500, 14px): commands and file names inside the pipeline, terminal and checklist fragments.

### Named Rules
**The Sixteen Floor Rule.** Text people read is 16px or larger in Marino Consola; small and label sizes carry meta only.

**The Fixed Scale Rule.** The kit's `--t-*` steps are the only sizes on the page; a new element picks one of them, never its own size.

## Layout

One `.wrap` container, 1280px wide, with an equal side gutter of 80px on desktop, 48px from 640px and 24px on a phone; 24px between columns (12px on a phone). Every section uses the same 12-column grid and is exactly one or two screens tall (`--h`, `--hm` on a phone), padded 120px above and 72px below (96/48 on a phone). The header is 72px (56px on a phone). Headings sit 48px above their content (32px on a phone).

Breakpoints are 640, 1024 and 1280px, and each section has an explicit arrangement at each one rather than relying on reflow: projects keep a 2×2 grid with a fixed panel height per breakpoint, the technology groups go from six columns to three to one, the about section puts facts and portrait side by side on a tablet, and the jobs list goes from three columns (role, text, years) to the role with its years on one line and the text under them, from 1023px down.

Spacing follows a 4/8 scale (`s-1` 4px to `s-10` 128px). On a phone, secondary material that already lives in the CV (architecture and method lists, card descriptions) is hidden rather than squeezed.

### Named Rules
**The One Grid Rule.** Header, sections and footer share the same container and gutter; nothing breaks out of the 1280px column except the hero art, which is cut by the frame's right edge.

## Elevation & Depth

Lightly lifted. Surfaces separate mostly by tone (white, Bruma Celeste, Cielo Panel) and hairlines, with a gentle, real lift on cards and a clear float on the few physical objects. Shadows are cool, derived from the navy ink rather than black, and they can extend to new components that represent real objects.

### Shadow Vocabulary
- **Card rest** (`box-shadow: inset 0 1px 0 <highlight>, 0 1px 2px <shade>`, derived from the card's lightness): every card, with a 1px border at 8% ink.
- **Floating object** (`box-shadow: 0 0 0 1px rgb(27 31 59 / .10), 0 18px 40px -20px rgb(27 31 59 / .45)`): the identity card (portrait, role, place) under the deploy window in the hero frame.
- **Paper sheet** (`box-shadow: 0 0 0 1px rgb(27 31 59 / .10), 0 28px 56px -28px rgb(27 31 59 / .55)`): the CV's first page in the closing section.
- **Offset block** (`box-shadow: -16px 16px 0 #4c63e6`, `0 12px 0` below 1024px): the portrait in Sobre mí; a solid colour block, not a blur.

### Named Rules
**The Real Object Rule.** A diffuse shadow belongs to something that exists outside the screen (a person's card, a printed page). Interface chrome stays at card-rest depth.

## Shapes

Soft geometry (`data-radius="soft"`): 8px on buttons and small elements, 12px on panels and small cards, 20px on cards and frames (18px on a phone). An inset panel's radius is the card's radius minus its 8px margin, so nested corners stay concentric. Pills (`--r-pill`) are reserved for tags, year badges, counts and the language bars. The hero avatar on a phone is the only circle. Rules are straight: 2px Azul Deploy over each technology group, 3px over each focus stat (blue, turquoise, navy).

## Components

### Buttons
Precise and calm: one filled button with an arrow, everything else a link.
- **Shape:** gently rounded (8px), 44px tall, 24px horizontal padding, 16px medium text.
- **Primary:** Azul Deploy fill, white text, a drawn arrow after the label that slides 3px on hover. Hover darkens the fill 14% toward the ink; press nudges 1px down and scales to 0.985.
- **Secondary:** a text link at button height with an underline at 20% ink that turns solid on hover, also ending in the arrow ("Enviar un email").
- **Focus:** a 2px Azul Deploy outline at 2px offset on every focusable element.
- **On a phone:** a button row stacks full width; the header keeps only the primary.

### Tags
- **Style:** pills, 32px minimum height, Azul Deploy at 11% fill with blue-navy text, 14px medium. Used for the hero facts, soft skills, architecture and methods.
- **On a phone:** soft skills drop the fill and become accent words.

### Accent Badge
A solid Azul Deploy pill, 28px tall, tabular figures: the years beside each job and degree, and the count beside each technology group (28px minimum width). On a phone a year may wrap to two lines with a 12px radius.

### Cards / Containers
- **Corner Style:** 20px (18px on a phone).
- **Background:** Bruma Celeste on the white ground, white on the Bruma Celeste band.
- **Shadow Strategy:** card rest (see Elevation & Depth).
- **Border:** 1px at 8% ink.
- **Internal Padding:** 28px, 32px from 1024px, 20px on a phone.
- **Open card:** a card whose panel holds UI drops its own box, so the title and text sit on the page over the panel. Never more than two boxes nested.

### Panels
The inset visual inside a card or frame: Cielo Panel ground with a soft mesh of its own tones, 12px corners, running off the card's bottom edge. Hosts the diagrams, checklist and terminal fragments, which take their colours from the ground they sit on.

### Navigation
A fixed, opaque white bar with one hairline under it, identical at every scroll depth (no blur, no floating pill, never hidden on scroll). Logo left: the deploy mark in Azul Deploy (two pipeline steps joined by a line that ends in a check, 30×9px) beside "Angel Perez" in 22px display; the footer repeats it in its ground's accent, and the favicon draws it in white on an Azul Deploy rounded square (public/favicon.svg, favicon.ico). Section links centred, 15px medium, with a 2px underline that grows from the left on hover and focus. Right: the English/Español switch and the primary button. On a phone the links fold into a menu and the bar keeps the logo and the main action.

### Signature: Deploy Pipeline
The hero art: a pipeline board of the Visto Bueno deploy (Tests, QA E2E, Snapshot, Imagen, Publicar) on a grain-gradient field. All five steps advance as a loop from Tests; its pause control stays hidden and shows only on keyboard focus; the whole piece has a text equivalent. The frame takes its content's height, not the screen's: the deploy window (cut by the frame's right edge) and, under it, the identity card (portrait, role, place). From 1024px the words and the frame sit side by side, centred on the first screen, so the screen's air sits around the pair and never inside a box; a tablet stacks them and the hero grows with them; a phone keeps the window alone and the portrait as a 40px avatar beside the facts.

### Experience Timeline
The jobs list runs down a timeline beside the years: a 2px rail in Azul Deploy's tint (28% into the ground) down the list's right edge, from the first role's dot to the last. Each role carries a 14px dot level with the centre of its year badge, 18px to the badge's right: the current role filled in Azul Deploy with a soft 4px halo, the earlier ones as 2px Azul Deploy rings on the ground. The rows keep their hairlines.

### Signature: Focus Stats
Three figures, each under a 3px rule in its own colour: Azul Deploy, then Turquesa Pipeline (figure in its darker text tone), then Marino Consola. Each figure sits above a Marino Consola label, after the specialty statement assembles letter by letter.

## Do's and Don'ts

### Do:
- **Do** keep Azul Deploy as the single action and emphasis colour, with one filled primary button per view.
- **Do** show proof as running UI of systems from the CV (pipelines, diagrams, terminal runs, checklists) on Cielo Panel grounds.
- **Do** use the kit's tokens (`--t-*`, `--s-*`, `--r-*`, `--p-*`) and the page's own (`--r-pill`, `--accent-wash`, `--accent-on-wash`, `--p-accent-2*`); keep page-specific CSS in `src/styles.css` and palette values in the `:root` block of `src/index.html`; `public/assets` is copied from the kit.
- **Do** give every loop a pause control (hidden from the pointer, shown on keyboard focus) and a complete still state for reduced motion, and every visual a text equivalent in both languages.
- **Do** lay each section out explicitly at 390, 640, 1024 and 1440px within the one grid.
- **Do** keep continuity motion to two moves, both off under reduced motion: menu jumps scroll smoothly (in-page anchors keep the page's `?lang=` so they never reload), and the language switch crossfades in 220ms through a cross-document view transition.
- **Do** derive tints and shadows from the navy ink and the blue with `color-mix`, not from new hex values.

### Don't:
- **Don't** use black or dark backgrounds: no dark bands, no inverse sections.
- **Don't** add a second saturated hue to the chrome; tool logos keep their own colours only inside their tiles.
- **Don't** set reading text below 16px or in Gris Registro.
- **Don't** give interface chrome a diffuse floating shadow; that depth belongs to real objects (the hero card, the CV page).
- **Don't** blur, hide or float the header.
- **Don't** nest more than two boxes.
