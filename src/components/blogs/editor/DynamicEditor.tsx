import dynamic from 'next/dynamic';

const DynamicEditor = dynamic(
  () => import('./Editor').then((mod) => mod.default),
  { ssr: false }
);

export default DynamicEditor;