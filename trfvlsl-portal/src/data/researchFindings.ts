import { ResearchFinding } from '../types'

export const researchFindings: ResearchFinding[] = [
  {
    id: 'find-01',
    title: 'AI adoption in customer service is widespread, but mature deployment remains uncommon',
    description:
      'The large majority of teams have invested in AI for customer service, yet only a small minority describe their deployment as mature. Mature-deployment teams report meaningfully better outcomes than the average team.',
    category: 'AI & Automation',
    sourceIds: ['src-intercom-2026-cst'],
    date: '2026',
  },
  {
    id: 'find-02',
    title: 'AI investment is increasingly extending beyond basic support use cases',
    description:
      'Over half of surveyed organizations planned to scale AI beyond customer support in 2026, and vendor documentation shows AI/agent capabilities being built into marketing, sales and service workflows rather than support alone.',
    category: 'AI & Automation',
    sourceIds: ['src-intercom-2026-cst', 'src-hubspot-docs', 'src-salesforce-docs'],
    date: '2026',
  },
  {
    id: 'find-03',
    title: 'Knowledge management is becoming central to AI-supported support',
    description:
      'Official documentation from both Zendesk and Intercom shows AI support and AI agent features built directly on top of knowledge base and internal knowledge content, indicating that knowledge quality and structure underpin AI support effectiveness.',
    category: 'Product Support',
    sourceIds: ['src-zendesk-docs', 'src-intercom-docs'],
    date: '2026',
  },
  {
    id: 'find-04',
    title: 'Learning and AI upskilling are increasingly connected in workplace learning strategy',
    description:
      'LinkedIn Learning research indicates strong employee interest in learning to use AI in their profession, alongside organizational concern about retention — with learning opportunities identified as a leading retention strategy.',
    category: 'Product Training',
    sourceIds: ['src-linkedin-learning-india'],
    date: 'Historical — verify edition year',
  },
]

export const getFindingById = (id: string) => researchFindings.find((f) => f.id === id)
