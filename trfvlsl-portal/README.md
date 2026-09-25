# Marketing, Training & Support Technology Intelligence Portal

An internship research portal studying **Marketing Technology**, **Product Training**, **Product Support**, and
**AI & Automation**, built to identify realistic technology opportunities for **TR Finished Vehicles Logistics
Solutions Limited (TRFVLSL)**.

> **Core principle: REAL DATA FIRST. SOURCE EVERYTHING. DO NOT INVENT.**
> No source, no factual data.

---

## 1. Project Purpose

This portal is not a generic dashboard template. It exists to demonstrate a research process:

**Research → Verified Data → Source → Technology Understanding → TRFVLSL Opportunity**

Every statistic, technology capability, and product claim in the app traces back to an entry in
`src/data/sources.ts`. The only place recommendations appear is the **TRFVLSL Opportunities** page, and every
recommendation is explicitly labelled as such (never presented as an existing TRFVLSL fact).

## 2. Research Scope

- Marketing Technology (CRM, marketing automation, lead management, analytics, AI marketing agents)
- Product Training (LMS, employee training, knowledge management, AI-assisted learning)
- Product Support (helpdesk, ticketing, knowledge base, self-service, AI support/agents)
- AI & Automation (across all three domains, plus an explanatory AI-agent framework)
- TRFVLSL Opportunities (clearly labelled, validation-required recommendations only)

## 3. Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Recharts (only used where real numeric data exists)

No backend is included at this stage. All data lives in typed TypeScript files under `src/data/`, structured so
it can later be moved into a database without changing the UI layer.

## 4. Folder Structure

```
src/
  types.ts                 # Entity definitions (Source, IndustryDataPoint, Technology, Product,
                            # ResearchFinding, TRFVLSLOpportunity)
  data/
    sources.ts              # Single source of truth for citations
    industryData.ts          # Verified statistics only
    technologies.ts          # Technology category definitions & capabilities
    products.ts               # Technology Directory entries
    researchFindings.ts        # Conclusions drawn from verified research
    opportunities.ts            # TRFVLSL Opportunities (recommendations only)
  components/
    Layout.tsx               # Navigation + global search shell
    Common.tsx                # Card, SectionHeader, MetricCard, EmptyState, Pill
    SourceBadge.tsx            # Verification status badge
    SourceCite.tsx             # "View Source" citation strip
  pages/
    ExecutiveOverview.tsx
    TechCategoryPage.tsx        # Shared renderer for Marketing/Training/Support
    MarketingTechnology.tsx
    ProductTraining.tsx
    ProductSupport.tsx           # Includes the conceptual support-evolution diagram
    AIAutomation.tsx
    TechnologyDirectory.tsx       # Searchable, filterable product directory
    IndustryData.tsx                # Statistics + chart (Recharts, real values only)
    TRFVLSLOpportunities.tsx         # The only page with recommendations
    ResearchFindings.tsx
    DataSources.tsx                   # Full source list with "View Source" links
```

## 5. How to Run

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## 6. Data Verification Policy

1. **Type A — Verified Research**: factual, source-backed content (statistics, capabilities, platform features).
   Every record needs a `sourceIds` (or `sourceId`) reference into `sources.ts`.
2. **Type B — TRFVLSL Opportunities**: recommendations only, clearly labelled with a `recommendationStatus`
   (e.g. *Recommended for Further Investigation*, *Potential Opportunity — Validation Required*, *Longer-Term
   Opportunity*). Never phrase a recommendation as an existing TRFVLSL system or an existing TRFVLSL gap.
3. If verified information is not available, the UI shows **"Verified data not currently available"** or
   **"More verified research will be added as the study continues"** — never a fabricated placeholder.
4. Do not create scores (AI Readiness Score, Technology Maturity Score, ROI Score, etc.) unless a real
   methodology and actual TRFVLSL data exist to support them.

### How to add a source

Add an entry to the `sources` array in `src/data/sources.ts`:

```ts
{
  id: 'src-your-id',
  organization: 'Organization Name',
  title: 'Exact Report / Documentation Title',
  type: 'Official Documentation', // or Official Company Report / Government / Academic Research / Industry Research / Industry Publication
  url: 'https://...',
  publicationDate: '2026',
  accessedDate: 'Month Year you verified it',
  description: 'One or two sentences describing what this source verifies.',
  verificationStatus: 'VERIFIED', // or OFFICIAL DOCUMENTATION / INDUSTRY RESEARCH
}
```

### How to add a statistic

Add an entry to `industryData` in `src/data/industryData.ts`, referencing an existing (or newly added)
`sourceId`. Only add a value that is explicitly published in a real report — never estimate or round to make a
chart look better.

### How to add a technology

Add an entry to `technologies` in `src/data/technologies.ts`. List only `capabilities` and `aiCapabilities`
that your linked `sourceIds` actually support. Do not add a numeric score field.

### How to add a product (Technology Directory)

Add an entry to `products` in `src/data/products.ts`. Verify capabilities against the vendor's current official
documentation before adding, and set `verificationDate` to the date you checked.

### How to add a TRFVLSL opportunity

Add an entry to `opportunities` in `src/data/opportunities.ts`. Every opportunity must include:

- `researchBasis` — the verified research/documentation that motivates the idea
- `possibleApplication` — phrased as *could*, *potentially*, *may*, never as fact
- `validationRequired` — the open questions that must be answered before this becomes a real plan
- `recommendationStatus` — one of the four defined statuses

Never state or imply that TRFVLSL currently has, or currently lacks, a specific system unless that has been
independently verified with TRFVLSL itself.

## 7. Source Policy

Preferred source quality, in order:

1. **Highest priority** — Government, official product documentation, official company reports, regulatory
   bodies, original research
2. **Strong secondary** — Gartner, Forrester, McKinsey, Deloitte, PwC, IBM, LinkedIn, established research
   organizations
3. **Supporting** — established technology publications, industry publications

Avoid: random blogs, SEO content, unsourced websites, AI-generated articles, and social media posts used as
primary evidence.

## 8. Date Handling

The research baseline date for this portal is **September 2026**. Always show the actual publication year of a
source rather than assuming it is current. Where a source's exact edition year could not be confirmed at the
time of writing (e.g. the LinkedIn Learning India report), it is labelled `"Historical — verify edition year"`
rather than guessed.

## 9. Deployment

This is a static Vite build (`npm run build` outputs to `dist/`), so it can be deployed to any static host
(Vercel, Netlify, GitHub Pages, S3 + CloudFront, or an internal server). No environment variables or backend
services are required for the current version.

## 10. Final Quality Checklist (from the original brief)

Before adding or shipping new content, ask of every factual item:

1. Is this a factual claim?
2. Does it have a source?
3. Is the source identified?
4. Is the source URL stored?
5. Is the publication date known?
6. Is the information represented accurately?
7. Is it being confused with a recommendation?
8. Is it actually about TRFVLSL, or is it general industry information?

If any answer fails this check, remove or fix the item before publishing.
