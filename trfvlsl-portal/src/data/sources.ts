import { Source } from '../types'

// ============================================================================
// SOURCES
// This is the single source of truth for citation. Every IndustryDataPoint,
// Technology, Product, ResearchFinding and TRFVLSLOpportunity references one
// or more source IDs from this file. Do not add a factual record anywhere
// else in the app without first adding (or reusing) a Source here.
//
// NOTE ON URLs: official vendor documentation URLs change over time. The
// URLs below point to the vendors' primary documentation/newsroom domains.
// Verify the exact page before relying on it for a client deliverable, and
// update `accessedDate` / `verificationStatus` when you do.
// ============================================================================

export const sources: Source[] = [
  {
    id: 'src-intercom-2026-cst',
    organization: 'Intercom',
    title: '2026 Customer Service Transformation Report',
    type: 'Official Company Report',
    url: 'https://www.intercom.com/resources',
    publicationDate: 'Q4 2025 survey period, published 2026',
    accessedDate: 'September 2026',
    description:
      'Survey of 2,470 customer support professionals across NAMER, EMEA, LATAM and APAC, conducted Q4 2025, on AI adoption and maturity in customer service.',
    verificationStatus: 'VERIFIED',
  },
  {
    id: 'src-linkedin-learning-india',
    organization: 'LinkedIn Learning',
    title: 'Workplace Learning Report — India edition',
    type: 'Industry Research',
    url: 'https://learning.linkedin.com/resources/workplace-learning-report',
    publicationDate: 'Historical — verify current edition year before reuse',
    accessedDate: 'September 2026',
    description:
      'LinkedIn Learning research on workplace learning priorities, AI skills demand and retention strategy in the India market.',
    verificationStatus: 'INDUSTRY RESEARCH',
  },
  {
    id: 'src-hubspot-docs',
    organization: 'HubSpot',
    title: 'HubSpot Official Product Documentation — Workflows & AI Agents',
    type: 'Official Documentation',
    url: 'https://www.hubspot.com/product/marketing-automation',
    publicationDate: 'Live / continuously updated',
    accessedDate: 'September 2026',
    description:
      'Official documentation describing workflow automation, triggers, actions, AI-assisted workflow creation and agents run from workflows.',
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'src-salesforce-docs',
    organization: 'Salesforce',
    title: 'Salesforce Official Documentation — Agentforce / AI Agents',
    type: 'Official Documentation',
    url: 'https://www.salesforce.com/agentforce/',
    publicationDate: 'Live / continuously updated',
    accessedDate: 'September 2026',
    description:
      'Official documentation describing goal-oriented AI agents for customer and employee use cases across sales, service, marketing and employee applications.',
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'src-zendesk-docs',
    organization: 'Zendesk',
    title: 'Zendesk Official Documentation — Help Center & Knowledge Base',
    type: 'Official Documentation',
    url: 'https://www.zendesk.com/service/help-center/',
    publicationDate: 'Live / continuously updated',
    accessedDate: 'September 2026',
    description:
      'Official documentation covering help centers, knowledge bases, customer self-service portals, ticketing and agent use of knowledge content.',
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'src-intercom-docs',
    organization: 'Intercom',
    title: 'Intercom Official Documentation — Knowledge & AI Support',
    type: 'Official Documentation',
    url: 'https://www.intercom.com/help',
    publicationDate: 'Live / continuously updated',
    accessedDate: 'September 2026',
    description:
      'Official documentation covering knowledge bases, internal knowledge management, AI-assisted support and AI agents using approved content sources.',
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'src-moodle-docs',
    organization: 'Moodle',
    title: 'Moodle Workplace Official Documentation',
    type: 'Official Documentation',
    url: 'https://docs.moodle.org/en/Moodle_Workplace',
    publicationDate: 'Live / continuously updated',
    accessedDate: 'September 2026',
    description:
      'Official documentation describing Moodle Workplace capabilities for employee development, course creation, tracking, analytics and automation.',
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'src-docebo-docs',
    organization: 'Docebo',
    title: 'Docebo Official Documentation — Learning Platform',
    type: 'Official Documentation',
    url: 'https://www.docebo.com/learning-platform/',
    publicationDate: 'Live / continuously updated',
    accessedDate: 'September 2026',
    description:
      'Official documentation describing Docebo LMS capabilities for delivering, managing and measuring training, onboarding, compliance and partner learning.',
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
]

export const getSource = (id: string): Source | undefined =>
  sources.find((s) => s.id === id)
