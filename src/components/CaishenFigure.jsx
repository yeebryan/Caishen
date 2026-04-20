export default function CaishenFigure() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-24 h-32 rounded-2xl border-4 flex items-center justify-center text-5xl"
           style={{ borderColor: '#BA7517', backgroundColor: '#FAEEDA' }}>
        🙏
      </div>
      <span className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#BA7517' }}>
        Humble
      </span>
    </div>
  )
}
