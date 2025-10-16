import { useState } from 'react';

export const PaymentStep = ({ onSubmit, onBack, initialData }) => {
  const [paymentMethod, setPaymentMethod] = useState(initialData?.method || 'card');
  const [formData, setFormData] = useState(initialData || {
    method: 'card',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    if (paymentMethod === 'card') {
      const newErrors = {};
      if (!formData.cardNumber || formData.cardNumber.length < 16) {
        newErrors.cardNumber = 'Valid card number required';
      }
      if (!formData.cardName) newErrors.cardName = 'Cardholder name required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date required';
      if (!formData.cvv || formData.cvv.length < 3) newErrors.cvv = 'Valid CVV required';

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ ...formData, method: paymentMethod });
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
      <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

      <div className="space-y-3">
        <label className="flex items-center p-4 border rounded cursor-pointer hover:bg-gray-50 transition-colors">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-3"
          />
          <span className="font-medium">Credit/Debit Card</span>
        </label>

        <label className="flex items-center p-4 border rounded cursor-pointer hover:bg-gray-50 transition-colors">
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-3"
          />
          <span className="font-medium">PayPal</span>
        </label>

        <label className="flex items-center p-4 border rounded cursor-pointer hover:bg-gray-50 transition-colors">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-3"
          />
          <span className="font-medium">Cash on Delivery</span>
        </label>
      </div>

      {paymentMethod === 'card' && (
        <div className="space-y-4 pt-4 border-t">
          <div>
            <label className="block text-sm font-medium mb-1">Card Number *</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              maxLength="16"
              className={`w-full border rounded px-3 py-2 ${errors.cardNumber ? 'border-red-500' : ''}`}
            />
            {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Cardholder Name *</label>
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full border rounded px-3 py-2 ${errors.cardName ? 'border-red-500' : ''}`}
            />
            {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Expiry Date *</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                maxLength="5"
                className={`w-full border rounded px-3 py-2 ${errors.expiryDate ? 'border-red-500' : ''}`}
              />
              {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">CVV *</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                maxLength="4"
                className={`w-full border rounded px-3 py-2 ${errors.cvv ? 'border-red-500' : ''}`}
              />
              {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
            </div>
          </div>
        </div>
      )}

      {paymentMethod === 'paypal' && (
        <div className="p-4 bg-blue-50 rounded">
          <p className="text-sm">You will be redirected to PayPal to complete your payment.</p>
        </div>
      )}

      {paymentMethod === 'cod' && (
        <div className="p-4 bg-yellow-50 rounded">
          <p className="text-sm">Pay with cash when your order is delivered. Additional charges may apply.</p>
        </div>
      )}

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Review Order
        </button>
      </div>
    </form>
  );
};
