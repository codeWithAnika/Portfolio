export interface InternshipDetails {
  label: string
  role: string
  company: string
  title: string
  status: string
  description: string
  deliverables: string[]
  recognitions: string[]
  skillsApplied: string[]
}

export const internship: InternshipDetails = {
  label: 'Verified Internship Experience',
  role: 'Cyber Security Intern',
  company: 'Future Interns',
  title: 'Cyber Security Intern — Future Interns',
  status: 'Completed',
  description:
    'Completed a hands-on Cyber Security Internship at Future Interns, gaining practical exposure to cybersecurity methodologies, vulnerability testing, and threat evaluation. Strengthened technical documentation and investigative skills while conducting security evaluations across web applications, REST APIs, and phishing vectors.',
  deliverables: [
    'Web application vulnerability assessment and alert documentation using automated scanning and manual inspection',
    'Phishing email header deconstruction, WHOIS domain investigation, and threat awareness system implementation',
    'REST API security risk analysis evaluating authorization checks and endpoint exposure boundaries',
  ],
  recognitions: ['Certificate of Completion', 'Letter of Recommendation'],
  skillsApplied: [
    'Vulnerability Assessment',
    'API Security Testing',
    'Phishing Analysis',
    'Threat Evaluation',
    'Defensive Remediation',
  ],
}

export const experienceTracks = [
  {
    id: 'academic',
    label: 'Academic Engineering',
    title: 'B.Tech Coursework & Laboratories',
    description:
      'Rigorous academic training in cybersecurity architectures, cryptography, network protocols, digital forensics, and relational database systems.',
    highlights: ['Core Systems', 'Security Architecture', 'Forensic Methodologies'],
  },
  {
    id: 'labs',
    label: 'Practical Security Labs',
    title: 'Hands-on Tools & Environments',
    description:
      'Controlled lab testing utilizing Kali Linux, Burp Suite, Wireshark, Nmap, FTK Imager, and Scapy across virtualized testing networks.',
    highlights: ['Packet Inspection', 'Proxy Interception', 'Disk Imaging'],
  },
  {
    id: 'engineering',
    label: 'Technical Development',
    title: 'Security-Oriented Scripting',
    description:
      'Development of analytical Python utilities, log parsing routines, database schemas, and collaborative web platforms with Git version control.',
    highlights: ['Python Automation', 'Relational Schemas', 'Version Control'],
  },
] as const
