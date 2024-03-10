'use server'

import Submit from "@/app/components/SubmitBtn";
import { UserButton, UserProfile, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { sql } from "@vercel/postgres"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { currentUser } from "@clerk/nextjs";

export default async function page() {

    const user = await currentUser()
    const username = user.username
    
    const details = (await sql`select * from users where username = ${username}`).rows

    // console.log(details)

    return (
        <main className="flex flex-col items-center pt-4">
            <h1 className="text-3xl">{username} Profile</h1>
            
            {details.map((detail) => (
                <div key={detail.clerkid} className="mb-8">
                    <p>{detail.bio}</p>
                    <p>{detail.location}</p>
                    <p>Followers: {detail.followers}</p>
                    <p>Following: {detail.following}</p>
                    <Link href={`/users/${username}/edit`} className="bg-orange-400 text-white border-black border-[1.5px] rounded-lg p-1">Edit</Link>
                </div>
            ))}
            <UserProfile/>
        </main>
    )
}