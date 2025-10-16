import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { ProductCard } from '../components/products/ProductCard';
import { Link } from 'react-router-dom';
import { Cpu, Monitor, HardDrive, Zap } from 'lucide-react';

export const HomePage = () => {
  const { products, categories } = useContext(ProductContext);
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);

  const categoryIcons = {
    cpu: Cpu,
    gpu: Monitor,
    storage: HardDrive,
    psu: Zap
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Build Your Dream PC</h1>
          <p className="text-xl mb-8 text-blue-100">
            Premium computer components at competitive prices
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map(cat => {
            const Icon = categoryIcons[cat.slug] || Cpu;
            return (
              <Link
                key={cat.id}
                to={`/products?category=${cat.slug}`}
                className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow bg-white group"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold mb-1 text-gray-900">{cat.name}</h3>
                <p className="text-sm text-gray-500">{cat.count} products</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600">Hand-picked components for your next build</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-block text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
            <p className="text-gray-600 text-sm">Free shipping on orders over $50</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Monitor className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600 text-sm">All products tested and verified</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <HardDrive className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
            <p className="text-gray-600 text-sm">Get help from our PC building experts</p>
          </div>
        </div>
      </section>
    </div>
  );
};
