import { Header } from "../../components/header"
import { Paragraph } from "../../components/paragraph"
import { CompanyHighlights } from "./cubes"

export const AboutDetails = () => {
    return(
        <div className=" w-full lg:w-[55%] h-[93%]  flex flex-col justify-between gap-3 md:gap-0">
            <span>About us</span>
            <Header level={2} className="text-3xl md:text-4xl font-semibold">
                Leading the way in global construction, we transform bold ideas into lasting landmarks.
            </Header>
            <Paragraph content="We are a global construction company delivering innovative, high-quality, and sustainable solutions. From towers to infrastructure, we shape cities, empower communities, and set new standards for the industry." className="font-roboto text-sm md:text-lg"/>
            <CompanyHighlights/>
        </div>
    )
}