export type ProjectCategory = 'cybersecurity' | 'development'

export type ProjectLabel =
  | 'ENTERPRISE / SIH PROJECT'
  | 'DEFENSIVE ENGINEERING PROJECT'
  | 'ACADEMIC PROJECT'
  | 'DATABASE PROJECT'
  | 'WEB APPLICATION'
  | 'COLLABORATIVE PROJECT'
  | 'PORTFOLIO PROJECT'

export interface Project {
  id: string
  number: string
  title: string
  category: string
  projectType: ProjectCategory
  label: ProjectLabel
  domain: string
  description: string
  problem: string
  solution: string
  securityRelevance?: string
  technologies: string[]
  focus: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  overview: string
  objective: string
  workedOn: string[]
  learning: string
}

export const projectCategories: { id: 'all' | ProjectCategory; label: string; count: number }[] = [
  { id: 'all', label: 'All Projects', count: 7 },
  { id: 'cybersecurity', label: 'Cybersecurity Projects', count: 3 },
  { id: 'development', label: 'Other Development Projects', count: 4 },
]

export const cybersecurityProjects: Project[] = [
  {
    id: 'nexus',
    number: '01',
    title: 'Nexus — Criminal Intelligence & Network Analysis Platform',
    category: 'Digital Forensics • Criminal Intelligence • SIH 26189',
    projectType: 'cybersecurity',
    label: 'ENTERPRISE / SIH PROJECT',
    domain: 'Digital Forensics & Law Enforcement Intelligence',
    description:
      'Enterprise criminal intelligence platform built for law enforcement agencies to uncover hidden syndicate networks, repeat offenders, and jurisdictional nexus points across First Information Reports (FIRs) while preserving unbroken digital evidence provenance.',
    problem:
      'Law enforcement agencies analyzing thousands of unstructured, scanned FIR documents struggle to identify multi-jurisdictional syndicate connections and repeat offenders while maintaining tamper-evident chain of custody.',
    solution:
      'Engineered the high-performance FastAPI backend with Oracle Database 21c and Alembic migrations, implementing deterministic entity resolution, REST endpoints for graph analytics, and strict data validation for unbroken evidence provenance across 544 FIRs.',
    securityRelevance:
      'Enforces tamper-evident digital evidence provenance (character spans and bounding boxes), strict relational schema validation for legal documentation, and cross-validation pipelines compliant with law enforcement standards.',
    technologies: [
      'Python',
      'FastAPI',
      'Oracle XE 21c',
      'Alembic',
      'REST API',
      'Digital Forensics',
      'Evidence Provenance',
      'Uvicorn',
    ],
    focus: [
      'Evidence provenance preservation',
      'Deterministic entity resolution',
      'Relational data schema',
      'REST API contract',
      'Audit integrity',
    ],
    githubUrl: 'https://github.com/codeWithAnika/Nexus',
    featured: true,
    overview:
      'A criminal intelligence platform engineered for Ministry of Home Affairs / NCRB problem statement (SIH 26189) to ingest scanned police documentation, perform entity resolution, and reconstruct topological crime networks.',
    objective:
      'Architect and deploy a secure, high-throughput backend API managing canonical entities, mention provenance records, and investigative graph queries with 100% test coverage.',
    workedOn: [
      'Architected FastAPI backend routing with exhaustive REST API contracts and Swagger documentation',
      'Designed Oracle Database 21c schema with Alembic migrations for entities, mentions, and syndicates',
      'Implemented data pipelines linking OCR evidence spans to canonical persons and statute entities',
      'Authored unit and integration test suites validating endpoint health and payload integrity',
    ],
    learning:
      'How digital forensics principles apply to structured evidence ingestion, relational schema consistency, and legal provenance preservation in enterprise investigative software.',
  },
  {
    id: 'unidirectional-threat-detection',
    number: '02',
    title: 'AI Unidirectional Network Threat Detection Pipeline',
    category: 'SOC Operations • Network Threat Detection • Enclave Defense',
    projectType: 'cybersecurity',
    label: 'DEFENSIVE ENGINEERING PROJECT',
    domain: 'SOC & Network Threat Detection',
    description:
      'High-assurance threat detection backend engineered for unidirectional IP networks (hardware data diodes), providing passive telemetry ingestion, MITRE ATT&CK technique mapping, and real-time SSE streaming for live SOC monitoring.',
    problem:
      'Isolated high-security enclaves protected by hardware data diodes cannot utilize two-way network handshakes, requiring specialized passive telemetry processing and one-way threat alert streaming to prevent data exfiltration.',
    solution:
      'Developed the Flask backend that ingests structured network threat alerts, validates payloads against a shared JSON schema contract, maps detections to MITRE ATT&CK techniques (T1046), and streams live security events via Server-Sent Events (SSE) to an operational React SOC dashboard.',
    securityRelevance:
      'Operates within unidirectional data diode network architectures, eliminating two-way attack surfaces and covert return channels while delivering real-time alert feeds for SOC triage.',
    technologies: [
      'Python',
      'Flask',
      'Server-Sent Events (SSE)',
      'REST API',
      'JSON Schema',
      'MITRE ATT&CK',
      'Network Telemetry',
    ],
    focus: [
      'Passive telemetry processing',
      'Data diode architecture',
      'Real-time SSE event streaming',
      'JSON schema contract validation',
      'MITRE ATT&CK mapping',
    ],
    githubUrl: 'https://github.com/safcore/ai-unidirectional-threat-detection',
    featured: true,
    overview:
      'Near-real-time threat detection and classification pipeline for unidirectional IP traffic flows using passive network telemetry behind hardware data diodes.',
    objective:
      'Engineer a standalone, modular Flask backend that ingests detection alerts, validates alert schemas, and broadcasts real-time telemetry over SSE to SOC visualizers.',
    workedOn: [
      'Implemented Flask REST API endpoint (/api/alerts) for structured alert ingestion',
      'Built Server-Sent Events (/api/stream) pipeline for low-latency live security event broadcast',
      'Enforced strict JSON schema contracts across distributed feature engineering and ML detection modules',
      'Developed synthetic alert sender and client test harness to simulate network threat bursts (port scans, anomalous flows)',
    ],
    learning:
      'The unique constraints of unidirectional security architectures, one-way network telemetry broadcast, and aligning passive flow alerts to MITRE ATT&CK techniques.',
  },
  {
    id: 'log-analyzer',
    number: '03',
    title: 'Security Log Analyzer & Incident Triage Utility',
    category: 'SOC • Security Operations • Threat Detection',
    projectType: 'cybersecurity',
    label: 'ACADEMIC PROJECT',
    domain: 'Threat Detection & Incident Triage',
    description:
      'Python-based security telemetry tool engineered to parse system event logs, identify anomalous brute-force attempts and error spikes, and generate structured summaries for incident investigation.',
    problem:
      'High volumes of raw authentication and system audit logs overwhelm manual review, delaying detection of brute-force patterns and unauthorized access attempts.',
    solution:
      'Built a modular Python log parser that extracts timestamped events, flags repeated failed login clusters and error spikes, and formats summarized monitoring reports.',
    securityRelevance:
      'Emulates Tier-1 SOC detection logic by filtering noise, surfacing suspicious authentication telemetry, and accelerating initial incident triage.',
    technologies: ['Python', 'Log Parsing', 'Regex', 'Threat Detection', 'Incident Triage'],
    focus: [
      'Authentication log analysis',
      'Failed login burst detection',
      'Regex pattern extraction',
      'Incident triage reporting',
    ],
    githubUrl: 'https://github.com/codeWithAnika',
    featured: true,
    overview:
      'An academic Python project for processing authentication logs and isolating indicators of suspicious activity to support security incident monitoring.',
    objective:
      'Develop automated parsing routines to isolate failed logins, detect brute-force patterns, and summarize log telemetry for investigation.',
    workedOn: [
      'Developed regex-based parsing routines for system event logs in Python',
      'Implemented detection thresholds for failed authentication bursts',
      'Automated summary report generation for security monitoring',
    ],
    learning:
      'How security event telemetry is parsed, correlated, and transformed into actionable investigation summaries without relying on complex external frameworks.',
  },
]

export const developmentProjects: Project[] = [
  {
    id: 'library-management',
    number: '04',
    title: 'Library Management System',
    category: 'Database Architecture • Full-Stack Development',
    projectType: 'development',
    label: 'DATABASE PROJECT',
    domain: 'Database Systems & Web Development',
    description:
      'A Flask and SQL-based library management system engineered with third normal form (3NF) relational database design, role-based user authentication, book cataloging, inventory tracking, and transaction reporting.',
    problem:
      'Unorganized data records and non-normalized database architectures result in data anomalies, broken referential integrity, and inconsistent inventory audits.',
    solution:
      'Designed a normalized SQL schema (LIBDB.sql) with primary/foreign key constraints and developed a clean Flask MVC web application with Jinja2 templates, user session management, and CRUD reporting.',
    technologies: ['Python', 'Flask', 'SQL', 'Relational DBMS (3NF)', 'HTML5', 'CSS3', 'Jinja2'],
    focus: [
      'Relational schema design (3NF)',
      'User authentication & session control',
      'CRUD transactions',
      'Inventory tracking',
      'SQL query optimization',
    ],
    githubUrl: 'https://github.com/codeWithAnika/library-management-system',
    featured: false,
    overview:
      'A full-featured Flask web application backed by a normalized SQL database for managing library books, members, borrow transactions, and operational reports.',
    objective:
      'Design and deploy a normalized SQL relational schema ensuring data consistency, ACID compliance, and secure user sessions.',
    workedOn: [
      'Designed entity-relationship schemas and normalized tables to third normal form (LIBDB.sql)',
      'Developed Flask backend with custom error handling (404/500) and Jinja2 template rendering',
      'Implemented secure user registration, session authentication, and book search features',
      'Built transaction reporting views for issue and return tracking',
    ],
    learning:
      'How relational database normalization prevents data corruption and supports predictable application data pipelines.',
  },
  {
    id: 'farmingo',
    number: '05',
    title: 'FarmingO Agricultural Platform',
    category: 'Frontend Engineering • Responsive UI',
    projectType: 'development',
    label: 'WEB APPLICATION',
    domain: 'Frontend & Application Engineering',
    description:
      'A modern, responsive agricultural web platform built with React, Vite, TypeScript, and Tailwind CSS, featuring smooth animations (GSAP and Framer Motion) and interactive interface components.',
    problem:
      'Agricultural digital platforms often suffer from outdated, rigid user interfaces that do not adapt smoothly across devices or convey agricultural information effectively.',
    solution:
      'Built a modular, high-performance web interface utilizing React, TypeScript for strict type safety, Tailwind CSS for responsive styling, and fluid motion libraries (GSAP, Framer Motion, Lenis smooth scrolling).',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Lenis'],
    focus: [
      'Responsive component architecture',
      'Type-safe state management',
      'Fluid micro-interactions',
      'Modern frontend bundling',
    ],
    githubUrl: 'https://github.com/codeWithAnika/Farmingo-',
    featured: false,
    overview:
      'A responsive web application demonstrating modern frontend architecture, fluid scroll interactions, and modular React component design.',
    objective:
      'Develop a responsive web platform with clean typography, accessible layout structures, and performant animations.',
    workedOn: [
      'Engineered responsive layouts adapting from mobile screens to desktop viewports',
      'Integrated GSAP and Framer Motion for purposeful, non-distracting visual feedback',
      'Configured Vite and TypeScript build tooling for rapid development and strict type verification',
    ],
    learning:
      'Creating responsive, fluid web interfaces with high rendering performance and strict TypeScript types.',
  },
  {
    id: 'collaborative-web',
    number: '06',
    title: 'PreppyLosers Web Platform',
    category: 'Collaborative Web Engineering',
    projectType: 'development',
    label: 'COLLABORATIVE PROJECT',
    domain: 'Frontend Engineering',
    description:
      'Collaborative web engineering project developed with a teammate, focusing on modern responsive layout execution, shared Git version control workflows, and iterative UI refinements.',
    problem:
      'Cross-browser responsive styling and multi-developer collaboration require clean component modularity and disciplined version control.',
    solution:
      'Co-developed frontend features, responsive UI elements, and iterative enhancements using collaborative Git branch workflows.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Git', 'Team Collaboration'],
    focus: [
      'Collaborative development',
      'Responsive design',
      'Iterative refinement',
      'Git workflows',
    ],
    githubUrl: 'https://github.com/codeWithAnika/Preppy-Losers',
    featured: false,
    overview:
      'A collaborative web development project built alongside a peer, emphasizing modular frontend styling and Git-based collaboration.',
    objective:
      'Coordinate technical planning and frontend implementation to deliver a responsive, refined web experience.',
    workedOn: [
      'Collaborated on site planning, component structure, and style architecture',
      'Implemented responsive layouts across desktop and mobile screen viewports',
      'Maintained version control synchronization using Git and GitHub',
    ],
    learning:
      'Collaborative software development workflows, merge coordination, and iterative user interface refinement.',
  },
  {
    id: 'portfolio-site',
    number: '07',
    title: 'Personal Cybersecurity Portfolio',
    category: 'Portfolio Architecture • High-Performance Web',
    projectType: 'development',
    label: 'PORTFOLIO PROJECT',
    domain: 'Frontend Architecture & Accessibility',
    description:
      'High-performance, accessible personal cybersecurity portfolio engineered with Vite, React 19, TypeScript, and Tailwind CSS v4, featuring dark engineering aesthetics, glassmorphic UI, and full prefers-reduced-motion accessibility.',
    problem:
      'Cybersecurity portfolios require a restrained, professional technical presentation with high contrast, accessibility compliance, and verified project grounding rather than generic student templates.',
    solution:
      'Developed a responsive single-page application using React 19, Tailwind CSS v4 @theme, Framer Motion, and semantic HTML with zero runtime lint or build errors.',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Lucide Icons'],
    focus: [
      'Accessibility (a11y)',
      'Semantic HTML',
      'Tailwind v4 @theme',
      'Zero runtime lint/type errors',
    ],
    githubUrl: 'https://github.com/codeWithAnika/Portfolio',
    liveUrl: 'https://anika-portfolio-lrhrprr8n-codewithanikas-projects.vercel.app/',
    featured: false,
    overview:
      'Production-ready cybersecurity portfolio designed specifically for internship applications, emphasizing verified technical projects, clean typography, and responsive interaction.',
    objective:
      'Build an authentic, high-performance portfolio presenting verified cybersecurity projects first, followed by general development work.',
    workedOn: [
      'Implemented modular component architecture with TypeScript type safety',
      'Configured dark cybersecurity visual design system with high contrast and smooth micro-interactions',
      'Built accessible modal dialogs with focus trap and keyboard navigation',
      'Structured projects into distinct Cybersecurity and Development categories',
    ],
    learning:
      'Advanced component state architecture, accessible modal design, and clean deployment workflows on Vercel.',
  },
]

export const projects: Project[] = [...cybersecurityProjects, ...developmentProjects]
