import Link from "next/link"
import Image from "next/image";

export default function NotFound({params}) {
    return (
        <main className="flex flex-col items-center justify-center py-4 justify-items-center min-h-max">
            <h1 className="text-6xl">404</h1>
            <h2 className="text-3xl">User Not Found</h2>
            <p className="text-lg">Could not find requested post</p>
            <Link href="/feed" className="hover:underline">Return to the feed</Link>
        </main>
  );
}