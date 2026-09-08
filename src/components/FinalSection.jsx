import { motion } from "motion/react"

function FinalSection({ wedding }) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] px-6 py-28 text-center text-[var(--color-background)] md:py-40">
      <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-background)]/70">Thank you for celebrating</p>
        <h2 className="mt-5 font-script text-7xl md:text-9xl">this moment with us</h2>
        <div className="mx-auto mt-10 h-px w-16 bg-[var(--color-accent)]" />
        <p className="mt-8 font-display text-2xl">{wedding.bride.name} & {wedding.groom.name}</p>
        <p className="mt-3 text-sm tracking-[0.2em] text-[var(--color-background)]/70">{wedding.date}</p>
      </motion.div>
    </section>
  )
}

export default FinalSection
