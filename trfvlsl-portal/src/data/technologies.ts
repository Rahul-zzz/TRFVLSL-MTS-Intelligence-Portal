import { Technology } from '../types'

// ============================================================================
// TECHNOLOGIES
// Definitions are neutral/generic category descriptions. Capabilities and
// aiCapabilities must only list what is supported by the linked sourceIds.
// No scores, ratings or maturity numbers belong on these records.
// ============================================================================

export const technologies: Technology[] = [
  // ---------------------------------------------------------------- MARKETING
  {
    id: 'tech-crm',
    name: 'CRM (Customer Relationship Management)',
    group: 'Marketing Technology',
    category: 'CRM',
    definition:
      'Systems used to record, organize and act on customer and prospect information across sales, marketing and service processes.',
    capabilities: [
      'Centralized customer records',
      'Activity and interaction history',
      'Pipeline / opportunity tracking',
      'Integration with marketing and service workflows',
    ],
    aiCapabilities: [
      'AI-assisted data actions on CRM records (documented by HubSpot)',
      'Agent access to CRM data for task execution (documented by Salesforce)',
    ],
    products: ['prod-salesforce', 'prod-hubspot'],
    sourceIds: ['src-hubspot-docs', 'src-salesforce-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'tech-marketing-automation',
    name: 'Marketing Automation',
    group: 'Marketing Technology',
    category: 'Marketing Automation',
    definition: 'Technology used to automate repetitive marketing processes and campaign actions.',
    capabilities: [
      'Workflow automation',
      'Workflow triggers based on events or data changes',
      'Workflow actions (e.g. send communications, update records)',
      'Use of workflow outputs in subsequent automated actions',
    ],
    aiCapabilities: [
      'AI-assisted workflow creation (documented by HubSpot)',
      'Running AI agents from within workflows (documented by HubSpot)',
    ],
    products: ['prod-hubspot'],
    sourceIds: ['src-hubspot-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'tech-lead-management',
    name: 'Lead Management',
    group: 'Marketing Technology',
    category: 'Lead Management',
    definition: 'Processes and technology for capturing, routing and managing potential-customer enquiries.',
    capabilities: ['CRM record automation for lead records', 'Sales and service process automation'],
    aiCapabilities: ['AI/data actions applied to lead-related workflows (documented by HubSpot)'],
    products: ['prod-hubspot', 'prod-salesforce'],
    sourceIds: ['src-hubspot-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'tech-marketing-analytics',
    name: 'Marketing Analytics',
    group: 'Marketing Technology',
    category: 'Marketing Analytics',
    definition: 'Technology used to measure marketing activity and outcomes.',
    capabilities: ['CRM record automation feeding reporting', 'Workflow-driven data actions'],
    aiCapabilities: ['AI-assisted analysis of CRM data (documented by HubSpot and Salesforce)'],
    products: ['prod-hubspot', 'prod-salesforce'],
    sourceIds: ['src-hubspot-docs', 'src-salesforce-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'tech-ai-marketing-agents',
    name: 'AI Marketing Agents',
    group: 'Marketing Technology',
    category: 'AI Marketing Agents',
    definition: 'Agents capable of performing defined marketing-related workflows with a degree of autonomy.',
    capabilities: ['Task performance within defined marketing workflows'],
    aiCapabilities: [
      'Goal-oriented agents for marketing use cases, with controlled data access (documented by Salesforce)',
      'Agents that analyze data, generate outputs and take actions from workflows (documented by HubSpot)',
    ],
    products: ['prod-salesforce', 'prod-hubspot'],
    sourceIds: ['src-salesforce-docs', 'src-hubspot-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },

  // ---------------------------------------------------------------- TRAINING
  {
    id: 'tech-lms',
    name: 'Learning Management Systems',
    group: 'Product Training',
    category: 'Learning Management Systems',
    definition: 'Platforms used to deliver, manage and measure training and learning content.',
    capabilities: [
      'Course creation and delivery',
      'Progress and completion tracking',
      'Learning analytics, reports and dashboards',
      'User roles and permissions',
      'Employee onboarding, compliance and skills development support',
      'Customer, partner and reseller learning support',
    ],
    aiCapabilities: ['Automation and personalization within the learning platform (documented by Moodle Workplace)'],
    products: ['prod-moodle', 'prod-docebo'],
    sourceIds: ['src-moodle-docs', 'src-docebo-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'tech-employee-training',
    name: 'Employee Training',
    group: 'Product Training',
    category: 'Employee Training',
    definition: 'Structured technology-supported training for employee development.',
    capabilities: ['Employee development workflows', 'Employee feedback capture', 'Progress tracking'],
    aiCapabilities: [],
    products: ['prod-moodle', 'prod-docebo'],
    sourceIds: ['src-moodle-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'tech-knowledge-management',
    name: 'Knowledge Management',
    group: 'Product Training',
    category: 'Knowledge Management',
    definition: 'Systems for organizing and maintaining organizational knowledge used in training and support.',
    capabilities: [
      'Internal knowledge capabilities',
      'Knowledge permissions and content management',
      'Agents using knowledge bases to help solve tickets',
    ],
    aiCapabilities: [
      'AI agents using approved content (documented by Intercom)',
      'Internal AI assistants using knowledge sources (documented by Intercom)',
    ],
    products: ['prod-zendesk', 'prod-intercom'],
    sourceIds: ['src-zendesk-docs', 'src-intercom-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'tech-ai-assisted-learning',
    name: 'AI-Assisted Learning',
    group: 'Product Training',
    category: 'AI-Assisted Learning',
    definition: 'Use of AI to personalize, support or accelerate learning.',
    capabilities: [],
    aiCapabilities: [
      'AI-supported personalized learning (LinkedIn Learning research)',
      'Growing importance of AI skills within workplace learning strategy (LinkedIn Learning research)',
    ],
    products: [],
    sourceIds: ['src-linkedin-learning-india'],
    verificationStatus: 'INDUSTRY RESEARCH',
  },

  // ---------------------------------------------------------------- SUPPORT
  {
    id: 'tech-helpdesk-ticketing',
    name: 'Helpdesk & Ticketing',
    group: 'Product Support',
    category: 'Ticketing',
    definition: 'Systems used to log, route, and resolve customer or internal support requests.',
    capabilities: ['Ticket submission', 'Agents using knowledge bases to resolve tickets'],
    aiCapabilities: [],
    products: ['prod-zendesk'],
    sourceIds: ['src-zendesk-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'tech-knowledge-base-selfservice',
    name: 'Knowledge Base & Customer Self-Service',
    group: 'Product Support',
    category: 'Knowledge Base',
    definition: 'Customer-facing and internal knowledge content used to enable self-service and support agents.',
    capabilities: [
      'Help centers and knowledge bases',
      'Customer self-service and customer portals',
      'Customer-facing help content',
    ],
    aiCapabilities: ['AI-assisted support drawing on knowledge base content (documented by Zendesk and Intercom)'],
    products: ['prod-zendesk', 'prod-intercom'],
    sourceIds: ['src-zendesk-docs', 'src-intercom-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'tech-ai-support',
    name: 'AI Support & AI Agents',
    group: 'Product Support',
    category: 'AI Support',
    definition: 'AI-driven capabilities that answer, assist with, or resolve support requests.',
    capabilities: [],
    aiCapabilities: [
      'AI agents using approved content sources (documented by Intercom)',
      'Goal-oriented agents performing tasks and making data-driven decisions across service use cases (documented by Salesforce)',
    ],
    products: ['prod-intercom', 'prod-salesforce'],
    sourceIds: ['src-intercom-docs', 'src-salesforce-docs'],
    verificationStatus: 'OFFICIAL DOCUMENTATION',
  },
  {
    id: 'tech-support-analytics',
    name: 'Support Analytics',
    group: 'Product Support',
    category: 'Support Analytics',
    definition: 'Measurement of support activity, quality and outcomes.',
    capabilities: [],
    aiCapabilities: [],
    products: [],
    sourceIds: ['src-intercom-2026-cst'],
    verificationStatus: 'INDUSTRY RESEARCH',
  },
]

export const getTechById = (id: string) => technologies.find((t) => t.id === id)
