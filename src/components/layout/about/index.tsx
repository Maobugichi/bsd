import { AboutDetails } from "./aboutDetails";
import { AboutImage } from "./aboutImg";
import { NoiseTexture } from "../../ui/noiseTexture";
import { useNavigationContext } from "@/context/navigation.context";

export const About = () => {
    const { refs: { aboutRef } } = useNavigationContext();

    return (
        <section
            ref={aboutRef}
            className="relative font-montserrat py-20 md:py-28 bg-[#f5f0eb] overflow-hidden"
        >
            <NoiseTexture opacity="opacity-[0.04]" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

            <div className="relative z-10 w-[90%] lg:w-[85%] mx-auto flex lg:flex-row flex-col gap-20 md:gap-16 items-stretch">
                <AboutDetails />
                <AboutImage />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </section>
    );
};

About.displayName = "About";