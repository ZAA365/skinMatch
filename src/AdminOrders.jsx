import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const all = [
  { id: '#SC-2847', user: 'Sarah K.', email: 'sarah@email.com', plan: 'Premium', amount: '$99', date: 'Dec 15', status: 'Active' },
  { id: '#SC-2846', user: 'Mike R.', email: 'mike@email.com', plan: 'Budget', amount: '$29', date: 'Dec 14', status: 'Active' },
  { id: '#SC-2845', user: 'Emma L.', email: 'emma@email.com', plan: 'Luxury', amount: '$159', date: 'Dec 14', status: 'Pending' },
  { id: '#SC-2844', user: 'James P.', email: 'james@email.com', plan: 'Mid-Range', amount: '$59', date: 'Dec 13', status: 'Cancelled' },
  { id: '#SC-2843', user: 'Lily W.', email: 'lily@email.com', plan: 'Premium', amount: '$99', date: 'Dec 13', status: 'Active' },
  { id: '#SC-2842', user: 'David C.', email: 'david@email.com', plan: 'Budget', amount: '$29', date: 'Dec 12', status: 'Active' },
  { id: '#SC-2841', user: 'Nina F.', email: 'nina@email.com', plan: 'Premium', amount: '$99', date: 'Dec 12', status: 'Pending' },
]

const bc = { Active: 'badge-green', Pending: 'badge-yellow', Cancelled: 'badge-red' }

export default function AdminOrders() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? all : all.filter(o => o.status === filter)

  return (
    <div style={{ minHeight: '100vh', padding: '80px 20px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <Link to="/admin" style={{ fontSize: 11, color: '#64748b', textDecoration: 'none', display: 'inline-block', marginBottom: 6 }}>← Dashboard</Link>
          <h1 style={{ fontSize: 'clamp(1.3rem, 4vw, 2rem)', fontFamily: "'Playfair Display',serif", marginBottom: 14 }}>Manage Orders</h1>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
            {['All', 'Active', 'Pending', 'Cancelled'].map(f => (
              <button key={f} onClick={() => setFilter(f)} className="btn btn-sm" style={{ background: filter === f ? '#2563eb' : 'transparent', color: filter === f ? '#fff' : '#64748b', border: filter === f ? 'none' : '1px solid rgba(59,130,246,0.15)', borderRadius: 50, whiteSpace: 'nowrap', fontSize: 11 }}>{f}</button>
            ))}
          </div>
        </div>

        {list.length === 0 && <div className="card" style={{ textAlign: 'center', color: '#64748b', padding: 48 }}>No orders found.</div>}

        {/* Mobile */}
        <div className="show-mobile">
          {list.map(o => (
            <div className="m-card" key={o.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: '#60a5fa', fontWeight: 600 }}>{o.id}</span>
                <span className={`badge ${bc[o.status]}`}>{o.status}</span>
              </div>
              {[['User', o.user], ['Plan', o.plan], ['Amount', o.amount], ['Date', o.date]].map(([l, v]) => (
                <div className="m-row" key={l}><span style={{ fontSize: 11, color: '#64748b' }}>{l}</span><span style={{ fontSize: 12, color: '#cbd5e1' }}>{v}</span></div>
              ))}
              <div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid rgba(59,130,246,0.08)' }}>
                <button style={{ fontSize: 11, color: '#60a5fa', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>View Details →</button>
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
                  {['Order', 'User', 'Email', 'Plan', 'Amount', 'Date', 'Status', ''].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '12px 14px', fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {list.map(o => (
                  <tr key={o.id} style={{ borderBottom: '1px solid rgba(59,130,246,0.06)' }}>
                    <td style={{ padding: '12px 14px', color: '#60a5fa', fontWeight: 600 }}>{o.id}</td>
                    <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>{o.user}</td>
                    <td style={{ padding: '12px 14px', color: '#64748b' }}>{o.email}</td>
                    <td style={{ padding: '12px 14px', color: '#94a3b8' }}>{o.plan}</td>
                    <td style={{ padding: '12px 14px', color: '#cbd5e1', fontWeight: 600 }}>{o.amount}</td>
                    <td style={{ padding: '12px 14px', color: '#64748b' }}>{o.date}</td>
                    <td style={{ padding: '12px 14px' }}><span className={`badge ${bc[o.status]}`}>{o.status}</span></td>
                    <td style={{ padding: '12px 14px' }}><button style={{ fontSize: 12, color: '#60a5fa', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>View</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}