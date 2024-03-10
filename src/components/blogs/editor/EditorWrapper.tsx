'use client';

import React, { useState, ChangeEvent } from 'react';
import BlogEditorMiddle from './BlogEditorMiddle';
import { Button } from '@/components/ui/button';
import Preview from './Preview';

interface EditorWrapperProps { }

const EditorWrapper: React.FC<EditorWrapperProps> = () => {
    const [showPreview, setShowPreview] = useState<boolean>(false);
    const [content, setContent] = useState<string>('');
    const [title, setTitle] = useState<string>('');

    const handlePreview = () => {
        setShowPreview(true);
    };

    const handleEdit = () => {
        setShowPreview(false);
    };

    const handleSave = () => {
        // Implement saving logic here
        console.log('Saving content:', content);
        console.log('Saving title:', title);
        // After saving, you can optionally redirect or perform other actions
    };

    const handleCancel = () => {
        // Clear content and title fields
        setContent('');
        setTitle('');
        // Optionally, you can also hide the editor and show the preview
        setShowPreview(true);
    };

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const extractText = (content: string): string => {
        // Replace HTML tags and extract plain text
        const div = document.createElement('div');
        div.innerHTML = content;
        const text = div.innerText.trim();

        return text;
    };

    // Function to extract images and videos from HTML content
    const extractImagesAndVideos = (htmlContent: string): { images: string[]; videos: string[]; iframe: string[] } => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');

        const images: string[] = [];
        const videos: string[] = [];
        const iframe: string[] = [];

        // Extract images
        const imageElements = doc.querySelectorAll('img');
        imageElements.forEach((element) => {
            const src = element.getAttribute('src');
            if (src) images.push(src);
        });

        // Extract videos
        const videoElements = doc.querySelectorAll('video');
        videoElements.forEach((element) => {
            const src = element.getAttribute('src');
            if (src) videos.push(src);
        });

        // Extract iframes
        const iframeElements = doc.querySelectorAll('iframe');
        iframeElements.forEach((element) => {
            const src = element.getAttribute('src');
            if (src) iframe.push(src);
        });

        return { images, videos, iframe };
    };

    return (
        <div className='w-full relative text-white'>
            <div className="flex w-fit absolute top-2 bg-transparent left-0 right-0 mx-auto items-center gap-4 mb-4">
                <Button onClick={handlePreview}>Preview</Button>
                <Button onClick={handleEdit}>Edit</Button>
                <Button onClick={handleSave}>Save</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </div>
            <br />
            <br />
            <br />
            {showPreview ? (
                <div className="w-full ">
                    <div className="mx-auto  max-w-[1000px] p-5 h-auto ">
                        <Preview content={content} title={title} />
                    </div>
                </div>
            ) : (
                <div className="col-span-2 w-full text-white h-auto">
                    <div className="mx-auto   p-5 h-full ">
                        <BlogEditorMiddle content={content} setContent={setContent} title={title} setTitle={setTitle} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditorWrapper;
