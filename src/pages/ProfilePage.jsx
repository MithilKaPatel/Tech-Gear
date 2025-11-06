import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
  const { user, signOut, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }

    setFormData({
      name: user.user_metadata?.name || '',
      email: user.email || '',
      phone: user.user_metadata?.phone || ''
    });
  }, [user, navigate]);

  const handleSave = async () => {
    setLoading(true);
    setError('');

    try {
      await updateProfile({
        name: formData.name,
        phone: formData.phone
      });
      setEditMode(false);
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (err) {
      setError('Failed to logout');
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      {error && (
        <div className="p-4 mb-6 text-sm text-red-600 rounded bg-red-50">
          {error}
        </div>
      )}

      <div className="bg-white border rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Profile Information</h2>
          {!editMode && (
            <button
              onClick={() => setEditMode(true)}
              className="text-blue-600 hover:underline font-medium"
            >
              Edit
            </button>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={!editMode}
              className="w-full border rounded px-3 py-2 disabled:bg-gray-50"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              disabled
              className="w-full border rounded px-3 py-2 bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={!editMode}
              className="w-full border rounded px-3 py-2 disabled:bg-gray-50"
              placeholder="Enter your phone number"
            />
          </div>

          {editMode && (
            <div className="flex gap-3 pt-4">
              <button
                onClick={handleSave}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50 font-medium"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                onClick={() => {
                  setEditMode(false);
                  setFormData({
                    name: user.user_metadata?.name || '',
                    email: user.email || '',
                    phone: user.user_metadata?.phone || ''
                  });
                }}
                className="border px-6 py-2 rounded hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-6 py-2 text-red-600 border border-red-300 rounded hover:bg-red-50 font-medium"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
};
