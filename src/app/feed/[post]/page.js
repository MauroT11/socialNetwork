'use server'

import { sql } from "@vercel/postgres"
import Link from "next/link"
import Image from "next/image"
import { IoThumbsUpSharp } from "react-icons/io5";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function Page({params}) {

    const feed = (await sql`SELECT post_id, feedtitle, content, uploaded, likes, username FROM feed FULL OUTER JOIN users ON feed.userid = users.user_id WHERE post_id = ${params.post}`).rows
    
    // console.log(feed[0].likes)

    function handleLike() {
        console.log('LIKE')
        
        // let like = likes + 1

        // console.log(like)

        // sql`update feed set likes = ${like} where post_id = ${params.post}`

        // revalidatePath('/feed')
        // redirect('/feed')
    }

    return (
        <main className="flex justify-center items-center pt-4 gap-4 flex-wrap">
            {feed.map((post) => (
                <div key={post.post_id} className="flex flex-col gap-2 items-center rounded-xl py-1 px-2">
                    <p className="text-4xl">{post.feedtitle}</p>
                    <p>{post.content}</p>
                    
                    <Link href={`/user/${post.username}`} className="text-lg hover:underline">{post.username}</Link>
                    <p>Created: {post.uploaded}</p>
                    <p>Likes: {post.likes}</p>
                    <button type="button"  className="bg-orange-400 py-1 px-2 border-[1.5px] rounded border-black"><IoThumbsUpSharp /></button>
                </div>
            ))}
        </main>
    )
}