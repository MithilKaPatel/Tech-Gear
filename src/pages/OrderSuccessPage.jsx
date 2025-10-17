import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

export const OrderSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, orderNumber, shippingData, total } = location.state || {};

  useEffect(() => {
    if (!orderId) {
      navigate('/');
    }
  }, [orderId, navigate]);

  if (!orderId) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-center">
      <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />

      <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>

      <p className="text-gray-600 mb-8">
        Thank you for your order. We've sent a confirmation email to {shippingData?.email}
      </p>

      <div className="bg-white border rounded-lg p-6 mb-8 text-left">
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Order Number</p>
            <p className="font-semibold">{orderNumber || orderId}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Total Amount</p>
            <p className="font-semibold text-lg">${total?.toFixed(2)}</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm text-gray-500 mb-2">Estimated Delivery</p>
          <p className="font-medium">3-5 Business Days</p>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <button
          onClick={() => navigate('/profile?tab=orders')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View Orders
        </button>
        <button
          onClick={() => navigate('/products')}
          className="border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
