import { AboutDetails } from "./aboutDetails"
import { AboutImage } from "./aboutImg"
import  {forwardRef} from "react"

export const About = forwardRef<HTMLElement>((_props,ref) => {
    return(
        <section tabIndex={1} ref={ref} className=" h-fit font-montserrat md:py-20 py-10  grid place-items-center">
            <div className="w-[95%]  h-full mx-auto  flex lg:flex-row flex-col  justify-between items-center">
              <AboutDetails/>
              <AboutImage/>
            </div>
            
        </section>
    )
})