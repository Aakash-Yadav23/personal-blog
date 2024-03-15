'use client'

'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodError } from 'zod';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { register } from '@/lib/mutation';
import ErrorField from '../ui/ErrorField';
import { Github } from "lucide-react" // Import icons for Google and GitHub sign-in
import googlePng from '@/assets/images/google.png'
import Image from "next/image";
import { Toaster } from 'react-hot-toast';


// Define the schema using Zod
const schema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

const Register = () => {
    const { register: registerInput, handleSubmit, formState: { errors } } = useForm<FormData>();
    const router = useRouter();

    // Function to handle form submission
    const onSubmit = async (data: FormData) => {
        try {
            // Validate form data against the schema
            const validatedData = schema.parse(data);
            console.log('Name:', validatedData.name);
            console.log('Email:', validatedData.email);
            console.log('Password:', validatedData.password);

            const response = await register(validatedData);

            // If validation passes, proceed with registration logic (replace with your API call)
            if (response.success) {
                // Handle successful registration
                console.log('Registration successful');
                router.push('/'); // Navigate to the login page after successful registration
            } else {
                // Handle registration failure
                console.error('Registration failed:', response.error);
            }
        } catch (error) {
            // Handle validation errors
            if (error instanceof ZodError) {
                console.error(error.errors);
            }
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <Toaster />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Name:</label>
                    <Input type="text" {...registerInput('name')} className="w-full" />
                    {errors.name && errors.name.message && <ErrorField message={errors.name.message} />}
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Email:</label>
                    <Input type="email" {...registerInput('email')} className="w-full" />
                    {errors.email && errors.email.message && <ErrorField message={errors.email.message} />}
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Password:</label>
                    <Input type="password" {...registerInput('password')} className="w-full" />
                    {errors.password && errors.password.message && <ErrorField message={errors.password.message} />}
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                    Register
                </Button>
                <div className="flex justify-between">
                    <Button
                        variant="outline"
                        className="flex items-center gap-2 bg-white text-black hover:bg-gray-100 border border-gray-300 font-bold py-2 px-4 rounded"
                    >
                        <Image src={googlePng.src} width={100} height={100} alt="Google" className="h-10 object-contain" /> Sign in with Google

                    </Button>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2 bg-white text-black hover:bg-gray-100 border border-gray-300 font-bold py-2 px-4 rounded"
                    >
                        <Github /> Sign in with GitHub
                    </Button>
                </div>
            </form>
        </div>
    );
};


export default Register;
