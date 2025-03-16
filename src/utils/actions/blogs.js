
import { prisma } from '@/app/lib/Prisma';


export const getBlog = async (id)=> await prisma.blog.findUnique({
        where: { id },
        include: { images: true },
      });
  
  
export const getAllBlogs = async ()=> await prisma.blog.findMany({
      
        include: { images: true, tags: true },
      });



  
  











