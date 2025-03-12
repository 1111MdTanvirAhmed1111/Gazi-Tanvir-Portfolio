import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Fetch all blogs or filter them
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const limit = parseInt(searchParams.get('limit')) ;  



    const blogs = await prisma.blog.findMany({
      take:  limit? limit : undefined,
      where: {
        AND: [
          search ? {
            title: {
              contains: search,
              mode: 'insensitive',
            },
          } : {},
        ],
      },
      include: {
        images: true,
      },
      orderBy: {
        [sortBy]: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      data: blogs,
    }, { status: 200 });
  } catch (error) {
    console.error('GET /api/blogs error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal Server Error',
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// POST: Create a new blog
export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.content) {
      return NextResponse.json({
        success: false,
        error: 'Title and content are required',
      }, { status: 400 });
    }

    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        description: body.description || null,
        content: body.content,
        images: body.images ? {
          create: body.images.map(image => ({
            url: image.url,
          })),
        } : undefined,
      },
      include: {
        images: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: blog,
    }, { status: 201 });
  } catch (error) {
    console.error('POST /api/blogs error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal Server Error',
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
