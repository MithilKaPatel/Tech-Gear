import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartSummary = () => {
  const { cartTotal } = useContext(CartContext);

  const shipping = cartTotal > 100 ? 0 : 9.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  return (
    <div className="space-y-2">
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
      <div className="border-t pt-2 flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      {cartTotal < 100 && (
        <p className="text-xs text-gray-500">
          Add ${(100 - cartTotal).toFixed(2)} more for free shipping!
        </p>
      )}
    </div>
  );
};
