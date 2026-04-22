import { useState } from 'react'
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
  { key: 'fruits', emoji: '🧺', label: 'Fruits' },
]

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
      className="min-h-screen flex flex-col items-center justify-between px-4"
      style={{ backgroundColor: '#FAEEDA', maxWidth: 390, margin: '0 auto', paddingTop: 'max(2rem, env(safe-area-inset-top))', paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}
    >
      <header className="w-full flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-wide" style={{ color: '#C0392B' }}>
            Caishen
          </h1>
          <p className="text-xs" style={{ color: '#BA7517' }}>God of Fortune</p>
        </div>
        <button
          onClick={() => setShowStats(true)}
          className="text-2xl rounded-full flex items-center justify-center focus:outline-2 focus:outline-offset-2 focus:outline-[#C0392B]"
          style={{ backgroundColor: '#f0ddb0', width: 48, height: 48, minWidth: 48, minHeight: 48 }}
          aria-label="View devotion stats"
        >
          📊
        </button>
      </header>

      <main className="flex flex-col items-center gap-8 w-full">
        <CaishenFigure stage={stageInfo?.stage ?? 1} stageName={stageInfo?.name ?? 'Humble'} />
        <DevotionBar
          score={devotionScore}
          nextThreshold={nextThreshold}
          barProgress={barProgress}
        />
      </main>

      <section className="w-full">
        <p className="text-center text-xs mb-4 font-medium tracking-wider uppercase" style={{ color: '#BA7517' }}>
          Make your offerings
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
      </section>

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
