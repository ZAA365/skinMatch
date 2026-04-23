import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const STEPS = ['Price', 'Skin Type', 'Problems', 'Routine']

const prices = [
  { id: 'budget', label: 'Budget', range: '$10–$30', icon: '♡' },
  { id: 'mid', label: 'Mid-Range', range: '$30–$80', icon: '◇' },
  { id: 'premium', label: 'Premium', range: '$80–$200', icon: '✦' },
  { id: 'luxury', label: 'Luxury', range: '$200+', icon: '❖' },
]

const types = [
  { id: 'oily', label: 'Oily', icon: '💧' },
  { id: 'dry', label: 'Dry', icon: '☁️' },
  { id: 'combo', label: 'Combination', icon: '☯' },
  { id: 'sensitive', label: 'Sensitive', icon: '🌸' },
  { id: 'normal', label: 'Normal', icon: '✿' },
]

const problems = ['Acne', 'Aging', 'Dark Spots', 'Redness', 'Dehydration', 'Dullness', 'Pores', 'Eye Bags']

const routine = [
  { id: 'cleanser', label: 'Cleanser', time: 'AM/PM', icon: '🫧' },
  { id: 'toner', label: 'Toner', time: 'AM/PM', icon: '💧' },
  { id: 'serum', label: 'Serum', time: 'AM/PM', icon: '✨' },
  { id: 'moisturizer', label: 'Moisturizer', time: 'AM/PM', icon: '🌿' },
  { id: 'sunscreen', label: 'Sunscreen', time: 'AM', icon: '☀️' },
  { id: 'exfoliant', label: 'Exfoliant', time: '2-3x/wk', icon: '⟡' },
  { id: 'mask', label: 'Mask', time: '1-2x/wk', icon: '🧖' },
  { id: 'eyecream', label: 'Eye Cream', time: 'AM/PM', icon: '👁' },
]

export default function Categories() {
  const [step, setStep] = useState(0)
  const [sel, setSel] = useState({ price: null, type: null, problems: [], routine: [] })
  const nav = useNavigate()

  const toggle = (key, id) => setSel(p => ({ ...p, [key]: p[key].includes(id) ? p[key].filter(x => x !== id) : [...p[key], id] }))

  const ok = () => {
    if (step === 0) return !!sel.price
    if (step === 1) return !!sel.type
    return sel[step === 2 ? 'problems' : 'routine'].length > 0
  }

  const next = () => step < 3 ? setStep(step + 1) : nav('/payment', { state: sel })

  const Check = () => <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '6px auto 0' }}><span style={{ fontSize: 10, color: '#fff' }}>✓</span></div>

  return (
    <div style={{ minHeight: '100vh', padding: '80px 20px 40px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 60, right: '20%', width: 350, height: 350, background: 'rgba(37,99,235,0.05)', borderRadius: '50%', filter: 'blur(80px)' }} />

      <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
        {/* Steps */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 32 }}>
          {STEPS.map((s, i) => (
            <React.Fragment key={s}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div className={`step-dot ${i < step ? 'step-done' : i === step ? 'step-on' : 'step-off'}`}>
                  {i < step ? '✓' : i + 1}
                </div>
                <span className="hide-mobile" style={{ fontSize: 12, fontWeight: 500, color: i <= step ? '#cbd5e1' : '#475569' }}>{s}</span>
              </div>
              {i < 3 && <div style={{ width: 24, height: 1, background: i < step ? 'rgba(16,185,129,0.4)' : 'rgba(59,130,246,0.15)', flexShrink: 0 }} />}
            </React.Fragment>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div className="show-mobile" style={{ fontSize: 12, color: '#60a5fa', fontWeight: 600, marginBottom: 4 }}>Step {step + 1}: {STEPS[step]}</div>
          <h2 className="hide-mobile" style={{ fontSize: 'clamp(1.3rem, 4vw, 2.2rem)', fontFamily: "'Playfair Display',serif" }}>
            Choose Your <span className="gradient-text" style={{ fontStyle: 'italic' }}>{STEPS[step]}</span>
          </h2>
        </div>

        {/* Content */}
        {step === 0 && (
          <div className="grid-2">
            {prices.map(p => (
              <div key={p.id} className={`choice ${sel.price === p.id ? 'on' : ''}`} onClick={() => setSel({ ...sel, price: p.id })}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{p.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{p.label}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#60a5fa' }}>{p.range}</div>
              </div>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="grid-2">
            {types.map(t => (
              <div key={t.id} className={`choice ${sel.type === t.id ? 'on' : ''}`} onClick={() => setSel({ ...sel, type: t.id })}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{t.label}</div>
              </div>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="grid-2" style={{ gap: 10 }}>
            {problems.map(p => (
              <div key={p} className={`choice ${sel.problems.includes(p) ? 'on' : ''}`} onClick={() => toggle('problems', p)} style={{ padding: '14px 10px' }}>
                <div style={{ fontSize: 12, fontWeight: 500 }}>{p}</div>
                {sel.problems.includes(p) && <Check />}
              </div>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="grid-2" style={{ gap: 10 }}>
            {routine.map(r => (
              <div key={r.id} className={`choice ${sel.routine.includes(r.id) ? 'on' : ''}`} onClick={() => toggle('routine', r.id)}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{r.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{r.label}</div>
                <div style={{ fontSize: 10, color: 'rgba(96,165,250,0.7)' }}>{r.time}</div>
                {sel.routine.includes(r.id) && <Check />}
              </div>
            ))}
          </div>
        )}

        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32, gap: 12 }}>
          <button onClick={() => setStep(Math.max(0, step - 1))} className={`btn btn-ghost btn-sm ${step === 0 ? 'hide-mobile' : ''}`}>← Back</button>
          <span style={{ fontSize: 11, color: '#475569' }}>{step + 1}/4</span>
          <button onClick={next} className={`btn btn-primary btn-sm ${!ok() ? 'hide-mobile' : ''}`} disabled={!ok()} style={!ok() ? { opacity: 0.3, pointerEvents: 'none' } : {}}>{step === 3 ? 'Pay →' : 'Next →'}</button>
        </div>
      </div>
    </div>
  )
}