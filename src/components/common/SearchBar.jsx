import { useState, useContext } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

export const SearchBar = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleSearch = (value) => {
    setQuery(value);

    if (value.trim().length < 2) {
      setResults([]);
      return;
    }

    const searchTerm = value.toLowerCase();
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.description?.toLowerCase().includes(searchTerm)
    ).slice(0, 5);

    setResults(filtered);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    if (onClose) onClose();
    setQuery('');
    setResults([]);
  };

  const handleViewAll = () => {
    navigate(`/products?search=${encodeURIComponent(query)}`);
    if (onClose) onClose();
    setQuery('');
    setResults([]);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            {results.map((product) => (
              <button
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1 text-left">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="font-semibold">${product.price.toFixed(2)}</p>
              </button>
            ))}
          </div>

          <div className="border-t p-2">
            <button
              onClick={handleViewAll}
              className="w-full text-center py-2 text-blue-600 hover:bg-blue-50 rounded font-medium"
            >
              View all results for "{query}"
            </button>
          </div>
        </div>
      )}

      {query.trim().length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg z-50 p-4 text-center text-gray-500">
          No products found for "{query}"
        </div>
      )}
    </div>
  );
};
