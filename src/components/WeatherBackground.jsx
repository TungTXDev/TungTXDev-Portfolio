import { useWeather } from '@/contexts/WeatherContext'

const WeatherBackground = ({ children }) => {
    const { weather, loading, theme } = useWeather()

    console.log('Current theme:', theme)

    // Theme styles
    const themes = {
        default: {
            background: 'bg-[#1e1e1e]',
            overlay: '',
            particles: null
        },
        sunny: {
            background: 'bg-gradient-to-br from-orange-900/20 via-[#1e1e1e] to-yellow-900/20',
            overlay: 'bg-gradient-to-t from-transparent via-yellow-500/5 to-transparent',
            particles: '☀️'
        },
        cloudy: {
            background: 'bg-gradient-to-br from-gray-800/30 via-[#1e1e1e] to-gray-700/30',
            overlay: 'bg-gradient-to-t from-transparent via-gray-500/5 to-transparent',
            particles: '☁️'
        },
        rainy: {
            background: 'bg-gradient-to-br from-blue-900/30 via-[#1e1e1e] to-cyan-900/30',
            overlay: 'bg-gradient-to-t from-transparent via-blue-500/10 to-transparent',
            particles: '🌧️'
        },
        stormy: {
            background: 'bg-gradient-to-br from-purple-900/30 via-[#1e1e1e] to-indigo-900/30',
            overlay: 'bg-gradient-to-t from-transparent via-purple-500/10 to-transparent',
            particles: '⚡'
        },
        snowy: {
            background: 'bg-gradient-to-br from-cyan-900/20 via-[#1e1e1e] to-blue-900/20',
            overlay: 'bg-gradient-to-t from-transparent via-cyan-500/5 to-transparent',
            particles: '❄️'
        },
        foggy: {
            background: 'bg-gradient-to-br from-gray-700/20 via-[#1e1e1e] to-gray-600/20',
            overlay: 'bg-gradient-to-t from-transparent via-gray-400/10 to-transparent',
            particles: '🌫️'
        }
    }

    const currentTheme = themes[theme] || themes.default

    // Render weather particles
    const renderWeatherParticles = () => {
        const particleCount = 50

        switch (theme) {
            case 'rainy':
                return (
                    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
                        {[...Array(particleCount)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-0.5 h-8 bg-gradient-to-b from-blue-400/60 to-transparent animate-rain"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `-${Math.random() * 20}%`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${0.5 + Math.random() * 0.5}s`
                                }}
                            />
                        ))}
                    </div>
                )

            case 'snowy':
                return (
                    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
                        {[...Array(particleCount)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 bg-white rounded-full opacity-80 animate-snow"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `-${Math.random() * 20}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${3 + Math.random() * 4}s`
                                }}
                            />
                        ))}
                    </div>
                )

            case 'stormy':
                return (
                    <>
                        {/* Rain */}
                        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
                            {[...Array(30)].map((_, i) => (
                                <div
                                    key={`rain-${i}`}
                                    className="absolute w-0.5 h-12 bg-gradient-to-b from-blue-300/70 to-transparent animate-rain"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `-${Math.random() * 20}%`,
                                        animationDelay: `${Math.random() * 2}s`,
                                        animationDuration: `${0.3 + Math.random() * 0.3}s`
                                    }}
                                />
                            ))}
                        </div>
                        {/* Lightning bolts */}
                        <div className="fixed inset-0 pointer-events-none z-20 overflow-visible">
                            {[...Array(3)].map((_, i) => (
                                <svg
                                    key={`bolt-${i}`}
                                    className="absolute animate-lightning-bolt"
                                    style={{
                                        left: `${20 + i * 30}%`,
                                        top: '-20px',
                                        width: '80px',
                                        height: '300px',
                                        animationDelay: `${i * 1.3}s`,
                                        filter: 'drop-shadow(0 0 10px rgba(250, 204, 21, 0.8))'
                                    }}
                                    viewBox="0 0 30 120"
                                    fill="none"
                                    preserveAspectRatio="xMidYMin meet"
                                >
                                    <path
                                        d="M15 5 L10 50 L18 50 L12 115 L25 55 L17 55 L22 5 Z"
                                        fill="#fbbf24"
                                        stroke="#fcd34d"
                                        strokeWidth="0.8"
                                    />
                                </svg>
                            ))}
                        </div>
                        {/* Lightning flash - dimmed */}
                        <div className="fixed inset-0 pointer-events-none z-30">
                            <div className="absolute inset-0 bg-yellow-200/30 animate-lightning" />
                        </div>
                    </>
                )

            case 'cloudy':
                return (
                    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute text-6xl opacity-20 animate-float-cloud"
                                style={{
                                    left: `${-10 + Math.random() * 120}%`,
                                    top: `${Math.random() * 80}%`,
                                    animationDelay: `${Math.random() * 10}s`,
                                    animationDuration: `${20 + Math.random() * 15}s`
                                }}
                            >
                                ☁️
                            </div>
                        ))}
                    </div>
                )

            case 'sunny':
                return (
                    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
                        {/* Sun with rays */}
                        <div className="absolute w-64 h-64" style={{ top: '2rem', left: '2rem' }}>
                            {/* Outer glow */}
                            <div className="absolute inset-0 bg-yellow-300/20 rounded-full blur-3xl animate-pulse-slow" />
                            {/* Sun rays */}
                            <div className="absolute inset-0">
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 w-1 h-32 bg-gradient-to-t from-yellow-400/60 to-transparent origin-bottom"
                                        style={{
                                            transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                                        }}
                                    />
                                ))}
                            </div>
                            {/* Sun body */}
                            <div className="absolute inset-8 bg-yellow-400/50 rounded-full animate-pulse-slow" />
                            <div className="absolute inset-12 bg-yellow-300/60 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                            <div className="absolute inset-16 bg-yellow-200/70 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
                            <div className="absolute inset-20 bg-yellow-100/80 rounded-full" />
                            {/* Center bright core */}
                            <div className="absolute inset-24 bg-white/90 rounded-full blur-sm" />
                        </div>
                    </div>
                )

            case 'foggy':
                return (
                    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-full h-32 bg-gradient-to-r from-transparent via-gray-400/10 to-transparent animate-fog"
                                style={{
                                    top: `${i * 20}%`,
                                    animationDelay: `${i * 2}s`,
                                    animationDuration: `${15 + Math.random() * 10}s`
                                }}
                            />
                        ))}
                    </div>
                )

            default:
                return null
        }
    }

    if (loading) {
        return <div className="min-h-screen bg-[#1e1e1e]">{children}</div>
    }

    return (
        <div className={`min-h-screen relative transition-all duration-1000 ${currentTheme.background}`}>
            {/* Weather overlay */}
            {currentTheme.overlay && (
                <div className={`fixed inset-0 pointer-events-none ${currentTheme.overlay} transition-opacity duration-1000`} />
            )}

            {/* Weather particles */}
            {renderWeatherParticles()}

            {/* Weather indicator */}
            {weather && (
                <div className="fixed top-32 right-6 z-40 hidden sm:flex items-center gap-2 px-3 py-2 bg-black/30 backdrop-blur-md rounded-full border border-white/10">
                    <span className="text-2xl">{currentTheme.particles}</span>
                    <div className="text-xs text-white/70">
                        <div className="font-semibold">Hanoi, {Math.round(weather.tempMax)}°C</div>
                        <div className="text-white/50 capitalize">{theme}</div>
                    </div>
                </div>
            )}

            {children}
        </div>
    )
}

export default WeatherBackground
