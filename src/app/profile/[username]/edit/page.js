'use server'

import Submit from "@/app/components/SubmitBtn";
import { useUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function page({params}) {

    
    const details = (await sql`select * from users where username = ${params.userId}`).rows

    console.log(details)

    async function handleProfile(formData) {
        'use server'

        console.log(formData)

        const id = params.userId
        const location = formData.get('location')
        const profileBio = formData.get('bio')

        console.log(id, location, profileBio)

        await sql`UPDATE users set location = ${location}, set profileBio = ${profileBio} where userId = ${params.id}`

        revalidatePath('/')
        redirect('/')
    }

    return (
        <main className="flex flex-col items-center pt-4">
            <h1 className="text-3xl">Update profile details</h1>
            {/* <UserProfile /> */}
            <form action={handleProfile} className="flex flex-col gap-4 mt-4">
                <div className="flex gap-4">
                    <label htmlFor="bio">Profile Bio</label>
                    <input type="text" name="bio" id="bio" className="border-zinc-300 border-2 rounded"/>
                </div>
                <div className="flex gap-4">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location" className="border-zinc-300 border-2 rounded"/>
                </div>
                <Submit loading='Updating...' btn='Update' />
            </form>
            {details.map((detail) => (
                <div key={detail.id}>
                    <p>{detail.profilebio}</p>
                    <p>{detail.location}</p>
                    <p>Followers: {detail.followers}</p>
                    <p>Following: {detail.following}</p>
                </div>
            ))}
        </main>
    )
}