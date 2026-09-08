import { motion } from "motion/react"

const butterflies = [
  {
    id: 1,
    left: "8%",
    top: "18%",
    size: "text-xl",
    duration: 6,
    delay: 0,
  },
  {
    id: 2,
    left: "86%",
    top: "24%",
    size: "text-2xl",
    duration: 7,
    delay: 1,
  },
  {
    id: 3,
    left: "15%",
    top: "72%",
    size: "text-lg",
    duration: 8,
    delay: 2,
  },
  {
    id: 4,
    left: "80%",
    top: "70%",
    size: "text-xl",
    duration: 6.5,
    delay: 1.5,
  },
]

const petals = [
  { id: 1, left: "20%", top: "12%", delay: 0 },
  { id: 2, left: "72%", top: "15%", delay: 1.5 },
  { id: 3, left: "10%", top: "55%", delay: 2 },
  { id: 4, left: "90%", top: "48%", delay: 0.8 },
  { id: 5, left: "30%", top: "82%", delay: 2.5 },
  { id: 6, left: "65%", top: "85%", delay: 1 },
]

function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

      {/* Butterflies */}
      {butterflies.map((butterfly) => (
        <motion.div
          key={butterfly.id}
          className={`absolute ${butterfly.size} text-[#800020]/35`}
          style={{
            left: butterfly.left,
            top: butterfly.top,
          }}
          animate={{
            x: [0, 18, -10, 0],
            y: [0, -15, 8, 0],
            rotate: [-5, 8, -4, 0],
            opacity: [0.25, 0.6, 0.35, 0.25],
          }}
          transition={{
            duration: butterfly.duration,
            delay: butterfly.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🦋
        </motion.div>
      ))}

      {/* Rose petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-sm text-[#800020]/20"
          style={{
            left: petal.left,
            top: petal.top,
          }}
          animate={{
            y: [0, 25, 0],
            x: [0, 10, -5, 0],
            rotate: [0, 45, 90, 0],
            opacity: [0.15, 0.4, 0.2, 0.15],
          }}
          transition={{
            duration: 7,
            delay: petal.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ❧
        </motion.div>
      ))}

    </div>
  )
}

export default FloatingDecor