import { sources } from '../data/sources'
import { industryData } from '../data/industryData'
import { technologies } from '../data/technologies'
import { products } from '../data/products'
import { researchFindings } from '../data/researchFindings'
import { opportunities } from '../data/opportunities'
import { Card, MetricCard, SectionHeader } from '../components/Common'
import SourceCite from '../components/SourceCite'
import SourceBadge from '../components/SourceBadge'

export default function ExecutiveOverview() {
  const latestSources = [...sources].slice(0, 5)

  return (
    <div>
      <SectionHeader
        eyebrow="Executive Overview"
        title="Research Dashboard"
        description="All figures below are calculated automatically from the underlying verified dataset — nothing on this page is hardcoded or estimated."
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        <MetricCard label="Verified Sources" value={sources.length} />
        <MetricCard label="Verified Data Points" value={industryData.length} />
        <MetricCard label="Technologies Studied" value={technologies.length} />
        <MetricCard label="Technology Products" value={products.length} />
        <MetricCard label="Research Findings" value={researchFindings.length} />
        <MetricCard label="TRFVLSL Opportunities" value={opportunities.length} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="mb-4 text-lg font-bold text-ink-900">Key Research Findings</h2>
          <div className="space-y-4">
            {researchFindings.slice(0, 3).map((f) => (
              <div key={f.id} className="border-b border-ink-100 pb-4 last:border-0 last:pb-0">
                <div className="text-sm font-semibold text-ink-800">{f.title}</div>
                <p className="mt-1 text-sm text-ink-600">{f.description}</p>
                <div className="mt-2">
                  <SourceCite sourceIds={f.sourceIds} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 text-lg font-bold text-ink-900">Latest Research Updates</h2>
          <p className="mb-3 text-xs text-ink-500">Ordered by source publication / access date on record.</p>
          <div className="space-y-3">
            {latestSources.map((s) => (
              <div key={s.id} className="flex items-start justify-between gap-3 border-b border-ink-100 pb-3 last:border-0 last:pb-0">
                <div>
                  <div className="text-sm font-semibold text-ink-800">{s.title}</div>
                  <div className="text-xs text-ink-500">
                    {s.organization} · {s.publicationDate}
                  </div>
                </div>
                <SourceBadge status={s.verificationStatus} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="mb-2 text-lg font-bold text-ink-900">About this research</h2>
        <p className="text-sm leading-relaxed text-ink-600">
          This portal studies Marketing Technology, Product Training, Product Support and AI &amp; Automation, and
          identifies realistic, clearly-labelled opportunities for TR Finished Vehicles Logistics Solutions Limited
          (TRFVLSL). Every factual statement is traceable to a source in{' '}
          <span className="font-medium text-ink-800">Data &amp; Sources</span>. Recommendations appear only in{' '}
          <span className="font-medium text-ink-800">TRFVLSL Opportunities</span> and are explicitly labelled as
          such — they are never presented as existing TRFVLSL facts.
        </p>
      </Card>
    </div>
  )
}
