import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Hammer,
  Wrench,
  Computer,
  Globe,
  Building2,
  Construction,
} from 'lucide-react';

interface FeatureCardProps {
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 'construction',
      title: 'Building Construction & Maintenance',
      description: 'We deliver expert construction and maintenance services, ensuring strong, durable structures with ongoing support for reliability and efficiency.',
      icon: Hammer,
      gridClass: 'col-span-2 row-span-2',
    },
    {
      id: 'design',
      title: 'M&D Design & Installation',
      description: 'We provide tailored mechanical and design installations — from layout planning and 3D modeling to HVAC, electrical, and plumbing system integration. Whether it\'s a smart office or a custom industrial fit-out, we bring creative solutions and technical precision together to ensure smooth execution, lasting performance, and aesthetic harmony. Every design is engineered for efficiency, compliance, and real-world use.',
      icon: Wrench,
      gridClass: 'col-span-2 pb-10 row-span-3',
    },
    {
      id: 'it-telecom',
      title: 'IT & Telecom Services',
      description: 'We offer cloud, VoIP, cybersecurity, and network solutions to keep your business connected, protected, and productive.',
      icon: Computer,
      gridClass: 'col-span-2 row-span-2',
    },
    {
      id: 'import-export',
      title: 'Import, Export & Sales',
      description: 'From product sourcing to final delivery, we simplify and manage every stage of international trade with reliability and compliance. Our global network enables businesses to expand internationally with confidence, handling customs documentation, logistics coordination, and quality assurance. We specialize in construction materials, industrial equipment, and technology products across multiple markets.',
      icon: Globe,
      gridClass: 'col-span-2 pb-8 row-span-3',
    },
    {
      id: 'property',
      title: 'Property Development',
      description: 'From design to delivery, we develop high-quality residential and commercial real estate.',
      icon: Building2,
      gridClass: 'col-span-2 md:col-span-1 row-span-2',
    },
    {
      id: 'renovation',
      title: 'Refurbishment & Renovation',
      description: 'Upgrade residential or commercial spaces with modern, value-enhancing transformations.',
      icon: Construction,
      gridClass: 'col-span-2 md:col-span-1 row-span-2',
    },
  ];

  return (
    <div ref={containerRef} className="max-w-6xl text-left mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {services.map((service, index) => {
          const Icon = service.icon;   
          return (
            <motion.div
              key={service.id}
              initial={{ 
                opacity: 0, 
                y: 50,
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
              }}
              viewport={{ 
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className={`
                ${service.gridClass}
                bg-white shadow
                border border-gray-100 
                rounded-2xl 
                px-5 py-7
                transition-all duration-300 ease-out
                hover:border-gray-900 hover:shadow-xl hover:shadow-gray-900/10
                cursor-pointer group
                relative
                flex flex-col
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div 
                  className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-gray-900"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <Icon className="w-6 h-6 text-gray-700 transition-colors duration-300 group-hover:text-white" />
                </motion.div>
              </div>

              <div className="flex-1 flex flex-col">
                <motion.h3 
                  className="text-lg font-bold text-gray-900 mb-3 leading-tight"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.8 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-lg leading-wider text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.8 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                >
                  {service.description}
                </motion.p>
              </div>

              <motion.div 
                className="absolute bottom-4 right-4 w-2 h-2 bg-gray-200 rounded-full transition-colors duration-300 group-hover:bg-gray-900"
                whileHover={{ 
                  scale: 8,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};