import type { FeatureType } from "@/types/feature.types";

export const serviceAdapter = {
  getIcon: (item: FeatureType) => item.icon,
  getColor: (item:  FeatureType) => item.color,  
  getTitle: (item: FeatureType) => item.title,
  getDesc: (item:  FeatureType) => item.description,
  getMetric: (item:  FeatureType) => item.metric,
  getUnit: (item:  FeatureType) => item.unit,
  getGrid: (item: FeatureType) => item.gridClass,
};