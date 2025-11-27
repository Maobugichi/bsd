import { motion } from 'framer-motion';
import { Settings, Building2, UserCheck, CircuitBoard } from 'lucide-react';
import type {   IconMap } from './types';
import { aboutCompany as companyHighlights } from './constants/about-company';

import { useCardStackAnimation } from '@/hook';
import { useRef } from 'react';
import { StackCard } from '@/components/services/stackcard';
import { aboutCompanyAdapter } from './adapter/about-adapter';

const icons:IconMap = {
  settings: Settings,
  building2: Building2,
  userCheck: UserCheck,
  circuitBoard: CircuitBoard,
};



export default function CompanyHighlights() {
  const cubeRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useCardStackAnimation({ cardsRef:cubeRef });


  return (
    <div className="w-full mx-auto px-4 py-16">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
       {companyHighlights.map((item, i) => (
          <StackCard
            key={item.id}
            item={item}
            index={i}
            getIcon={aboutCompanyAdapter.getIcon}
            getColor={aboutCompanyAdapter.getColor}
            getTitle={aboutCompanyAdapter.getTitle}
            getDesc={aboutCompanyAdapter.getDesc}
            getMetric={aboutCompanyAdapter.getMetric}
            getUnit={aboutCompanyAdapter.getUnit}
             innerRef={(el) => (cubeRef.current[i] = el)}
          />
        ))}
      </motion.div>
    </div>
  );
}
