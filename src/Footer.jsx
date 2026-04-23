import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 20px 32px' }}>
        <div className="grid-2" style={{ marginBottom: 40 }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#fff', marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#60a5fa,#2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>✓</div>
              <span style={{ fontWeight: 600 }}>Wardiere Inc.</span>
            </Link>
            <p style={{ fontSize: 13, color: '#64748b', maxWidth: 300, lineHeight: 1.7 }}>Personalized skincare plans crafted for your unique skin needs.</p>
          </div>
        </div>

        <div className="grid-3" style={{ marginBottom: 40 }}>
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: 14 }}>Navigate</h4>
            {['Home','Reviews','Product','Blog'].map(l => (
              <Link key={l} to="/" style={{ display: 'block', fontSize: 13, color: '#64748b', textDecoration: 'none', marginBottom: 8 }}>{l}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: 14 }}>Contact</h4>
            <p style={{ fontSize: 13, color: '#64748b', marginBottom: 6 }}>+966 5xxxxxxxx</p>
            <p style={{ fontSize: 13, color: '#64748b', marginBottom: 6, wordBreak: 'break-all' }}>skinmatch@gmail.com</p>
            <p style={{ fontSize: 13, color: '#64748b' }}>@gmail.com</p>
          </div>
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: 14 }}>Follow</h4>
            <div style={{ display: 'flex', gap: 10 }}>
              {['IG','TW','FB'].map(s => (
                <a key={s} href="#" style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>{s}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(59,130,246,0.08)', paddingTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <p style={{ fontSize: 11, color: '#475569' }}>© 2024 Wardiere Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}