import  { useState } from 'react';
import { 
  Award,
  Users,
  Clock,
  Shield,
  Target,
  Zap,
  TrendingUp,
  ArrowRight
} from 'lucide-react';


type IconName = "Award" | "Users" | "Clock" | "Shield" | "Target" | "Zap";

interface HighlightItem {
  header: string;
  desc: string;
  icon: IconName;
  metric: string;
  unit: string;
  color: keyof typeof colorVariants;
}

const companyHighlights:HighlightItem[] = [
  {
    header: "15+ Years of Excellence",
    desc: "Over a decade and a half of delivering exceptional construction and design solutions across residential and commercial projects with unwavering commitment to quality.",
    icon: "Award",
    metric: "15+",
    unit: "Years",
    color: "emerald"
  },
  {
    header: "500+ Projects Completed",
    desc: "Successfully delivered hundreds of construction, renovation, and design projects with consistently high client satisfaction ratings and zero major incidents.",
    icon: "Target",
    metric: "500+",
    unit: "Projects",
    color: "blue"
  },
  {
    header: "Expert Team of 50+ Professionals",
    desc: "Our diverse team of architects, engineers, project managers, and skilled craftsmen brings decades of combined experience to every project.",
    icon: "Users",
    metric: "50+",
    unit: "Experts",
    color: "purple"
  },
  {
    header: "24/7 Project Support",
    desc: "Round-the-clock project monitoring and client support to ensure timelines are met and quality standards exceeded throughout the entire process.",
    icon: "Clock",
    metric: "24/7",
    unit: "Support",
    color: "orange"
  },
  {
    header: "Fully Licensed & Insured",
    desc: "Complete regulatory compliance with comprehensive insurance coverage for all our construction and installation services, ensuring peace of mind.",
    icon: "Shield",
    metric: "100%",
    unit: "Compliant",
    color: "red"
  },
  {
    header: "Fast-Track Delivery",
    desc: "Streamlined processes and efficient project management enable us to deliver high-quality results ahead of schedule without compromising quality.",
    icon: "Zap",
    metric: "30%",
    unit: "Faster",
    color: "amber"
  }
];

const icons = {
  Award,
  Users,
  Clock,
  Shield,
  Target,
  Zap
};



const colorVariants = {
  emerald: {
    bg: 'bg-emerald-50',
    iconBg: 'bg-emerald-100 group-hover:bg-emerald-600',
    iconColor: 'text-emerald-600 group-hover:text-white',
    accent: 'bg-gradient-to-r from-emerald-400 to-emerald-600',
    border: 'group-hover:border-emerald-200'
  },
  blue: {
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100 group-hover:bg-blue-600',
    iconColor: 'text-blue-600 group-hover:text-white',
    accent: 'bg-gradient-to-r from-blue-400 to-blue-600',
    border: 'group-hover:border-blue-200'
  },
  purple: {
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-100 group-hover:bg-purple-600',
    iconColor: 'text-purple-600 group-hover:text-white',
    accent: 'bg-gradient-to-r from-purple-400 to-purple-600',
    border: 'group-hover:border-purple-200'
  },
  orange: {
    bg: 'bg-orange-50',
    iconBg: 'bg-orange-100 group-hover:bg-orange-600',
    iconColor: 'text-orange-600 group-hover:text-white',
    accent: 'bg-gradient-to-r from-orange-400 to-orange-600',
    border: 'group-hover:border-orange-200'
  },
  red: {
    bg: 'bg-red-50',
    iconBg: 'bg-red-100 group-hover:bg-red-600',
    iconColor: 'text-red-600 group-hover:text-white',
    accent: 'bg-gradient-to-r from-red-400 to-red-600',
    border: 'group-hover:border-red-200'
  },
  amber: {
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100 group-hover:bg-amber-600',
    iconColor: 'text-amber-600 group-hover:text-white',
    accent: 'bg-gradient-to-r from-amber-400 to-amber-600',
    border: 'group-hover:border-amber-200'
  }
};

export const CompanyHighlights = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
   console.log(hoveredCard)
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
    
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-6">
          <TrendingUp className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Company Achievements</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Why Choose Our Expertise
        </h2>
        <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover the numbers and qualities that make us the trusted partner for your construction and design needs.
        </p>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companyHighlights.map((item, i:number) => {
          const Icon = icons[item.icon];
          const colors = colorVariants[item.color];
      
          return (
            <div
              key={i}
              className={`
                bg-white 
                border border-gray-100 ${colors.border}
                rounded-3xl 
                p-8
                transition-all duration-500 ease-out
                hover:shadow-2xl hover:shadow-gray-900/10 hover:-translate-y-2
                cursor-pointer group
                relative overflow-hidden
              `}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
            
              <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Metric Display */}
              <div className="relative mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0`}>
                    <Icon className={`w-8 h-8 ${colors.iconColor} transition-colors duration-300`} />
                  </div>
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

             
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {item.header}
                </h3>
                
                <p className="text-gray-600 text-md leading-relaxed mb-6">
                  {item.desc}
                </p>

               
                <div className="flex items-center justify-between">
                  <div className={`h-1 w-12 ${colors.accent} rounded-full opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all duration-300`} />
                  <div className={`
                    w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center
                    transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110
                    ${colors.iconBg.replace('group-hover:bg-', 'group-hover:bg-').replace('bg-', 'group-hover:border-')}
                  `}>
                    <ArrowRight className={`w-4 h-4 ${colors.iconColor.split(' ')[0]} group-hover:text-white transition-colors duration-300`} />
                  </div>
                </div>
              </div>

           
              <div className={`
                absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
                transform -skew-x-12 opacity-0 group-hover:opacity-100
                transition-all duration-700 group-hover:translate-x-full
              `} />
            </div>
          );
        })}
      </div>

      
      <div className="text-center mt-16">
        <a 
          href="mailto:info@bsdlight.com?subject=Project Inquiry&body=Hello, I would like to discuss a project."
          className="inline-flex items-center gap-3 bg-gray-900 text-white rounded-2xl px-8 py-4 transition-all duration-300 hover:bg-gray-800 hover:scale-105 cursor-pointer group"
        >
          <span className="font-semibold">Ready to start your project?</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};