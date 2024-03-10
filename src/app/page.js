'use client'

import Image from "next/image";
import NetworkLogo from '../../public/NetworkLogo.png'
import * as Accordion from '@radix-ui/react-accordion';


export default function Home({params}) {


  // console.log(params)

  return (
    <main className="flex flex-col items-center pt-2">
      <h1 className="text-5xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-red-500 via-purple-500 to-blue-500">Welcome to NetworkNest!</h1>
      <div className="flex flex-col my-4 gap-2 items-center">
        <p className="max-w-fit px-24 text-center">ConnectLink is a dynamic online platform designed to foster professional and personal networking. Whether you’re an entrepreneur, job seeker, or simply looking to expand your social circle, ConnectLink provides a virtual space where users can connect, collaborate, and share ideas.</p>
        <a href="/feed" className="text-2xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-red-500 via-purple-500 to-blue-500">View Posts</a>
        <Image src={NetworkLogo} alt="logo" height={100} width={300} />

        <Accordion.Root type="single" collapsible className="flex flex-col items-center bg-mauve6 w-[500px] rounded-md shadow-[0_2px_10px] shadow-black/5">

          <Accordion.Item value="item-1" className="flex flex-col items-center text-center border-red-500 rounded-md border-4 min-w-[500px]">
            <Accordion.Trigger className="font-bold">Profile and Bios</Accordion.Trigger>
            <Accordion.Content>Users create detailed profiles highlighting their skills, experiences, and interests. A well-crafted bio serves as a digital introduction, allowing others to understand your background and aspirations.</Accordion.Content>
          </Accordion.Item>
          
          <Accordion.Item value="item-2" className="flex flex-col items-center text-center border-4 border-purple-500 rounded-md min-w-[500px]">
            <Accordion.Trigger className="font-bold">Connections</Accordion.Trigger>
            <Accordion.Content>ConnectLink encourages users to build a network by connecting with colleagues, industry peers, mentors, and potential clients. The more connections you have, the broader your reach within the community.</Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3" className="flex flex-col items-center text-center border-blue-500 rounded-md border-4 min-w-[500px]">
            <Accordion.Trigger className="font-bold">Events and Webinars</Accordion.Trigger>
            <Accordion.Content>Stay informed about industry events, workshops, and webinars. ConnectLink hosts virtual networking events, allowing users to interact in real time.</Accordion.Content>
          </Accordion.Item>

        </Accordion.Root>
      </div>
    </main>
  );
}
