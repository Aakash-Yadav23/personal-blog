'use client'
import React, { useEffect, useState } from 'react';
import AdminBlogCard from './AdminBlogCard';
import { PostType } from '@/types/Post';
import usePost from '@/hooks/usePost';
import toast from 'react-hot-toast';
import BlogCardSkeleton from '@/components/Skeleton/blog-card-skeleton';


const AdminBlogList = () => {
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


    return (
        <div className='w-full grid gap-6 max-w-[1280px] mx-auto'>
            {
                loading ?
                    <>
                        <BlogCardSkeleton />

                    </> : (


                        blogs && blogs.length > 0 && blogs.map((blog, index) => (
                            <React.Fragment key={index}>
                                <AdminBlogCard blog={blog} />
                                <hr className='opacity-50' />
                            </React.Fragment>
                        ))
                    )
            }
        </div>
    );
};

export default AdminBlogList;
