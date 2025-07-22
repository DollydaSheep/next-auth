"use server";

import { createSession } from "@/lib/session";
import { database } from "./database";
import { redirect } from "next/navigation";

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

	

	if(database.some(user => user.email === email && user.password === password)){
		await createSession(email);
		redirect("/dashboard")
	}else{
		return { invalid: "Invalid Email or Password!"}
	}

	console.log("Email",email);
	console.log("Password",password);
}