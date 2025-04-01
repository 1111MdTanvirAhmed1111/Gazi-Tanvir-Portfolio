import ServerPart from "@/components/Blogs/ServerPart";
import SearchFilterBypass from "@/components/Blogs/SearchFilter";
export const metadata = {
  title: 'Blog Posts | Gazi Tanvir',
  description: 'Read my thoughts on technology, development, and business. Subscribe to stay updated with the latest insights.',
  openGraph: {
    title: 'Blog Posts | Gazi Tanvir',
    description: 'Read my thoughts on technology, development, and business. Subscribe to stay updated with the latest insights.',
    type: 'website',
  },
};

export const revalidate = 3600; // Revalidate every hour

const BlogPage = async ({ searchParams }) => {
 

  return (
   <ServerPart search={searchParams}>
    <SearchFilterBypass/>
    
      
   </ServerPart>
  );
};

export default BlogPage;