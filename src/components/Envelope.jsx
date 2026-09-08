import { motion } from "motion/react"
import { useState } from "react"

function Envelope({ wedding, onOpen }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    if (isOpen) return

    setIsOpen(true)

    setTimeout(() => {
      onOpen()
    }, 1800)
  }

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#FFF8F0]">

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A017]/8 blur-[100px]" />

      {/* Decorative particles */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-[20%] top-[25%] text-[#D4A017]/60"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-[20%] top-[30%] text-[#800020]/40"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute bottom-[25%] left-[25%] text-[#D4A017]/50"
      >
        ·
      </motion.div>


      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Top text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-10 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#6F4E37]/70">
            A little invitation
          </p>

          <p className="mt-3 font-script text-3xl text-[#800020]">
            awaits you
          </p>
        </motion.div>


        {/* Envelope */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          whileHover={!isOpen ? { y: -5 } : {}}
          className="relative h-52 w-80 cursor-pointer md:h-64 md:w-96"
          onClick={handleOpen}
        >

          {/* Invitation card */}
          <motion.div
            initial={{ y: 0 }}
            animate={isOpen ? { y: -180 } : { y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-3 z-10 flex h-48 w-64 -translate-x-1/2 items-center justify-center border border-[#D4A017]/20 bg-[#FFFCF8] shadow-xl md:h-56 md:w-72"
          >

            <div className="relative h-[90%] w-[88%] border border-[#D4A017]/30 p-5">

              <div className="flex h-full flex-col items-center justify-center">

                <p className="text-[8px] uppercase tracking-[0.35em] text-[#6F4E37]">
                  The Wedding Of
                </p>

                <p className="mt-4 font-script text-4xl text-[var(--color-primary)]">
                  {wedding.bride.name} & {wedding.groom.name}
                </p>

                <div className="mt-4 flex items-center gap-2 text-[#D4A017]">
                  <span className="h-px w-6 bg-[#D4A017]" />
                  <span className="text-xs">✦</span>
                  <span className="h-px w-6 bg-[#D4A017]" />
                </div>

              </div>

            </div>

          </motion.div>


          {/* Envelope body */}
          <div className="absolute inset-0 z-20 overflow-hidden rounded-sm border border-[#D4A017]/40 bg-[#F3E9DC] shadow-[0_20px_50px_rgba(111,78,55,0.15)]">

            {/* Inner lining */}
            <div className="absolute inset-2 border border-[#800020]/10" />

            {/* Left fold */}
            <div
              className="absolute bottom-0 left-0 h-full w-1/2 bg-[#EDE1D2]"
              style={{
                clipPath: "polygon(0 0, 100% 100%, 0 100%)",
              }}
            />

            {/* Right fold */}
            <div
              className="absolute bottom-0 right-0 h-full w-1/2 bg-[#EDE1D2]"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              }}
            />

          </div>


          {/* Flap */}
          <motion.div
            animate={
              isOpen
                ? { rotateX: 180 }
                : { rotateX: 0 }
            }
            transition={{ duration: 1 }}
            style={{
              transformOrigin: "top",
              transformStyle: "preserve-3d",
            }}
            className="absolute left-0 top-0 z-30 h-1/2 w-full border border-[#D4A017]/40 bg-[#F7EFE5]"
          >
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            />
          </motion.div>


          {/* Wax seal */}
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 1,
                type: "spring",
                stiffness: 180,
              }}
              whileHover={{ scale: 1.08 }}
              className="absolute left-1/2 top-1/2 z-40 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#D4A017]/30 bg-[#800020] font-script text-2xl text-[#FFF8F0] shadow-lg"
            >
              {wedding.bride.name.charAt(0)}
              <span className="mx-1 text-xs">&</span>
              {wedding.groom.name.charAt(0)}
            </motion.div>
          )}

        </motion.div>


        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 text-[10px] uppercase tracking-[0.35em] text-[#6F4E37]/60"
        >
          {isOpen ? "With love..." : "Click to open"}
        </motion.p>

      </div>

    </section>
  )
}

export default Envelope