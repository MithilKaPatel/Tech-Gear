import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { Star, ShoppingCart, Minus, Plus, ArrowLeft, Check } from 'lucide-react';

export const ProductDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button
          onClick={() => navigate('/products')}
          className="text-blue-600 hover:text-blue-700"
        >
          ← Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 3000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-sm border p-6">
        <div>
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg"
            />
            {discount > 0 && (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded">
                Save {discount}%
              </span>
            )}
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500 uppercase mb-2">{product.brand}</p>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{product.name}</h1>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="font-medium text-lg">{product.rating}</span>
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </div>

          <div className="mb-6 pb-6 border-b">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-4xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="text-green-600 font-semibold">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>
            <p className={`text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `✓ ${product.stock} in stock` : '✗ Out of stock'}
            </p>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-lg">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border rounded-lg bg-white">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-gray-100 transition-colors"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center border-x py-2 focus:outline-none"
                min="1"
                max={product.stock}
              />
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="p-3 hover:bg-gray-100 transition-colors"
                disabled={quantity >= product.stock}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>

          {showAddedMessage && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Added to cart successfully!</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex justify-between py-3 border-b">
              <span className="font-medium text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span className="text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
