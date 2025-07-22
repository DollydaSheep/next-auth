"use server";

import { database } from "./database";
import { redirect } from "next/navigation";
import path from "path";
import fs from "fs";

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

    const filepath = path.resolve("./src/actions/database.ts");

    let fileContent = fs.readFileSync(filepath,"utf-8");

    const match = fileContent.match(/export const database = (\[[\s\S]*?\]);/);

    if(match){
        const jsonArray = eval(match[1]);
        jsonArray.push(newUser);

        const newContent = `export const database = ${JSON.stringify(jsonArray, null, 2)};\n`;

        fs.writeFileSync(filepath, newContent);
    }

    console.log(database);

    console.log("Successful Sign Up",newUser);

    redirect("/login");
}