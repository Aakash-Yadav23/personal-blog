'use client'
import { Search as SearchIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

const Search: React.FC = () => {
    const [inputData, setInputData] = useState<string>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value);
    };



    return (
        <div className='flex items-center gap-2 pl-3 rounded-full glass-effect'>
            <SearchIcon className='opacity-50' />
            <Input placeholder='Search' className='border-none' onChange={onChange} value={inputData} />

            <Link href={`/blogs?search=${inputData}`}>
                <Button className='glass-effect' style={{ border: 0 }} >
                    <SearchIcon />
                </Button>
            </Link>
        </div>
    );
};

export default Search;
