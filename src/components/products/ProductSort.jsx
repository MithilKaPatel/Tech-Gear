import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export const ProductSort = () => {
  const { sortBy, setSortBy, filteredProducts } = useContext(ProductContext);

  return (
    <div className="flex items-center justify-between gap-4 bg-white border rounded-lg p-4">
      <span className="text-sm text-gray-600">
        <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products found
      </span>

      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm text-gray-600">
          Sort by:
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="popular">Most Popular</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>
    </div>
  );
};
