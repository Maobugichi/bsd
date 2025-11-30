import { aboutCompany as companyHighlights } from '../constants/about-company';
import { useRef } from 'react';
import { CustomCard } from '@/components/ui/customcard';
import { aboutCompanyAdapter } from '../adapter/about-adapter';



export default function AboutCompanyDeskTop() {
  const cubeRef = useRef<(HTMLDivElement | null)[]>([]);

   
  return (
    <div className='h-fit hidden md:grid md:place-items-center md:grid-cols-2  gap-5   px-4'>
        {companyHighlights.map((item, i) => (
          <CustomCard
            key={item.id}
            item={item}
            index={i}
            height='h-[360px]'
            totalCards={companyHighlights.length}
            getIcon={aboutCompanyAdapter.getIcon}
            getColor={aboutCompanyAdapter.getColor}
            getTitle={aboutCompanyAdapter.getTitle}
            getDesc={aboutCompanyAdapter.getDesc}
            getMetric={aboutCompanyAdapter.getMetric}
            getUnit={aboutCompanyAdapter.getUnit}
            innerRef={(el) => (cubeRef.current[i] = el)}
           
          />
        ))}
    </div>
  );
}