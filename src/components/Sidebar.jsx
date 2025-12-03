const Sidebar = ({ activeSection, onNavigate }) => {
  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'introduce', label: 'Introduce' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e1e]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                    ? 'text-white'
                    : 'text-white/60 hover:text-white hover:bg-gray-700'
                    }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gray-700 rounded-lg"></div>
                  )}
                  <span className="relative">{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Download CV Button */}
          <a
            href="/resume/TungTXDev_Resume.pdf"
            download="TungTXDev_Resume.pdf"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </header>
  )
}

export default Sidebar
