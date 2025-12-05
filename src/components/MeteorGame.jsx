import { useState, useEffect, useRef } from "react";
import { RotateCcw } from "lucide-react";

const MeteorGame = ({ onClose }) => {
  const [gameState, setGameState] = useState("ready");
  const [score, setScore] = useState(0);
  const [playerX, setPlayerX] = useState(50);
  const [meteors, setMeteors] = useState([]);
  const [speed, setSpeed] = useState(2);
  const gameLoopRef = useRef(null);
  const keysPressed = useRef({});
  const containerRef = useRef(null);

  const PLAYER_SIZE = 90;
  const METEOR_SIZE = 35;
  const [playerTilt, setPlayerTilt] = useState(0);

  const startGame = () => {
    setGameState("playing");
    setScore(0);
    setPlayerX(50);
    setMeteors([]);
    setSpeed(2);
  };

  const resetGame = () => {
    setGameState("ready");
    setScore(0);
    setPlayerX(50);
    setMeteors([]);
    setSpeed(2);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        keysPressed.current[e.key] = true;
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        keysPressed.current[e.key] = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (gameState !== "playing" || !containerRef.current) return;

    const GAME_WIDTH = containerRef.current.offsetWidth;
    const GAME_HEIGHT = 500;

    gameLoopRef.current = setInterval(() => {
      setPlayerX((prev) => {
        let newX = prev;
        let tilt = 0;
        if (keysPressed.current["ArrowLeft"]) {
          newX = Math.max(0, prev - 3);
          tilt = -15;
        }
        if (keysPressed.current["ArrowRight"]) {
          newX = Math.min(100 - (PLAYER_SIZE / GAME_WIDTH) * 100, prev + 3);
          tilt = 15;
        }
        setPlayerTilt(tilt);
        return newX;
      });

      setMeteors((prev) => {
        const updated = prev
          .map((meteor) => ({
            ...meteor,
            y: meteor.y + speed,
          }))
          .filter((meteor) => meteor.y < 100);

        if (Math.random() < 0.02) {
          updated.push({
            id: Date.now() + Math.random(),
            x: Math.random() * (100 - (METEOR_SIZE / GAME_WIDTH) * 100),
            y: -10,
          });
        }

        return updated;
      });

      setMeteors((currentMeteors) => {
        setPlayerX((currentPlayerX) => {
          const playerLeft = (currentPlayerX / 100) * GAME_WIDTH;
          const playerRight = playerLeft + PLAYER_SIZE;
          const playerTop = GAME_HEIGHT - PLAYER_SIZE - 20;
          const playerBottom = GAME_HEIGHT - 20;

          for (const meteor of currentMeteors) {
            const meteorLeft = (meteor.x / 100) * GAME_WIDTH;
            const meteorRight = meteorLeft + METEOR_SIZE;
            const meteorTop = (meteor.y / 100) * GAME_HEIGHT;
            const meteorBottom = meteorTop + METEOR_SIZE;

            if (
              playerLeft < meteorRight &&
              playerRight > meteorLeft &&
              playerTop < meteorBottom &&
              playerBottom > meteorTop
            ) {
              setGameState("gameOver");
            }
          }
          return currentPlayerX;
        });
        return currentMeteors;
      });

      setScore((prev) => prev + 1);
      if (score % 500 === 0 && score > 0) {
        setSpeed((prev) => prev + 0.5);
      }
    }, 1000 / 60);

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameState, speed, score]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div
        className="relative bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden"
        style={{ maxWidth: "1200px", width: "100%" }}
      >
        {/* VS Code Mac Title Bar */}
        <div className="h-12 bg-[#323233] flex items-center px-4 border-b border-[#2d2d30]">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors group relative"
              title="Close"
            >
              <span className="absolute inset-0 flex items-center justify-center text-[8px] text-[#4d0000] opacity-0 group-hover:opacity-100">
                ✕
              </span>
            </button>
            <button className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors" />
            <button className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors" />
          </div>

          <div className="flex-1 text-center">
            <span className="text-[#cccccc] text-sm font-medium">
              🎮 Meteor Dodge
            </span>
          </div>

          <div className="w-[52px]"></div>
        </div>

        {/* VS Code Tab Bar */}
        <div className="h-9 bg-[#252526] flex items-center border-b border-[#2d2d30]">
          <div className="px-4 h-full flex items-center bg-[#1e1e1e] border-r border-[#2d2d30] text-[#cccccc] text-sm">
            <span className="mr-2">🎮</span>
            <span>Game.jsx</span>
          </div>
        </div>

        {/* Game canvas */}
        <div className="p-4 bg-[#1e1e1e]">
          <div
            ref={containerRef}
            className="relative bg-gradient-to-b from-indigo-950 to-purple-950 rounded-lg overflow-hidden"
            style={{ width: "100%", height: "500px" }}
          >
            {/* Stars background */}
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5 + 0.3,
                  }}
                />
              ))}
            </div>

            {gameState === "playing" && (
              <>
                {/* Player - Avatar */}
                <div className="absolute top-4 left-4 text-white text-2xl font-bold drop-shadow-lg z-20">
                  Score: {score}
                </div>

                <div
                  className="absolute bottom-5 rounded-full shadow-lg shadow-blue-500/50 transition-all duration-100 overflow-hidden border-3 border-blue-400"
                  style={{
                    left: `${playerX}%`,
                    width: PLAYER_SIZE,
                    height: PLAYER_SIZE,
                    transform: `rotate(${playerTilt}deg)`,
                  }}
                >
                  <img
                    src="/images/avatar.png"
                    alt="Player"
                    className="w-full h-full object-contain scale-160 translate-y-5"
                  />
                </div>

                {/* Meteors */}
                {meteors.map((meteor) => (
                  <div
                    key={meteor.id}
                    className="absolute bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-lg shadow-orange-500/50"
                    style={{
                      left: `${meteor.x}%`,
                      top: `${meteor.y}%`,
                      width: METEOR_SIZE,
                      height: METEOR_SIZE,
                    }}
                  >
                    <div className="absolute inset-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full" />
                  </div>
                ))}
              </>
            )}

            {/* Ready screen */}
            {gameState === "ready" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg shadow-purple-500/50 flex items-center justify-center">
                    <img
                      src="/images/avatar.png"
                      alt="Player"
                      className="w-full h-full object-contain scale-160 translate-y-15"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    Meteor Dodge
                  </h3>
                  <p className="text-white/80 max-w-xs mb-4">
                    Dodge the falling meteors!
                  </p>
                  {/* Arrow keys instruction */}
                  <div className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl border border-purple-500/30">
                    <span className="text-white/70 text-sm">Press</span>
                    <kbd className="px-3 py-2 bg-white/10 rounded-lg text-white text-lg font-mono border border-white/20">
                      ←
                    </kbd>
                    <kbd className="px-3 py-2 bg-white/10 rounded-lg text-white text-lg font-mono border border-white/20">
                      →
                    </kbd>
                    <span className="text-white/70 text-sm">to move</span>
                  </div>
                  <button
                    onClick={startGame}
                    className="px-8 py-3 bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    Start Game
                  </button>
                </div>
              </div>
            )}

            {/* Game over screen */}
            {gameState === "gameOver" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                <div className="text-center space-y-6 max-w-md px-4">
                  <div className="text-6xl">💥</div>
                  <h3 className="text-3xl font-bold text-red-500">
                    Game Over!
                  </h3>
                  <div className="text-white">
                    <div className="text-5xl font-bold mb-2">{score}</div>
                    <div className="text-white/60">Final Score</div>
                  </div>
                  <div className="text-2xl font-bold text-yellow-400 animate-pulse">
                    Thua rồi thì tuyển em đi 😭
                  </div>
                  <button
                    onClick={resetGame}
                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Play Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeteorGame;
