
const getDecodedSlug = (slug: string): string => {

    const decodedSlug = decodeURIComponent(slug as string);
    return decodedSlug;
};

export default getDecodedSlug;
