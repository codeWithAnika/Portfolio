export interface SkillGroup {
  id: string
  title: string
  subtitle: string
  iconName: 'Shield' | 'Terminal' | 'Code' | 'Network' | 'FileSearch'
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'security',
    title: 'Core Security Disciplines',
    subtitle: 'Practical assessment, investigation & defense',
    iconName: 'Shield',
    items: [
      'Vulnerability Assessment',
      'Web Application Security',
      'API Security Testing',
      'Digital Forensics (DFIR)',
      'Threat Detection & Log Analysis',
      'Network Traffic Analysis',
      'Phishing Email Analysis',
    ],
  },
  {
    id: 'tools',
    title: 'Security Tools & Platforms',
    subtitle: 'Hands-on laboratory & analysis utilities',
    iconName: 'Terminal',
    items: [
      'Kali Linux',
      'Burp Suite',
      'Wireshark',
      'Nmap',
      'FTK Imager',
      'Scapy',
      'Linux CLI',
      'Windows Security',
      'Git & GitHub',
    ],
  },
  {
    id: 'programming',
    title: 'Programming & Data',
    subtitle: 'Security-oriented scripting & development',
    iconName: 'Code',
    items: [
      'Python',
      'C',
      'C++',
      'TypeScript',
      'JavaScript',
      'SQL / DBMS',
    ],
  },
]

export interface FocusArea {
  id: string
  title: string
  domain: string
  description: string
  technologies: string[]
}

export const focusAreas: FocusArea[] = [
  {
    id: 'soc',
    title: 'Security Operations & Monitoring',
    domain: 'SOC & Threat Detection',
    description:
      'Log parsing, anomaly detection, monitoring failed authentication events, and identifying suspicious pattern indicators for incident awareness.',
    technologies: ['Python', 'Log Parsing', 'Event Analysis', 'Threat Detection'],
  },
  {
    id: 'dfir',
    title: 'Digital Forensics & Incident Response',
    domain: 'DFIR',
    description:
      'Hands-on evidence acquisition, disk image examination with FTK Imager, artifact analysis, and structured investigation documentation.',
    technologies: ['FTK Imager', 'Artifact Analysis', 'Evidence Chain', 'Forensic Workflow'],
  },
  {
    id: 'appsec',
    title: 'Web & API Security',
    domain: 'Application Security',
    description:
      'Controlled vulnerability assessments using Burp Suite and manual review, evaluating input validation, endpoint exposure, and authentication flaws.',
    technologies: ['Burp Suite', 'API Testing', 'OWASP Standards', 'Input Validation'],
  },
  {
    id: 'netsec',
    title: 'Network Security & Protocol Analysis',
    domain: 'Network Security',
    description:
      'Capturing and dissecting network packet traces with Wireshark, active reconnaissance with Nmap, and packet crafting experiments with Scapy.',
    technologies: ['Wireshark', 'Nmap', 'Scapy', 'TCP/IP', 'DNS/ICMP'],
  },
]
