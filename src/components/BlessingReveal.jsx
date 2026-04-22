import { useEffect, useState } from 'react'

export default function BlessingReveal({ number, onDismiss }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!number) { setReady(false); return }
    const t = setTimeout(() => setReady(true), 300)
    return () => clearTimeout(t)
  }, [number])

  if (!number) return null

  const digits = String(number).split('').join('  ')

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 px-8"
      style={{ backgroundColor: 'rgba(192, 57, 43, 0.93)', cursor: ready ? 'pointer' : 'default' }}
      onClick={ready ? onDismiss : undefined}
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#FAEEDA', opacity: 0.8 }}>
          Caishen speaks
        </p>

        <h2 className="text-2xl font-bold" style={{ color: '#FAEEDA' }}>
          Blessing of the day
        </h2>

        <div
          className="text-6xl font-bold py-6 px-8 rounded-2xl"
          style={{ color: '#FFD700', backgroundColor: 'rgba(0,0,0,0.2)', letterSpacing: '0.25em' }}
        >
          {digits}
        </div>

        <p className="text-xs leading-relaxed max-w-xs" style={{ color: '#FAEEDA', opacity: 0.75 }}>
          This number is Caishen's blessing for reflection and spiritual contemplation only.
        </p>

        <p className="text-xs font-medium" style={{ color: '#FAEEDA', opacity: ready ? 0.6 : 0.3 }}>
          {ready ? 'Tap anywhere to receive this blessing' : 'Caishen is speaking…'}
        </p>
      </div>
    </div>
  )
}
