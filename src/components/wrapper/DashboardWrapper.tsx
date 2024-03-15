import { cn } from '@/lib/utils';
import React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import ProfileCard from './ProfileCard';

interface DashboardWrapperProps {
    children?: React.ReactNode;
    className?: string;
    session?: any; 
}

const DashboardWrapper = ({ children, className, session }: DashboardWrapperProps) => {
    // ... rest of your component logic
    
    return (
        <div className={cn('', className)}>
            <div className="flex w-full h-screen">
                <div className="w-full border-r border-r-gray-600 max-w-[250px]  p-6  max-h-full h-auto  overflow-hidden">
                    <Sidebar />
                </div>
                <div className="w-full  p-6  h-full max-h-full overflow-y-scroll ">
                    <div className="profile bg-red-700">
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardWrapper;
