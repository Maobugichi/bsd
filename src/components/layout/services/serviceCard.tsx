import { useState } from 'react';
import { motion } from 'motion/react';
import { features } from '@/constants/feature.constant';
import { ServiceRow } from './serviceRow';

type FeatureId = typeof features[number]['id'];


export const ServiceCard = () => {
    const [activeId, setActiveId] = useState<FeatureId | null>(null);

    const handleToggle = (id: FeatureId) =>
        setActiveId((prev) => (prev === id ? null : id));

    return (
        <div className="w-full">
            <ul className="flex flex-col divide-y divide-white/10">
                {features.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                      
                        style={{ display: 'contents' }}
                    >
                        <ServiceRow
                            item={item}
                            index={i}
                            isOpen={activeId === item.id}
                            onToggle={() => handleToggle(item.id)}
                        />
                    </motion.div>
                ))}
            </ul>
        </div>
    );
};