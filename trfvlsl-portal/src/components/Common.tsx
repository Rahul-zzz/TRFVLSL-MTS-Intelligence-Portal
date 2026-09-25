import { ReactNode } from 'react'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-ink-200 bg-white p-5 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</div>
      )}
      <h1 className="text-2xl font-bold text-ink-900">{title}</h1>
      {description && <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-600">{description}</p>}
    </div>
  )
}

export function EmptyState({ message = 'More verified research will be added as the study continues.' }: { message?: string }) {
  return (
    <div className="rounded-xl border border-dashed border-ink-300 bg-ink-50 px-6 py-10 text-center text-sm text-ink-500">
      {message}
    </div>
  )
}

export function MetricCard({ label, value }: { label: string; value: string | number }) {
  return (
    <Card>
      <div className="text-3xl font-extrabold text-ink-900">{value}</div>
      <div className="mt-1 text-sm text-ink-500">{label}</div>
    </Card>
  )
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-ink-100 px-2.5 py-0.5 text-xs font-medium text-ink-600">
      {children}
    </span>
  )
}
