import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Categories from './Categories'
import Payment from './Payment'
import AdminDashboard from './AdminDashboard'
import AdminOrders from './AdminOrders'
import AdminProducts from './AdminProducts'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/products" element={<AdminProducts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}