'use client'

import Image from "next/image";

export default function Home({params}) {


  // console.log(params)

  return (
    <main className="flex flex-col items-center pt-4">
      <h1 className="text-5xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-red-500 via-purple-500 to-blue-500">Welcome to NetworkNest!</h1>
      <div className="flex flex-col my-4">
        <p className="max-w-fit px-24 text-center">ConnectLink is a dynamic online platform designed to foster professional and personal networking. Whether you’re an entrepreneur, job seeker, or simply looking to expand your social circle, ConnectLink provides a virtual space where users can connect, collaborate, and share ideas.</p>
      </div>
    </main>
  );
}
