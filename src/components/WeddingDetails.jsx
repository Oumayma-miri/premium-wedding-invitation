import { FiCalendar, FiClock } from "react-icons/fi"
import { motion } from "motion/react"

function WeddingDetails({ details }) {
  const events = [details.ceremony, details.reception].filter(Boolean)

  return (
    <section className="bg-[#F3E9DC] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]">The celebration</p>
          <h2 className="mt-4 font-script text-6xl text-[var(--color-primary)] md:text-8xl">Wedding details</h2>
        </motion.div>
        <div className="mt-14 grid gap-px overflow-hidden border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/30 md:grid-cols-2">
          {events.map((event) => (
            <article key={event.title} className="bg-[#F3E9DC] p-8 md:p-10">
              <h3 className="font-display text-2xl text-[var(--color-primary)]">{event.title}</h3>
              <div className="mt-6 space-y-4 text-sm text-[var(--color-text)]/75">
                <p className="flex items-center gap-3"><FiCalendar className="text-[var(--color-accent)]" aria-hidden="true" />{event.date || details.date}</p>
                <p className="flex items-center gap-3"><FiClock className="text-[var(--color-accent)]" aria-hidden="true" />{event.time}</p>
                <p className="pt-2 leading-relaxed">{event.venue}<br />{event.address}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeddingDetails
