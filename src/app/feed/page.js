import { sql } from "@vercel/postgres"
import Link from "next/link"
import Image from "next/image"

export default async function page() {
    
    const feed = (await sql`SELECT post_id, feedtitle, content, uploaded, likes, username FROM feed FULL OUTER JOIN users ON feed.userid = users.user_id`).rows
    
    console.log(feed)

    return (
        <main className="flex justify-center items-center pt-4 gap-4 flex-wrap">
            {feed.map((post) => (
                <div key={post.post_id} className="flex flex-col items-center border-4 rounded-xl min-w-44 py-1 px-2">
                    
                    <p className="text-2xl">{post.feedtitle}</p>
                    <p className="text-sm">{post.username}</p>
                    {/* <p>{post.content}</p> */}
                    <p className="text-xs">{post.uploaded}</p>
                    <p className="text-sm">likes: {post.likes}</p>
                    <Link href={`/feed/${post.post_id}`} className="bg-orange-400 text-white border-black border-[1.5px] rounded-lg p-1">View</Link>
                </div>
            ))}
        </main>
    )
}