export default function StatsScreen({ show, onClose, streak, stageInfo, totalOfferings }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Devotion stats"
      className="fixed inset-0 z-40 flex flex-col justify-end transition-all duration-300"
      style={{
        pointerEvents: show ? 'auto' : 'none',
        backgroundColor: show ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)',
      }}
      onClick={onClose}
    >
      <div
        className="rounded-t-3xl px-6 pt-6 pb-10 flex flex-col gap-6 transition-transform duration-300"
        style={{
          backgroundColor: '#FAEEDA',
          transform: show ? 'translateY(0)' : 'translateY(100%)',
          maxWidth: 390,
          width: '100%',
          margin: '0 auto',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-wide" style={{ color: '#C0392B' }}>
            Devotion Stats
          </h2>
          <button
            onClick={onClose}
            className="text-sm font-medium px-4 py-3 rounded-full min-w-[44px] min-h-[44px] focus:outline-2 focus:outline-offset-2 focus:outline-[#C0392B]"
            style={{ color: '#7A4F0D', backgroundColor: '#f0ddb0' }}
          >
            Close
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <StatRow
            label="Current streak"
            value={`${streak} ${streak === 1 ? 'day' : 'days'}${streak >= 3 ? ' 🔥' : ''}`}
          />
          <StatRow
            label="Devotion stage"
            value={`Stage ${stageInfo?.stage ?? 1} — ${stageInfo?.name ?? 'Humble'}`}
          />
          <StatRow
            label="Total offerings"
            value={`${totalOfferings} offering${totalOfferings === 1 ? '' : 's'} given`}
          />
        </div>
      </div>
    </div>
  )
}

function StatRow({ label, value }) {
  return (
    <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: '#e8d5b0' }}>
      <span className="text-sm" style={{ color: '#7A4F0D' }}>{label}</span>
      <span className="text-sm font-semibold" style={{ color: '#C0392B' }}>{value}</span>
    </div>
  )
}
