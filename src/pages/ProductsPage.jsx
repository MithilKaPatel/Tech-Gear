import { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { ProductFilters } from '../components/products/ProductFilters';
import { ProductGrid } from '../components/products/ProductGrid';
import { ProductSort } from '../components/products/ProductSort';

export const ProductsPage = () => {
  const { filteredProducts, updateFilters } = useContext(ProductContext);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      updateFilters({ categories: [category] });
    }
  }, [searchParams]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">All Products</h1>
        <p className="text-gray-600">Browse our complete selection of premium PC components</p>
      </div>

      <div className="flex gap-6">
        <aside className="w-64 flex-shrink-0 hidden lg:block">
          <ProductFilters />
        </aside>

        <main className="flex-1">
          <div className="mb-6">
            <ProductSort />
          </div>
          <ProductGrid products={filteredProducts} />
        </main>
      </div>
    </div>
  );
};
