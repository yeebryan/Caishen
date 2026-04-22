export default function DevotionBar({ score, nextThreshold, barProgress }) {
  const label = nextThreshold ? `${score} / ${nextThreshold}` : `${score} — Max`

  return (
    <div className="w-full px-6">
      <div className="flex justify-between text-xs mb-1" style={{ color: '#7A4F0D' }}>
        <span>Devotion</span>
        <span>{label}</span>
      </div>
      <div
        className="w-full h-3 rounded-full"
        style={{ backgroundColor: '#e8d5b0' }}
        role="progressbar"
        aria-valuenow={score}
        aria-valuemin={0}
        aria-valuemax={nextThreshold ?? score}
        aria-label={`Devotion score: ${label}`}
      >
        <div
          className="h-3 rounded-full transition-all duration-500"
          style={{ width: `${barProgress}%`, backgroundColor: '#BA7517' }}
        />
      </div>
    </div>
  )
}
