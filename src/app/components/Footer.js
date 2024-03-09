export default function Footer() {

    return (
        <footer className="fixed bottom-0 text-white min-w-full flex justify-between items-center py-2 px-4 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 border-zinc-200 border-t-[5px]">
            <div>
                <p className="text-lg">© NetworkNest By Mauro Trovoada. <br /> Tech Educators</p>
            </div>
            <ul className="flex flex-wrap items-center mt-3 text-lg font-medium sm:mt-0" >
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Github</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">LinkedIn</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Email</a>
                </li>

            </ul>
        </footer>
    )
}