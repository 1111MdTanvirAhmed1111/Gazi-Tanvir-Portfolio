import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getAllPosts = async () => {
  const response = await prisma.post.findMany();
  const posts = await response.json();
  return posts;
}

export { getAllPosts };