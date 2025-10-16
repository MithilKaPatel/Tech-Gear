import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { ProductCard } from '../components/products/ProductCard';
import { Link } from 'react-router-dom';
import { Cpu, Monitor, HardDrive, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 py-20 text-center text-white bg-gradient-to-r from-blue-600 to-blue-700"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 text-5xl font-bold"
          >
            Build Your Dream PC
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8 text-xl text-blue-100"
          >
            Premium computer components at competitive prices
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/products"
              className="inline-block px-8 py-3 font-semibold text-blue-600 transition-colors bg-white rounded-lg hover:bg-gray-100"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-4 py-12 mx-auto max-w-7xl"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-3xl font-bold"
        >
          Shop by Category
        </motion.h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((cat, index) => {
            const Icon = categoryIcons[cat.slug] || Cpu;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Link
                  to={`/products?category=${cat.slug}`}
                  className="block p-6 text-center bg-white border rounded-lg group"
                >
                  <motion.div 
                    className="flex justify-center mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="w-12 h-12 text-blue-600" />
                  </motion.div>
                  <h3 className="mb-1 font-semibold text-gray-900">{cat.name}</h3>
                  <p className="text-sm text-gray-500">{cat.count} products</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-gray-50"
      >
        <div className="px-4 mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="mb-2 text-3xl font-bold">Featured Products</h2>
            <p className="text-gray-600">Hand-picked components for your next build</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1 
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-8 text-center"
          >
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/products"
                className="inline-block font-semibold text-blue-600 hover:text-blue-700"
              >
                View All Products →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-4 py-12 mx-auto max-w-7xl"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Zap, title: "Fast Shipping", desc: "Free shipping on orders over $50" },
            { icon: Monitor, title: "Quality Guaranteed", desc: "All products tested and verified" },
            { icon: HardDrive, title: "Expert Support", desc: "Get help from our PC building experts" }
          ].map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2 
              }}
              className="text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full"
              >
                <feature.icon className="w-8 h-8 text-blue-600" />
              </motion.div>
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="mb-2 text-lg font-semibold"
              >
                {feature.title}
              </motion.h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};
