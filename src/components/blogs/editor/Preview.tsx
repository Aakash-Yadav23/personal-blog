import React from 'react'
import ReactQuill from 'react-quill';

const Preview = ({ title, content }: { title: string, content: string }) => {
  return (
    <div className="w-full ql-edito h-full  ">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <br />
      <ReactQuill
        value={content}
        readOnly={true} // Set readOnly to prevent editing
        theme="snow" // Use the included snow theme
        modules={{ toolbar: false }} // Hide the toolbar
      />
    </div>
  );
}

export default Preview

