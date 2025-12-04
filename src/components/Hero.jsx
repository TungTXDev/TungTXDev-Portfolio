import { Mail, Github, Linkedin, Facebook, Download, Phone, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TypewriterText from '@/components/TypewriterText'
import { TypewriterProvider } from '@/contexts/TypewriterContext'
import { useWeather } from '@/contexts/WeatherContext'
import PacmanTech from '@/components/PacmanTech'

const Hero = () => {
  const { theme } = useWeather()

  const techIcons = [
    { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
    { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
    { name: 'React', icon: 'react/react-original.svg' },
    { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
    { name: 'NestJS', icon: 'nestjs/nestjs-original.svg' },
    { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
    { name: 'Git', icon: 'git/git-original.svg' },
  ]

  const renderWeatherParticles = () => {
    const particleCount = 80

    switch (theme) {
      case 'rainy':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(particleCount)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-16 bg-gradient-to-b from-blue-300 via-blue-400 to-transparent animate-rain shadow-lg"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-${Math.random() * 20}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.3 + Math.random() * 0.4}s`,
                  filter: 'drop-shadow(0 0 2px rgba(59, 130, 246, 0.8))'
                }}
              />
            ))}
          </div>
        )

      case 'snowy':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(particleCount)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-white rounded-full animate-snow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-${Math.random() * 20}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  boxShadow: '0 0 8px rgba(255, 255, 255, 0.9), 0 0 15px rgba(255, 255, 255, 0.6)'
                }}
              />
            ))}
          </div>
        )

      case 'stormy':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Heavy Rain */}
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-20 bg-gradient-to-b from-blue-200 via-blue-400 to-transparent animate-rain"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-${Math.random() * 20}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.2 + Math.random() * 0.2}s`,
                  filter: 'drop-shadow(0 0 3px rgba(96, 165, 250, 0.9))'
                }}
              />
            ))}
            {/* Lightning Flash */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-200/40 via-white/50 to-transparent animate-lightning" />
            {/* Lightning Bolts - Zigzag */}
            {[...Array(4)].map((_, i) => (
              <svg
                key={`bolt-${i}`}
                className="absolute animate-lightning"
                style={{
                  left: `${15 + i * 25}%`,
                  top: '0',
                  width: '60px',
                  height: `${250 + Math.random() * 100}px`,
                  animationDelay: `${i * 2}s`,
                  filter: 'drop-shadow(0 0 10px rgba(253, 224, 71, 1)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.9))'
                }}
              >
                <path
                  d={`M 30 0 L 20 40 L 35 40 L 25 80 L 40 80 L 20 140 L 35 140 L 15 ${200 + Math.random() * 50}`}
                  stroke="url(#lightning-gradient-${i})"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id={`lightning-gradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#fde047" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>
            ))}
            {/* Thunder Glow */}
            <div className="absolute inset-0 bg-purple-500/10 animate-lightning" style={{ animationDelay: '0.1s' }} />
          </div>
        )

      case 'cloudy':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute text-8xl opacity-40 animate-float-cloud"
                style={{
                  left: `${-10 + Math.random() * 120}%`,
                  top: `${Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                  filter: 'drop-shadow(0 0 10px rgba(156, 163, 175, 0.5))'
                }}
              >
                ☁️
              </div>
            ))}
          </div>
        )

      case 'sunny':
        return null

      case 'foggy':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-40 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent animate-fog backdrop-blur-sm"
                style={{
                  top: `${i * 20}%`,
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: `${10 + Math.random() * 8}s`
                }}
              />
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <TypewriterProvider loopDelay={8000}>
      <section id="hero" className="min-h-screen px-4 lg:px-12 py-8 relative overflow-hidden">
        {/* Weather Particles */}
        <div className="absolute inset-0 z-0">
          {renderWeatherParticles()}
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              {/* Brand Title */}
              <div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  <TypewriterText text="Portfolio" delay={100} />
                </h1>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                  <p className="text-sm text-white/40 font-mono">
                    <TypewriterText text="Developer Showcase" delay={50} />
                  </p>
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                </div>
              </div>

              {/* Name & Title */}
              <div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    <TypewriterText text="Tạ Xuân Tùng - TungTXDev" delay={80} />
                  </span>
                </h2>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 mb-4 min-h-[2rem]">
                  <TypewriterText text="Full Stack Developer" delay={60} />
                </h3>

                {/* Short Description */}
                <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl min-h-[4rem]">
                  <TypewriterText
                    text="Experienced Node.js Backend Developer with 2 years of hands-on practice, creating scalable, high-performance server-side applications and modern web solutions that deliver real-world results."
                    delay={30}
                  />
                </p>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=tunggtungg2202@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all hover:scale-105 whitespace-nowrap"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">tunggtungg2202@gmail.com</span>
                </a>

                <a
                  href="tel:+84367508291"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all hover:scale-105 whitespace-nowrap"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">0367508291</span>
                </a>

                {/* Line break */}
                <div className="w-full"></div>
                <a
                  href="https://github.com/TungTXDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all hover:scale-105 whitespace-nowrap"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tung-txdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all hover:scale-105 whitespace-nowrap"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://web.facebook.com/TungTXDev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all hover:scale-105 whitespace-nowrap"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="text-sm">Facebook</span>
                </a>
                <a
                  href="zalo://conversation?phone=0367508291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all hover:scale-105 whitespace-nowrap"
                >
                  <svg className="h-4 w-4" viewBox="0 0 48 48" fill="none">
                    <path d="M24 4C12.96 4 4 12.96 4 24c0 9.28 6.32 17.12 14.88 19.36l-1.92 5.76c-.08.24.16.48.4.4l7.84-3.92C25.44 45.92 25.76 46 26.08 46c.32 0 .64-.08.96-.16C38.56 43.6 44 34.56 44 24c0-11.04-8.96-20-20-20z" fill="currentColor" />
                    <path d="M16.5 28.5c-.83 0-1.5-.67-1.5-1.5v-6c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5zm5.5 0c-.83 0-1.5-.67-1.5-1.5v-6c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5zm5.5 0c-.83 0-1.5-.67-1.5-1.5v-6c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5zm5.5 0c-.83 0-1.5-.67-1.5-1.5v-6c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5z" fill="#1e1e1e" opacity="0.3" />
                  </svg>
                  <span className="text-sm">Zalo</span>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://tungtxdev.netlify.app/tungtxdev_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-dark font-medium rounded-lg transition-all duration-300 transform  hover:scale-105 hover:shadow-lg hover:shadow-gray-400/50"
                >
                  <ExternalLink className="h-4 w-4" />
                  View my CV
                </a>

                <a
                  href="/resume/TungTXDev_Resume.pdf"
                  download="TungTXDev_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download my CV
                </a>
              </div>
            </div>

            {/* Right Side - Avatar with Orbiting Tech Icons */}
            <div className="relative flex items-center justify-center min-h-[280px] sm:min-h-[400px] md:min-h-[500px]">
              {/* Orbit Container */}
              <div className="relative w-full max-w-[280px] aspect-square sm:max-w-[400px] md:max-w-[600px]">
                {/* Central Avatar */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-48 h-48 sm:w-72 sm:h-72 md:w-[432px] md:h-[432px] rounded-full bg-[#1e1e1e] flex items-center justify-center animate-glow overflow-hidden">
                    <img
                      src="/images/avatar.png"
                      alt="Profile"
                      className="w-full h-full object-contain scale-160 translate-y-22"
                    />
                  </div>
                </div>

                {/* Orbiting Tech Icons - Mobile */}
                <div className="absolute inset-0 animate-spin-slow md:hidden">
                  {techIcons.map((tech, index) => {
                    const angle = (index * 360) / techIcons.length
                    const radius = 100
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius

                    return (
                      <div
                        key={tech.name}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-110 transition-transform animate-spin-reverse shadow-lg">
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
                            alt={tech.name}
                            className="w-6 h-6 sm:w-8 sm:h-8"
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Orbiting Tech Icons - Desktop */}
                <div className="absolute inset-0 animate-spin-slow hidden md:block">
                  {techIcons.map((tech, index) => {
                    const angle = (index * 360) / techIcons.length
                    const radius = 290
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius

                    return (
                      <div
                        key={tech.name}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-110 transition-transform animate-spin-reverse shadow-lg">
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
                            alt={tech.name}
                            className="w-11 h-11"
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Decorative orbit ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[380px] sm:h-[380px] md:w-[580px] md:h-[580px] rounded-full border border-white/5"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 pointer-events-none hidden sm:block">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl rotate-12 opacity-20 blur-xl"></div>
              </div>
              <div className="absolute bottom-10 left-10 w-32 h-32 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pacman eating tech icons */}
      <PacmanTech />
    </TypewriterProvider>
  )
}

export default Hero