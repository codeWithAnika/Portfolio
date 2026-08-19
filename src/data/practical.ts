export interface PracticalCard {
  id: string
  number: string
  title: string
  items: string[]
}

export const practicalWork: PracticalCard[] = [
  {
    id: 'network',
    number: '01',
    title: 'Network Analysis',
    items: ['Wireshark', 'DNS', 'TCP', 'ICMP'],
  },
  {
    id: 'assessment',
    number: '02',
    title: 'Security Assessment',
    items: ['Kali Linux', 'Nmap', 'Burp Suite'],
  },
  {
    id: 'web-api',
    number: '03',
    title: 'Web & API Security',
    items: ['Burp Suite', 'API Security', 'Web Testing'],
  },
  {
    id: 'forensics',
    number: '04',
    title: 'Digital Forensics',
    items: ['FTK Imager', 'Evidence analysis', 'Forensic workflows'],
  },
  {
    id: 'phishing',
    number: '05',
    title: 'Phishing Analysis',
    items: ['Phishing investigation', 'Email analysis', 'Awareness'],
  },
]

export const internship = {
  label: 'Professional Internship',
  title: 'Cyber Security Intern — Future Interns',
  description:
    'Completed a Cyber Security Internship at Future Interns, gaining practical exposure to cybersecurity concepts and information security. Strengthened analytical and problem-solving skills while exploring different aspects of cybersecurity through practical learning and security-focused work.',
  recognitions: ['Certificate of Completion', 'Letter of Recommendation'],
} as const

export const experienceTracks = [
  {
    id: 'academic',
    label: 'Academic Projects',
    title: 'Coursework & laboratories',
    description:
      'Academic cybersecurity coursework, laboratory work, and project-based learning across security, forensics, networking, and databases.',
  },
  {
    id: 'practical',
    label: 'Security Labs',
    title: 'Practical cybersecurity work',
    description:
      'Hands-on lab work with Kali Linux, Burp Suite, Wireshark, Nmap, FTK Imager, Scapy, and security-analysis workflows.',
  },
  {
    id: 'development',
    label: 'Development Projects',
    title: 'Software & data',
    description:
      'Academic development work using Python, C, C++, HTML, CSS, JavaScript, SQL, Git, and GitHub.',
  },
] as const
