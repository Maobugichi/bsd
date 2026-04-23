import  { useRef } from 'react';
import { About } from '../components/layout/about/about';
import { Hero } from '@/components/layout/hero/hero';
import { LandingNav } from '../components/layout/navigation/landingNav';
import { Feature } from '../components/layout/featured/features';
import { Gallery } from '@/components/layout/gallery/gallery';
import { Testimonial } from '../components/layout/testimonial/testimonial';
import { FAQSection } from '../components/layout/faq/faq';
import { Footer } from '../components/layout/footer/footer';
import { CompanyHighlights } from '@/components/layout/highlight';

export const LandingPage = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featureRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialRef = useRef(null);
  const faqRef = useRef(null);
 

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
 
  return (
    <main className="font-montserrat h-fit ">
      <LandingNav scrollToSection={scrollToSection} refs={{ heroRef, aboutRef, featureRef, galleryRef, testimonialRef, faqRef }} />
      <Hero refs={{heroRef, featureRef}} scrollToSection={scrollToSection}/>
     
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