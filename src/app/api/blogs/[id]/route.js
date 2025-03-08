import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Fetch a single blog by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;

    const blog = await prisma.blog.findUnique({
      where: { id },
      include: { images: true },
    });

    if (!blog) {
      return NextResponse.json({
        success: false,
        error: 'Blog not found',
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: blog,
    }, { status: 200 });
  } catch (error) {
    console.error('GET /api/blogs/[id] error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal Server Error',
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// PUT: Update a blog by ID
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    // Check if blog exists
    const existingBlog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!existingBlog) {
      return NextResponse.json({
        success: false,
        error: 'Blog not found',
      }, { status: 404 });
    }

    // Update blog
    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        title: body.title || existingBlog.title,
        description: body.description !== undefined ? body.description : existingBlog.description,
        content: body.content || existingBlog.content,
        tags: body.tags || existingBlog.tags,
        images: body.images ? {
          // Delete existing images and create new ones
          deleteMany: {},
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
      data: updatedBlog,
    }, { status: 200 });
  } catch (error) {
    console.error('PUT /api/blogs/[id] error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal Server Error',
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE: Delete a blog by ID
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // Check if blog exists
    const existingBlog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!existingBlog) {
      return NextResponse.json({
        success: false,
        error: 'Blog not found',
      }, { status: 404 });
    }

    // Delete blog (images will be deleted automatically due to cascade)
    await prisma.blog.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: 'Blog deleted successfully',
    }, { status: 200 });
  } catch (error) {
    console.error('DELETE /api/blogs/[id] error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal Server Error',
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}