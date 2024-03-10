import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import footer from '../footbar/footer';

const NavWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=''>

            <Navbar />
            {/* <div className='pt-[130px] '> */}


            {children}

            {/* </div> */}
            <footer />

        </div >
    )
}

export default NavWrapper