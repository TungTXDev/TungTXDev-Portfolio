import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Hero from '@/components/Hero'
import Introduce from '@/components/Introduce'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import CodeDecorations from '@/components/CodeDecorations'
import VisitorCounter from '@/components/VisitorCounter'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollReveal from '@/components/ScrollReveal'
import WeatherBackground from '@/components/WeatherBackground'
import GameButton from '@/components/GameButton'
import { WeatherProvider } from '@/contexts/WeatherContext'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'introduce', 'experience', 'projects', 'education', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <WeatherProvider>
      <WeatherBackground>
        <div className="min-h-screen relative">
          {/* VS Code Background */}
          <CodeDecorations />

          {/* Header Navigation */}
          <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

          {/* Mobile Navigation */}
          <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />

          {/* Main Content */}
          <main className="pt-12">
            <Hero />
            <ScrollReveal animation="fade-in-up">
              <Introduce />
            </ScrollReveal>
            <ScrollReveal animation="fade-in-right" delay={100}>
              <Experience />
            </ScrollReveal>
            <ScrollReveal animation="scale-in" delay={200}>
              <Projects />
            </ScrollReveal>
            <ScrollReveal animation="fade-in-up" delay={150}>
              <Education />
            </ScrollReveal>
            <ScrollReveal animation="fade-in-left" delay={100}>
              <Skills />
            </ScrollReveal>
            <ScrollReveal animation="fade-in-up">
              <Contact />
            </ScrollReveal>
          </main>

          {/* Visitor Counter - Fixed top right, hidden on mobile */}
          <div className="hidden sm:block fixed top-20 right-6 z-40">
            <VisitorCounter />
          </div>

          {/* Scroll to Top Button - Fixed bottom right */}
          <ScrollToTop />

          {/* Game Button - Fixed bottom right, above scroll to top */}
          <GameButton />
        </div>
      </WeatherBackground>
    </WeatherProvider>
  )
}

export default App
