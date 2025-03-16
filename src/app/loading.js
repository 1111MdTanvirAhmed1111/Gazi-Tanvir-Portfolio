"use client"



import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useRouter } from "next/navigation"

export default function Loading() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [particlesLoaded, setParticlesLoaded] = useState(false)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [easterEggPosition, setEasterEggPosition] = useState({ x: 0, y: 0 })
  const router = useRouter()
  const audioRef = useRef(null)
  const logoControls = useAnimation()

  // Initialize particles engine
  useEffect(() => {
    const initEngine = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine)
      })
      setParticlesLoaded(true)
    }
    initEngine()
  }, [])

  // Simulate loading progress
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 3
          if (newProgress >= 100) {
            clearInterval(interval)
            setTimeout(() => {
              setLoading(false)
            }, 500)
            return 100
          }
          return newProgress
        })
      }, 150)

      return () => clearInterval(interval)
    }
  }, [loading])

  // Logo animation
  useEffect(() => {
    const sequence = async () => {
      await logoControls.start({
        scale: [0.8, 1.1, 1],
        opacity: [0, 0.8, 1],
        rotate: [0, 10, 0],
        transition: { duration: 1.5, ease: "easeInOut" },
      })

      await logoControls.start({
        y: [0, -5, 0],
        transition: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        },
      })
    }

    sequence()
  }, [logoControls])

  // Audio setup
  useEffect(() => {
    audioRef.current = new Audio("/loading-sound.mp3")
    audioRef.current.volume = 0.2
    audioRef.current.loop = true

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  // Handle audio play on user interaction
  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.log("Audio play failed:", err))
    }
  }

  // Easter egg handler
  const handleEasterEgg = (e) => {
    setEasterEggPosition({ x: e.clientX, y: e.clientY })
    setShowEasterEgg(true)
    setTimeout(() => setShowEasterEgg(false), 3000)
  }

  // Particles configuration
  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      color: {
        value: "#00FFFF",
      },
      links: {
        color: "#0077B6",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }

  // Redirect after loading completes
  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => {
        router.push("/home")
      }, 1500)

      return () => clearTimeout(timeout)
    }
  }, [loading, router])

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#1A1A2E]"
      onClick={handlePlayAudio}
      onMouseMove={(e) => {
        // Make particles follow mouse subtly
        const particles = document.getElementById("tsparticles")
        if (particles) {
          particles.style.transform = `translate(${e.clientX * 0.01}px, ${e.clientY * 0.01}px)`
        }
      }}
    >
      {/* Particles Background */}
      {particlesLoaded && (
        <div id="tsparticles" className="absolute inset-0 transition-transform duration-1000">
          <Particles id="tsparticles" options={particlesOptions} className="h-full w-full" />
        </div>
      )}

      {/* Main Loading Content */}
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo Animation */}
            <div className="relative mb-8">
              <motion.div className="relative z-10" animate={logoControls}>
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  className="drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]"
                >
                  <motion.path
                    d="M60 10 L110 40 L110 80 L60 110 L10 80 L10 40 Z"
                    stroke="#00FFFF"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: 1,
                      filter: "drop-shadow(0 0 8px #00FFFF)",
                    }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.text
                    x="60"
                    y="65"
                    textAnchor="middle"
                    fill="#00FFFF"
                    fontSize="28"
                    fontFamily="monospace"
                    fontWeight="bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    style={{ filter: "drop-shadow(0 0 5px #00FFFF)" }}
                  >
                    JS
                  </motion.text>
                </svg>
              </motion.div>

              {/* Circular Progress Bar */}
              <motion.div
                className="absolute inset-0 -z-10"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#0A192F" strokeWidth="4" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#00FFFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="339.292"
                    strokeDashoffset={339.292 - (339.292 * progress) / 100}
                    initial={{ strokeDashoffset: 339.292 }}
                    animate={{ strokeDashoffset: 339.292 - (339.292 * progress) / 100 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ filter: "drop-shadow(0 0 5px rgba(0,255,255,0.7))" }}
                  />
                </svg>
              </motion.div>
            </div>

            {/* Progress Text */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h1
                className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 font-['Orbitron']"
                style={{ textShadow: "0 0 10px rgba(0,255,255,0.5)" }}
              >
                Loading Developer&apos;s World
              </h1>

              <div className="h-8 font-mono text-cyan-400 text-sm md:text-base">
                <TypeAnimation
                  sequence={[
                    "Powered by MERN Stack",
                    2000,
                    "MongoDB • Express • React • Node.js",
                    2000,
                    "Building the Future",
                    2000,
                    "Crafting Your Experience",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  style={{ display: "inline-block" }}
                />
              </div>
            </motion.div>

            {/* Code Animation */}
            <motion.div
              className="w-64 h-16 bg-[#112240] rounded-md p-2 overflow-hidden font-mono text-xs border border-cyan-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  "> initializing components...",
                  1000,
                  "> connecting to database...",
                  1000,
                  "> loading portfolio data...",
                  1000,
                  "> optimizing experience...",
                  1000,
                  `> progress: ${Math.floor(progress)}%`,
                  500,
                ]}
                wrapper="div"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                style={{ color: "#00FFFF" }}
              />
            </motion.div>

            {/* Progress Percentage */}
            <motion.div
              className="mt-4 text-cyan-300 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {Math.floor(progress)}% Complete
            </motion.div>

            {/* Sound Toggle Button */}
            <motion.button
              className="absolute bottom-4 right-4 text-cyan-400 text-xs border border-cyan-800 rounded-full px-3 py-1 hover:bg-cyan-900/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation()
                if (audioRef.current) {
                  if (audioRef.current.paused) {
                    audioRef.current.play()
                  } else {
                    audioRef.current.pause()
                  }
                }
              }}
            >
              Toggle Sound
            </motion.button>

            {/* Easter Egg */}
            <AnimatePresence>
              {showEasterEgg && (
                <motion.div
                  className="absolute bg-cyan-900/80 text-cyan-300 p-2 rounded-md text-xs font-mono border border-cyan-700 z-50"
                  style={{
                    left: easterEggPosition.x,
                    top: easterEggPosition.y,
                    transform: "translate(-50%, -120%)",
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Did you know? The MERN stack powers over 30% of modern web applications!
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hidden Easter Egg Trigger Areas */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full cursor-help" onClick={handleEasterEgg} />
            <div
              className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full cursor-help"
              onClick={handleEasterEgg}
            />
          </motion.div>
        ) : (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl font-bold text-cyan-300 font-['Orbitron']"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              style={{ textShadow: "0 0 15px rgba(0,255,255,0.7)" }}
            >
              Welcome to My Portfolio
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

