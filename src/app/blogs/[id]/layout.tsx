import Navbar from '@/components/navbar/Navbar'
import MaxWidthWrapper from '@/components/wrapper/Maxwidthwrapper'
import NavWrapper from '@/components/wrapper/NavWrapper'
import React from 'react'

const LayoutBlog = ({ children }: { children: React.ReactNode }) => {
    return (
        <NavWrapper >
            <MaxWidthWrapper>



                {children}
            </MaxWidthWrapper>

        </NavWrapper>
    )
}

export default LayoutBlog