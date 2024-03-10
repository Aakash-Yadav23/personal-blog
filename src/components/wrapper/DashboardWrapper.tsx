import { cn } from '@/lib/utils';
import React from 'react'
import Sidebar from '../Dashboard/Sidebar';

interface DashboardWrapper {
    children?: React.ReactNode;
    className?: string;
}

const DashboardWrapper = ({ children, className }: DashboardWrapper) => {
    return (
        <div className={cn('', className)}>

            <div className="flex w-full h-screen">

                <div className="w-full border-r border-r-gray-600 max-w-[250px]  p-6  max-h-full h-auto  overflow-hidden">

                    <Sidebar />
                </div>
                <div className="w-full  p-6  h-full max-h-full overflow-y-scroll ">

                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardWrapper