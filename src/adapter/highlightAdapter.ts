import { HighlightItem } from "@/types/highlight.types";

export const highlightAdapter = {
  getIcon: (item: HighlightItem) => item.icon,
  getColor: (item: HighlightItem) => item.color,  
  getTitle: (item: HighlightItem) => item.header,
  getDesc: (item: HighlightItem) => item.desc,
  getMetric: (item: HighlightItem) => item.metric,
  getUnit: (item: HighlightItem) => item.unit,
  //getGrid: (item: HighlightItem) => item.gridClass,
};