import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='pt-[130px] '>{children}</div>
    )
}

export default layout