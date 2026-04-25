import { serviceAdapter } from "@/adapter/serrvice-adapter";
import { features } from '@/constants/feature.constant';
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface FeatureRowProps {
    item: typeof features[number];
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}

export const FeatureRow = ({ item, index, isOpen, onToggle }: FeatureRowProps) => {
    const title  = serviceAdapter.getTitle(item);
    const desc   = serviceAdapter.getDesc(item);
    const metric = serviceAdapter.getMetric(item);
    const unit   = serviceAdapter.getUnit(item);

    return (
        <li>
           
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full text-left py-8 flex items-start gap-6 group"
            >
                
                <span className="font-montserrat text-[13px] font-bold text-white/20 pt-2 w-8 shrink-0 group-hover:text-amber-500/60 transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                </span>

               
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="font-montserrat text-2xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300 leading-tight">
                            {title}
                        </h3>
                        <div className="shrink-0 text-right hidden md:block">
                            <span className="font-montserrat text-2xl font-bold text-amber-400">
                                {metric}
                            </span>
                            <span className="block text-xs text-white/40 font-inter tracking-widest uppercase">
                                {unit}
                            </span>
                        </div>
                    </div>
                </div>

               
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-500/40 transition-colors duration-300 mt-1"
                >
                    <Plus size={14} className="text-white/40 group-hover:text-amber-400 transition-colors duration-300" />
                </motion.div>
            </button>

            
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pl-14 pb-8 flex flex-col gap-4">
                            <p className="text-sm md:text-base font-light font-roboto text-white/50 leading-relaxed max-w-2xl">
                                {desc}
                            </p>
                         
                            <div className="md:hidden">
                                <span className="font-montserrat text-xl font-bold text-amber-400">
                                    {metric}
                                </span>
                                <span className="ml-2 text-xs text-white/40 font-inter tracking-widest uppercase">
                                    {unit}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
};