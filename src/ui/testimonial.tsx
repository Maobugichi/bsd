import { Header } from "../components/header"
import { StackedCards } from "./stackCards"

export const Testimonial = () => {
    return(
        <section className="flex flex-col items-center justify-center   gap-5 h-[100vh]">
         <Header level={2} className="text-3xl md:text-4xl  font-extrabold w-full md:w-1/2 text-center text-black">
            Trust is built with consistency
         </Header>
         <StackedCards/>
        </section>
    )
}