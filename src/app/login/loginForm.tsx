"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useActionState } from "react"
import { FormState, login } from "@/actions/login"



export default function LoginForm(){


	const initialState: FormState = {
		errors:{}
	}

	const [state, formAction, isPending] = useActionState(login, initialState)
	

	return (
		<div className="mx-auto flex flex-col w-sm">
			<h1 className="text-4xl font-bold mb-2">Sign In</h1>
			<p className="mb-4">Enter your email and password to sign in!</p>
			<form action={formAction}>
				<div className="flex flex-col mb-2">
					<label htmlFor="">Email</label>
					<Input name="email"/>
					{state?.errors?.email && (
						<p className="text-red-500">{state?.errors.email}</p>
					)}
				</div>
				<div className="flex flex-col mb-2">
					<label htmlFor="">Password</label>
					<Input type="password" name="password"/>
					{state?.errors?.password && (
						<p className="text-red-500">{state?.errors.password}</p>
					)}
				</div>
				<div className="flex justify-between mb-4">
					<span className="flex items-center">
						<Checkbox className="size-5"/>
						<p className="mx-2">Keep me logged in</p>
					</span>
					<Link className="text-violet-700" href={""}>Forgot password?</Link>
				</div>
				<Button className="w-full bg-violet-700 hover:bg-violet-800 cursor-pointer mb-2" disabled={isPending}>Sign In</Button>
				{state?.errors && (
					<p className="text-red-500">{state?.errors.invalid}</p>
				)}
				<p>Don't have an account? <Link className="text-violet-700" href={"/signup"}>Sign Up</Link></p>
			</form>
		</div>
	)
}