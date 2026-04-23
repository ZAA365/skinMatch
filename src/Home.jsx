import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  { icon: '✦', title: 'Skin Analysis', desc: 'AI-powered deep skin analysis to identify your unique concerns.' },
  { icon: '◈', title: 'Custom Routine', desc: 'Personalized daily routine crafted by certified dermatologists.' },
  { icon: '⬡', title: 'Product Matching', desc: 'Curated product recommendations matched to your skin profile.' },
]

const team = [
  { name: 'Adora Montminy', role: 'Founder & CEO', img: 'https://picsum.photos/seed/adora-skin/400/500.jpg' },
  { name: 'Sacha Dubois', role: 'Lead Dermatologist', img: 'https://picsum.photos/seed/sacha-skin/400/500.jpg' },
  { name: 'Olivia Wilson', role: 'Product Designer', img: 'https://picsum.photos/seed/olivia-skin/400/500.jpg' },
]

export default function Home() {
  const section = { padding: '64px 20px' }
  const container = { maxWidth: 1100, margin: '0 auto' }
  const label = { fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#60a5fa', marginBottom: 12, display: 'block' }
  const heading = (size) => ({ fontSize: size, fontFamily: "'Playfair Display',serif", fontWeight: 400, lineHeight: 1.1 })

  return (
    <div>
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '80px 20px 40px' }}>
        <div className="anim-pulse" style={{ position: 'absolute', top: '20%', left: '20%', width: 400, height: 400, background: 'rgba(37,99,235,0.08)', borderRadius: '50%', filter: 'blur(100px)' }} />
        <div className="anim-pulse" style={{ position: 'absolute', bottom: '20%', right: '20%', width: 300, height: 300, background: 'rgba(99,102,241,0.06)', borderRadius: '50%', filter: 'blur(80px)', animationDelay: '2s' }} />

        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 700 }}>
          <span style={{ ...label, display: 'inline-block', padding: '6px 16px', borderRadius: 50, border: '1px solid rgba(59,130,246,0.2)', background: 'rgba(37,99,235,0.05)', marginBottom: 24 }}>Skincare Redefined</span>

          <h1 style={{ ...heading('clamp(2.5rem, 8vw, 5rem)', ), marginBottom: 24 }}>
            Welcome To<br /><span className="gradient-text" style={{ fontStyle: 'italic' }}>Skincare</span>
          </h1>

          <p style={{ fontSize: 'clamp(14px, 2vw, 17px)', color: '#94a3b8', fontWeight: 300, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            <Link to="/categories" className="btn btn-primary" style={{ width: '100%', maxWidth: 240 }}>Buy Our Product</Link>
            <Link to="/login" className="btn btn-ghost" style={{ width: '100%', maxWidth: 240 }}>Contact Now</Link>
          </div>

          <div style={{ marginTop: 40 }}>
            <span style={{ fontSize: 10, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Trusted by</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 4 }}>
              <span className="gradient-text" style={{ fontSize: 24, fontWeight: 700 }}>1.5k</span>
              <span style={{ fontSize: 13, color: '#64748b' }}>Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <div style={container}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={label}>What We Do</span>
            <h2 style={heading('clamp(1.5rem, 4vw, 2.8rem)')}>Service In <span className="gradient-text" style={{ fontStyle: 'italic' }}>Skincare</span></h2>
          </div>
          <div className="grid-3">
            {services.map((s, i) => (
              <div className="card" key={i} style={{ transition: 'all 0.3s' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, fontSize: 20, color: '#60a5fa' }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#94a3b8', fontWeight: 300, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section style={section}>
        <div style={container}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40, alignItems: 'center' }}>
            <div>
              <span style={label}>Featured</span>
              <h2 style={{ ...heading('clamp(1.5rem, 4vw, 2.8rem)'), marginBottom: 20 }}>Project In <span className="gradient-text" style={{ fontStyle: 'italic' }}>Skincare</span></h2>
              <p style={{ fontSize: 13, color: '#94a3b8', fontWeight: 300, lineHeight: 1.7, marginBottom: 28 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Link to="/categories" className="btn btn-primary">Explore Plans</Link>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/5', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(59,130,246,0.1)', boxShadow: '0 0 60px rgba(37,99,235,0.2)' }}>
                <img src="https://picsum.photos/seed/skin-blue-proj/600/750.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #070d1a, transparent)' }} />
              </div>
              <div className="glass anim-float" style={{ position: 'absolute', bottom: -12, left: -12, borderRadius: 12, padding: '10px 18px', fontSize: 12, color: '#93c5fd' }}>✓ Dermatologist Approved</div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section style={section}>
        <div style={container}>
          <div className="grid-2">
            {['Vision', 'Mission'].map(t => (
              <div className="card" key={t}>
                <span style={label}>Our About</span>
                <h3 style={{ ...heading('clamp(1.3rem, 3vw, 2rem)'), marginBottom: 20 }}>{t}</h3>
                <p style={{ fontSize: 13, color: '#94a3b8', fontWeight: 300, lineHeight: 1.7 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={section} id="reviews">
        <div style={container}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={label}>The Experts</span>
            <h2 style={heading('clamp(1.5rem, 4vw, 2.8rem)')}>Meet Our <span className="gradient-text" style={{ fontStyle: 'italic' }}>Team</span></h2>
          </div>
          <div className="grid-3">
            {team.map((m, i) => (
              <div key={i} style={{ cursor: 'pointer' }}>
                <div style={{ aspectRatio: '3/4', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(59,130,246,0.1)', marginBottom: 14 }}>
                  <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)', transition: 'all 0.7s' }} />
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 600 }}>{m.name}</h3>
                <p style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={section} id="blog">
        <div style={{ ...container, maxWidth: 600, textAlign: 'center' }}>
          <span style={label}>Get In Touch</span>
          <h2 style={{ ...heading('clamp(1.5rem, 4vw, 2.8rem)'), marginBottom: 16 }}>Contact <span className="gradient-text" style={{ fontStyle: 'italic' }}>Information</span></h2>
          <div className="card">
            <div className="grid-3" style={{ gap: 16 }}>
              {[
                { t: 'Phone', v: '123-456-7890' },
                { t: 'Email', v: 'hello@reallygreatsite.com' },
                { t: 'Social', v: '@reallygreatsite' },
              ].map(c => (
                <div key={c.t}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', color: '#60a5fa', fontSize: 18 }}>◎</div>
                  <p style={{ fontSize: 11, color: '#64748b' }}>{c.t}</p>
                  <p style={{ fontSize: 13, color: '#cbd5e1', marginTop: 4, wordBreak: 'break-all' }}>{c.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...section, textAlign: 'center' }}>
        <div style={container}>
          <h2 style={{ ...heading('clamp(2rem, 6vw, 4rem)'), marginBottom: 20 }}>Thank <span className="gradient-text" style={{ fontStyle: 'italic' }}>You</span></h2>
          <Link to="/categories" className="btn btn-primary">Get Your Plan Now</Link>
        </div>
      </section>
    </div>
  )
}