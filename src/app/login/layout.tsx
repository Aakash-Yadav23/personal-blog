import Navbar from '@/components/navbar/Navbar'
import NavWrapper from '@/components/wrapper/NavWrapper'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div >



            {children}

        </div>
    )
}

export default layout