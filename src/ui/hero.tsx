import { Header } from "../components/header"
import { Paragraph } from "../components/paragraph"
import { Cta } from "./heroCta"
import  {forwardRef} from "react"
import background from "../assets/bsd-1.jpg"
import type { RefObject } from "react";

interface HeroRefs {
     refs: {
        heroRef: RefObject<HTMLElement>;
        featureRef: RefObject<HTMLElement>;
     }
}

export const Hero = ({refs}:HeroRefs) => {
    return(
        <section 
         ref={refs.heroRef}
         tabIndex={0}
         style={{backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}
         className="h-[90vh] grid relative place-items-center  mt-20">
            <div className="bg-black/60 h-full w-full absolute">

            </div>
            <div className=" md:w-[70%] relative z-20 text-white h-1/2 md:h-[70%] grid mx-auto place-items-center gap-5 ">
                <span>Build Your Dream</span>
                <Header level={1} className="font-montserrat text-3xl w-[90%] md:text-5xl font-bold  text-center">
                    Our Vision Got Bigger<br/> So Did Our Blueprint for the Future.
                </Header>
                <Paragraph content="We are a global construction company dedicated to turning your imagination into reality. From concept to completion, we bring bold ideas to life with precision, innovation, and craftsmanship no matter where in the world you are" className="font-roboto text-sm md:text-lg text-center"/>
                <Cta ref={refs.featureRef}/>
            </div>
        </section>
    )
}