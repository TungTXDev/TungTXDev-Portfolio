import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      type: "Full-time",
      role: "Developer at GST G8, FPT Software (F-ville 3)",
      company: "FPT Software",
      logo: "/images/avatarFPTSoftware.png",
      period: "Apr 2024 - Apr 2025",
      description: "Implemented backend APIs for smart car features, integrated into electric vehicles. Backend API development.",
      achievements: [
        "Developed 4 features, including door lock/unlock, air conditioning, and smart lighting, contributing to a 10% improvement in development",
        "Designed and implemented backend APIs based on provided sequence diagrams, Swagger (API UI), and optimized backend processes",
        "Created and executed unit test cases. Refactored and maintained code in AWS CodeCommit repositories",
        "Wrote reports after each phase and man-day review"
      ],
      technologies: "Spring Boot, Swagger",
      tools: "IntelliJ, AWS CodeCommit, Fork, Postman, Jira"
    },
    {
      type: "Part-time",
      role: "Management Team Member - FPT AI EZ (Academic & Learning Community)",
      company: "FPT University",
      logo: "/images/avatarFPTAIEZ.png",
      period: "Apr 2024 - Present",
      description: "Managed student course registration, inquiries, scheduled classes, provided support for short/long-term online review courses for FPT University students.",
      achievements: [
        "Achieving 90% of learners satisfied and achieving their target results",
        "Coordinated course schedules and student support activities",
        "Maintained high satisfaction rates through effective communication"
      ]
    }
  ]

  return (
    <section id="experience" className="px-4 lg:px-12 py-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <div className="text-sm font-mono text-gray-500 mb-2">{'<section id="experience">'}</div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card border-white/10 hover-lift">
              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  {exp.logo && (
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge className="border-white/20 text-white/90 bg-white/10">{exp.type}</Badge>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white mb-1">{exp.role}</CardTitle>
                    <CardDescription className="text-base text-white/60">{exp.company}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/60 mb-4">{exp.description}</p>

                <div className="mb-4">
                  <p className="font-medium mb-2 text-white/80">Responsibilities & Achievements:</p>
                  <ul className="space-y-1 text-white/60 text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>• {achievement}</li>
                    ))}
                  </ul>
                </div>

                {exp.technologies && (
                  <div className="mb-2">
                    <span className="font-medium text-white/80 text-sm">Technologies: </span>
                    <span className="text-white/60 text-sm">{exp.technologies}</span>
                  </div>
                )}

                {exp.tools && (
                  <div>
                    <span className="font-medium text-white/80 text-sm">Tools: </span>
                    <span className="text-white/60 text-sm">{exp.tools}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
