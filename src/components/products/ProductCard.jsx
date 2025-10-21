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
      <div className="flex flex-col h-full p-4 transition-shadow bg-white border rounded-lg hover:shadow-lg">
        <div className="relative mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-48 rounded"
          />
          {discount > 0 && (
            <span className="absolute px-2 py-1 text-xs font-bold text-white bg-red-500 rounded top-2 right-2">
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
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
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
            className="flex items-center justify-center w-full gap-2 px-3 py-2 text-sm text-white transition-colors bg-blue-600 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};
