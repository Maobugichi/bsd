import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { features } from '@/constants/feature.constant';
import { serviceAdapter } from '@/adapter/serrvice-adapter';

export const FeatureCard = () => {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <div className="w-full">
            <ul className="flex flex-col divide-y divide-white/10">
                {features.map((item, i) => {
                    const isOpen = activeId === item.id;

                    return (
                        <motion.li
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                        >
                            <button
                                onClick={() => setActiveId(isOpen ? null : item.id)}
                                className="w-full text-left py-8 flex items-start gap-6 group"
                            >
                               
                                <span className="font-montserrat text-[13px] font-bold text-white/20 pt-2 w-8 shrink-0 group-hover:text-amber-500/60 transition-colors duration-300">
                                    {String(i + 1).padStart(2, '0')}
                                </span>

                               
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="font-montserrat text-2xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300 leading-tight">
                                            {serviceAdapter.getTitle(item)}
                                        </h3>

                                       
                                        <div className="shrink-0 text-right hidden md:block">
                                            <span className="font-montserrat text-2xl font-bold text-amber-400">
                                                {serviceAdapter.getMetric(item)}
                                            </span>
                                            <span className="block text-xs text-white/40 font-inter tracking-widest uppercase">
                                                {serviceAdapter.getUnit(item)}
                                            </span>
                                        </div>
                                    </div>

                                    
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <div className="flex items-start gap-4 mt-5 pb-2">
                                                 
                                                    <p className=" text-sm md:text-base font-light font-roboto text-white/50 leading-relaxed max-w-2xl">
                                                        {serviceAdapter.getDesc(item)}
                                                    </p>
                                                </div>

                                              
                                                <div className="mt-4 md:hidden">
                                                    <span className="font-montserrat text-xl font-bold text-amber-400">
                                                        {serviceAdapter.getMetric(item)}
                                                    </span>
                                                    <span className="ml-2 text-xs text-white/40 font-inter tracking-widest uppercase">
                                                        {serviceAdapter.getUnit(item)}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                              
                                <motion.div
                                    animate={{ rotate: isOpen ? 45 : 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-500/40 transition-colors duration-300 mt-1"
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/40 group-hover:text-amber-400 transition-colors duration-300">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </motion.div>
                            </button>
                        </motion.li>
                    );
                })}
            </ul>
        </div>
    );
}