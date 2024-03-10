'use client'
import React, { useState, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill-custom-styles.css'; // Import the custom styles
import { Input } from '@/components/ui/input';

// Extend Quill with video module
const Video = Quill.import('formats/video');
Quill.register(Video, true);

const WordEditor = ({ content, title, setTitle, setContent }: { content: string, title: string, setTitle: (title: string) => void, setContent: (content: string) => void }) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'], // Added 'video' to the toolbar
      ['clean']
    ],
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'link', 'image', 'video' // Added 'video' to the formats
  ];

  const quillRef = useRef<ReactQuill>(null); // Use useRef hook with proper type annotation

  // Custom handler for inserting videos
  const insertVideo = () => {
    const url = prompt('Enter the URL of the video (YouTube, Vimeo, etc.):');
    if (url && quillRef.current) { // Check if quillRef is not null
      const quill = quillRef.current.getEditor();
      const range = quill.getSelection(true);
      quill.insertEmbed(range.index, 'video', url, 'user');
    }
  };

  return (
    <div className='grid gap-2'>
      <Input value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        onBlur={() => setContent(content)}
        modules={modules}
        style={{ color: 'white' }}
        formats={formats}
        placeholder="Type here... Max three images can be added, each less than 50kb. Images will be automatically compressed if the size is greater than 50kb."
        className='w-full  min-h-[250px]  h-auto  text-white'
        ref={quillRef}
      />
    </div>
  );
};

export default WordEditor;
