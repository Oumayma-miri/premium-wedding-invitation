import { motion } from "motion/react"
import FloatingDecor from "./FloatingDecor"

function Hero({ wedding }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF8F0] px-6 py-20">
      <FloatingDecor />

      {/* Background decorations */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#800020]/5 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#D4A017]/10 blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">

        {/* Small introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-10 text-xs font-medium uppercase tracking-[0.5em] text-[#6F4E37] md:text-sm"
        >
          We are getting married
        </motion.p>


        {/* Couple */}
        <div className="flex items-center justify-center gap-6 md:gap-16">

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center"
          >

            <div className="relative">

              <div className="h-40 w-28 overflow-hidden rounded-t-full border-2 border-[#D4A017]/40 p-1 md:h-64 md:w-44">
                <img
                  src={wedding.bride.photo}
                  alt={`${wedding.bride.name} portrait`}
                  className="h-full w-full rounded-t-full object-cover"
                />
              </div>

            </div>

            <h1 className="mt-5 font-script text-5xl text-[#800020] md:text-7xl">
              {wedding.bride.name}
            </h1>

          </motion.div>


          {/* Ampersand */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12 font-display text-4xl italic text-[#D4A017] md:text-6xl"
          >
            &
          </motion.div>


          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center"
          >

            <div className="relative">

              <div className="h-40 w-28 overflow-hidden rounded-t-full border-2 border-[#D4A017]/40 p-1 md:h-64 md:w-44">
                <img
                  src={wedding.groom.photo}
                  alt={`${wedding.groom.name} portrait`}
                  className="h-full w-full rounded-t-full object-cover"
                />
              </div>

            </div>

            <h1 className="mt-5 font-script text-5xl text-[#800020] md:text-7xl">
              {wedding.groom.name}
            </h1>

          </motion.div>

        </div>


        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 text-center"
        >

          <div className="mx-auto mb-5 h-px w-20 bg-[#D4A017]" />

          <p className="font-display text-xl tracking-wide text-[#6F4E37]">
            {wedding.date}
          </p>

          <p className="mt-2 text-sm tracking-wide text-[#6F4E37]/70">
            {wedding.location}
          </p>

        </motion.div>


        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute -bottom-16 text-xs uppercase tracking-[0.3em] text-[#6F4E37]/70"
        >
          Scroll to discover
        </motion.div>

      </div>

    </section>
  )
}

export default Hero