import { CustomCard } from '../../ui/customcard';
import { companyHighlight } from './constant';
import { highlightAdapter } from './adapter/highlightAdapter';
import { useRef } from 'react';
import { CustomConatiner } from '@/components/ui/customContainer';



export const Card = () => {
     const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    return(
         <CustomConatiner
            items={companyHighlight}
            cardsRef={cardsRef}
            id="highlight-cards"
            className="md:grid md:place-items-center grid-cols-2 [@media(min-width:1020px)_and_(max-width:1024px)]:grid-cols-2 lg:grid-cols-3  gap-5"
            renderCard={(item, index, ref) => (
            <CustomCard
             key={item.id}
             item={item}
             index={index}
             height='h-[400px]'
             totalCards={companyHighlight.length}
             getIcon={highlightAdapter.getIcon}
             getColor={highlightAdapter.getColor}
             getTitle={highlightAdapter.getTitle}
             getDesc={highlightAdapter.getDesc}
             getMetric={highlightAdapter.getMetric}
             getUnit={highlightAdapter.getUnit}
             innerRef={ref}
          />
            )}
        />
    )
}