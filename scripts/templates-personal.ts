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
    id: "personal-journal-daily",
    name: "Daily journal",
    category: "personal",
    description: "A structured end-of-day capture with log and gratitude.",
    tags: ["journal", "daily", "reflection", "gratitude"],
    content: `# Daily journal — [Date]

## Intention for today
- **One line focus:** [What matters most today]
- **Mood (1–5):** [Score] — *Why:* [One sentence]

## Morning snapshot
| Signal | Note |
| --- | --- |
| Energy | [Low / Medium / High] |
| Sleep | [Hours] — *Quality (1–5):* [Score] |

## Log
- **9:00** — [Event / thought]
- **12:00** — [Event / thought]
- **17:00** — [Event / thought]
- **20:00** — [Event / thought]

## Gratitude (3 things)
1. [Item]
2. [Item]
3. [Item]

## Learned or noticed
- [Insight you want to remember]

## Tomorrow (optional)
- [Carryover task] — *Due:* [Date]
- [Habit to reinforce]`,
  },
  {
    id: "personal-journal-gratitude",
    name: "Gratitude journal",
    category: "personal",
    description: "Five-item gratitude with people and reframe space.",
    tags: ["gratitude", "positivity", "wellbeing"],
    content: `# Gratitude journal — [Date]

## Today I am grateful for
1. **[Theme]** — [Specific detail] — *Felt like:* [Emotion / sensation]
2. **[Theme]** — [Specific detail] — *Felt like:* [Emotion / sensation]
3. **[Theme]** — [Specific detail] — *Felt like:* [Emotion / sensation]
4. *(Optional)* **[Theme]** — [Detail]
5. *(Optional)* **[Theme]** — [Detail]

## A person who helped
- **Who:** [Name] — *How:* [Action] — *I want to acknowledge this by:* [Response]

## A challenge reframed
- **Problem:** [What was hard] — *Reframe:* [Helpful perspective]

## Quote or mantra for tomorrow
> [Line you want to carry forward]`,
  },
  {
    id: "personal-journal-morning-pages",
    name: "Morning pages",
    category: "personal",
    description: "Unedited stream to clear cache and set intention.",
    tags: ["journaling", "creativity", "clarity", "stream"],
    content: `# Morning pages — [Date]

- **Time started:** [Time] — *Duration (minutes):* [Number]
- **Location:** [Place] — *Soundtrack / silence:* [Note]

## Stream of consciousness (no editing)
[Write three pages by hand or keep typing here without self-editing. Let thoughts surface, worries spill, and tangents run.]

[...]

[...]

## One pattern I notice
- [Recurring thought or theme — single sentence]

## Gentle close
- **Energy now (1–5):** [Score]
- **Intention for the day (optional, one line):** [Line]`,
  },
  {
    id: "personal-journal-evening-reflection",
    name: "Evening reflection",
    category: "personal",
    description: "Close the day with evidence, friction, and rest planning.",
    tags: ["evening", "review", "rest"],
    content: `# Evening reflection — [Date]

## Day at a glance
- **High point:** [Moment]
- **Low point:** [Moment] — *What helped:* [Coping or support]
- **Word for today:** [Single word]

## What went well (evidence > vibes)
| Action | Outcome / evidence |
| --- | --- |
| [Done] | [Metric / feedback] |
| [Done] | [Metric / feedback] |

## Friction and adjustments
- **Friction:** [What slowed you] — *Next tweak:* [Small experiment]

## People
- **I showed up for:** [Person / commitment]
- **I received help from:** [Name] — *Thanks:* [Note]

## Rest plan
- **Tomorrow’s first block:** [Task or appointment]
- **Bedtime target:** [Time] — *Wind-down:* [Routine item]`,
  },
  {
    id: "personal-journal-dream",
    name: "Dream journal",
    category: "personal",
    description: "Narrative dream log with symbols and day residue notes.",
    tags: ["dreams", "sleep", "symbols"],
    content: `# Dream log — [Date]

## Dream summary
- **Title (working):** [Short label]
- **Type:** [Lucid / nightmare / recurring / fragment / other]
- **Vividness (1–5):** [Score]

## Scene by scene
1. **Opening:** [Setting, characters, mood]
2. **Rising action:** [Events]
3. **Climax / turn:** [Shift]
4. **Closing:** [How it ended] — *On waking I felt:* [Emotion / body sensation]

## Symbols and motifs
| Element | Felt meaning (guess) |
| --- | --- |
| [Object / person] | [Interpretation, tentative] |

## Day residue
- **Yesterday’s stressor:** [Link if any]
- **Body state:** [Sleep, food, illness]

## Question for reflection
- [One question the dream might be asking] — *Answer (optional):* [Line or two]`,
  },
  {
    id: "personal-journal-travel",
    name: "Travel journal",
    category: "personal",
    description: "Per-day highlights and sensory travel notes.",
    tags: ["travel", "trip", "memories"],
    content: `# Travel journal — [Trip name]

## Trip overview
- **Dates:** [Start] → [End]
- **Destinations:** [Cities / regions]
- **Companions:** [Names] — *Solo / group:* [Note]

## Day [N] — [Date] — [Location]
- **Highlights:** [Bullet]
- **Food:** [What you ate — standout dish]
- **Learned / surprised by:** [Cultural or practical note]
- **Spent (optional):** [Category] [Amount] [Currency]

## Sensory notes
- **Sounds:** [Street, music, language]
- **Scents:** [Markets, sea, food]
- **Sights / colors:** [Image you want to remember]

## Practical notes for next time
- **Pack differently:** [Item]
- **Try next visit:** [Place / experience]`,
  },
  {
    id: "personal-journal-food",
    name: "Food journal",
    category: "personal",
    description: "Meals table with hunger and fullness check-ins.",
    tags: ["food", "nutrition", "mindful"],
    content: `# Food journal — [Date]

## Context
- **Meal focus:** [All meals / one experiment / dietary review]
- **Goal:** [Energy / macros / mindful eating / discovery]

## Meals
| Meal | What | Hunger before (1–5) | Fullness after (1–5) | Notes |
| --- | --- | --- | --- | --- |
| Breakfast | [Food] | [1–5] | [1–5] | [Taste / timing] |
| Lunch | [Food] | [1–5] | [1–5] | [Taste / timing] |
| Dinner | [Food] | [1–5] | [1–5] | [Taste / timing] |

## Hydration and extras
- **Water (approx.):** [Cups / liters]
- **Snacks / treats:** [List] — *Trigger context:* [Stress / social / habit]

## Review
- **Win:** [What supported your goal]
- **Adjust:** [One change for tomorrow]`,
  },
  {
    id: "personal-journal-reading",
    name: "Reading journal",
    category: "personal",
    description: "Session notes, quotes, and personal response.",
    tags: ["books", "notes", "learning"],
    content: `# Reading journal — [Date]

## Current reads
- **Book / article:** *[Title]* — *Author / source:* [Name]
- **Progress:** [Page / %] — *Started:* [Date]

## Today’s session
- **Time:** [Start–end] — *Location:* [Place]
- **Pages / time:** [Count]
- **Excerpt to remember (optional):**
> [Quote] — p. [N]

## Response
- **I agree / question:** [Idea] — *Because:* [Reason]
- **Connects to:** [Other text / life situation]

## Vocabulary or concept
| Term / idea | Definition in my words |
| --- | --- |
| [Term] | [Paraphrase] |`,
  },
  {
    id: "personal-journal-fitness",
    name: "Fitness journal",
    category: "personal",
    description: "Workout log with RPE, main sets, and cues.",
    tags: ["fitness", "workout", "health"],
    content: `# Fitness journal — [Date]

## Session
- **Type:** [Strength / run / class / sport / walk]
- **Duration:** [Minutes] — *RPE (1–10):* [Score]
- **Location:** [Gym / home / outdoors]

## Warm-up
- [Movement] — *Sets / time:* [Detail]

## Main work
| Exercise / segment | Prescription | Result / load |
| --- | --- | --- |
| [A] | [Reps / distance / effort] | [What happened] |

## Cool-down and mobility
- [Stretches or drills]

## Notes
- **What felt strong:** [Line]
- **Limiting factor today:** [Sleep, stress, form, time]
- **Next session focus:** [One cue]`,
  },
  {
    id: "personal-journal-mood-tracker",
    name: "Mood tracker (journal)",
    category: "personal",
    description: "Multi-axis mood and coping capture.",
    tags: ["mood", "mental-health", "tracking"],
    content: `# Mood tracker — [Date]

## Quick scores (1–5 each)
| Dimension | Score | One-word note |
| --- | --- | --- |
| Mood | [1–5] | [Word] |
| Energy | [1–5] | [Word] |
| Anxiety | [1–5] | [Word] |
| Focus | [1–5] | [Word] |
| Social battery | [1–5] | [Word] |

## Timeline (optional)
- **Morning:** [Mood] — *Trigger:* [Event]
- **Midday:** [Mood] — *Trigger:* [Event]
- **Evening:** [Mood] — *Trigger:* [Event]

## Coping that helped
- [Action] — *Effect:* [Better / same / worse]

## Pattern note (weekly lookback)
- [Theme across days, if visible]`,
  },
  {
    id: "personal-journal-meditation",
    name: "Meditation journal",
    category: "personal",
    description: "Technique, anchor, and observation log.",
    tags: ["meditation", "mindfulness", "log"],
    content: `# Meditation log — [Date]

## Session
- **Technique:** [Breath / body scan / metta / open awareness / other]
- **Length (minutes):** [N]
- **Time of day:** [When]
- **Posture / seat:** [Chair / cushion / walking]

## Anchor
- **Primary focus:** [Breath at nostrils / belly / sound / other]
- **Drift pattern:** [Where mind went most]

## Observations (non-judgmental)
- **Body:** [Tension, temperature, stillness]
- **Mind:** [Busy / calm / story loops]

## Closing
- **Closing phrase or dedication:** [Line]
- **Intention for the rest of the day:** [One line]`,
  },
  {
    id: "personal-journal-prayer",
    name: "Prayer journal",
    category: "personal",
    description: "Gratitude, intercession, and reflection blocks.",
    tags: ["prayer", "spiritual", "reflection"],
    content: `# Prayer / reflection log — [Date]

## Context
- **Tradition / style (optional):** [Label]
- **Time:** [When] — *Place:* [Location]

## Gratitude and praise
- [Item]
- [Item]

## Intercession (names / situations)
- **[Name / cause]** — *Hoped outcome:* [Short line]
- **[Name / cause]** — *Hoped outcome:* [Short line]

## Confession / amends (private)
- [What you want to release or make right] — *Next step:* [Action]

## Scripture / reading (if used)
- **Text:** [Reference] — *Phrase that stuck:* [Words]

## Closing commitment
- [One act of service or love for today]`,
  },
  {
    id: "personal-journal-creative",
    name: "Creative practice journal",
    category: "personal",
    description: "Log creative sprints, friction, and next steps.",
    tags: ["creative", "habits", "making"],
    content: `# Creative practice log — [Date]

## Project
- **Working title:** [Name]
- **Medium:** [Writing / design / code / music / other]
- **Sprint (optional):** [What “done” means this week]

## Today’s work
- **Time block:** [Start–end] — *Length:* [Minutes]
- **Intention going in:** [Line]
- **What I made:** [List artifacts, drafts, or experiments]

## Friction and breakthrough
- **Stuck on:** [Problem] — *Next experiment:* [Idea]
- **Eureka (if any):** [Idea] — *Capture reference:* [Link or filename]

## Input
- **Inspiration consumed:** [Title / work] — *Takeaway:* [Line]

## Commit for next session
- [One concrete next step] — *Est. time:* [Minutes]`,
  },
  {
    id: "personal-journal-bullet-journal-daily",
    name: "Bullet journal (daily log)",
    category: "personal",
    description: "Rapid log with symbols and top three tasks.",
    tags: ["bullet journal", "BuJo", "tasks"],
    content: `# Bullet journal — Daily log — [Date]

## Key
- **•** task — **x** done — **>** migrated — **<** scheduled — **!** priority — **–** note

## Rapid log
- [Time] [Entry]
- [Time] [Entry]
- [Time] [Entry]

## Today’s top 3
1. [ ] [Task] — *Context:* [Project or area]
2. [ ] [Task] — *Context:* [Project or area]
3. [ ] [Task] — *Context:* [Project or area]

## Appointments and deadlines
- **[Time]** [What] @ [Location / link]

## Notes / tidbits
- [Idea, phone number, small win]`,
  },
  {
    id: "personal-journal-bullet-journal-weekly",
    name: "Bullet journal (weekly spread)",
    category: "personal",
    description: "Week theme, habits, and plan by life area.",
    tags: ["bullet journal", "weekly", "habits"],
    content: `# Bullet journal — Weekly spread — [Week of Date]

## Week theme
- **Focus:** [One line]
- **Habit spotlight:** [Habit] — *Target days:* [Mon–Sun checkboxes below]

## Habit checkboxes
| Habit | M | T | W | T | F | S | S |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [H1] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

## Week plan by role or area
| Area | Priority outcome |
| --- | --- |
| Work / school | [Outcome] |
| Health | [Outcome] |
| Home | [Outcome] |
| Personal | [Outcome] |

## Review prompts
- **Completed that mattered:** [List]
- **Dropped or delayed:** [List] — *Reason:* [Note]
- **Carry to next week:** [Tasks]`,
  },
  {
    id: "personal-journal-bullet-journal-monthly",
    name: "Bullet journal (monthly log)",
    category: "personal",
    description: "Month overview, three goals, and project snapshot.",
    tags: ["bullet journal", "monthly", "goals"],
    content: `# Bullet journal — Monthly log — [Month YYYY]

## Month calendar (overview)
| Sun | Mon | Tue | Wed | Thu | Fri | Sat |
| --- | --- | --- | --- | --- | --- | --- |
| [d] | [d] | [d] | [d] | [d] | [d] | [d] |
*Fill with key dates, travel, and deadlines. Abbreviate events.*

## Master goals (3 max)
1. [Goal] — *Success signal:* [Metric or story]
2. [Goal] — *Success signal:* [Metric or story]
3. [Goal] — *Success signal:* [Metric or story]

## Projects in flight
- **[Project A]** — *Status:* [On track / at risk] — *Next milestone:* [Date]
- **[Project B]** — *Status:* [On track / at risk] — *Next milestone:* [Date]

## Habit or finance snapshot (optional)
| Habit or budget line | Start | End | Note |
| --- | --- | --- | --- |
| [Habit] | [N] | [N] | [Comment] |`,
  },
  {
    id: "personal-planner-daily",
    name: "Daily planner",
    category: "personal",
    description: "One-day layout with blocks and quick review.",
    tags: ["planner", "daily", "timeblocking"],
    content: `# Daily planner

## Today overview
- **Owner:** [Your name or role]
- **Period:** [Date range] — *Time zone (if events):* [Zone]
- **What success looks like:** [One sentence outcome]

## North Star (1–3 outcomes)
1. [Outcome] — *Metric:* [How you will know]
2. [Outcome] — *Metric:* [How you will know]

## Schedule and blocks (replace labels)
| Day / date | Top priority | Time blocks |
| --- | --- | --- |
| [Day] | [Priority] | [9–11: …, 1–3: …] |
|  |  |  |

## Checklist / recurring (optional)
- [ ] [Recurring item]
- [ ] [Recurring item]

## Review
- **Wins:** [What moved]
- **Blockers:** [What stalled] — *Unblock plan:* [Action]
- **Next period carryover:** [Items]`,
  },
  {
    id: "personal-planner-weekly",
    name: "Weekly planner",
    category: "personal",
    description: "Week outcomes and block plan by day.",
    tags: ["planner", "weekly", "review"],
    content: `# Weekly planner

## Week overview
- **Owner:** [Your name or role]
- **Period:** [Date range] — *Time zone (if events):* [Zone]
- **What success looks like:** [One sentence outcome]

## North Star (1–3 outcomes)
1. [Outcome] — *Metric:* [How you will know]
2. [Outcome] — *Metric:* [How you will know]

## Schedule and blocks (replace labels)
| Day / date | Top priority | Time blocks |
| --- | --- | --- |
| [Day] | [Priority] | [9–11: …, 1–3: …] |
|  |  |  |

## Checklist / recurring (optional)
- [ ] [Recurring item]
- [ ] [Recurring item]

## Review
- **Wins:** [What moved]
- **Blockers:** [What stalled] — *Unblock plan:* [Action]
- **Next period carryover:** [Items]`,
  },
  {
    id: "personal-planner-monthly",
    name: "Monthly planner",
    category: "personal",
    description: "Month outcomes and a simple grid for big rocks.",
    tags: ["planner", "monthly", "goals"],
    content: `# Monthly planner

## Month overview
- **Owner:** [Your name or role]
- **Period:** [Date range] — *Time zone (if events):* [Zone]
- **What success looks like:** [One sentence outcome]

## North Star (1–3 outcomes)
1. [Outcome] — *Metric:* [How you will know]
2. [Outcome] — *Metric:* [How you will know]

## Schedule and blocks (replace labels)
| Day / date | Top priority | Time blocks |
| --- | --- | --- |
| [Day] | [Priority] | [9–11: …, 1–3: …] |
|  |  |  |

## Checklist / recurring (optional)
- [ ] [Recurring item]
- [ ] [Recurring item]

## Review
- **Wins:** [What moved]
- **Blockers:** [What stalled] — *Unblock plan:* [Action]
- **Next period carryover:** [Items]`,
  },
  {
    id: "personal-planner-yearly",
    name: "Yearly planner",
    category: "personal",
    description: "Annual themes, quarters, and yearly outcomes.",
    tags: ["planner", "yearly", "vision"],
    content: `# Yearly planner — [Year]

## Year theme
- **Title:** [2–4 words] — *Definition:* [What it means in daily choices]

## Outcomes by quarter
| Quarter | 1–3 goals | Key habits | Review date |
| --- | --- | --- | --- |
| Q1 | [Goal] | [Habit] | [Date] |
| Q2 | [Goal] | [Habit] | [Date] |
| Q3 | [Goal] | [Habit] | [Date] |
| Q4 | [Goal] | [Habit] | [Date] |

## Risk / life areas
- **If one area slips this year, it is likely to be:** [Area] — *Guardrails:* [Plan]`,
  },
  {
    id: "personal-planner-meal-weekly",
    name: "Meal planner (weekly)",
    category: "personal",
    description: "Weekly menu and grocery list.",
    tags: ["meals", "cooking", "grocery"],
    content: `# Weekly meal plan — [Week of Date]

| Day | Breakfast | Lunch | Dinner | Snacks / notes |
| --- | --- | --- | --- | --- |
| Mon | [Meal] | [Meal] | [Meal] |  |
| Tue |  |  |  |  |

## Shopping list (by store zone)
- **Produce:** [Items]
- **Pantry / dry:** [Items]
- **Protein / cold:** [Items]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-planner-meal-monthly",
    name: "Meal planner (monthly)",
    category: "personal",
    description: "Rotate staples and plan bulk prep.",
    tags: ["meals", "batch", "pantry"],
    content: `# Monthly meal plan — [Month YYYY]

## Staple dinners (4–6)
- [Meal] — *Prep time:* [Minutes] — *Season:* [Why now]

## Freezer / batch
- **Batch 1 target:** [Recipe] — *Portions:* [N]
- **Batch 2 target:** [Recipe] — *Portions:* [N]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-planner-study",
    name: "Study planner",
    category: "personal",
    description: "Course outcomes and week-by-week study blocks.",
    tags: ["study", "learning", "exam"],
    content: `# Study planner — [Course / exam name]

## Outcome and constraints
- **Exam / deadline:** [Date] — *Target grade / bar:* [Level]
- **Hours per week:** [N] — *Hardest unit:* [Topic]

## Weekly study schedule
| Week | Topics | Readings / problems | Self-test |
| --- | --- | --- | --- |
| 1 | [Topics] | [Work] | [Quiz] |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-planner-work",
    name: "Work planner (personal)",
    category: "personal",
    description: "Role outcomes and workweek blocks (non-corporate).",
    tags: ["work", "career", "focus"],
    content: `# Workweek planner (personal focus)

## Work overview
- **Owner:** [Your name or role]
- **Period:** [Date range] — *Time zone (if events):* [Zone]
- **What success looks like:** [One sentence outcome]

## North Star (1–3 outcomes)
1. [Outcome] — *Metric:* [How you will know]
2. [Outcome] — *Metric:* [How you will know]

## Schedule and blocks (replace labels)
| Day / date | Top priority | Time blocks |
| --- | --- | --- |
| [Day] | [Priority] | [9–11: …, 1–3: …] |
|  |  |  |

## Checklist / recurring (optional)
- [ ] [Recurring item]
- [ ] [Recurring item]

## Review
- **Wins:** [What moved]
- **Blockers:** [What stalled] — *Unblock plan:* [Action]
- **Next period carryover:** [Items]`,
  },
  {
    id: "personal-planner-project",
    name: "Project planner (personal project)",
    category: "personal",
    description: "Milestones and dependencies for a side project.",
    tags: ["project", "milestones", "WIP"],
    content: `# Personal project plan — [Project name]

| Milestone | Definition of done | Target date | Owner |
| --- | --- | --- | --- |
| M1 | [Done means…] | [Date] | [You / partner] |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-planner-event",
    name: "Event planner",
    category: "personal",
    description: "Checklist, budget, and run of show for an event.",
    tags: ["event", "logistics", "hosting"],
    content: `# Event plan — [Event name] — [Date]

## Overview
- **Guests (approx.):** [N] — *Venue:* [Place]
- **Budget (target):** [Amount] [Currency]

## Run of show (outline)
| Time | Activity | Owner |
| --- | --- | --- |
| [Time] | [Activity] | [Name] |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-planner-wedding-checklist",
    name: "Wedding planner checklist",
    category: "personal",
    description: "12-month style checklist and vendor grid.",
    tags: ["wedding", "checklist", "planning"],
    content: `# Wedding planning checklist

## Milestones (adjust timeline)
- [ ] **12–9 months out:** [Venue shortlist, budget, guest draft]
- [ ] **6–3 months out:** [Invites, vendors locked, dress/suit plan]
- [ ] **1 month out:** [Final headcount, seating, speeches]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-planner-party",
    name: "Party planner",
    category: "personal",
    description: "Simple party brief with shopping and timeline.",
    tags: ["party", "hosting", "checklist"],
    content: `# Party plan — [Theme] — [Date]

## Guest and vibe
- **Size:** [N] — *Mood:* [Cozy / loud / family-friendly] — *Dress code (optional):* [Note]

## Menu / drinks
- **Food plan:** [Items] — *Dietary flags:* [List]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-planner-vacation",
    name: "Vacation planner",
    category: "personal",
    description: "Itinerary outline and packing preflight.",
    tags: ["travel", "vacation", "itinerary"],
    content: `# Vacation plan — [Destination] — [Dates]

## Flights and lodging (summary)
- **Itinerary ID / URLs:** [Links] — *IDs:* [Ref numbers]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-planner-moving-checklist",
    name: "Moving checklist",
    category: "personal",
    description: "Phased move tasks with change-of-address and utilities.",
    tags: ["moving", "logistics", "home"],
    content: `# Moving checklist — [From] → [To] — [Move date]

## 8+ weeks out
- [ ] [Sort / donate] — *Where:* [Service]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-planner-cleaning-schedule",
    name: "Cleaning schedule",
    category: "personal",
    description: "Recurring home cleaning with zones and products.",
    tags: ["home", "cleaning", "routine"],
    content: `# Home cleaning schedule

| Frequency | Task | Zone / notes |
| --- | --- | --- |
| Daily | [Task] | [Area] |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-planner-home-maintenance",
    name: "Home maintenance planner",
    category: "personal",
    description: "Seasonal maintenance log for major systems.",
    tags: ["home", "maintenance", "safety"],
    content: `# Home maintenance calendar — [Property label]

| System | Task | Last done | Next due | Vendor |
| --- | --- | --- | --- | --- |
| HVAC | [Filter] | [Date] | [Date] | [Name] |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-habit-daily",
    name: "Habit tracker (daily)",
    category: "personal",
    description: "Day-by-day checkmarks for 1–3 core habits.",
    tags: ["habits", "daily", "streaks"],
    content: `# Habit tracker — daily — [Month YYYY]

| Day | Habit A | Habit B | Habit C |
| --- | --- | --- | --- |
| 1 | [x/ ] | [x/ ] | [x/ ] |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-habit-monthly",
    name: "Habit tracker (monthly)",
    category: "personal",
    description: "Month-level view of hit rate and monthly average.",
    tags: ["habits", "monthly", "summary"],
    content: `# Habit summary — [Month YYYY]

| Habit | Target days / month | Days hit | Hit rate | Notes |
| --- | --- | --- | --- | --- |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-fitness-strength",
    name: "Fitness log (strength)",
    category: "personal",
    description: "Sets, reps, and load by lift.",
    tags: ["strength", "gym", "log"],
    content: `# Strength training log

| Date | Exercise | Sets × Reps | Load | RPE | Notes |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-fitness-cardio",
    name: "Fitness log (cardio)",
    category: "personal",
    description: "Distance, time, and HR for cardio blocks.",
    tags: ["cardio", "running", "cycling"],
    content: `# Cardio log

| Date | Modality | Duration | Distance | Avg HR | Notes |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-fitness-yoga",
    name: "Fitness log (yoga)",
    category: "personal",
    description: "Class style, focus, and body notes.",
    tags: ["yoga", "mobility", "practice"],
    content: `# Yoga / mobility log

| Date | Style / video | Intensity (1–5) | Poses to revisit | Sensation notes |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-weight",
    name: "Weight tracker",
    category: "personal",
    description: "Weight with context, not just numbers.",
    tags: ["weight", "health", "trend"],
    content: `# Weight trend log — [Period: date / week / month]

## How to use this tracker
- **Goal:** [What you are learning or changing]
- **Update cadence:** [Daily at … / end of day / Sunday review]

## Log
| Date | Key metric / note | Outcome (✓/✗) |
| --- | --- | --- |
| [Date] | [Value / detail] | [✓/✗] |
|  |  |  |

## Summary
- **Trend (plain language):** [Up / flat / down] — *Why you think:* [Hypothesis]
- **One adjustment next period:** [Change]`,
  },
  {
    id: "personal-tracker-sleep",
    name: "Sleep tracker",
    category: "personal",
    description: "Time in bed, awakenings, and caffeine cutoff.",
    tags: ["sleep", "recovery", "energy"],
    content: `# Sleep log

| Date | Bed | Wake | Awakenings | Caffeine after 2p | Morning mood (1–5) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-water",
    name: "Water intake tracker",
    category: "personal",
    description: "Cups with reminders and context.",
    tags: ["hydration", "habits", "health"],
    content: `# Water intake — [Period: date / week / month]

## How to use this log
- **Goal:** [What you are learning or changing]
- **Update cadence:** [Daily at … / end of day / Sunday review]

## Log
| Date | Key metric / note | Outcome (✓/✗) |
| --- | --- | --- |
| [Date] | [Value / detail] | [✓/✗] |
|  |  |  |

## Summary
- **Trend (plain language):** [Up / flat / down] — *Why you think:* [Hypothesis]
- **One adjustment next period:** [Change]`,
  },
  {
    id: "personal-tracker-reading-log",
    name: "Reading log",
    category: "personal",
    description: "What you read and finish rate for books and articles.",
    tags: ["reading", "books", "log"],
    content: `# Reading log — [Year]

| Title | Type | Start | End | Rating (1–5) | One-line takeaway |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-movie-log",
    name: "Movie log",
    category: "personal",
    description: "Theater or home watches with one-line takeaways.",
    tags: ["movies", "log", "media"],
    content: `# Movie log

| Date | Title | Director | Where | Rating | Micro-review |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-tv",
    name: "TV show tracker",
    category: "personal",
    description: "Season/episode position and why you are watching.",
    tags: ["TV", "media", "tracking"],
    content: `# TV show tracker

| Show | Season / ep | Status | Abandon? | Why watching |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-music",
    name: "Music listening log",
    category: "personal",
    description: "New discovery vs comfort listens.",
    tags: ["music", "listening", "notes"],
    content: `# Listening log (music)

| Date | Artist / album | Context | Felt (1–5) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-expense",
    name: "Expense tracker",
    category: "personal",
    description: "By category and merchant with weekly roll-up.",
    tags: ["money", "expenses", "budget"],
    content: `# Expense log — [Month YYYY]

| Date | Merchant | Category | Amount | Card / method |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-savings",
    name: "Savings tracker",
    category: "personal",
    description: "Targets and transfers to buckets.",
    tags: ["savings", "goals", "money"],
    content: `# Savings plan — [Goal name]

| Month | Transferred | Running total | Target balance |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-subscription",
    name: "Subscription tracker",
    category: "personal",
    description: "Recurring services with renewal and cost per month.",
    tags: ["subscriptions", "recurring", "costs"],
    content: `# Subscription register

| Service | Plan | Next renewal | Cost / year | Keep? (Y/N) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-tracker-budget-monthly",
    name: "Budget (monthly)",
    category: "personal",
    description: "Planned vs actual with variance notes.",
    tags: ["budget", "monthly", "variance"],
    content: `# Monthly budget — [Month YYYY]

| Category | Planned | Actual | Variance | Note |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-bucket",
    name: "Bucket list",
    category: "personal",
    description: "Big life experiences with rough timing and cost.",
    tags: ["life goals", "experiences", "adventure"],
    content: `# Bucket list

## Criteria
- [Rule for what belongs here]

## Items
- [ ] [Item] — *Why it matters:* [Note]
- [ ] [Item]
- [ ] [Item]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-goals-yearly",
    name: "Goals (yearly)",
    category: "personal",
    description: "Outcome-oriented annual goals with metrics.",
    tags: ["goals", "OKRs", "year"],
    content: `# Yearly goals — [Year]

| Goal | Outcome / metric | Quarter checkpoint |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-goals-quarterly",
    name: "Goals (quarterly)",
    category: "personal",
    description: "Ninety-day outcomes in work and life.",
    tags: ["goals", "quarterly", "focus"],
    content: `# Quarterly goals — [Qn YYYY]

## Theme
- [One-line theme]

## Items
- [ ] [Item] — *Why it matters:* [Note]
- [ ] [Item]
- [ ] [Item]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-goals-monthly",
    name: "Goals (monthly)",
    category: "personal",
    description: "Three outcomes max with weekly markers.",
    tags: ["goals", "monthly", "habits"],
    content: `# Monthly goals — [Month YYYY]

## Outcomes (max 3)
1. [Goal]

## Items
- [ ] [Item] — *Why it matters:* [Note]
- [ ] [Item]
- [ ] [Item]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-shopping",
    name: "Shopping list",
    category: "personal",
    description: "By store zone with price checks.",
    tags: ["shopping", "errands", "household"],
    content: `# Shopping list — [Store / errand run date]

## By aisle / zone
- **Produce / cold:** [Items]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-packing-travel",
    name: "Packing list (travel)",
    category: "personal",
    description: "Categorized packing with weather and length.",
    tags: ["packing", "travel", "checklist"],
    content: `# Packing list — [Trip] — [Duration] — [Climate]

## Clothes (capsule)
- [Item] x[N]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-packing-camping",
    name: "Packing list (camping)",
    category: "personal",
    description: "Gear, food, and safety in groups.",
    tags: ["camping", "outdoor", "gear"],
    content: `# Camping pack — [Trip dates] — [Site type]

## Shelter and sleep
- [Tent, stakes, ground sheet]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-wish",
    name: "Wish list",
    category: "personal",
    description: "Wants for birthdays and sales with price tracking.",
    tags: ["wish list", "gifts", "shopping"],
    content: `# Wish list

- **Max spend comfort:** [Amount] [Currency]

## Items
- [ ] [Item] — *Why it matters:* [Note]
- [ ] [Item]
- [ ] [Item]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-gift-ideas",
    name: "Gift ideas list",
    category: "personal",
    description: "Recipient-centric ideas and purchase windows.",
    tags: ["gifts", "holidays", "people"],
    content: `# Gift ideas — [Season / year]

| Person | Interests (signals) | Idea | Budget | Bought? |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-books",
    name: "Books to read",
    category: "personal",
    description: "Queue with source and why.",
    tags: ["books", "TBR", "reading"],
    content: `# Books to read

## Queue rules
- [Max active reads] at a time

## Items
- [ ] [Item] — *Why it matters:* [Note]
- [ ] [Item]
- [ ] [Item]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-movies",
    name: "Movies to watch",
    category: "personal",
    description: "Queue with who to watch with.",
    tags: ["movies", "queue", "media"],
    content: `# Movies to watch

| Title | Source / why queued | With whom? |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-recipes",
    name: "Recipes to try",
    category: "personal",
    description: "Recipe stash with season and effort.",
    tags: ["cooking", "recipes", "home"],
    content: `# Recipes to try

| Recipe | Source | Season / occasion | Effort (1–5) | Tried? |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-home-improvement",
    name: "Home improvement projects",
    category: "personal",
    description: "Projects with cost rough order and dependency.",
    tags: ["home", "renovation", "projects"],
    content: `# Home improvement backlog

| Project | Why now? | Est. cost | Prereq |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-new-skills",
    name: "New skills to learn",
    category: "personal",
    description: "Skill outcomes and practice design.",
    tags: ["skills", "learning", "practice"],
    content: `# Skills to learn

| Skill | Target evidence | Time / week | Resources |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-places",
    name: "Places to visit",
    category: "personal",
    description: "Travel targets with type and best season.",
    tags: ["travel", "places", "inspiration"],
    content: `# Places to visit

- **Default trip length you assume:** [Days]

## Items
- [ ] [Item] — *Why it matters:* [Note]
- [ ] [Item]
- [ ] [Item]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-list-gratitude",
    name: "Gratitude list (standing)",
    category: "personal",
    description: "A running list separate from a dated journal entry.",
    tags: ["gratitude", "list", "positivity"],
    content: `# Standing gratitude list

- [Short gratitude beat] — *Date first noticed:* [Date]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-resume-basic",
    name: "Resume (basic)",
    category: "personal",
    description: "Standard sections for any role.",
    tags: ["resume", "CV", "job"],
    content: `# [Your Name] — [Headline or target role]

## Contact
[Phone] | [Email] | [City, ST] (optional) | [LinkedIn URL] | [Portfolio URL]

## Profile
[2–3 lines: who you are, what you do best, the impact you make.]

## Experience
### [Company] — [Title] | [Start]–[End]
- [Achievement] — *Impact:* [Metric / result]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-resume-tech",
    name: "Resume (tech)",
    category: "personal",
    description: "Tech-forward resume with project and stack callouts.",
    tags: ["resume", "engineer", "tech"],
    content: `# [Name] — [Role, e.g. Software Engineer II]

## Tech stack (examples)
- **Languages / runtimes:** [List]
- **Cloud / data:** [List]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-resume-creative",
    name: "Resume (creative)",
    category: "personal",
    description: "Portfolio-driven creative resume with links.",
    tags: ["resume", "creative", "portfolio"],
    content: `# [Name] — [Discipline, e.g. Product Designer]

## Selected work
### [Project] — *Link:* [URL]
- **Role:** [Your job] — *Outcome:* [One line]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-resume-academic",
    name: "Resume (academic / CV style)",
    category: "personal",
    description: "Publications, grants, and teaching blocks.",
    tags: ["CV", "academic", "research"],
    content: `# [Name] — [Field]

## Education
- **[Degree], [Field]** — [Institution], [Year]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-bio-short",
    name: "Bio (short)",
    category: "personal",
    description: "50–100 word bio in multiple tenses.",
    tags: ["bio", "about", "intro"],
    content: `# Short bio (versions)

## Third person (conference / site)
[50–100 words. Focus role, domain, 1–2 proof points, link.]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-bio-professional",
    name: "Bio (professional)",
    category: "personal",
    description: "Narrative bio with values and current focus.",
    tags: ["bio", "career", "narrative"],
    content: `# Professional bio — [Name]

## One paragraph
[3–5 sentences. Origin → expertise → what you do now → what you want next (optional).]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-mission-statement",
    name: "Personal mission statement",
    category: "personal",
    description: "Mission, vision, and guardrails in plain language.",
    tags: ["mission", "values", "purpose"],
    content: `# Personal mission (draft) — [Date]

## One-sentence mission
> [I am / I help / I build … so that …]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-values-worksheet",
    name: "Values worksheet",
    category: "personal",
    description: "Name values, live examples, and trade-offs.",
    tags: ["values", "priorities", "clarity"],
    content: `# Values workshop — [Date]

| Value | When it shows up | When it is hard to honor |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-swot-personal",
    name: "SWOT (personal)",
    category: "personal",
    description: "SWOT for career or life season.",
    tags: ["SWOT", "self-assessment", "career"],
    content: `# Personal SWOT — [Context: e.g. role change, next 12 months]

## Strengths (internal, real evidence)
- [Strength] — *Proof:* [Example]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-life-wheel",
    name: "Life wheel assessment",
    category: "personal",
    description: "8 dimensions scored and one experiment each.",
    tags: ["life wheel", "balance", "wellbeing"],
    content: `# Life wheel — [Date]

| Area | Score 1–10 | One sentence (why) | 30-day upgrade |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-vision-board",
    name: "Vision board outline (text)",
    category: "personal",
    description: "Text-based vision for goals without images first.",
    tags: ["vision", "goals", "long-term"],
    content: `# Vision — [3-year horizon label]

## What I will see, feel, and have evidence of
- **Work / craft:** [Detail]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-time-audit",
    name: "Time audit",
    category: "personal",
    description: "Track a week, categorize, and reallocate 5–10 hours.",
    tags: ["time", "productivity", "focus"],
    content: `# Time audit — [Week of Date]

| Block | Mon | … |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-energy-audit",
    name: "Energy audit",
    category: "personal",
    description: "Drains, boosts, and one boundary experiment.",
    tags: ["energy", "habits", "boundaries"],
    content: `# Energy audit — [Date range]

## Drains (what costs energy, even if the task is important on paper)
- **People / context:** [Meetings, conflict, high-interrupt roles]
- **Cognitive load:** [Switching cost, unclear priorities, long decisions]
- **Body / health:** [Sleep, food, pain, low movement]
- **Emotional load:** [Worry, guilt, unprocessed conflict]

## Boosts (what gives energy reliably)
- **Ritual / environment:** [Light, music, place, time of day]
- **Connection:** [Person or group that recharges you]
- **Meaning / progress:** [What makes effort feel worth it this week]

## Time map (3 typical days, sketch)
| Day / window | Drains (top) | Boosts (top) |
| --- | --- | --- |
| [Day] | [List] | [List] |

## One experiment this week (boundary or habit)
- **I will start/stop:** [Change] — *Measure success as:* [Energy 1–5 or binary yes/no] — *Review on:* [Date]

## Support or accountability
- **Who can know about this experiment:** [Name] — *What they should ask:* [Check-in question]`,
  },
  {
    id: "personal-doc-relationship-map",
    name: "Relationship map",
    category: "personal",
    description: "Key people and what you need from each circle.",
    tags: ["relationships", "support", "network"],
    content: `# Relationship map — [Date]

| Person / group | Closeness | What I get | What I give | Tension? |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-pdp",
    name: "Personal development plan (PDP)",
    category: "personal",
    description: "12-week growth plan with learning and practice.",
    tags: ["development", "growth", "plan"],
    content: `# Personal development plan — [Horizon, e.g. 12 weeks]

## Outcome (single sentence)
- [I will be able to … because …]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "personal-doc-mentoring-notes",
    name: "Mentoring notes",
    category: "personal",
    description: "Mentor or mentee session capture.",
    tags: ["mentoring", "coaching", "notes"],
    content: `# Mentoring log — [Pairing name] — [Date]

## Objectives of this relationship (standing)
- **Mentee focus:** [Theme]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 3)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-sprint-planning",
    name: "Sprint planning",
    category: "project-management",
    description: "Sprint plan with goal, scope, and capacity for [N] week(s).",
    tags: ["sprint", "agile", "scrum", "planning"],
    content: `# Sprint planning — [Project / product] — [Sprint or period]

## Purpose
- **Outcome for this event:** [One sentence] — *Audience:* [Who is in the room or in this document]

## Input deck (links and IDs)
- **Backlog / board:** [URL] — *Query filter:* [JQL/label]
- **Risks and dependencies doc:** [URL]

## Commitments and decisions (fill during meeting)
| Topic | Decision / commit | Owner |
| --- | --- | --- |

## Follow-ups and calendar
- **Next meeting:** [Time] — *Agenda seed:* [Bullets]`,
  },
  {
    id: "project-management-sprint-backlog",
    name: "Sprint backlog",
    category: "project-management",
    description: "Ordered sprint backlog with acceptance and estimates.",
    tags: ["backlog", "sprint", "agile", "stories"],
    content: `# Sprint backlog — [Project / product] — [Sprint or period]

## Purpose
- **Outcome for this event:** [One sentence] — *Audience:* [Who is in the room or in this document]

## Input deck (links and IDs)
- **Backlog / board:** [URL] — *Query filter:* [JQL/label]
- **Risks and dependencies doc:** [URL]

## Commitments and decisions (fill during meeting)
| Topic | Decision / commit | Owner |
| --- | --- | --- |

## Follow-ups and calendar
- **Next meeting:** [Time] — *Agenda seed:* [Bullets]`,
  },
  {
    id: "project-management-sprint-review",
    name: "Sprint review",
    category: "project-management",
    description: "Demo plan, feedback capture, and release confidence.",
    tags: ["review", "demo", "stakeholders", "agile"],
    content: `# Sprint review — [Project / product] — [Sprint or period]

## Purpose
- **Outcome for this event:** [One sentence] — *Audience:* [Who is in the room or in this document]

## Input deck (links and IDs)
- **Backlog / board:** [URL] — *Query filter:* [JQL/label]
- **Risks and dependencies doc:** [URL]

## Commitments and decisions (fill during meeting)
| Topic | Decision / commit | Owner |
| --- | --- | --- |

## Follow-ups and calendar
- **Next meeting:** [Time] — *Agenda seed:* [Bullets]`,
  },
  {
    id: "project-management-sprint-retrospective",
    name: "Sprint retrospective",
    category: "project-management",
    description: "What went well, learnings, and experiments with owners.",
    tags: ["retro", "improvement", "team", "agile"],
    content: `# Sprint retrospective — [Project / product] — [Sprint or period]

## Purpose
- **Outcome for this event:** [One sentence] — *Audience:* [Who is in the room or in this document]

## Input deck (links and IDs)
- **Backlog / board:** [URL] — *Query filter:* [JQL/label]
- **Risks and dependencies doc:** [URL]

## Commitments and decisions (fill during meeting)
| Topic | Decision / commit | Owner |
| --- | --- | --- |

## Follow-ups and calendar
- **Next meeting:** [Time] — *Agenda seed:* [Bullets]`,
  },
  {
    id: "project-management-daily-standup",
    name: "Daily standup notes",
    category: "project-management",
    description: "Asynchronous standup for yesterday / today / blockers.",
    tags: ["standup", "async", "blockers", "agile"],
    content: `# Daily standup notes — [Project / product] — [Sprint or period]

## Purpose
- **Outcome for this event:** [One sentence] — *Audience:* [Who is in the room or in this document]

## Input deck (links and IDs)
- **Backlog / board:** [URL] — *Query filter:* [JQL/label]
- **Risks and dependencies doc:** [URL]

## Commitments and decisions (fill during meeting)
| Topic | Decision / commit | Owner |
| --- | --- | --- |

## Follow-ups and calendar
- **Next meeting:** [Time] — *Agenda seed:* [Bullets]`,
  },
  {
    id: "project-management-velocity-tracker",
    name: "Velocity tracker",
    category: "project-management",
    description: "Historical velocity, predictability, and carryover.",
    tags: ["velocity", "metrics", "forecasting", "agile"],
    content: `# Velocity tracker — [Project / product] — [Sprint or period]

## Purpose
- **Outcome for this event:** [One sentence] — *Audience:* [Who is in the room or in this document]

## Input deck (links and IDs)
- **Backlog / board:** [URL] — *Query filter:* [JQL/label]
- **Risks and dependencies doc:** [URL]

## Commitments and decisions (fill during meeting)
| Topic | Decision / commit | Owner |
| --- | --- | --- |

## Follow-ups and calendar
- **Next meeting:** [Time] — *Agenda seed:* [Bullets]`,
  },
  {
    id: "project-management-burndown-data",
    name: "Burndown chart (data table)",
    category: "project-management",
    description: "Story points and remaining work for charting tools.",
    tags: ["burndown", "metrics", "sprint", "agile"],
    content: `# Burndown chart (data table) — [Project / product] — [Sprint or period]

## Purpose
- **Outcome for this event:** [One sentence] — *Audience:* [Who is in the room or in this document]

## Input deck (links and IDs)
- **Backlog / board:** [URL] — *Query filter:* [JQL/label]
- **Risks and dependencies doc:** [URL]

## Commitments and decisions (fill during meeting)
| Topic | Decision / commit | Owner |
| --- | --- | --- |

## Follow-ups and calendar
- **Next meeting:** [Time] — *Agenda seed:* [Bullets]`,
  },
  {
    id: "project-management-release-planning",
    name: "Release planning",
    category: "project-management",
    description: "Scope, quality bar, and release calendar.",
    tags: ["release", "roadmap", "quality", "planning"],
    content: `# Release planning — [Project / product] — [Sprint or period]

## Purpose
- **Outcome for this event:** [One sentence] — *Audience:* [Who is in the room or in this document]

## Input deck (links and IDs)
- **Backlog / board:** [URL] — *Query filter:* [JQL/label]
- **Risks and dependencies doc:** [URL]

## Commitments and decisions (fill during meeting)
| Topic | Decision / commit | Owner |
| --- | --- | --- |

## Follow-ups and calendar
- **Next meeting:** [Time] — *Agenda seed:* [Bullets]`,
  },
  {
    id: "project-management-pi-planning",
    name: "PI planning (scaled agile)",
    category: "project-management",
    description: "Program increment objectives and dependencies (high level).",
    tags: ["PI", "SAFe", "scaled-agile", "planning"],
    content: `# PI planning (scaled agile) — [Project / product] — [Sprint or period]

## Purpose
- **Outcome for this event:** [One sentence] — *Audience:* [Who is in the room or in this document]

## Input deck (links and IDs)
- **Backlog / board:** [URL] — *Query filter:* [JQL/label]
- **Risks and dependencies doc:** [URL]

## Commitments and decisions (fill during meeting)
| Topic | Decision / commit | Owner |
| --- | --- | --- |

## Follow-ups and calendar
- **Next meeting:** [Time] — *Agenda seed:* [Bullets]`,
  },
  {
    id: "project-management-capacity-planning",
    name: "Capacity planning",
    category: "project-management",
    description: "Load vs capacity in hours or story points for the team.",
    tags: ["capacity", "forecast", "agile", "resourcing"],
    content: `# Capacity planning — [Project / product] — [Sprint or period]

## Purpose
- **Outcome for this event:** [One sentence] — *Audience:* [Who is in the room or in this document]

## Input deck (links and IDs)
- **Backlog / board:** [URL] — *Query filter:* [JQL/label]
- **Risks and dependencies doc:** [URL]

## Commitments and decisions (fill during meeting)
| Topic | Decision / commit | Owner |
| --- | --- | --- |

## Follow-ups and calendar
- **Next meeting:** [Time] — *Agenda seed:* [Bullets]`,
  },
  {
    id: "project-management-kanban-board-setup",
    name: "Kanban board setup",
    category: "project-management",
    description: "Columns, WIP, and item types to start a board.",
    tags: ["kanban", "flow", "WIP", "board"],
    content: `# Kanban board setup — [Team] — [Date]

## Board map
- **From → to states:** [List columns left to right]
- **WIP (draft):** [Column: limit] |

## Policies (DoR / DoD by column)
| Column / state | Enter when | Exit when / DoD |
| --- | --- | --- |

## Metrics to watch (optional)
- **Primary:** [Lead time / throughput / age] — *Cadence to review:* [When]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-kanban-wip-limits",
    name: "WIP limits (Kanban)",
    category: "project-management",
    description: "WIP by column with rationale and experiments.",
    tags: ["WIP", "kanban", "flow", "limits"],
    content: `# WIP limits (Kanban) — [Team] — [Date]

## Board map
- **From → to states:** [List columns left to right]
- **WIP (draft):** [Column: limit] |

## Policies (DoR / DoD by column)
| Column / state | Enter when | Exit when / DoD |
| --- | --- | --- |

## Metrics to watch (optional)
- **Primary:** [Lead time / throughput / age] — *Cadence to review:* [When]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-kanban-swim-lanes",
    name: "Swim lanes (Kanban)",
    category: "project-management",
    description: "Laning strategy by class of service and priority.",
    tags: ["swim-lanes", "kanban", "prioritization", "flow"],
    content: `# Swim lanes (Kanban) — [Team] — [Date]

## Board map
- **From → to states:** [List columns left to right]
- **WIP (draft):** [Column: limit] |

## Policies (DoR / DoD by column)
| Column / state | Enter when | Exit when / DoD |
| --- | --- | --- |

## Metrics to watch (optional)
- **Primary:** [Lead time / throughput / age] — *Cadence to review:* [When]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-kanban-workflow",
    name: "Workflow definition (Kanban)",
    category: "project-management",
    description: "States, DoR/DoD per state, and policies.",
    tags: ["workflow", "kanban", "policies", "process"],
    content: `# Workflow definition (Kanban) — [Team] — [Date]

## Board map
- **From → to states:** [List columns left to right]
- **WIP (draft):** [Column: limit] |

## Policies (DoR / DoD by column)
| Column / state | Enter when | Exit when / DoD |
| --- | --- | --- |

## Metrics to watch (optional)
- **Primary:** [Lead time / throughput / age] — *Cadence to review:* [When]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-risk-register",
    name: "Risk register",
    category: "project-management",
    description: "Catalog of risks, scores, and owners.",
    tags: ["risk", "register", "PM", "governance"],
    content: `# Risk register — [Project] — [Date]

## Summary
- **Top 3 current risks (plain language):** [List] — *Overall posture:* [Calm / watch / escalated]

## Detail table (expand rows as needed)
| Risk (cause → effect) | L | I | Score | Status | Owner | Next review |
| --- | --- | --- | --- | --- | --- | --- |

## Escalation (if score ≥ threshold from policy)
- **To:** [Role] — *Required by:* [Date] — *Ask:* [Help needed]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-risk-matrix",
    name: "Risk assessment matrix",
    category: "project-management",
    description: "Qualitative 5×5 with scoring legend.",
    tags: ["risk", "matrix", "assessment", "RAG"],
    content: `# Risk assessment matrix — [Project] — [Date]

## Summary
- **Top 3 current risks (plain language):** [List] — *Overall posture:* [Calm / watch / escalated]

## Detail table (expand rows as needed)
| Risk (cause → effect) | L | I | Score | Status | Owner | Next review |
| --- | --- | --- | --- | --- | --- | --- |

## Escalation (if score ≥ threshold from policy)
- **To:** [Role] — *Required by:* [Date] — *Ask:* [Help needed]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-risk-mitigation",
    name: "Risk mitigation plan",
    category: "project-management",
    description: "Mitigation actions with triggers and cost.",
    tags: ["risk", "mitigation", "contingency", "planning"],
    content: `# Risk mitigation plan — [Project] — [Date]

## Summary
- **Top 3 current risks (plain language):** [List] — *Overall posture:* [Calm / watch / escalated]

## Detail table (expand rows as needed)
| Risk (cause → effect) | L | I | Score | Status | Owner | Next review |
| --- | --- | --- | --- | --- | --- | --- |

## Escalation (if score ≥ threshold from policy)
- **To:** [Role] — *Required by:* [Date] — *Ask:* [Help needed]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-risk-review",
    name: "Risk review meeting",
    category: "project-management",
    description: "Agenda and decisions from a live risk review.",
    tags: ["risk", "governance", "meeting", "escalation"],
    content: `# Risk review meeting — [Project] — [Date]

## Summary
- **Top 3 current risks (plain language):** [List] — *Overall posture:* [Calm / watch / escalated]

## Detail table (expand rows as needed)
| Risk (cause → effect) | L | I | Score | Status | Owner | Next review |
| --- | --- | --- | --- | --- | --- | --- |

## Escalation (if score ≥ threshold from policy)
- **To:** [Role] — *Required by:* [Date] — *Ask:* [Help needed]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-raci-basic",
    name: "RACI (basic sheet)",
    category: "project-management",
    description: "Simple RACI for a small workstream.",
    tags: ["RACI", "accountability", "roles", "RASCI"],
    content: `# RACI (basic sheet) — [Work item / workstream] — [Date]

## Legend
- **R**esponsible, **A**ccountable, **C**onsulted, **I**nformed

| Activity / deliverable | R | A | C | I |
| --- | --- | --- | --- | --- |

## Notes (handoffs, approval SLAs, tools)
- [Where approvals happen, SLAs, DRI expectations]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-raci-project",
    name: "RACI (project)",
    category: "project-management",
    description: "RACI across project tracks and work packages.",
    tags: ["RACI", "governance", "stakeholders", "project"],
    content: `# RACI (project) — [Work item / workstream] — [Date]

## Legend
- **R**esponsible, **A**ccountable, **C**onsulted, **I**nformed

| Activity / deliverable | R | A | C | I |
| --- | --- | --- | --- | --- |

## Notes (handoffs, approval SLAs, tools)
- [Where approvals happen, SLAs, DRI expectations]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-raci-cross-team",
    name: "RACI (cross-team)",
    category: "project-management",
    description: "RACI with external teams and handoffs shown.",
    tags: ["RACI", "handoffs", "cross-team", "dependency"],
    content: `# RACI (cross-team) — [Work item / workstream] — [Date]

## Legend
- **R**esponsible, **A**ccountable, **C**onsulted, **I**nformed

| Activity / deliverable | R | A | C | I |
| --- | --- | --- | --- | --- |

## Notes (handoffs, approval SLAs, tools)
- [Where approvals happen, SLAs, DRI expectations]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-raci-enterprise",
    name: "RACI (enterprise program)",
    category: "project-management",
    description: "Program-level RACI with compliance and comms lines.",
    tags: ["RACI", "program", "enterprise", "governance"],
    content: `# RACI (enterprise program) — [Work item / workstream] — [Date]

## Legend
- **R**esponsible, **A**ccountable, **C**onsulted, **I**nformed

| Activity / deliverable | R | A | C | I |
| --- | --- | --- | --- | --- |

## Notes (handoffs, approval SLAs, tools)
- [Where approvals happen, SLAs, DRI expectations]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-stakeholder-map",
    name: "Stakeholder map (power/interest or similar)",
    category: "project-management",
    description: "Map positions to engagement strategy blocks.",
    tags: ["stakeholders", "influence", "engagement", "map"],
    content: `# Stakeholder map (power/interest or similar) — [Project] — [Date]

## Stakeholder snapshot (top table)
| Name / group | Role to project | Current stance | Engage (H/M/L) |

## Messages and next touch (optional sub-table)
| Stakeholder | Key message (one line) | Next touch (method / date) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-stakeholder-register",
    name: "Stakeholder register",
    category: "project-management",
    description: "Roster of stakeholders with interest and comms plan.",
    tags: ["stakeholders", "register", "governance", "comms"],
    content: `# Stakeholder register — [Project] — [Date]

## Stakeholder snapshot (top table)
| Name / group | Role to project | Current stance | Engage (H/M/L) |

## Messages and next touch (optional sub-table)
| Stakeholder | Key message (one line) | Next touch (method / date) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-influence-interest-matrix",
    name: "Influence / interest matrix",
    category: "project-management",
    description: "Four-quadrant plan with key messages.",
    tags: ["influence", "interest", "stakeholders", "matrix"],
    content: `# Influence / interest matrix — [Project] — [Date]

## Stakeholder snapshot (top table)
| Name / group | Role to project | Current stance | Engage (H/M/L) |

## Messages and next touch (optional sub-table)
| Stakeholder | Key message (one line) | Next touch (method / date) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-communication-preferences",
    name: "Communication preferences (stakeholder)",
    category: "project-management",
    description: "Channel, cadence, and escalation for each key partner.",
    tags: ["comms", "stakeholders", "cadence", "escalation"],
    content: `# Communication preferences (stakeholder) — [Project] — [Date]

## Stakeholder snapshot (top table)
| Name / group | Role to project | Current stance | Engage (H/M/L) |

## Messages and next touch (optional sub-table)
| Stakeholder | Key message (one line) | Next touch (method / date) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-project-timeline",
    name: "Project timeline",
    category: "project-management",
    description: "Milestones and dependencies in time order.",
    tags: ["timeline", "milestones", "Gantt", "schedule"],
    content: `# Project timeline — [Program] — [Date]

## At-a-glance
- **Key dates to protect:** [List] — *Critical path hint:* [Short note]

## Work breakdown / milestones (table for tools)
| ID | Name | Owner | Start | End | Predecessor | % complete | RAG |

## Decisions and changes since last view
- [What moved left/right and why] — *Approved by:* [Name / forum]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-roadmap-quarterly",
    name: "Product roadmap (quarterly)",
    category: "project-management",
    description: "Now / next / later at quarterly granularity.",
    tags: ["roadmap", "product", "quarterly", "planning"],
    content: `# Product roadmap (quarterly) — [Program] — [Date]

## At-a-glance
- **Key dates to protect:** [List] — *Critical path hint:* [Short note]

## Work breakdown / milestones (table for tools)
| ID | Name | Owner | Start | End | Predecessor | % complete | RAG |

## Decisions and changes since last view
- [What moved left/right and why] — *Approved by:* [Name / forum]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-roadmap-annual",
    name: "Product roadmap (annual)",
    category: "project-management",
    description: "Themes, bets, and capacity envelope for the year.",
    tags: ["roadmap", "annual", "product", "strategy"],
    content: `# Product roadmap (annual) — [Program] — [Date]

## At-a-glance
- **Key dates to protect:** [List] — *Critical path hint:* [Short note]

## Work breakdown / milestones (table for tools)
| ID | Name | Owner | Start | End | Predecessor | % complete | RAG |

## Decisions and changes since last view
- [What moved left/right and why] — *Approved by:* [Name / forum]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-release-schedule",
    name: "Release schedule",
    category: "project-management",
    description: "Train calendar with code freeze and QA windows.",
    tags: ["release", "train", "calendar", "QA"],
    content: `# Release schedule — [Program] — [Date]

## At-a-glance
- **Key dates to protect:** [List] — *Critical path hint:* [Short note]

## Work breakdown / milestones (table for tools)
| ID | Name | Owner | Start | End | Predecessor | % complete | RAG |

## Decisions and changes since last view
- [What moved left/right and why] — *Approved by:* [Name / forum]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-milestone-tracker",
    name: "Milestone tracker",
    category: "project-management",
    description: "Milestone, evidence, and status with owners.",
    tags: ["milestones", "tracking", "PMO", "delivery"],
    content: `# Milestone tracker — [Program] — [Date]

## At-a-glance
- **Key dates to protect:** [List] — *Critical path hint:* [Short note]

## Work breakdown / milestones (table for tools)
| ID | Name | Owner | Start | End | Predecessor | % complete | RAG |

## Decisions and changes since last view
- [What moved left/right and why] — *Approved by:* [Name / forum]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-gantt-data",
    name: "Gantt chart (data for tools)",
    category: "project-management",
    description: "Task list for import: ID, predecessor, effort.",
    tags: ["Gantt", "dependencies", "schedule", "WBS"],
    content: `# Gantt chart (data for tools) — [Program] — [Date]

## At-a-glance
- **Key dates to protect:** [List] — *Critical path hint:* [Short note]

## Work breakdown / milestones (table for tools)
| ID | Name | Owner | Start | End | Predecessor | % complete | RAG |

## Decisions and changes since last view
- [What moved left/right and why] — *Approved by:* [Name / forum]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-phase-gate",
    name: "Phase gate checklist",
    category: "project-management",
    description: "Gate entry criteria, artifacts, and go/no inputs.",
    tags: ["phase-gate", "governance", "quality", "compliance"],
    content: `# Phase gate checklist — [Program] — [Date]

## At-a-glance
- **Key dates to protect:** [List] — *Critical path hint:* [Short note]

## Work breakdown / milestones (table for tools)
| ID | Name | Owner | Start | End | Predecessor | % complete | RAG |

## Decisions and changes since last view
- [What moved left/right and why] — *Approved by:* [Name / forum]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-feature-brief",
    name: "Feature brief",
    category: "project-management",
    description: "Lightweight one-page feature scoping and risks.",
    tags: ["feature", "brief", "product", "scope"],
    content: `# Feature brief — [Product or initiative] — [Date]

## Problem / job to be done
- [Who] struggles with [context] which causes [outcome] today.

## Proposed experience (what we are building, high level)
- **User story headline:** *As a [user], I can [action], so that [outcome].*
- **In scope (bullets) vs out of scope (bullets):** [Fill both lists in your doc]

## Open questions, risks, and analytics
- **Question:** [?] — *Owner to resolve:* [Name]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-prd-basic",
    name: "PRD (basic)",
    category: "project-management",
    description: "Problem, goals, non-goals, and acceptance outline.",
    tags: ["PRD", "product", "requirements", "agile"],
    content: `# PRD (basic) — [Product or initiative] — [Date]

## Problem / job to be done
- [Who] struggles with [context] which causes [outcome] today.

## Proposed experience (what we are building, high level)
- **User story headline:** *As a [user], I can [action], so that [outcome].*
- **In scope (bullets) vs out of scope (bullets):** [Fill both lists in your doc]

## Open questions, risks, and analytics
- **Question:** [?] — *Owner to resolve:* [Name]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-prd-detailed",
    name: "PRD (detailed)",
    category: "project-management",
    description: "Deep PRD with flows, data, and analytics hooks.",
    tags: ["PRD", "spec", "product", "engineering"],
    content: `# PRD (detailed) — [Product or initiative] — [Date]

## Problem / job to be done
- [Who] struggles with [context] which causes [outcome] today.

## Proposed experience (what we are building, high level)
- **User story headline:** *As a [user], I can [action], so that [outcome].*
- **In scope (bullets) vs out of scope (bullets):** [Fill both lists in your doc]

## Open questions, risks, and analytics
- **Question:** [?] — *Owner to resolve:* [Name]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-one-pager",
    name: "One-pager (initiative)",
    category: "project-management",
    description: "Initiative on a single page for execs.",
    tags: ["one-pager", "exec", "summary", "alignment"],
    content: `# One-pager (initiative) — [Product or initiative] — [Date]

## Problem / job to be done
- [Who] struggles with [context] which causes [outcome] today.

## Proposed experience (what we are building, high level)
- **User story headline:** *As a [user], I can [action], so that [outcome].*
- **In scope (bullets) vs out of scope (bullets):** [Fill both lists in your doc]

## Open questions, risks, and analytics
- **Question:** [?] — *Owner to resolve:* [Name]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-six-pager",
    name: "Six-pager (narrative spec)",
    category: "project-management",
    description: "Narrative format with open questions and risks called out.",
    tags: ["six-pager", "narrative", "Amazon-style", "spec"],
    content: `# Six-pager (narrative spec) — [Product or initiative] — [Date]

## Problem / job to be done
- [Who] struggles with [context] which causes [outcome] today.

## Proposed experience (what we are building, high level)
- **User story headline:** *As a [user], I can [action], so that [outcome].*
- **In scope (bullets) vs out of scope (bullets):** [Fill both lists in your doc]

## Open questions, risks, and analytics
- **Question:** [?] — *Owner to resolve:* [Name]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-lean-canvas",
    name: "Lean canvas",
    category: "project-management",
    description: "Lean business model canvas in markdown tables.",
    tags: ["lean", "canvas", "startup", "product"],
    content: `# Lean canvas — [Product or initiative] — [Date]

## Problem / job to be done
- [Who] struggles with [context] which causes [outcome] today.

## Proposed experience (what we are building, high level)
- **User story headline:** *As a [user], I can [action], so that [outcome].*
- **In scope (bullets) vs out of scope (bullets):** [Fill both lists in your doc]

## Open questions, risks, and analytics
- **Question:** [?] — *Owner to resolve:* [Name]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-business-model-canvas",
    name: "Business model canvas (BMC)",
    category: "project-management",
    description: "BMC in structured sections and prompts.",
    tags: ["BMC", "strategy", "canvas", "business"],
    content: `# Business model canvas (BMC) — [Product or initiative] — [Date]

## Problem / job to be done
- [Who] struggles with [context] which causes [outcome] today.

## Proposed experience (what we are building, high level)
- **User story headline:** *As a [user], I can [action], so that [outcome].*
- **In scope (bullets) vs out of scope (bullets):** [Fill both lists in your doc]

## Open questions, risks, and analytics
- **Question:** [?] — *Owner to resolve:* [Name]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-user-story-single",
    name: "User story (single)",
    category: "project-management",
    description: "Standard story with acceptance and notes.",
    tags: ["user story", "agile", "INVEST", "acceptance"],
    content: `# User story (single) — [Team] — [Date]

## Linked items
- **ID / key:** [JIRA-123] — *Sprint / PI:* [Label]

## User story (template)
- **As a** [persona] **I want** [capability] **so that** [value].

## Notes / test ideas
- **Edge case:** [Case] — *Expected behavior:* [Line]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-epic",
    name: "Epic",
    category: "project-management",
    description: "Epic wrapper with value and sub-story map.",
    tags: ["epic", "agile", "backlog", "scope"],
    content: `# Epic — [Team] — [Date]

## Linked items
- **ID / key:** [JIRA-123] — *Sprint / PI:* [Label]

## User story (template)
- **As a** [persona] **I want** [capability] **so that** [value].

## Notes / test ideas
- **Edge case:** [Case] — *Expected behavior:* [Line]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-theme",
    name: "Theme",
    category: "project-management",
    description: "Thematic group for OKRs and roadmap alignment.",
    tags: ["theme", "OKRs", "roadmap", "strategy"],
    content: `# Theme — [Team] — [Date]

## Linked items
- **ID / key:** [JIRA-123] — *Sprint / PI:* [Label]

## User story (template)
- **As a** [persona] **I want** [capability] **so that** [value].

## Notes / test ideas
- **Edge case:** [Case] — *Expected behavior:* [Line]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-story-map",
    name: "Story map (outline)",
    category: "project-management",
    description: "Backbone, releases, and slices.",
    tags: ["story map", "agile", "product", "slices"],
    content: `# Story map (outline) — [Team] — [Date]

## Linked items
- **ID / key:** [JIRA-123] — *Sprint / PI:* [Label]

## User story (template)
- **As a** [persona] **I want** [capability] **so that** [value].

## Notes / test ideas
- **Edge case:** [Case] — *Expected behavior:* [Line]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-acceptance-criteria",
    name: "Acceptance criteria (template)",
    category: "project-management",
    description: "Given/when/then and edge cases in one list.",
    tags: ["acceptance", "BDD", "test", "quality"],
    content: `# Acceptance criteria (template) — [Team] — [Date]

## Linked items
- **ID / key:** [JIRA-123] — *Sprint / PI:* [Label]

## User story (template)
- **As a** [persona] **I want** [capability] **so that** [value].

## Notes / test ideas
- **Edge case:** [Case] — *Expected behavior:* [Line]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-definition-of-done",
    name: "Definition of Done (DoD)",
    category: "project-management",
    description: "Checklist of done for every increment.",
    tags: ["DoD", "quality", "agile", "release"],
    content: `# Definition of Done (DoD) — [Team] — [Date]

## Linked items
- **ID / key:** [JIRA-123] — *Sprint / PI:* [Label]

## User story (template)
- **As a** [persona] **I want** [capability] **so that** [value].

## Notes / test ideas
- **Edge case:** [Case] — *Expected behavior:* [Line]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-definition-of-ready",
    name: "Definition of Ready (DoR)",
    category: "project-management",
    description: "Entry criteria for a story to be sprint-ready.",
    tags: ["DoR", "agile", "sprint", "grooming"],
    content: `# Definition of Ready (DoR) — [Team] — [Date]

## Linked items
- **ID / key:** [JIRA-123] — *Sprint / PI:* [Label]

## User story (template)
- **As a** [persona] **I want** [capability] **so that** [value].

## Notes / test ideas
- **Edge case:** [Case] — *Expected behavior:* [Line]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-story-points-guide",
    name: "Story points guide (team scale)",
    category: "project-management",
    description: "Anchor examples for your 1,2,3,5,8 (or t-shirt) scale.",
    tags: ["estimation", "story points", "velocity", "team"],
    content: `# Story points guide (team scale) — [Team] — [Date]

## Estimation rules (agreed in session)
- **Timebox for debate:** [Minutes] — *Tie-breaker process:* [Rule]

## Items estimated (table you can import)
| Item / story | Notes | Size / points / band | Rationale (one line) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-t-shirt-sizing",
    name: "T-shirt sizing",
    category: "project-management",
    description: "XS–XL with guardrails to keep sizing debates timeboxed.",
    tags: ["t-shirt", "estimation", "relative", "agile"],
    content: `# T-shirt sizing — [Team] — [Date]

## Estimation rules (agreed in session)
- **Timebox for debate:** [Minutes] — *Tie-breaker process:* [Rule]

## Items estimated (table you can import)
| Item / story | Notes | Size / points / band | Rationale (one line) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-planning-poker",
    name: "Planning poker (session record)",
    category: "project-management",
    description: "Session output with final estimates and spread notes.",
    tags: ["planning poker", "estimation", "scrum", "consensus"],
    content: `# Planning poker (session record) — [Team] — [Date]

## Estimation rules (agreed in session)
- **Timebox for debate:** [Minutes] — *Tie-breaker process:* [Rule]

## Items estimated (table you can import)
| Item / story | Notes | Size / points / band | Rationale (one line) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-three-point",
    name: "Three-point estimate",
    category: "project-management",
    description: "O / M / P and simple E = (O+4M+P)/6 table.",
    tags: ["three-point", "PERT", "estimation", "schedule"],
    content: `# Three-point estimate — [Team] — [Date]

## Estimation rules (agreed in session)
- **Timebox for debate:** [Minutes] — *Tie-breaker process:* [Rule]

## Items estimated (table you can import)
| Item / story | Notes | Size / points / band | Rationale (one line) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-effort-value",
    name: "Effort / value matrix",
    category: "project-management",
    description: "2x2 prioritization and cut line.",
    tags: ["prioritization", "value", "RICE", "quadrant"],
    content: `# Effort / value matrix — [Team] — [Date]

## Estimation rules (agreed in session)
- **Timebox for debate:** [Minutes] — *Tie-breaker process:* [Rule]

## Items estimated (table you can import)
| Item / story | Notes | Size / points / band | Rationale (one line) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-meeting-kickoff",
    name: "Project kickoff",
    category: "project-management",
    description: "Charter, roles, and working agreements kickoff pack.",
    tags: ["kickoff", "project", "alignment", "stakeholders"],
    content: `# Project kickoff — [Project] — [Date]

## Purpose and success
- **Objective:** [One line] — *Decisions we must leave with:* [List]

## Agenda and time (keep tight)
| Time | Topic | Owner | Decisions to capture |

## Notes and decisions (during meeting)
| Decision / outcome | Rationale (short) | Next step | Owner |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-meeting-status",
    name: "Status meeting (project)",
    category: "project-management",
    description: "Status with RAG, top risks, and decisions required.",
    tags: ["status", "RAG", "stakeholders", "PMO"],
    content: `# Status meeting (project) — [Project] — [Date]

## Purpose and success
- **Objective:** [One line] — *Decisions we must leave with:* [List]

## Agenda and time (keep tight)
| Time | Topic | Owner | Decisions to capture |

## Notes and decisions (during meeting)
| Decision / outcome | Rationale (short) | Next step | Owner |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-meeting-steering",
    name: "Steering committee",
    category: "project-management",
    description: "Escalations, options, and formal decisions for sponsors.",
    tags: ["steer-co", "governance", "escalation", "sponsors"],
    content: `# Steering committee — [Project] — [Date]

## Purpose and success
- **Objective:** [One line] — *Decisions we must leave with:* [List]

## Agenda and time (keep tight)
| Time | Topic | Owner | Decisions to capture |

## Notes and decisions (during meeting)
| Decision / outcome | Rationale (short) | Next step | Owner |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-meeting-war-room",
    name: "War room (incident or recovery)",
    category: "project-management",
    description: "Live incident bridge notes with timeline and DRI list.",
    tags: ["war room", "incident", "bridge", "operations"],
    content: `# War room (incident or recovery) — [Project] — [Date]

## Purpose and success
- **Objective:** [One line] — *Decisions we must leave with:* [List]

## Agenda and time (keep tight)
| Time | Topic | Owner | Decisions to capture |

## Notes and decisions (during meeting)
| Decision / outcome | Rationale (short) | Next step | Owner |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-meeting-go-no-go",
    name: "Go / no-go meeting",
    category: "project-management",
    description: "Release or launch readiness checklist and vote.",
    tags: ["go-no-go", "release", "readiness", "governance"],
    content: `# Go / no-go meeting — [Project] — [Date]

## Purpose and success
- **Objective:** [One line] — *Decisions we must leave with:* [List]

## Agenda and time (keep tight)
| Time | Topic | Owner | Decisions to capture |

## Notes and decisions (during meeting)
| Decision / outcome | Rationale (short) | Next step | Owner |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-lessons-learned",
    name: "Lessons learned",
    category: "project-management",
    description: "What we would repeat, avoid, and change next time.",
    tags: ["retrospective", "lessons", "knowledge", "closure"],
    content: `# Lessons learned — [Project] — [Date]

## Purpose and success
- **Objective:** [One line] — *Decisions we must leave with:* [List]

## Agenda and time (keep tight)
| Time | Topic | Owner | Decisions to capture |

## Notes and decisions (during meeting)
| Decision / outcome | Rationale (short) | Next step | Owner |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-team-health",
    name: "Team health check",
    category: "project-management",
    description: "Anonymous or lightweight survey and themes.",
    tags: ["team health", "people", "psychological safety", "retrospective"],
    content: `# Team health check — [Project] — [Date]

## Purpose and success
- **Objective:** [One line] — *Decisions we must leave with:* [List]

## Agenda and time (keep tight)
| Time | Topic | Owner | Decisions to capture |

## Notes and decisions (during meeting)
| Decision / outcome | Rationale (short) | Next step | Owner |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-change-request",
    name: "Change request (CR)",
    category: "project-management",
    description: "Scope, impact, and approval for a change.",
    tags: ["change control", "CR", "scope", "governance"],
    content: `# Change request (CR) — [Project] — [Date]

## Entry metadata
- **ID / link:** [TICKET] — *Raised by:* [Name] — *Severity (if any):* [P0…]

## Current state, desired state, and impact (fill template)
| Area | As-is | Proposed to-be | Time / cost / quality effect |

## Approvals and communication
- **Approver(s) required:** [List] — *If rejected, what happens next:* [Path]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-scope-change",
    name: "Scope change (diff)",
    category: "project-management",
    description: "From / to and impact on time, cost, and quality.",
    tags: ["scope", "change", "variance", "PM"],
    content: `# Scope change (diff) — [Project] — [Date]

## Entry metadata
- **ID / link:** [TICKET] — *Raised by:* [Name] — *Severity (if any):* [P0…]

## Current state, desired state, and impact (fill template)
| Area | As-is | Proposed to-be | Time / cost / quality effect |

## Approvals and communication
- **Approver(s) required:** [List] — *If rejected, what happens next:* [Path]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-escalation",
    name: "Escalation (template)",
    category: "project-management",
    description: "What is blocked, what we tried, and what we need from leadership.",
    tags: ["escalation", "unblock", "governance", "risk"],
    content: `# Escalation (template) — [Project] — [Date]

## Entry metadata
- **ID / link:** [TICKET] — *Raised by:* [Name] — *Severity (if any):* [P0…]

## Current state, desired state, and impact (fill template)
| Area | As-is | Proposed to-be | Time / cost / quality effect |

## Approvals and communication
- **Approver(s) required:** [List] — *If rejected, what happens next:* [Path]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-decision-log",
    name: "Decision log",
    category: "project-management",
    description: "Durable project decisions for posterity and audits.",
    tags: ["decision log", "ADR", "governance", "audit"],
    content: `# Decision log — [Project] — [Date]

## Entry metadata
- **ID / link:** [TICKET] — *Raised by:* [Name] — *Severity (if any):* [P0…]

## Current state, desired state, and impact (fill template)
| Area | As-is | Proposed to-be | Time / cost / quality effect |

## Approvals and communication
- **Approver(s) required:** [List] — *If rejected, what happens next:* [Path]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-action-items",
    name: "Action item tracker",
    category: "project-management",
    description: "Cross-meeting list with aging and RAG on stale items.",
    tags: ["actions", "owners", "follow-up", "PMO"],
    content: `# Action item tracker — [Project] — [Date]

## Entry metadata
- **ID / link:** [TICKET] — *Raised by:* [Name] — *Severity (if any):* [P0…]

## Current state, desired state, and impact (fill template)
| Area | As-is | Proposed to-be | Time / cost / quality effect |

## Approvals and communication
- **Approver(s) required:** [List] — *If rejected, what happens next:* [Path]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-dependency-tracker",
    name: "Dependency tracker",
    category: "project-management",
    description: "In/outbound dependencies, dates, and confidence.",
    tags: ["dependencies", "critical path", "PM", "orchestration"],
    content: `# Dependency tracker — [Project] — [Date]

## Entry metadata
- **ID / link:** [TICKET] — *Raised by:* [Name] — *Severity (if any):* [P0…]

## Current state, desired state, and impact (fill template)
| Area | As-is | Proposed to-be | Time / cost / quality effect |

## Approvals and communication
- **Approver(s) required:** [List] — *If rejected, what happens next:* [Path]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-issue-log",
    name: "Issue log",
    category: "project-management",
    description: "Blockers, bugs-that-are-priority, and external defects.",
    tags: ["issues", "defects", "blockers", "tracking"],
    content: `# Issue log — [Project] — [Date]

## Entry metadata
- **ID / link:** [TICKET] — *Raised by:* [Name] — *Severity (if any):* [P0…]

## Current state, desired state, and impact (fill template)
| Area | As-is | Proposed to-be | Time / cost / quality effect |

## Approvals and communication
- **Approver(s) required:** [List] — *If rejected, what happens next:* [Path]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-assumptions-log",
    name: "Assumptions log (project)",
    category: "project-management",
    description: "Testable assumptions, owners, and invalidation plan.",
    tags: ["assumptions", "risk", "discovery", "lean"],
    content: `# Assumptions log (project) — [Project] — [Date]

## Entry metadata
- **ID / link:** [TICKET] — *Raised by:* [Name] — *Severity (if any):* [P0…]

## Current state, desired state, and impact (fill template)
| Area | As-is | Proposed to-be | Time / cost / quality effect |

## Approvals and communication
- **Approver(s) required:** [List] — *If rejected, what happens next:* [Path]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-weekly-status",
    name: "Weekly status report (WSR)",
    category: "project-management",
    description: "Exec-friendly weekly: wins, next week, risks, asks.",
    tags: ["status report", "WSR", "exec", "PMO"],
    content: `# Weekly status report (WSR) — [Project] — [As-of date]

## Headline (5-second read)
- [Green/amber/red + one sentence] — *Audience:* [Who is reading] — *Ask of reader:* [What you need]

## This period summary
- **Shipped / achieved:** [Bullets] — *Misses / slippage (honest):* [Bullets]

## Project vitals (table)
| Dimension | Plan | Actual or forecast | Δ | Narrative (why) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-monthly-report",
    name: "Monthly project report",
    category: "project-management",
    description: "Deeper read on money, people, and trend vs plan.",
    tags: ["monthly", "governance", "variance", "PMO"],
    content: `# Monthly project report — [Project] — [As-of date]

## Headline (5-second read)
- [Green/amber/red + one sentence] — *Audience:* [Who is reading] — *Ask of reader:* [What you need]

## This period summary
- **Shipped / achieved:** [Bullets] — *Misses / slippage (honest):* [Bullets]

## Project vitals (table)
| Dimension | Plan | Actual or forecast | Δ | Narrative (why) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-exec-dashboard",
    name: "Executive dashboard (outline)",
    category: "project-management",
    description: "KPIs and commentary blocks for a dashboard doc.",
    tags: ["dashboard", "KPIs", "exec", "reporting"],
    content: `# Executive dashboard (outline) — [Project] — [As-of date]

## Headline (5-second read)
- [Green/amber/red + one sentence] — *Audience:* [Who is reading] — *Ask of reader:* [What you need]

## This period summary
- **Shipped / achieved:** [Bullets] — *Misses / slippage (honest):* [Bullets]

## Project vitals (table)
| Dimension | Plan | Actual or forecast | Δ | Narrative (why) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-rag-status",
    name: "RAG status (project)",
    category: "project-management",
    description: "RAG for scope, time, and cost in one place.",
    tags: ["RAG", "traffic light", "governance", "PMO"],
    content: `# RAG status (project) — [Project] — [As-of date]

## Headline (5-second read)
- [Green/amber/red + one sentence] — *Audience:* [Who is reading] — *Ask of reader:* [What you need]

## This period summary
- **Shipped / achieved:** [Bullets] — *Misses / slippage (honest):* [Bullets]

## Project vitals (table)
| Dimension | Plan | Actual or forecast | Δ | Narrative (why) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-earned-value",
    name: "Earned value report (outline)",
    category: "project-management",
    description: "EVM snapshot with simple CPI/SPI and narrative.",
    tags: ["EVM", "earned value", "variance", "PMO"],
    content: `# Earned value report (outline) — [Project] — [As-of date]

## Headline (5-second read)
- [Green/amber/red + one sentence] — *Audience:* [Who is reading] — *Ask of reader:* [What you need]

## This period summary
- **Shipped / achieved:** [Bullets] — *Misses / slippage (honest):* [Bullets]

## Project vitals (table)
| Dimension | Plan | Actual or forecast | Δ | Narrative (why) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-variance-analysis",
    name: "Variance analysis (schedule/cost)",
    category: "project-management",
    description: "Planned vs actual with root cause and recovery.",
    tags: ["variance", "recovery", "PM", "earned value"],
    content: `# Variance analysis (schedule/cost) — [Project] — [As-of date]

## Headline (5-second read)
- [Green/amber/red + one sentence] — *Audience:* [Who is reading] — *Ask of reader:* [What you need]

## This period summary
- **Shipped / achieved:** [Bullets] — *Misses / slippage (honest):* [Bullets]

## Project vitals (table)
| Dimension | Plan | Actual or forecast | Δ | Narrative (why) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-forecast-report",
    name: "Forecast report",
    category: "project-management",
    description: "Estimate at completion, confidence, and levers left.",
    tags: ["forecast", "EAC", "PM", "portfolio"],
    content: `# Forecast report — [Project] — [As-of date]

## Headline (5-second read)
- [Green/amber/red + one sentence] — *Audience:* [Who is reading] — *Ask of reader:* [What you need]

## This period summary
- **Shipped / achieved:** [Bullets] — *Misses / slippage (honest):* [Bullets]

## Project vitals (table)
| Dimension | Plan | Actual or forecast | Δ | Narrative (why) |

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-team-charter",
    name: "Team charter",
    category: "project-management",
    description: "Mission, success criteria, and boundaries of the team.",
    tags: ["charter", "team", "mission", "scope"],
    content: `# Team charter — [Team] — [Date]

## North star and scope
- **We exist to…** [Mission] **Success looks like** [Signals / metrics] **We explicitly do not own** [Out of scope]

## Roster and touchpoints
| Name | Core role to this group | Time zone / hours |

## Operating cadence and artifacts
- **Ritual:** [Name] — *When:* [Cadence] — *Output:* [Doc / list]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-working-agreement",
    name: "Working agreement (team norms)",
    category: "project-management",
    description: "How we work together and resolve conflict.",
    tags: ["norms", "agreement", "team", "ways-of-working"],
    content: `# Working agreement (team norms) — [Team] — [Date]

## North star and scope
- **We exist to…** [Mission] **Success looks like** [Signals / metrics] **We explicitly do not own** [Out of scope]

## Roster and touchpoints
| Name | Core role to this group | Time zone / hours |

## Operating cadence and artifacts
- **Ritual:** [Name] — *When:* [Cadence] — *Output:* [Doc / list]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-daci",
    name: "DACI framework (sheet)",
    category: "project-management",
    description: "Driver, approver, contributors, and informed for a decision set.",
    tags: ["DACI", "decision", "governance", "roles"],
    content: `# DACI framework (sheet) — [Team] — [Date]

## North star and scope
- **We exist to…** [Mission] **Success looks like** [Signals / metrics] **We explicitly do not own** [Out of scope]

## Roster and touchpoints
| Name | Core role to this group | Time zone / hours |

## Operating cadence and artifacts
- **Ritual:** [Name] — *When:* [Cadence] — *Output:* [Doc / list]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-roles-raci-lite",
    name: "Roles and responsibilities (simple)",
    category: "project-management",
    description: "DRI map for a team without a heavy RACI.",
    tags: ["roles", "DRI", "ownership", "team"],
    content: `# Roles and responsibilities (simple) — [Team] — [Date]

## North star and scope
- **We exist to…** [Mission] **Success looks like** [Signals / metrics] **We explicitly do not own** [Out of scope]

## Roster and touchpoints
| Name | Core role to this group | Time zone / hours |

## Operating cadence and artifacts
- **Ritual:** [Name] — *When:* [Cadence] — *Output:* [Doc / list]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-onboarding-plan",
    name: "Onboarding plan (project team)",
    category: "project-management",
    description: "30/60/90 for new project contributors.",
    tags: ["onboarding", "ramp", "knowledge", "project"],
    content: `# Onboarding plan (project team) — [Team] — [Date]

## North star and scope
- **We exist to…** [Mission] **Success looks like** [Signals / metrics] **We explicitly do not own** [Out of scope]

## Roster and touchpoints
| Name | Core role to this group | Time zone / hours |

## Operating cadence and artifacts
- **Ritual:** [Name] — *When:* [Cadence] — *Output:* [Doc / list]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  },
  {
    id: "project-management-skills-matrix",
    name: "Skills matrix (team)",
    category: "project-management",
    description: "Coverage by skill, risk, and T-shaped gaps.",
    tags: ["skills matrix", "resilience", "people", "capacity"],
    content: `# Skills matrix (team) — [Team] — [Date]

## North star and scope
- **We exist to…** [Mission] **Success looks like** [Signals / metrics] **We explicitly do not own** [Out of scope]

## Roster and touchpoints
| Name | Core role to this group | Time zone / hours |

## Operating cadence and artifacts
- **Ritual:** [Name] — *When:* [Cadence] — *Output:* [Doc / list]

## More detail (block 1)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]

## More detail (block 2)
- [Capture another angle, metric, or conversation here]
- [Link, screenshot ref, or log line if needed]`,
  }
];
