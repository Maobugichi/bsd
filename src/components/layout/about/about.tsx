import { AboutDetails } from "./aboutDetails"
import { AboutImage } from "./aboutImg"
import { forwardRef } from "react"

export const About = forwardRef<HTMLElement>((_props, ref) => {
    return (
        <section
            ref={ref}
            className="relative h-fit font-montserrat py-20 md:py-28 bg-[#f5f0eb] overflow-hidden"
        >
           
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '128px',
                }}
            />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

            <div className="relative z-10 w-[90%] lg:w-[85%] [@media(min-width:1020px)_and_(max-width:1024px)]:w-[85%] mx-auto flex lg:flex-row flex-col [@media(min-width:1020px)_and_(max-width:1024px)]:flex-col gap-20 md:gap-16 items-center">
                <AboutDetails />
                <AboutImage />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </section>
    )
})

About.displayName = "About"