import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CreatePost, PostType } from '@/types/Post';
import { CreatePostFun, GetAllPost, GetPostById } from '@/lib/mutation';
import toast from 'react-hot-toast';
import { useParams } from 'next/navigation';

const usePost = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getBySlugPost = async (slug: string) => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/post/${slug}`);
            setLoading(false);
            return response.data as PostType;
        } catch (error: any) {
            setLoading(false);
            toast.error(error.response.data.message)
            setError(error.response.data.message);
        }
    };

    const getByIdPost = async (id: string) => {
        try {
            setLoading(true);
            const response = await GetPostById(id);
            setLoading(false);
            return response as PostType;
        } catch (error: any) {
            setLoading(false);
            toast.error(error.response.data.message)
            setError(error.response.data.message);
        }
    };


    const createPost = async (postData: CreatePost) => {
        try {
            setLoading(true);

            const response = await CreatePostFun(postData);
            setLoading(false);
            return response;
        } catch (error: any) {
            setLoading(false);
            toast.error(error.response.data.message)
            setError(error.response.data.message);
        }
    };

    const deletePost = async (postId: string) => {
        try {
            setLoading(true);
            await axios.delete(`/api/posts/${postId}`);
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            toast.error(error.response.data.message)
            setError(error.response.data.message);
        }
    };

    const getAllPosts = async () => {
        try {
            setLoading(true);
            const response = await GetAllPost();
            setLoading(false);
            return response as PostType[];
        } catch (error: any) {
            setLoading(false);
            toast.error(error.response.data.message)
            setError(error.response.data.message);
        }
    };



    return {
        loading,
        error,
        getBySlugPost,
        createPost,
        deletePost,
        getAllPosts,
        getByIdPost
    };
};

export default usePost;
