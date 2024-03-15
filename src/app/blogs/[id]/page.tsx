"use client"

import React, { useEffect, useState } from 'react'
import getDecodedSlug from '@/lib/getSlug';
import { useParams } from 'next/navigation';
import usePost from '@/hooks/usePost';
import { PostType } from '@/types/Post';
import MaxWidthWrapper from '@/components/wrapper/Maxwidthwrapper';
import { Toaster } from 'react-hot-toast';
import Loader from '@/components/global/Loader';
import ReactQuill from 'react-quill';


const Page = () => {
    const { id } = useParams();
    const [post, setPost] = useState<PostType>();

    const { getByIdPost, loading } = usePost();



    useEffect(() => {
        const getData = async () => {
            const data = await getByIdPost(id as string) as PostType;
            console.log("data,data", data);
            setPost(data);
        }

        if (id) getData();
    }, [id])

    return (
        <MaxWidthWrapper className='py-20'>
            <Toaster />

            {
                loading ? <>
                    <Loader />
                </>
                    : (

                        post ? <div>
                            post ? <div dangerouslySetInnerHTML={{ __html: post.body }} />

                        </div>
                            :
                            <div className='text-4xl  text-center font-medium'>
                                ! Data Not Found
                            </div>
                    )
            }

        </MaxWidthWrapper>
    )
}

export default Page;
