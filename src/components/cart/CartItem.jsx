import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

export const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex gap-4 border rounded-lg p-3">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />

      <div className="flex-1">
        <h4 className="font-medium line-clamp-2 mb-1">{item.name}</h4>
        <p className="text-sm text-gray-500">{item.brand}</p>
        <p className="font-semibold mt-2">${item.price}</p>
      </div>

      <div className="flex flex-col justify-between items-end">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>

        <div className="flex items-center border rounded">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="p-1 hover:bg-gray-100 transition-colors"
            disabled={item.quantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-3 text-sm font-medium">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-1 hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
