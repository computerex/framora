export interface TemplateSpec {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  content: string;
}

export const templates: TemplateSpec[] = [
  {
    id: "business-meeting-notes-basic",
    name: "Basic meeting notes",
    category: "business",
    description: "General-purpose template for any recurring meeting.",
    tags: ["meeting","notes","agenda","actions"],
    content: `# Meeting notes: Basic meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your basic meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-standup",
    name: "Standup meeting notes",
    category: "business",
    description: "Daily/weekly team sync with blockers and priorities.",
    tags: ["standup","agile","scrum","blockers"],
    content: `# Meeting notes: Standup meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your standup meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-all-hands",
    name: "All-hands meeting notes",
    category: "business",
    description: "Company-wide updates with Q&A and themes.",
    tags: ["all-hands","company","Q&A","alignment"],
    content: `# Meeting notes: All-hands meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your all-hands meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-board",
    name: "Board meeting notes",
    category: "business",
    description: "Formal notes with motions, decisions, and follow-ups.",
    tags: ["board","governance","decisions","motions"],
    content: `# Meeting notes: Board meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your board meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-client",
    name: "Client meeting notes",
    category: "business",
    description: "Account-focused notes with next steps and owners.",
    tags: ["client","account","CRM","stakeholder"],
    content: `# Meeting notes: Client meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your client meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-brainstorm",
    name: "Brainstorm meeting notes",
    category: "business",
    description: "Ideation session capture with evaluation and follow-ups.",
    tags: ["brainstorm","ideation","workshop","diverge"],
    content: `# Meeting notes: Brainstorm meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your brainstorm meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-kick-off",
    name: "Project kickoff meeting notes",
    category: "business",
    description: "Launch meeting with goals, scope, and working agreements.",
    tags: ["kickoff","project","charter","scope"],
    content: `# Meeting notes: Project kickoff meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your project kickoff meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-sprint-review",
    name: "Sprint review notes",
    category: "business",
    description: "Review outcomes, demo notes, and stakeholder feedback.",
    tags: ["sprint","review","demo","scrum"],
    content: `# Meeting notes: Sprint review notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your sprint review notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-sprint-retro",
    name: "Sprint retrospective notes",
    category: "business",
    description: "Retro with themes, experiments, and action items.",
    tags: ["retro","continuous-improvement","team","scrum"],
    content: `# Meeting notes: Sprint retrospective notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your sprint retrospective notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-one-on-one",
    name: "1:1 meeting notes",
    category: "business",
    description: "Manager–IC notes with growth themes and commitments.",
    tags: ["1:1","coaching","career","manager"],
    content: `# Meeting notes: 1:1 meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your 1:1 meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-skip-level",
    name: "Skip-level meeting notes",
    category: "business",
    description: "Leadership listening session with themes and follow-ups.",
    tags: ["skip-level","leadership","feedback","culture"],
    content: `# Meeting notes: Skip-level meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your skip-level meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-team-sync",
    name: "Team sync notes",
    category: "business",
    description: "Cross-role alignment on priorities, risks, and dependencies.",
    tags: ["sync","alignment","dependencies","planning"],
    content: `# Meeting notes: Team sync notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your team sync notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-department",
    name: "Department meeting notes",
    category: "business",
    description: "Functional org updates, metrics, and initiatives.",
    tags: ["department","function","metrics","org"],
    content: `# Meeting notes: Department meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your department meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-town-hall",
    name: "Town hall notes",
    category: "business",
    description: "Large forum capture with top questions and answers.",
    tags: ["town-hall","communication","Q&A","org"],
    content: `# Meeting notes: Town hall notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your town hall notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-project-update",
    name: "Project update meeting",
    category: "business",
    description: "Milestone check-in and integrated schedule review.",
    tags: ["project","milestone","status","delivery"],
    content: `# Meeting notes: Project update meeting

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your project update meeting. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-design-review",
    name: "Design review notes",
    category: "business",
    description: "UX/UI review with feedback, open questions, and decisions.",
    tags: ["design","ux","review","product"],
    content: `# Meeting notes: Design review notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your design review notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-architecture-review",
    name: "Architecture review notes",
    category: "business",
    description: "System design review with trade-offs, risks, and decisions.",
    tags: ["architecture","systems","design","review"],
    content: `# Meeting notes: Architecture review notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your architecture review notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-code-review",
    name: "Code review session notes",
    category: "business",
    description: "Group review of critical changes, standards, and follow-ups.",
    tags: ["code-review","engineering","quality","standards"],
    content: `# Meeting notes: Code review session notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your code review session notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-incident-review",
    name: "Incident review meeting notes",
    category: "business",
    description: "Post-incident discussion before a formal post-mortem.",
    tags: ["incident","stability","SRE","ops"],
    content: `# Meeting notes: Incident review meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your incident review meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-post-mortem",
    name: "Post-mortem meeting notes",
    category: "business",
    description: "Blameless incident learning session with follow-ups.",
    tags: ["post-mortem","SRE","reliability","learning"],
    content: `# Meeting notes: Post-mortem meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your post-mortem meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-stakeholder",
    name: "Stakeholder meeting notes",
    category: "business",
    description: "Alignment across partners with decision log and risks.",
    tags: ["stakeholder","alignment","program","delivery"],
    content: `# Meeting notes: Stakeholder meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your stakeholder meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-vendor",
    name: "Vendor meeting notes",
    category: "business",
    description: "Commercial and delivery alignment with a vendor or partner.",
    tags: ["vendor","procurement","partners","SLA"],
    content: `# Meeting notes: Vendor meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your vendor meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-partnership",
    name: "Partnership meeting notes",
    category: "business",
    description: "Strategic partner sync with GTM, enablement, and next steps.",
    tags: ["partnership","GTM","revenue","alliance"],
    content: `# Meeting notes: Partnership meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your partnership meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-workshop",
    name: "Workshop meeting notes",
    category: "business",
    description: "Facilitated working session with exercises and outcomes.",
    tags: ["workshop","facilitation","working-session","outcomes"],
    content: `# Meeting notes: Workshop meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your workshop meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-training-session",
    name: "Training session notes",
    category: "business",
    description: "Instructional session capture, exercises, and resources.",
    tags: ["training","L&D","enablement","adoption"],
    content: `# Meeting notes: Training session notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your training session notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-offsite-planning",
    name: "Offsite planning meeting notes",
    category: "business",
    description: "Plan retreat goals, sessions, logistics, and outcomes.",
    tags: ["offsite","retreat","planning","logistics"],
    content: `# Meeting notes: Offsite planning meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your offsite planning meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-budget-review",
    name: "Budget review meeting notes",
    category: "business",
    description: "Financial review, variances, and decisions.",
    tags: ["budget","finance","variance","planning"],
    content: `# Meeting notes: Budget review meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your budget review meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-qbr",
    name: "Quarterly business review (meeting notes)",
    category: "business",
    description: "QBR meeting notes with pipeline, retention, and initiatives.",
    tags: ["QBR","sales","customer-success","review"],
    content: `# Meeting notes: Quarterly business review (meeting notes)

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your quarterly business review (meeting notes). Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-annual-review",
    name: "Annual business review (meeting notes)",
    category: "business",
    description: "Year-end business performance review and priorities.",
    tags: ["annual","performance","strategy","review"],
    content: `# Meeting notes: Annual business review (meeting notes)

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your annual business review (meeting notes). Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-performance-review",
    name: "Performance review meeting notes",
    category: "business",
    description: "Manager–IC performance discussion capture (for personal notes, not a legal record).",
    tags: ["performance","HR","goals","feedback"],
    content: `# Meeting notes: Performance review meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your performance review meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-weekly-ops",
    name: "Weekly operations review notes",
    category: "business",
    description: "Cross-functional ops review for incidents, capacity, and changes.",
    tags: ["operations","review","SRE","run"],
    content: `# Meeting notes: Weekly operations review notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your weekly operations review notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-meeting-notes-release-readiness",
    name: "Release readiness meeting notes",
    category: "business",
    description: "Go/no-go and launch checklist review.",
    tags: ["release","launch","GTM","readiness"],
    content: `# Meeting notes: Release readiness meeting notes

## Meeting details
- **Date:** [Date]
- **Owner:** [Name]
- **Audience:** [Team / Stakeholders]
- **Context:** Notes from your release readiness meeting notes. Capture decisions and owners clearly.

## Attendees
- [Name] — [Role]
- [Name] — [Role]
- *Optional:* [Guests / observers]

## Agenda
1. [Topic 1] — *Goal:* [Outcome]
2. [Topic 2] — *Goal:* [Outcome]
3. [Topic 3] — *Goal:* [Outcome]

## Discussion summary
| Item | Notes |
| --- | --- |
| [A] | [Details] |
| [B] | [Details] |

## Decisions
- **Decision:** [What was decided]  
  *Rationale:* [Why]  
  *Impacts:* [Teams / customers / systems]

## Action items
| Action | Owner | Due | Priority |
| --- | --- | --- | --- |
| [Action] | [Name] | [Date] | [P0–P2] |
|  |  |  |  |

## Risks / follow-ups
- [Risk] — *Next step:* [Step]

## Next meeting
- **Scheduled:** [Date / time]
- **Pre-reads / links:** [Links]`,
  },
  {
    id: "business-proposal-project",
    name: "Project proposal",
    category: "business",
    description: "Structured proposal to support a new initiative.",
    tags: ["proposal","project","investment","planning"],
    content: `# Project proposal

## Executive summary
- **Problem / opportunity:** [1–2 sentences]
- **Recommended approach:** [Summary]
- **Investment:** [Range / TCO]
- **Timeline:** [Milestone view]

## Background
[Why now? What changed? What constraints exist?]

## Proposed new initiative
### Scope
- **In scope:** [Bullets]
- **Out of scope:** [Bullets]

### Plan & milestones
| Phase | Deliverable | Target date | Dependencies |
| --- | --- | --- | --- |
| [Phase] | [Output] | [Date] | [Dep] |

### Resource needs
- **People:** [Roles / FTE]
- **Budget:** [Line items]
- **Tools / vendors:** [List]

## Benefits & success metrics
| Metric | Baseline | Target | Measurement |
| --- | --- | --- | --- |
| [KPI] | [X] | [Y] | [Method] |

## Risks & mitigations
| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| [Risk] | [L/M/H] | [L/M/H] | [Plan] |

## Alternatives considered
1. [Option A] — *Trade-offs:* [Notes]
2. [Option B] — *Trade-offs:* [Notes]

## Decision request
- **Approver(s):** [Name / role]
- **By:** [Date]`,
  },
  {
    id: "business-proposal-budget",
    name: "Budget proposal",
    category: "business",
    description: "Structured proposal to support a funding or budget change.",
    tags: ["proposal","budget","finance","forecast"],
    content: `# Budget proposal

## Executive summary
- **Problem / opportunity:** [1–2 sentences]
- **Recommended approach:** [Summary]
- **Investment:** [Range / TCO]
- **Timeline:** [Milestone view]

## Background
[Why now? What changed? What constraints exist?]

## Proposed funding or budget change
### Scope
- **In scope:** [Bullets]
- **Out of scope:** [Bullets]

### Plan & milestones
| Phase | Deliverable | Target date | Dependencies |
| --- | --- | --- | --- |
| [Phase] | [Output] | [Date] | [Dep] |

### Resource needs
- **People:** [Roles / FTE]
- **Budget:** [Line items]
- **Tools / vendors:** [List]

## Benefits & success metrics
| Metric | Baseline | Target | Measurement |
| --- | --- | --- | --- |
| [KPI] | [X] | [Y] | [Method] |

## Risks & mitigations
| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| [Risk] | [L/M/H] | [L/M/H] | [Plan] |

## Alternatives considered
1. [Option A] — *Trade-offs:* [Notes]
2. [Option B] — *Trade-offs:* [Notes]

## Decision request
- **Approver(s):** [Name / role]
- **By:** [Date]`,
  },
  {
    id: "business-proposal-research",
    name: "Research proposal",
    category: "business",
    description: "Structured proposal to support a research or discovery effort.",
    tags: ["proposal","research","R&D","hypothesis"],
    content: `# Research proposal

## Executive summary
- **Problem / opportunity:** [1–2 sentences]
- **Recommended approach:** [Summary]
- **Investment:** [Range / TCO]
- **Timeline:** [Milestone view]

## Background
[Why now? What changed? What constraints exist?]

## Proposed research or discovery effort
### Scope
- **In scope:** [Bullets]
- **Out of scope:** [Bullets]

### Plan & milestones
| Phase | Deliverable | Target date | Dependencies |
| --- | --- | --- | --- |
| [Phase] | [Output] | [Date] | [Dep] |

### Resource needs
- **People:** [Roles / FTE]
- **Budget:** [Line items]
- **Tools / vendors:** [List]

## Benefits & success metrics
| Metric | Baseline | Target | Measurement |
| --- | --- | --- | --- |
| [KPI] | [X] | [Y] | [Method] |

## Risks & mitigations
| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| [Risk] | [L/M/H] | [L/M/H] | [Plan] |

## Alternatives considered
1. [Option A] — *Trade-offs:* [Notes]
2. [Option B] — *Trade-offs:* [Notes]

## Decision request
- **Approver(s):** [Name / role]
- **By:** [Date]`,
  },
  {
    id: "business-proposal-product",
    name: "Product proposal",
    category: "business",
    description: "Structured proposal to support a new product or major capability.",
    tags: ["proposal","product","roadmap","value"],
    content: `# Product proposal

## Executive summary
- **Problem / opportunity:** [1–2 sentences]
- **Recommended approach:** [Summary]
- **Investment:** [Range / TCO]
- **Timeline:** [Milestone view]

## Background
[Why now? What changed? What constraints exist?]

## Proposed new product or major capability
### Scope
- **In scope:** [Bullets]
- **Out of scope:** [Bullets]

### Plan & milestones
| Phase | Deliverable | Target date | Dependencies |
| --- | --- | --- | --- |
| [Phase] | [Output] | [Date] | [Dep] |

### Resource needs
- **People:** [Roles / FTE]
- **Budget:** [Line items]
- **Tools / vendors:** [List]

## Benefits & success metrics
| Metric | Baseline | Target | Measurement |
| --- | --- | --- | --- |
| [KPI] | [X] | [Y] | [Method] |

## Risks & mitigations
| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| [Risk] | [L/M/H] | [L/M/H] | [Plan] |

## Alternatives considered
1. [Option A] — *Trade-offs:* [Notes]
2. [Option B] — *Trade-offs:* [Notes]

## Decision request
- **Approver(s):** [Name / role]
- **By:** [Date]`,
  },
  {
    id: "business-proposal-marketing",
    name: "Marketing proposal",
    category: "business",
    description: "Structured proposal to support a campaign or GTM program.",
    tags: ["proposal","marketing","GTM","campaign"],
    content: `# Marketing proposal

## Executive summary
- **Problem / opportunity:** [1–2 sentences]
- **Recommended approach:** [Summary]
- **Investment:** [Range / TCO]
- **Timeline:** [Milestone view]

## Background
[Why now? What changed? What constraints exist?]

## Proposed campaign or GTM program
### Scope
- **In scope:** [Bullets]
- **Out of scope:** [Bullets]

### Plan & milestones
| Phase | Deliverable | Target date | Dependencies |
| --- | --- | --- | --- |
| [Phase] | [Output] | [Date] | [Dep] |

### Resource needs
- **People:** [Roles / FTE]
- **Budget:** [Line items]
- **Tools / vendors:** [List]

## Benefits & success metrics
| Metric | Baseline | Target | Measurement |
| --- | --- | --- | --- |
| [KPI] | [X] | [Y] | [Method] |

## Risks & mitigations
| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| [Risk] | [L/M/H] | [L/M/H] | [Plan] |

## Alternatives considered
1. [Option A] — *Trade-offs:* [Notes]
2. [Option B] — *Trade-offs:* [Notes]

## Decision request
- **Approver(s):** [Name / role]
- **By:** [Date]`,
  },
  {
    id: "business-proposal-partnership",
    name: "Partnership proposal",
    category: "business",
    description: "Structured proposal to support a GTM, co-sell, or joint initiative.",
    tags: ["proposal","partnership","GTM","alliance"],
    content: `# Partnership proposal

## Executive summary
- **Problem / opportunity:** [1–2 sentences]
- **Recommended approach:** [Summary]
- **Investment:** [Range / TCO]
- **Timeline:** [Milestone view]

## Background
[Why now? What changed? What constraints exist?]

## Proposed GTM, co-sell, or joint initiative
### Scope
- **In scope:** [Bullets]
- **Out of scope:** [Bullets]

### Plan & milestones
| Phase | Deliverable | Target date | Dependencies |
| --- | --- | --- | --- |
| [Phase] | [Output] | [Date] | [Dep] |

### Resource needs
- **People:** [Roles / FTE]
- **Budget:** [Line items]
- **Tools / vendors:** [List]

## Benefits & success metrics
| Metric | Baseline | Target | Measurement |
| --- | --- | --- | --- |
| [KPI] | [X] | [Y] | [Method] |

## Risks & mitigations
| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| [Risk] | [L/M/H] | [L/M/H] | [Plan] |

## Alternatives considered
1. [Option A] — *Trade-offs:* [Notes]
2. [Option B] — *Trade-offs:* [Notes]

## Decision request
- **Approver(s):** [Name / role]
- **By:** [Date]`,
  },
  {
    id: "business-proposal-vendor",
    name: "Vendor proposal (internal brief)",
    category: "business",
    description: "Structured proposal to support a choose or justify a vendor path.",
    tags: ["proposal","vendor","procurement","selection"],
    content: `# Vendor proposal (internal brief)

## Executive summary
- **Problem / opportunity:** [1–2 sentences]
- **Recommended approach:** [Summary]
- **Investment:** [Range / TCO]
- **Timeline:** [Milestone view]

## Background
[Why now? What changed? What constraints exist?]

## Proposed choose or justify a vendor path
### Scope
- **In scope:** [Bullets]
- **Out of scope:** [Bullets]

### Plan & milestones
| Phase | Deliverable | Target date | Dependencies |
| --- | --- | --- | --- |
| [Phase] | [Output] | [Date] | [Dep] |

### Resource needs
- **People:** [Roles / FTE]
- **Budget:** [Line items]
- **Tools / vendors:** [List]

## Benefits & success metrics
| Metric | Baseline | Target | Measurement |
| --- | --- | --- | --- |
| [KPI] | [X] | [Y] | [Method] |

## Risks & mitigations
| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| [Risk] | [L/M/H] | [L/M/H] | [Plan] |

## Alternatives considered
1. [Option A] — *Trade-offs:* [Notes]
2. [Option B] — *Trade-offs:* [Notes]

## Decision request
- **Approver(s):** [Name / role]
- **By:** [Date]`,
  },
  {
    id: "business-proposal-hiring",
    name: "Hiring proposal (headcount)",
    category: "business",
    description: "Structured proposal to support a new headcount and role business case.",
    tags: ["proposal","hiring","headcount","HC"],
    content: `# Hiring proposal (headcount)

## Executive summary
- **Problem / opportunity:** [1–2 sentences]
- **Recommended approach:** [Summary]
- **Investment:** [Range / TCO]
- **Timeline:** [Milestone view]

## Background
[Why now? What changed? What constraints exist?]

## Proposed new headcount and role business case
### Scope
- **In scope:** [Bullets]
- **Out of scope:** [Bullets]

### Plan & milestones
| Phase | Deliverable | Target date | Dependencies |
| --- | --- | --- | --- |
| [Phase] | [Output] | [Date] | [Dep] |

### Resource needs
- **People:** [Roles / FTE]
- **Budget:** [Line items]
- **Tools / vendors:** [List]

## Benefits & success metrics
| Metric | Baseline | Target | Measurement |
| --- | --- | --- | --- |
| [KPI] | [X] | [Y] | [Method] |

## Risks & mitigations
| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| [Risk] | [L/M/H] | [L/M/H] | [Plan] |

## Alternatives considered
1. [Option A] — *Trade-offs:* [Notes]
2. [Option B] — *Trade-offs:* [Notes]

## Decision request
- **Approver(s):** [Name / role]
- **By:** [Date]`,
  },
  {
    id: "business-proposal-process-improvement",
    name: "Process improvement proposal",
    category: "business",
    description: "Structured proposal to support a operational change with measurable benefits.",
    tags: ["proposal","process","lean","efficiency"],
    content: `# Process improvement proposal

## Executive summary
- **Problem / opportunity:** [1–2 sentences]
- **Recommended approach:** [Summary]
- **Investment:** [Range / TCO]
- **Timeline:** [Milestone view]

## Background
[Why now? What changed? What constraints exist?]

## Proposed operational change with measurable benefits
### Scope
- **In scope:** [Bullets]
- **Out of scope:** [Bullets]

### Plan & milestones
| Phase | Deliverable | Target date | Dependencies |
| --- | --- | --- | --- |
| [Phase] | [Output] | [Date] | [Dep] |

### Resource needs
- **People:** [Roles / FTE]
- **Budget:** [Line items]
- **Tools / vendors:** [List]

## Benefits & success metrics
| Metric | Baseline | Target | Measurement |
| --- | --- | --- | --- |
| [KPI] | [X] | [Y] | [Method] |

## Risks & mitigations
| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| [Risk] | [L/M/H] | [L/M/H] | [Plan] |

## Alternatives considered
1. [Option A] — *Trade-offs:* [Notes]
2. [Option B] — *Trade-offs:* [Notes]

## Decision request
- **Approver(s):** [Name / role]
- **By:** [Date]`,
  },
  {
    id: "business-proposal-tool-adoption",
    name: "Tool adoption proposal",
    category: "business",
    description: "Structured proposal to support a new software/platform adoption.",
    tags: ["proposal","tooling","adoption","change"],
    content: `# Tool adoption proposal

## Executive summary
- **Problem / opportunity:** [1–2 sentences]
- **Recommended approach:** [Summary]
- **Investment:** [Range / TCO]
- **Timeline:** [Milestone view]

## Background
[Why now? What changed? What constraints exist?]

## Proposed new software/platform adoption
### Scope
- **In scope:** [Bullets]
- **Out of scope:** [Bullets]

### Plan & milestones
| Phase | Deliverable | Target date | Dependencies |
| --- | --- | --- | --- |
| [Phase] | [Output] | [Date] | [Dep] |

### Resource needs
- **People:** [Roles / FTE]
- **Budget:** [Line items]
- **Tools / vendors:** [List]

## Benefits & success metrics
| Metric | Baseline | Target | Measurement |
| --- | --- | --- | --- |
| [KPI] | [X] | [Y] | [Method] |

## Risks & mitigations
| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| [Risk] | [L/M/H] | [L/M/H] | [Plan] |

## Alternatives considered
1. [Option A] — *Trade-offs:* [Notes]
2. [Option B] — *Trade-offs:* [Notes]

## Decision request
- **Approver(s):** [Name / role]
- **By:** [Date]`,
  },
  {
    id: "business-proposal-infrastructure",
    name: "Infrastructure investment proposal",
    category: "business",
    description: "Structured proposal to support a platform reliability/cost/scale.",
    tags: ["proposal","infrastructure","SRE","scale"],
    content: `# Infrastructure investment proposal

## Executive summary
- **Problem / opportunity:** [1–2 sentences]
- **Recommended approach:** [Summary]
- **Investment:** [Range / TCO]
- **Timeline:** [Milestone view]

## Background
[Why now? What changed? What constraints exist?]

## Proposed platform reliability/cost/scale
### Scope
- **In scope:** [Bullets]
- **Out of scope:** [Bullets]

### Plan & milestones
| Phase | Deliverable | Target date | Dependencies |
| --- | --- | --- | --- |
| [Phase] | [Output] | [Date] | [Dep] |

### Resource needs
- **People:** [Roles / FTE]
- **Budget:** [Line items]
- **Tools / vendors:** [List]

## Benefits & success metrics
| Metric | Baseline | Target | Measurement |
| --- | --- | --- | --- |
| [KPI] | [X] | [Y] | [Method] |

## Risks & mitigations
| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| [Risk] | [L/M/H] | [L/M/H] | [Plan] |

## Alternatives considered
1. [Option A] — *Trade-offs:* [Notes]
2. [Option B] — *Trade-offs:* [Notes]

## Decision request
- **Approver(s):** [Name / role]
- **By:** [Date]`,
  },
  {
    id: "business-proposal-feature",
    name: "Feature investment proposal",
    category: "business",
    description: "Structured proposal to support a product feature prioritization brief.",
    tags: ["proposal","feature","product","prioritization"],
    content: `# Feature investment proposal

## Executive summary
- **Problem / opportunity:** [1–2 sentences]
- **Recommended approach:** [Summary]
- **Investment:** [Range / TCO]
- **Timeline:** [Milestone view]

## Background
[Why now? What changed? What constraints exist?]

## Proposed product feature prioritization brief
### Scope
- **In scope:** [Bullets]
- **Out of scope:** [Bullets]

### Plan & milestones
| Phase | Deliverable | Target date | Dependencies |
| --- | --- | --- | --- |
| [Phase] | [Output] | [Date] | [Dep] |

### Resource needs
- **People:** [Roles / FTE]
- **Budget:** [Line items]
- **Tools / vendors:** [List]

## Benefits & success metrics
| Metric | Baseline | Target | Measurement |
| --- | --- | --- | --- |
| [KPI] | [X] | [Y] | [Method] |

## Risks & mitigations
| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| [Risk] | [L/M/H] | [L/M/H] | [Plan] |

## Alternatives considered
1. [Option A] — *Trade-offs:* [Notes]
2. [Option B] — *Trade-offs:* [Notes]

## Decision request
- **Approver(s):** [Name / role]
- **By:** [Date]`,
  },
  {
    id: "business-status-daily",
    name: "Daily status update",
    category: "business",
    description: "Concise, decision-oriented progress note for stakeholders.",
    tags: ["status","daily","ops","cadence"],
    content: `# Status update: Daily status update

## Snapshot
- **Period:** [Week / month / quarter]
- **Overall health:** [Green / Yellow / Red]
- **One-line summary:** [Sentence]

## Highlights
- [Win] — *Evidence:* [Metric / link]
- [Progress] — *Owner:* [Name]

## In flight
| Workstream | Status | ETA | Blockers |
| --- | --- | --- | --- |
| [A] | [On track / At risk] | [Date] | [None / note] |
| [B] |  |  |  |

## Metrics (optional)
| Metric | Value | vs last period |
| --- | ---: | --- |
| [KPI] | [X] | [Δ] |

## Risks & issues
- **[Issue title]**  
  *Impact:* [Who / what] *Mitigation:* [Plan] *Owner:* [Name]

## Asks
- [Ask] — *Needed by:* [Date]

## Next period focus
- [Priority 1]
- [Priority 2]`,
  },
  {
    id: "business-status-weekly",
    name: "Weekly status update",
    category: "business",
    description: "Concise, decision-oriented progress note for stakeholders.",
    tags: ["status","weekly","program","cadence"],
    content: `# Status update: Weekly status update

## Snapshot
- **Period:** [Week / month / quarter]
- **Overall health:** [Green / Yellow / Red]
- **One-line summary:** [Sentence]

## Highlights
- [Win] — *Evidence:* [Metric / link]
- [Progress] — *Owner:* [Name]

## In flight
| Workstream | Status | ETA | Blockers |
| --- | --- | --- | --- |
| [A] | [On track / At risk] | [Date] | [None / note] |
| [B] |  |  |  |

## Metrics (optional)
| Metric | Value | vs last period |
| --- | ---: | --- |
| [KPI] | [X] | [Δ] |

## Risks & issues
- **[Issue title]**  
  *Impact:* [Who / what] *Mitigation:* [Plan] *Owner:* [Name]

## Asks
- [Ask] — *Needed by:* [Date]

## Next period focus
- [Priority 1]
- [Priority 2]`,
  },
  {
    id: "business-status-monthly",
    name: "Monthly status update",
    category: "business",
    description: "Concise, decision-oriented progress note for stakeholders.",
    tags: ["status","monthly","reporting","readout"],
    content: `# Status update: Monthly status update

## Snapshot
- **Period:** [Week / month / quarter]
- **Overall health:** [Green / Yellow / Red]
- **One-line summary:** [Sentence]

## Highlights
- [Win] — *Evidence:* [Metric / link]
- [Progress] — *Owner:* [Name]

## In flight
| Workstream | Status | ETA | Blockers |
| --- | --- | --- | --- |
| [A] | [On track / At risk] | [Date] | [None / note] |
| [B] |  |  |  |

## Metrics (optional)
| Metric | Value | vs last period |
| --- | ---: | --- |
| [KPI] | [X] | [Δ] |

## Risks & issues
- **[Issue title]**  
  *Impact:* [Who / what] *Mitigation:* [Plan] *Owner:* [Name]

## Asks
- [Ask] — *Needed by:* [Date]

## Next period focus
- [Priority 1]
- [Priority 2]`,
  },
  {
    id: "business-status-quarterly",
    name: "Quarterly status update",
    category: "business",
    description: "Concise, decision-oriented progress note for stakeholders.",
    tags: ["status","quarterly","exec","readout"],
    content: `# Status update: Quarterly status update

## Snapshot
- **Period:** [Week / month / quarter]
- **Overall health:** [Green / Yellow / Red]
- **One-line summary:** [Sentence]

## Highlights
- [Win] — *Evidence:* [Metric / link]
- [Progress] — *Owner:* [Name]

## In flight
| Workstream | Status | ETA | Blockers |
| --- | --- | --- | --- |
| [A] | [On track / At risk] | [Date] | [None / note] |
| [B] |  |  |  |

## Metrics (optional)
| Metric | Value | vs last period |
| --- | ---: | --- |
| [KPI] | [X] | [Δ] |

## Risks & issues
- **[Issue title]**  
  *Impact:* [Who / what] *Mitigation:* [Plan] *Owner:* [Name]

## Asks
- [Ask] — *Needed by:* [Date]

## Next period focus
- [Priority 1]
- [Priority 2]`,
  },
  {
    id: "business-status-annual",
    name: "Annual status update",
    category: "business",
    description: "Concise, decision-oriented progress note for stakeholders.",
    tags: ["status","annual","planning","readout"],
    content: `# Status update: Annual status update

## Snapshot
- **Period:** [Week / month / quarter]
- **Overall health:** [Green / Yellow / Red]
- **One-line summary:** [Sentence]

## Highlights
- [Win] — *Evidence:* [Metric / link]
- [Progress] — *Owner:* [Name]

## In flight
| Workstream | Status | ETA | Blockers |
| --- | --- | --- | --- |
| [A] | [On track / At risk] | [Date] | [None / note] |
| [B] |  |  |  |

## Metrics (optional)
| Metric | Value | vs last period |
| --- | ---: | --- |
| [KPI] | [X] | [Δ] |

## Risks & issues
- **[Issue title]**  
  *Impact:* [Who / what] *Mitigation:* [Plan] *Owner:* [Name]

## Asks
- [Ask] — *Needed by:* [Date]

## Next period focus
- [Priority 1]
- [Priority 2]`,
  },
  {
    id: "business-status-project",
    name: "Project status update",
    category: "business",
    description: "Concise, decision-oriented progress note for stakeholders.",
    tags: ["status","project","pm","delivery"],
    content: `# Status update: Project status update

## Snapshot
- **Period:** [Week / month / quarter]
- **Overall health:** [Green / Yellow / Red]
- **One-line summary:** [Sentence]

## Highlights
- [Win] — *Evidence:* [Metric / link]
- [Progress] — *Owner:* [Name]

## In flight
| Workstream | Status | ETA | Blockers |
| --- | --- | --- | --- |
| [A] | [On track / At risk] | [Date] | [None / note] |
| [B] |  |  |  |

## Metrics (optional)
| Metric | Value | vs last period |
| --- | ---: | --- |
| [KPI] | [X] | [Δ] |

## Risks & issues
- **[Issue title]**  
  *Impact:* [Who / what] *Mitigation:* [Plan] *Owner:* [Name]

## Asks
- [Ask] — *Needed by:* [Date]

## Next period focus
- [Priority 1]
- [Priority 2]`,
  },
  {
    id: "business-status-team",
    name: "Team status update",
    category: "business",
    description: "Concise, decision-oriented progress note for stakeholders.",
    tags: ["status","team","engineering","outcomes"],
    content: `# Status update: Team status update

## Snapshot
- **Period:** [Week / month / quarter]
- **Overall health:** [Green / Yellow / Red]
- **One-line summary:** [Sentence]

## Highlights
- [Win] — *Evidence:* [Metric / link]
- [Progress] — *Owner:* [Name]

## In flight
| Workstream | Status | ETA | Blockers |
| --- | --- | --- | --- |
| [A] | [On track / At risk] | [Date] | [None / note] |
| [B] |  |  |  |

## Metrics (optional)
| Metric | Value | vs last period |
| --- | ---: | --- |
| [KPI] | [X] | [Δ] |

## Risks & issues
- **[Issue title]**  
  *Impact:* [Who / what] *Mitigation:* [Plan] *Owner:* [Name]

## Asks
- [Ask] — *Needed by:* [Date]

## Next period focus
- [Priority 1]
- [Priority 2]`,
  },
  {
    id: "business-status-executive",
    name: "Executive status update",
    category: "business",
    description: "Concise, decision-oriented progress note for stakeholders.",
    tags: ["status","executive","E-staff","readout"],
    content: `# Status update: Executive status update

## Snapshot
- **Period:** [Week / month / quarter]
- **Overall health:** [Green / Yellow / Red]
- **One-line summary:** [Sentence]

## Highlights
- [Win] — *Evidence:* [Metric / link]
- [Progress] — *Owner:* [Name]

## In flight
| Workstream | Status | ETA | Blockers |
| --- | --- | --- | --- |
| [A] | [On track / At risk] | [Date] | [None / note] |
| [B] |  |  |  |

## Metrics (optional)
| Metric | Value | vs last period |
| --- | ---: | --- |
| [KPI] | [X] | [Δ] |

## Risks & issues
- **[Issue title]**  
  *Impact:* [Who / what] *Mitigation:* [Plan] *Owner:* [Name]

## Asks
- [Ask] — *Needed by:* [Date]

## Next period focus
- [Priority 1]
- [Priority 2]`,
  },
  {
    id: "business-status-client-facing",
    name: "Client-facing status update",
    category: "business",
    description: "Concise, decision-oriented progress note for stakeholders.",
    tags: ["status","client","account","CSM"],
    content: `# Status update: Client-facing status update

## Snapshot
- **Period:** [Week / month / quarter]
- **Overall health:** [Green / Yellow / Red]
- **One-line summary:** [Sentence]

## Highlights
- [Win] — *Evidence:* [Metric / link]
- [Progress] — *Owner:* [Name]

## In flight
| Workstream | Status | ETA | Blockers |
| --- | --- | --- | --- |
| [A] | [On track / At risk] | [Date] | [None / note] |
| [B] |  |  |  |

## Metrics (optional)
| Metric | Value | vs last period |
| --- | ---: | --- |
| [KPI] | [X] | [Δ] |

## Risks & issues
- **[Issue title]**  
  *Impact:* [Who / what] *Mitigation:* [Plan] *Owner:* [Name]

## Asks
- [Ask] — *Needed by:* [Date]

## Next period focus
- [Priority 1]
- [Priority 2]`,
  },
  {
    id: "business-okr-company",
    name: "Company OKRs",
    category: "business",
    description: "Outcome-focused goals with measurable key results and ownership.",
    tags: ["OKR","company","strategy","goals"],
    content: `# Company OKRs OKRs

## Time horizon
- **Cycle:** [Quarter / year]
- **Review cadence:** [Weekly / biweekly / monthly]
- **Scoring model:** [0.0–1.0] — *Definition of done for 1.0:* [Clarify]

## Mission & themes (1 paragraph)
[Connect OKRs to strategy and customers.]

## Objectives
### O1: [Objective statement — outcome, not output]
- **KR1:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]
- **KR2:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]
- **KR3:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]

### O2: [Objective statement]
- **KR1:** [Measurable] — *Owner:* [Name]
- **KR2:** [Measurable] — *Owner:* [Name]

## Initiatives supporting OKRs
| Initiative | OKR link | Status |
| --- | --- | --- |
| [Name] | [O# / KR#] | [Not started / Active / Done] |

## Dependencies & cross-functional needs
- [Team / function]: [Request]

## Risks to delivery
- [Risk] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-okr-team",
    name: "Team OKRs",
    category: "business",
    description: "Outcome-focused goals with measurable key results and ownership.",
    tags: ["OKR","team","goals","execution"],
    content: `# Team OKRs OKRs

## Time horizon
- **Cycle:** [Quarter / year]
- **Review cadence:** [Weekly / biweekly / monthly]
- **Scoring model:** [0.0–1.0] — *Definition of done for 1.0:* [Clarify]

## Mission & themes (1 paragraph)
[Connect OKRs to strategy and customers.]

## Objectives
### O1: [Objective statement — outcome, not output]
- **KR1:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]
- **KR2:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]
- **KR3:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]

### O2: [Objective statement]
- **KR1:** [Measurable] — *Owner:* [Name]
- **KR2:** [Measurable] — *Owner:* [Name]

## Initiatives supporting OKRs
| Initiative | OKR link | Status |
| --- | --- | --- |
| [Name] | [O# / KR#] | [Not started / Active / Done] |

## Dependencies & cross-functional needs
- [Team / function]: [Request]

## Risks to delivery
- [Risk] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-okr-individual",
    name: "Individual OKRs",
    category: "business",
    description: "Outcome-focused goals with measurable key results and ownership.",
    tags: ["OKR","IC","goals","performance"],
    content: `# Individual OKRs OKRs

## Time horizon
- **Cycle:** [Quarter / year]
- **Review cadence:** [Weekly / biweekly / monthly]
- **Scoring model:** [0.0–1.0] — *Definition of done for 1.0:* [Clarify]

## Mission & themes (1 paragraph)
[Connect OKRs to strategy and customers.]

## Objectives
### O1: [Objective statement — outcome, not output]
- **KR1:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]
- **KR2:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]
- **KR3:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]

### O2: [Objective statement]
- **KR1:** [Measurable] — *Owner:* [Name]
- **KR2:** [Measurable] — *Owner:* [Name]

## Initiatives supporting OKRs
| Initiative | OKR link | Status |
| --- | --- | --- |
| [Name] | [O# / KR#] | [Not started / Active / Done] |

## Dependencies & cross-functional needs
- [Team / function]: [Request]

## Risks to delivery
- [Risk] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-okr-quarterly",
    name: "Quarterly OKRs",
    category: "business",
    description: "Outcome-focused goals with measurable key results and ownership.",
    tags: ["OKR","quarterly","cadence","goals"],
    content: `# Quarterly OKRs OKRs

## Time horizon
- **Cycle:** [Quarter / year]
- **Review cadence:** [Weekly / biweekly / monthly]
- **Scoring model:** [0.0–1.0] — *Definition of done for 1.0:* [Clarify]

## Mission & themes (1 paragraph)
[Connect OKRs to strategy and customers.]

## Objectives
### O1: [Objective statement — outcome, not output]
- **KR1:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]
- **KR2:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]
- **KR3:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]

### O2: [Objective statement]
- **KR1:** [Measurable] — *Owner:* [Name]
- **KR2:** [Measurable] — *Owner:* [Name]

## Initiatives supporting OKRs
| Initiative | OKR link | Status |
| --- | --- | --- |
| [Name] | [O# / KR#] | [Not started / Active / Done] |

## Dependencies & cross-functional needs
- [Team / function]: [Request]

## Risks to delivery
- [Risk] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-okr-annual",
    name: "Annual OKRs",
    category: "business",
    description: "Outcome-focused goals with measurable key results and ownership.",
    tags: ["OKR","annual","planning","goals"],
    content: `# Annual OKRs OKRs

## Time horizon
- **Cycle:** [Quarter / year]
- **Review cadence:** [Weekly / biweekly / monthly]
- **Scoring model:** [0.0–1.0] — *Definition of done for 1.0:* [Clarify]

## Mission & themes (1 paragraph)
[Connect OKRs to strategy and customers.]

## Objectives
### O1: [Objective statement — outcome, not output]
- **KR1:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]
- **KR2:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]
- **KR3:** [Measurable result]  
  *Baseline:* [X]  *Target:* [Y]  *Owner:* [Name]

### O2: [Objective statement]
- **KR1:** [Measurable] — *Owner:* [Name]
- **KR2:** [Measurable] — *Owner:* [Name]

## Initiatives supporting OKRs
| Initiative | OKR link | Status |
| --- | --- | --- |
| [Name] | [O# / KR#] | [Not started / Active / Done] |

## Dependencies & cross-functional needs
- [Team / function]: [Request]

## Risks to delivery
- [Risk] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-project-charter",
    name: "Project charter",
    category: "business",
    description: "Defines scope, stakeholders, and success for a program or project kickoff.",
    tags: ["charter","project","scope","governance"],
    content: `# Project charter

## Project overview
- **Project name / codename:** [Name]
- **Sponsor / executive owner:** [Name]
- **Project manager / lead:** [Name]
- **Start / target end:** [Dates]

## Problem statement
[What pain exists today? What happens if we do nothing?]

## Goals & non-goals
- **Goals:** [Bullets]
- **Non-goals (explicitly out of scope):** [Bullets]

## Stakeholders & decision rights
| Stakeholder | Role | Interest | Decision authority |
| --- | --- | --- | --- |
| [Name] | [Role] | [High / Med / Low] | [Approver / consultant / informed] |

## Scope
### In scope
- [Item]
### Out of scope
- [Item]

## Milestones
| Milestone | Description | Date |
| --- | --- | --- |
| [M1] | [Text] | [Date] |

## Budget & resources (summary)
- **Budget range:** [Amount / band]
- **Key roles:** [Hiring / allocation]

## Success criteria
- [Criterion 1]
- [Criterion 2]

## Risks (initial)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Idea]`,
  },
  {
    id: "business-sow",
    name: "Statement of work (SOW)",
    category: "business",
    description: "Contracting-ready outline for services, deliverables, and commercials.",
    tags: ["SOW","legal","vendor","services"],
    content: `# Statement of work (SOW)

## Parties
- **Client:** [Legal entity]
- **Provider:** [Legal entity]
- **Effective date:** [Date]
- **SOW version:** [1.0]

## Purpose
[What business outcome the engagement supports.]

## Services
1. [Service package A]  
   *Deliverables:* [List]  *Assumptions:* [List]
2. [Service package B]  
   *Deliverables:* [List]  *Assumptions:* [List]

## Out of scope
- [Explicitly excluded work]

## Timeline
| Phase | Start | End | Key deliverable |
| --- | --- | --- | --- |
| [P1] | [Date] | [Date] | [Name] |

## Client responsibilities
- [Access, approvals, data, test environments]

## Change control
- **How changes are requested:** [Process / tool]
- **Estimation & approval flow:** [Owner / SLAs]

## Commercials (placeholders)
- **Fee model:** [Fixed / T&M / blended]
- **Payment milestones:** [Table]
- **Expenses policy:** [Rule]

## Acceptance
- **Acceptance criteria:** [Definition / review window]
- **Sign-off owners:** [Names]`,
  },
  {
    id: "business-memo-internal",
    name: "Internal memo",
    category: "business",
    description: "Short formal memo with a clear decision and required actions.",
    tags: ["memo","internal","policy","comms"],
    content: `# Internal memo memo

## To / From
- **To:** [Distribution list]
- **From:** [Name, title]
- **Date:** [Date]
- **Subject:** [One line]

## Summary (TL;DR)
- [3 bullets max — decisions, context, and next step]

## Background
[What happened? What policy or process applies?]

## Position / decision
- **Decision:** [Clear statement]
- **Effective date:** [Date]
- **Rationale:** [Why now and why this approach]

## Implications
- **People & org:** [Notes]
- **Systems / data:** [Notes]
- **Customer impact:** [Notes]

## Required actions
| Audience | Action | By |
| --- | --- | --- |
| [Group] | [Action] | [Date] |

## FAQs
**Q:** [Question]  
**A:** [Answer]`,
  },
  {
    id: "business-memo-executive",
    name: "Executive memo",
    category: "business",
    description: "Short formal memo with a clear decision and required actions.",
    tags: ["memo","executive","decision","brief"],
    content: `# Executive memo memo

## To / From
- **To:** [Distribution list]
- **From:** [Name, title]
- **Date:** [Date]
- **Subject:** [One line]

## Summary (TL;DR)
- [3 bullets max — decisions, context, and next step]

## Background
[What happened? What policy or process applies?]

## Position / decision
- **Decision:** [Clear statement]
- **Effective date:** [Date]
- **Rationale:** [Why now and why this approach]

## Implications
- **People & org:** [Notes]
- **Systems / data:** [Notes]
- **Customer impact:** [Notes]

## Required actions
| Audience | Action | By |
| --- | --- | --- |
| [Group] | [Action] | [Date] |

## FAQs
**Q:** [Question]  
**A:** [Answer]`,
  },
  {
    id: "business-memo-policy",
    name: "Policy memo",
    category: "business",
    description: "Short formal memo with a clear decision and required actions.",
    tags: ["memo","policy","compliance","HR"],
    content: `# Policy memo memo

## To / From
- **To:** [Distribution list]
- **From:** [Name, title]
- **Date:** [Date]
- **Subject:** [One line]

## Summary (TL;DR)
- [3 bullets max — decisions, context, and next step]

## Background
[What happened? What policy or process applies?]

## Position / decision
- **Decision:** [Clear statement]
- **Effective date:** [Date]
- **Rationale:** [Why now and why this approach]

## Implications
- **People & org:** [Notes]
- **Systems / data:** [Notes]
- **Customer impact:** [Notes]

## Required actions
| Audience | Action | By |
| --- | --- | --- |
| [Group] | [Action] | [Date] |

## FAQs
**Q:** [Question]  
**A:** [Answer]`,
  },
  {
    id: "business-memo-announcement",
    name: "Announcement memo",
    category: "business",
    description: "Short formal memo with a clear decision and required actions.",
    tags: ["memo","announcement","change","comms"],
    content: `# Announcement memo memo

## To / From
- **To:** [Distribution list]
- **From:** [Name, title]
- **Date:** [Date]
- **Subject:** [One line]

## Summary (TL;DR)
- [3 bullets max — decisions, context, and next step]

## Background
[What happened? What policy or process applies?]

## Position / decision
- **Decision:** [Clear statement]
- **Effective date:** [Date]
- **Rationale:** [Why now and why this approach]

## Implications
- **People & org:** [Notes]
- **Systems / data:** [Notes]
- **Customer impact:** [Notes]

## Required actions
| Audience | Action | By |
| --- | --- | --- |
| [Group] | [Action] | [Date] |

## FAQs
**Q:** [Question]  
**A:** [Answer]`,
  },
  {
    id: "business-executive-summary",
    name: "Executive summary",
    category: "business",
    description: "One-page (or two) distillation of analysis and recommendation for leaders.",
    tags: ["executive","summary","decision","briefing"],
    content: `# Executive summary

**Prepared for:** [Name / group]  
**Prepared by:** [Name]  
**Date:** [Date]

## Bottom line
[3–4 sentences: recommendation, business impact, urgency, and key ask.]

## Situation
[Context, drivers, and constraints.]

## Analysis (high level)
- **Finding 1:** [Statement] — *Implication:* [So what]
- **Finding 2:** [Statement] — *Implication:* [So what]

## Options
| Option | Pros | Cons | Cost / time |
| --- | --- | --- | --- |
| A: [Name] | [Notes] | [Notes] | [Range] |
| B: [Name] | [Notes] | [Notes] | [Range] |

## Recommendation
- **Selected option:** [A/B/…]  
- **Rationale:** [Why this is best trade-off]
- **Risks:** [Top 3] — *Mitigations:* [Short]

## Next steps
1. [Step] — *Owner* [Name] — *By* [Date]
2. [Step]`,
  },
  {
    id: "business-rfp",
    name: "Request for proposal (RFP)",
    category: "business",
    description: "Structured procurement document for vendor selection.",
    tags: ["RFP","procurement","vendor","evaluation"],
    content: `# Request for proposal (RFP)

## RFP information
- **RFP #:** [ID]
- **Issuing org:** [Name]
- **Contact:** [Name, email, phone]
- **Questions due:** [Date/time]
- **Proposals due:** [Date/time]
- **Anticipated award:** [Date]

## Scope of services / products
[Detailed description, volumes, and environments.]

## Requirements
### Must-have
- [Req 1] — *Verification method:* [Test / attestation]
- [Req 2]
### Should-have
- [Req 3]
### Nice-to-have
- [Req 4]

## Evaluation criteria (weights)
| Criterion | Weight | Notes |
| --- | ---: | --- |
| [Fit / price / support / security] | [%] | [Scoring guide] |

## Commercial expectations
- **Contract term:** [Length + renewals]
- **Pricing model:** [Expectations]
- **SLA expectations:** [Summary]

## Submission instructions
- **Format:** [PDF / portal]
- **Required attachments:** [Security questionnaire, financials, references]

## Q&A & amendments
- **Process:** [How clarifications are published]`,
  },
  {
    id: "business-case",
    name: "Business case",
    category: "business",
    description: "Investment justification: benefits, costs, risks, and alternatives.",
    tags: ["business-case","investment","ROI","decision"],
    content: `# Business case

## Purpose & audience
- **Decision this informs:** [Decision]
- **Reader:** [Role(s)]

## Economic and strategic overview
[2–3 paragraphs: landscape, key forces, and what “winning” looks like.]

## Key facts & assumptions
- **Fact:** [Reference]
- **Assumption:** [Statement] — *Sensitivity:* [High / med]

## Findings
1. **[Theme A]**  
   *Evidence:* [Data / source]  *Implication:* [So what]
2. **[Theme B]**  
   *Evidence:* [Data / source]  *Implication:* [So what]

## Scenarios
| Scenario | Triggers | Outcome | Likelihood |
| --- | --- | --- | --- |
| [Base] | [Assumptions] | [Narrative] | [H/M/L] |
| [Upside] |  |  |  |
| [Downside] |  |  |  |

## Recommendations
- **Near term (0–30 days):** [Actions]
- **Mid term (1–2 quarters):** [Actions]
- **Watch list:** [Signals]`,
  },
  {
    id: "business-competitive-analysis",
    name: "Competitive analysis",
    category: "business",
    description: "Market and competitor view to inform product and GTM strategy.",
    tags: ["competitive","market","GTM","strategy"],
    content: `# Competitive analysis

## Purpose & audience
- **Decision this informs:** [Decision]
- **Reader:** [Role(s)]

## Market and competitor overview
[2–3 paragraphs: landscape, key forces, and what “winning” looks like.]

## Key facts & assumptions
- **Fact:** [Reference]
- **Assumption:** [Statement] — *Sensitivity:* [High / med]

## Findings
1. **[Theme A]**  
   *Evidence:* [Data / source]  *Implication:* [So what]
2. **[Theme B]**  
   *Evidence:* [Data / source]  *Implication:* [So what]

## Scenarios
| Scenario | Triggers | Outcome | Likelihood |
| --- | --- | --- | --- |
| [Base] | [Assumptions] | [Narrative] | [H/M/L] |
| [Upside] |  |  |  |
| [Downside] |  |  |  |

## Recommendations
- **Near term (0–30 days):** [Actions]
- **Mid term (1–2 quarters):** [Actions]
- **Watch list:** [Signals]`,
  },
  {
    id: "business-swot",
    name: "SWOT analysis",
    category: "business",
    description: "Strengths, weaknesses, opportunities, and threats with implications.",
    tags: ["SWOT","strategy","planning","assessment"],
    content: `# SWOT analysis

## Context
- **Topic:** [Product / business unit / initiative]
- **Timeframe:** [Quarter / year]

## SWOT
| Strengths | Weaknesses |
| --- | --- |
| [S1] | [W1] |
| [S2] | [W2] |

| Opportunities | Threats |
| --- | --- |
| [O1] | [T1] |
| [O2] | [T2] |

## So what? (implications)
- **Strength → opportunity:** [How to leverage]
- **Weakness → threat:** [How to reduce exposure]

## Strategic moves (3–5)
1. [Move] — *Rationale:* [Why]
2. [Move] — *Rationale:* [Why]

## Metrics to track
- [Metric] — *Target:* [Value]`,
  },
  {
    id: "business-market-research",
    name: "Market research",
    category: "business",
    description: "Customer, segment, and market sizing with sources and takeaways.",
    tags: ["market","research","segmentation","insights"],
    content: `# Market research

## Purpose & audience
- **Decision this informs:** [Decision]
- **Reader:** [Role(s)]

## Segment and market overview
[2–3 paragraphs: landscape, key forces, and what “winning” looks like.]

## Key facts & assumptions
- **Fact:** [Reference]
- **Assumption:** [Statement] — *Sensitivity:* [High / med]

## Findings
1. **[Theme A]**  
   *Evidence:* [Data / source]  *Implication:* [So what]
2. **[Theme B]**  
   *Evidence:* [Data / source]  *Implication:* [So what]

## Scenarios
| Scenario | Triggers | Outcome | Likelihood |
| --- | --- | --- | --- |
| [Base] | [Assumptions] | [Narrative] | [H/M/L] |
| [Upside] |  |  |  |
| [Downside] |  |  |  |

## Recommendations
- **Near term (0–30 days):** [Actions]
- **Mid term (1–2 quarters):** [Actions]
- **Watch list:** [Signals]`,
  },
  {
    id: "business-strategic-plan",
    name: "Strategic plan",
    category: "business",
    description: "Top-down plan linking priorities, roadmap, and investment envelope.",
    tags: ["strategy","roadmap","planning","priorities"],
    content: `# Strategic plan

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-risk-assessment",
    name: "Risk assessment",
    category: "business",
    description: "Identify, score, and mitigate major program or operational risks.",
    tags: ["risk","governance","compliance","mitigation"],
    content: `# Risk assessment

## Scope
- **System / program:** [Name]
- **Owner:** [Name] — **Reviewers:** [Names]

## Risk register
| ID | Risk | Category | Impact | Likelihood | Score | Mitigation | Owner | Due |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R-01 | [Text] | [Sec / oper / fin] | H/M/L | H/M/L |  |  |  |  |

## Control improvements
- [Control] — *Type:* [Prevent / detect / respond]

## Residual risk acceptance
- **Accepted by:** [Role] on [Date] — *Rationale:* [Text]`,
  },
  {
    id: "business-gap-analysis",
    name: "Gap analysis",
    category: "business",
    description: "Current vs desired state for processes, products, or capabilities.",
    tags: ["gap","as-is","to-be","improvement"],
    content: `# Gap analysis

## Target outcome
- **Future state (definition of done):** [Paragraph or bullets]

## Current state
- **What exists today:** [Facts]
- **Pain points & constraints:** [Bullets]

## Gaps
| Area | Current | Desired | Gap | Priority | Work estimate |
| --- | --- | --- | --- | --- | --- |
| [Area] |  |  |  | P0 | [T-shirt] |

## Recommendations
1. [Intervention] — *Why:* [Rationale] — *Owner:* [Name]`,
  },
  {
    id: "business-cost-benefit",
    name: "Cost–benefit analysis",
    category: "business",
    description: "Side-by-side costs and benefits with sensitivity notes.",
    tags: ["finance","CBA","decision","investment"],
    content: `# Cost–benefit analysis

## Option(s) under review
- **Option A:** [Name]
- **Option B:** [Name]

## Time horizon & discounting
- **Analysis period:** [Years]
- **Discount rate (if used):** [%]

## Benefits (quantified)
| Benefit | Year 1 | Year 2 | Year 3 | Assumption |
| --- | ---: | ---: | ---: | --- |
| [Benefit] |  |  |  |  |

## Costs (quantified)
| Cost | Year 1 | Year 2 | Year 3 | Assumption |
| --- | ---: | ---: | ---: | --- |
| [Cost] |  |  |  |  |

## Net view
- **NPV / payback (optional):** [Result]
- **Qualitative benefits:** [Bullets]
- **Qualitative costs / risks:** [Bullets]

## Sensitivity
- If **[assumption] moves by X%**, the outcome changes by [Y].`,
  },
  {
    id: "business-feasibility-study",
    name: "Feasibility study",
    category: "business",
    description: "Go/no-go view across technical, operational, and economic dimensions.",
    tags: ["feasibility","go-no-go","delivery","ROM"],
    content: `# Feasibility study

## Summary recommendation
- **Verdict:** [Go / go with conditions / no-go] — *Reason:*

## Objectives
- [What "success" means for this study]

## Technical feasibility
- **Approach options:** [A / B / C]
- **Complexity & dependencies:** [Notes]
- **Key risks:** [List]

## Operational feasibility
- **People & process change:** [Narrative]
- **Support model:** [Plan]

## Economic feasibility
- **Rough order of magnitude (ROM):** [Range]
- **Funding sources:** [Notes]

## Schedule feasibility
- **Target delivery window:** [Date]
- **Critical path (high level):** [Milestones]

## Recommendation & next steps
1. [Step] — *Owner:* [Name]`,
  },
  {
    id: "business-business-requirements",
    name: "Business requirements",
    category: "business",
    description: "BRD-style business needs before detailed solutioning.",
    tags: ["BRD","requirements","stakeholder","acceptance"],
    content: `# Business requirements document (BRD)

## Document control
- **Version:** [1.0]
- **Owner:** [Name]
- **Reviewers:** [Names]

## Business goals
- **Problem:** [Statement]
- **Business objectives:** [Measurable outcomes]
- **Constraints:** [Time / policy / brand / compliance]

## Stakeholder needs
| Persona / group | Need | Current pain | Priority |
| --- | --- | --- | --- |
| [X] | [Need] | [Pain] | [P0] |

## Business requirements
| ID | Requirement | Rationale | Acceptance notes |
| --- | --- | --- | --- |
| BR-01 | [Statement] | [Why] | [Test idea] |
| BR-02 |  |  |  |

## Business rules
- [Rule 1] — *Exception handling:* [Notes]
- [Rule 2]

## Reporting & compliance
- [Audit needs, retention, approvals]

## Glossary
- **Term:** [Definition]`,
  },
  {
    id: "business-stakeholder-analysis",
    name: "Stakeholder analysis",
    category: "business",
    description: "Map influence, interest, and messaging per stakeholder group.",
    tags: ["stakeholder","change","comms","RACI"],
    content: `# Stakeholder analysis

## Program / change
- **Name:** [Name] — **Owner:** [Name]

## Stakeholders
| Stakeholder / group | Role | Interest (H/M/L) | Influence (H/M/L) | Current stance | Desired stance | Engagement plan |
| --- | --- | --- | --- | --- | --- | --- |
| [X] |  |  |  |  |  |  |

## Power / interest (optional)
- **High power / high interest:** [Manage closely]
- **High power / low interest:** [Keep satisfied]`,
  },
  {
    id: "business-communication-plan",
    name: "Communication plan",
    category: "business",
    description: "Who hears what, when, and how during a change or launch.",
    tags: ["comms","change","stakeholder","launch"],
    content: `# Communication plan

## Program / change summary
- **What is changing:** [1 paragraph]
- **Why:** [Rationale]
- **When:** [Key dates]

## Stakeholder map
| Stakeholder | What they care about | Message priority | Channel |
| --- | --- | --- | --- |
| [Group] |  | [High] | [Email / all-hands / manager cascade] |

## Key messages
- **For leadership:** [3 bullets]
- **For people managers:** [3 bullets]
- **For individual contributors / customers:** [3 bullets]

## Timeline & deliverables
| Date | Channel | Asset | Owner |
| --- | --- | --- | --- |
| [D] | [Ch] | [Doc / deck / FAQ] | [Name] |

## Q&A & escalation
- **Central inbox:** [Email]
- **Escalation path:** [Owner]`,
  },
  {
    id: "business-resource-plan",
    name: "Resource plan",
    category: "business",
    description: "People allocation and capacity planning across workstreams.",
    tags: ["capacity","planning","resources","hiring"],
    content: `# Resource plan

## Planning horizon
- **Period:** [Quarter / year]
- **Workstreams supported:** [List]

## Capacity model
- **Available capacity:** [FTE or story points] by role
- **Holidays / blackout dates:** [Notes]

## Allocation
| Workstream | Role | Allocation | Rationale | Start–end |
| --- | --- | --- | --- | --- |
| [W] | [Role] | [50%] | [Why] | [Dates] |

## Hiring & contractors
- **Open roles:** [List + target date]
- **Sourcing plan:** [Notes]

## Dependencies & trade-offs
- [Trade-off] — *Decision:* [Choice]

## Risks
- [Risk] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-procurement",
    name: "Procurement document",
    category: "business",
    description: "Sourcing and contracting package to purchase goods or services.",
    tags: ["procurement","RFP","vendor","contracting"],
    content: `# Procurement package

## Need statement
- **What we are buying:** [Description]
- **Why:** [Driver]
- **Budget envelope:** [Range] — *CAPEX / OPEX:* [Split]

## Requirements
- [Must / should / nice]

## Evaluation approach
- **Sourcing method:** [RFP / RFQ / sole source] — *Rationale:* [Rule]
- **Scoring model:** [Criteria + weight]

## Shortlist
| Vendor | Status | Next step |
| --- | --- | --- |
| [A] | [Engaged] | [Demo / pricing] |

## Contracting checklist
- [ ] Security review
- [ ] Legal review
- [ ] Data processing terms
- [ ] SLA + exit plan`,
  },
  {
    id: "business-vendor-evaluation",
    name: "Vendor evaluation",
    category: "business",
    description: "Scorecard to compare vendors and document evidence.",
    tags: ["vendor","scorecard","evaluation","selection"],
    content: `# Vendor evaluation

## Vendor
- **Name:** [Name]
- **Product / service:** [Name]
- **Evaluator:** [Name] — **Date:** [Date]

## Fit summary
- **Use case match:** [High / med / low] — *Notes:*

## Scoring
| Criterion | Weight | Score (1–5) | Weighted | Evidence |
| --- | ---: | ---: | ---: | --- |
| [Quality] | [%] |  |  |  |
| [Support] | [%] |  |  |  |
| [Security] | [%] |  |  |  |
| [TCO] | [%] |  |  |  |

## Strengths
- [Bullet + evidence]

## Gaps & risks
- [Gap] — *Mitigation:* [Plan]

## Recommendation
- **Verdict:** [Select / shortlist / reject]
- **Conditions:** [POC / security fixes / price band]`,
  },
  {
    id: "business-decision-log",
    name: "Decision log",
    category: "business",
    description: "Chronicle decisions, context, and owners for a program or architecture.",
    tags: ["decisions","governance","traceability","ADR"],
    content: `# Decision log

## Decision log context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-raid-log",
    name: "RAID log (risks, assumptions, issues, dependencies)",
    category: "business",
    description: "Program tracking for delivery risks and dependencies.",
    tags: ["RAID","program","delivery","risk"],
    content: `# RAID log (risks, assumptions, issues, dependencies)

## RAID log (risks, assumptions, issues, dependencies) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-raci-matrix",
    name: "RACI matrix",
    category: "business",
    description: "Clarify who is responsible, accountable, consulted, and informed.",
    tags: ["RACI","governance","roles","planning"],
    content: `# RACI matrix

## RACI matrix context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-milestone-plan",
    name: "Milestone plan",
    category: "business",
    description: "Key dates, deliverables, and gating checks.",
    tags: ["milestones","PM","schedule","delivery"],
    content: `# Milestone plan

## Milestone plan context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-budget-variance",
    name: "Budget variance report",
    category: "business",
    description: "Explain plan vs actuals and drivers of variance.",
    tags: ["budget","variance","finance","forecast"],
    content: `# Budget variance report

## Budget variance report context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-lessons-learned",
    name: "Lessons learned (project)",
    category: "business",
    description: "Capture what to repeat, avoid, and improve next time.",
    tags: ["retro","learning","PM","continuous-improvement"],
    content: `# Lessons learned (project)

## Lessons learned (project) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-pilot-report",
    name: "Pilot results report",
    category: "business",
    description: "Summarize pilot design, learnings, and rollout decision.",
    tags: ["pilot","experiment","adoption","GTM"],
    content: `# Pilot results report

## Pilot results report context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-m-and-a-due-diligence",
    name: "M&A due diligence checklist (business)",
    category: "business",
    description: "High-level business diligence for integrations or acquisitions.",
    tags: ["M&A","diligence","integration","strategy"],
    content: `# M&A due diligence checklist (business)

## M&A due diligence checklist (business) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-investor-update",
    name: "Investor update (monthly / quarterly)",
    category: "business",
    description: "Key metrics, highlights, and asks for investors.",
    tags: ["investor","metrics","startup","reporting"],
    content: `# Investor update (monthly / quarterly)

## Investor update (monthly / quarterly) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-board-deck-outline",
    name: "Board deck outline",
    category: "business",
    description: "Narrative outline for a board pack with core slides.",
    tags: ["board","governance","narrative","strategy"],
    content: `# Board deck outline

## Board deck outline context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-pipeline-review",
    name: "Pipeline review (sales)",
    category: "business",
    description: "Opportunity health, forecast, and next-step rigor.",
    tags: ["pipeline","sales","forecast","CRM"],
    content: `# Pipeline review (sales)

## Pipeline review (sales) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-forecast-rolling",
    name: "Rolling forecast",
    category: "business",
    description: "Update forward-looking view of revenue or spend.",
    tags: ["forecast","FP&A","planning","variance"],
    content: `# Rolling forecast

## Rolling forecast context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-one-pager",
    name: "Business one-pager",
    category: "business",
    description: "A single page to explain a bet: problem, approach, and ask.",
    tags: ["one-pager","briefing","strategy","summary"],
    content: `# Business one-pager

## Business one-pager context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-product-brief",
    name: "Product brief (business)",
    category: "business",
    description: "Intent, users, and outcomes before a PRD is written.",
    tags: ["product","brief","discovery","outcomes"],
    content: `# Product brief (business)

## Product brief (business) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-change-request",
    name: "Change request (scope / schedule / budget)",
    category: "business",
    description: "Formal change with impact and approval path.",
    tags: ["change-control","PM","scope","governance"],
    content: `# Change request (scope / schedule / budget)

## Change request (scope / schedule / budget) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-user-story-set",
    name: "User story / epic outline (business framing)",
    category: "business",
    description: "Business framing for delivery increments with value and measures.",
    tags: ["agile","stories","value","delivery"],
    content: `# User story / epic outline (business framing)

## User story / epic outline (business framing) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-sla",
    name: "Service level agreement (SLA) outline",
    category: "business",
    description: "Targets, measurement, and remedies for a service relationship.",
    tags: ["SLA","ops","vendor","SRE"],
    content: `# Service level agreement (SLA) outline

## Service level agreement (SLA) outline context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-msa-summary",
    name: "Master services agreement (MSA) summary (internal brief)",
    category: "business",
    description: "Internal summary of key MSA terms for stakeholders.",
    tags: ["MSA","legal","vendor","contract"],
    content: `# Master services agreement (MSA) summary (internal brief)

## Master services agreement (MSA) summary (internal brief) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-dpa-summary",
    name: "Data processing agreement (DPA) summary (internal brief)",
    category: "business",
    description: "Summary of data roles, subprocessors, and obligations.",
    tags: ["DPA","privacy","security","compliance"],
    content: `# Data processing agreement (DPA) summary (internal brief)

## Data processing agreement (DPA) summary (internal brief) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-nda",
    name: "Non-disclosure agreement (NDA) cover sheet",
    category: "business",
    description: "Key terms and purpose for a mutual or one-way NDA.",
    tags: ["NDA","legal","confidentiality","partnership"],
    content: `# Non-disclosure agreement (NDA) cover sheet

## Non-disclosure agreement (NDA) cover sheet context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-qbr-prep",
    name: "QBR preparation packet",
    category: "business",
    description: "Customer QBR: usage, value, renewals, and roadmap touchpoints.",
    tags: ["QBR","customer-success","renewal","value"],
    content: `# QBR preparation packet

## QBR preparation packet context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-program-governance",
    name: "Program governance model",
    category: "business",
    description: "Cadence, forums, and escalation for large programs.",
    tags: ["governance","program","PMO","escalation"],
    content: `# Program governance model

## Program governance model context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-wbs",
    name: "Work breakdown structure (WBS) outline",
    category: "business",
    description: "Decompose deliverables and dependencies at a high level.",
    tags: ["WBS","PM","planning","scope"],
    content: `# Work breakdown structure (WBS) outline

## Work breakdown structure (WBS) outline context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-maturity-assessment",
    name: "Capability maturity assessment",
    category: "business",
    description: "Assess practices vs target maturity with roadmap.",
    tags: ["maturity","improvement","assessment","roadmap"],
    content: `# Capability maturity assessment

## Capability maturity assessment context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-continuity",
    name: "Business continuity plan (summary)",
    category: "business",
    description: "How critical operations continue during major disruptions.",
    tags: ["BCP","DR","ops","risk"],
    content: `# Business continuity plan (summary)

## Business continuity plan (summary) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-audit-prep",
    name: "Audit preparation brief",
    category: "business",
    description: "Evidence plan, owners, and narratives for an audit window.",
    tags: ["audit","compliance","evidence","governance"],
    content: `# Audit preparation brief

## Audit preparation brief context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-data-governance",
    name: "Data governance charter (light)",
    category: "business",
    description: "Roles, data domains, and decision rights for data.",
    tags: ["data","governance","stewardship","privacy"],
    content: `# Data governance charter (light)

## Data governance charter (light) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-security-risks",
    name: "Security risk brief (executive)",
    category: "business",
    description: "Top cyber risks, controls, and roadmapped improvements.",
    tags: ["security","risk","executive","GRC"],
    content: `# Security risk brief (executive)

## Security risk brief (executive) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-headcount-request",
    name: "Headcount request (HC)",
    category: "business",
    description: "Hiring justification with business impact and timing.",
    tags: ["headcount","hiring","finance","org"],
    content: `# Headcount request (HC)

## Headcount request (HC) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-org-redesign",
    name: "Organizational redesign proposal",
    category: "business",
    description: "Structure, spans, and decision rights for a new org model.",
    tags: ["org","reorg","HR","design"],
    content: `# Organizational redesign proposal

## Organizational redesign proposal context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-customer-journey",
    name: "Customer journey map (business)",
    category: "business",
    description: "Stages, frictions, and opportunities across the lifecycle.",
    tags: ["journey","CX","value","research"],
    content: `# Customer journey map (business)

## Customer journey map (business) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-kpi-dictionary",
    name: "KPI dictionary",
    category: "business",
    description: "Definitions, owners, and measurement rules for a scorecard.",
    tags: ["KPIs","metrics","reporting","definition"],
    content: `# KPI dictionary

## KPI dictionary context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-service-catalog",
    name: "Service catalog entry",
    category: "business",
    description: "What a service offers, customers, and expectations.",
    tags: ["service","ITSM","operations","SLO"],
    content: `# Service catalog entry

## Service catalog entry context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-rfi",
    name: "Request for information (RFI)",
    category: "business",
    description: "Market scan and vendor pre-qual before an RFP.",
    tags: ["RFI","procurement","vendor","discovery"],
    content: `# Request for information (RFI)

## Request for information (RFI) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-process-as-is",
    name: "As-is / to-be process map (business)",
    category: "business",
    description: "Document current and future process with handoffs and SLAs.",
    tags: ["process","BPM","improvement","handoff"],
    content: `# As-is / to-be process map (business)

## As-is / to-be process map (business) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-value-proposition",
    name: "Value proposition canvas (business)",
    category: "business",
    description: "Customer jobs, pains, gains, and fit with your offer.",
    tags: ["value","GTM","positioning","ICP"],
    content: `# Value proposition canvas (business)

## Value proposition canvas (business) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-go-to-market",
    name: "Go-to-market plan (GTM)",
    category: "business",
    description: "ICP, channels, offers, and launch plan for a bet.",
    tags: ["GTM","launch","marketing","sales"],
    content: `# Go-to-market plan (GTM)

## Go-to-market plan (GTM) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-pricing-strategy",
    name: "Pricing strategy brief",
    category: "business",
    description: "Packaging, price structure, and guardrails.",
    tags: ["pricing","revenue","packaging","GTM"],
    content: `# Pricing strategy brief

## Pricing strategy brief context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "business-renewal-playbook",
    name: "Renewal playbook (CS)",
    category: "business",
    description: "Renewal plan: health, value proof, and negotiation lanes.",
    tags: ["renewal","CS","retention","revenue"],
    content: `# Renewal playbook (CS)

## Renewal playbook (CS) context
- **What this is for:** [1 sentence]
- **Owner / sponsor:** [Name]

## North star & guiding principles
- **North star:** [1 sentence]
- **Principles:** [3 bullets max]

## Current state (brief)
- **Strengths:** [Bullets]
- **Gaps / pain:** [Bullets]

## Strategic priorities
1. **[Priority 1]** — *Outcome:* [What changes]  *KPIs:* [List]
2. **[Priority 2]** — *Outcome:* [What changes]  *KPIs:* [List]
3. **[Priority 3]**

## Roadmap
| Timeframe | Theme | Initiatives | Success signals |
| --- | --- | --- | --- |
| [Now] |  |  |  |
| [Next] |  |  |  |
| [Later] |  |  |  |

## Resource & investment envelope
- **People:** [Plan]
- **Budget:** [Range]
- **Dependencies:** [Partners / tech]

## Risk register (top)
- [Risk] — *Owner:* [Name] — *Mitigation:* [Plan]`,
  },
  {
    id: "communication-email-introduction",
    name: "Professional email: introduction",
    category: "communication",
    description: "Introduce yourself with context and a clear CTA.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: introduction

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-follow-up",
    name: "Professional email: follow-up",
    category: "communication",
    description: "Polite nudge with timeline and the prior ask restated.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: follow-up

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-thank-you",
    name: "Professional email: thank you",
    category: "communication",
    description: "Thank stakeholders with specific appreciation and next steps.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: thank you

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-request",
    name: "Professional email: request",
    category: "communication",
    description: "Ask clearly with rationale, options, and deadline.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: request

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-complaint",
    name: "Professional email: complaint",
    category: "communication",
    description: "Firm, factual escalation with expected resolution.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: complaint

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-apology",
    name: "Professional email: apology",
    category: "communication",
    description: "Accountable apology with context, corrective action, and prevention.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: apology

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-congratulations",
    name: "Professional email: congratulations",
    category: "communication",
    description: "Recognize a milestone with a warm, professional tone.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: congratulations

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-farewell",
    name: "Professional email: farewell",
    category: "communication",
    description: "Thoughtful departure note with gratitude and handoff.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: farewell

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-referral",
    name: "Professional email: referral",
    category: "communication",
    description: "Introduce two people with context and a lightweight ask.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: referral

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-networking",
    name: "Professional email: networking",
    category: "communication",
    description: "Follow-up after a conference or event with a specific hook.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: networking

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-cold-outreach",
    name: "Professional email: cold outreach",
    category: "communication",
    description: "Respectful cold email with research and a crisp ask.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: cold outreach

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-warm-introduction",
    name: "Professional email: warm introduction",
    category: "communication",
    description: "Double opt-in style intro (or strong context) with next steps.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: warm introduction

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-meeting-request",
    name: "Professional email: meeting request",
    category: "communication",
    description: "Schedule a working session with options and an agenda link.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: meeting request

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-schedule-change",
    name: "Professional email: schedule change",
    category: "communication",
    description: "Propose new times, apologize for the disruption, confirm constraints.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: schedule change

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-project-update-email",
    name: "Professional email: project update",
    category: "communication",
    description: "Short status email with RAG, highlights, and asks.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: project update

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-milestone-celebration",
    name: "Professional email: milestone celebration",
    category: "communication",
    description: "Share a win, credit contributors, and what’s next.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: milestone celebration

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-deadline-reminder",
    name: "Professional email: deadline reminder",
    category: "communication",
    description: "Reminder with scope, what “done” means, and one-click actions.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: deadline reminder

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-feedback-request",
    name: "Professional email: feedback request",
    category: "communication",
    description: "Request targeted feedback with prompts and a deadline.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: feedback request

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-collaboration-proposal",
    name: "Professional email: collaboration proposal",
    category: "communication",
    description: "Propose a joint initiative with value and constraints.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: collaboration proposal

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-email-event-invitation",
    name: "Professional email: event invitation",
    category: "communication",
    description: "Invite with logistics, value prop, and RSVP ask.",
    tags: ["email","workplace","professional","writing"],
    content: `# Professional email: event invitation

**To:** [recipient@email.com]  
**Subject:** [Clear, specific subject line]

---

Hi [Name],

[Opening line that states purpose in 1–2 sentences.]

[Body paragraph: context, specifics, and what you need from them. If there are links or attachments, reference them here.]

**Request / next step:**  
- [Bullet with concrete ask]  
- **By:** [Date] — *If flexible:* [Window]

[Optional: appreciation / collaboration note.]

Thanks,  
[Your name]  
[Title] | [Phone] (optional)  

---

**Attachments:** [List]  *(or “None”)*`,
  },
  {
    id: "communication-letter-cover-basic",
    name: "Cover letter: general professional",
    category: "communication",
    description: "Broad professional cover letter structure.",
    tags: ["letter","hiring","career","reference"],
    content: `# Cover letter: general professional

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-cover-tech",
    name: "Cover letter: technology role",
    category: "communication",
    description: "Emphasize systems, quality bar, and collaboration in tech.",
    tags: ["letter","hiring","career","reference"],
    content: `# Cover letter: technology role

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-cover-creative",
    name: "Cover letter: creative role",
    category: "communication",
    description: "Portfolio-forward framing with process and craft.",
    tags: ["letter","hiring","career","reference"],
    content: `# Cover letter: creative role

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-cover-career-change",
    name: "Cover letter: career change",
    category: "communication",
    description: "Translate transferable skills and narrative for a pivot.",
    tags: ["letter","hiring","career","reference"],
    content: `# Cover letter: career change

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-resignation",
    name: "Resignation letter",
    category: "communication",
    description: "Formal, appreciative resignation with last day and transition offer.",
    tags: ["letter","hiring","career","reference"],
    content: `# Resignation letter

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-recommendation-academic",
    name: "Recommendation letter: academic",
    category: "communication",
    description: "Academic recommendation for programs or fellowships.",
    tags: ["letter","hiring","career","reference"],
    content: `# Recommendation letter: academic

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-recommendation-professional",
    name: "Recommendation letter: professional",
    category: "communication",
    description: "Professional reference focused on performance and character.",
    tags: ["letter","hiring","career","reference"],
    content: `# Recommendation letter: professional

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-recommendation-character",
    name: "Recommendation letter: character",
    category: "communication",
    description: "Reference emphasizing integrity, reliability, and collaboration.",
    tags: ["letter","hiring","career","reference"],
    content: `# Recommendation letter: character

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-thank-you-interview",
    name: "Thank-you note: after interview",
    category: "communication",
    description: "Post-interview thank you with a memorable highlight and enthusiasm.",
    tags: ["letter","hiring","career","reference"],
    content: `# Thank-you note: after interview

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-thank-you-mentor",
    name: "Thank-you letter: mentor",
    category: "communication",
    description: "Grateful note with concrete ways they helped and next steps you’ll take.",
    tags: ["letter","hiring","career","reference"],
    content: `# Thank-you letter: mentor

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-acceptance",
    name: "Job offer: acceptance letter",
    category: "communication",
    description: "Accept the offer, confirm details, and ask clarifying questions.",
    tags: ["letter","hiring","career","reference"],
    content: `# Job offer: acceptance letter

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-rejection",
    name: "Job offer: polite decline",
    category: "communication",
    description: "Decline respectfully, leave the door open, keep it brief.",
    tags: ["letter","hiring","career","reference"],
    content: `# Job offer: polite decline

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-complaint-formal",
    name: "Formal complaint letter",
    category: "communication",
    description: "Structured complaint to leadership or a vendor with expected remedy.",
    tags: ["letter","hiring","career","reference"],
    content: `# Formal complaint letter

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-appeal",
    name: "Appeal letter",
    category: "communication",
    description: "Appeal a decision with new evidence and a respectful tone.",
    tags: ["letter","hiring","career","reference"],
    content: `# Appeal letter

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-reference-request",
    name: "Request for reference letter",
    category: "communication",
    description: "Ask a recommender for a reference with context and deadline.",
    tags: ["letter","hiring","career","reference"],
    content: `# Request for reference letter

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-letter-endorsement-brief",
    name: "Endorsement / LinkedIn blurb request",
    category: "communication",
    description: "Ask a colleague for a short endorsement with prompts.",
    tags: ["letter","hiring","career","reference"],
    content: `# Endorsement / LinkedIn blurb request

[Your name]  
[Address line 1]  
[City, ST ZIP]  
[Email] | [Phone]  
[Date]

[Hiring manager name] — optional  
[Company]  
[Address]

Dear [Hiring manager / Committee / Name],

[Opening: purpose and enthusiasm in 2–3 sentences.]

[Body paragraph 1: evidence and relevance — tie experience to the role’s needs.]

[Body paragraph 2: a concrete example (STAR-style) and outcomes.]

[Body paragraph 3: alignment with company mission / team culture / technical stack — customize.]

I would welcome the opportunity to discuss how I can contribute to [team/initiative]. Thank you for your time and consideration.

Sincerely,  
[Your name]  
[LinkedIn / portfolio] (optional)

---

*Tip:* Keep to one page for cover letters unless explicitly requested otherwise.`,
  },
  {
    id: "communication-announcement-product-launch",
    name: "Announcement: product launch",
    category: "communication",
    description: "New product or major product release communication.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: product launch

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-feature-release",
    name: "Announcement: feature release",
    category: "communication",
    description: "Ship note style announcement with benefits and support links.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: feature release

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-company-update",
    name: "Announcement: company update",
    category: "communication",
    description: "Business news with clarity on customer and employee impact.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: company update

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-team-change",
    name: "Announcement: team / leadership change",
    category: "communication",
    description: "Org change comms with reporting lines and next steps.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: team / leadership change

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-policy-change",
    name: "Announcement: policy change",
    category: "communication",
    description: "Policy change with effective date, rationale, and FAQs.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: policy change

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-event",
    name: "Announcement: event",
    category: "communication",
    description: "Internal or external event details and expectations.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: event

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-hiring",
    name: "Announcement: hiring / open roles",
    category: "communication",
    description: "Drive applications with role focus and how to apply.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: hiring / open roles

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-promotion",
    name: "Announcement: promotion",
    category: "communication",
    description: "Celebrate a promotion and updated responsibilities.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: promotion

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-award",
    name: "Announcement: award / recognition",
    category: "communication",
    description: "Recognize winners and how others can participate next time.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: award / recognition

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-milestone",
    name: "Announcement: company milestone",
    category: "communication",
    description: "Mark a business milestone (ARR, customers, years, etc.).",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: company milestone

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-partnership",
    name: "Announcement: partnership",
    category: "communication",
    description: "Partner announcement with GTM and customer value.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: partnership

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-acquisition",
    name: "Announcement: acquisition",
    category: "communication",
    description: "M&A comms: why, what changes, and timelines.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: acquisition

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-office-move",
    name: "Announcement: office move",
    category: "communication",
    description: "Logistics, dates, and employee resources for a move.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: office move

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-remote-work-policy",
    name: "Announcement: remote work policy",
    category: "communication",
    description: "Expectations, eligibility, and compliance reminders.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: remote work policy

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-benefits-update",
    name: "Announcement: benefits update",
    category: "communication",
    description: "Benefits change details with who to ask and when it starts.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: benefits update

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-holiday-schedule",
    name: "Announcement: holiday schedule",
    category: "communication",
    description: "Holidays, coverage expectations, and time-off norms.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: holiday schedule

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-security-advisory",
    name: "Announcement: security advisory (internal)",
    category: "communication",
    description: "Security notice with what happened, what to do, and links.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: security advisory (internal)

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-maintenance-window",
    name: "Announcement: maintenance window",
    category: "communication",
    description: "Planned downtime, scope, rollback plan, and comms path.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: maintenance window

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-rebrand",
    name: "Announcement: rebrand",
    category: "communication",
    description: "Narrative, assets, and phased rollout of brand changes.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: rebrand

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-announcement-community-program",
    name: "Announcement: community / ERG / volunteer program",
    category: "communication",
    description: "Invite participation with expectations and support contacts.",
    tags: ["announcement","comms","org","change"],
    content: `# Announcement: community / ERG / volunteer program

**Audience:** [All employees / customers / partners]  
**From:** [Name, title]  
**Date:** [Date]  
**Channel(s):** [Email / blog / in-app / Slack]

## Summary
- **What is happening:** [1–2 sentences]
- **When:** [Key dates and time zones]
- **What you need to do:** [If anything]

## Why this matters
[Short narrative connecting to mission, customers, and trust.]

## What changes for you
| Audience | What changes | Effective date | Help |
| --- | --- | --- | --- |
| [Group] |  |  | [Link/team] |

## Customer / external messaging
- **Public statement:** [Draft]
- **Support macros / FAQs updated:** [Owner]

## Q&A
**Q:** [Top question]  
**A:** [Clear answer]`,
  },
  {
    id: "communication-internal-slack-general",
    name: "Slack: general update in a channel",
    category: "communication",
    description: "Short channel update for progress and asks.",
    tags: ["internal","comms","team","async"],
    content: `# Slack: general update in a channel

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-slack-urgent",
    name: "Slack: urgent / time-sensitive",
    category: "communication",
    description: "Tight, operational Slack with owners and next step.",
    tags: ["internal","comms","team","async"],
    content: `# Slack: urgent / time-sensitive

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-slack-blocked",
    name: "Slack: blocked / needs help",
    category: "communication",
    description: "Request help with context, impact, and what you already tried.",
    tags: ["internal","comms","team","async"],
    content: `# Slack: blocked / needs help

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-slack-kudos",
    name: "Slack: kudos / recognition",
    category: "communication",
    description: "Quick recognition with specifics and @mentions.",
    tags: ["internal","comms","team","async"],
    content: `# Slack: kudos / recognition

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-slack-incident",
    name: "Slack: incident / outage channel",
    category: "communication",
    description: "Status update in an incident room with RAG and ETA.",
    tags: ["internal","comms","team","async"],
    content: `# Slack: incident / outage channel

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-slack-question",
    name: "Slack: cross-functional question",
    category: "communication",
    description: "A structured question to unblock work across teams.",
    tags: ["internal","comms","team","async"],
    content: `# Slack: cross-functional question

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-team-update-weekly",
    name: "Internal: weekly team update (doc or email)",
    category: "communication",
    description: "Team digest for priorities, customer impact, and risks.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: weekly team update (doc or email)

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-team-update-sprint",
    name: "Internal: sprint team update",
    category: "communication",
    description: "Sprint readout of goals, done work, and carryover.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: sprint team update

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-team-update-executive",
    name: "Internal: exec-ready team blurb",
    category: "communication",
    description: "Three bullets and one ask for a leadership readout.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: exec-ready team blurb

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-cross-team-request",
    name: "Internal: cross-team request",
    category: "communication",
    description: "Request another team for help with constraints and SLOs.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: cross-team request

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-escalation",
    name: "Internal: escalation message",
    category: "communication",
    description: "Escalation with business impact, timeline, and what you need.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: escalation message

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-handoff",
    name: "Internal: handoff document (role / on-call / project)",
    category: "communication",
    description: "A structured handoff for continuity and ownership.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: handoff document (role / on-call / project)

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-onboarding-welcome",
    name: "Internal: onboarding welcome message",
    category: "communication",
    description: "Manager welcome for week one with learning goals and check-ins.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: onboarding welcome message

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-exit-interview",
    name: "Internal: exit interview summary (for HR, anonymized style)",
    category: "communication",
    description: "Structured themes from an exit (template for notes, not legal advice).",
    tags: ["internal","comms","team","async"],
    content: `# Internal: exit interview summary (for HR, anonymized style)

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-survey-intro",
    name: "Internal: survey intro / invitation",
    category: "communication",
    description: "Invite people to a survey: purpose, time, and confidentiality.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: survey intro / invitation

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-newsletter-hero",
    name: "Internal: newsletter: hero / lead story",
    category: "communication",
    description: "Top story for a company or team newsletter.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: newsletter: hero / lead story

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-newsletter-shipped",
    name: "Internal: newsletter: what we shipped",
    category: "communication",
    description: "Release recap with links, metrics, and kudos.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: newsletter: what we shipped

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-newsletter-spotlight",
    name: "Internal: newsletter: customer or team spotlight",
    category: "communication",
    description: "Short spotlight on impact and how to get involved.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: newsletter: customer or team spotlight

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-kudos-broadcast",
    name: "Internal: recognition broadcast (email/Slack)",
    category: "communication",
    description: "Broader recognition with principles and callouts.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: recognition broadcast (email/Slack)

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-it-service-request",
    name: "Internal: IT / service request note",
    category: "communication",
    description: "Clear ticket-style request for IT or internal tools.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: IT / service request note

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-async-decision",
    name: "Internal: async decision log entry",
    category: "communication",
    description: "Document an async decision with alternatives and sign-off.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: async decision log entry

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-knowledge-handoff",
    name: "Internal: knowledge base handoff (doc)",
    category: "communication",
    description: "Hand off ownership of a doc/system with runbooks and contacts.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: knowledge base handoff (doc)

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-all-hands-recap",
    name: "Internal: all-hands recap for your team",
    category: "communication",
    description: "Translate company-wide comms to team-relevant takeaways.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: all-hands recap for your team

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  },
  {
    id: "communication-internal-incident-comm-stakeholders",
    name: "Internal: incident comms to stakeholders (non-technical)",
    category: "communication",
    description: "Non-technical summary during an incident, what customers should know.",
    tags: ["internal","comms","team","async"],
    content: `# Internal: incident comms to stakeholders (non-technical)

**Channel:** [Slack: #channel / Email / Doc]  
**From:** [Name]  
**Date:** [Date]

## TL;DR
- [1 sentence outcome]

## Context
[2–4 sentences: what changed, who is affected, and why it matters.]

## Details
- [Bullet with specifics, links, and owners]
- [Bullet with timelines]

## Asks
- [Ask] — *Owner:* [Name] — *By:* [Date]

## Links
- [Doc / ticket / dashboard]`,
  }
];
