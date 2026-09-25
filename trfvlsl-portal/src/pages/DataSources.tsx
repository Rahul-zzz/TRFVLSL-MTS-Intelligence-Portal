import { useMemo, useState } from 'react'
import { sources } from '../data/sources'
import { Card, SectionHeader } from '../components/Common'
import SourceBadge from '../components/SourceBadge'

export default function DataSources({ query }: { query: string }) {
  const [typeFilter, setTypeFilter] = useState<string>('All')

  const types = useMemo(() => ['All', ...Array.from(new Set(sources.map((s) => s.type)))], [])

  const filtered = sources.filter((s) => {
    const matchesType = typeFilter === 'All' || s.type === typeFilter
    const q = query.trim().toLowerCase()
    const matchesQuery =
      !q || s.organization.toLowerCase().includes(q) || s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
    return matchesType && matchesQuery
  })

  return (
    <div>
      <SectionHeader
        eyebrow="Section 10"
        title="Data & Sources"
        description={`No source, no factual data. Every statistic, capability and finding in this portal traces back to one of the ${sources.length} sources below.`}
      />

      <div className="mb-5 flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setTypeFilter(t)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              typeFilter === t ? 'border-brand-600 bg-brand-600 text-white' : 'border-ink-200 bg-white text-ink-600 hover:bg-ink-100'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((s) => (
          <Card key={s.id}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">{s.type}</div>
                <h3 className="text-lg font-bold text-ink-900">{s.title}</h3>
                <div className="text-sm text-ink-500">{s.organization}</div>
              </div>
              <SourceBadge status={s.verificationStatus} />
            </div>
            <p className="mt-2 text-sm text-ink-700">{s.description}</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-ink-500 sm:grid-cols-4">
              <div>
                <div className="font-semibold text-ink-600">Source ID</div>
                {s.id}
              </div>
              <div>
                <div className="font-semibold text-ink-600">Published</div>
                {s.publicationDate}
              </div>
              <div>
                <div className="font-semibold text-ink-600">Last verified</div>
                {s.accessedDate}
              </div>
              <div>
                <div className="font-semibold text-ink-600">Status</div>
                {s.verificationStatus}
              </div>
            </div>
            <a
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-xs font-medium text-brand-600 hover:underline"
            >
              View Source ↗
            </a>
          </Card>
        ))}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-ink-300 bg-ink-50 px-6 py-10 text-center text-sm text-ink-500">
            No sources match this search/filter.
          </div>
        )}
      </div>
    </div>
  )
}
