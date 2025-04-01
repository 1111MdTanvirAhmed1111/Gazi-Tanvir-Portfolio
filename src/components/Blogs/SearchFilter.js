'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FaSearch, FaChevronDown, FaFilter } from 'react-icons/fa';

function SearchFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filterState, setFilterState] = useState({
    searchQuery: searchParams.get('q') || '',
    categories: searchParams.get('categories')?.split(',').filter(Boolean) || [],
  });

  const categoryOptions = [
    'All Categories',
    'Products',
    'Services',
    'Documentation',
    'Support',
  ];

  const updateFilterState = (updates) => {
    setFilterState((prev) => ({ ...prev, ...updates }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    const { searchQuery, categories } = filterState;

    if (searchQuery) params.set('q', searchQuery);
    if (categories.length) params.set('categories', categories.join(','));

    router.push(`/blogs?${params.toString()}`);
  };

  const handleCategoryToggle = (category) => {
    setFilterState((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'searchQuery') {
      updateFilterState({ searchQuery: value });
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 my-16">
      <div className="relative flex-1">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FaSearch className="text-indigo-400" />
        </span>
        <input
          type="text"
          name="searchQuery"
          value={filterState.searchQuery}
          onChange={handleInputChange}
          className="w-full pl-10 pr-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-all duration-200 text-indigo-900 placeholder-indigo-300"
          placeholder="Search for anything..."
        />
      </div>

      <details className="relative group">
        <summary className="flex items-center gap-2 px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-100 transition-colors duration-200 text-indigo-700">
          <FaFilter className="text-indigo-500" />
          <span>Categories</span>
          <FaChevronDown className="text-indigo-500 group-open:rotate-180 transition-transform duration-200" />
        </summary>
        <div className="absolute right-0 mt-2 w-56 bg-white border border-indigo-200 rounded-lg shadow-lg z-10 py-2">
          {categoryOptions.map((category) => (
            <div
              key={category}
              className="px-4 py-2 hover:bg-indigo-50 transition-colors duration-150 flex items-center gap-2"
            >
              <input
                type="checkbox"
                id={`cat-${category.toLowerCase()}`}
                checked={filterState.categories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded border-indigo-300"
              />
              <label
                htmlFor={`cat-${category.toLowerCase()}`}
                className="cursor-pointer text-indigo-800"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </details>

      <button
        onClick={handleSearch}
        className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-xl"
      >
        <FaSearch />
        <span>Search Now</span>
      </button>
    </div>
  );
}

export default SearchFilter;
