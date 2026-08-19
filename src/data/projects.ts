export type ProjectFilter = 'cybersecurity' | 'database' | 'development'

export type ProjectLabel =
  | 'ACADEMIC PROJECT'
  | 'PRACTICAL LAB'
  | 'SECURITY LAB'
  | 'WEB DEVELOPMENT PROJECT'

export interface Project {
  id: string
  number: string
  title: string
  category: string
  filter: ProjectFilter
  label: ProjectLabel
  description: string
  technologies: string[]
  focus: string[]
  overview: string
  objective: string
  workedOn: string[]
  learning: string
}

export const projectFilters: { id: 'all' | ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
  { id: 'database', label: 'Database' },
  { id: 'development', label: 'Development' },
]

export const projects: Project[] = [
  {
    id: 'log-analyzer',
    number: '01',
    title: 'Log Analyzer',
    category: 'Academic Project / Cybersecurity',
    filter: 'cybersecurity',
    label: 'ACADEMIC PROJECT',
    description:
      'Built a Python-based tool to parse system logs and identify suspicious activity, failed logins, and error patterns for security monitoring. Generated summarized reports to support incident investigation.',
    technologies: ['Python'],
    focus: [
      'Log parsing',
      'Failed login detection',
      'Error pattern analysis',
      'Security monitoring',
      'Investigation support',
    ],
    overview:
      'An academic Python project for reading system logs and highlighting activity that may need closer review, including failed logins and error patterns.',
    objective:
      'Practice log-based security monitoring by parsing logs and summarizing findings that can support incident investigation.',
    workedOn: [
      'Parsing system logs with Python',
      'Identifying suspicious activity, failed logins, and error patterns',
      'Generating summarized reports from parsed log data',
    ],
    learning:
      'How log data can support security monitoring and investigation in an academic project setting — not a deployed production SOC system.',
  },
  {
    id: 'api-security',
    number: '02',
    title: 'API Security Assessment',
    category: 'Security Assessment / Cybersecurity',
    filter: 'cybersecurity',
    label: 'SECURITY LAB',
    description:
      'Assessed APIs for authentication flaws, insecure endpoints, and potential data exposure risks. Documented findings and recommended security mitigations.',
    technologies: ['API Security'],
    focus: [
      'Authentication review',
      'Endpoint security',
      'Data exposure risks',
      'Security documentation',
      'Mitigation recommendations',
    ],
    overview:
      'A practical security assessment exercise focused on reviewing APIs for common security issues and documenting recommended mitigations.',
    objective:
      'Practice identifying authentication flaws, insecure endpoints, and potential data exposure risks in APIs.',
    workedOn: [
      'Reviewing API authentication and endpoint exposure in a controlled exercise',
      'Looking for potential data exposure risks',
      'Documenting findings and recommended security mitigations',
    ],
    learning:
      'How to structure an API security review and turn observations into clear mitigation notes. This was academic/practical assessment work, not a client engagement.',
  },
  {
    id: 'web-app-va',
    number: '03',
    title: 'Web Application Vulnerability Assessment',
    category: 'Web Application Security',
    filter: 'cybersecurity',
    label: 'SECURITY LAB',
    description:
      'Performed web application security testing using Burp Suite, identifying input validation issues and potential attack vectors and documenting appropriate mitigation strategies.',
    technologies: ['Burp Suite'],
    focus: [
      'Web application security testing',
      'Input validation',
      'Attack vector analysis',
      'Mitigation strategies',
    ],
    overview:
      'Hands-on web application security testing using Burp Suite as part of academic and practical security work.',
    objective:
      'Practice finding input validation issues and potential attack vectors, then documenting mitigations.',
    workedOn: [
      'Testing web applications with Burp Suite in a controlled setting',
      'Identifying input validation issues and potential attack vectors',
      'Documenting mitigation strategies for the findings',
    ],
    learning:
      'How Burp Suite supports web application security testing and how findings should be recorded with practical mitigations. This is lab/project work, not professional penetration-testing employment.',
  },
  {
    id: 'phishing-detection',
    number: '04',
    title: 'Phishing Email Detection & Awareness System',
    category: 'Academic Project / Cybersecurity',
    filter: 'cybersecurity',
    label: 'ACADEMIC PROJECT',
    description:
      'Developed a phishing detection system using pattern-recognition techniques to identify suspicious email characteristics and analyze social-engineering tactics for cybersecurity awareness.',
    technologies: ['Phishing Analysis'],
    focus: [
      'Phishing analysis',
      'Pattern recognition',
      'Social-engineering tactics',
      'Cybersecurity awareness',
    ],
    overview:
      'An academic project that looks at suspicious email characteristics and social-engineering tactics to support phishing awareness.',
    objective:
      'Identify suspicious email traits with pattern-recognition techniques and use those observations for cybersecurity awareness.',
    workedOn: [
      'Building a phishing detection system based on pattern-recognition techniques',
      'Reviewing suspicious email characteristics',
      'Analyzing social-engineering tactics for awareness-focused reporting',
    ],
    learning:
      'How phishing emails are structured and how pattern-based checks can support awareness. No accuracy rates or dataset claims are attached to this work.',
  },
  {
    id: 'library-management',
    number: '05',
    title: 'Library Management System',
    category: 'Academic Project / Database / Application Development',
    filter: 'database',
    label: 'ACADEMIC PROJECT',
    description:
      'Designed a SQL-based library management system with modules for book management, member registration, and inventory tracking. Applied database normalization principles for efficient data management.',
    technologies: ['SQL', 'DBMS'],
    focus: [
      'Book management',
      'Member registration',
      'Inventory tracking',
      'Database normalization',
    ],
    overview:
      'An academic database project for managing library records, including books, members, and inventory, using SQL and normalization.',
    objective:
      'Design a SQL-based library management system with clear modules and normalized data.',
    workedOn: [
      'Designing modules for book management, member registration, and inventory tracking',
      'Working with SQL and DBMS concepts',
      'Applying database normalization for efficient data management',
    ],
    learning:
      'How relational design and normalization support a practical inventory and membership system.',
  },
  {
    id: 'collaborative-web',
    number: '06',
    title: 'Collaborative Web Development — PreppyLosers',
    category: 'Collaborative Web Development',
    filter: 'development',
    label: 'WEB DEVELOPMENT PROJECT',
    description:
      'Collaborated with a team member on the development of the PreppyLosers website, contributing to the planning, development, and refinement of the website as part of a collaborative web development project.',
    technologies: [],
    focus: [
      'Collaborative work',
      'Planning',
      'Development',
      'Website refinement',
    ],
    overview:
      'A collaborative web development project. The PreppyLosers website was built with a team member, not as an independent or solo-built product, and not as professional employment.',
    objective:
      'Contribute to the planning, development, and refinement of the PreppyLosers website as part of a team.',
    workedOn: [
      'Collaborating with a team member on the PreppyLosers website',
      'Contributing to planning',
      'Contributing to development',
      'Contributing to refinement of the website',
    ],
    learning:
      'How shared planning and iterative refinement work in a collaborative web development project.',
  },
]
