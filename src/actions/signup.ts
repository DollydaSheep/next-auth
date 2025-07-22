"use server";

import { database } from "./database";
import { redirect } from "next/navigation";

export type Errors = {
    email?: string;
    password?: string;
}

export type FormState = {
    errors: Errors
}

export async function signup(prevState: FormState, formData: FormData){
    
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const errors: Errors = {};

    if(!email){
        errors.email = "Email is required!";
    }

    if(!password){
        errors.password = "Password is required!";
    }

    const newUser = {
        email: email,
        password: password
    }

    database.push(newUser);

    console.log(database);

    console.log("Successful Sign Up",newUser);

    redirect("/login");
}