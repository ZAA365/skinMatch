import React, { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

const prices = { budget: 29, mid: 59, premium: 99, luxury: 159 }

export default function Payment() {
  const loc = useLocation()
  const nav = useNavigate()
  const sel = loc.state
  const [plan, setPlan] = useState('monthly')
  const [f, setF] = useState({ name: '', num: '', exp: '', cvc: '' })
  const [toast, setToast] = useState(null)

  if (!sel) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ textAlign: 'center' }}><p style={{ color: '#94a3b8', marginBottom: 16 }}>No selections found.</p><Link to="/categories" className="btn btn-primary">Start Over</Link></div>
    </div>
  )

  const base = prices[sel.price] || 59
  const total = plan === 'monthly' ? base : base * 10
  const up = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const pay = (e) => {
    e.preventDefault()
    if (!f.name || !f.num || !f.exp || !f.cvc) { setToast({ t: 'err', m: 'Fill all fields.' }); setTimeout(() => setToast(null), 3000); return }
    setToast({ t: 'ok', m: 'Payment successful!' })
    setTimeout(() => { setToast(null); nav('/') }, 3000)
  }

  const Row = ({ l, v }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '6px 0' }}>
      <span style={{ color: '#64748b' }}>{l}</span>
      <span style={{ color: '#cbd5e1', textAlign: 'right', textTransform: 'capitalize', wordBreak: 'break-word', maxWidth: '60%' }}>{v}</span>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', padding: '80px 20px 40px', position: 'relative' }}>
      {toast && <div className={`toast ${toast.t === 'ok' ? 'toast-ok' : 'toast-err'}`}>{toast.m}</div>}

      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#60a5fa', display: 'block', marginBottom: 10 }}>Checkout</span>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', fontFamily: "'Playfair Display',serif" }}>Pay for <span className="gradient-text" style={{ fontStyle: 'italic' }}>Skincare Plan</span></h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
          {/* Summary */}
          <div className="card">
            <h3 style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: 16 }}>Plan Summary</h3>
            <Row l="Price Range" v={sel.price} />
            <Row l="Skin Type" v={sel.type} />
            <Row l="Concerns" v={sel.problems.join(', ')} />
            <Row l="Routine" v={`${sel.routine.length} steps`} />
            <hr style={{ border: 'none', borderTop: '1px solid rgba(59,130,246,0.1)', margin: '14px 0' }} />
            <div style={{ display: 'flex', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(59,130,246,0.15)', marginBottom: 14, position: 'relative' }}>
              <button onClick={() => setPlan('monthly')} className="btn" style={{ flex: 1, padding: '10px', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: 0, background: plan === 'monthly' ? '#2563eb' : 'transparent', color: plan === 'monthly' ? '#fff' : '#64748b' }}>Monthly</button>
              <button onClick={() => setPlan('yearly')} className="btn" style={{ flex: 1, padding: '10px', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: 0, background: plan === 'yearly' ? '#2563eb' : 'transparent', color: plan === 'yearly' ? '#fff' : '#64748b' }}>Yearly</button>
              <span style={{ position: 'absolute', top: -16, right: 8, fontSize: 9, color: '#34d399', fontWeight: 700 }}>SAVE 17%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <span style={{ fontSize: 11, color: '#64748b' }}>{plan === 'monthly' ? 'Monthly' : 'Annual'}</span>
              <div style={{ textAlign: 'right' }}>
                <span className="gradient-text" style={{ fontSize: 28, fontWeight: 700 }}>${total}</span>
                <span style={{ fontSize: 11, color: '#64748b', display: 'block' }}>{plan === 'monthly' ? '/month' : '/year'}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card">
            <h3 style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: 18 }}>Payment Details</h3>
            <form onSubmit={pay} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: 6 }}>Name on Card</label>
                <input className="input" value={f.name} onChange={up('name')} placeholder="John Doe" />
              </div>
              <div>
                <label style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: 6 }}>Card Number</label>
                <input className="input" value={f.num} onChange={up('num')} placeholder="1234 5678 9012 3456" maxLength={19} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: 6 }}>Expiry</label>
                  <input className="input" value={f.exp} onChange={up('exp')} placeholder="MM/YY" maxLength={5} />
                </div>
                <div>
                  <label style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: 6 }}>CVC</label>
                  <input className="input" value={f.cvc} onChange={up('cvc')} placeholder="123" maxLength={4} />
                </div>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 6 }}>Pay ${total} {plan === 'monthly' ? '/ mo' : '/ yr'}</button>
              <p style={{ textAlign: 'center', fontSize: 11, color: '#475569' }}>Cancel anytime. No hidden fees.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}