import React from 'react'
import { Button } from '../ui/button'
import { Briefcase, LayoutDashboard, LogOutIcon, MessageSquare, Newspaper, PanelsTopLeft, Settings, UserRound } from 'lucide-react'
import Link from 'next/link'

const Sidebar = () => {

  const options = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={18} />
    },
    {
      title: "Pages",
      link: "pages",

      icon: <PanelsTopLeft size={18} />
    },
    {
      title: "Blogs",
      link: "blogs",
      icon: <Newspaper size={18} />
    },
    {
      title: "Portfolio",
      link: "portfolio",
      icon: <Briefcase size={18} />
    },
    {
      title: "Contact",
      link: "contact",
      icon: <UserRound size={18} />
    },
    {
      title: "Comments",
      link: "comments",
      icon: <MessageSquare size={18} />
    }
  ]


  return (
    <div className='flex flex-col h-full gap-4  relative'>
      <div className="logo font-bold text-2xl">
        <h1>Aakash Yadav</h1>
      </div>
      {
        options.map((option) => (
          <Link href={`/admin/${option.link}`}>
            <span className='py-1 flex gap-2 items-center  cursor-pointer hover:opacity-80 transition-all ease-in-out duration-500'>
              {option.icon}
              {option.title}
            </span>
          </Link>
        ))
      }

      <div className="flex absolute  bottom-5 flex-col gap-4 w-full">

        <Button variant={'ghost'} className='flex hover:bg-transparent w-fit px-0 gap-2' >
          <Settings size={18} />
          Setting
        </Button>

        <Button variant={'default'} className='flex gap-2 w-full' >
          <LogOutIcon size={18} />
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Sidebar