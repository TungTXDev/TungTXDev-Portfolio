import { Card, CardContent } from '@/components/ui/card'
import { Target, Zap, Calendar, MapPin } from 'lucide-react'

const Introduce = () => {
  return (
    <section id="introduce" className="px-4 lg:px-12 py-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <div className="text-sm font-mono text-gray-500 mb-2">{'<section id="introduce">'}</div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Introduction</h2>
        </div>

        <div className="space-y-6">
          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="glass-card border-white/10">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div>
                    <Calendar className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">Date of Birth</p>
                    <p className="text-white/80 font-medium">22/02/2003</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div>
                    <MapPin className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">Location</p>
                    <p className="text-white/80 font-medium">LongBien, Hanoi, Vietnam</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Introduction */}
          <Card className="glass-card border-white/10">
            <CardContent className="pt-6">
              <p className="text-lg text-white/60 leading-relaxed">
                Backend Developer with hands-on 2 years of experience in Node.js, with practical
                experience designing and implementing server-side applications gained through
                academic studies and real projects. Collaborated in professional team environments
                and demonstrated organizational skills while contributing to key deliverables.
              </p>
            </CardContent>
          </Card>

          {/* Career Goal */}
          <Card className="glass-card border-white/10">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Career Goals</h3>
                  <p className="text-white/60">
                    Advance as a Full Stack Developer with deep expertise in both backend and frontend technologies.
                    Build scalable, high-performance applications that solve real-world problems and contribute to
                    impactful projects while growing into technical leadership roles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>


          {/* Strengths */}
          <Card className="glass-card border-white/10">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                {/* Icon đơn giản */}
                <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                  <Zap className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Key Strengths</h3>
                  <ul className="space-y-2 text-white/60">
                    <li>• Designing and implementing RESTful APIs with Node.js (NestJS, Express)</li>
                    <li>• Building responsive and intuitive user interfaces with React & TypeScript</li>
                    <li>• Database design and optimization (MongoDB, PostgreSQL)</li>
                    <li>• Effective collaboration using Git, Agile/Scrum methodologies</li>
                    <li>• Quick learner with strong problem-solving and debugging skills</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}

export default Introduce
