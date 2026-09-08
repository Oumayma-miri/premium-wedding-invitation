import { useState } from "react"
import { FiCheck } from "react-icons/fi"
import { motion } from "motion/react"

const initialForm = { name: "", attendance: "yes", guests: "1", dietary: "", message: "" }

function RSVP({ rsvp }) {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-[#F3E9DC] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]">A little note from you</p>
          <h2 className="mt-4 font-script text-6xl text-[var(--color-primary)] md:text-8xl">{rsvp.title}</h2>
        </div>
        {submitted ? (
          <div className="mt-12 border border-[var(--color-accent)]/40 bg-[var(--color-background)] p-10 text-center">
            <FiCheck className="mx-auto text-3xl text-[var(--color-accent)]" aria-hidden="true" />
            <p className="mt-5 font-display text-2xl text-[var(--color-primary)]">Thank you, {form.name}.</p>
            <p className="mt-3 text-sm text-[var(--color-text)]/70">Your response has been received with love.</p>
          </div>
        ) : (
          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="mt-12 space-y-5 bg-[var(--color-background)] p-6 md:p-10">
            <label className="block text-sm text-[var(--color-text)]">Your name *<input required name="name" value={form.name} onChange={updateField} className="mt-2 w-full border-b border-[var(--color-accent)]/50 bg-transparent px-1 py-3 outline-none focus:border-[var(--color-primary)]" /></label>
            <fieldset>
              <legend className="text-sm text-[var(--color-text)]">Will you celebrate with us? *</legend>
              <div className="mt-3 flex flex-wrap gap-5 text-sm text-[var(--color-text)]/80">
                <label><input type="radio" name="attendance" value="yes" checked={form.attendance === "yes"} onChange={updateField} className="mr-2 accent-[var(--color-primary)]" />Joyfully attending</label>
                <label><input type="radio" name="attendance" value="no" checked={form.attendance === "no"} onChange={updateField} className="mr-2 accent-[var(--color-primary)]" />Unable to attend</label>
              </div>
            </fieldset>
            {form.attendance === "yes" && <label className="block text-sm text-[var(--color-text)]">Number of guests<input required min="1" max="10" type="number" name="guests" value={form.guests} onChange={updateField} className="mt-2 w-full border-b border-[var(--color-accent)]/50 bg-transparent px-1 py-3 outline-none focus:border-[var(--color-primary)]" /></label>}
            <label className="block text-sm text-[var(--color-text)]">Dietary notes <input name="dietary" value={form.dietary} onChange={updateField} className="mt-2 w-full border-b border-[var(--color-accent)]/50 bg-transparent px-1 py-3 outline-none focus:border-[var(--color-primary)]" /></label>
            <label className="block text-sm text-[var(--color-text)]">A message for the couple <textarea name="message" value={form.message} onChange={updateField} rows="3" className="mt-2 w-full resize-none border-b border-[var(--color-accent)]/50 bg-transparent px-1 py-3 outline-none focus:border-[var(--color-primary)]" /></label>
            <button type="submit" className="w-full bg-[var(--color-primary)] px-5 py-4 text-xs uppercase tracking-[0.25em] text-[var(--color-background)] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]">{rsvp.buttonLabel}</button>
          </motion.form>
        )}
      </div>
    </section>
  )
}

export default RSVP
