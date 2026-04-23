import { highlight } from '../../../constants/highlight.constant';
import { highlightAdapter } from '@/adapter/highlightAdapter';
import { motion } from 'motion/react';

export const HighlightCard = () => {
    return (
        <div className="w-full flex flex-col divide-y divide-stone-200">
            {highlight.map((item, index) => {
                const Icon = highlightAdapter.getIcon(item);
                return (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.4 }}
                        className="group py-5 md:py-8 hover:pl-2 md:hover:pl-4 cursor-pointer transition-all duration-300"
                    >
                        {/* Mobile layout: stacked */}
                        <div className="flex flex-col gap-2 md:hidden">
                            {/* Top row: metric + icon */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="font-montserrat text-4xl font-bold text-[#1c1c1c] group-hover:text-amber-500 transition-colors duration-300 leading-none tabular-nums">
                                        {highlightAdapter.getMetric(item)}
                                    </span>
                                    <span className="block text-[10px] text-stone-400 font-inter tracking-widest uppercase mt-1">
                                        {highlightAdapter.getUnit(item)}
                                    </span>
                                </div>
                                <div className="shrink-0 w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                    <Icon size={16} className="text-amber-500" />
                                </div>
                            </div>

                            {/* Bottom: title + desc */}
                            <div>
                                <h3 className="font-montserrat text-xl font-bold text-[#1c1c1c] group-hover:text-amber-600 transition-colors duration-300 leading-tight">
                                    {highlightAdapter.getTitle(item)}
                                </h3>
                                <p className="font-inter text-xs text-stone-500 leading-relaxed mt-1">
                                    {highlightAdapter.getDesc(item)}
                                </p>
                            </div>
                        </div>

                        {/* Desktop layout: original horizontal row */}
                        <div className="hidden md:flex items-center gap-8">
                            <div className="shrink-0 w-36">
                                <span className="font-montserrat text-5xl font-bold text-[#1c1c1c] group-hover:text-amber-500 transition-colors duration-300 leading-none tabular-nums">
                                    {highlightAdapter.getMetric(item)}
                                </span>
                                <span className="block text-xs text-stone-400 font-inter tracking-widest uppercase mt-1">
                                    {highlightAdapter.getUnit(item)}
                                </span>
                            </div>

                            <div className="shrink-0 w-px h-14 bg-stone-200 group-hover:bg-amber-400 transition-colors duration-300" />

                            <div className="flex items-center gap-5 flex-1 min-w-0">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                    <Icon size={18} className="text-amber-500" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-montserrat text-5xl font-bold text-[#1c1c1c] group-hover:text-amber-600 transition-colors duration-300 leading-none">
                                        {highlightAdapter.getTitle(item)}
                                    </h3>
                                    <p className="font-inter text-sm text-stone-500 leading-relaxed mt-1 max-w-xl">
                                        {highlightAdapter.getDesc(item)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};