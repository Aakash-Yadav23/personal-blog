
import type { CreatePost, PostType } from '@/types/Post';
import { LoginType, RegisterType } from '@/types/User';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';


//Register

export async function register(data: RegisterType): Promise<any> {
    try {
        const result = await axios.post('/api/register', data);

        console.log("result", result);



        toast.success("Successfully logged in")

        return { success: true };

    } catch (error: any) {
        console.error('Registration failed:', error.response.data.message);
        toast.error(error.response.data.message);

        return error;
    }
}

export async function login(data: LoginType): Promise<number | undefined> {
    try {
        const result = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (result?.error) {
            throw new Error(result.error);
        }
        toast.success("Successfully logged in")

        return result?.status;

    } catch (error: any) {
        console.error('Login failed:', error?.message);
        toast.error(error.message);
        return error.message;
    }
}




//Register

export async function CreatePostFun(data: CreatePost): Promise<PostType> {
    try {
        console.log("PostData", data);

        const result = await axios.post('/api/posts', data);

        console.log("result", result);


        const post = result.data.post as PostType;



        toast.success("Created Successfully")

        return post;

    } catch (error: any) {
        console.error('Registration failed:', error.response.data.message);
        toast.error(error.response.data.message);

        return error;
    }
}


export async function GetAllPost() {
    try {
        const response = await axios.get('/api/posts');
        return response.data;
    } catch (error: any) {
        console.error('Fetching Post Failed:', error?.response?.data?.message);
        return error
    }
}

export async function GetMe() {
    try {
        const user = await axios.get('/api/me');
        return user;
    } catch (error: any) {
        console.error('Fetching failed:', error?.response?.data?.message);
        return error
    }
}



export async function GetPostById(id: string) {
    try {
        const response = await axios.post('/api/post', { id });
        return response.data;

    } catch (error: any) {
        console.error('Fetching Post Failed:', error?.response?.data?.message);
        return error
    }
}