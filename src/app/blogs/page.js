'use client'
import { useState } from 'react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt');

  // Sample blog data (in a real app, this would come from an API)
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
    {
      id: '1',
      title: 'What does it take to become a web developer?',
      description: 'Web development, also known as website development...',
      content: 'Full content here...',
      createdAt: new Date('2023-10-10'),
      tags: ['Web Developer', 'Tech', 'Skill'],
      images: [{ url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d' }]
    },
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

  // Filtering and sorting logic
  const filteredBlogs = blogs
    .filter(blog => 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTag === 'all' || blog.tags.includes(selectedTag))
    )
    .sort((a, b) => {
      if (sortBy === 'createdAt') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

  const availableTags = ['all', ...new Set(blogs.flatMap(blog => blog.tags))];

  return (
    <div id="webcrumbs" className="bg-gray-800 min-h-screen">
      <div className="w-full max-w-7xl mx-auto py-12 px-6 text-white">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-2 text-cyan-400 
          animate-fade-in-down">Blogs</h1>
        <p className="text-center text-gray-400 text-sm mb-8 
          animate-fade-in-up">My thoughts on technology and business, welcome to subscribe</p>

        {/* Subscribe Button */}
        <div className="flex justify-center mb-10">
          <button className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-full 
            hover:bg-cyan-400 hover:text-gray-800 transform hover:scale-105 
            transition duration-300 ease-in-out">
            Subscribe My Blogs
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-gray-700 p-6 rounded-lg mb-10 animate-fade-in">
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
              <span className="material-symbols-outlined absolute right-3 top-2.5 
                text-gray-400">search</span>
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
        </div>

        {/* Blog List */}
        <div className="space-y-10">
          {filteredBlogs.map((blog, index) => (
            <div 
              key={blog.id}
              className="flex flex-col sm:flex-row gap-6 mb-6 
                animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full sm:w-1/4 group">
                <img
                  src={blog.images[0]?.url}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded-md 
                    transform group-hover:scale-105 group-hover:opacity-90 
                    transition duration-300 ease-in-out"
                />
              </div>
              <div className="w-full sm:w-3/4">
                <h2 className="text-xl font-semibold mb-2 text-cyan-400 
                  hover:text-cyan-300 transition duration-300">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                  {blog.description}
                </p>
                <a href="#" className="text-cyan-400 text-sm inline-block 
                  hover:underline hover:text-cyan-300 transition duration-300">
                  Read More →
                </a>

                <div className="flex gap-4 mt-3 flex-wrap items-center">
                  {blog.tags.map(tag => (
                    <span 
                      key={tag}
                      className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-300 
                        hover:bg-cyan-400 hover:text-gray-800 cursor-pointer 
                        transform hover:scale-105 transition duration-300"
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                  <div className="flex items-center ml-auto text-xs text-gray-400">
                    <span className="mr-2">
                      Date: {blog.createdAt.toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <span className="material-symbols-outlined text-sm mr-1">
                        schedule
                      </span>
                      Read: 1 Min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredBlogs.length === 0 && (
            <p className="text-center text-gray-400">No blogs found matching your criteria.</p>
          )}
        </div>
      </div>


    </div>
  );
};

export default BlogPage;