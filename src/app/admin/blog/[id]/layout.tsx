import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Blog ",
    description: "Generated by create next app",
};



const SlugLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=''>

            {children}
        </div>
    )
}

export default SlugLayout