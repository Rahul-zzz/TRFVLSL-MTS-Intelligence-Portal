import { Product } from '../types'

// ============================================================================
// PRODUCTS — Technology Directory
// Not exhaustive. Add a new product only once its capabilities are verified
// against official documentation and a Source record exists for it.
// ============================================================================

export const products: Product[] = [
  {
    id: 'prod-salesforce',
    company: 'Salesforce',
    product: 'Salesforce (CRM + Agentforce)',
    category: ['CRM', 'Marketing', 'Service', 'AI Agents'],
    capabilities: [
      'Agent creation for customer and employee use cases',
      'Agents perform tasks and use controlled data access',
      'Goal-oriented agents capable of data-driven decisions',
      'Documented use across sales, service, marketing and employee use cases',
    ],
    officialUrl: 'https://www.salesforce.com/agentforce/',
    sourceIds: ['src-salesforce-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
    verificationDate: 'September 2026',
  },
  {
    id: 'prod-hubspot',
    company: 'HubSpot',
    product: 'HubSpot (CRM + Marketing Automation)',
    category: ['CRM', 'Marketing', 'Automation', 'Service', 'AI Agents'],
    capabilities: [
      'Workflow automation with triggers and actions',
      'Marketing, sales and service process automation',
      'CRM record automation',
      'AI-assisted workflow creation and AI/data actions',
      'Agents that can be run from workflows',
    ],
    officialUrl: 'https://www.hubspot.com/product/marketing-automation',
    sourceIds: ['src-hubspot-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
    verificationDate: 'September 2026',
  },
  {
    id: 'prod-intercom',
    company: 'Intercom',
    product: 'Intercom (Support + AI Agent)',
    category: ['Customer Support', 'Knowledge Management', 'AI Support', 'AI Agents'],
    capabilities: [
      'Knowledge bases for customer-facing and internal use',
      'AI-assisted support',
      'AI agents that use approved content sources',
      'Internal AI assistants drawing on knowledge sources',
    ],
    officialUrl: 'https://www.intercom.com/help',
    sourceIds: ['src-intercom-docs', 'src-intercom-2026-cst'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
    verificationDate: 'September 2026',
  },
  {
    id: 'prod-zendesk',
    company: 'Zendesk',
    product: 'Zendesk (Helpdesk + Knowledge Base)',
    category: ['Helpdesk', 'Knowledge Base', 'Customer Support', 'AI'],
    capabilities: [
      'Help centers and knowledge bases',
      'Customer self-service and customer portals',
      'Ticket submission and management',
      'Agents using knowledge bases to solve tickets',
      'Internal knowledge capabilities with permissions and content management',
    ],
    officialUrl: 'https://www.zendesk.com/service/help-center/',
    sourceIds: ['src-zendesk-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
    verificationDate: 'September 2026',
  },
  {
    id: 'prod-moodle',
    company: 'Moodle',
    product: 'Moodle Workplace',
    category: ['Employee Learning / LMS'],
    capabilities: [
      'Employee development and online training',
      'Course creation, progress and completion tracking',
      'Employee feedback capture',
      'Learning analytics, reports and dashboards',
      'User roles and permissions',
      'Automation and personalization',
    ],
    officialUrl: 'https://docs.moodle.org/en/Moodle_Workplace',
    sourceIds: ['src-moodle-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
    verificationDate: 'September 2026',
  },
  {
    id: 'prod-docebo',
    company: 'Docebo',
    product: 'Docebo Learning Platform',
    category: ['Learning / LMS'],
    capabilities: [
      'Delivers, manages and measures training',
      'Supports employee onboarding',
      'Supports compliance and skills development',
      'Supports customer, partner and reseller learning',
    ],
    officialUrl: 'https://www.docebo.com/learning-platform/',
    sourceIds: ['src-docebo-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
    verificationDate: 'September 2026',
  },
]

export const getProductById = (id: string) => products.find((p) => p.id === id)
