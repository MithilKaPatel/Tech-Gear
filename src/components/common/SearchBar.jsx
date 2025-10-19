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
    const filtered = products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm) ||
          product.description?.toLowerCase().includes(searchTerm)
      )
      .slice(0, 5);

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
        <Search className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
        <label htmlFor="product-search" className="sr-only">
          Search products
        </label>
        <input
          id="product-search"
          name="search"
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full py-2 pl-10 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoComplete="off"
          autoFocus
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute -translate-y-1/2 right-3 top-1/2"
            aria-label="Clear search"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 overflow-y-auto bg-white border rounded-lg shadow-lg top-full max-h-96">
          <div className="p-2">
            {results.map((product) => (
              <button
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="flex items-center w-full gap-3 p-3 rounded hover:bg-gray-50"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-12 h-12 rounded"
                />
                <div className="flex-1 text-left">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="font-semibold">${product.price.toFixed(2)}</p>
              </button>
            ))}
          </div>

          <div className="p-2 border-t">
            <button
              onClick={handleViewAll}
              className="w-full py-2 font-medium text-center text-blue-600 rounded hover:bg-blue-50"
            >
              View all results for "{query}"
            </button>
          </div>
        </div>
      )}

      {query.trim().length >= 2 && results.length === 0 && (
        <div className="absolute z-50 w-full p-4 mt-2 text-center text-gray-500 bg-white border rounded-lg shadow-lg top-full">
          No products found for "{query}"
        </div>
      )}
    </div>
  );
};
