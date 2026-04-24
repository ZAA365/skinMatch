import React, { useState } from 'react';
import { DB } from '../utils/database';
import GlowButton from '../components/GlowButton';
import './Admin.css';

function Admin() {
  const [products, setProducts] = useState([...DB.products]);
  const [activeTab, setActiveTab] = useState('subscriptions');

  const [newProduct, setNewProduct] = useState({
    name: '',
    skinType: '',
    concern: '',
    link: '',
    step: ''
  });
  const [selectedProduct, setSelectedProduct] = useState('');
  const [editProduct, setEditProduct] = useState(null);

    const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    // Check if date is valid
    if (isNaN(date.getTime())) return dateString;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  // Add product
  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.skinType || !newProduct.concern) {
      alert('Please fill all fields');
      return;
    }
    const product = {
      id: Date.now(),
      ...newProduct,
      image: 'https://placehold.co/150x150/94cce0/white?text=' + newProduct.name.substring(0, 10)
    };
    DB.products.push(product);
    setProducts([...DB.products]);
    setNewProduct({ name: '', skinType: '', concern: '', link: '', step: '' });
    alert('Product added!');
  };

  // Delete product
  const handleDeleteProduct = () => {
    if (!selectedProduct) {
      alert('Select a product first');
      return;
    }
    const index = DB.products.findIndex(p => p.name === selectedProduct);
    if (index !== -1) {
      DB.products.splice(index, 1);
      setProducts([...DB.products]);
      setSelectedProduct('');
      alert('Product deleted!');
    }
  };

  // Update product
  const handleUpdateProduct = () => {
    if (!editProduct || !selectedProduct) {
      alert('Select a product and fill details');
      return;
    }
    const index = DB.products.findIndex(p => p.name === selectedProduct);
    if (index !== -1) {
      DB.products[index] = { ...DB.products[index], ...editProduct };
      setProducts([...DB.products]);
      setEditProduct(null);
      alert('Product updated!');
    }
  };

  // Select product for editing
  const handleSelectForEdit = (productName) => {
    const product = DB.products.find(p => p.name === productName);
    if (product) {
      setSelectedProduct(productName);
      setEditProduct({ ...product });
    }
  };

  return (
    <div className="admin-page">
      <h2>🛡️ Admin Dashboard</h2>
      
      {/* Tabs */}
      <div className="admin-tabs">
        <button 
          className={`admin-tab ${activeTab === 'subscriptions' ? 'active' : ''}`}
          onClick={() => setActiveTab('subscriptions')}
        >
          <i className="fas fa-users"></i> Subscriptions
        </button>
        <button 
          className={`admin-tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          <i className="fas fa-user-friends"></i> Users
        </button>
        <button 
          className={`admin-tab ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          <i className="fas fa-box"></i> Products
        </button>
        <button 
          className={`admin-tab ${activeTab === 'routines' ? 'active' : ''}`}
          onClick={() => setActiveTab('routines')}
        >
          <i className="fas fa-list-check"></i> Routines
        </button>
      </div>

      {/* ========== SUBSCRIPTIONS TAB ========== */}
      {activeTab === 'subscriptions' && (
        <div className="admin-section">
          <h3>All Subscriptions ({DB.subscriptions.length})</h3>
          
          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Total</h4>
              <p className="stat-number">{DB.subscriptions.length}</p>
            </div>
            <div className="stat-card">
              <h4>Active</h4>
              <p className="stat-number">{DB.subscriptions.filter(s => s.status === 'active').length}</p>
            </div>
            <div className="stat-card">
              <h4>Yearly</h4>
              <p className="stat-number">{DB.subscriptions.filter(s => s.plan === 'yearly').length}</p>
            </div>
            <div className="stat-card">
              <h4>Monthly</h4>
              <p className="stat-number">{DB.subscriptions.filter(s => s.plan === 'monthly').length}</p>
            </div>
          </div>

          {/* Subscriptions List */}
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Plan</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {DB.subscriptions.map((sub, idx) => (
                  <tr key={idx}>
                    <td>{sub.email}</td>
                    <td><span className="badge">{sub.plan}</span></td>
                    <td>{sub.amount}</td>
                    <td>{formatDate(sub.date)}</td>
                    <td>
                      <span className={`status-badge ${sub.status}`}>
                        {sub.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========== USERS TAB ========== */}
      {activeTab === 'users' && (
        <div className="admin-section">
          <h3>All Users ({DB.users.length})</h3>
          
          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Total Users</h4>
              <p className="stat-number">{DB.users.length}</p>
            </div>
            <div className="stat-card">
              <h4>Subscribed</h4>
              <p className="stat-number">{DB.users.filter(u => u.subscribed).length}</p>
            </div>
            <div className="stat-card">
              <h4>Free Users</h4>
              <p className="stat-number">{DB.users.filter(u => !u.subscribed).length}</p>
            </div>
            <div className="stat-card">
              <h4>Admins</h4>
              <p className="stat-number">{DB.users.filter(u => u.isAdmin).length}</p>
            </div>
          </div>

          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subscribed</th>
                  <th>Admin</th>
                </tr>
              </thead>
              <tbody>
                {DB.users.map((user, idx) => (
                  <tr key={idx}>
                    <td>{user.firstName} {user.lastName}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`status-badge ${user.subscribed ? 'active' : 'expired'}`}>
                        {user.subscribed ? 'Yes ✨' : 'No'}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${user.isAdmin ? 'active' : 'expired'}`}>
                        {user.isAdmin ? 'Admin' : 'User'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========== PRODUCTS TAB ========== */}
      {activeTab === 'products' && (
        <div className="admin-section">
          <h3>Product Management ({products.length} products)</h3>
          
          {/* Add Product Form */}
          <div className="product-form">
            <h4>Add New Product</h4>
            <div className="form-row">
              <input
                placeholder="Product name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
              <input
                placeholder="Skin type (oily/dry/sensitive)"
                value={newProduct.skinType}
                onChange={(e) => setNewProduct({ ...newProduct, skinType: e.target.value })}
              />
              <input
                placeholder="Concern (acne/dark spots/dryness)"
                value={newProduct.concern}
                onChange={(e) => setNewProduct({ ...newProduct, concern: e.target.value })}
              />
              <input
                placeholder="Product link (URL)"
                value={newProduct.link}
                onChange={(e) => setNewProduct({ ...newProduct, link: e.target.value })}
              />
              <input
                placeholder="Step (cleanser/serum/toner/etc)"
                value={newProduct.step}
                onChange={(e) => setNewProduct({ ...newProduct, step: e.target.value })}
              />
            </div>
            <GlowButton onClick={handleAddProduct}>
              <i className="fas fa-plus"></i> Add Product
            </GlowButton>
          </div>

          {/* Edit/Delete Product */}
          <div className="product-actions">
            <h4>Edit or Delete Product</h4>
            <select 
              value={selectedProduct} 
              onChange={(e) => handleSelectForEdit(e.target.value)}
            >
              <option value="">Select product</option>
              {products.map(p => (
                <option key={p.id} value={p.name}>{p.name}</option>
              ))}
            </select>
            
            {editProduct && (
              <div className="edit-form">
                <input
                  value={editProduct.name}
                  onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                  placeholder="Name"
                />
                <input
                  value={editProduct.link}
                  onChange={(e) => setEditProduct({ ...editProduct, link: e.target.value })}
                  placeholder="Link"
                />
                <input
                  value={editProduct.step}
                  onChange={(e) => setEditProduct({ ...editProduct, step: e.target.value })}
                  placeholder="Step"
                />
              </div>
            )}
            
            <div className="action-buttons">
              <GlowButton onClick={handleUpdateProduct}>
                <i className="fas fa-save"></i> Update
              </GlowButton>
              <GlowButton onClick={handleDeleteProduct} className="delete-btn">
                <i className="fas fa-trash"></i> Delete
              </GlowButton>
            </div>
          </div>

          {/* Products List */}
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Skin Type</th>
                  <th>Concern</th>
                  <th>Step</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr key={idx}>
                    <td>{product.name}</td>
                    <td><span className="badge">{product.skinType}</span></td>
                    <td><span className="badge">{product.concern}</span></td>
                    <td>{product.step}</td>
                    <td>
                      <a href={product.link} target="_blank" rel="noopener noreferrer" className="link-btn">
                        View <i className="fas fa-external-link-alt"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========== ROUTINES TAB ========== */}
      {activeTab === 'routines' && (
        <div className="admin-section">
          <h3>Available Routines ({Object.keys(DB.routines).length})</h3>
          <div className="routines-grid">
            {Object.entries(DB.routines).map(([key, routine]) => (
              <div key={key} className="routine-card">
                <h4>{key.replace('_', ' + ')}</h4>
                <p><strong>Morning:</strong> {routine.morning.length} steps</p>
                <p><strong>Night:</strong> {routine.night.length} steps</p>
                <p><strong>Total:</strong> {routine.total}</p>
                <div className="routine-products">
                  <p><strong>Products:</strong></p>
                  {routine.morning.map((item, i) => (
                    <span key={i} className="product-tag">{item.product.split(' ').slice(0, 2).join(' ')}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;