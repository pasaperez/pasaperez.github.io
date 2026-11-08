# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A mixed audience with no single priority: recruiters and hiring managers in Argentina and Latin America, international recruiters (mostly remote roles), and technical peers who want to check the work behind the profile. They arrive from a CV, LinkedIn or a direct link and decide within seconds whether to keep reading.

## Product Purpose

Personal portfolio and interactive CV of Angel Santiago Perez, a full stack Information Systems Engineer based in Maipú, Mendoza, Argentina: backend first (Java, Spring Boot, microservices), frontend in React and Angular, and cloud operations on AWS and GCP with CI/CD, plus engineering with AI agents. The owner chose this positioning over "backend engineer": the backend stays the lead strength, but the site sells the whole range, from code to operation.

A visit succeeds when the visitor:

- understands the seniority quickly: a full stack systems engineer who takes systems all the way to production, from fintech payments to a co-founded SaaS;
- downloads the CV PDF in their language;
- continues to LinkedIn or GitHub to keep validating the profile.

Email contact is available but is not the primary success measure.

## Positioning

Shipped production systems, not a list of skills: Visto Bueno (multi-tenant SaaS co-founded and taken to production by the owner, one-command deploy with ~10,000 tests and 500+ end-to-end tests), core payment services for the Wepa network at itti, and the owner's own AI-agent engineering workflows (DevFlow, QAFlow). The site shows how those systems run (deploy pipeline, architecture diagrams, test runs) instead of describing them.

## Operating Context

- Read on desktop and phone, often between other profiles in a hiring pipeline.
- Bilingual: Spanish at `/` and English at `/en/`, each prerendered at build time as its own static page with its own head (title, description, canonical, hreflang pair, Open Graph, JSON-LD) and CV PDF; old `?lang=` links redirect to the matching page.
- The CV PDF is the artifact visitors carry into their own process; each language serves its own PDF and first-page preview.

## Capabilities and Constraints

- Angular 22 zoneless single page, deployed to GitHub Pages from the `gh-pages` branch (GitHub Actions on push to `main`, or `npm run deploy`).
- All copy, in both languages, lives in `src/app/core/services/language.service.ts`; tools and their icons in `src/app/pages/home/tools.ts`. Years of experience are computed from 2019.
- Current implementation uses a copied taste-skill kit in `public/assets` with site-specific styles in `src/styles.css` and color/font tokens in the `:root` block of `src/index.html`. This is the current state, not a commitment the owner made binding.
- No backend, no contact form, no analytics recorded here.

## Brand Commitments

- Name: Angel Santiago Perez (short form "Angel Perez").
- Every text exists in Spanish and English with equal content; no feature or section ships in only one language.
- Only real, verifiable facts: roles, dates, companies, projects and figures come from the owner's actual history and CV. Never invent testimonials, clients, metrics, logos of employers or achievements.
- Product names and logos shown are trademarks of their owners and are credited as such.

## Evidence on Hand

- Portrait: `public/perfil.jpg`.
- CV PDFs: `public/Angel_Perez_CV_2026.pdf` (en), `public/Angel_Perez_CV_2026_ES.pdf` (es), with LaTeX sources `public/main.tex` and `public/main.es.tex`; first-page previews `public/cv-en.jpg` and `public/cv-es.jpg` (contact line removed).
- Share image: `public/share.jpg`.
- Real tool logos in `public/assets/icons` with `icons-credits.json`.
- Project facts in copy: Visto Bueno (https://vistobueno.tech), Wepa at itti, DevFlow, QAFlow; six roles since 2019; two UTN Mendoza degrees (2022); certifications listed in the language service.
- Contact: pasaperez@yahoo.com.ar, angel.pasaperez@gmail.com, linkedin.com/in/pasaperez, github.com/pasaperez, github.com/pasaperez-work.
- Absent, and must not be fabricated: testimonials or recommendations, employer logos used as endorsements, screenshots of Visto Bueno or Wepa internals, public source code for the professional projects.

## Product Principles

1. Seniority first: the first screen must make "full stack systems engineer who ships to production" legible without scrolling.
2. Show the system, not the adjective: proof comes from real pipelines, architectures and numbers, never self-description.
3. Two languages, one page: Spanish and English stay at full parity in content and quality.
4. Every claim survives a background check: if it is not in the CV or the owner's real history, it does not go on the page.
5. Fast exits to proof: the CV, LinkedIn and GitHub are always one step away.

## Accessibility & Inclusion

- Target WCAG 2.2 AA as a requirement, not a nice-to-have.
- Full keyboard navigation and screen-reader support, including the animated pieces (pipeline, diagrams, terminal, checklist), which need text equivalents.
- Respect `prefers-reduced-motion`: every animation has a still, complete state.
- The owner holds a C.U.D. (Certificado Único de Discapacidad), stated on the page; accessibility is a personal commitment of the site, not only compliance.
