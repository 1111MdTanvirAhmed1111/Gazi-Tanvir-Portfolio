'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Sample blog data
const blogs = [
  {
    id: '1',
    title: 'What does it take to become a web developer?',
    description: 'Web development, also known as website development...',
    content: 'Full content here...',
    createdAt: new Date('2023-10-10'),
    tags: ['Web Developer', 'Tech', 'Skill'],
    images: [{ url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d' }]
  },
  // Add more sample blogs as needed
];

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      router.push(`/search-results?q=${searchTerm}&tag=${selectedTag}`);
    }
  };

  // Filtering and sorting logic
  const availableTags = ['all', ...new Set(blogs.flatMap(blog => blog.tags))];

  return (
    <div>
      {/* Search and Filter Section */}
      <form className="bg-gray-700 p-6 rounded-lg mb-10 animate-fade-in" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="relative w-full sm:w-1/3">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-full 
                border border-gray-600 focus:border-cyan-400 focus:ring-2 
                focus:ring-cyan-400/20 transition duration-300 outline-none"
            />
            <button type="submit" className="material-symbols-outlined absolute right-3 top-2.5 
              text-gray-400">search</button>
          </div>

          {/* Tag Filter */}
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-full 
              border border-gray-600 focus:border-cyan-400 
              hover:bg-gray-600 transition duration-300"
          >
            {availableTags.map(tag => (
              <option key={tag} value={tag}>
                {tag === 'all' ? 'All Tags' : tag}
              </option>
            ))}
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-full 
              border border-gray-600 focus:border-cyan-400 
              hover:bg-gray-600 transition duration-300"
          >
            <option value="createdAt">Sort by Date</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SearchFilter;
