'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const links = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Blog",
            link: "blogs"
        },
        {
            name: "Portfolio",
            link: "portfolio"
        },
        {
            name: "Projects",
            link: "project"
        },
        {
            name: "About",
            link: "about"
        },
        {
            name: "Contact",
            link: "contact"
        }
    ]


    return (
        <div className='fixed max-w-[1280px] mx-auto px-5 py-5 mt-5 z-20 top-0 left-0 right-0 w-full glass-effect'>

            <ul className='flex  justify-between relative items-center gap-4'>
                <div className="md:hidden ">
                    <X onClick={() => setNavOpen(!navOpen)} className={`opacity-70 cursor-pointer hover:opacity-35 transition-all ease-in-out duration-700 ${navOpen ? '' : 'hidden'} `} />

                    <Menu onClick={() => setNavOpen(!navOpen)} className={`opacity-70 cursor-pointer hover:opacity-35 transition-all ease-in-out duration-700 ${navOpen ? 'hidden' : ''} `} />
                </div>
                <div style={{ border: 0, padding: 0 }} className={`mobile-nav  absolute top-0  glass-effect w-full flex flex-col gap-5 md:hidden  ${navOpen ? '' : 'hidden md:hidden'}`}>
                    {links.map((link, index) => (
                        <Link href={`/${link.link}`} className=''>
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:block left">
                    <h1>
                        Aakash Yadav
                    </h1>
                </div>

                <div className="middle hidden md:flex gap-4 items-start">
                    {
                        links.map((link, index) => (
                            <Link className='hover:text-[#565dbd] transition-all ease-in-out duration-500' href={`/${link.link}`}>
                                <p>
                                    {link.name}
                                </p>
                            </Link>
                        ))
                    }
                </div>

                <div className="login">
                    <Button className='glass-effect'>
                        Sign in
                    </Button>
                </div>
            </ul>

        </div>
    )
}

export default Navbar