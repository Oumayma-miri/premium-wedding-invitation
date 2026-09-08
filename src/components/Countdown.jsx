import { useEffect, useState } from "react"
import { motion } from "motion/react"

const labels = [
  ["days", "Days"],
  ["hours", "Hours"],
  ["minutes", "Minutes"],
  ["seconds", "Seconds"],
]

function getRemainingTime(targetDate) {
  const difference = Math.max(0, new Date(targetDate).getTime() - Date.now())

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function Countdown({ targetDate }) {
  const [remaining, setRemaining] = useState(() => getRemainingTime(targetDate))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining(getRemainingTime(targetDate))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [targetDate])

  return (
    <section className="bg-[var(--color-primary)] px-6 py-20 text-[var(--color-background)] md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.35em] text-[var(--color-background)]/70"
        >
          Until we say I do
        </motion.p>
        <h2 className="mt-4 font-script text-6xl md:text-8xl">The countdown</h2>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {labels.map(([key, label]) => (
            <div key={key} className="border border-[var(--color-background)]/25 px-3 py-5 md:px-6 md:py-7">
              <p className="font-display text-4xl md:text-6xl">
                {String(remaining[key]).padStart(2, "0")}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[var(--color-background)]/70">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Countdown
