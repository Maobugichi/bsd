import { motion } from "motion/react"
import { cardVariants } from "@/components/sections/about/constants/card-variants"
import type { HighlightAdapter } from "@/components/sections/about/types"
import { icons } from "@/constants/icons"
import { colorVariants } from "@/components/sections/about/constants/color-variants"
import { HighlightHeader } from "./highlight-header"
import { HighlightContent } from "./highlight-content"

interface HighlightCardProps<T> {
  data: HighlightAdapter<T>;
}

export const HightlightCard = <T,>({ data }: HighlightCardProps<T>) => {
     const { item, index } = data;

  const Icon = icons[data.getIcon(item)];
  const colors = colorVariants[data.getColor(item)];
    return(
         <motion.div
              key={index}
              custom={index}
            
            
              className={`
                bg-white border border-gray-100 ${colors.border}
                rounded-3xl p-8
                cursor-pointer group relative overflow-hidden w-full
                transition-all duration-500 ease-out
              `}
            >
            
              <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <HighlightHeader 
               colors={colors}
               Icon={Icon}
               item={item}
              />

              <HighlightContent item={item} colors={colors}/>
              <div className={`
                absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
                transform -skew-x-12 opacity-0 group-hover:opacity-100
                transition-all duration-700 group-hover:translate-x-full
              `} />
            </motion.div>
    )
}