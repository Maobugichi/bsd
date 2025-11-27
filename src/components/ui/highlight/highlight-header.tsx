import { motion } from "motion/react";
import type { Highlight } from "@/components/sections/about/types";

interface HighlightHeaderProps {
  item: Highlight;
  colors:any
  Icon:any
}

export const HighlightHeader = ({ colors, item , Icon}:HighlightHeaderProps) => {
    return(
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
    )
}