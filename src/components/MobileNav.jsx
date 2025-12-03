import { useState } from 'react'
import { Menu, X, Home, User, Code2, Briefcase, FolderGit2, Award, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MobileNav = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'introduce', label: 'Introduce', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'education', label: 'Education', icon: Award },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  const handleNavigate = (id) => {
    onNavigate(id)
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-white/10 text-white/90"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-[72px] left-0 right-0 bottom-0 z-50 bg-[#1e1e1e] overflow-y-auto">
          <nav className="px-4 py-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                    ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md'
                    : 'text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      )}
    </>
  )
}

export default MobileNav
