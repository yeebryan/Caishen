export default function OfferingButton({ emoji, label, done, onClick }) {
  return (
    <button
      onClick={done ? undefined : onClick}
      aria-label={done ? `${label} — offered today` : `Give ${label}`}
      aria-disabled={done}
      className="flex flex-col items-center gap-1 p-3 rounded-2xl border-2 active:scale-95 transition-all duration-100 focus:outline-2 focus:outline-offset-2 focus:outline-[#C0392B]"
      style={{
        borderColor: done ? '#ccc' : '#BA7517',
        backgroundColor: done ? '#f0ece4' : '#fff8ee',
        opacity: done ? 0.6 : 1,
        cursor: done ? 'default' : 'pointer',
      }}
    >
      <span className="text-3xl" aria-hidden="true" style={{ filter: done ? 'grayscale(0.6)' : 'none' }}>
        {done ? '✅' : emoji}
      </span>
      <span className="text-xs font-medium" style={{ color: done ? '#999' : '#C0392B' }}>
        {label}
      </span>
    </button>
  )
}
