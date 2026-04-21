export default function OfferingButton({ emoji, label, done, onClick }) {
  return (
    <button
      onClick={done ? undefined : onClick}
      className="flex flex-col items-center gap-1 p-3 rounded-2xl border-2 active:scale-95 transition-all duration-100"
      style={{
        borderColor: done ? '#ccc' : '#BA7517',
        backgroundColor: done ? '#f0ece4' : '#fff8ee',
        opacity: done ? 0.6 : 1,
        cursor: done ? 'default' : 'pointer',
      }}
    >
      <span className="text-3xl" style={{ filter: done ? 'grayscale(0.6)' : 'none' }}>
        {done ? '✅' : emoji}
      </span>
      <span className="text-xs font-medium" style={{ color: done ? '#999' : '#C0392B' }}>
        {label}
      </span>
    </button>
  )
}
