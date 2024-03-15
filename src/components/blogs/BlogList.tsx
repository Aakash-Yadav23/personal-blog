'use client'
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import usePost from '@/hooks/usePost';
import { PostType } from '@/types/Post';
import toast, { Toaster } from 'react-hot-toast';
import BlogCardSkeleton from '../Skeleton/blog-card-skeleton';

const BlogList = () => {
    const [blogs, setBlogs] = useState<PostType[]>([]);
    const { getAllPosts, loading } = usePost();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await getAllPosts();
                console.log("posts", posts);
                if (posts !== undefined) {
                    console.log("posts", posts);
                    setBlogs(posts);
                } else {
                    toast.error("Failed to fetch posts: Received undefined data");
                }
            } catch (error: any) {
                console.error(error);
                toast.error(error.message);
            }
        };

        fetchPosts();
    }, []);


    if (loading) {
        return <>
            <BlogCardSkeleton />
        </>
    }


    return (
        <div className='w-full grid gap-6'>
            <Toaster />
            {
                blogs?.map((blog, index) => (
                    <>
                        <BlogCard blog={blog} />
                        <hr className='opacity-50' />
                    </>
                ))
            }
        </div>
    )
}

export default BlogList

