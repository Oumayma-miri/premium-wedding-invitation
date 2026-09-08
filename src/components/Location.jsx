import { FiMapPin, FiNavigation } from "react-icons/fi"
import { motion } from "motion/react"

function Location({ location }) {
  return (
    <section className="bg-[var(--color-background)] px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center gap-3 text-[var(--color-accent)]">
            <FiMapPin aria-hidden="true" />
            <p className="text-xs uppercase tracking-[0.3em]">Find us there</p>
          </div>
          <h2 className="mt-5 font-display text-4xl text-[var(--color-primary)] md:text-5xl">
            {location.venue}
          </h2>
          <p className="mt-5 leading-relaxed text-[var(--color-text)]/75">
            {location.address}
          </p>
          {location.description && (
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text)]/65">
              {location.description}
            </p>
          )}
          <a
            href={location.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 border border-[var(--color-primary)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          >
            <FiNavigation aria-hidden="true" />
            Get directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="aspect-[4/3] overflow-hidden border border-[var(--color-accent)]/30 bg-[#EDE1D2]"
        >
          <iframe
            title={`Map showing ${location.venue}`}
            src={location.mapEmbedUrl}
            loading="lazy"
            className="h-full w-full border-0 grayscale-[30%]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Location
