import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface BlogDetailsProps {
  blog: BlogDetails
}

interface BlogDetails {
  title: string,
  shortDescription: string
  blog: string,
  createdAt: string
  authorName: string
  authorImage: string
  authorProfession: string
  category: string[]
  image: string
  // authorProfession: string
  comments: any

}

const BlogCard: React.FC<BlogDetailsProps> = ({ blog }) => {
  return (
    <div className='w-full'>
      <div className="profile flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0">
          <p className='text-1xl font-medium'>{blog.authorName}</p>
          <p className='text-[13px] opacity-70'>{blog.authorProfession}</p>

        </div>
      </div>
      <div className="data w-full bg-gray-00 h-auto py-2 flex  items-start justify-between gap-4">

        <div className="content w-full   md:w-[80%] flex flex-col h-auto">
          <h1 className='text-[1.2rem] sm:text-2xl font-semibold'>{blog.title}</h1>

          <p className='text-sm hidden sm:block'>
            {blog.blog.slice(0, 400)}
          </p>
        </div>

        <Image src={blog.image} className={`w-[70px] h-[70px] sm:h-[100px] sm:w-[100px]  rounded-sm object-cover`} alt={blog.title} width={250} height={250} />
      </div>

    </div>
  )
}

export default BlogCard