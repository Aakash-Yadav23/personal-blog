import { Loader } from 'lucide-react'
import React from 'react'

const LargeLoader = () => {
    return (
        <div className='h-screen glass-effec w-screen flex items-center justify-center'><Loader className='animate-spin m-auto' /></div>
    )
}

export default LargeLoader