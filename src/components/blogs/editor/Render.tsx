import React from 'react'

interface RenderProps {
    onChange: (event: any) => void
    htmlElement: any
    editable?: boolean
}

const Render = ({ editable = true, htmlElement, onChange }: RenderProps) => {
    return (
        <div className=''>
            <div
                className='glass-effect p-5'
                contentEditable={editable}
                onInput={onChange}
                dangerouslySetInnerHTML={{ __html: renderHTML(htmlElement) }}
            />
        </div>
    )
}



const renderHTML = (content: any) => {
    console.log('renderHTML', content)
    return content.map((element: any) => {
        switch (element.type) {
            case 'heading':
                return `<h${element.level} class="${element.class + 'text-[2rem]'}" >${element.value}</h${element.level}>`;
            case 'paragraph':
                return `<p class="${element.class}">${element.value}</p>`;
            case 'image':
                return `<img class="${element.class}" src="${element.src}" alt="${element.alt}" />`;
            case 'code':
                return `<pre class="${element.class}" class='bg-black p-5 text-white'><code>${element.value}</code></pre>`;
            case 'link':
                return `<a class="${element.class}" >${element.value}</a>`;
            case 'button':
                return `<button class="${element.class}" >${element.value}</button>`;
            default:
                return '';
        }
    }).join('');
};

export default Render