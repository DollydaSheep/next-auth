"use server";

import { database } from "./database";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

const bcrypt = require("bcrypt");

export type Errors = {
    email?: string;
    password?: string;
}

export type FormState = {
    errors: Errors
}

export async function signup(prevState: FormState, formData: FormData){
    
    const firstName = formData.get("firstname") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const errors: Errors = {};

    if(!email){
        errors.email = "Email is required!";
    }

    if(!password){
        errors.password = "Password is required!";
    }

    const hash = await bcrypt.hash(password, 10);

    try{
        const newUser = await prisma.user.create({
            data: {
                email: email,
                password: hash,
                name: firstName
            }
        })
        console.log("Successful Sign Up",newUser);
    } catch (error: any){
        if (error.code === "P2002"){
            return { errors: { email: "Email already exists! "} };
        }

        console.error(error);
        return { errors: { email: "Unexpected error occured. "} };
    }

    if (Object.keys(errors).length == 0){
        redirect("/login");
    }
    
}