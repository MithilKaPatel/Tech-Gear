import { useState } from 'react';

export const ShippingStep = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'USA'
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip) newErrors.zip = 'ZIP code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white border rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${errors.firstName ? 'border-red-500' : ''}`}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${errors.lastName ? 'border-red-500' : ''}`}
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full border rounded px-3 py-2 ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full border rounded px-3 py-2 ${errors.phone ? 'border-red-500' : ''}`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Address *</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={`w-full border rounded px-3 py-2 ${errors.address ? 'border-red-500' : ''}`}
        />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">City *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${errors.city ? 'border-red-500' : ''}`}
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">State *</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${errors.state ? 'border-red-500' : ''}`}
          />
          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">ZIP *</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${errors.zip ? 'border-red-500' : ''}`}
          />
          {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Continue to Payment
      </button>
    </form>
  );
};
