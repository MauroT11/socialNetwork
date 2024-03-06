import { sql } from "@vercel/postgres"
import Link from "next/link"
import Image from "next/image"

export default async function page() {
    
    const feed = (await sql`select * from feed`).rows

    return (
        <main className="flex flex-col items-center pt-4">
            
        </main>
    )
}