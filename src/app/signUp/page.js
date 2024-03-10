import { SignUp } from "@clerk/nextjs";

 
export default function Page() {


    return (
        <main className="flex flex-col items-center justify-center ">
            <SignUp afterSignUpUrl="/newProfile" />
        </main>
  )
}