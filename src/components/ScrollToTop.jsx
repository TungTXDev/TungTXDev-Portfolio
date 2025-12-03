import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Button */}
          <div className="relative w-12 h-12 rounded-full backdrop-blur-md bg-black/40 border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <ArrowUp className="w-5 h-5 text-white/70 group-hover:text-white transition-colors relative z-10" />
          </div>
        </button>
      )}
    </>
  )
}

export default ScrollToTop
