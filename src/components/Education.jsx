import { GraduationCap, MapPin } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Software Engineering",
      school: "FPT University",
      location: "Hanoi, Vietnam",
      period: "Jan 2022 - Sep 2025",
      status: "Graduated",
      gpa: null,
      achievements: []
    },
    {
      degree: "Intensive English Language Programme Activities for 3 months",
      school: "UCSI University",
      location: "Kuala Lumpur, Malaysia",
      period: "Aug 2022 - Dec 2022",
      status: "Actively contributed",
      gpa: null,
      achievements: []
    }
  ]

  return (
    <section id="education" className="px-4 lg:px-12 py-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <div className="text-xs sm:text-sm font-mono text-gray-500 mb-2">{'<section id="education">'}</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Education</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2"></div>

          {education.map((edu, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform md:-translate-x-1/2 z-10 mt-2">
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="glass-card rounded-xl border-white/10 p-6 hover:border-white/20 transition-all">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                      <h3 className="text-base sm:text-lg font-bold text-white">{edu.school}</h3>
                    </div>
                  </div>

                  {/* Degree */}
                  <p className="text-sm sm:text-base text-white/80 font-medium mb-2">{edu.degree}</p>

                  {/* Status */}
                  <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full mb-3">
                    {edu.status}
                  </div>

                  {/* Location & Period */}
                  <div className="flex flex-col gap-2 mb-3 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="text-white/50">{edu.period}</div>
                  </div>

                  {/* GPA */}
                  {edu.gpa && (
                    <div className="text-sm text-white/60 mb-3">GPA: {edu.gpa}</div>
                  )}

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="space-y-1 text-sm text-white/60">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-blue-400">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
