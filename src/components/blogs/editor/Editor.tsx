import { OutputData } from '@editorjs/editorjs';
import React, { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface EditorProps {
  initialData?: any | undefined;
  onChange: (data: any) => void; // Accepts a string instead of OutputData
}

const Editor: React.FC<EditorProps> = ({ initialData, onChange }) => {
  const editorRef = useRef<ReactQuill>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const quill = editorRef.current.getEditor();

    if (quill) {
      const handler = () => {
        const content = quill.root.innerHTML;
        onChange(content);
      };

      quill.on('text-change', handler);

      return () => {
        quill.off('text-change', handler);
      };
    }
  }, [onChange]);

  return (
    <ReactQuill
      ref={editorRef}
      theme="snow"
      defaultValue={initialData || ''}
      onChange={(content) => {
        onChange(content); // Passes the HTML content directly
      }}
      modules={{
        toolbar: [
          [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' },
          { 'indent': '-1' }, { 'indent': '+1' }],
          ['link', 'image', 'video'],
          ['clean']
        ]
      }}
      formats={[
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]}
    />
  );
};

export default Editor;
