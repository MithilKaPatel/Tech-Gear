import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from '../components/cart/CartItem';
import { CartSummary } from '../components/cart/CartSummary';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <ShoppingCart className="w-24 h-24 mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Start shopping to add items to your cart</p>
        <button
          onClick={() => navigate('/products')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 sticky top-4">
            <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
            <CartSummary />
            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={() => navigate('/products')}
              className="w-full border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors mt-2"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
