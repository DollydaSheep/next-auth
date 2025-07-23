import { Bell } from "lucide-react";


export default function Navbar(){
    return(
        <div className="w-full h-14 bg-violet-600 z-50 flex justify-between items-center shadow-md">
            <div className="flex text-white space-x-8 ml-8">
                <p className="underline-animation hover:scale-110 hover:font-medium transition duration-200 cursor-pointer">Items</p>
                <p className="underline-animation hover:scale-110 hover:font-medium transition duration-200 cursor-pointer">Trade</p>
            </div>
            <Bell className="mr-8 hover:scale-110 transition duration-200 cursor-pointer" color="white"/>
        </div>
    )
}