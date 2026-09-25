import { useMemo, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { industryData } from '../data/industryData'
import { Card, SectionHeader } from '../components/Common'
import SourceCite from '../components/SourceCite'

export default function IndustryDataPage({ query }: { query: string }) {
  const [org, setOrg] = useState<string>('All')

  const orgs = useMemo(() => ['All', ...Array.from(new Set(industryData.map((d) => d.organization)))], [])

  const filtered = industryData.filter((d) => {
    const matchesOrg = org === 'All' || d.organization === org
    const q = query.trim().toLowerCase()
    const matchesQuery = !q || d.metric.toLowerCase().includes(q) || d.category.toLowerCase().includes(q)
    return matchesOrg && matchesQuery
  })

  const chartData = filtered
    .filter((d) => d.unit === '%')
    .map((d) => ({ name: d.metric.length > 28 ? d.metric.slice(0, 26) + '…' : d.metric, value: d.value }))

  return (
    <div>
      <SectionHeader
        eyebrow="Section 7"
        title="Industry Data"
        description="Verified statistics, each tied to a metric, source, sample size, geography and publication date. No statistic here was invented — figures not in the underlying dataset are not displayed."
      />

      <div className="mb-5 flex flex-wrap gap-2">
        {orgs.map((o) => (
          <button
            key={o}
            onClick={() => setOrg(o)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              org === o ? 'border-brand-600 bg-brand-600 text-white' : 'border-ink-200 bg-white text-ink-600 hover:bg-ink-100'
            }`}
          >
            {o}
          </button>
        ))}
      </div>

      {chartData.length > 0 && (
        <Card className="mb-6">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-ink-500">
            Percentage Metrics — {org === 'All' ? 'All Sources' : org}
          </h2>
          <div style={{ width: '100%', height: Math.max(220, chartData.length * 46) }}>
            <ResponsiveContainer>
              <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 30 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" domain={[0, 100]} tickFormatter={(v) => `${v}%`} stroke="#94a3b8" fontSize={12} />
                <YAxis type="category" dataKey="name" width={220} stroke="#64748b" fontSize={11} />
                <Tooltip formatter={(v: number) => [`${v}%`, 'Value']} />
                <Bar dataKey="value" fill="#2563eb" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((d) => (
          <Card key={d.id}>
            <div className="text-3xl font-extrabold text-brand-700">{d.displayValue}</div>
            <p className="mt-1 text-sm text-ink-700">{d.metric}</p>
            <div className="mt-3 space-y-1 text-xs text-ink-500">
              <div>
                Source: <span className="font-medium text-ink-700">{d.organization}</span>
              </div>
              <div>Report: {d.report}</div>
              {d.sampleSize && <div>Sample: {d.sampleSize}</div>}
              {d.geography && <div>Geography: {d.geography}</div>}
              <div>Date: {d.date}</div>
            </div>
            <div className="mt-3">
              <SourceCite sourceIds={[d.sourceId]} />
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-xl border border-dashed border-ink-300 bg-ink-50 px-6 py-10 text-center text-sm text-ink-500">
          No verified data points match this search/filter. More verified research will be added as the study
          continues.
        </div>
      )}
    </div>
  )
}
