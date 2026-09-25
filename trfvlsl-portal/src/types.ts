// ============================================================================
// CORE DATA MODEL
// All factual content in this portal must trace back to a Source record.
// See README.md → "Data verification policy" before adding new data.
// ============================================================================

export type SourceType =
  | 'Official Documentation'
  | 'Official Company Report'
  | 'Government'
  | 'Academic Research'
  | 'Industry Research'
  | 'Industry Publication'

export type VerificationStatus =
  | 'VERIFIED'
  | 'OFFICIAL DOCUMENTATION'
  | 'INDUSTRY RESEARCH'
  | 'RECOMMENDATION'
  | 'VALIDATION REQUIRED'

export interface Source {
  id: string
  organization: string
  title: string
  type: SourceType
  url: string
  publicationDate: string // human-readable, e.g. "Q4 2025" or "2026"
  accessedDate: string
  description: string
  verificationStatus: VerificationStatus
}

export interface IndustryDataPoint {
  id: string
  metric: string
  value: number
  unit: '%' | 'count' | 'ratio'
  displayValue: string
  year: string
  date: string
  organization: string
  report: string
  sampleSize?: string
  geography?: string
  category: string
  sourceId: string
}

export type TechCategoryGroup =
  | 'Marketing Technology'
  | 'Product Training'
  | 'Product Support'

export interface Technology {
  id: string
  name: string
  group: TechCategoryGroup
  category: string
  definition: string
  capabilities: string[]
  aiCapabilities: string[]
  products: string[] // Product ids
  sourceIds: string[]
  verificationStatus: VerificationStatus
}

export interface Product {
  id: string
  company: string
  product: string
  category: string[]
  capabilities: string[]
  officialUrl: string
  sourceIds: string[]
  verificationStatus: VerificationStatus
  verificationDate: string
}

export interface ResearchFinding {
  id: string
  title: string
  description: string
  category: string
  sourceIds: string[]
  date: string
}

export type OpportunityStatus =
  | 'Recommended for Further Investigation'
  | 'Potential Opportunity — Validation Required'
  | 'Potential Opportunity'
  | 'Longer-Term Opportunity'

export interface TRFVLSLOpportunity {
  id: string
  title: string
  category: string
  researchBasis: string
  possibleApplication: string[]
  businessPurpose: string
  validationRequired: string[]
  recommendationStatus: OpportunityStatus
  sourceIds: string[]
}
