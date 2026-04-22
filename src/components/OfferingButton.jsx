import { motion } from 'motion/react'

export default function OfferingButton({ emoji, label, done, onClick }) {
  return (
    <motion.button
      onClick={done ? undefined : onClick}
      aria-label={done ? `${label} — offered today` : `Give ${label}`}
      aria-disabled={done}
      className="flex flex-col items-center gap-1 p-3 rounded-2xl border-2 focus:outline-2 focus:outline-offset-2 focus:outline-[#C0392B]"
      style={{
        borderColor: done ? '#d4c4a0' : '#BA7517',
        backgroundColor: done ? '#ede8de' : '#fffbf2',
        opacity: done ? 0.65 : 1,
        cursor: done ? 'default' : 'pointer',
        fontFamily: 'var(--font-body)',
      }}
      whileTap={done ? {} : { scale: 0.92 }}
      whileHover={done ? {} : { scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <span className="text-3xl" aria-hidden="true" style={{ filter: done ? 'grayscale(0.5)' : 'none' }}>
        {done ? '✅' : emoji}
      </span>
      <span className="text-xs font-semibold" style={{ color: done ? '#a09070' : '#C0392B' }}>
        {label}
      </span>
    </motion.button>
  )
}
