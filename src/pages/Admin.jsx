import React, { useState } from 'react';
import { DB } from '../utils/database';
import GlowButton from '../components/GlowButton';
import './Admin.css';

function Admin() {
  const [products, setProducts] = useState(DB.products);
  const [newProduct, setNewProduct] = useState({
    name: '',
    skinType: '',
    concern: '',
    link: ''
  });
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleAddProduct = () => {
    const product = {
      id: Date.now(),
      ...newProduct
    };
    DB.products.push(product);
    setProducts([...DB.products]);
    setNewProduct({ name: '', skinType: '', concern: '', link: '' });
  };

  const handleDeleteProduct = () => {
    const index = DB.products.findIndex(p => p.name === selectedProduct);
    if (index !== -1) {
      DB.products.splice(index, 1);
      setProducts([...DB.products]);
    }
  };

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>
      
      <div className="admin-section">
        <h3>Subscriptions ({DB.subscriptions.length})</h3>
        <div className="sub-list">
          {DB.subscriptions.map((sub, idx) => (
            <div key={idx} className="sub-item">
              <p>{sub.email}</p>
              <p>{new Date(sub.date).toLocaleDateString()}</p>
              <p>{sub.type}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="admin-section">
        <h3>Product Management</h3>
        
        <div className="product-form">
          <input
            placeholder="Product name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            placeholder="Skin type"
            value={newProduct.skinType}
            onChange={(e) => setNewProduct({ ...newProduct, skinType: e.target.value })}
          />
          <input
            placeholder="Concern"
            value={newProduct.concern}
            onChange={(e) => setNewProduct({ ...newProduct, concern: e.target.value })}
          />
          <input
            placeholder="Product link"
            value={newProduct.link}
            onChange={(e) => setNewProduct({ ...newProduct, link: e.target.value })}
          />
          <GlowButton onClick={handleAddProduct}>Add Product</GlowButton>
        </div>
        
        <div className="product-actions">
          <select 
            value={selectedProduct} 
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="">Select product</option>
            {products.map(p => (
              <option key={p.id} value={p.name}>{p.name}</option>
            ))}
          </select>
          <GlowButton onClick={handleDeleteProduct}>Delete</GlowButton>
        </div>
      </div>
    </div>
  );
}

export default Admin;