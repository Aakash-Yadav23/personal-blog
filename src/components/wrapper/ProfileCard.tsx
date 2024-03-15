import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import UserCard from './UserCard';
import React from 'react';
import Image from 'next/image';



const ProfileCard = ({ session }: { session?: any }) => {
    const navigate = useRouter();

    const [openThis, setOpenThis] = React.useState(false);

    // Check if the session is loaded and has data
    // if (status === 'loading') {
    //     return <div>Loading...</div>;
    // }

    // Check if the user is authenticated
    if (!session) {
        return (
            <div className="flex justify-center items-center ">
                <Button className='glass-effect' onClick={() => navigate.push("/login")}>
                    Sign in
                </Button>
            </div>
        );
    }

    const { email, name } = session;
    // Access session details


    return (
        <div className=" shadow-md rounded-lg overflow-hidden flex flex-col ">
            <div className="flex items-center ">

                <Image
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded-full cursor-pointer hover:opacity-60 transition-all ease-in-out duration-500"
                    src="https://placehold.co/150" // Replace with user avatar
                    alt="User avatar"
                    onClick={() => setOpenThis(!openThis)}
                />

                {
                    openThis ? (
                        <UserCard name={name} email={email} />

                    ) : null
                }
            </div>
            {/* Add other user details or profile actions here */}
        </div>
    );
};

export default ProfileCard;
