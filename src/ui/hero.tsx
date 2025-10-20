import { Paragraph } from "../components/paragraph"
import Badge from "./badge";
import { Cta } from "./heroCta"
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
         style={{backgroundImage:`url(/bsd-1.jpg)`, backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}
         className="h-[100vh] md:h-[140vh] grid relative place-items-center  ">
            <div className="bg-black/60 h-full w-full absolute">

            </div>
            <div className=" md:w-[70%] relative z-20 text-white h-1/2  grid mx-auto place-items-center  gap-5">
                <Badge/>
                
                 <h1 className="font-montserrat leading-14 md:leading-16 tracking-wide text-4xl w-[95%] md:text-5xl font-bold  text-center">
                    <span className="text-white">Our Vision Got </span>
                    <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                        Bigger
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent blur-sm"></span>
                    </span>
                    <span className="text-white"> So Did Our </span>
                    <span className="relative inline-block">
                    <span className="relative z-10 px-3 py-1 bg-gradient-to-br from-gray-900 via-gray-700 to-black text-white rounded-lg shadow-xl">
                        Blueprint
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-400/50 via-white/50 to-gray-400/50 blur-md animate-pulse"></span>
                    </span>
                    <span className="text-white"> for the Future.</span>
                 </h1>
                <Paragraph content="We are a global construction company dedicated to turning your imagination into reality. From concept to completion, we bring bold ideas to life with precision, innovation, and craftsmanship no matter where in the world you are" className=" text-xl md:w-[85%] w-[90%] tracking-wide  md:leading-8 text-center"/>
                <Cta ref={refs.featureRef}/>
            </div>
        </section>
    )
}