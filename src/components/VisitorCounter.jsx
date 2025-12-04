import { useState, useEffect } from 'react'
import { Eye } from 'lucide-react'

const VisitorCounter = () => {
  const [count, setCount] = useState(0)
  const [targetCount, setTargetCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Lấy số lượng visitors từ API backend
    const fetchVisitorCount = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
        const response = await fetch(`${API_URL}/api/visitor-count`)

        if (!response.ok) {
          throw new Error('Failed to fetch')
        }

        const data = await response.json()
        setTargetCount(data.count || 0)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch visitor count:', error)
        // Nếu API lỗi, hiển thị 0
        setTargetCount(0)
        setLoading(false)
      }
    }

    fetchVisitorCount()
  }, [])

  useEffect(() => {
    if (targetCount === 0 || loading) return

    // Animation đếm số
    let start = 0
    const duration = 2000 // 2 seconds
    const increment = targetCount / (duration / 16) // 60fps

    const timer = setInterval(() => {
      start += increment
      if (start >= targetCount) {
        setCount(targetCount)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [targetCount, loading])

  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Main card */}
      <div className="relative backdrop-blur-md bg-black/30 border border-white/10 rounded-full px-3 py-2 shadow-lg hover:border-purple-500/30 transition-all duration-300">
        <div className="flex items-center gap-2">
          {/* Icon */}
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <Eye className="w-3 h-3 text-white/70" />
          </div>

          {/* Counter */}
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tabular-nums">
              {loading ? '...' : count.toLocaleString()}
            </span>
            <span className="text-[10px] text-white/30 font-mono">views</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisitorCounter
