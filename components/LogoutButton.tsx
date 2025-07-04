"use client"

import { Loader, Loader2 } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import { resolve } from "path";
import { Toaster,toast } from "sonner";

import { useRouter } from "next/navigation"
import { error } from "console";
import { logOutAction } from "@/src/actions/users";


function LogOutButton() {
    
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogOut = async () =>{
        setLoading(true)

    const {errorMessage} = await logOutAction();


        if(!errorMessage){ 
        toast('Logged Out');
        router.push("/");
        }else{ 
            toast('Error');
        }


        
        setLoading(false)
    };

return (
    <Button
    variant="outline"
    onClick={handleLogOut}
    disabled = {loading}
    className="w-24"
    >
        {loading ? <Loader2 className="animate-spin"/> : "Log Out"} 
        
    </Button>
        );
}

export default LogOutButton