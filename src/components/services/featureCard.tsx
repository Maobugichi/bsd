import { motion } from 'framer-motion';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { services } from './service-object';
import { useCardStackAnimation } from '@/hook';
import { StackCard } from './stackcard';
import { serviceAdapter } from './serrvice-adapter';
gsap.registerPlugin(ScrollTrigger)


const colorVariants = {
  teal: {
    bg: 'bg-cyan-50/50',
    border: 'group-hover:border-cyan-500',
    iconBg: 'bg-cyan-100 group-hover:bg-cyan-500',
    iconColor: 'text-cyan-600 group-hover:text-white',
    accent: 'bg-cyan-500',
  },
  indigo: {
    bg: 'bg-blue-50/50',
    border: 'group-hover:border-blue-500',
    iconBg: 'bg-blue-100 group-hover:bg-blue-500',
    iconColor: 'text-blue-600 group-hover:text-white',
    accent: 'bg-blue-500',
  },
  rose: {
    bg: 'bg-pink-50/50',
    border: 'group-hover:border-pink-500',
    iconBg: 'bg-pink-100 group-hover:bg-pink-500',
    iconColor: 'text-pink-600 group-hover:text-white',
    accent: 'bg-pink-500',
  },
  amber: {
    bg: 'bg-orange-50/50',
    border: 'group-hover:border-orange-500',
    iconBg: 'bg-orange-100 group-hover:bg-orange-500',
    iconColor: 'text-orange-600 group-hover:text-white',
    accent: 'bg-orange-500',
  },
  emerald: {
    bg: 'bg-lime-50/50',
    border: 'group-hover:border-lime-500',
    iconBg: 'bg-lime-100 group-hover:bg-lime-500',
    iconColor: 'text-lime-600 group-hover:text-white',
    accent: 'bg-lime-500',
  },
  violet: {
    bg: 'bg-purple-50/50',
    border: 'group-hover:border-purple-500',
    iconBg: 'bg-purple-100 group-hover:bg-purple-500',
    iconColor: 'text-purple-600 group-hover:text-white',
    accent: 'bg-purple-500',
  },
};


export default function FeatureCard() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useCardStackAnimation({ cardsRef });
  return (
    <div className="max-w-6xl  grid gap-5 mx-auto p-6">
      
        {services.map((item, i) => {
           return(
           <StackCard
            key={item.id}
            item={item}
            index={i}
            getIcon={serviceAdapter.getIcon}
            getColor={serviceAdapter.getColor}
            getTitle={serviceAdapter.getTitle}
            getDesc={serviceAdapter.getDesc}
            getMetric={serviceAdapter.getMetric}
            getUnit={serviceAdapter.getUnit}
            gridClass={item.gridClass}
            innerRef={(el) => (cardsRef.current[i] = el)}
        />)
        })}
      
    </div>
  );
}