import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { PostType } from '@/types/Post'
import { DeleteIcon, Edit, Eye, Pencil, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface BlogDetailsProps {
    blog: PostType
}



const AdminBlogCard: React.FC<BlogDetailsProps> = ({ blog }) => {
    return (
        <div className=''>
            <div className='w-full'>
                <div className="profile flex items-center justify-between gap-4">
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

                    <div className="edit flex items-center gap-2 ">
                        <Link href={`/admin/blog/${blog.slug}`}>
                            <Pencil size={18} className='cursor-pointer hover:opacity-80' />
                        </Link>
                        <Button className='hover:bg-red-500 hover:text-white transition-all ease-in-out duration-500' variant={'ghost'}>
                            <Trash size={18} />
                        </Button>
                    </div>

                </div>
                <div className="data w-full bg-gray-00 h-auto py-2 flex  items-start justify-between gap-4">

                    <div className="content w-full   md:w-[80%] flex flex-col h-auto">
                        <h1 className='text-[1.2rem] sm:text-2xl font-semibold'>{blog.title}</h1>

                        <p className='text-sm hidden sm:block'>
                            {blog.shortDescription.slice(0, 400)}
                        </p>
                    </div>

                    <Image src={blog.thumbnail} className={`w-[70px] h-[70px] sm:h-[100px] sm:w-[100px]  rounded-sm object-cover`} alt={blog.title} width={250} height={250} />
                </div>

                <div className="flex items-center gap-2">
                    {
                        blog?.category?.map((category, index) => (
                            <p key={index} className='bg-[#03051f] shadow-md shadow-[#262957] px-4 py-1  rounded-full text-gray-100'>
                                {category}
                            </p>
                        ))
                    }
                    <div className="views flex gap-1 items-center text-sm">
                        <Eye size={18} />
                        <span className='text-sm'>
                            {blog.views}
                        </span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AdminBlogCard