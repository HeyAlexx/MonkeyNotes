"use client"

import { Loader, Loader2 } from "lucide-react"
import { Button } from "./button"
import { useState } from "react"
import { resolve } from "path";
//import { toast } from "sonner";
import { useSonner } from "sonner";
import { useRouter } from "next/router"


function LogoutButton() {
    //const {toast} = useSonner;
    //const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogOut = async () =>{
        setLoading(true)

        await new Promise((resolve) => setTimeout(resolve,2000));
        const errorMessage =null;
        if(!errorMessage){  
            
        "some"

        /* toast({
                title:"Logged Out",
                description:"You have been Successfully logged out",
                variant:"Success",
            });*/
       // router.push("/")
        }else{ 
            "error"
            /*toast({
                title:"Error",
                description:"errorMessage",
                variant:"destructive",
            });*/
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

export default LogoutButton