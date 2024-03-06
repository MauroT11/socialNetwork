import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
     <main className="flex flex-col items-center justify-center p-24 ">
        <div className="m-8">
            <SignIn />
        </div>
        
     </main>
     
     );
}