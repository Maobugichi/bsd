import { Logo } from "../components/logo"
import { ListItem } from "./landingNavItem"
import { NavButton } from "./navButton"
import { Menu, X } from 'lucide-react';


export const LandingNav = () => {
    return(
        <nav className=" font-inter flex items-center p-2 md:p-0 justify-between  backdrop-blur-md text-black fixed top-0 z-50 w-full h-20  border-b-1  border-black">
            <Logo/>
            <div className="hidden w-[60%] md:flex gap-5 h-full justify-end-safe">
             <ListItem/>
             <NavButton/>
            </div>
            <Menu className="md:hidden" size={32}/>
        </nav>
    )
}