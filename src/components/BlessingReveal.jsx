import { useEffect, useState, useRef } from 'react'

export default function BlessingReveal({ number, onDismiss }) {
  const [visible, setVisible] = useState(false)
  const [ready, setReady] = useState(false)
  const overlayRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!number) { setVisible(false); setReady(false); return }
    triggerRef.current = document.activeElement
    requestAnimationFrame(() => setVisible(true))
    const t = setTimeout(() => {
      setReady(true)
      overlayRef.current?.focus()
    }, 300)
    return () => clearTimeout(t)
  }, [number])

  useEffect(() => {
    if (!number) return
    const handleKey = (e) => {
      if (e.key === 'Escape' && ready) onDismiss()
      if (e.key === 'Tab') e.preventDefault()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [number, ready, onDismiss])

  const handleDismiss = () => {
    triggerRef.current?.focus()
    onDismiss()
  }

  if (!number) return null

  const digits = String(number).split('').join('  ')

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Caishen's blessing"
      tabIndex={-1}
      className="fixed inset-0 flex flex-col items-center justify-center z-50 px-8 transition-opacity duration-300"
      style={{
        backgroundColor: 'rgba(192, 57, 43, 0.93)',
        opacity: visible ? 1 : 0,
        cursor: ready ? 'pointer' : 'default',
        outline: 'none',
      }}
      onClick={ready ? handleDismiss : undefined}
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#FAEEDA', opacity: 0.9 }}>
          Caishen speaks
        </p>

        <h2 className="text-2xl font-bold" style={{ color: '#FAEEDA' }}>
          Blessing of the day
        </h2>

        <div
          className="text-6xl font-bold py-6 px-8 rounded-2xl"
          aria-label={`Blessing number: ${number}`}
          style={{ color: '#FFD700', backgroundColor: 'rgba(0,0,0,0.2)', letterSpacing: '0.25em' }}
        >
          <span aria-hidden="true">{digits}</span>
        </div>

        <p className="text-xs leading-relaxed max-w-xs" style={{ color: '#FFFFFF' }}>
          This number is Caishen's blessing for reflection and spiritual contemplation only.
        </p>

        <p className="text-xs font-medium" style={{ color: '#FAEEDA', opacity: ready ? 0.8 : 0.3 }}>
          {ready ? 'Tap anywhere or press Esc to receive this blessing' : 'Caishen is speaking…'}
        </p>
      </div>
    </div>
  )
}
