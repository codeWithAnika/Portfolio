export interface SkillGroup {
  id: string
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    items: [
      'Ethical Hacking',
      'Vulnerability Assessment',
      'API Security',
      'Web Application Security Testing',
      'Phishing Analysis',
      'Network Security',
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    items: ['C', 'C++', 'Python'],
  },
  {
    id: 'web',
    title: 'Web Technologies',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'os',
    title: 'Operating Systems',
    items: ['Linux', 'Windows'],
  },
  {
    id: 'tools',
    title: 'Tools / Technologies',
    items: [
      'Kali Linux',
      'Burp Suite',
      'Wireshark',
      'Nmap',
      'FTK Imager',
      'Scapy',
      'Git',
      'GitHub',
      'VS Code',
      'Streamlit',
      'Blender',
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    items: [
      'Problem Solving',
      'Communication',
      'Team Collaboration',
      'Presentation Skills',
      'Analytical Thinking',
      'Quick Learner',
      'Adaptability',
    ],
  },
]

export const aboutColumns = {
  security: [
    'Ethical Hacking',
    'Vulnerability Assessment',
    'API Security',
    'Web Application Security',
    'Phishing Analysis',
    'Network Security',
  ],
  focus: [
    'DFIR',
    'Cyber investigations',
    'Digital Forensics',
    'Web security',
    'Network security',
    'Security Analysis',
  ],
} as const
