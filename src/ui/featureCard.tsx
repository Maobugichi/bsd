import {
  Hammer,
  Wrench,
  Computer,
  Globe,
  Building2,
  Construction,
  ArrowRight,
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  gridClass: string;
  color: 'teal' | 'indigo' | 'rose' | 'amber' | 'emerald' | 'violet';
  metric: string;
  unit: string;
}

const services: Service[] = [
  {
    id: 'construction',
    title: 'Building Construction',
    description: 'We deliver expert construction and maintenance services, ensuring strong, durable structures with ongoing support for reliability and efficiency',
    icon: Hammer,
    gridClass: 'col-span-2 row-span-2',
    color: 'teal',
    metric: '500+',
    unit: 'Projects',
  },
  {
    id: 'design',
    title: 'M&D Design & Installation',
    description: 'We provide tailored mechanical and design installations — from layout planning and 3D modeling to HVAC, electrical, and plumbing system integration. Whether it\'s a smart office or a custom industrial fit-out, we bring creative solutions and technical precision together to ensure smooth execution, lasting performance, and aesthetic harmony. Every design is engineered for efficiency, compliance, and real-world use.',
    icon: Wrench,
    gridClass: 'col-span-2 row-span-3',
    color: 'indigo',
    metric: '250+',
    unit: 'Installations',
  },
  {
    id: 'it-telecom',
    title: 'IT & Telecom Services',
    description: 'We offer cloud, VoIP, cybersecurity, and network solutions to keep your business connected, protected, and productive.',
    icon: Computer,
    gridClass: 'col-span-2 row-span-2',
    color: 'rose',
    metric: '100+',
    unit: 'Clients',
  },
  {
    id: 'import-export',
    title: 'Import & Export',
    description: 'From product sourcing to final delivery, we simplify and manage every stage of international trade with reliability and compliance. Our global network enables businesses to expand internationally with confidence, handling customs documentation, logistics coordination, and quality assurance. We specialize in construction materials, industrial equipment, and technology products across multiple markets.',
    icon: Globe,
    gridClass: 'col-span-2 row-span-3',
    color: 'amber',
    metric: '50+',
    unit: 'Countries',
  },
  {
    id: 'property',
    title: 'Property Development',
    description: 'High-quality residential and commercial real estate from design to delivery.',
    icon: Building2,
    gridClass: 'col-span-2 md:col-span-1 row-span-2',
    color: 'emerald',
    metric: '30+',
    unit: 'Properties',
  },
  {
    id: 'renovation',
    title: 'Refurbishment',
    description: 'Modern, value-enhancing transformations for residential and commercial spaces.',
    icon: Construction,
    gridClass: 'col-span-2 md:col-span-1 row-span-2',
    color: 'violet',
    metric: '150+',
    unit: 'Renovations',
  },
];

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
  

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          const colors = colorVariants[service.color];

          return (
            <div
              key={service.id}
              className={`
                ${service.gridClass}
                bg-white 
                border border-gray-100 ${colors.border}
                rounded-2xl 
                p-6
                transition-all duration-500 ease-out
                hover:shadow-2xl hover:shadow-gray-900/10 hover:-translate-y-1
                cursor-pointer group
                relative overflow-hidden
                flex flex-col
              `}
              
            >
             
              <div
                className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

            
              <div className="relative mb-4">
                <div className="flex items-start justify-between">
                  <div
                    className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center transition-all duration-300 shrink-0`}
                  >
                    <Icon
                      className={`w-7 h-7 ${colors.iconColor} transition-colors duration-300`}
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900 leading-none">
                      {service.metric}
                    </div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {service.unit}
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="relative flex-1 flex flex-col">
                <h3 className="text-xl text-left font-bold text-gray-900 mb-2 leading-tight">
                  {service.title}
                </h3>

                <p className="text-lg tracking-wide text-left text-gray-600 leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

               
                <div className="flex items-center justify-between mt-auto">
                  <div
                    className={`h-1 w-10 ${colors.accent} rounded-full opacity-60 group-hover:opacity-100 group-hover:w-14 transition-all duration-300`}
                  />
                  <div
                    className={`
                    w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center
                    transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110
                    ${colors.iconBg}
                  `}
                  >
                    <ArrowRight
                      className={`w-3.5 h-3.5 ${colors.iconColor} transition-colors duration-300`}
                    />
                  </div>
                </div>
              </div>

             
              <div
                className={`
                absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
                transform -skew-x-12 opacity-0 group-hover:opacity-100
                transition-all duration-700 group-hover:translate-x-full
              `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}