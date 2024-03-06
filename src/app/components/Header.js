'use client'

import Link from "next/link";
import { UserButton, UserProfileLink, useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { IoHome, IoCreate } from "react-icons/io5";
import Image from "next/image";

export default function Header() {
    
    const { isSignedIn, user, isLoaded } = useUser();
    
    return (
        <header className="grid grid-cols-3 bg-orange-400 text-white py-4 justify-items-center border-b-4 border-red-500">
            <div className="flex text-center">
                <nav>
                    <ul className="flex gap-4 items-center text-2xl">
                        <Link href={'/'} className="hover:underline"><IoHome /></Link>
                        <Link href={'/feed'} className="hover:underline">Feed</Link>
                        <Link href={'/newPost'} className="hover:underline"><IoCreate /></Link>
                    </ul>
                </nav>
            </div>

            <h1 className="text-3xl font-bold">Network</h1>
            
            {user ? 
            <div className="flex text-2xl gap-2">
                <Link href={`/users/${user.username}`}>Account</Link>
                <UserButton afterSignOutUrl="/">
                    {/* <UserProfileLink label="HOME" url="/" labelIcon={<DotIcon />} /> */}
                </UserButton> 
            </div>
            : 
            <SignInButton afterSignInUrl="/" className="text-2xl hover:underline" />}

            
            
        </header>
    )
}