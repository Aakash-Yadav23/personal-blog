import React from 'react'

interface useStateProps {
    input: {
        type: string
        class?: string
        value: string
        level?: number
    }
}

const useCustomState = ({ input }: useStateProps) => {



    return (
        <div>useCustomState</div>
    )
}

export default useCustomState