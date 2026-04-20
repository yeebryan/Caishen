export default function DevotionBar() {
  return (
    <div className="w-full px-6">
      <div className="flex justify-between text-xs mb-1" style={{ color: '#BA7517' }}>
        <span>Devotion</span>
        <span>0 / 10</span>
      </div>
      <div className="w-full h-3 rounded-full" style={{ backgroundColor: '#e8d5b0' }}>
        <div className="h-3 rounded-full transition-all duration-500"
             style={{ width: '0%', backgroundColor: '#BA7517' }} />
      </div>
    </div>
  )
}
