
import { UserButton } from "@clerk/nextjs";
import { sql } from "@vercel/postgres"
import Link from "next/link"
import { notFound } from "next/navigation";

export default async function page({params}) {


    const {rows} = await sql`SELECT * FROM users where username = ${params.user}`
    
    const userDetails = rows?.[0];
    // console.log(userDetails)

    if (!userDetails) {
        notFound();
    }

    const feed = (await sql`SELECT post_id, feedtitle, content, uploaded, likes, username FROM feed FULL OUTER JOIN users ON feed.userid = users.user_id WHERE username = ${params.user}`).rows

    // console.log(feed)


    return (
        <main className="flex flex-col items-center py-4 min-w-full">
            <div className="flex flex-col gap-2 mb-4">
                <h1 className="text-3xl font-bold text-center">{params.user}</h1>
                    <div className="flex flex-col items-center">
                            <div key={userDetails.user_id} className="flex flex-col gap-2">
                                <p>{userDetails.bio}</p>
                                <p>Location: {userDetails.location}</p>
                                <div className="flex gap-4">
                                    <p>{userDetails.followers} Followers</p>
                                    <p>{userDetails.following} Following</p>
                                </div>
                            </div>

                        
                    </div>
                    <div className="flex justify-center">
                        
                        <button className="border-[1.5px] rounded bg-orange-400 text-white border-black py-1 px-2">Follow</button> 
                        
            </div>
            
            
            <div className="min-w-10/12 flex justify-center gap-4">
            {feed.map((post) => (
                <div key={post.post_id} className="flex flex-col items-center rounded-xl border-4 py-2 px-2">
                    <h1 className="text-lg">{post.username}</h1>
                    <p className="text-2xl">{post.feedtitle}</p>
                    <p>{post.content}</p>
                    <p>Created: {post.uploaded}</p>
                    <p>Likes: {post.likes}</p>
                    <Link href={`/feed/${post.post_id}`} className="bg-orange-400 text-white border-black border-[1.5px] rounded-lg py-1 px-2">View</Link>
                </div>
            ))}
            </div>
        </div>
        </main>
    )
}