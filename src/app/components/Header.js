
import Link from "next/link";
import { UserButton, UserProfileLink } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { IoHome, IoCreate } from "react-icons/io5";
import Image from "next/image";
import { auth, currentUser, useUser } from "@clerk/nextjs";
import { MdOutlineRssFeed } from "react-icons/md";

export default async function Header() {

    const { userId } = auth();
    
    if (!userId) {
        return (
            <header className={`font-sans grid grid-cols-3 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white py-4 justify-items-center border-b-4 border-zinc-200`}>

            <div className="flex text-center">
                    <nav>
                        <ul className="flex gap-8 items-center text-4xl">
                            <Link href={'/'} className="hover:underline"><IoHome /></Link>
                            <Link href={'/feed'} className="hover:underline"><MdOutlineRssFeed /></Link>
                            <Link href={`/newPost`} className="hover:underline"><IoCreate /></Link>
                        </ul>
                    </nav>
                </div>
                <h1 className="text-4xl font-bold">NetworkNest</h1>
                <SignInButton afterSignInUrl="/feed" className="text-2xl hover:underline" />
        </header>
        )
    } 
    if (userId) {
        const user = currentUser();
        const username = user.username
        return (
            <header className="grid grid-cols-3 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white py-4 justify-items-center border-b-4 border-zinc-200">
            <div className="flex text-center">
                <nav>
                    <ul className="flex gap-6 items-center text-4xl">
                        <Link href={'/'} className="hover:underline"><IoHome /></Link>
                        <Link href={'/feed'} className="hover:underline"><MdOutlineRssFeed /></Link>
                        <Link href={`/newPost`} className="hover:underline"><IoCreate /></Link>
                    </ul>
                </nav>
            </div>
                <h1 className="text-4xl font-bold">NetworkNest</h1>
                <div className="flex text-3xl gap-2 items-center hover:underline">
                <Link href={`/profile/${username}`}>Profile</Link>
                <UserButton afterSignOutUrl="/" />
            </div>
            </header>
        )
    }   

    
}