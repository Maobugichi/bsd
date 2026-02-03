import { AboutDetails } from "./aboutDetails"
import { AboutImage } from "./aboutImg"
import  {forwardRef} from "react"

export const About = forwardRef<HTMLElement>((_props,ref) => {
    return(
        <section  ref={ref} className="sticky h-fit  font-montserrat  py-20   grid place-items-center">
            <div className="w-[85%] h-full   mx-auto flex lg:flex-row flex-col [@media(min-width:1020px)_and_(max-width:1024px)]:flex-col gap-20 md:gap-10 items-center">
              <AboutDetails/>
              <AboutImage/>
            </div>
        </section>
    )
})