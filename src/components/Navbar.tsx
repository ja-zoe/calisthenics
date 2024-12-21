import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export const Navbar = async () => {
    const {isAuthenticated} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated()

    console.log(isUserAuthenticated)

    return (
    <div className="absolute h-20 w-screen border-b-black border-b-4 flex items-center justify-between px-5 lg:px-52">
        <div>
            <h1 className="text-2xl"><Link href="/">Placeholder</Link></h1>
        </div>
        <div>
            <Button className="bg-black text-white hidden sm:inline">
                {!isUserAuthenticated
                    ? <LoginLink>Login</LoginLink>
                    : <LogoutLink>Logout</LogoutLink>
                }
            </Button>

            <div className="sm:hidden">
                <Sheet>
                    <SheetTrigger>
                        <RxHamburgerMenu className="w-7 h-7"/>
                    </SheetTrigger>
                    <SheetContent side={"top"} className="bg-black h-full flex flex-col justify-center">
                        <LoginLink className="text-white text-lg">Login</LoginLink>
                    </SheetContent>
                </Sheet>
            </div>

        </div>
    </div>
  )
}
export default Navbar