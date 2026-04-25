import { About } from '../components/layout/about';
import { Hero } from '@/components/layout/hero';
import { LandingNav } from '../components/layout/navigation/landingNav';
import { Feature } from '../components/layout/featured';
import { Gallery } from '@/components/layout/gallery/gallery';
import { Testimonial } from '../components/layout/testimonial';
import { FAQSection } from '../components/layout/faq/faq';
import { Footer } from '../components/layout/footer/footer';
import { CompanyHighlights } from '@/components/layout/highlight';
import { NavigationProvider } from '@/context/navigation.context';

export const LandingPage = () => {
    return (
        <NavigationProvider>
            <main className="font-montserrat h-fit">
                <LandingNav />
                <Hero />
                <About />
                <Feature />
                <CompanyHighlights />
                <Gallery />
                <Testimonial />
                <FAQSection />
                <Footer />
            </main>
        </NavigationProvider>
    );
};