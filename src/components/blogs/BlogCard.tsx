import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Topic from '../Search/Topic'
import { PostType } from '@/types/Post'
import Link from 'next/link'

interface BlogDetailsProps {
  blog: PostType
}



const BlogCard: React.FC<BlogDetailsProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.id}`} className='w-full'>
      <div className="profile flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0">
          <p className='text-1xl font-medium'>{blog.author.name}</p>
          <p className='text-[13px] opacity-70'>{blog.author.profession}</p>

        </div>
      </div>
      <div className="data w-full bg-gray-00 h-auto py-2 flex  items-start justify-between gap-4">

        <div className="content w-full   md:w-[80%] flex flex-col h-auto">
          <h1 className='text-[1.2rem] sm:text-2xl font-semibold'>{blog.title}</h1>

          <p className='text-sm py-1'>

            {blog.shortDescription.slice(0, 400)}
          </p>
        </div>

        <Image src={blog.thumbnail} className={`w-[70px] h-[70px] sm:h-[100px] sm:w-[100px]  rounded-sm object-cover`} alt={blog.title} width={250} height={250} />
      </div>

      <div className="flex items-center gap-2">
        {
          blog.category.map((category, index) => (
            <p key={index} className='bg-[#03051f] shadow-md shadow-[#262957] px-4 py-1  rounded-full text-gray-100'>
              {category}
            </p>
          ))
        }
      </div>

    </Link>
  )
}

export default BlogCard