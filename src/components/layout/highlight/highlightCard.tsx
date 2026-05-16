import { highlight } from '../../../constants/highlight.constant';
import { highlightAdapter } from '@/adapter/highlightAdapter';
import { motion } from 'motion/react';


interface HighlightItem {
    metric: string;
    unit: string;
    title: string;
    desc: string;
    Icon: React.ElementType;
}



const Metric = ({ metric, unit }: Pick<HighlightItem, "metric" | "unit">) => (
    <div className="shrink-0">
        <span className="font-montserrat text-4xl md:text-5xl font-bold text-[#1c1c1c] group-hover:text-amber-500 transition-colors duration-300 leading-none tabular-nums">
            {metric}
        </span>
        <span className="block text-[10px] md:text-xs text-stone-400 font-inter tracking-widest uppercase mt-1">
            {unit}
        </span>
    </div>
);

const IconBadge = ({ Icon }: { Icon: React.ElementType }) => (
    <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
        <Icon size={18} className="text-amber-500" />
    </div>
);

const Content = ({ title, desc }: Pick<HighlightItem, "title" | "desc">) => (
    <div className="min-w-0">
        <h3 className="font-montserrat text-xl md:text-5xl font-bold text-[#1c1c1c] group-hover:text-amber-600 transition-colors duration-300 leading-tight md:leading-none">
            {title}
        </h3>
        <p className="font-roboto text-xs md:text-base text-stone-500 leading-relaxed mt-1 md:max-w-xl">
            {desc}
        </p>
    </div>
);



export const HighlightCard = () => (
    <div className="w-full flex flex-col divide-y divide-stone-200">
        {highlight.map((item, index) => {
            const Icon    = highlightAdapter.getIcon(item);
            const metric  = highlightAdapter.getMetric(item);
            const unit    = highlightAdapter.getUnit(item);
            const title   = highlightAdapter.getTitle(item);
            const desc    = highlightAdapter.getDesc(item);

            return (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="group py-5 md:py-8 cursor-pointer transition-all duration-300 hover:translate-x-1 md:hover:translate-x-2"
                >
                   
                    <div className="flex flex-col gap-3 md:hidden">
                        <div className="flex items-center justify-between">
                            <Metric metric={metric} unit={unit} />
                            <IconBadge Icon={Icon} />
                        </div>
                        <Content title={title} desc={desc} />
                    </div>

                  
                    <div className="hidden md:flex items-center gap-8">
                        <div className="shrink-0 w-36">
                            <Metric metric={metric} unit={unit} />
                        </div>
                        <div className="shrink-0 w-px h-14 bg-stone-200 group-hover:bg-amber-400 transition-colors duration-300" />
                        <div className="flex items-center gap-5 flex-1 min-w-0">
                            <IconBadge Icon={Icon} />
                            <Content title={title} desc={desc} />
                        </div>
                    </div>
                </motion.div>
            );
        })}
    </div>
);