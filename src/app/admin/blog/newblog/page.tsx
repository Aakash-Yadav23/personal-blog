"use client"
import Editor from '@/components/blogs/editor/Editor';
import { Input } from '@/components/ui/input';
import usePost from '@/hooks/usePost';
import { OutputData } from '@editorjs/editorjs';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import DynamicEditor from '@/components/blogs/editor/DynamicEditor';

type CreatePost = {
  slug: string;
  title: string;
  body: string;
  thumbnail: FileList;
  shortDescription: string;
  category: string;
};




const BlogEditor= () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreatePost>();
  const [editorData, setEditorData] = useState<OutputData>();

  const { createPost, loading } = usePost();

  const handleThumbnailChange = (file: FileList): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (file && file[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result && typeof reader.result === 'string') {
            resolve(reader.result);
          } else {
            reject(new Error('Failed to read file'));
          }
        };
        reader.readAsDataURL(file[0]);
      } else {
        reject(new Error('No file provided'));
      }
    });
  };

  const onSubmit = async (formData: CreatePost) => {
    const { title, slug, category, shortDescription, thumbnail } = formData;
    const thumb = await handleThumbnailChange(thumbnail);
    if (!editorData || !title || !slug || !category || !shortDescription || !thumb) {
      toast.error('Please fill in all fields');
      return;
    }

    console.log("thumb", thumb);
    const cat = category.split(',');

    const data = {
      title,
      slug,
      category: cat,
      body: editorData as unknown as string,
      shortDescription,
      thumbnail: thumb // Use the base64 thumbnail
    };

    try {
      const res = await createPost(data);
      console.log(res);
      toast.success('Post created successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to create post');
    }
  };

  const handleEditorChange = (data: OutputData) => {
    setEditorData(data);
  };

  return (
    <div className='flex gap-3 flex-col w-full'>
      <h1>Blog Editor</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex gap-3 flex-col w-full'>
        <div>
          <label htmlFor="title">Title:</label>
          <Input placeholder='' type="text" id="title" {...register('title', { required: true })} />
          {errors.title && <span className="text-red-500">Title is required</span>}
        </div>
        <div>
          <label htmlFor="slug">Slug:</label>
          <Input placeholder='' type="text" id="slug" {...register('slug', { required: true })} />
          {errors.slug && <span className="text-red-500">Slug is required</span>}
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <Input placeholder='' type="text" id="category" {...register('category', { required: true })} />
          {errors.category && <span className="text-red-500">Category is required</span>}
        </div>
        <div>
          <label htmlFor="shortDescription">Short Description:</label>
          <Input placeholder='' type="text" id="shortDescription" {...register('shortDescription', { required: true })} />
          {errors.shortDescription && <span className="text-red-500">Short Description is required</span>}
        </div>
        <div>
          <label htmlFor="thumbnail">Thumbnail:</label>
          <Input type="file" id="thumbnail" {...register('thumbnail', { required: true })} />
          {errors.thumbnail && <span className="text-red-500">Thumbnail is required</span>}
        </div>
        <div>
          <DynamicEditor initialData={editorData} onChange={handleEditorChange} />
        </div>
        <button type="submit" disabled={loading}>Submit</button>
      </form>
    </div>
  );
};

export default BlogEditor;
