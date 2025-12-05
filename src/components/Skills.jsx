import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: 'html5/html5-original.svg' },
        { name: 'CSS3', icon: 'css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
        { name: 'React', icon: 'react/react-original.svg' },
        { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original.svg' },
        { name: 'Shadcn/UI', icon: null },
        { name: 'Material UI', icon: 'mui/mui-original.svg' },
        { name: 'Ant Design', icon: 'antdesign/ant-design-original.svg' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
        { name: 'Express', icon: 'express/express-original.svg' },
        { name: 'NestJS', icon: 'nestjs/nestjs-original.svg' },
        { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
        { name: 'REST API', icon: null },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: 'git/git-original.svg' },
        { name: 'GitHub', icon: 'github/github-original.svg' },
        { name: 'VS Code', icon: 'vscode/vscode-original.svg' },
        { name: 'Postman', icon: 'postman/postman-original.svg' },
        { name: 'Figma', icon: 'figma/figma-original.svg' },
        { name: 'Docker', icon: 'docker/docker-original.svg' },
        { name: 'Netlify', icon: 'netlify/netlify-original.svg' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Teamwork', icon: null },
        { name: 'Problem Solving', icon: null },
        { name: 'Communication', icon: null },
        { name: 'Time Management', icon: null },
        { name: 'Agile/Scrum', icon: null },
        { name: 'Self-learning', icon: null }
      ]
    }
  ]

  return (
    <section id="skills" className="px-4 lg:px-12 py-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <div className="text-sm font-mono text-gray-500 mb-2">{'<section id="skills">'}</div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card border-white/10 hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle className="text-xl text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} className="text-sm px-3 py-1.5 bg-white/5 text-white/80 border-white/10 hover:bg-white/10 transition-all flex items-center gap-2  hover-lift">
                      {skill.icon && (
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                          alt={skill.name}
                          className="w-4 h-4"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      )}
                      <span>{skill.name}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
