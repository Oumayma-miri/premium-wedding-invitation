import { useState } from "react"
import { motion } from "motion/react"

function Wishes({ wishes }) {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name.trim() || !message.trim()) return
    setSent(true)
  }

  return (
    <section className="bg-[var(--color-background)] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]">Words to keep forever</p>
        <h2 className="mt-4 font-script text-6xl text-[var(--color-primary)] md:text-8xl">{wishes.title}</h2>
        {sent ? (
          <p className="mt-10 font-display text-2xl text-[var(--color-primary)]">Thank you for your beautiful wishes.</p>
        ) : (
          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="mt-12 space-y-5 text-left">
            <label className="block text-sm text-[var(--color-text)]">Your name *<input required value={name} onChange={(event) => setName(event.target.value)} className="mt-2 w-full border-b border-[var(--color-accent)]/50 bg-transparent px-1 py-3 outline-none focus:border-[var(--color-primary)]" /></label>
            <label className="block text-sm text-[var(--color-text)]">Your message *<textarea required maxLength="500" value={message} onChange={(event) => setMessage(event.target.value)} rows="4" className="mt-2 w-full resize-none border-b border-[var(--color-accent)]/50 bg-transparent px-1 py-3 outline-none focus:border-[var(--color-primary)]" /></label>
            <button type="submit" className="border border-[var(--color-primary)] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]">{wishes.buttonLabel}</button>
          </motion.form>
        )}
      </div>
    </section>
  )
}

export default Wishes
