import { technologies } from '../data/technologies'
import { products } from '../data/products'
import { TechCategoryGroup } from '../types'
import { Card, SectionHeader, EmptyState, Pill } from '../components/Common'
import SourceBadge from '../components/SourceBadge'
import SourceCite from '../components/SourceCite'

export default function TechCategoryPage({
  group,
  eyebrow,
  title,
  description,
}: {
  group: TechCategoryGroup
  eyebrow: string
  title: string
  description: string
}) {
  const items = technologies.filter((t) => t.group === group)

  return (
    <div>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />

      {items.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-5">
          {items.map((t) => {
            const relatedProducts = products.filter((p) => t.products.includes(p.id))
            return (
              <Card key={t.id}>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">{t.category}</div>
                    <h3 className="text-lg font-bold text-ink-900">{t.name}</h3>
                  </div>
                  <SourceBadge status={t.verificationStatus} />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{t.definition}</p>

                {t.capabilities.length > 0 && (
                  <div className="mt-4">
                    <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink-500">
                      Verified Capabilities
                    </div>
                    <ul className="list-inside list-disc space-y-1 text-sm text-ink-700">
                      {t.capabilities.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {t.aiCapabilities.length > 0 && (
                  <div className="mt-4">
                    <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink-500">
                      AI Capabilities
                    </div>
                    <ul className="list-inside list-disc space-y-1 text-sm text-ink-700">
                      {t.aiCapabilities.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {relatedProducts.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {relatedProducts.map((p) => (
                      <Pill key={p.id}>{p.company}</Pill>
                    ))}
                  </div>
                )}

                <div className="mt-4">
                  <SourceCite sourceIds={t.sourceIds} />
                </div>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
