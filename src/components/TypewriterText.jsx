import { useState, useEffect } from 'react'

const TypewriterText = ({ text, delay = 50, className = '', loop = true, loopDelay = 8000 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!loop) {
      // Original behavior - type once
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, delay)
        return () => clearTimeout(timeout)
      }
      return
    }

    // Loop behavior
    if (isTyping && currentIndex < text.length) {
      // Typing animation
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    } else if (isTyping && currentIndex === text.length) {
      // Finished typing, wait before restarting
      const timeout = setTimeout(() => {
        setDisplayText('')
        setCurrentIndex(0)
      }, loopDelay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text, isTyping, loop, loopDelay])

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

export default TypewriterText
