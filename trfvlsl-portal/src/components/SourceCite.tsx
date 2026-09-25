import { sources } from '../data/sources'

export default function SourceCite({ sourceIds }: { sourceIds: string[] }) {
  if (!sourceIds || sourceIds.length === 0) {
    return <p className="text-xs italic text-ink-400">Verified data not currently available.</p>
  }
  return (
    <div className="flex flex-wrap gap-2 border-t border-ink-100 pt-2">
      {sourceIds.map((id) => {
        const s = sources.find((src) => src.id === id)
        if (!s) return null
        return (
          <a
            key={id}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-ink-50 px-2 py-1 text-xs text-ink-600 hover:bg-ink-100 hover:text-brand-700"
            title={s.description}
          >
            <span className="font-medium">{s.organization}</span>
            <span className="text-ink-400">— {s.title}</span>
            <span className="text-brand-600">View Source ↗</span>
          </a>
        )
      })}
    </div>
  )
}
