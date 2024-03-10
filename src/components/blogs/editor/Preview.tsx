import React from 'react'

const Preview = ({ title, content }: { title: string, content: string }) => {
  return (
    <div className="w-full ql-editor h-full  ">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default Preview

