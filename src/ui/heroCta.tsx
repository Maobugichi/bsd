import { StackBtn } from "../components/stackedbtn"
import { buttons } from "../object"
import { forwardRef } from "react"
export const Cta = forwardRef<HTMLElement>((_props,ref) => {
    return(
        <div className="w-[85%] flex items-center justify-center gap-2 h-fit">
           <StackBtn className="relative h-16 w-[30%]" buttons={buttons} ref={ref}/>
        </div>
    )
})