'use client'

export default function QtyStepper({ qty, onChange, min = 1 }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--color-border)', borderRadius: 8 }}>
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, qty - 1))}
        style={stepBtn}
      >
        −
      </button>
      <span style={{ minWidth: 32, textAlign: 'center' }}>{qty}</span>
      <button type="button" aria-label="Increase quantity" onClick={() => onChange(qty + 1)} style={stepBtn}>
        +
      </button>
    </div>
  )
}

const stepBtn = {
  width: 44,
  height: 44,
  border: 'none',
  background: 'none',
  fontSize: '1.1rem',
  cursor: 'pointer',
}
