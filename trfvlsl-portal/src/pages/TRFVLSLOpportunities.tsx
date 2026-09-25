import { opportunities } from '../data/opportunities'
import { Card, SectionHeader } from '../components/Common'
import SourceCite from '../components/SourceCite'

const statusStyles: Record<string, string> = {
  'Recommended for Further Investigation': 'bg-brand-50 text-brand-700 border-brand-200',
  'Potential Opportunity — Validation Required': 'bg-amber-50 text-amber-800 border-amber-200',
  'Potential Opportunity': 'bg-violet-50 text-violet-700 border-violet-200',
  'Longer-Term Opportunity': 'bg-ink-100 text-ink-700 border-ink-300',
}

export default function TRFVLSLOpportunities() {
  return (
    <div>
      <SectionHeader
        eyebrow="Section 8"
        title="TRFVLSL Opportunities"
        description="The only section of this portal that contains recommendations rather than verified facts. Every item below is clearly labelled and is based on verified technology research plus practical reasoning — never presented as an existing TRFVLSL system."
      />

      <div className="space-y-5">
        {opportunities.map((o, idx) => (
          <Card key={o.id}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  Opportunity {idx + 1} · {o.category}
                </div>
                <h3 className="text-lg font-bold text-ink-900">{o.title}</h3>
              </div>
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[o.recommendationStatus]}`}
              >
                {o.recommendationStatus}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">Research Basis</div>
                <p className="text-sm text-ink-700">{o.researchBasis}</p>
              </div>
              <div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Possible TRFVLSL Application
                </div>
                <ul className="list-inside list-disc text-sm text-ink-700">
                  {o.possibleApplication.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                Why It Could Be Useful
              </div>
              <p className="text-sm text-ink-700">{o.businessPurpose}</p>
            </div>

            <div className="mt-4">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                What Must Be Validated
              </div>
              <ul className="list-inside list-disc text-sm text-ink-700">
                {o.validationRequired.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <SourceCite sourceIds={o.sourceIds} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
