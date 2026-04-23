import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Reviews', path: '/#reviews' },
  { name: 'Product', path: '/categories' },
  { name: 'Blog', path: '/#blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [loc.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={scrolled ? 'glass' : ''} style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: scrolled ? '10px 0' : '16px 0',
        transition: 'all 0.4s',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#fff', zIndex: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#60a5fa,#2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
            <span style={{ fontSize: 16, fontWeight: 600 }}>Wardiere <span style={{ color: '#60a5fa', fontWeight: 300, fontSize: 13 }}>Inc.</span></span>
          </Link>

          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {links.map(l => (
              <Link key={l.name} to={l.path} style={{ color: loc.pathname === l.path ? '#60a5fa' : '#cbd5e1', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 0.3s' }}>{l.name}</Link>
            ))}
          </div>

          <div className="hide-mobile" style={{ display: 'flex', gap: 10 }}>
            <Link to="/login" className="btn btn-ghost btn-sm">Sign In</Link>
            <Link to="/categories" className="btn btn-primary btn-sm">Get Plan</Link>
          </div>

          <button onClick={() => setOpen(!open)} style={{ display: 'block', background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 4, zIndex: 10 }} className="show-mobile" aria-label="Menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(7,13,26,0.97)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28 }} className="show-mobile">
          {links.map(l => (
            <Link key={l.name} to={l.path} style={{ fontSize: 28, fontFamily: "'Playfair Display',serif", color: '#cbd5e1', textDecoration: 'none' }}>{l.name}</Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20, width: '100%', maxWidth: 280 }}>
            <Link to="/login" className="btn btn-ghost" style={{ width: '100%' }}>Sign In</Link>
            <Link to="/categories" className="btn btn-primary" style={{ width: '100%' }}>Get Plan</Link>
          </div>
        </div>
      )}
    </>
  )
}