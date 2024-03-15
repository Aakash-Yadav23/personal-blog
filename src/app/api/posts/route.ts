import { getUserDetailsFromSession } from "@/lib/getUser";
import { CreatePost } from "@/types/Post";
import { PrismaClient } from "@prisma/client"
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from 'next/server';
import { UserById } from "../lib/getUserFromId";


const prisma = new PrismaClient();


const GET = async () => {
    try {
        const blogs = await prisma.post.findMany({
            include: {
                author: true, // Include the author relation
            },
        });

        return NextResponse.json(blogs, {
            status: 200,
            statusText: 'OK',
        })

    } catch (error) {
        return NextResponse.json({
            message: "Error while getting blogs"
        })

    }
}

const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        // Get user details from session
        const session = await getUserDetailsFromSession(req);

        if (!session) {
            return NextResponse.json({
                message: "Not Authenticated"
            }, {
                status: 403,
                statusText: 'Forbidden'
            });
        }


        const userDetails = await UserById(session)

        console.log("userDetails", userDetails)
        // Check if user is admin
        if (userDetails.role !== 'ADMIN') {
            return NextResponse.json({
                message: "Only admin users are allowed to create posts"
            }, {
                status: 403,
                statusText: 'Forbidden'
            });
        }


        // If user is admin, proceed with creating post
        const { title, slug, category, shortDescription, thumbnail, body } = await req.json() as unknown as CreatePost;
        if (!title || !slug || !body || !thumbnail) {
            return NextResponse.json({ message: "Fields are required" }, {
                status: 403, statusText: "false"
            })

        }
        // Your logic for creating the post
        const post = await prisma.post.create({
            data: {
                title,
                slug,
                views: 0,
                body,
                thumbnail,
                shortDescription,
                author: {
                    connect: { id: userDetails.id },

                },
                category: category ? category : ['']

            }
        });

        return NextResponse.json(post, {
            status: 201,
            statusText: 'Created'
        });

    } catch (error) {
        console.error("Creating Post error", error)
        return NextResponse.json({
            message: "Error while creating post"
        }, {
            status: 500,
            statusText: 'Internal Server Error'
        });
    }
}



const PUT = async () => {
    try {

        const blogs = await prisma.post.findMany()

        return NextResponse.json(blogs, {
            status: 200,
            statusText: 'OK',
        })

    } catch (error) {
        return NextResponse.json({
            message: "Error while getting blogs"
        })

    }
}


const DELETE = async () => {
    try {

        const blogs = await prisma.post.findMany()

        return NextResponse.json(blogs, {
            status: 200,
            statusText: 'OK',
        })

    } catch (error) {
        return NextResponse.json({
            message: "Error while getting blogs"
        })

    }
}


export { POST, GET, PUT, DELETE };