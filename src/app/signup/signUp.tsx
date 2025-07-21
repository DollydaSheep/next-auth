
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useActionState } from "react"
import { FormState, login } from "@/actions/login"

export default function SignUpForm(){
	return(
		<div className="mx-auto flex flex-col w-md">
			<h1 className="text-4xl font-bold mb-2">Sign Up</h1>
			<p className="mb-4">Enter your email and password to sign up!</p>
			<form action={""}>
				<div className="flex flex mb-2 space-x-2">
					<span>
						<label htmlFor="">First Name</label>
						<Input className="w-full" name="firstname"/>
					</span>
					<span>
						<label htmlFor="">Last Name</label>
						<Input className="w-full" name="lastname"/>
					</span>
				</div>
				<div className="flex flex-col mb-2">
					<label htmlFor="">Email</label>
					<Input name="email"/>
		
				</div>
				<div className="flex flex-col mb-2">
					<label htmlFor="">Password</label>
					<Input type="password" name="password"/>
					
				</div>
				<div className="flex justify-between mb-4">
					<span className="flex">
						<Checkbox className="size-5"/>
						<p className="mx-2">By creating an account means you agree to the Terms and Conditions, and our Private Policy</p>
					</span>
				</div>
				<Button className="w-full bg-violet-700 hover:bg-violet-800 cursor-pointer mb-2" >Sign Up</Button>
				
				<p>Already have an account? <Link className="text-violet-700" href={"/login"}>Sign In</Link></p>
			</form>
		</div>
	)
}