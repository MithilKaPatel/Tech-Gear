import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const ReviewStep = ({ shippingData, paymentData, onBack, onPlaceOrder, loading = false }) => {
  const { cartItems, cartTotal } = useContext(CartContext);

  const shipping = cartTotal > 100 ? 0 : 9.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  return (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Review Your Order</h2>

        <div className="mb-6">
          <h3 className="font-medium mb-2">Shipping Address</h3>
          <div className="text-sm text-gray-700">
            <p>{shippingData.firstName} {shippingData.lastName}</p>
            <p>{shippingData.address}</p>
            <p>{shippingData.city}, {shippingData.state} {shippingData.zip}</p>
            <p>{shippingData.phone}</p>
            <p>{shippingData.email}</p>
          </div>
          <button onClick={onBack} className="text-blue-600 text-sm mt-2 hover:underline">
            Edit
          </button>
        </div>

        <div className="mb-6 pb-6 border-b">
          <h3 className="font-medium mb-2">Payment Method</h3>
          <p className="text-sm text-gray-700 capitalize">
            {paymentData.method === 'card' && 'Credit/Debit Card'}
            {paymentData.method === 'paypal' && 'PayPal'}
            {paymentData.method === 'cod' && 'Cash on Delivery'}
          </p>
          {paymentData.method === 'card' && (
            <p className="text-sm text-gray-700">**** **** **** {paymentData.cardNumber.slice(-4)}</p>
          )}
          <button onClick={onBack} className="text-blue-600 text-sm mt-2 hover:underline">
            Edit
          </button>
        </div>

        <div className="mb-6">
          <h3 className="font-medium mb-3">Order Items</h3>
          <div className="space-y-3">
            {cartItems.map(item => (
              <div key={item.id} className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2 pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 text-sm">
        <input type="checkbox" id="terms" required className="mt-1" />
        <label htmlFor="terms" className="text-gray-600">
          I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
        </label>
      </div>

      <button
        onClick={onPlaceOrder}
        disabled={loading}
        className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Placing Order...' : 'Place Order'}
      </button>
    </div>
  );
};
