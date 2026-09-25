import TechCategoryPage from './TechCategoryPage'
import { Card } from '../components/Common'

const STAGES = ['Manual Support', 'Digital Support', 'Ticketing', 'Knowledge Base', 'AI Assistance', 'AI Agent']

export default function ProductSupport() {
  return (
    <div>
      <Card className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-ink-500">
          Conceptual Technology Progression
        </h2>
        <p className="mt-1 mb-4 text-xs text-ink-500">
          This is an explanatory framework illustrating how support technology has conceptually evolved — it is not
          a measured industry maturity score and no organization's exact position on it has been verified.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {STAGES.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <span className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
                {s}
              </span>
              {i < STAGES.length - 1 && <span className="text-ink-300">→</span>}
            </div>
          ))}
        </div>
      </Card>

      <TechCategoryPage
        group="Product Support"
        eyebrow="Section 4"
        title="Product Support"
        description="Helpdesk, ticketing, knowledge base, self-service, AI support and AI agents — capabilities, real platforms, and sourced evidence."
      />
    </div>
  )
}
