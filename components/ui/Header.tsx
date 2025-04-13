import { shadow } from "@/src/styles/utils"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./button"


function Header() {
    const user = null
    return (
        <header
            className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8" 
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

            <h1 className=" flex flex-col pb-1 text-2xl font-semibold leading-6">
                Monkey <span>Notes</span>
                </h1>
            </Link>

            <div className=" flex gap-4">
                {user ? (
                    "Logout"
                ) :
                (
                    <>
                    <Button>
                        <Link href="/login">Login</Link>
                    </Button>
                    </>
                )
            }

            </div>



        </header>
    )
}

export default Header