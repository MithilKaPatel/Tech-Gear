import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search } from 'lucide-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { ProductContext } from '../../context/ProductContext';
import { CartDrawer } from '../cart/CartDrawer';

export const Header = () => {
  const { itemCount } = useContext(CartContext);
  const { searchQuery, setSearchQuery } = useContext(ProductContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              PC<span className="text-blue-600">Parts</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
                Products
              </Link>
            </nav>

            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <User className="w-6 h-6" />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
