import CaishenFigure from './components/CaishenFigure'
import DevotionBar from './components/DevotionBar'
import OfferingButton from './components/OfferingButton'
import './index.css'

const OFFERINGS = [
  { key: 'coins',  emoji: '🪙', label: 'Coins' },
  { key: 'ingots', emoji: '🏅', label: 'Gold Ingots' },
  { key: 'joss',   emoji: '🪷', label: 'Joss Sticks' },
  { key: 'fruits', emoji: '🧺', label: 'Fruits' },
]

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between py-8 px-4"
         style={{ backgroundColor: '#FAEEDA', maxWidth: 390, margin: '0 auto' }}>

      <header className="w-full text-center">
        <h1 className="text-2xl font-bold tracking-wide" style={{ color: '#C0392B' }}>
          Caishen
        </h1>
        <p className="text-xs" style={{ color: '#BA7517' }}>God of Fortune</p>
      </header>

      <main className="flex flex-col items-center gap-8 w-full">
        <CaishenFigure />
        <DevotionBar />
      </main>

      <section className="w-full">
        <p className="text-center text-xs mb-4 font-medium tracking-wider uppercase"
           style={{ color: '#BA7517' }}>
          Make your offerings
        </p>
        <div className="grid grid-cols-4 gap-3">
          {OFFERINGS.map(o => (
            <OfferingButton key={o.key} emoji={o.emoji} label={o.label} />
          ))}
        </div>
      </section>
    </div>
  )
}
