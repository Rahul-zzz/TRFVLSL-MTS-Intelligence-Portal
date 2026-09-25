import { ReactNode, useState } from 'react'

export type PageKey =
  | 'overview'
  | 'marketing'
  | 'training'
  | 'support'
  | 'ai'
  | 'directory'
  | 'industry'
  | 'opportunities'
  | 'findings'
  | 'sources'

const NAV: { key: PageKey; label: string; num: string }[] = [
  { key: 'overview', label: 'Executive Overview', num: '1' },
  { key: 'marketing', label: 'Marketing Technology', num: '2' },
  { key: 'training', label: 'Product Training', num: '3' },
  { key: 'support', label: 'Product Support', num: '4' },
  { key: 'ai', label: 'AI & Automation', num: '5' },
  { key: 'directory', label: 'Technology Directory', num: '6' },
  { key: 'industry', label: 'Industry Data', num: '7' },
  { key: 'opportunities', label: 'TRFVLSL Opportunities', num: '8' },
  { key: 'findings', label: 'Research Findings', num: '9' },
  { key: 'sources', label: 'Data & Sources', num: '10' },
]

export default function Layout({
  page,
  setPage,
  onSearch,
  children,
}: {
  page: PageKey
  setPage: (p: PageKey) => void
  onSearch: (q: string) => void
  children: ReactNode
}) {
  const [query, setQuery] = useState('')
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="min-h-screen bg-ink-50">
      <header className="sticky top-0 z-30 border-b border-ink-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:px-8">
          <button
            className="rounded-md border border-ink-200 p-2 lg:hidden"
            onClick={() => setNavOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <div className="min-w-0">
            <div className="truncate text-sm font-bold text-ink-900">
              Marketing, Training &amp; Support Technology Intelligence Portal
            </div>
            <div className="truncate text-xs text-ink-500">
              Research for TR Finished Vehicles Logistics Solutions Limited (TRFVLSL)
            </div>
          </div>
          <div className="ml-auto hidden max-w-xs flex-1 items-center gap-2 sm:flex">
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                onSearch(e.target.value)
              }}
              placeholder="Search technologies, sources, findings…"
              className="w-full rounded-md border border-ink-200 px-3 py-1.5 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-2 sm:hidden lg:px-8">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              onSearch(e.target.value)
            }}
            placeholder="Search…"
            className="w-full rounded-md border border-ink-200 px-3 py-1.5 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
          />
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 lg:px-8">
        <nav
          className={`${
            navOpen ? 'block' : 'hidden'
          } w-full shrink-0 lg:block lg:w-64`}
        >
          <div className="space-y-0.5 lg:sticky lg:top-20">
            {NAV.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setPage(item.key)
                  setNavOpen(false)
                }}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition ${
                  page === item.key
                    ? 'bg-brand-600 font-semibold text-white'
                    : 'text-ink-600 hover:bg-ink-100'
                }`}
              >
                <span
                  className={`text-xs ${page === item.key ? 'text-brand-100' : 'text-ink-400'}`}
                >
                  {item.num}
                </span>
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <main className="min-w-0 flex-1 pb-16">{children}</main>
      </div>
    </div>
  )
}
