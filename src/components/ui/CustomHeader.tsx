// CustomHeader.tsx
import React, { useState } from 'react';

const CustomHeader = () => {
    const [showHeaders, setShowHeaders] = useState(false);
    const [selectedHeader, setSelectedHeader] = useState('');

    const handleHeaderSelect = (headerType: string) => {
        setSelectedHeader(headerType);
        setShowHeaders(false);
    };

    const headers = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    return (
        <div className='relative'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => setShowHeaders(true)}>Add Header</button>
            {showHeaders && (
                <div className='absolute bg-white flex flex-col gap-1 text-gray-800 px-4 border border-gray-300 rounded mt-2'>
                    {headers.map((headerType, index) => (
                        <button key={index} onClick={() => handleHeaderSelect(headerType)} className='hover:bg-gray-100 hover:text-blue-500 px-2 py-1'>
                            {headerType.toUpperCase()}
                        </button>
                    ))}
                </div>
            )}

            {selectedHeader && (
                <div>
                    <p>You selected: {selectedHeader}</p>
                    {/* Render selected header here */}
                    {/* Example: */}
                    {React.createElement(selectedHeader, {}, 'Header Text')}
                </div>
            )}
        </div>
    );
};

export default CustomHeader;
