
import Submit from "@/app/components/SubmitBtn";
import Link from "next/link";
import { sql } from "@vercel/postgres"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { currentUser, auth } from "@clerk/nextjs";

export default async function page() {

    const user = auth()
    const current = currentUser()

    const clerkId = user.userId
    console.log(clerkId)


    async function handlePost(formData) {
        'use server'
        const title = formData.get('title')
        const content = formData.get('content')
        const submitDate = new Date()

        const date = `${submitDate.getUTCDate()}/${(submitDate.getUTCMonth() + 1)}/${submitDate.getUTCFullYear()} ${submitDate.getUTCHours()}:${submitDate.getMinutes()}`

        // console.log(title, content, date)

        await sql`INSERT INTO feed (feedtitle, content, likes, uploaded, userid) VALUES (${title}, ${content}, 0, ${date}, ${clerkId})`

        revalidatePath('/feed')
        redirect('/feed')

    }

    return (
        <main className="flex flex-col items-center pt-36">
            
            <div className="flex flex-col items-center border-2 drop-shadow-lg rounded-2xl border-zinc-400 p-8">
            <h1 className="text-2xl font-bold">Create a new post</h1>
            <form className="flex flex-col min-w-1/4 items-center gap-4 mt-4" action={handlePost}>
                <div className="grid grid-cols-3 items-center justify-items-center">
                    <label htmlFor="title">Post Title:</label>
                    <input type="text" name="title" id="title"  className="border-zinc-300 border-2 rounded col-span-2 p-1"/>
                </div>
                <div className="flex items-center justify-items-center gap-1">
                    <label htmlFor="content">Post Content:</label>
                    <textarea type="text" rows={5} cols={30} placeholder="What's going on?" name="content" id="content" className="border-zinc-300 p-1 border-2 rounded"/>
                </div>
                {/* <div className="grid grid-cols-3 items-center justify-items-center">
                    <label htmlFor="image">Image (Optional):</label>
                    <input type="text" name="image" id="image" className="border-zinc-300 border-2 rounded col-span-2"/>
                </div> */}
                <Submit loading='Creating Post...' btn='Create Post' />
            </form>
            </div>
        </main>
    )
}