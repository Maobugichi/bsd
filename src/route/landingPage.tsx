import  { useRef } from 'react';
import { About } from '../components/sections/about/about';
import { Hero } from '@/components/sections/hero/hero';
import { LandingNav } from '../components/layout/navigation/landingNav';
import { Feature } from '../components/sections/features';
import { Gallery } from '@/components/sections/gallery';
import { Testimonial } from '../components/sections/testimonial';
import { FAQSection } from '../components/sections/faq/faq';
import { Footer } from '../components/layout/footer/footer';
import { CompanyHighlights } from '../components/sections/highlights';

export const LandingPage = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featureRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialRef = useRef(null);
  const faqRef = useRef(null);
 

  const scrollToSection = (ref:any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

 
  return (
    <main className="font-montserrat h-fit ">
      <LandingNav scrollToSection={scrollToSection} refs={{ heroRef, aboutRef, featureRef, galleryRef, testimonialRef, faqRef }} />
      <Hero refs={{heroRef, featureRef}}/>
     
      <About ref={aboutRef} />
      <Feature ref={featureRef} />
      <CompanyHighlights/>
      <Gallery ref={galleryRef} />
      <Testimonial ref={testimonialRef} />
      <FAQSection ref={faqRef} />
      <Footer/>
    </main>
  );
};