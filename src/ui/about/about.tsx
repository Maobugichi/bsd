import { AboutDetails } from "./aboutDetails"
import { AboutImage } from "./aboutImg"
import  {forwardRef} from "react"

export const About = forwardRef<HTMLElement>((_props,ref) => {
    return(
        <section tabIndex={1} ref={ref} className="h-[240vh] font-montserrat  md:h-[190vh] mt-10 grid place-items-center">
            <div className="w-[85%] h-full mx-auto  flex md:flex-row flex-col  justify-between items-center">
              <AboutDetails/>
              <AboutImage/>
            </div>
            
        </section>
    )
})