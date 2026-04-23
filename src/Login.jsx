import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [reg, setReg] = useState(false)
  const [f, setF] = useState({ name: '', email: '', pass: '' })
  const [toast, setToast] = useState(null)
  const nav = useNavigate()

  const go = (e) => {
    e.preventDefault()
    if (!f.email || !f.pass || (reg && !f.name)) { setToast({ t: 'err', m: 'Fill all fields.' }); setTimeout(() => setToast(null), 3000); return }
    setToast({ t: 'ok', m: reg ? 'Account created!' : 'Welcome back!' })
    setTimeout(() => { setToast(null); nav(reg ? '/categories' : '/') }, 2000)
  }

  const up = (k) => (e) => setF({ ...f, [k]: e.target.value })

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 20px 40px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '30%', left: '30%', width: 350, height: 350, background: 'rgba(37,99,235,0.06)', borderRadius: '50%', filter: 'blur(80px)' }} />

      {toast && <div className={`toast ${toast.t === 'ok' ? 'toast-ok' : 'toast-err'}`}>{toast.m}</div>}

      <div style={{ width: '100%', maxWidth: 400, position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg,#60a5fa,#2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', boxShadow: '0 4px 20px rgba(37,99,235,0.3)', fontSize: 22 }}>◎</div>
          <h1 style={{ fontSize: 22, fontFamily: "'Playfair Display',serif" }}>{reg ? 'Create Account' : 'Welcome Back'}</h1>
          <p style={{ fontSize: 13, color: '#64748b', marginTop: 6 }}>{reg ? 'Join our skincare community' : 'Sign in to your account'}</p>
        </div>

        <div className="card">
          <form onSubmit={go} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {reg && (
              <div>
                <label style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: 6 }}>Full Name</label>
                <input className="input" value={f.name} onChange={up('name')} placeholder="Your name" />
              </div>
            )}
            <div>
              <label style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: 6 }}>Email</label>
              <input className="input" type="email" value={f.email} onChange={up('email')} placeholder="hello@example.com" />
            </div>
            <div>
              <label style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: 6 }}>Password</label>
              <input className="input" type="password" value={f.pass} onChange={up('pass')} placeholder="••••••••" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 4 }}>{reg ? 'Create Account' : 'Sign In'}</button>
          </form>

          <p style={{ textAlign: 'center', fontSize: 13, color: '#64748b', marginTop: 20 }}>
            {reg ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button onClick={() => setReg(!reg)} style={{ background: 'none', border: 'none', color: '#60a5fa', cursor: 'pointer', fontWeight: 600, fontSize: 13 }}>{reg ? 'Sign In' : 'Register'}</button>
          </p>
          <div style={{ textAlign: 'center', marginTop: 12 }}>
            <Link to="/" style={{ fontSize: 11, color: '#475569', textDecoration: 'none' }}>← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}