"use client"

import { Logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Bell, Plus } from "lucide-react";


export default function Navbar(){
    return(
        <div className="w-full h-14 bg-violet-600 z-50 flex justify-between items-center shadow-md">
            <div className="flex items-center text-white space-x-4 ml-8">
                <Tooltip>
                    <TooltipTrigger>
                        <Button className="bg-violet-600 hover:bg-violet-500 cursor-pointer" asChild>
                            <span>
                                <Plus />
                            </span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Add Item</TooltipContent>
                </Tooltip>
                <p className="underline-animation hover:scale-110 hover:font-medium transition duration-200 cursor-pointer">Items</p>
                <p className="underline-animation hover:scale-110 hover:font-medium transition duration-200 cursor-pointer">Trade</p>
            </div>
            <div className="flex items-center text-white space-x-4 mr-8">
                <Bell className="mr-8 hover:scale-110 transition duration-200 cursor-pointer" color="white"/>
                <p className="underline-animation hover:scale-110 hover:font-medium transition duration-200 cursor-pointer" onClick={()=>Logout()}>Log Out</p>
            </div>
        </div>
    )
}