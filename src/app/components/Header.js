
import Link from "next/link";
import { UserButton, UserProfileLink } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { IoHome, IoCreate } from "react-icons/io5";
import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs";

export default async function Header() {

    const { userId } = auth();
    const user = await currentUser()

    const username = user.username
    // console.log(userId)
    
    return (
        <header className="grid grid-cols-3 bg-orange-400 text-white py-4 justify-items-center border-b-4 border-red-500">
            <div className="flex text-center">
                <nav>
                    <ul className="flex gap-4 items-center text-2xl">
                        <Link href={'/'} className="hover:underline"><IoHome /></Link>
                        <Link href={'/feed'} className="hover:underline">Feed</Link>
                        <Link href={`/${username}/newPost`} className="hover:underline"><IoCreate /></Link>
                    </ul>
                </nav>
            </div>

            <h1 className="text-3xl font-bold">Network</h1>
            
            {userId ? 
            <div className="flex text-2xl gap-2">
                <Link href={`/users/${username}`}>Account</Link>
                <UserButton afterSignOutUrl="/" />
            </div>
            : 
            <SignInButton afterSignInUrl="/" className="text-2xl hover:underline" />}

            
            
        </header>
    )
}