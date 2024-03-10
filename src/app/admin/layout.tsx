import DashboardWrapper from '@/components/wrapper/DashboardWrapper'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (

        <div className='h-screen '>

            <DashboardWrapper>
                {
                    children
                }
            </DashboardWrapper>
        </div>

    )
}

export default layout