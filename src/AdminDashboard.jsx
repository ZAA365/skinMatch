import React from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { label: 'Total Users', value: '1,542', change: '+12%', icon: '👤' },
  { label: 'Active Plans', value: '876', change: '+8%', icon: '📋' },
  { label: 'Revenue', value: '$48.2K', change: '+23%', icon: '💰' },
  { label: 'Conversion', value: '14.3%', change: '+2.1%', icon: '📈' },
]

const orders = [
  { id: '#SC-2847', user: 'Sarah K.', plan: 'Premium', amount: '$99', status: 'Active' },
  { id: '#SC-2846', user: 'Mike R.', plan: 'Budget', amount: '$29', status: 'Active' },
  { id: '#SC-2845', user: 'Emma L.', plan: 'Luxury', amount: '$159', status: 'Pending' },
  { id: '#SC-2844', user: 'James P.', plan: 'Mid-Range', amount: '$59', status: 'Cancelled' },
  { id: '#SC-2843', user: 'Lily W.', plan: 'Premium', amount: '$99', status: 'Active' },
]

const bc = { Active: 'badge-green', Pending: 'badge-yellow', Cancelled: 'badge-red' }

export default function AdminDashboard() {
  return (
    <div style={{ minHeight: '100vh', padding: '80px 20px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#60a5fa', display: 'block', marginBottom: 4 }}>Admin Panel</span>
            <h1 style={{ fontSize: 'clamp(1.3rem, 4vw, 2rem)', fontFamily: "'Playfair Display',serif" }}>Dashboard</h1>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Link to="/admin/orders" className="btn btn-ghost btn-sm">Orders</Link>
            <Link to="/admin/products" className="btn btn-ghost btn-sm">Products</Link>
          </div>
        </div>

        <div className="grid-2" style={{ marginBottom: 28 }}>
          {stats.map((s, i) => (
            <div className="card" key={i} style={{ padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <span style={{ fontSize: 22 }}>{s.icon}</span>
                <span className="badge badge-green">{s.change}</span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 700 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="card">
          <h3 style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', marginBottom: 16 }}>Recent Orders</h3>

          {/* Mobile */}
          <div className="show-mobile">
            {orders.map(o => (
              <div className="m-card" key={o.id}>
                <div className="m-row">
                  <span style={{ fontSize: 12, color: '#60a5fa', fontWeight: 600 }}>{o.id}</span>
                  <span className={`badge ${bc[o.status]}`}>{o.status}</span>
                </div>
                <div className="m-row">
                  <span style={{ fontSize: 12, color: '#64748b' }}>{o.user}</span>
                  <span style={{ fontSize: 12, color: '#cbd5e1', fontWeight: 600 }}>{o.amount}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hide-mobile" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(59,130,246,0.1)' }}>
                  {['Order', 'User', 'Plan', 'Amount', 'Status'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '12px 14px', fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orders.map(o => (
                  <tr key={o.id} style={{ borderBottom: '1px solid rgba(59,130,246,0.06)' }}>
                    <td style={{ padding: '12px 14px', color: '#60a5fa', fontWeight: 600 }}>{o.id}</td>
                    <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>{o.user}</td>
                    <td style={{ padding: '12px 14px', color: '#94a3b8' }}>{o.plan}</td>
                    <td style={{ padding: '12px 14px', color: '#cbd5e1', fontWeight: 600 }}>{o.amount}</td>
                    <td style={{ padding: '12px 14px' }}><span className={`badge ${bc[o.status]}`}>{o.status}</span></td>
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