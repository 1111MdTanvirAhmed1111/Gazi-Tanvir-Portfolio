// app/blog/page.jsx
import { MdCalendarToday, MdPerson, MdSchedule } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import Slider from '@/components/BlogDetails/Slider';
import CommentForm from '@/components/BlogDetails/CommentForm';
import CommentsSection from '@/components/BlogDetails/CommentsSection';
import { getAllBlogs, getBlog } from '@/utils/blogs';
import { redirect } from 'next/navigation';


export async function generateMetadata({ params }) {
  const { id } =  await params;

  try {
    // Fetch the blog data based on the ID
    const blog = await getBlog(id);

    if(!blog){
      redirect('/not-found')
    }
    // Return the metadata with dynamic values
    return {
      title: blog.title || 'Blog Post',
      description: blog.description || 'No description available for this blog post.',
     
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return {
      title: 'Blog Post',
      description: 'No description available for this blog post.',
    };
  }
}



export default async function BlogPage({params}) {
  const {id} = await params;
  // Fetch all blogs from the provided API

  const blog = await getBlog( id)
  if(!blog){
    redirect('/not-found')
  }
  const blogsData = await getAllBlogs()


  // Transform images for Slider
  const sliderImages = blog.images.map((image) => ({
    src: image.url,
    alt: blog.title,
    caption: `${blog.title} Image`,
  }));

  // Static related posts (since API doesn't provide related posts)
  const relatedPosts = blogsData.slice(1, 4).map((post) => ({
    id: post.id,
    src: post.images[0]?.url || 'https://via.placeholder.com/800',
    alt: post.title,
    title: post.title,
    description: post.description || 'No description available',
    date: new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  }));

  // Static comments (since API doesn't provide comments)
  const initialComments = [
    {
      id: "1",
      author: "David Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "This is an excellent overview of Next.js! I've been using it for about 6 months now...",
      date: "2 days ago",
      replies: [
        {
          id: "1-1",
          author: "Jane Smith",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          text: "Thanks for your comment, David! I agree - the developer experience with Next.js is top-notch...",
          date: "1 day ago",
          isAuthor: true,
        },
      ],
    },
    {
      id: "2",
      author: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "I'm just getting started with React and was wondering if Next.js is suitable for beginners...",
      date: "3 days ago",
      replies: [],
    },
  ];

  // Static recent posts (using other blogs from the API)
  const recentPosts = blogsData.slice(0, 4).map((post) => ({
    id: post.id,
    title: post.title,
    date: new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  }));

  // Static categories (since API doesn't provide tags)
  const categories = [
    { name: "React", count: 24 },
    { name: "Next.js", count: 16 },
    { name: "JavaScript", count: 32 },
    { name: "TypeScript", count: 18 },
    { name: "CSS & Styling", count: 21 },
  ];



  
  return (
    <div id="webcrumbs">
      <div className="max-w-full font-sans bg-[#0a1f44] text-[#f0f4f7] mx-auto">
        {/* Page Header */}
        <header className="py-8 px-4 sm:px-6 border-b border-[#2a003f]/40">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 transition-all duration-300 hover:text-[#00bcd4] text-white text-shadow">
            {blog.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-4">
            {blog.description || 'No description available'}
          </p>
          <div className="flex flex-wrap items-center text-sm text-gray-300 gap-4">
            <div className="flex items-center">
              <MdCalendarToday className="text-[#00bcd4] mr-1 text-sm" />
              <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center">
              <MdPerson className="text-[#00bcd4] mr-1 text-sm" />
              <a href="/author/jane-smith" className="text-[#00bcd4] hover:underline transition-all duration-200 flex items-center">
                <FaUser className="mr-1" /> Jane Smith {/* Static author */}
              </a>
            </div>
            <div className="flex items-center">
              <MdSchedule className="text-[#00bcd4] mr-1 text-sm" />
              <span>5 min read</span> {/* Static read time */}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col lg:flex-row">
          {/* Blog Content */}
          <div className="w-full lg:w-3/4 p-4 sm:p-6">
            <article className="prose prose-invert max-w-none">
              {/* Slider Client Component */}
              <div className="mb-8">
                <Slider images={sliderImages} />
              </div>

              {/* Blog Content */}
              <div dangerouslySetInnerHTML={{ __html: blog.content }} /> {/* Assuming content is HTML */}
            </article>

            {/* Static Call to Action */}
            <div className="bg-gradient-to-r from-[#2a003f] to-[#0a1f44] p-6 rounded-lg shadow-lg mt-12 border border-[#00bcd4]/30">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Want to learn more?</h3>
              <p className="mb-4 text-gray-300">
                Subscribe to my newsletter for weekly tips, tutorials, and insights...
              </p>
              <a
                href="/subscribe"
                className="bg-[#00bcd4] text-white font-medium py-2 px-6 rounded-md inline-block border border-[#00bcd4]"
              >
                Subscribe
              </a>
            </div>

            {/* Related Posts */}
            <div className="mt-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#00bcd4]">Related Posts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) => (
                  <div key={index} className="group">
                    <div className="rounded-lg overflow-hidden shadow-md bg-[#2a003f] border border-[#00bcd4]/10">
                      <img
                        src={post.src}
                        alt={post.alt}
                        className="w-full h-[180px] object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-base sm:text-lg mb-2 text-white">
                          {post.title}
                        </h4>
                        <p className="text-gray-300 text-sm line-clamp-2">{post.description}</p>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="text-xs text-gray-400">{post.date}</span>
                          <a href={`/blog/${post.id}`} className="text-[#00bcd4] text-sm font-medium">
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <section className="mt-16">
              <CommentForm />
              <CommentsSection initialComments={initialComments} />
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
              <a
                href="/author/jane-smith"
                className="text-[#00bcd4] text-sm hover:underline inline-flex items-center"
              >
                View all posts <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </a>
            </div>

            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-bold mb-4 text-[#00bcd4]">Recent Posts</h3>
              <ul className="space-y-4">
                {recentPosts.map((post, index) => (
                  <li key={index} className="border-b border-[#00bcd4]/10 pb-2">
                    <a href={`/blog/${post.id}`} className="group">
                      <h4 className="font-medium group-hover:text-[#00bcd4] transition-colors duration-200 text-white">
                        {post.title}
                      </h4>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-bold mb-4 text-[#00bcd4]">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <a href={`/tags/${category.name}`} className="hover:text-[#00bcd4] transition-colors duration-200 text-white">
                      {category.name}
                    </a>
                    <span className="text-xs bg-[#0a1f44] px-2 py-1 rounded-full border border-[#00bcd4]/30 text-[#00bcd4]">
                      {category.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}