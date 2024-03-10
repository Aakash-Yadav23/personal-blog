'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodError } from 'zod';
import { useRouter } from 'next/navigation'; // Import for Next.js routing
import { Input } from '../ui/input';
import { Button } from '../ui/button';

// Define the schema using Zod
const schema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6),
});

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter(); // Get router instance

    // Function to handle form submission
    const onSubmit = async (data: typeof schema) => {
        try {
            // Validate form data against the schema
            const validatedData = schema.parse(data);

            // If validation passes, proceed with registration logic (replace with your API call)
            console.log('Name:', validatedData.name);
            console.log('Email:', validatedData.email);
            console.log('Password:', validatedData.password);

            // Replace with your actual registration logic (e.g., API call)
            // router.push('/login'); // Navigate to login page after successful registration (optional)
        } catch (error) {
            // Handle validation errors
            if (error instanceof ZodError) {
                console.error(error.errors);
            }
        }
    };

    return (
        <div className='w-full '>
            <form onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col gap-1'>
                <div>
                    <label>Name:</label>
                    <Input type="text" {...register('name')} />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <Input type="email" {...register('email')} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <Input type="password" {...register('password')} />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <br />
                <Button className='w-full' type="submit">Register</Button>
                <Button className='mt-2 w-full bg-white text-black hover:opacity-80 border hover:bg-white' type="submit">Sign in with google</Button>

            </form>
        </div>
    );
};

export default Register;
