
import { prisma } from '@/app/lib/Prisma';


export const getBlog = async (id)=> await prisma.blog.findUnique({
        where: { id },
        include: { images: true },
      });
  
  
      export const getAllBlogs = async (query) => {
        const blogs = await prisma.blog.findMany({
          include: {
            images: true,
            tags: true,
          },
        });
      
        // Filter the blogs using a regular expression
        const regex = new RegExp(query, 'i'); // 'i' flag for case-insensitive
        return blogs.filter(blog => regex.test(blog.title)); // Filters blogs by title using the regex
      };


  
  











