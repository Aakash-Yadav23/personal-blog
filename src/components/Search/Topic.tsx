'use client'
import React, { useState } from 'react';

const Topic = ({ topic }: { topic: string; }) => {
    const [selected, setSelected] = useState(Boolean);



    return (
        <div onClick={(e) => setSelected(!selected)} className={`border rounded-full w-auto border-opacity-50 hover:bg-gray-100 transition-all ease-in-out duration-500 cursor-pointer hover:text-black px-5 py-2 ${selected ? 'bg-gray-100 text-black' : 'bg-transparent'}`}>
            {topic}
        </div>
    );
};

export default Topic;
