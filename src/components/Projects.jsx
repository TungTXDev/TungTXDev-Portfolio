import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, User, X, Hospital, Plane, Brain } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const projects = [
    {
      name: "HTClinicHub System",
      description: "A digital healthcare platform in Vietnam that enables users to book medical appointments, access online consultations, and conveniently manage their medical records.",
      tech: ["NodeJS (NestJS)", "ReactJS", "TypeScript", "MongoDB"],
      tools: "Visual Studio Code, GitHub, Docker, Postman, PlantUML, Draw.io, Trello",
      role: "Full-stack Developer | Team size: 5",
      period: "Apr 2025 - Sep 2025",
      image: <Hospital className="h-10 w-10 text-blue-400" />, responsibilities: [
        "Analyzed requirements from the client (Phong Linh Company) to define requirements, use cases, and class diagrams",
        "Built features for creating and managing personal and family health profiles",
        "Implemented prescription management functionality, allowing doctors to create and issue medication orders",
        "Developed modules to calculate and measure body metrics (BMI, body fat, vitals)",
        "Integrated QR code scanning to allow patients to receive medical examination results securely"
      ],
      github: "https://github.com/TungTXDev/PLANUS_FE",
      architecture: "Microservices",
      client: "Phong Linh Company – commissioned the project and piloted real-world clinic services"
    },
    {
      name: "PLANUS MOBILE APP",
      description: "AI-powered travel planner that analyzes your preferences, budget, and weather to create a personalized travel schedule.",
      tech: ["NodeJS (NestJS)", "React Native", "TypeScript", "MongoDB"],
      tools: "Visual Studio Code, GitHub, Postman, PlantUML, Draw.io, Trello, Expo",
      role: "Front-End Developer | Team size: 3",
      period: "Jan 2025 - Apr 2025",
      image: <Plane className="h-10 w-10 text-blue-400" />, responsibilities: [
        "Detected location and real-time weather updates to optimize travel routes and activities",
        "Developed user interfaces in React Native for creating, editing, and viewing travel plans interactively",
        "Implemented trip tracking features to monitor travel progress and display route summaries",
        "Built a review and feedback module for users to evaluate destinations and itineraries"
      ],
      github: "https://github.com/TungTXDev/PLANUS_FE"
    },
    {
      name: "Tâm Giao",
      description: "A mental health platform that allows users to take psychological tests, receive counseling, book medical appointments, and access articles from leading psychology experts.",
      tech: ["NodeJS (ExpressJS)", "ReactJS (TailwindCSS + Shadcn/UI)", "TypeScript", "MongoDB"],
      tools: "Visual Studio Code, GitHub, Postman, PlantUML, Draw.io, Trello",
      role: "Full-stack Developer | Team size: 4",
      period: "Jan 2025 - Apr 2025",
      image: <Brain className="h-10 w-10 text-blue-400" />, responsibilities: [
        "Collaborated with the team to brainstorm and refine system ideas, and clarified business requirements",
        "Developed features for users to take psychological assessments to identify the root causes of mental health issues",
        "Built modules to view examination results and receive professional feedback"
      ],
      github: "https://github.com/TungTXDev/TamGiao"
    }
  ]

  return (
    <section id="projects" className="px-4 lg:px-12 py-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <div className="text-sm font-mono text-gray-500 mb-2">{'<section id="projects">'}</div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card border-white/10 hover:border-white/20 transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:bg-white/10 text-white/60 hover:text-white"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:bg-white/10 text-white/60 hover:text-white"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-white text-lg">{project.name}</CardTitle>
                  <span className="text-xs text-white/50">{project.period}</span>
                </div>
                <CardDescription className="text-white/60 text-sm mb-3 line-clamp-2">{project.description}</CardDescription>
                <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                  <User className="h-3 w-3" />
                  <span>{project.role}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium mb-2 text-white/70">Technologies:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <Badge key={i} className="bg-white/5 text-white/80 border-white/10 text-xs">{tech}</Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge className="bg-white/5 text-white/80 border-white/10 text-xs">+{project.tech.length - 3}</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal using Portal */}
      {selectedProject && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#2a2a2a] rounded-xl max-w-2xl w-full max-h-[85vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* macOS Header */}
            <div className="bg-[#323232] px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex gap-2">
                <button className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80" onClick={() => setSelectedProject(null)} />
                <button className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80" />
                <button className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-4xl">{selectedProject.image}</span>
                <h3 className="text-white font-semibold">{selectedProject.name}</h3>
              </div>
              <button className="text-white/60 hover:text-white" onClick={() => setSelectedProject(null)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Period & Role */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <User className="h-4 w-4" />
                  <span>{selectedProject.role}</span>
                </div>
                <span className="text-sm text-white/50">{selectedProject.period}</span>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-white font-semibold mb-2">Description</h4>
                <p className="text-white/70 text-sm leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Responsibilities */}
              {selectedProject.responsibilities && (
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {selectedProject.responsibilities.map((resp, i) => (
                      <li key={i} className="text-white/70 text-sm flex gap-2">
                        <span className="text-blue-400 mb-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-white font-semibold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <Badge key={i} className="bg-blue-500/20 text-blue-300 border-blue-500/30">{tech}</Badge>
                  ))}
                </div>
              </div>

              {/* Tools */}
              {selectedProject.tools && (
                <div>
                  <h4 className="text-white font-semibold mb-2">Tools</h4>
                  <p className="text-white/70 text-sm">{selectedProject.tools}</p>
                </div>
              )}

              {/* Architecture */}
              {selectedProject.architecture && (
                <div>
                  <h4 className="text-white font-semibold mb-2">Architecture</h4>
                  <p className="text-white/70 text-sm">{selectedProject.architecture}</p>
                </div>
              )}

              {/* Client */}
              {selectedProject.client && (
                <div>
                  <h4 className="text-white font-semibold mb-2">Client</h4>
                  <p className="text-white/70 text-sm">{selectedProject.client}</p>
                </div>
              )}

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-white/10 flex-wrap">
                {selectedProject.github && (
                  <Button
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 min-w-[150px] justify-center"
                    asChild
                  >
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                )}
                {selectedProject.demo && (
                  <Button
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 min-w-[150px] justify-center"
                    asChild
                  >
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

export default Projects
