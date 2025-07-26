"use server";

import { createSession } from "@/lib/session";
import { database } from "./database";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

const bcrypt = require('bcrypt');

export type Errors = {
	email?: string;
	password?: string;
}

export type FormState = {
	errors: Errors;
}

export async function login(prevState: FormState, formData : FormData){

	const email = formData.get("email") as string;
	const password = formData.get("password") as string;


	const errors: Errors = {}

	if(!email){
		errors.email = "Email is required!";
	}

	if(!password){
		errors.password = "Password is required!";
	}

	if(Object.keys(errors).length > 0){
		return { errors }
	}

	try{
		const user = await prisma.user.findUnique({
			where: {
				email: email,
			}
		})

		if (!user) {
			return { errors: { invalid: "Invalid Email or Password!" } };
		}

		const match = await bcrypt.compare(password, user?.password);

		if(match){
			await createSession(email);
			console.log("Sign In Successful!",user);
		} else {
			return { errors: { invalid: "Invalid Email or Password!"}};
		}

	} catch (error:any){
		console.error(error);
		return { errors: { invalid: "Something went wrong. Please try again." } };
	}
	
	if(Object.keys(errors).length === 0){
		redirect("/dashboard");
	}

}