'use client';
import { UserType } from "@/app/lib/types/anuong";
import Image from 'next/image';

const UserAvatar = ({user}: {user: UserType}) => {
    return (
        <>
            <div className="flex items-center my-4">
                    <figure className="mr-2">
                        <Image width={400} height={200} className=" object-cover w-12 h-12 rounded-full shadow-lg aspect-w-1 aspect-h-1" src={user.avatar} alt="this is image" />
                    </figure>
                    <div className="flex flex-col">
                        <span className="block">{user.name}</span>
                    </div>
            </div>
        </>
    );
}

export default UserAvatar;
