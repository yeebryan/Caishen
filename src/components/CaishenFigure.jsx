import { motion, AnimatePresence } from 'motion/react'

const STAGE_CONFIG = {
  1: { w: 96,  h: 128, borderColor: '#c9a84c', bgColor: '#FDF3D9', emoji: '🙏', emojiSize: 48, ingots: 0, aura: null },
  2: { w: 112, h: 144, borderColor: '#BA7517', bgColor: '#fdf3dc', emoji: '🙏', emojiSize: 56, ingots: 1, aura: null },
  3: { w: 128, h: 160, borderColor: '#BA7517', bgColor: '#fef0cb', emoji: '🙏', emojiSize: 60, ingots: 3, aura: 'static' },
  4: { w: 160, h: 192, borderColor: '#d4a017', bgColor: '#fff3c4', emoji: '🙏', emojiSize: 72, ingots: 5, aura: 'pulse' },
}

function Ingots({ count }) {
  if (count === 0) return null
  return (
    <motion.div
      className="flex gap-1 justify-center flex-wrap mt-2"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'backOut' }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="rounded-sm"
          style={{ width: 18, height: 12, backgroundColor: '#BA7517', opacity: 0.85 }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ delay: i * 0.06, duration: 0.3 }}
        />
      ))}
    </motion.div>
  )
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
          <motion.span
            key={stage}
            style={{ fontSize: cfg.emojiSize }}
            initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'backOut' }}
          >
            {cfg.emoji}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <Ingots count={cfg.ingots} />

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
