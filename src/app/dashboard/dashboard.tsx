import Navbar from "./navbar";


export default function Dashboard(){
    return(
        <div className="relative border border-gray-300 w-full md:w-2/3 h-2/3">
            <Navbar />
            <div className="m-4 w-[calc(100%-2em)] h-[calc(100%-5.5em)] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 auto-rows-min gap-2">
                <div className="flex flex-col justify-center w-full h-24 border border-gray-300 rounded-lg hover:border-violet-500 cursor-pointer shadow-sm">
                    <span className="ml-[10%]">
                        <h1 className="text-xl text-left font-medium">Hair Comb</h1>
                        <p className="text-xs text-left">Just a piece of hair comb</p>
                        <p>$200</p>
                    </span>
                </div>

            </div>
        </div>
    )
}