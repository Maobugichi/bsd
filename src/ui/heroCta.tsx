import { StackBtn } from "../components/stackedbtn"
import { buttons } from "../object"
export const Cta = () => {
    return(
        <div className="w-[85%] flex items-center justify-center gap-2 h-fit">
           <StackBtn className="relative h-16 w-[30%]" buttons={buttons}/>
        </div>
    )
}