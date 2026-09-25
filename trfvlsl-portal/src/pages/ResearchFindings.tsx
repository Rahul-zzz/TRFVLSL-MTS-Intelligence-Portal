import { researchFindings } from '../data/researchFindings'
import { Card, SectionHeader, EmptyState } from '../components/Common'
import SourceCite from '../components/SourceCite'

export default function ResearchFindings({ query }: { query: string }) {
  const q = query.trim().toLowerCase()
  const filtered = researchFindings.filter(
    (f) => !q || f.title.toLowerCase().includes(q) || f.description.toLowerCase().includes(q) || f.category.toLowerCase().includes(q)
  )

  return (
    <div>
      <SectionHeader
        eyebrow="Section 9"
        title="Research Findings"
        description="Conclusions drawn directly from the verified research dataset. Every finding names the source(s) that support it."
      />

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-5">
          {filtered.map((f) => (
            <Card key={f.id}>
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">{f.category} · {f.date}</div>
              <h3 className="mt-1 text-lg font-bold text-ink-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{f.description}</p>
              <div className="mt-4">
                <SourceCite sourceIds={f.sourceIds} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
