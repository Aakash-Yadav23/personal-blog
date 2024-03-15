// utils.ts
export const extractImagesAndVideos = (htmlContent: string): { images: string[]; videos: string[]; iframe: string[]; text: string } => {
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

    // Extract text
    const text = doc.body.textContent || '';

    return { images, videos, iframe, text };
};
