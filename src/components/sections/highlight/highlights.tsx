import { Card } from './highlightCard';
import { HightlightHeader } from './highlighHeader';
import { HighlightCta } from './highlightCta';






export const CompanyHighlights = () => {
  
  return (
    <section  className=" h-fit md:py-20 pb-10 pt-20 ">
      <div className='w-[85%] mx-auto grid gap-10 [@media(min-width:1020px)_and_(max-width:1024px)]:w-[75%]'>
       <HightlightHeader/>
      
         <Card/> 
         <HighlightCta/>
      
      </div>
    </section>
  );
};