import { getUserDetailsFromSession } from "@/lib/getUser";
import { CreatePost } from "@/types/Post";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
    try {

        const { id } = await request.json() as unknown as { id: string };


        if (!id) {
            return NextResponse.json({ message: 'Id is required' }, { status: 400 });
        }

        const post = await prisma.post.findUnique({
            where: {
                id: id,
            },
            include: {
                author: true, // Include author details if needed
                comments: true
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

export { POST };