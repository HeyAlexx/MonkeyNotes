"use client"

import { useRouter } from "next/navigation";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { startTransition, useTransition } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Loader2 } from "lucide-react";
//import {useToast} from "@/hooks/use-toast"


type Props ={
    type: "Login" | "signUp"
}



function Authform({type}: Props) {
    const isLoginForm = type === "Login";

    const router =useRouter();
    //const {toast} = useToast();
    const [isPending, startTransition] = useTransition();


    const handleSubmit  = (formData: FormData) => {
        console.log("form submitted");
    };






    return <form action={handleSubmit}>
        <CardContent className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
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
                <Label htmlFor="Password">Password</Label>
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
                : "Already have an account?"}{" "}                
            <Link 
                href={isLoginForm ? "/sign-up" : "/login"} 
                className={`text-blue-500 underline ${isPending ? " pointer-events-none opacity-50" : 
                    ""}`}
                >
                {isLoginForm ? "Sign Up" : "Login"}
            </Link>               
            </p>
        </CardFooter>
    </form>;
        
}

export default Authform