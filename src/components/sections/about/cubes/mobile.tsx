import { aboutCompany as companyHighlights } from '../constants/about-company';
import { useRef } from 'react';
import { CustomCard } from '@/components/ui/customcard';
import { aboutCompanyAdapter } from '../adapter/about-adapter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomConatiner } from '@/components/ui/customContainer';

gsap.registerPlugin(ScrollTrigger);


export default function CompanyHighlights() {
  const cubeRef = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <CustomConatiner
      items={companyHighlights}
      cardsRef={cubeRef}
      id="services-cards"
      className="md:grid md:place-items-center md:grid-cols-2  gap-5  "
      renderCard={(item, index, ref) => (
        <CustomCard
          key={item.id}
          item={item}
          height="h-[360px]"
          index={index}
          totalCards={companyHighlights.length}
          getIcon={aboutCompanyAdapter.getIcon}
          getColor={aboutCompanyAdapter.getColor}
          getTitle={aboutCompanyAdapter.getTitle}
          getDesc={aboutCompanyAdapter.getDesc}
          getMetric={aboutCompanyAdapter.getMetric}
          getUnit={aboutCompanyAdapter.getUnit}
          innerRef={ref}
        />
      )}
    />
       
  
  );
}