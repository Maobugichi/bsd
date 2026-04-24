import { aboutCompany as companyHighlights } from '../../../constants/about-company';
import { aboutCompanyAdapter } from '@/adapter/about-adapter';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type Highlight = typeof companyHighlights[number];

const HighlightItem = ({ item, index }: { item: Highlight; index: number }) => {
    const metric = aboutCompanyAdapter.getMetric(item);
    const unit = aboutCompanyAdapter.getUnit(item);
    const title = aboutCompanyAdapter.getTitle(item);

    return (
        <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.4 }}
            className={cn(
                "group py-6 md:py-7 flex flex-col gap-1 cursor-pointer",
                index % 2 === 0
                    ? "border-r border-stone-300 pr-5 md:pr-8"
                    : "pl-5 md:pl-8"
            )}
        >
            <span className="font-montserrat text-3xl md:text-4xl xl:text-5xl font-bold text-[#1c1c1c] group-hover:text-amber-500 transition-colors duration-300 leading-none tabular-nums">
                {metric}
            </span>
            <span className="font-inter text-[10px] text-stone-400 tracking-widest uppercase mt-1 md:mt-2">
                {unit}
            </span>
            <span className="font-montserrat text-xs md:text-sm font-semibold text-[#1c1c1c]/50 group-hover:text-amber-600/70 transition-colors duration-300 leading-snug mt-0.5">
                {title}
            </span>
            <div className="h-0.5 w-0 bg-amber-500 group-hover:w-8 transition-all duration-300 rounded-full mt-1" />
        </motion.div>
    );
};

export const AboutHighlights = () => {
    return (
        <div className="w-full grid grid-cols-2 divide-y divide-x divide-stone-300">
            {companyHighlights.map((item, index) => (
                <HighlightItem key={item.id} item={item} index={index} />
            ))}
        </div>
    );
};