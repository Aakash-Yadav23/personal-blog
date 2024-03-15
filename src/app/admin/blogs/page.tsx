import AdminBlogList from '@/components/Dashboard/blogs/AdminBlogList'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-1 gap-8 relative'>

      <div className="top-blog flex left-0  items-center  top-0 glass- w-full justify-between">
        <span className='text-2xl font-bold '>
          Blogs
        </span>
        <Link href={`/admin/blog/newblog`}>
          <Button className='bg-blue-500 hover:bg-blue-600 transition-all ease-in-out duration-500'>
            New Blog
          </Button>
        </Link>
      </div>




      <div className="details ">
        <AdminBlogList />
      </div>


    </div>
  )
}

export default page