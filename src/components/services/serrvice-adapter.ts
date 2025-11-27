import type { ServiceType } from "./types";

export const serviceAdapter = {
  getIcon: (item: ServiceType) => item.icon,
  getColor: (item: ServiceType) => item.color,  
  getTitle: (item: ServiceType) => item.title,
  getDesc: (item: ServiceType) => item.description,
  getMetric: (item: ServiceType) => item.metric,
  getUnit: (item: ServiceType) => item.unit,
  getGrid: (item: ServiceType) => item.gridClass,
};