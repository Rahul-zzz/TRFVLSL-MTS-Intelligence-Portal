import { useState } from 'react'
import Layout, { PageKey } from './components/Layout'
import ExecutiveOverview from './pages/ExecutiveOverview'
import MarketingTechnology from './pages/MarketingTechnology'
import ProductTraining from './pages/ProductTraining'
import ProductSupport from './pages/ProductSupport'
import AIAutomation from './pages/AIAutomation'
import TechnologyDirectory from './pages/TechnologyDirectory'
import IndustryDataPage from './pages/IndustryData'
import TRFVLSLOpportunities from './pages/TRFVLSLOpportunities'
import ResearchFindings from './pages/ResearchFindings'
import DataSources from './pages/DataSources'

export default function App() {
  const [page, setPage] = useState<PageKey>('overview')
  const [query, setQuery] = useState('')

  return (
    <Layout page={page} setPage={setPage} onSearch={setQuery}>
      {page === 'overview' && <ExecutiveOverview />}
      {page === 'marketing' && <MarketingTechnology />}
      {page === 'training' && <ProductTraining />}
      {page === 'support' && <ProductSupport />}
      {page === 'ai' && <AIAutomation />}
      {page === 'directory' && <TechnologyDirectory query={query} />}
      {page === 'industry' && <IndustryDataPage query={query} />}
      {page === 'opportunities' && <TRFVLSLOpportunities />}
      {page === 'findings' && <ResearchFindings query={query} />}
      {page === 'sources' && <DataSources query={query} />}
    </Layout>
  )
}
