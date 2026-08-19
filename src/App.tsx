import Navbar from './components/Navbar'
import Background from './components/Background'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import PracticalWork from './components/PracticalWork'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Learning from './components/Learning'
import GitHubSection from './components/GitHub'
import Connect from './components/Connect'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Background />
      <Navbar />
      <main id="main" className="relative z-[1]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <PracticalWork />
        <Education />
        <Certifications />
        <Learning />
        <GitHubSection />
        <Connect />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
