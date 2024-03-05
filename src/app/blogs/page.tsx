import PaginationComp from '@/components/Pagination';
import Search from '@/components/Search/Search';
import Topic from '@/components/Search/Topic';
import { BlogList } from '@/components/blogs';
import MaxWidthWrapper from '@/components/wrapper/Maxwidthwrapper';
import React from 'react';

const Page = () => {
  // Array of 10 sample topics
  const topics = ['Node js', 'React js', 'Next js', 'Aws', 'Ec2', 'Lambda', 'ECR', 'ECS', 'Personal'];

  return (
    <section className='py-5'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#03051f] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"> </div>

      <MaxWidthWrapper className='flex-col w-full py-5 md:py-2  bg-transparent  '>
        <div className="topic flex flex-col items-center gap-3 w-full">
          <Search />

          <div className="flex  justify-center flex-wrap w-full text-center py-5 gap-4">

            {topics.map((topic, index) => (
              <Topic key={index} topic={topic} />
            ))}
          </div>
        </div>

        <div className="article-here  py-10 w-full text-start ">
          <h1 className='py-5 text-2xl font-medium'>Articles</h1>
          <hr className='w-full  opacity-50 h-1' />
        </div>

        <BlogList />

        <br />
        <PaginationComp />
      </MaxWidthWrapper>
    </section>

  );
};

export default Page;
