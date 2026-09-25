import { technologies } from '../data/technologies'
import { Card, SectionHeader } from '../components/Common'
import SourceCite from '../components/SourceCite'

function SubSection({ title, ids }: { title: string; ids: string[] }) {
  const items = technologies.filter((t) => ids.includes(t.id))
  return (
    <Card className="mb-5">
      <h3 className="mb-3 text-base font-bold text-ink-900">{title}</h3>
      <div className="space-y-4">
        {items.map((t) => (
          <div key={t.id} className="border-b border-ink-100 pb-3 last:border-0 last:pb-0">
            <div className="text-sm font-semibold text-ink-800">{t.name}</div>
            <ul className="mt-1 list-inside list-disc text-sm text-ink-600">
              {[...t.capabilities, ...t.aiCapabilities].map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <div className="mt-2">
              <SourceCite sourceIds={t.sourceIds} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default function AIAutomation() {
  return (
    <div>
      <SectionHeader
        eyebrow="Section 5"
        title="AI & Automation"
        description="Verified AI applications across marketing, training and support, plus an explanatory framework for how AI agent technology is commonly described."
      />

      <SubSection title="AI in Marketing" ids={['tech-marketing-automation', 'tech-ai-marketing-agents', 'tech-crm']} />
      <SubSection title="AI in Training" ids={['tech-ai-assisted-learning', 'tech-lms']} />
      <SubSection title="AI in Support" ids={['tech-ai-support', 'tech-knowledge-management', 'tech-support-analytics']} />

      <Card>
        <h3 className="mb-1 text-base font-bold text-ink-900">AI Agents — Explanatory Framework</h3>
        <p className="mb-4 text-xs italic text-ink-500">
          This progression is an explanatory framework used to describe the general industry direction. It is not
          presented as an official standardized classification unless a specific source uses that exact
          terminology.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {['AI Assistant', 'AI Copilot', 'AI Agent'].map((s, i, arr) => (
            <div key={s} className="flex items-center gap-3">
              <span className="rounded-lg border border-ink-200 bg-ink-50 px-4 py-2 text-sm font-semibold text-ink-800">
                {s}
              </span>
              {i < arr.length - 1 && <span className="text-ink-300">→</span>}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-600">
          Official documentation from Salesforce and HubSpot verifies goal-oriented agents that can perform tasks,
          analyze data, generate outputs and take actions based on business processes, with controlled data access.
        </p>
        <div className="mt-3">
          <SourceCite sourceIds={['src-salesforce-docs', 'src-hubspot-docs']} />
        </div>
      </Card>
    </div>
  )
}
