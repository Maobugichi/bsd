import {  useRef } from 'react';
import { services } from './service-object';
import { CustomCard } from '../ui/customcard';
import { serviceAdapter } from './serrvice-adapter';
import { CustomConatiner } from '../ui/customContainer';


export default function FeatureCard() {
  const cubeRef = useRef<(HTMLDivElement | null)[]>([]);
  return (
     <CustomConatiner
        items={services}
        id="company-cards"
        cardsRef={cubeRef}
        className="md:grid 
        md:grid-cols-3  
        gap-5 "
        renderCard={(item,i,ref) => (
          <CustomCard
            key={item.id}
            item={item}
            index={i}
            totalCards={services.length}
            getIcon={serviceAdapter.getIcon}
            getColor={serviceAdapter.getColor}
            getTitle={serviceAdapter.getTitle}
            getDesc={serviceAdapter.getDesc}
            getMetric={serviceAdapter.getMetric}
            getUnit={serviceAdapter.getUnit}

            gridClass={item.gridClass}
            height='h-[440px] md:h-[400px]'
            innerRef={ref}
        />
        )}
       />
      
   
  );
}