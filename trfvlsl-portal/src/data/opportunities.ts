import { TRFVLSLOpportunity } from '../types'

// ============================================================================
// TRFVLSL OPPORTUNITIES
// This is the ONLY dataset in the portal permitted to contain recommendations
// rather than verified facts. Every record must be clearly labelled with a
// recommendationStatus and must NOT assert that TRFVLSL currently lacks, or
// currently has, any specific system — that would require separate
// verification against actual TRFVLSL data, which this portal does not hold.
// ============================================================================

export const opportunities: TRFVLSLOpportunity[] = [
  {
    id: 'opp-01',
    title: 'Knowledge Management / AI Knowledge Assistant',
    category: 'Knowledge Management',
    researchBasis:
      'Verified research and official documentation (Zendesk, Intercom) show knowledge bases being used as the foundation for self-service, support agents and AI assistants.',
    possibleApplication: [
      'A centralized knowledge system could potentially organize ERP procedures',
      'SOPs and department procedures',
      'Frequently required information',
      'Internal support documentation',
    ],
    businessPurpose:
      'Employees may be able to find approved information faster instead of depending entirely on individual employee knowledge.',
    validationRequired: [
      'What documentation currently exists?',
      'Where is it stored?',
      'Who maintains it?',
      'Who should have access?',
      'Is the information current?',
      'Can it be integrated with existing systems?',
    ],
    recommendationStatus: 'Recommended for Further Investigation',
    sourceIds: ['src-zendesk-docs', 'src-intercom-docs'],
  },
  {
    id: 'opp-02',
    title: 'Digital Employee Training',
    category: 'Product Training',
    researchBasis:
      'Official LMS documentation (Moodle Workplace, Docebo) verifies structured, trackable training delivery for onboarding, compliance and process learning.',
    possibleApplication: [
      'A structured training environment for ERP onboarding',
      'Department procedures and SOP training',
      'New employee training',
      'Process learning tracked over time',
    ],
    businessPurpose:
      'A structured digital environment could make training more consistent and trackable. This does not imply that TRFVLSL currently lacks training — only that a digital, trackable format is one option worth evaluating.',
    validationRequired: [
      'What training currently exists and in what format?',
      'Who owns training content today?',
      'What would completion tracking need to integrate with?',
    ],
    recommendationStatus: 'Potential Opportunity — Validation Required',
    sourceIds: ['src-moodle-docs', 'src-docebo-docs'],
  },
  {
    id: 'opp-03',
    title: 'Support / Ticketing',
    category: 'Product Support',
    researchBasis:
      'Official documentation (Zendesk) verifies structured ticketing, routing and knowledge-base-assisted resolution as an established support pattern.',
    possibleApplication: [
      'A structured method for recording internal ERP issues',
      'IT issue tracking',
      'Customer support issue tracking',
      'Operational question logging',
    ],
    businessPurpose:
      'Structured recording and tracking could improve visibility into recurring issues. This does not imply such a system is currently absent at TRFVLSL.',
    validationRequired: [
      'How are issues currently recorded and tracked, if at all?',
      'Who would own and triage a ticketing process?',
      'What integration with existing IT/ERP support is needed?',
    ],
    recommendationStatus: 'Recommended for Further Investigation',
    sourceIds: ['src-zendesk-docs'],
  },
  {
    id: 'opp-04',
    title: 'AI-Assisted Employee Support',
    category: 'AI & Automation',
    researchBasis:
      'Official documentation (Intercom, Zendesk) verifies AI assistants that answer questions using approved internal knowledge sources.',
    possibleApplication: [
      'Employees could ask questions about approved procedures and documentation',
      'Reduce time spent searching for internal information',
    ],
    businessPurpose:
      'Presented as a future possibility, contingent on a reliable underlying knowledge base (see Opportunity 1) being in place first.',
    validationRequired: [
      'Existence of a maintained knowledge base to ground answers in',
      'Access controls for sensitive internal information',
      'A pilot group and success criteria',
    ],
    recommendationStatus: 'Potential Opportunity',
    sourceIds: ['src-intercom-docs', 'src-zendesk-docs'],
  },
  {
    id: 'opp-05',
    title: 'AI-Assisted Customer Support',
    category: 'AI & Automation',
    researchBasis:
      'Intercom research shows most teams have invested in AI for customer service, though a large majority report immature deployment. Official documentation shows AI agents built on approved knowledge with human escalation paths.',
    possibleApplication: [
      'AI could answer routine questions using approved company knowledge',
      'Escalate complex cases to human staff',
    ],
    businessPurpose:
      'Treated as a longer-term opportunity given the dependencies involved: reliable knowledge, access controls, integration, testing, human escalation and ongoing monitoring.',
    validationRequired: [
      'Reliable, current knowledge base',
      'Defined access controls',
      'Integration with existing support channels',
      'Testing and escalation design',
      'Ongoing monitoring plan',
    ],
    recommendationStatus: 'Longer-Term Opportunity',
    sourceIds: ['src-intercom-2026-cst', 'src-intercom-docs'],
  },
]

export const getOpportunityById = (id: string) => opportunities.find((o) => o.id === id)
