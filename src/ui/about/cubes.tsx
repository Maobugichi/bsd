import { motion } from 'framer-motion';
import { Settings, Building2, UserCheck, CircuitBoard } from 'lucide-react';

type IconKey = 'settings' | 'building2' | 'userCheck' | 'circuitBoard';

interface Highlight {
  header: string;
  desc: string;
  icon: IconKey;
  color: 'teal' | 'indigo' | 'rose' | 'amber';
  metric: string;
  unit: string;
}

const companyHighlights: Highlight[] = [
  {
    header: 'Premier Engineering Solutions',
    desc: 'Leading provider of tailored services across building construction and electro-mechanical sectors.',
    icon: 'settings',
    color: 'teal',
    metric: '15+',
    unit: 'Years'
  },
  {
    header: 'MEP Contracting Experts',
    desc: 'Top-tier contractor with experienced staff delivering landmark projects across Nigeria.',
    icon: 'building2',
    color: 'indigo',
    metric: '200+',
    unit: 'Projects'
  },
  {
    header: 'Client-Centric Services',
    desc: 'Customized solutions aligned with quality standards, delivered on-time and on-budget.',
    icon: 'userCheck',
    color: 'rose',
    metric: '98%',
    unit: 'Satisfaction'
  },
  {
    header: 'Comprehensive MEP Solutions',
    desc: 'Specializing in design, installation, and maintenance of Electro-Mechanical systems.',
    icon: 'circuitBoard',
    color: 'amber',
    metric: '50+',
    unit: 'Specialists'
  },
];

const icons: Record<IconKey, React.FC<React.SVGProps<SVGSVGElement>>> = {
  settings: Settings,
  building2: Building2,
  userCheck: UserCheck,
  circuitBoard: CircuitBoard,
};

const colorVariants = {
  teal: {
    bg: 'bg-teal-50/50',
    border: 'group-hover:border-teal-500',
    iconBg: 'bg-teal-100 group-hover:bg-teal-500',
    iconColor: 'text-teal-600 group-hover:text-white',
    accent: 'bg-teal-500'
  },
  indigo: {
    bg: 'bg-indigo-50/50',
    border: 'group-hover:border-indigo-500',
    iconBg: 'bg-indigo-100 group-hover:bg-indigo-500',
    iconColor: 'text-indigo-600 group-hover:text-white',
    accent: 'bg-indigo-500'
  },
  rose: {
    bg: 'bg-rose-50/50',
    border: 'group-hover:border-rose-500',
    iconBg: 'bg-rose-100 group-hover:bg-rose-500',
    iconColor: 'text-rose-600 group-hover:text-white',
    accent: 'bg-rose-500'
  },
  amber: {
    bg: 'bg-amber-50/50',
    border: 'group-hover:border-amber-500',
    iconBg: 'bg-amber-100 group-hover:bg-amber-500',
    iconColor: 'text-amber-600 group-hover:text-white',
    accent: 'bg-amber-500'
  }
};


const cardVariants: Record<string, any> = {
  hidden: { opacity: 0, y: 100, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], 
    },
  }),
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: '0px 12px 25px rgba(0,0,0,0.1)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export default function CompanyHighlights() {
  return (
    <div className="w-full mx-auto px-4 py-16">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {companyHighlights.map((item, i) => {
          const Icon = icons[item.icon];
          const colors = colorVariants[item.color];

          return (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              whileHover="hover"
              className={`
                bg-white border border-gray-100 ${colors.border}
                rounded-3xl p-8
                cursor-pointer group relative overflow-hidden w-full
                transition-all duration-500 ease-out
              `}
            >
              {/* Background overlay */}
              <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Header / Icon */}
              <div className="relative mb-6">
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0`}
                    whileHover={{ rotate: 10, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                  >
                    <Icon className={`w-8 h-8 ${colors.iconColor} transition-colors duration-300`} />
                  </motion.div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900 leading-none">
                      {item.metric}
                    </div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {item.unit}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.header}
                </h3>
                <p className="text-gray-600 tracking-wide text-lg leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <div className={`h-1 w-12 ${colors.accent} rounded-full opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all duration-300`} />
                </div>
              </div>

              {/* Shine sweep effect */}
              <div className={`
                absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
                transform -skew-x-12 opacity-0 group-hover:opacity-100
                transition-all duration-700 group-hover:translate-x-full
              `} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
