'use server'

import Submit from "@/app/components/SubmitBtn";
import { UserButton, UserProfile, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { sql } from "@vercel/postgres"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function page({params}) {

    console.log(params)
    
    const details = (await sql`select * from users where username = ${params.username}`).rows

    console.log(details)
    async function handleProfile(formData) {
        'use server'

        console.log(formData)

        const id = params.userId
        const location = formData.get('location')
        const profileBio = formData.get('bio')

        console.log(id, location, profileBio)

        // await sql`INSERT INTO users (userId, location, profileBio, followers, following) VALUES (${id}, ${location}, ${profileBio}, 0, 0)`

        // revalidatePath('/')
        // redirect('/')
    }

    return (
        <main className="flex flex-col items-center pt-4">
            <h1 className="text-3xl">User Details</h1>
            
            {details.map((detail) => (
                <div key={detail.id} className="mb-8">
                    <p>{detail.profilebio}</p>
                    <p>{detail.location}</p>
                    <p>Followers: {detail.followers}</p>
                    <p>Following: {detail.following}</p>
                    <Link href={`/users/${params.userId}/edit`} className="bg-orange-400 text-white border-black border-[1.5px] rounded-lg p-1">Edit</Link>
                </div>
            ))}
            <UserProfile/>
        </main>
    )
}