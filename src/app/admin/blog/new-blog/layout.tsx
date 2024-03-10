import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=''>

            <div className="flex w-full ">



                {children}
            </div>
        </div>
    )
}

export default layout