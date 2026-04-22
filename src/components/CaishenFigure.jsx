const STAGE_CONFIG = {
  1: {
    figureSize: 'w-24 h-32',
    borderColor: '#c9a84c',
    bgColor: '#FAEEDA',
    emoji: '🙏',
    emojiSize: 'text-5xl',
    ingots: 0,
    aura: null,
  },
  2: {
    figureSize: 'w-28 h-36',
    borderColor: '#BA7517',
    bgColor: '#fdf3dc',
    emoji: '🙏',
    emojiSize: 'text-6xl',
    ingots: 1,
    aura: null,
  },
  3: {
    figureSize: 'w-32 h-40',
    borderColor: '#BA7517',
    bgColor: '#fef0cb',
    emoji: '🙏',
    emojiSize: 'text-6xl',
    ingots: 3,
    aura: 'static',
  },
  4: {
    figureSize: 'w-40 h-48',
    borderColor: '#d4a017',
    bgColor: '#fff3c4',
    emoji: '🙏',
    emojiSize: 'text-7xl',
    ingots: 5,
    aura: 'pulse',
  },
}

function Ingots({ count }) {
  if (count === 0) return null
  return (
    <div className="flex gap-1 justify-center flex-wrap mt-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-sm"
          style={{
            width: 18,
            height: 12,
            backgroundColor: '#BA7517',
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  )
}

export default function CaishenFigure({ stage, stageName }) {
  const cfg = STAGE_CONFIG[stage] ?? STAGE_CONFIG[1]

  const auraStyle =
    cfg.aura === 'static'
      ? { boxShadow: '0 0 0 8px rgba(186, 117, 23, 0.25)' }
      : cfg.aura === 'pulse'
      ? {}
      : {}

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`${cfg.figureSize} rounded-2xl border-4 flex items-center justify-center transition-all duration-500 ${cfg.aura === 'pulse' ? 'aura-pulse' : ''}`}
        style={{
          borderColor: cfg.borderColor,
          backgroundColor: cfg.bgColor,
          ...auraStyle,
        }}
      >
        <span className={`${cfg.emojiSize} transition-all duration-500`}>
          {cfg.emoji}
        </span>
      </div>

      <Ingots count={cfg.ingots} />

      <span
        className="text-sm font-semibold tracking-widest uppercase mt-1 transition-all duration-500"
        style={{ color: '#BA7517' }}
      >
        {stageName}
      </span>
    </div>
  )
}
