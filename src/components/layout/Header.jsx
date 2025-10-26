import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingCart,
  Search,
  LogIn,
  UserCircle,
  Package,
  MapPin,
  LogOut
} from 'lucide-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartDrawer } from '../cart/CartDrawer';
import { useAuth } from '../../hooks/useAuth';
import { LoginModal } from '../auth/LoginModal';
import { RegisterModal } from "../auth/RegisterModal";
import { SearchBar } from '../common/SearchBar';

export const Header = () => {
  const { itemCount } = useContext(CartContext);
  const { user, logout } = useAuth();
  const isAuthenticated = !!user;

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="flex items-center justify-between gap-4 px-4 py-4 mx-auto max-w-7xl">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            PC<span className="text-blue-600">Parts</span>
          </Link>

          <nav className="items-center hidden gap-6 md:flex">
            <Link
              to="/"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              Products
            </Link>
          </nav>

          <div className="flex-1 hidden max-w-md md:block">
            <SearchBar />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-gray-700 transition-colors md:hidden hover:text-blue-600"
            >
              <Search className="w-6 h-6" />
            </button>

            <div className="relative">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 p-2 text-gray-700 transition-colors hover:text-blue-600"
                  >
                    <img
                      src={user?.avatar_url}
                      alt={user?.full_name}
                      className="w-8 h-8 rounded-full"
                    />
                  </button>

                  {showUserMenu && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowUserMenu(false)}
                      />
                      <div className="absolute right-0 z-50 w-48 py-2 mt-2 bg-white border rounded-lg shadow-lg">
                        <div className="px-4 py-2 border-b">
                          <p className="text-sm font-semibold">{user?.full_name}</p>
                          <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                        </div>

                        <button
                          onClick={() => {
                            navigate('/profile');
                            setShowUserMenu(false);
                          }}
                          className="flex items-center w-full gap-3 px-4 py-2 text-left hover:bg-gray-50"
                        >
                          <UserCircle className="w-4 h-4" />
                          Profile
                        </button>

                        <button
                          onClick={() => {
                            navigate('/profile?tab=orders');
                            setShowUserMenu(false);
                          }}
                          className="flex items-center w-full gap-3 px-4 py-2 text-left hover:bg-gray-50"
                        >
                          <Package className="w-4 h-4" />
                          Orders
                        </button>

                        <button
                          onClick={() => {
                            navigate('/profile?tab=addresses');
                            setShowUserMenu(false);
                          }}
                          className="flex items-center w-full gap-3 px-4 py-2 text-left hover:bg-gray-50"
                        >
                          <MapPin className="w-4 h-4" />
                          Addresses
                        </button>

                        <div className="my-2 border-t" />

                        <button
                          onClick={() => {
                            logout();
                            setShowUserMenu(false);
                            navigate('/');
                          }}
                          className="flex items-center w-full gap-3 px-4 py-2 text-left hover:bg-red-50 hover:text-red-600"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 transition-colors hover:text-blue-600"
                >
                  <LogIn className="w-5 h-5" />
                  <span className="hidden sm:inline">Login</span>
                </button>
              )}
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 transition-colors hover:text-blue-600"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-600 rounded-full -top-1 -right-1">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {showSearch && (
          <div className="mt-4 md:hidden">
            <SearchBar onClose={() => setShowSearch(false)} />
          </div>
        )}
      </header>

      {/* Modals */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </>
  );
};
