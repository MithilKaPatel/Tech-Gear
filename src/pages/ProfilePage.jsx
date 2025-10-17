import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { User, Package, MapPin, LogOut, Plus, Edit2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
  const { user, profile, logout, updateProfile, isAuthenticated, getAddresses, getOrders, addAddress, updateAddress, deleteAddress } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [addressForm, setAddressForm] = useState({
    type: 'Home',
    street: '',
    city: '',
    state: '',
    zip: '',
    is_default: false
  });
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
      return;
    }

    if (profile) {
      setFormData({
        name: profile.name || '',
        email: user?.email || '',
        phone: profile.phone || ''
      });
    }

    if (activeTab === 'addresses') {
      loadAddresses();
    } else if (activeTab === 'orders') {
      loadOrders();
    }
  }, [isAuthenticated, profile, user, navigate, activeTab]);

  const loadAddresses = async () => {
    setLoading(true);
    const result = await getAddresses();
    if (result.success) {
      setAddresses(result.data);
    }
    setLoading(false);
  };

  const loadOrders = async () => {
    setLoading(true);
    const result = await getOrders();
    if (result.success) {
      setOrders(result.data);
    }
    setLoading(false);
  };

  const handleSave = async () => {
    setLoading(true);
    const result = await updateProfile({
      name: formData.name,
      phone: formData.phone
    });

    if (result.success) {
      setEditMode(false);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleAddAddress = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = editingAddressId
      ? await updateAddress(editingAddressId, addressForm)
      : await addAddress(addressForm);

    if (result.success) {
      setShowAddressForm(false);
      setEditingAddressId(null);
      setAddressForm({
        type: 'Home',
        street: '',
        city: '',
        state: '',
        zip: '',
        is_default: false
      });
      loadAddresses();
    }

    setLoading(false);
  };

  const handleEditAddress = (address) => {
    setAddressForm({
      type: address.type,
      street: address.street,
      city: address.city,
      state: address.state,
      zip: address.zip,
      is_default: address.is_default
    });
    setEditingAddressId(address.id);
    setShowAddressForm(true);
  };

  const handleDeleteAddress = async (addressId) => {
    if (!confirm('Are you sure you want to delete this address?')) return;

    setLoading(true);
    const result = await deleteAddress(addressId);
    if (result.success) {
      loadAddresses();
    }
    setLoading(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (!isAuthenticated || !profile) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white border rounded-lg p-4">
            <div className="text-center mb-6">
              <img
                src={profile.avatar_url}
                alt={profile.name}
                className="w-20 h-20 rounded-full mx-auto mb-3"
              />
              <h3 className="font-semibold">{profile.name}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded ${
                  activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <User className="w-5 h-5" />
                Profile
              </button>

              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded ${
                  activeTab === 'orders' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <Package className="w-5 h-5" />
                Orders
              </button>

              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded ${
                  activeTab === 'addresses' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <MapPin className="w-5 h-5" />
                Addresses
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2 rounded hover:bg-red-50 hover:text-red-600"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </nav>
          </div>
        </div>

        <div className="md:col-span-3">
          {activeTab === 'profile' && (
            <div className="bg-white border rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Profile Information</h2>
                {!editMode && (
                  <button
                    onClick={() => setEditMode(true)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={!editMode}
                    className="w-full border rounded px-3 py-2 disabled:bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    disabled
                    className="w-full border rounded px-3 py-2 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={!editMode}
                    className="w-full border rounded px-3 py-2 disabled:bg-gray-50"
                  />
                </div>

                {editMode && (
                  <div className="flex gap-3">
                    <button
                      onClick={handleSave}
                      disabled={loading}
                      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                      {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                      onClick={() => {
                        setEditMode(false);
                        setFormData({
                          name: profile.name || '',
                          email: user?.email || '',
                          phone: profile.phone || ''
                        });
                      }}
                      className="border px-6 py-2 rounded hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Order History</h2>

              {loading ? (
                <p className="text-center py-8 text-gray-500">Loading orders...</p>
              ) : orders.length === 0 ? (
                <div className="text-center py-8">
                  <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 mb-4">No orders yet</p>
                  <button
                    onClick={() => navigate('/products')}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="font-semibold">{order.order_number}</p>
                          <p className="text-sm text-gray-500">{formatDate(order.created_at)}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>

                      <div className="space-y-2 mb-4">
                        {order.order_items.map((item) => (
                          <div key={item.id} className="flex gap-3">
                            <img
                              src={item.product_image}
                              alt={item.product_name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <p className="font-medium">{item.product_name}</p>
                              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-semibold">${item.price.toFixed(2)}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t">
                        <p className="text-sm text-gray-600">Payment: {order.payment_method}</p>
                        <p className="text-lg font-bold">${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="bg-white border rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Saved Addresses</h2>
                <button
                  onClick={() => {
                    setShowAddressForm(true);
                    setEditingAddressId(null);
                    setAddressForm({
                      type: 'Home',
                      street: '',
                      city: '',
                      state: '',
                      zip: '',
                      is_default: false
                    });
                  }}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4" />
                  Add Address
                </button>
              </div>

              {showAddressForm && (
                <form onSubmit={handleAddAddress} className="mb-6 p-4 border rounded-lg bg-gray-50">
                  <h3 className="font-semibold mb-4">{editingAddressId ? 'Edit Address' : 'New Address'}</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Type</label>
                      <select
                        value={addressForm.type}
                        onChange={(e) => setAddressForm({ ...addressForm, type: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                        required
                      >
                        <option value="Home">Home</option>
                        <option value="Work">Work</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Street Address</label>
                      <input
                        type="text"
                        value={addressForm.street}
                        onChange={(e) => setAddressForm({ ...addressForm, street: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">City</label>
                      <input
                        type="text"
                        value={addressForm.city}
                        onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">State</label>
                      <input
                        type="text"
                        value={addressForm.state}
                        onChange={(e) => setAddressForm({ ...addressForm, state: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">ZIP Code</label>
                      <input
                        type="text"
                        value={addressForm.zip}
                        onChange={(e) => setAddressForm({ ...addressForm, zip: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                        required
                      />
                    </div>

                    <div className="flex items-center">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={addressForm.is_default}
                          onChange={(e) => setAddressForm({ ...addressForm, is_default: e.target.checked })}
                          className="rounded"
                        />
                        <span className="text-sm">Set as default</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                      {loading ? 'Saving...' : (editingAddressId ? 'Update' : 'Add')}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddressForm(false);
                        setEditingAddressId(null);
                      }}
                      className="border px-6 py-2 rounded hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {loading && !showAddressForm ? (
                <p className="text-center py-8 text-gray-500">Loading addresses...</p>
              ) : addresses.length === 0 && !showAddressForm ? (
                <div className="text-center py-8">
                  <MapPin className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">No saved addresses</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {addresses.map((address) => (
                    <div key={address.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold">{address.type}</span>
                            {address.is_default && (
                              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-gray-700">{address.street}</p>
                          <p className="text-gray-700">
                            {address.city}, {address.state} {address.zip}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditAddress(address)}
                            className="p-2 hover:bg-gray-100 rounded"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteAddress(address.id)}
                            className="p-2 hover:bg-red-100 hover:text-red-600 rounded"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
