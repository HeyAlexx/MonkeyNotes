import { shadow } from "@/src/styles/utils"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import DarkModeToggle from "@/components/DarkModeToggle"
import LogOutButton from "@/components/LogOutButton"
import { getUser } from "@/src/auth/server"


 async function Header() {
    const user = await getUser();
    return (
        <header
            className="bg-popover relative flex flex-col-4 min-h-24 w-full items-center justify-between px-3 sm:px-8" 
            style={{ boxShadow: shadow,}}
        >
            <Link className="flex items-end gap-2" href="/">
            <Image
                src="/Designer.png" 
                height={60}
                width={60}
                alt="Logo"
                className="rounded-full"
                priority
            />
            </Link>
            <h1 className=" flex-3 pb-1  ml-35  text-2xl font-semibold leading-6 text-center">
                Monkey <span>Notes</span>
                </h1>
            

            <div className=" flex gap-4">
                {user ? (
                    <LogOutButton />
                ) : (
                    <>
                    <Button asChild>
                        <Link href="/sign-up" className="hidden sm:block">
                        Sign Up
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/Login">
                        Login
                        </Link>
                    </Button>
                    </>
                )
            }
            <DarkModeToggle />
            </div>



        </header>
    )
}

export default Header