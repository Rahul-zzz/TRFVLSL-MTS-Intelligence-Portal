import { useMemo, useState } from 'react'
import { products } from '../data/products'
import { Card, SectionHeader, Pill } from '../components/Common'
import SourceBadge from '../components/SourceBadge'
import SourceCite from '../components/SourceCite'

export default function TechnologyDirectory({ query }: { query: string }) {
  const [categoryFilter, setCategoryFilter] = useState<string>('All')

  const categories = useMemo(() => {
    const set = new Set<string>()
    products.forEach((p) => p.category.forEach((c) => set.add(c)))
    return ['All', ...Array.from(set).sort()]
  }, [])

  const filtered = products.filter((p) => {
    const matchesCategory = categoryFilter === 'All' || p.category.includes(categoryFilter)
    const q = query.trim().toLowerCase()
    const matchesQuery =
      !q ||
      p.company.toLowerCase().includes(q) ||
      p.product.toLowerCase().includes(q) ||
      p.capabilities.some((c) => c.toLowerCase().includes(q))
    return matchesCategory && matchesQuery
  })

  return (
    <div>
      <SectionHeader
        eyebrow="Section 6"
        title="Technology Directory"
        description="A searchable directory of real technology products. Not exhaustive — additional products are added only once their capabilities are verified."
      />

      <div className="mb-5 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategoryFilter(c)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              categoryFilter === c
                ? 'border-brand-600 bg-brand-600 text-white'
                : 'border-ink-200 bg-white text-ink-600 hover:bg-ink-100'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {filtered.map((p) => (
          <Card key={p.id}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">{p.company}</div>
                <h3 className="text-lg font-bold text-ink-900">{p.product}</h3>
              </div>
              <SourceBadge status={p.verificationStatus} />
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {p.category.map((c) => (
                <Pill key={c}>{c}</Pill>
              ))}
            </div>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-ink-700">
              {p.capabilities.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <div className="mt-3 text-xs text-ink-500">Verified: {p.verificationDate}</div>
            <a
              href={p.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-xs font-medium text-brand-600 hover:underline"
            >
              Official product page ↗
            </a>
            <div className="mt-3">
              <SourceCite sourceIds={p.sourceIds} />
            </div>
          </Card>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-xl border border-dashed border-ink-300 bg-ink-50 px-6 py-10 text-center text-sm text-ink-500">
            No products match this search/filter.
          </div>
        )}
      </div>
    </div>
  )
}
