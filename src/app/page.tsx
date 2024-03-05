import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MaxWidthWrapper from "@/components/wrapper/Maxwidthwrapper";
import project1 from '@/assets/images/project1.svg';
import Image from "next/image";

import nodejsLogo from '@/assets/images/nodejs.png';
import htmlLogo from '@/assets/images/html.png';
import cssLogo from '@/assets/images/css.jpeg';
import ec2Logo from '@/assets/images/aws-ec2-logo.png';
import dynamodbLogo from '@/assets/images/DynamoDB.svg';
import lambdaLogo from '@/assets/images/Lambda.svg';
import amplifyLogo from '@/assets/images/Amplify.svg';
import cognitoLogo from '@/assets/images/Cognito.svg';
import expressLogo from '@/assets/images/express.png';
import mongoLogo from '@/assets/images/mongo.png';
import s3Logo from '@/assets/images/s3.svg';
import graphqlLogo from '@/assets/images/graphql.png';

const icons = [
  { name: 'Node.js', logo: nodejsLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'Express', logo: expressLogo },
  { name: 'AWS EC2', logo: ec2Logo },
  { name: 'DynamoDB', logo: dynamodbLogo },
  { name: 'GraphQL', logo: graphqlLogo },
  { name: 'Lambda', logo: lambdaLogo },
  { name: 'Amplify', logo: amplifyLogo },
  { name: 'S3', logo: s3Logo },
  { name: 'MongoDB', logo: mongoLogo }
];


export default function Home() {
  return (
    <main className="flex h-auto flex-col items-center justify-between ">
      <section className="hero relative">
        <MaxWidthWrapper className="flex-col h-full py-40 md:py-60">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#03051f] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"> </div>
          <div className="max-w-[700px]  text-center flex flex-col gap-10">

            <div className="flex items-center letter-spacing-1 flex-col gap-1 font-semibold">
              <div className="glass-effect flex items-center gap-2 px-4 py-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                Aakash Yadav
              </div>
              <h1 className="text-[3rem] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text md:text-[4rem] lg:text-[5rem] linear-text">
                Hey Welcome to,
              </h1>
              <h1 className="text-[3rem] bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text md:text-[4rem] lg:text-[5rem] linear-text">
                Blog Hub
              </h1>
            </div>
            <h1 className="para bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text">
              Create stunning, professional-quality websites in record time with our powerful UI kit. Elevate your SAAS game today!
            </h1>
          </div>
          <div className="project1 py-10">
            <Image src={project1.src} width={500} height={500} alt="Project-1" className="object-contain w-auto " />
          </div>


          {/* <div className="w-full flex items-center gap-5">

            {
              icons.map((icon, index) => (
                <div className="flex items-center w-full gap-3" key={index}>
                  <p className="text-1xl">{icon.name}</p>
                  <Image src={icon.logo.src} alt={icon.name} width={100} height={50} className="" />
                </div>
              ))
            } 

          </div>
            
            */}


        </MaxWidthWrapper>
      </section>
    </main >
  );
}
