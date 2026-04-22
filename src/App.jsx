import { useState } from 'react'
import { motion } from 'motion/react'
import CaishenFigure from './components/CaishenFigure'
import DevotionBar from './components/DevotionBar'
import OfferingButton from './components/OfferingButton'
import BlessingReveal from './components/BlessingReveal'
import StatsScreen from './components/StatsScreen'
import { useDevotionState } from './hooks/useDevotionState'
import './index.css'

const OFFERINGS = [
  { key: 'coins',  emoji: '🪙', label: 'Coins' },
  { key: 'ingots', emoji: '🏅', label: 'Gold Ingots' },
  { key: 'joss',   emoji: '🪷', label: 'Joss Sticks' },
  { key: 'fruits', emoji: '🧺', label: 'Fruit Basket' },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function App() {
  const [showStats, setShowStats] = useState(false)

  const {
    devotionScore,
    stageInfo,
    nextThreshold,
    barProgress,
    streak,
    totalOfferings,
    todayOfferings,
    todayBlessingShown,
    pendingBlessing,
    giveOffering,
    markBlessingShown,
  } = useDevotionState()

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between px-4 relative overflow-hidden"
      style={{
        maxWidth: 390,
        margin: '0 auto',
        paddingTop: 'max(2rem, env(safe-area-inset-top))',
        paddingBottom: 'max(2rem, env(safe-area-inset-bottom))',
        background: 'radial-gradient(ellipse at 20% 10%, #fdf0cc 0%, #F5E6C8 45%, #ecd5a8 100%)',
      }}
    >
      {/* Atmospheric layered texture */}
      <div className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 80%, rgba(192,57,43,0.12) 0%, transparent 60%), radial-gradient(circle at 10% 90%, rgba(186,117,23,0.10) 0%, transparent 50%)',
        }}
      />

      <motion.header
        className="w-full flex items-center justify-between relative z-10"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div>
          <h1 className="text-3xl font-black tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#C0392B' }}>
            財神
          </h1>
          <p className="text-xs font-medium tracking-widest uppercase" style={{ color: '#7A4F0D' }}>Caishen · God of Fortune</p>
        </div>
        <motion.button
          onClick={() => setShowStats(true)}
          className="rounded-full flex items-center justify-center focus:outline-2 focus:outline-offset-2 focus:outline-[#C0392B]"
          style={{ backgroundColor: 'rgba(186,117,23,0.15)', width: 48, height: 48, fontSize: 22, border: '1.5px solid rgba(186,117,23,0.3)' }}
          aria-label="View devotion stats"
          whileTap={{ scale: 0.9 }}
        >
          📊
        </motion.button>
      </motion.header>

      <motion.main
        className="flex flex-col items-center gap-8 w-full relative z-10"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp}>
          <CaishenFigure stage={stageInfo?.stage ?? 1} stageName={stageInfo?.name ?? 'Humble'} />
        </motion.div>
        <motion.div variants={fadeUp} className="w-full">
          <DevotionBar
            score={devotionScore}
            nextThreshold={nextThreshold}
            barProgress={barProgress}
          />
        </motion.div>
      </motion.main>

      <motion.section
        className="w-full relative z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
      >
        <p className="text-center text-xs mb-4 font-semibold tracking-widest uppercase" style={{ color: '#7A4F0D' }}>
          Present your offerings
        </p>
        <div className="grid grid-cols-4 gap-3">
          {OFFERINGS.map(o => (
            <OfferingButton
              key={o.key}
              emoji={o.emoji}
              label={o.label}
              done={todayOfferings[o.key]}
              onClick={() => giveOffering(o.key, todayBlessingShown)}
            />
          ))}
        </div>
      </motion.section>

      <div aria-live="polite" aria-atomic="true" className="sr-only" />

      <BlessingReveal
        number={pendingBlessing}
        onDismiss={() => markBlessingShown(pendingBlessing)}
      />

      <StatsScreen
        show={showStats}
        onClose={() => setShowStats(false)}
        streak={streak}
        stageInfo={stageInfo}
        totalOfferings={totalOfferings ?? 0}
      />
    </div>
  )
}
