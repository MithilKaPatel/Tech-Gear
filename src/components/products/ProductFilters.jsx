import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { X } from 'lucide-react';

export const ProductFilters = () => {
  const { filters, updateFilters, resetFilters, categories, brands } = useContext(ProductContext);

  const handleCategoryChange = (categorySlug) => {
    const newCategories = filters.categories.includes(categorySlug)
      ? filters.categories.filter(c => c !== categorySlug)
      : [...filters.categories, categorySlug];
    updateFilters({ categories: newCategories });
  };

  const handleBrandChange = (brand) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    updateFilters({ brands: newBrands });
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    updateFilters({ priceRange: [filters.priceRange[0], value] });
  };

  return (
    <div className="bg-white p-4 rounded-lg border sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Filters</h3>
        <button
          onClick={resetFilters}
          className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
        >
          <X className="w-4 h-4" />
          Clear All
        </button>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-3">Categories</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input
                type="checkbox"
                checked={filters.categories.includes(cat.slug)}
                onChange={() => handleCategoryChange(cat.slug)}
                className="rounded text-blue-600"
              />
              <span className="text-sm">{cat.name}</span>
              <span className="text-xs text-gray-500 ml-auto">({cat.count})</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-3">Brands</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map(brand => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="rounded text-blue-600"
              />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-3">Price Range</h4>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="2000"
            step="50"
            value={filters.priceRange[1]}
            onChange={handlePriceChange}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span className="font-medium text-blue-600">${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => updateFilters({ inStock: e.target.checked })}
            className="rounded text-blue-600"
          />
          <span className="text-sm font-medium">In Stock Only</span>
        </label>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-3">Minimum Rating</h4>
        <select
          value={filters.minRating}
          onChange={(e) => updateFilters({ minRating: parseFloat(e.target.value) })}
          className="w-full border rounded px-3 py-2 text-sm"
        >
          <option value="0">All Ratings</option>
          <option value="4">4★ & above</option>
          <option value="4.5">4.5★ & above</option>
        </select>
      </div>
    </div>
  );
};
