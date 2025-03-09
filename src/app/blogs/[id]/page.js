'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MdCalendarToday, MdPerson, MdSchedule } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const Component = () => {
  // Data arrays remain the same
  const sliderImages = [
    {
      src: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      alt: "Next.js Architecture",
      caption: "Next.js Architecture Overview"
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      alt: "Code Structure",
      caption: "Optimized Code Structure"
    },
    {
      src: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      alt: "Performance Metrics",
      caption: "Performance Metrics Dashboard"
    }
  ];

  const relatedPosts = [
    {
      src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Optimizing React Performance",
      title: "Optimizing React Performance",
      description: "Learn the best practices for optimizing your React application's performance and user experience.",
      date: "Feb 15, 2023"
    },
    {
      src: "https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Advanced State Management",
      title: "Advanced State Management",
      description: "Dive deep into state management solutions like Redux, Context API, and Zustand.",
      date: "Jan 28, 2023"
    },
    {
      src: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tailwind CSS Strategies",
      title: "Tailwind CSS Strategies",
      description: "Learn how to effectively use Tailwind CSS in your Next.js projects for rapid UI development.",
      date: "Dec 10, 2022"
    }
  ];

  return (
    <div id="webcrumbs">
      <div className="max-w-full font-sans bg-[#0a1f44] text-[#f0f4f7] mx-auto">
        {/* Page Header */}
        <header className="py-8 px-4 sm:px-6 border-b border-[#2a003f]/40">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 transition-all duration-300 hover:text-[#00bcd4] text-white text-shadow">
            Building Scalable React Applications with Next.js
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-4">
            A comprehensive guide to architecture, performance, and best practices
          </p>
          <div className="flex flex-wrap items-center text-sm text-gray-300 gap-4">
            <div className="flex items-center">
              <MdCalendarToday className="text-[#00bcd4] mr-1 text-sm" />
              <span>March 9, 2023</span>
            </div>
            <div className="flex items-center">
              <MdPerson className="text-[#00bcd4] mr-1 text-sm" />
              <a href="/author/jane-smith" className="text-[#00bcd4] hover:underline transition-all duration-200 flex items-center">
                <FaUser className="mr-1" /> Jane Smith
              </a>
            </div>
            <div className="flex items-center">
              <MdSchedule className="text-[#00bcd4] mr-1 text-sm" />
              <span>5 min read</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col lg:flex-row">
          {/* Blog Content */}
          <div className="w-full lg:w-3/4 p-4 sm:p-6">
            <article className="prose prose-invert max-w-none">
              <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-300">
                The modern web development landscape has evolved dramatically over the past few years...
              </p>

              {/* Image Slider with Swiper */}
              <div className="mb-8">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={20}
                  slidesPerView={1}
                  className="rounded-lg overflow-hidden border border-[#2a003f] shadow-lg shadow-[#00bcd4]/10"
                >
                  {sliderImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-[300px] sm:h-[400px]">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1f44]/90 to-transparent p-4 text-white">
                          <p className="font-medium">{image.caption}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-[#00bcd4]">Why Next.js?</h2>
              <p className="mb-6 text-gray-300">
                Next.js provides a comprehensive solution for building React applications with built-in
                features such as server-side rendering, static site generation, and API routes...
              </p>

              <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-[#00bcd4]">Key Features</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li>Server-side rendering for improved SEO and initial load performance</li>
                <li>Static site generation for lightning-fast page loads</li>
                <li>API routes for building backend functionality without a separate server</li>
                <li>Built-in CSS and Sass support</li>
                <li>Automatic code splitting for optimized performance</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-[#00bcd4]">Getting Started</h2>
              <p className="mb-6 text-gray-300">
                To get started with Next.js, you need to have Node.js installed on your machine...
              </p>
              <div className="bg-[#2a003f] text-[#00bcd4] p-4 rounded-md mb-6 overflow-x-auto border border-[#00bcd4]/20">
                <code>npx create-next-app@latest my-next-app</code>
              </div>
            </article>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#2a003f] to-[#0a1f44] p-6 rounded-lg shadow-lg mt-12 border border-[#00bcd4]/30 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-[#00bcd4]/20 hover:shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Want to learn more?</h3>
              <p className="mb-4 text-gray-300">
                Subscribe to my newsletter for weekly tips, tutorials, and insights...
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow py-2 px-4 rounded-md border border-[#00bcd4]/50 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent bg-[#0a1f44]/80 text-white"
                />
                <button className="bg-[#00bcd4] hover:bg-[#2a003f] text-white font-medium py-2 px-6 rounded-md transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md border border-[#00bcd4]">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#00bcd4]">Related Posts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) => (
                  <div key={index} className="group">
                    <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-[#00bcd4]/20 transform group-hover:-translate-y-1 bg-[#2a003f] border border-[#00bcd4]/10 hover:border-[#00bcd4]/30">
                      <img
                        src={post.src}
                        alt={post.alt}
                        className="w-full h-[180px] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-base sm:text-lg mb-2 group-hover:text-[#00bcd4] transition-colors duration-200 text-white">
                          {post.title}
                        </h4>
                        <p className="text-gray-300 text-sm line-clamp-2">{post.description}</p>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="text-xs text-gray-400">{post.date}</span>
                          <span className="text-[#00bcd4] text-sm font-medium group-hover:underline">
                            Read more
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <section className="mt-16">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#00bcd4]">Comments (12)</h3>

              {/* Comment Form */}
              <div className="bg-[#2a003f] p-6 rounded-lg mb-8 border border-[#00bcd4]/20">
                <h4 className="text-base sm:text-lg font-medium mb-4 text-white">Leave a comment</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-[#00bcd4]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent bg-[#0a1f44] text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-[#00bcd4]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent bg-[#0a1f44] text-white"
                      placeholder="Your email (will not be published)"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-1">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    className="w-full px-4 py-2 border border-[#00bcd4]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent bg-[#0a1f44] text-white"
                    placeholder="Share your thoughts..."
                  ></textarea>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="h-4 w-4 text-[#00bcd4] focus:ring-[#00bcd4] border-[#00bcd4]/30 rounded bg-[#0a1f44]"
                  />
                  <label htmlFor="save-info" className="ml-2 block text-sm text-gray-300">
                    Save my name and email for the next time I comment
                  </label>
                </div>
                <button className="bg-[#00bcd4] hover:bg-[#2a003f] text-white font-medium py-2 px-6 rounded-md transition-all duration-200 hover:shadow-md border border-[#00bcd4]">
                  Post Comment
                </button>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                <div className="bg-[#2a003f] p-6 rounded-lg shadow-md border border-[#00bcd4]/10 hover:border-[#00bcd4]/30 transition-all duration-300 hover:shadow-[#00bcd4]/10 hover:shadow-lg">
                  <div className="flex items-start space-x-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="David Chen"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#00bcd4]/40"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h5 className="font-bold text-white">David Chen</h5>
                        <span className="text-xs text-gray-400">2 days ago</span>
                      </div>
                      <p className="text-gray-300 mb-3">
                        This is an excellent overview of Next.js! I've been using it for about 6 months now...
                      </p>
                      <button className="text-[#00bcd4] text-sm hover:underline transition-colors duration-200 flex items-center">
                        <span className="material-symbols-outlined text-sm mr-1">reply</span> Reply
                      </button>
                    </div>
                  </div>
                  <div className="ml-16 mt-4 pt-4 border-t border-[#00bcd4]/10 bg-[#0a1f44]/60 p-4 rounded-lg mt-2">
                    <div className="flex items-start space-x-4">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Jane Smith"
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#00bcd4]/40"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h5 className="font-bold text-white">
                            Jane Smith <span className="text-[#00bcd4] text-xs ml-2">(Author)</span>
                          </h5>
                          <span className="text-xs text-gray-400">1 day ago</span>
                        </div>
                        <p className="text-gray-300">
                          Thanks for your comment, David! I agree - the developer experience with Next.js is top-notch...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#2a003f] p-6 rounded-lg shadow-md border border-[#00bcd4]/10 hover:border-[#00bcd4]/30 transition-all duration-300 hover:shadow-[#00bcd4]/10 hover:shadow-lg">
                  <div className="flex items-start space-x-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Sarah Johnson"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#00bcd4]/40"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h5 className="font-bold text-white">Sarah Johnson</h5>
                        <span className="text-xs text-gray-400">3 days ago</span>
                      </div>
                      <p className="text-gray-300 mb-3">
                        I'm just getting started with React and was wondering if Next.js is suitable for beginners...
                      </p>
                      <button className="text-[#00bcd4] text-sm hover:underline transition-colors duration-200 flex items-center">
                        <span className="material-symbols-outlined text-sm mr-1">reply</span> Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-6 border border-[#00bcd4]/30 bg-[#2a003f] hover:bg-[#0a1f44] text-[#00bcd4] font-medium py-2 px-6 rounded-md transition-all duration-200 w-full hover:shadow-[#00bcd4]/20 hover:shadow-md hover:border-[#00bcd4]/50">
                Load More Comments
              </button>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/4 p-4 sm:p-6 bg-[#2a003f]/70 border-t lg:border-t-0 lg:border-l border-[#00bcd4]/30">
            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-bold mb-4 text-[#00bcd4]">About the Author</h3>
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Jane Smith"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#00bcd4] shadow-md shadow-[#00bcd4]/20"
                />
                <div>
                  <h4 className="font-bold text-white">Jane Smith</h4>
                  <p className="text-sm text-gray-300">Senior Frontend Developer</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Jane specializes in React ecosystem and modern frontend architectures...
              </p>
              <a href="/author/jane-smith" className="text-[#00bcd4] text-sm hover:underline inline-flex items-center">
                View all posts <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </a>
            </div>

            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-bold mb-4 text-[#00bcd4]">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full py-2 pl-10 pr-4 border border-[#00bcd4]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent bg-[#0a1f44] text-white"
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#00bcd4]">
                  search
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-bold mb-4 text-[#00bcd4]">Recent Posts</h3>
              <ul className="space-y-4">
                <li className="border-b border-[#00bcd4]/10 pb-2">
                  <a href="#" className="group">
                    <h4 className="font-medium group-hover:text-[#00bcd4] transition-colors duration-200 text-white">
                      Understanding TypeScript in React Applications
                    </h4>
                    <span className="text-xs text-gray-400">March 3, 2023</span>
                  </a>
                </li>
                <li className="border-b border-[#00bcd4]/10 pb-2">
                  <a href="#" className="group">
                    <h4 className="font-medium group-hover:text-[#00bcd4] transition-colors duration-200 text-white">
                      CSS-in-JS vs. Tailwind: A Practical Comparison
                    </h4>
                    <span className="text-xs text-gray-400">February 27, 2023</span>
                  </a>
                </li>
                <li className="border-b border-[#00bcd4]/10 pb-2">
                  <a href="#" className="group">
                    <h4 className="font-medium group-hover:text-[#00bcd4] transition-colors duration-200 text-white">
                      Web Accessibility: Making Your React Apps Inclusive
                    </h4>
                    <span className="text-xs text-gray-400">February 15, 2023</span>
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="group">
                    <h4 className="font-medium group-hover:text-[#00bcd4] transition-colors duration-200 text-white">
                      Authentication Strategies for Next.js Applications
                    </h4>
                    <span className="text-xs text-gray-400">February 8, 2023</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-bold mb-4 text-[#00bcd4]">Categories</h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <a href="#" className="hover:text-[#00bcd4] transition-colors duration-200 text-white">
                    React
                  </a>
                  <span className="text-xs bg-[#0a1f44] px-2 py-1 rounded-full border border-[#00bcd4]/30 text-[#00bcd4]">
                    24
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <a href="#" className="hover:text-[#00bcd4] transition-colors duration-200 text-white">
                    Next.js
                  </a>
                  <span className="text-xs bg-[#0a1f44] px-2 py-1 rounded-full border border-[#00bcd4]/30 text-[#00bcd4]">
                    16
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <a href="#" className="hover:text-[#00bcd4] transition-colors duration-200 text-white">
                    JavaScript
                  </a>
                  <span className="text-xs bg-[#0a1f44] px-2 py-1 rounded-full border border-[#00bcd4]/30 text-[#00bcd4]">
                    32
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <a href="#" className="hover:text-[#00bcd4] transition-colors duration-200 text-white">
                    TypeScript
                  </a>
                  <span className="text-xs bg-[#0a1f44] px-2 py-1 rounded-full border border-[#00bcd4]/30 text-[#00bcd4]">
                    18
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <a href="#" className="hover:text-[#00bcd4] transition-colors duration-200 text-white">
                    CSS & Styling
                  </a>
                  <span className="text-xs bg-[#0a1f44] px-2 py-1 rounded-full border border-[#00bcd4]/30 text-[#00bcd4]">
                    21
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Component;