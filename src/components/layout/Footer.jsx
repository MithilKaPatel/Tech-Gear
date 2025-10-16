import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PCParts</h3>
            <p className="text-gray-600 text-sm">
              Your trusted source for premium computer components.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/products" className="hover:text-blue-600">All Products</Link>
              </li>
              <li>
                <Link to="/products?category=cpu" className="hover:text-blue-600">CPUs</Link>
              </li>
              <li>
                <Link to="/products?category=gpu" className="hover:text-blue-600">GPUs</Link>
              </li>
              <li>
                <Link to="/products?category=ram" className="hover:text-blue-600">RAM</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Shipping Info</a></li>
              <li><a href="#" className="hover:text-blue-600">Returns</a></li>
              <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-600">
          <p>&copy; 2024 PCParts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
