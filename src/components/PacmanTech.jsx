import { useState, useEffect } from 'react'

export default function PacmanTech() {
    const [pacmanPosition, setPacmanPosition] = useState({ x: 5, y: 50 })
    const [direction, setDirection] = useState('right')
    const [eatenIcons, setEatenIcons] = useState([])
    const [mouthAngle, setMouthAngle] = useState(0) // Góc miệng tổng (0: đóng full, 60: mở symmetric 30° up + 30° down)

    const techIcons = [
        { name: 'JavaScript', icon: 'javascript/javascript-original.svg', x: 20, y: 50 },
        { name: 'Node.js', icon: 'nodejs/nodejs-original.svg', x: 35, y: 50 },
        { name: 'React', icon: 'react/react-original.svg', x: 50, y: 50 },
        { name: 'TypeScript', icon: 'typescript/typescript-original.svg', x: 65, y: 50 },
        { name: 'NestJS', icon: 'nestjs/nestjs-original.svg', x: 80, y: 50 },
    ]

    // Animation cho miệng đóng/mở - siêu tốc
    useEffect(() => {
        let animationId
        const animateMouth = () => {
            const time = Date.now() / 1000
            const angle = Math.abs(Math.sin(time * 15)) * 60 // ~2.4 Hz, chomp điên cuồng!
            setMouthAngle(angle)
            animationId = requestAnimationFrame(animateMouth)
        }
        animateMouth()

        return () => cancelAnimationFrame(animationId)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setPacmanPosition((prev) => {
                let newX = prev.x
                let newDirection = direction

                // Di chuyển theo hướng hiện tại
                if (direction === 'right') {
                    newX += 0.3
                    if (newX >= 95) {
                        newDirection = 'left'
                        setDirection('left')
                    }
                } else {
                    newX -= 0.3
                    if (newX <= 5) {
                        newDirection = 'right'
                        setDirection('right')
                    }
                }

                // Kiểm tra va chạm với tech icons
                techIcons.forEach((tech, index) => {
                    const distance = Math.abs(newX - tech.x)

                    if (distance < 3 && !eatenIcons.includes(index)) {
                        setEatenIcons((prev) => [...prev, index])

                        // Respawn sau 5 giây
                        setTimeout(() => {
                            setEatenIcons((prev) => prev.filter((i) => i !== index))
                        }, 5000)
                    }
                })

                return { x: newX, y: prev.y }
            })
        }, 30)

        return () => clearInterval(interval)
    }, [direction, eatenIcons])

    // Tính toán path cho Pacman body dựa trên mouthAngle - symmetric quanh trục hoành (30° up + 30° down khi max=60°)
    const cx = 32
    const cy = 32
    const r = 28
    const halfAngleRad = (mouthAngle / 2 * Math.PI / 180) // Nửa góc cho symmetric
    const upperThetaRad = -halfAngleRad // Upper: -30° (lên trên, sin âm)
    const lowerThetaRad = +halfAngleRad // Lower: +30° (xuống dưới, sin dương)
    const ux = cx + r * Math.cos(upperThetaRad)
    const uy = cy + r * Math.sin(upperThetaRad) // y nhỏ hơn cho up
    const lx = cx + r * Math.cos(lowerThetaRad)
    const ly = cy + r * Math.sin(lowerThetaRad) // y lớn hơn cho down
    const pacmanPath = `M${cx} ${cy} L${ux} ${uy} A${r} ${r} 0 1 0 ${lx} ${ly} Z` // Large arc=1, sweep=0 (cw) cho body fill

    return (
        <div className="relative w-full h-32 -mt-8 bg-gradient-to-b from-transparent via-black/20 to-transparent">
            <div className="relative w-full h-full max-w-7xl mx-auto">
                {/* Background line */}
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/10" />

                {/* Dots trail */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
                    <div className="flex justify-around items-center px-8">
                        {[...Array(30)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-yellow-300/60 rounded-full shadow-lg shadow-yellow-300/30"
                                style={{
                                    width: window.innerWidth < 640 ? '6px' : '8px',
                                    height: window.innerWidth < 640 ? '6px' : '8px',
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Pacman - Side View */}
                <div
                    className="absolute z-10"
                    style={{
                        left: `${pacmanPosition.x}%`,
                        top: '50%',
                        transform: `
    translate(-50%, -50%)
    scale(${window.innerWidth < 640 ? 0.6 : 1})
    ${direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)'}
  `,
                    }}

                >
                    <svg width="64" height="64" viewBox="0 0 64 64" className="drop-shadow-2xl">
                        {/* Pacman body - Path động: full circle khi angle=0, mở symmetric khi angle>0 */}
                        <defs>
                            <radialGradient id="pacmanGradient">
                                <stop offset="0%" stopColor="#F7DF1E" />
                                <stop offset="100%" stopColor="#F7DF1E" />
                            </radialGradient>
                        </defs>

                        <path d={pacmanPath} fill="url(#pacmanGradient)" />

                        {/* Eye */}
                        <circle cx="24" cy="18" r="3" fill="#000" />

                        {/* Highlight on eye */}
                        <circle cx="25" cy="17" r="1" fill="#fff" opacity="0.8" />
                    </svg>
                </div>

                {/* Tech Icons */}
                {techIcons.map((tech, index) => {
                    const isEaten = eatenIcons.includes(index)

                    return (
                        <div
                            key={tech.name}
                            className="absolute transition-all duration-300"
                            style={{
                                left: `${tech.x}%`,
                                top: '50%',
                                transform: `
      translate(-50%, -50%)
      scale(${isEaten ? 0 : window.innerWidth < 640 ? 0.65 : 1})
    `,
                                opacity: isEaten ? 0 : 1,
                            }}
                        >

                            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center shadow-xl">
                                <img
                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
                                    alt={tech.name}
                                    className="w-9 h-9"
                                    onError={(e) => {
                                        e.target.style.display = 'none'
                                    }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}