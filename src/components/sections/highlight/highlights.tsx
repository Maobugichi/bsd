import { 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Card } from './highlightCard';
import { Paragraph } from '@/components/ui/paragraph';






export const CompanyHighlights = () => {
  
  return (
    <div className="w-[85%]  mx-auto  py-16">
    
      <div className="  mb-16">
        <div className="inline-flex  items-center gap-2  bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm font-semibold  shadow-lg relative overflow-hidden group  bg-gray-100 rounded-full px-4 py-1  mb-6">

          <TrendingUp className="w-4 h-4 text-green-500" />
          <span className="">
            
            <span className="relative flex items-center gap-2">
               
               Company Achievements
            </span>
            </span>
        </div>
        <h2 className=" text-3xl text-left md:text-4xl font-bold text-gray-900 mb-6">
          Why Choose Our Expertise?
        </h2>
        <Paragraph 
          content="Discover the numbers and qualities that make us the trusted partner for your construction and design needs."/>
        
      </div>
      <Card/>

      
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