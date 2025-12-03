import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Github, Linkedin, Facebook, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tunggtungg2202@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=tunggtungg2202@gmail.com",
      color: "text-red-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0367508291",
      link: "tel:0367508291",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "LongBien, Hanoi, Vietnam",
      link: null,
      color: "text-blue-600"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@TungTXDev",
      link: "https://github.com/TungTXDev",
      color: "hover:bg-gray-100 dark:hover:bg-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Tạ Xuân Tùng",
      link: "https://www.linkedin.com/in/tung-txdev/",
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: Facebook,
      label: "Facebook",
      username: "Tùngg Tùngg",
      link: "https://web.facebook.com/TungTXDev/",
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    }
  ]

  return (
    <section id="contact" className="px-4 lg:px-12 py-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <div className="text-xs sm:text-sm font-mono text-gray-500 mb-2">{'<section id="contact">'}</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Contact</h2>
        </div>
        <p className="text-white/60 mb-8">
          Let's connect through the following channels
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Contact Information</h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card key={index} className="glass-card border-white/10 flex-1">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-[#2d2d30] ${info.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="font-medium text-white/90 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-white/90">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Social Media</h3>
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <Card key={index} className="glass-card border-white/10 hover:border-purple-500 flex-1 transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-white/60" />
                        <div>
                          <CardTitle className="text-base text-white/90">{social.label}</CardTitle>
                          <CardDescription className="text-white/60">{social.username}</CardDescription>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="hover:bg-white/10 text-white/60 hover:text-white" asChild>
                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                          Visit
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>


        {/* CTA */}
        <Card className="mt-8 glass-card border-2 border-purple-500">
          <CardContent className="pt-6 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-500">
              Ready to work together?
            </h3>
            <p className="text-white/60 mb-4">
              I'm always open to new opportunities and exciting projects
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tunggtungg2202@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-500 text-white font-medium transition-all duration-300 hover:bg-blue-600 hover:scale-105" >
              <Mail className="h-4 w-4" />
              Send me an email
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Contact
