import { FiSun } from "react-icons/fi"
import { motion } from "motion/react"

function DressCode({ dressCode }) {
  return (
    <section className="bg-[var(--color-background)] px-6 py-24 text-center md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-xl"
      >
        <FiSun className="mx-auto text-2xl text-[var(--color-accent)]" aria-hidden="true" />
        <p className="mt-5 text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]">Come dressed to celebrate</p>
        <h2 className="mt-4 font-display text-3xl text-[var(--color-primary)] md:text-4xl">{dressCode.title}</h2>
        <p className="mt-4 font-display text-xl italic text-[var(--color-text)]">{dressCode.value}</p>
        <p className="mt-5 text-sm leading-relaxed text-[var(--color-text)]/70">{dressCode.description}</p>
      </motion.div>
    </section>
  )
}

export default DressCode
