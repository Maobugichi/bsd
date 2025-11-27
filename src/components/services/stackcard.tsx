import { motion } from "framer-motion";
import type { FC } from "react";
import { colorVariants } from "../sections/about/constants/color-variants";

interface StackCardProps<T> {
  item: T;
  index: number;
  getIcon: (item: T) => FC<React.SVGProps<SVGSVGElement>>;
  getColor: (item: T) => keyof typeof colorVariants;  // ✅ Expect color key
  getTitle: (item: T) => string;
  getDesc: (item: T) => string;
  getMetric?: (item: T) => string;
  getUnit?: (item: T) => string;
  gridClass?: string;
  innerRef?: (el: HTMLDivElement | null) => void;
}

export function StackCard<T>({
   item,
  index,
  getIcon,
  getColor,
  getTitle,
  getDesc,
  getMetric,
  getUnit,
  gridClass,
  innerRef
}: StackCardProps<T>) {
   const Icon = getIcon(item);
  const colors = colorVariants[getColor(item)];
  return (
    <div
      ref={innerRef}
      className={`h-fit flex items-center justify-center sticky top-[60px] pt-[60px]`}
    >
      <div
        className={`
          ${gridClass}
          bg-white border-2 border-gray-200 ${colors.border}
          rounded-3xl p-8 w-full max-w-2xl
          group relative overflow-hidden flex flex-col
          transition-all duration-300
          cursor-pointer hover:shadow-2xl
        `}
        style={{ transformOrigin: "top center" }}
      >
        {/* Background hover tint */}
        <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Header */}
        <div className="relative mb-4">
          <div className="flex items-start justify-between">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center transition-all duration-300 shrink-0`}
            >
              <Icon className={`w-7 h-7 ${colors.iconColor} transition-colors duration-300`} />
            </motion.div>

            {(getMetric || getUnit) && (
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900 leading-none">
                  {getMetric?.(item)}
                </div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {getUnit?.(item)}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative flex-1 flex flex-col">
          <h3 className="text-xl text-left font-bold text-gray-900 mb-2 leading-tight">
            {getTitle(item)}
          </h3>

          <p className="text-lg tracking-wide text-left text-gray-600 leading-relaxed mb-4 flex-1">
            {getDesc(item)}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div
              className={`h-1 w-10 ${colors.accent} rounded-full opacity-60 group-hover:opacity-100 group-hover:w-14 transition-all duration-300`}
            />
          </div>
        </div>

        {/* Shimmer overlay */}
        <div className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
          transform -skew-x-12 opacity-0 group-hover:opacity-100
          transition-all duration-700 group-hover:translate-x-full
        `} />
      </div>
    </div>
  );
}
