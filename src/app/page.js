import Image from "next/image";

export default function Home({params}) {
  console.log(params)
  return (
    <main className="flex flex-col items-center pt-4">
        <h1 className="text-5xl font-bold">Welcome to the Network</h1>
    </main>
  );
}
