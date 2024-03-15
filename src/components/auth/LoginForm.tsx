'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input";

import { login } from "@/lib/mutation" // Import the login function from your mutations file
import { useRouter } from "next/navigation" // Import the useRouter hook from Next.js
import { Github } from "lucide-react" // Import icons for Google and GitHub sign-in
import googlePng from '@/assets/images/google.png'
import Image from "next/image"
import toast, { Toaster } from 'react-hot-toast';
const formSchema = z.object({
    email: z.string().min(2, { message: "Email must be at least 2 characters." }),
    password: z.string().min(6, { message: "Password must be at least 10 characters." }),
})

function Login() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    const router = useRouter() // Get the router instance

    // Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await login(values) // Call the login function from your mutations file

            if (response === 200) {
                router.push('/admin/dashboard')
            }

            console.log("response", response)

        } catch (error) {
            console.error("Error during login:", error)
            throw new Error(`Error during login ${error}`)
        }
    }

    return (
        <div className="w-full  mx-auto ">
            <Toaster />
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormDescription> Provide your email. </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="password" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="password" {...field} />
                            </FormControl>
                            <FormDescription> Provide your password. </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        <Button variant="outline" className="flex items-center gap-1 w-full">
                            <Image src={googlePng.src} width={100} height={100} alt="Google" className="h-10 object-contain" /> Sign in with Google
                        </Button>
                        <Button variant="outline" className="flex items-center gap-1 w-full">
                            <Github /> Sign in with GitHub
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default Login

