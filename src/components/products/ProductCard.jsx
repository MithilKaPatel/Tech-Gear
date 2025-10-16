import { ShoppingCart, Star } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/products/${product.slug}`} className="block">
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white h-full flex flex-col">
        <div className="relative mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded"
          />
          {discount > 0 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
        </div>

        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase">{product.brand}</span>
          <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};
