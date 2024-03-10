import Sidebar from '@/components/Dashboard/Sidebar'
import DashboardWrapper from '@/components/wrapper/DashboardWrapper'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=''>
            {
                children
            }

        </div>
    )
}

export default layout