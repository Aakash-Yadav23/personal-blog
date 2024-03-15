import { getUserDetailsFromSession } from "@/lib/getUser";
import { CreatePost } from "@/types/Post";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

const GET = async (request: NextRequest) => {
    try {


        const { searchParams } = new URL(request.url);
        console.log("searchParams", searchParams)
        const slug = searchParams.get('slug');

        if (!slug) {
            return NextResponse.json({ message: 'Slug is required' }, { status: 400 });
        }

        const post = await prisma.post.findUnique({
            where: {
                slug: slug,
            },
            include: {
                author: true, // Include author details if needed
            },
        });

        if (!post) {
            return NextResponse.json({ message: 'Post not found' }, { status: 404 });
        }

        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        console.error('Error fetching post:', error);
        return NextResponse.json({ message: 'Error fetching post' }, { status: 500 });
    }
};

export { GET };