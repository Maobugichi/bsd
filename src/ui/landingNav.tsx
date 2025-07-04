import { Logo } from "../components/logo"
import { ListItem } from "./landingNavItem"
import { NavButton } from "./navButton"
import { Menu , X } from 'lucide-react';
import { useState } from "react";
import { motion } from "motion/react";
import type { RefObject } from "react";


interface LandingNavProps {
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
  refs: {
    heroRef: RefObject<HTMLElement>;
    aboutRef: RefObject<HTMLElement>;
    featureRef: RefObject<HTMLElement>;
    galleryRef: RefObject<HTMLElement>;
    testimonialRef: RefObject<HTMLElement>;
    faqRef: RefObject<HTMLElement>;
    //footerRef: RefObject<HTMLElement>;
  };
}


export const LandingNav = ({ scrollToSection, refs }: LandingNavProps) => {
    const [ show , setIsShow ] = useState<boolean>(false)
    function showNav() {
        setIsShow(true)
    }

    function closeNav() {
        setIsShow(false)
    }
    return(
        <nav className=" font-inter flex items-center p-2 md:p-0 justify-between backdrop-blur-md text-black fixed top-0 z-50 w-full h-20  border-b-1  border-black">
            <Logo/>
            <div className="hidden w-[60%] md:flex gap-5 h-full justify-end-safe">
             <ListItem scrollToSection={scrollToSection} refs={refs} />
             <NavButton/>
            </div>
            <div className="md:hidden">
              <Menu  onClick={showNav} size={32}/>
            </div>
            {show && <motion.nav
                initial={{x: 500 }}
                animate={show ? { x: 152 } : {}}
                exit={{ x: 500}}
                className={`fixed md:hidden z-20 w-[60%] md:w-[20%] md:fixed h-[100vh] top-0 flex-col gap-5  border-r border-solid  bg-[#f9fbfd] border-[#5252]}`}>
                   <div className={`h-16 flex justify-end items-center pr-5  border-b border-solid border-[#5252]}`}>
                       <X size={32} onClick={closeNav} className="md:hidden"/>
                   </div>
                   
                   <div className={`h-[85%] mt-8`}>
                        <ListItem scrollToSection={scrollToSection} refs={refs} />
                    </div>
               </motion.nav> }
        </nav>
    )
}