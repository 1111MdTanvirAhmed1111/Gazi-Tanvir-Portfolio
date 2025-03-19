
import SearchFilter from "@/components/Blogs/SearchFilter";
import { getAllBlogs } from "@/utils/actions/blogs";

import Link from "next/link";



const BlogPage = async () => {
const blogs = await getAllBlogs()


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

        <SearchFilter/>
        {/* Blog List */}
        <div className="space-y-10">
          {blogs.map((blog, index) => (
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
                <Link href={`/blogs/${blog.id}` }className="text-cyan-400 text-sm inline-block 
                  hover:underline hover:text-cyan-300 transition duration-300">
                  Read More →
                </Link>

                <div className="flex gap-4 mt-3 flex-wrap items-center">
                  {blog.tags.map(tag => (
                    <span 
                      key={tag}
                      className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-300 
                        hover:bg-cyan-400 hover:text-gray-800 cursor-pointer 
                        transform hover:scale-105 transition duration-300"
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
          {blogs.length === 0 && (
            <p className="text-center text-gray-400">No blogs found matching your criteria.</p>
          )}
        </div>
      </div>


    </div>
  );
};

export default BlogPage;