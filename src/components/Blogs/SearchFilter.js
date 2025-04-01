'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FaSearch, FaChevronDown, FaCalendarAlt, FaFilter, FaSort } from 'react-icons/fa';

function SearchFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filterState, setFilterState] = useState({
    searchQuery: searchParams.get('q') || '',
    categories: searchParams.get('categories')?.split(',').filter(Boolean) || [],
    dateRange: {
      from: searchParams.get('from') || '',
      to: searchParams.get('to') || '',
    },
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
    const { searchQuery, categories, dateRange } = filterState;

    if (searchQuery) params.set('q', searchQuery);
    if (categories.length) params.set('categories', categories.join(','));
    if (dateRange.from) params.set('from', dateRange.from);
    if (dateRange.to) params.set('to', dateRange.to);

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

  const datePresets = {
    today: () => {
      const date = new Date().toISOString().split('T')[0];
      return { from: date, to: date };
    },
    week: () => {
      const today = new Date();
      return {
        from: new Date(today.setDate(today.getDate() - 7)).toISOString().split('T')[0],
        to: new Date().toISOString().split('T')[0],
      };
    },
    month: () => {
      const today = new Date();
      return {
        from: new Date(today.setMonth(today.getMonth() - 1)).toISOString().split('T')[0],
        to: new Date().toISOString().split('T')[0],
      };
    },
  };

  const handleDatePreset = (preset) => {
    const getDateRange = datePresets[preset] || (() => ({ from: '', to: '' }));
    updateFilterState({ dateRange: getDateRange() });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'searchQuery') {
      updateFilterState({ searchQuery: value });
    } else if (name.startsWith('dateRange')) {
      const dateField = name.split('.')[1];
      updateFilterState({
        dateRange: { ...filterState.dateRange, [dateField]: value },
      });
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

            <details className="relative group">
              <summary className="flex items-center gap-2 px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-100 transition-colors duration-200 text-indigo-700">
                <FaCalendarAlt className="text-indigo-500" />
                <span>Date Range</span>
                <FaChevronDown className="text-indigo-500 group-open:rotate-180 transition-transform duration-200" />
              </summary>
              <div className="absolute right-0 mt-2 w-full sm:w-80 bg-white border border-indigo-200 rounded-lg shadow-lg z-10 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-indigo-700 mb-1">
                      From Date
                    </label>
                    <input
                      type="date"
                      name="dateRange.from"
                      value={filterState.dateRange.from}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-indigo-50 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 text-indigo-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-indigo-700 mb-1">
                      To Date
                    </label>
                    <input
                      type="date"
                      name="dateRange.to"
                      value={filterState.dateRange.to}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-indigo-50 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 text-indigo-900"
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    {['today', 'week', 'month'].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => handleDatePreset(preset)}
                        className="px-3 py-1 text-sm bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-md transition-colors duration-200"
                      >
                        {preset.charAt(0).toUpperCase() + preset.slice(1)}
                      </button>
                    ))}
                  </div>
                  <button className="px-4 py-1 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
                    Apply
                  </button>
                </div>
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