# Product Builder Operating Model — Full Specification v2

## Context: Why This Exists

This document is the foundation for an interactive web application that presents a new product development operating model. It will be used in two ways:

1. **As a job interview deliverable** — demonstrating to Orbidi leadership how Anton would transform their product organization
2. **As a reusable framework** — applicable to any mid-size tech company (200–500 people) serving SMBs

### About Orbidi

Orbidi is a Spanish digital marketing company (~400+ employees, HQ in Santa Cruz de Tenerife) focused on SMB and freelancer clients. Their value proposition: "We handle all the technical complexity so you can focus on scaling your business." They offer turnkey digital marketing products — SEO, social media management, website creation, Google Maps integration — powered by AI and big data. They have a mobile app (Plinng) and a Co-pilot product in private beta. Recent €5M investment from Inveready plus €20M in bank financing from Santander signals growth ambitions.

**Why this model fits Orbidi specifically:**
- They sell digital tools to non-technical SMBs → their own product team must ship fast to stay competitive
- They're scaling rapidly (400+ people, new funding) → traditional PM + eng + design handoffs create bottlenecks at this stage
- They already use AI in their product (Co-pilot) → internally adopting AI-augmented development is a natural next step
- Their product portfolio (SEO tools, social media, web builder, review management, analytics) has many surfaces where a Product Builder can own end-to-end delivery

---

## 1. The Core Thesis

### The Problem with Traditional Product Organizations

In a traditional setup, delivering a product feature requires coordination across 4–6 roles:

| Role | Traditional Responsibility |
|---|---|
| Product Manager | Discovery, prioritization, specs |
| Product Analyst | Data analysis, metrics, insights |
| UX Designer | Research, wireframes, prototypes |
| UI Designer | Visual design, design systems |
| Frontend Engineer | Implementation of UI |
| Backend Engineer | APIs, data, infrastructure |

Each handoff introduces:
- **Context loss** — each person re-interprets what the previous one meant
- **Calendar delay** — waiting for availability, reviews, approvals
- **Historical data dependency** — by the time a feature ships, the insight that sparked it may be months old
- **Cost multiplication** — 4–6 salaries for one feature stream

### The Shift: What AI Tools Make Possible

Modern AI-powered development tools (Claude, Cursor, v0, Bolt, etc.) have fundamentally changed what one person can do:

- A PM can now write production-quality frontend code with AI assistance
- A designer can implement their own designs without handoff to engineering
- Customer insights can be synthesized in real-time, not batched into quarterly reports
- Prototyping and production have merged — you don't build a prototype and then rebuild it "for real"

**This doesn't eliminate engineering. It eliminates the handoff bottleneck.**

### The Product Builder Model: One Person, Full Cycle

A **Product Builder** is a single role that collapses the traditional PM → Designer → Frontend Engineer chain into one person who:

1. Captures real-time signals (customer feedback, product analytics, business metrics)
2. Defines the problem and solution
3. Designs and builds the frontend
4. Ships working software — not prototypes, not specs, but deployed features

**Result for the company:**
- **Headcount efficiency** — 1 Product Builder replaces 3–4 traditional roles in the delivery chain
- **Speed** — from insight to shipped feature in days, not weeks/months
- **Signal freshness** — decisions based on today's data, not last quarter's analysis
- **Accountability** — one person owns the outcome end-to-end

---

## 2. Role Architecture

### 2.1 Product Builder (Individual Contributor)

**Who is this person?**
A hybrid professional who combines product thinking, design intuition, and AI-augmented development skills. They may have started as a PM, a designer, an analyst, or a frontend engineer — what matters is the mindset and the willingness to own the full cycle.

**Core responsibilities:**

**Discovery & Signal Capture**
- Monitors real-time customer signals: support tickets, NPS responses, session recordings, feature requests
- Analyzes product behavior data: funnels, retention, engagement patterns
- Participates in customer conversations and synthesizes insights
- Uses AI tools to process and pattern-match across signal sources
- Works with today's data, not historical reports

**Solution Design**
- Defines problem statements and success metrics
- Creates solution hypotheses and validates them rapidly
- Designs the user experience — not pixel-perfect mockups, but interaction flows and UI patterns
- Uses design system components (maintained by Head of Product Building) for consistency
- Prioritizes based on impact signals, not roadmap ceremonies

**Development & Delivery**
- Writes frontend code using AI-assisted tools (Cursor, Claude Code, etc.)
- Builds working features, not prototypes — code that ships to production
- Integrates with existing design systems and component libraries
- Works within the repository structure defined by Head of Engineering
- Follows commit guidelines, CI/CD pipelines, and testing standards

**Validation & Iteration**
- Sets up feature flags and A/B tests for new features
- Monitors post-launch metrics and iterates based on results
- Feeds learnings back into the signal capture loop

**What a Product Builder does NOT do:**
- Backend architecture or database design
- Security, compliance, or data privacy implementation
- Infrastructure, DevOps, or deployment pipeline management
- These are owned by the Technical Partner

**Toolset:**
- AI coding assistants (Cursor, Claude Code, GitHub Copilot)
- AI analysis tools (Claude for synthesis, data tools)
- Product analytics (Amplitude, Mixpanel, or internal tools)
- Design system / component library (shared, maintained centrally)
- Version control with structured branching (owned by Head of Engineering)
- Knowledge base with skills, guidelines, and architectural docs (maintained by Head of Product Building)

---

### 2.2 Technical Partner (Individual Contributor — Senior)

**Analogy:** The tech co-founder in a startup. The person who makes sure the engine runs while the Product Builder focuses on the experience.

**Who is this person?**
A senior engineer (or strong mid-level with architectural thinking) who partners with 1–3 Product Builders. This is not a reporting relationship — it's a collaboration model, like a co-founder pair.

**Core responsibilities:**

**Architecture & Backend**
- Owns backend service design, API contracts, database architecture
- Makes scalability decisions: what needs to handle 10x load, what doesn't
- Implements core business logic that lives server-side
- Manages data pipelines and integrations with third-party services (Stripe, analytics providers, external APIs)

**Security, Compliance & Data Privacy**
- Owns security posture for all features in their scope
- Implements authentication, authorization, and access control
- Ensures compliance with data privacy regulations (GDPR, etc.)
- Reviews and approves any Product Builder code that touches sensitive data or auth flows
- **This is non-negotiable — all security-related code requires Technical Partner sign-off**

**Quality Gatekeeping & Technical Debt Governance**
- Reviews Product Builder code for architectural fit and quality
- Monitors automated technical debt detection (AI agents / linters / static analysis)
- Manages the technical debt threshold system (see section 3)
- Makes accept/reject decisions on tech debt that exceeds automated thresholds
- Ensures Product Builder code integrates cleanly with the broader system

**Integration & Infrastructure**
- Manages third-party service integrations
- Owns deployment pipeline configuration (within standards set by Head of Engineering)
- Handles performance monitoring and incident response

**Relationship to Product Builder:**
- The Product Builder proposes; the Technical Partner validates critical paths
- API design is collaborative: Product Builder defines what they need, Technical Partner designs how it's served
- The Technical Partner is the final authority on backend decisions, security, and architecture
- Regular sync (daily standup or async check-in) to avoid divergence

---

### 2.3 Head of Product Building (Leadership)

**Analogy:** Head of Product + Enablement Lead. The person who creates the environment where Product Builders thrive.

**Who is this person?**
A senior product leader who deeply understands both the product craft and the AI-augmented development workflow. They've ideally been a Product Builder themselves or have strong technical fluency.

**Core responsibilities:**

**Business Context & Alignment**
- Ensures all Product Builders share the same understanding of company strategy, priorities, and goals
- Translates executive vision into actionable product directions
- Facilitates prioritization across Product Builder scopes (avoiding duplication, ensuring coverage)

**Knowledge Management**
- Curates and maintains the knowledge base that Product Builders rely on:
  - Business context documents
  - Customer persona definitions
  - Analytics guidelines and metric definitions
  - Design system documentation and usage guidelines
  - AI tool best practices and prompt libraries
  - Architectural decision records (in collaboration with Head of Engineering)
- Ensures skills and knowledge base are kept current — this is critical because Product Builders use AI tools that are only as good as their context

**Standards & Quality**
- Defines and maintains design guidelines and patterns
- Establishes analytics standards: what to measure, how to instrument, where to log
- Sets quality bars for what "shippable" means
- Runs periodic reviews of shipped features for consistency

**People & Growth**
- Coaches Product Builders on product thinking, design quality, and development practices
- Identifies skill gaps and organizes learning (internal workshops, pair sessions, external training)
- Manages career development for Product Builders (see section 5)

**Coordination with Head of Engineering**
- Jointly defines the operating rhythm (sprint cadence, sync meetings, review cycles)
- Aligns on repository structure, branching strategy, and deployment windows
- Resolves conflicts between product speed and technical quality
- Collaboratively manages the technical debt governance process (see section 3)

---

### 2.4 Head of Engineering / Head of Technical Partners (Leadership)

**Analogy:** CTO + Head of DevOps. The person who owns the technical foundation that everything runs on.

**Why this role is necessary:**
When you have 5–10 Product Builders all committing code, you need rigorous architectural governance. Without it, you get divergent patterns, conflicting dependencies, and compounding tech debt within weeks. This role prevents that.

**Core responsibilities:**

**Architecture Governance**
- Owns the overall system architecture and ensures consistency across all Product Builder + Technical Partner pairs
- Defines repository structure: monorepo vs multi-repo, folder conventions, module boundaries
- Sets coding standards, linting rules, and automated quality checks
- Manages the shared component library and ensures it evolves coherently

**DevOps & Infrastructure**
- Owns CI/CD pipelines, deployment automation, and environment management
- Ensures every Product Builder can commit and deploy within guardrails (feature flags, staging environments, automated tests)
- Manages infrastructure scaling, monitoring, and alerting

**Technical Partner Enablement**
- Coaches and supports Technical Partners across the organization
- Ensures architectural decisions are consistent across teams
- Facilitates knowledge sharing between Technical Partners (architecture reviews, RFCs)
- Manages Technical Partner allocation and workload (1 TP : 1–3 PBs)

**Security & Compliance Oversight**
- Sets organization-wide security policies and compliance requirements
- Ensures Technical Partners implement these consistently
- Runs periodic security audits and penetration testing
- Owns incident response procedures

**Interaction with Head of Product Building:**
- Regular (weekly) sync on capacity, priorities, and technical health
- Joint decisions on major architectural changes
- Shared ownership of the technical debt governance process
- Escalation path for Product Builder vs Technical Partner disagreements

---

## 3. Technical Debt Governance Model

This is a critical operational detail that makes the Product Builder model sustainable at scale.

### The Problem
Product Builders, empowered by AI tools, can write code very fast. Fast code often introduces technical debt. Without governance, this debt compounds and eventually breaks the system.

### The Solution: Automated Detection + Human Judgment

**Layer 1: Automated Detection (AI Agent)**
- Every commit by a Product Builder is analyzed by an AI-powered code quality agent
- The agent scores the commit on:
  - Code complexity (cyclomatic, cognitive)
  - Duplication with existing codebase
  - Deviation from established patterns
  - Test coverage
  - Security vulnerability patterns
  - Dependency health
- Scores are categorized: ✅ Green (auto-approved) / ⚠️ Yellow (flagged for review) / 🔴 Red (blocked until reviewed)

**Layer 2: Technical Partner Review**
- Yellow and Red commits require Technical Partner validation
- The Technical Partner can:
  - Approve (with or without comments)
  - Request changes
  - Escalate to Head of Engineering if the issue is architectural
- The decision is logged for pattern analysis

**Layer 3: Threshold Management**
- Head of Engineering sets org-wide thresholds for what constitutes Green/Yellow/Red
- These thresholds can be tuned per Product Builder as they gain experience
- Monthly tech debt review: Head of Engineering + Head of Product Building review accumulated debt and prioritize paydown sprints

**Layer 4: Product Builder Enablement**
- When a Product Builder repeatedly triggers Yellow/Red flags in the same area, the knowledge base is updated with better guidelines
- The Head of Product Building organizes targeted skill-building
- AI tool prompts/skills are refined to prevent recurring patterns

---

## 4. The Operating Model Flow

### How Work Moves Through the System

```
[Real-time Signals] 
    ↓
[Product Builder: Capture & Synthesize]
    ↓
[Product Builder: Define Problem + Solution]
    ↓
[Product Builder: Design & Build Frontend]  ←→  [Technical Partner: API Design Collaboration]
    ↓                                              ↓
[Automated Code Quality Check]               [Technical Partner: Backend Implementation]
    ↓                                              ↓
[Technical Partner: Review & Approve]        [Technical Partner: Security Review]
    ↓                                              ↓
[Deploy to Staging → Feature Flag]
    ↓
[Product Builder: Monitor & Iterate]
```

### Boundary Rules: Who Does What

| Activity | Product Builder | Technical Partner | Shared |
|---|---|---|---|
| Customer research & insights | ✅ Owns | | |
| Problem definition | ✅ Owns | | |
| Solution design (UX/flow) | ✅ Owns | Consults on feasibility | |
| UI/Frontend code | ✅ Owns | Reviews critical paths | |
| API contract definition | | | ✅ Collaborative |
| API implementation | | ✅ Owns | |
| Basic auth flows (UI side) | Can implement | ✅ Must approve & review | |
| Security & compliance | | ✅ Owns | |
| Database design | | ✅ Owns | |
| Third-party integrations | | ✅ Owns | PB defines requirements |
| Analytics instrumentation | ✅ Owns | | |
| Feature flags & A/B tests | ✅ Owns | TP manages infrastructure | |
| Tech debt decisions | | ✅ Final authority | Automated agent flags |
| Performance optimization | | ✅ Owns | PB reports UX issues |

### The 30-Second Boundary Principle

> **The Product Builder owns everything the user sees and touches. The Technical Partner owns everything the system does behind the scenes. Where they meet (APIs, auth, data), they collaborate — but the Technical Partner has final authority on safety and architecture.**

---

## 5. Career Paths & Hiring

### Where Do Product Builders Come From?

Product Builders are grown, not hired off the shelf. The role is new enough that there's no established talent market. Instead, companies invest in transitioning existing talent:

**From Product Management:**
- Already has customer empathy, prioritization skills, business acumen
- Needs to learn: AI-assisted development, design system usage, code quality basics
- Transition time: 2–4 months with structured enablement

**From UX/UI Design:**
- Already has design thinking, user research skills, visual quality standards
- Needs to learn: product metrics, prioritization frameworks, code implementation
- Transition time: 3–5 months with structured enablement

**From Frontend Engineering:**
- Already has code quality, system thinking, debugging skills
- Needs to learn: product discovery, customer research, business metrics, design thinking
- Transition time: 2–4 months with structured enablement

**From Data/Product Analytics:**
- Already has data literacy, metrics thinking, hypothesis-driven approach
- Needs to learn: design, frontend development, direct customer interaction
- Transition time: 3–6 months with structured enablement

### Selection Criteria (Who Has the Aptitude)

Not everyone wants or is suited for this role. Key indicators:
- **Curiosity across domains** — they naturally poke into adjacent disciplines
- **Ownership mentality** — they're frustrated by handoffs and want to see things through
- **Comfort with ambiguity** — they can work with imperfect information
- **Learning velocity** — they pick up new tools quickly
- **AI fluency** — they already use AI tools or show strong interest

### Career Growth Paths

```
Product Builder (IC)
    ↓
Senior Product Builder (IC — mentors others, tackles complex domains)
    ↓ (splits into two paths)
    ├── Head of Product Building (Leadership — product & enablement focus)
    └── CPTO / Chief Product & Technology Officer (hybrid leadership)

Technical Partner (IC)
    ↓
Senior Technical Partner (IC — architectural scope, mentors TPs)
    ↓ (splits into two paths)
    ├── Head of Engineering (Leadership — architecture & ops focus)
    └── CTO (pure technical leadership)
```

**Cross-path mobility:**
- A Product Builder with strong engineering growth can transition to Technical Partner → Head of Engineering
- A Technical Partner with strong product instincts can transition to Product Builder → Head of Product Building
- The CPTO path is for rare individuals who maintain both product and technical depth

---

## 6. Change Management: How to Adopt This Model

### Audience: Executive Sponsors & Leadership Stakeholders

#### Phase 0: Executive Alignment (2 weeks)
- Present the operating model to C-level and VP-level stakeholders
- Align on strategic motivation: cost efficiency, speed, competitive advantage
- Secure executive sponsor (ideally CPO or CTO, or both)
- Define success metrics for the pilot

#### Phase 1: Pilot (8–12 weeks)
- Select 1–2 Product Builder candidates from existing team
- Assign 1 Technical Partner (senior engineer already on the team)
- Choose a well-scoped product area with clear metrics
- Provide AI tool access, training, and weekly coaching
- Head of Product Building (may be the executive sponsor initially) sets up basic knowledge base and guidelines
- **Measure:** time-to-ship, feature quality, customer impact, team satisfaction

#### Phase 2: Evaluate & Refine (2–4 weeks)
- Analyze pilot results against success metrics
- Gather qualitative feedback from pilot participants
- Identify process gaps, tooling needs, skill gaps
- Refine the operating model based on learnings
- Present results to leadership with recommendation for expansion

#### Phase 3: Scale (3–6 months)
- Expand to 3–5 Product Builder + Technical Partner pairs
- Hire/promote Head of Product Building (full-time role)
- Establish Head of Engineering oversight for scaled technical governance
- Roll out automated code quality tooling and tech debt governance
- Build out knowledge base and design system

#### Phase 4: Organizational Integration (6–12 months)
- Product Builder becomes a standard career path
- Performance review and compensation frameworks established
- Cross-functional collaboration norms solidified
- Model is self-sustaining without constant executive attention

### Key Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Product Builders create unsustainable tech debt | Automated detection + TP review + threshold governance |
| Resistance from existing PM/Design/Eng teams | Start with volunteers, show results, provide clear career paths |
| AI tool reliability and quality | Technical Partner review layer catches AI-generated issues |
| Security vulnerabilities from fast-moving code | TP mandatory sign-off on all security-adjacent code |
| Knowledge silos (PB knows everything, nobody else does) | Knowledge base requirements, documentation standards, pair sessions |
| Burnout from broad role scope | Clear boundaries (PB doesn't do backend), sustainable pace |
| Scaling chaos (10 PBs, one repo) | Head of Engineering role, structured repo, automated guardrails |

### The Impact of ONE Product Builder (Before vs After)

**Before (Traditional Model):**
- 1 PM + 1 Designer + 1 Frontend Engineer + 0.5 Backend Engineer = 3.5 FTEs
- Feature cycle: Insight → Spec (1 week) → Design (1 week) → Dev (2 weeks) → QA (1 week) = **5 weeks**
- 3 handoffs, each losing context
- Decisions based on last month's data

**After (Product Builder Model):**
- 1 Product Builder + 0.3 Technical Partner = 1.3 FTEs
- Feature cycle: Signal → Build → Ship = **3–7 days**
- Zero handoffs for frontend features
- Decisions based on today's signals

**Cost impact:** ~60% reduction in FTE cost per feature stream
**Speed impact:** ~5–10x faster from insight to shipped feature
**Quality impact:** Better alignment between customer need and solution (one brain, no telephone game)

---

## 7. Interactive Application Structure

### Entry Experience
- Hero: "The Product Builder Model — Ship Products at Startup Speed, Inside Your Company"
- Subline: "An operating model for the AI era"
- Role selector: "Explore from your perspective:"
  - 🛠️ I'm a Product Builder
  - ⚙️ I'm a Technical Partner
  - 🎯 I'm a Head of Product Building
  - 🏗️ I'm a Head of Engineering
  - 📊 I'm an Executive / Stakeholder

### Per-Role Views

Each role gets:
1. **Your Role** — what you do, why it matters, what's different from today
2. **The Model** — interactive diagram showing all roles, with YOUR role highlighted
3. **Your Day** — concrete daily/weekly activities and tools
4. **Boundaries** — what you own, what you don't, where you collaborate
5. **Getting Started** — first steps if adopting this role

### Shared Interactive Elements
- **Operating Model Diagram** — clickable, animated, shows flow of work
- **Boundary Explorer** — interactive table where you can click any activity and see who owns it
- **Impact Calculator** — input team size, get output on cost/speed/quality impact
- **Career Path Explorer** — interactive visualization of growth options
- **Change Management Timeline** — phases with expandable details

### Leadership / Stakeholder View (Unique)
- ROI calculator
- Risk & mitigation matrix
- Pilot program template
- Implementation timeline with milestones
- "One Product Builder Impact" before/after comparison

---

## 8. Technical Spec for the Application

### Stack
- React (single-page application)
- Tailwind CSS
- Framer Motion for animations
- No backend — all content is static, embedded in the app
- Optional: local state for Impact Calculator inputs

### Key Components to Build
1. `RoleSelector` — entry point with animated role cards
2. `OperatingModelDiagram` — SVG-based interactive diagram (shared across views, highlight changes per role)
3. `RoleView` — per-role deep dive with tabs/sections
4. `BoundaryTable` — interactive who-does-what matrix
5. `ImpactCalculator` — form inputs → calculated outputs
6. `CareerPathExplorer` — interactive tree/graph visualization
7. `ChangeTimeline` — horizontal timeline with expandable phases
8. `BeforeAfter` — comparison view (split screen or toggle)

### Deployment
- Static hosting: Vercel or Netlify
- Single shareable URL
- Mobile-responsive but desktop-optimized

---

## 9. Design Decisions (Resolved)

1. **Orbidi-specific context** — Keep generic for now. No Orbidi branding or references in v1. Can be added as a separate layer later.
2. **Downloadable PDF** — Yes, include as a future feature. Not in v1 build, but design the layout so it can be exported later.
3. **Self-assessment component** — Good idea, but not in v1. Backlog it.
4. **Impact Calculator** — Medium detail. Include: team size, average salaries, current delivery cycle time → outputs cost savings, speed improvement, FTE reduction. Not overly granular, but more than a simple before/after.
5. **CTA** — Yes, include a "Request a Workshop" / "Book a Consultation" CTA. This positions the app as both educational and a consulting lead generator.

---

## 10. Build Priorities for v1

**Must have (v1):**
- Hero + Role Selector entry experience
- All 5 role views (PB, TP, Head of PB, Head of Eng, Executive)
- Operating Model interactive diagram
- Boundary Table (who does what)
- Before/After comparison
- Impact Calculator (medium detail)
- Change Management timeline
- Career Path visualization
- CTA section (Request a Workshop / Contact)

**Nice to have (v2):**
- Downloadable PDF export for leadership
- Self-assessment quiz ("Am I a good Product Builder?")
- Orbidi-specific customization layer
- Case study / scenario walkthrough
