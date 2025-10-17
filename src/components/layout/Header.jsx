import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, LogIn, UserCircle, Package, MapPin, LogOut } from 'lucide-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartDrawer } from '../cart/CartDrawer';
import { useAuth } from '../../hooks/useAuth';
import { LoginModal } from '../auth/LoginModal';
import { RegisterModal } from '../auth/RegisterModal';
import { SearchBar } from '../common/SearchBar';

export const Header = () => {
  const { itemCount } = useContext(CartContext);
  const { isAuthenticated, profile, logout } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

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

            <div className="flex-1 max-w-md hidden md:block">
              <SearchBar />
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Search className="w-6 h-6" />
              </button>

              <div className="relative">
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="flex items-center gap-2 p-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <img
                        src={profile?.avatar_url}
                        alt={profile?.name}
                        className="w-8 h-8 rounded-full"
                      />
                    </button>

                    {showUserMenu && (
                      <>
                        <div
                          className="fixed inset-0 z-40"
                          onClick={() => setShowUserMenu(false)}
                        />
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                          <div className="px-4 py-2 border-b">
                            <p className="font-semibold text-sm">{profile?.name}</p>
                            <p className="text-xs text-gray-500 truncate">{profile?.email}</p>
                          </div>

                          <button
                            onClick={() => {
                              navigate('/profile');
                              setShowUserMenu(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-left"
                          >
                            <UserCircle className="w-4 h-4" />
                            Profile
                          </button>

                          <button
                            onClick={() => {
                              navigate('/profile?tab=orders');
                              setShowUserMenu(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-left"
                          >
                            <Package className="w-4 h-4" />
                            Orders
                          </button>

                          <button
                            onClick={() => {
                              navigate('/profile?tab=addresses');
                              setShowUserMenu(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-left"
                          >
                            <MapPin className="w-4 h-4" />
                            Addresses
                          </button>

                          <div className="border-t my-2" />

                          <button
                            onClick={() => {
                              logout();
                              setShowUserMenu(false);
                              navigate('/');
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-50 hover:text-red-600 text-left"
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
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <LogIn className="w-5 h-5" />
                    <span className="hidden sm:inline">Login</span>
                  </button>
                )}
              </div>

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

          {showSearch && (
            <div className="md:hidden mt-4">
              <SearchBar onClose={() => setShowSearch(false)} />
            </div>
          )}
        </div>
      </header>

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
