import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center ">
            <div className="m-8">
                <SignUp />
            </div>
        
        </main>
  )
}