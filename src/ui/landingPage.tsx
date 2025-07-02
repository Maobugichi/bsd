import { About } from "./about/about"
import { Hero } from "./hero"
import { LandingNav } from "./landingNav"
import { Feature } from "./features"
import { Gallery } from "./gallery"
import { Testimonial } from "./testimonial"
import { FAQSection } from "./faq"
import { Footer } from "./footer"

export const LandingPage = () => {
    return(
        <main className=" h-fit overflow-hidden">
            <LandingNav/>
            <Hero/>
            <About/>
            <Feature/>
            <Gallery/>
            <Testimonial/>
            <FAQSection/>
            <Footer/>
        </main>
    )
}