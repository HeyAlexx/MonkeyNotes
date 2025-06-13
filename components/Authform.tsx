"use client"

import { useRouter } from "next/navigation";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { startTransition, useTransition } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import {Toaster,toast} from "sonner"
import { loginAction, signUpAction } from "@/src/actions/users";



type Props ={
    type: "Login" | "signUp"
}



function Authform({type}: Props) {
    const isLoginForm = type === "Login";

    const router = useRouter();
    
    const [isPending, startTransition] = useTransition();


    const handleSubmit  = (formData: FormData) => {

        startTransition(async() => {
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;
            let errorMessage;
            let title;
            let description;
            if(isLoginForm){
                errorMessage = (await loginAction(email,password)).errorMessage;
                title = "Logged in";
                description = "You have been logged in successfully";
            }else{
                errorMessage = (await signUpAction(email, password)).errorMessage;
                title = "Signed up";
                description = "check your email for confirmation link";
            }

            if(!errorMessage){
                toast(title,{description});
                router.push("/");

            }else{
                toast('wrong');

            }
            
        
            router.refresh();
        });
    };






    return <form action={handleSubmit}>
        <CardContent className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label className=" mx-2.5" htmlFor="email">Email</Label>
                <Input         
                id="email"       
                name="email" 
                placeholder="Email"
                type="email"
                required
                disabled = {isPending} 
                className="" />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label className="mx-2.5" htmlFor="Password">Password</Label>
                <Input         
                id="password"       
                name="password" 
                placeholder="Password"
                type="password"
                required
                disabled = {isPending} 
                className="" />
            </div>
        </CardContent>
        <CardFooter className=" mt-4 flex flex-col gap-6">
            <Button className="w-full">
                {isPending ? (<Loader2 className="animate-spin" />) : (isLoginForm ? "Login" : "Sing Up")}
            </Button>
            <p className="text-xs">
                {isLoginForm
                ? "Don't have an account?"
                : "Already have an account ?"}{" "}                
            <Link 
                href={isLoginForm ? "/sign-up" : "/login"} 
                className={`text-blue-500 underline ${isPending ? " pointer-events-none opacity-40" : 
                    ""}`}
                >
                {isLoginForm ? "Sign Up" : "Login"}
            </Link>               
            </p>
        </CardFooter>
    </form>;
        
}

export default Authform