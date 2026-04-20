export default function OfferingButton({ emoji, label }) {
  return (
    <button
      className="flex flex-col items-center gap-1 p-3 rounded-2xl border-2 active:scale-95 transition-transform duration-100"
      style={{ borderColor: '#BA7517', backgroundColor: '#fff8ee' }}
    >
      <span className="text-3xl">{emoji}</span>
      <span className="text-xs font-medium" style={{ color: '#C0392B' }}>{label}</span>
    </button>
  )
}
