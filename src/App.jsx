import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

import Envelope from "./components/Envelope"
import Hero from "./components/Hero"
import Story from "./components/Story"
import Countdown from "./components/Countdown"
import Location from "./components/Location"
import WeddingDetails from "./components/WeddingDetails"
import DressCode from "./components/DressCode"
import RSVP from "./components/RSVP"
import Wishes from "./components/Wishes"
import FinalSection from "./components/FinalSection"
import { wedding } from "./data/wedding"

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false)

  return (
    <main
      className="min-h-screen bg-[var(--color-background)]"
      style={{
        "--color-primary": wedding.colors.primary,
        "--color-background": wedding.colors.background,
        "--color-text": wedding.colors.text,
        "--color-accent": wedding.colors.accent,
      }}
    >

      <AnimatePresence mode="wait">

        {!invitationOpened && wedding.sections.envelope ? (
          <motion.div
            key="envelope"
            exit={{
              opacity: 0,
              scale: 1.03,
              filter: "blur(8px)",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <Envelope
              wedding={wedding}
              onOpen={() => setInvitationOpened(true)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="wedding"
            initial={{
              opacity: 0,
              scale: 1.02,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
          >
            {wedding.sections.hero && <Hero wedding={wedding} />}

            {wedding.sections.story && <Story story={wedding.story} />}

            {wedding.sections.countdown && <Countdown targetDate={wedding.dateTime} />}

            {wedding.sections.location && <Location location={wedding.locationDetails} />}

            {wedding.sections.details && <WeddingDetails details={wedding.details} />}

            {wedding.sections.dressCode && <DressCode dressCode={wedding.dressCode} />}

            {wedding.sections.rsvp && <RSVP rsvp={wedding.rsvp} />}

            {wedding.sections.wishes && <Wishes wishes={wedding.wishes} />}

            {wedding.sections.final && <FinalSection wedding={wedding} />}
          </motion.div>
        )}

      </AnimatePresence>

    </main>
  )
}

export default App