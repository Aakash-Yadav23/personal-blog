"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import usePost from '@/hooks/usePost';
import { PostType } from '@/types/Post';


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
  }, [id, getByIdPost])


  return (
    <>

{/* 
      {post &&
        < EditorWrapper post={post} postLoading={loading} />
      } */}
    </>
  )
}

export default Page;
