import { createContext, useState, useEffect } from 'react';
import { allProducts, categories as allCategories, brands as allBrands } from '../data/mockData';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState(allProducts);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [categories] = useState(allCategories);
  const [brands] = useState(allBrands);
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 2000],
    inStock: false,
    minRating: 0
  });
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  const applySorting = (products, sortType) => {
    const sorted = [...products];
    switch(sortType) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sorted;
    }
  };

  const applyFilters = () => {
    let result = products;

    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }

    if (filters.brands.length > 0) {
      result = result.filter(p => filters.brands.includes(p.brand));
    }

    result = result.filter(p =>
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    if (filters.inStock) {
      result = result.filter(p => p.stock > 0);
    }

    if (filters.minRating > 0) {
      result = result.filter(p => p.rating >= filters.minRating);
    }

    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    result = applySorting(result, sortBy);

    setFilteredProducts(result);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, sortBy, searchQuery]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, 2000],
      inStock: false,
      minRating: 0
    });
    setSearchQuery('');
  };

  return (
    <ProductContext.Provider value={{
      products,
      filteredProducts,
      categories,
      brands,
      filters,
      updateFilters,
      resetFilters,
      sortBy,
      setSortBy,
      searchQuery,
      setSearchQuery
    }}>
      {children}
    </ProductContext.Provider>
  );
};
