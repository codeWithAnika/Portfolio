export const site = {
  name: 'Anika Vinit Talavadekar',
  shortName: 'ANIKA.',
  title: 'Anika Vinit Talavadekar | Cyber Security Student',
  description:
    'Portfolio of Anika Vinit Talavadekar, a B.Tech Cyber Security student focused on cybersecurity, digital forensics, ethical hacking, web security, network security, and security labs.',
  role: 'Cyber Security Student | Digital Forensics & Security',
  degree: 'B.Tech Cyber Security',
  degreeFull: 'B.Tech in Cyber Security',
  college: 'Shah and Anchor Kutchhi Engineering College',
  academicPeriod: '2024—2028',
  year: 'Third Year',
  location: 'Mumbai, India',
  locationShort: 'Mumbai, India',
  email: 'anikatalavadekar@gmail.com',
  github: 'https://github.com/codeWithAnika',
  githubUsername: 'codeWithAnika',
  linkedin: 'https://www.linkedin.com/in/anika-talavadekar-b83969376',
  resumePath: '/Anika-Talavadekar-Resume.pdf',
} as const

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
] as const

export const education = [
  {
    id: 'btech',
    period: '2024—2028',
    current: true,
    institution: 'Shah and Anchor Kutchhi Engineering College',
    credential: 'B.Tech in Cyber Security',
    areas: [
      'Cybersecurity',
      'Digital Forensics',
      'Ethical Hacking',
      'Web Application Security',
      'Network Security',
      'Security Analysis',
    ],
  },
  {
    id: 'hsc',
    period: '2022—2024',
    current: false,
    institution: 'D.G. Ruparel College of Arts, Science and Commerce',
    credential: 'HSC',
    areas: [],
  },
  {
    id: 'ssc',
    period: '2012—2022',
    current: false,
    institution: 'Holy Cross Convent High School',
    credential: 'SSC',
    areas: [],
  },
] as const

export const learningTopics = [
  'Digital Forensics & Incident Response',
  'Web Application Security',
  'API Security',
  'Network Security',
  'Ethical Hacking',
  'Security Analysis',
] as const

export const certifications = [
  'Cisco Ethical Hacker',
  'Palo Alto Networks Certified Cybersecurity Apprentice',
  'Cisco CCNA: Introduction to Networks',
  'Cisco Operating Systems Basics',
  'Palo Alto Networks Cybersecurity Operations Fundamentals',
  'Palo Alto Networks Network Security Fundamentals',
  'Palo Alto Networks Endpoint Security',
  'Palo Alto Networks Cloud Security Fundamentals',
  'Root Access CTF 2026',
  'Cybersecurity Foundations',
  'Saylor Academy – MPCA',
  'EduPyramids – Python Programming',
  'EduPyramids – C Programming',
] as const
