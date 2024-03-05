import { cn } from '@/lib/utils'
import React from 'react'

interface MaxWidthProps {
    children: React.ReactNode,
    className?: string
}

const MaxWidthWrapper: React.FC<MaxWidthProps> = ({ children, className }) => {
    return (
        <div className={cn('w-full h-full max-w-[1280px] mx-auto flex items-center justify-center py-5 px-5 md:py-20 md:px-5 ', className)}>{children}</div>

    )
}

export default MaxWidthWrapper