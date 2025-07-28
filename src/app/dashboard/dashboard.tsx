import { decrypt } from "@/lib/session";
import Navbar from "./navbar";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { itemsAll } from "@/actions/itemsAll";


export default async function Dashboard(){

    const session = await decrypt((await cookies()).get("session")?.value);

    const sessionUser = session?.userId as string

    const data = await itemsAll(parseInt(sessionUser));

    return(
        <div className="relative border border-gray-300 w-full md:w-2/3 h-2/3">
            <Navbar />
            <div className="m-4 w-[calc(100%-2em)] h-[calc(100%-5.5em)] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 auto-rows-min gap-2">
                {data && Object.entries(data).map(([key, value])=>(
                    <div key={key} className="flex flex-col justify-center w-full h-24 border border-gray-300 rounded-lg hover:border-violet-500 cursor-pointer shadow-sm">
                        <span className="ml-[10%]">
                            <h1 className="text-xl text-left font-medium">{value.name}</h1>
                            <p className="text-xs text-left">{value.description}</p>
                            <p>${value.price.toString()}</p>
                        </span>
                    </div>
                ))}
                

            </div>
        </div>
    )
}