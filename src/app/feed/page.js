import { sql } from "@vercel/postgres"
import Link from "next/link"
import Image from "next/image"

export default async function page() {
    
    const feed = (await sql`select feedtitle, content, uploaded, likes, username from feed inner join users on feed.post_id = users.user_id`).rows
    
    console.log(feed)
    // console.log(feed[0].userid)
    return (
        <main className="flex flex-col items-center pt-4">
            {feed.map((post) => (
                <div key={post.id} className="flex flex-col items-center border-4 rounded-xl py-1 px-2">
                    <p>{post.username}</p>
                    <p>{post.feedtitle}</p>
                    {/* <p>{post.content}</p> */}
                    <p>{post.uploaded}</p>
                    <p>likes: {post.likes}</p>
                    <Link href={`/users/${post.id}`} className="bg-orange-400 text-white border-black border-[1.5px] rounded-lg p-1">View</Link>
                </div>
            ))}
        </main>
    )
}