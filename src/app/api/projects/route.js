
import { NextResponse } from "next/server";
import { prisma } from '@/app/lib/Prisma';



export async function GET() {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
  }