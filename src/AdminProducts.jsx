import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const init = [
  { id: 1, name: 'Gentle Foaming Cleanser', cat: 'Cleanser', price: '$24', skin: 'All', stock: 142 },
  { id: 2, name: 'Hydrating Hyaluronic Serum', cat: 'Serum', price: '$45', skin: 'Dry', stock: 89 },
  { id: 3, name: 'Oil-Free Moisturizer SPF 30', cat: 'Moisturizer', price: '$38', skin: 'Oily', stock: 67 },
  { id: 4, name: 'Niacinamide 10% + Zinc', cat: 'Serum', price: '$32', skin: 'Combination', stock: 0 },
  { id: 5, name: 'Retinol 0.5% Night Cream', cat: 'Moisturizer', price: '$56', skin: 'All', stock: 203 },
  { id: 6, name: 'Vitamin C Brightening Toner', cat: 'Toner', price: '$28', skin: 'Dull', stock: 15 },
  { id: 7, name: 'AHA/BHA Exfoliating Solution', cat: 'Exfoliant', price: '$35', skin: 'Acne-prone', stock: 78 },
  { id: 8, name: 'Ceramide Barrier Repair', cat: 'Moisturizer', price: '$42', skin: 'Sensitive', stock: 51 },
]

const st = (s) => s === 0 ? 'badge-red' : s < 20 ? 'badge-yellow' : 'badge-green'
const sl = (s) => s === 0 ? 'Out of Stock' : s < 20 ? 'Low Stock' : 'Active'

export default function AdminProducts() {
  const [products, setProducts] = useState(init)
  const [modal, setModal] = useState(false)
  const [f, setF] = useState({ name: '', cat: 'Cleanser', price: '', skin: 'All', stock: '' })

  const add = (e) => {
    e.preventDefault()
    if (!f.name || !f.price) return
    const stock = parseInt(f.stock) || 0
    setProducts([{ ...f, id: Date.now(), stock }, ...products])
    setF({ name: '', cat: 'Cleanser', price: '', skin: 'All', stock: '' })
    setModal(false)
  }

  const del = (id) => setProducts(products.filter(p => p.id !== id))

  return (
    <div style={{ minHeight: '100vh', padding: '80px 20px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div>
            <Link to="/admin" style={{ fontSize: 11, color: '#64748b', textDecoration: 'none', display: 'inline-block', marginBottom: 6 }}>← Dashboard</Link>
            <h1 style={{ fontSize: 'clamp(1.3rem, 4vw, 2rem)', fontFamily: "'Playfair Display',serif" }}>Manage Products</h1>
          </div>
          <button onClick={() => setModal(true)} className="btn btn-primary btn-sm">+ Add Product</button>
        </div>

        {/* Mobile */}
        <div className="show-mobile">
          {products.map(p => (
            <div className="m-card" key={p.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <div style={{ flex: 1, minWidth: 0, marginRight: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#cbd5e1', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{p.cat} · {p.skin}</div>
                </div>
                <span className={`badge ${st(p.stock)}`}>{sl(p.stock)}</span>
              </div>
              <div className="m-row"><span style={{ fontSize: 11, color: '#64748b' }}>Price</span><span style={{ fontSize: 12, color: '#cbd5e1', fontWeight: 600 }}>{p.price}</span></div>
              <div className="m-row"><span style={{ fontSize: 11, color: '#64748b' }}>Stock</span><span style={{ fontSize: 12, color: '#94a3b8' }}>{p.stock} units</span></div>
              <div style={{ display: 'flex', gap: 16, marginTop: 8, paddingTop: 8, borderTop: '1px solid rgba(59,130,246,0.08)' }}>
                <button style={{ fontSize: 11, color: '#60a5fa', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Edit</button>
                <button onClick={() => del(p.id)} style={{ fontSize: 11, color: '#f87171', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hide-mobile" style={{ overflowX: 'auto' }}>
          <div className="card" style={{ padding: 20 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(59,130,246,0.1)' }}>
                  {['Product', 'Category', 'Price', 'Skin Type', 'Stock', 'Status', 'Actions'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '12px 14px', fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map(p => (
                  <tr key={p.id} style={{ borderBottom: '1px solid rgba(59,130,246,0.06)' }}>
                    <td style={{ padding: '12px 14px', color: '#cbd5e1', fontWeight: 600, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</td>
                    <td style={{ padding: '12px 14px', color: '#94a3b8' }}>{p.cat}</td>
                    <td style={{ padding: '12px 14px', color: '#cbd5e1', fontWeight: 600 }}>{p.price}</td>
                    <td style={{ padding: '12px 14px', color: '#64748b' }}>{p.skin}</td>
                    <td style={{ padding: '12px 14px', color: '#64748b' }}>{p.stock}</td>
                    <td style={{ padding: '12px 14px' }}><span className={`badge ${st(p.stock)}`}>{sl(p.stock)}</span></td>
                    <td style={{ padding: '12px 14px' }}>
                      <div style={{ display: 'flex', gap: 14 }}>
                        <button style={{ fontSize: 12, color: '#60a5fa', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Edit</button>
                        <button onClick={() => del(p.id)} style={{ fontSize: 12, color: '#f87171', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }} onClick={() => setModal(false)} />
          <div className="card" style={{ position: 'relative', width: '100%', maxWidth: 420, maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600 }}>Add Product</h3>
              <button onClick={() => setModal(false)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 18 }}>✕</button>
            </div>
            <form onSubmit={add} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: 6 }}>Name</label>
                <input className="input" value={f.name} onChange={e => setF({ ...f, name: e.target.value })} placeholder="Product name" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: 6 }}>Category</label>
                  <select className="select" value={f.cat} onChange={e => setF({ ...f, cat: e.target.value })}>
                    {['Cleanser','Toner','Serum','Moisturizer','Sunscreen','Exfoliant','Mask','Eye Cream'].map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: 6 }}>Price</label>
                  <input className="input" value={f.price} onChange={e => setF({ ...f, price: e.target.value })} placeholder="$49" />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: 6 }}>Skin Type</label>
                  <select className="select" value={f.skin} onChange={e => setF({ ...f, skin: e.target.value })}>
                    {['All','Oily','Dry','Combination','Sensitive','Acne-prone','Dull'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: 6 }}>Stock</label>
                  <input className="input" type="number" value={f.stock} onChange={e => setF({ ...f, stock: e.target.value })} placeholder="100" />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                <button type="button" onClick={() => setModal(false)} className="btn btn-ghost btn-sm" style={{ flex: 1 }}>Cancel</button>
                <button type="submit" className="btn btn-primary btn-sm" style={{ flex: 1 }}>Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}