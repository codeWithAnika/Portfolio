export const site = {
  name: 'Anika Talavadekar',
  shortName: 'ANIKA.',
  title: 'Anika Talavadekar | Cybersecurity Student',
  description:
    'Cybersecurity portfolio of Anika Talavadekar, a third-year B.Tech Cyber Security student focused on security operations, digital forensics, web/API security and network security.',
  role: 'Cybersecurity Student | SOC • DFIR • AppSec',
  headline: 'Cybersecurity Student | SOC • DFIR • AppSec',
  degree: 'B.Tech. in Cyber Security',
  degreeFull: 'B.Tech. in Cyber Security',
  college: 'Shah & Anchor Kutchhi Engineering College',
  academicPeriod: '2024–2028',
  year: 'Third Year',
  location: 'Mumbai, India',
  locationShort: 'Mumbai, India',
  email: 'anikaTalavadekar@gmail.com',
  github: 'https://github.com/codeWithAnika',
  githubUsername: 'codeWithAnika',
  linkedin: 'https://www.linkedin.com/in/anika-talavadekar-b83969376',
  liveUrl: 'https://anika-portfolio-lrhrprr8n-codewithanikas-projects.vercel.app/',
  resumePath: '/Anika-Talavadekar-Resume.pdf',
} as const

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
] as const

export const education = [
  {
    id: 'btech',
    period: '2024–2028',
    current: true,
    institution: 'Shah & Anchor Kutchhi Engineering College',
    credential: 'B.Tech. in Cyber Security',
    location: 'Mumbai, India',
    areas: [
      'Security Operations & Monitoring',
      'Digital Forensics & Incident Response',
      'Web & API Security',
      'Network Security Analysis',
      'Vulnerability Assessment',
      'Relational Database Systems',
    ],
  },
  {
    id: 'hsc',
    period: '2022–2024',
    current: false,
    institution: 'D.G. Ruparel College of Arts, Science and Commerce',
    credential: 'Higher Secondary Certificate (HSC)',
    location: 'Mumbai, India',
    areas: ['Science & Mathematics'],
  },
  {
    id: 'ssc',
    period: '2012–2022',
    current: false,
    institution: 'Holy Cross Convent High School',
    credential: 'Secondary School Certificate (SSC)',
    location: 'Mumbai, India',
    areas: ['Foundational Academics'],
  },
] as const

export interface CertificationItem {
  name: string
  issuer: 'Palo Alto Networks' | 'Cisco' | 'CTF & Foundations' | 'Programming & Systems'
  category: 'Security Operations' | 'Networking' | 'Systems & Development'
}

export const certifications: readonly CertificationItem[] = [
  {
    name: 'Palo Alto Networks Certified Cybersecurity Apprentice',
    issuer: 'Palo Alto Networks',
    category: 'Security Operations',
  },
  {
    name: 'Palo Alto Networks Cybersecurity Operations Fundamentals',
    issuer: 'Palo Alto Networks',
    category: 'Security Operations',
  },
  {
    name: 'Palo Alto Networks Network Security Fundamentals',
    issuer: 'Palo Alto Networks',
    category: 'Security Operations',
  },
  {
    name: 'Palo Alto Networks Endpoint Security',
    issuer: 'Palo Alto Networks',
    category: 'Security Operations',
  },
  {
    name: 'Palo Alto Networks Cloud Security Fundamentals',
    issuer: 'Palo Alto Networks',
    category: 'Security Operations',
  },
  {
    name: 'Cisco Ethical Hacker',
    issuer: 'Cisco',
    category: 'Networking',
  },
  {
    name: 'Cisco CCNA: Introduction to Networks',
    issuer: 'Cisco',
    category: 'Networking',
  },
  {
    name: 'Cisco Operating Systems Basics',
    issuer: 'Cisco',
    category: 'Networking',
  },
  {
    name: 'Root Access CTF 2026',
    issuer: 'CTF & Foundations',
    category: 'Security Operations',
  },
  {
    name: 'Cybersecurity Foundations',
    issuer: 'CTF & Foundations',
    category: 'Security Operations',
  },
  {
    name: 'Saylor Academy – MPCA',
    issuer: 'Programming & Systems',
    category: 'Systems & Development',
  },
  {
    name: 'EduPyramids – Python Programming',
    issuer: 'Programming & Systems',
    category: 'Systems & Development',
  },
  {
    name: 'EduPyramids – C Programming',
    issuer: 'Programming & Systems',
    category: 'Systems & Development',
  },
] as const
