import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

export default function Header() {

    const {userId} = auth();
    
    return (
        <header className="flex flex-col items-center bg-orange-400 text-white py-2 justify-items-center border-b-4 border-red-500">
            <h1 className="text-3xl font-bold">Network</h1>
            <div className="flex text-center">
                <nav>
                    <ul className="flex gap-4 items-center">
                        <Link href={'/'} className="text-2xl hover:underline">Home</Link>
                        <Link href={'/feed'} className="text-2xl hover:underline">Feed</Link>
                        {userId ? <UserButton /> : <SignInButton className="text-2xl hover:underline" />}
                    </ul>
                    
                </nav>
                
            </div>
            
        </header>
    )
}