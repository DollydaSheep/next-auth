import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input({className, ...props}: InputProps){
    return(
        <input 
            className={cn("border border-gray-200 px-2 py-2 rounded-xl focus-visible:border-violet-600 shadow-xs focus-visible:ring-violet-600/20 focus-visible:ring-[3px] focus:outline-none",className)} 
            {...props} />
    )
}

export {Input};