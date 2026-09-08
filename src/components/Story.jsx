import { motion } from "motion/react"

function Story({ story }) {
  return (
    <section className="relative overflow-hidden bg-[#F3E9DC] px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]">
            A chapter written together
          </p>
          <h2 className="mt-4 font-script text-6xl leading-none text-[var(--color-primary)] md:text-8xl">
            {story.title}
          </h2>
          <div className="mt-8 h-px w-16 bg-[var(--color-accent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-xl"
        >
          <p className="font-display text-xl leading-relaxed text-[var(--color-text)] md:text-2xl">
            {story.text}
          </p>

          {story.timeline?.length > 0 && (
            <ol className="mt-12 border-l border-[var(--color-accent)]/40">
              {story.timeline.map((moment) => (
                <li key={`${moment.date}-${moment.title}`} className="relative pl-7 pb-9 last:pb-0">
                  <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-accent)]">
                    {moment.date}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-[var(--color-primary)]">
                    {moment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]/75">
                    {moment.description}
                  </p>
                </li>
              ))}
            </ol>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Story
