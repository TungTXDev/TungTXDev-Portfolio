import { useState } from 'react'
import { Gamepad2 } from 'lucide-react'
import MeteorGame from './MeteorGame'

const GameButton = () => {
    const [showGame, setShowGame] = useState(false)

    return (
        <>
            <button
                onClick={() => setShowGame(true)}
                className="group fixed bottom-24 right-5 z-40 transition-all duration-300 hover:scale-110"
                aria-label="Play Game"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Button */}
                <div className="relative w-16 h-16 rounded-full backdrop-blur-md bg-black/40 border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Gamepad2 className="w-7 h-7 text-white/70 group-hover:text-white transition-colors relative z-10 group-hover:rotate-12 transition-transform" />
                </div>
            </button>

            {showGame && <MeteorGame onClose={() => setShowGame(false)} />}
        </>
    )
}

export default GameButton
