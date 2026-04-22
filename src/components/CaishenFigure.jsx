import { motion, AnimatePresence } from 'motion/react'
import CaishenSVG from './CaishenSVG'

const STAGE_CONFIG = {
  1: { w: 120, h: 156, borderColor: '#c9a84c', bgColor: '#FDF3D9', aura: null },
  2: { w: 140, h: 182, borderColor: '#BA7517', bgColor: '#fdf3dc', aura: null },
  3: { w: 160, h: 208, borderColor: '#BA7517', bgColor: '#fef0cb', aura: 'static' },
  4: { w: 200, h: 260, borderColor: '#d4a017', bgColor: '#fff3c4', aura: 'pulse' },
}

export default function CaishenFigure({ stage, stageName }) {
  const cfg = STAGE_CONFIG[stage] ?? STAGE_CONFIG[1]

  const auraStyle = cfg.aura === 'static'
    ? { boxShadow: '0 0 0 10px rgba(186, 117, 23, 0.22), 0 0 32px rgba(186,117,23,0.15)' }
    : {}

  return (
    <div className="flex flex-col items-center gap-1" aria-label={`Caishen — ${stageName} stage`}>
      <motion.div
        className={`rounded-2xl border-4 flex items-center justify-center ${cfg.aura === 'pulse' ? 'aura-pulse' : ''}`}
        style={{ borderColor: cfg.borderColor, backgroundColor: cfg.bgColor, ...auraStyle }}
        animate={{ width: cfg.w, height: cfg.h }}
        transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        aria-hidden="true"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'backOut' }}
          >
            <CaishenSVG stage={stage} width={cfg.w - 16} height={cfg.h - 16} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.span
        key={stageName}
        className="text-sm font-bold tracking-widest uppercase mt-1"
        style={{ color: '#7A4F0D', fontFamily: 'var(--font-body)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {stageName}
      </motion.span>
    </div>
  )
}
