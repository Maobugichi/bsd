import  { useRef } from 'react';
import { About } from './about/about';
import { Hero } from './hero';
import { LandingNav } from './landingNav';
import { Feature } from './features';
import { Gallery } from './gallery';
import { Testimonial } from './testimonial';
import { FAQSection } from './faq';
import { Footer } from './footer';

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
    <main className="font-montserrat h-fit overflow-hidden">
      <LandingNav scrollToSection={scrollToSection} refs={{ heroRef, aboutRef, featureRef, galleryRef, testimonialRef, faqRef }} />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Feature ref={featureRef} />
      <Gallery ref={galleryRef} />
      <Testimonial ref={testimonialRef} />
      <FAQSection ref={faqRef} />
      <Footer/>
    </main>
  );
};