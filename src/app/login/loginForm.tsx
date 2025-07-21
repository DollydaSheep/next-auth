import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function LoginForm(){
	return (
		<div className="mx-auto flex flex-col w-sm">
			<h1 className="text-4xl font-bold mb-2">Sign In</h1>
			<p className="mb-4">Enter your email and password to sign in!</p>
			<form action="">
				<div className="flex flex-col mb-2">
					<label htmlFor="">Email</label>
					<Input name="email"/>
				</div>
				<div className="flex flex-col mb-2">
					<label htmlFor="">Password</label>
					<Input name="password"/>
				</div>
				<div className="flex justify-between mb-4">
					<span className="flex items-center">
						<Checkbox className="size-5"/>
						<p className="mx-2">Keep me logged in</p>
					</span>
					<Link className="text-violet-700" href={""}>Forgot password?</Link>
				</div>
				<Button className="w-full bg-violet-700 hover:bg-violet-800 cursor-pointer">Submit</Button>
			</form>
		</div>
	)
}