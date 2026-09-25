import { VerificationStatus } from '../types'

const styles: Record<VerificationStatus, string> = {
  VERIFIED: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'OFFICIAL DOCUMENTATION': 'bg-brand-50 text-brand-700 border-brand-100',
  'INDUSTRY RESEARCH': 'bg-violet-50 text-violet-700 border-violet-200',
  RECOMMENDATION: 'bg-amber-50 text-amber-800 border-amber-200',
  'VALIDATION REQUIRED': 'bg-rose-50 text-rose-700 border-rose-200',
}

export default function SourceBadge({ status }: { status: VerificationStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${styles[status]}`}
    >
      {status}
    </span>
  )
}
