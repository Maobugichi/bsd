import { aboutCompany } from "../constants/about-company";
import type { HighlightAdapter } from "../types";
import { icons } from "../icons.map";

export const aboutCompanyAdapter: HighlightAdapter<typeof aboutCompany[number]> = {
  getIcon: (item) => icons[item.icon],
  getColor: (item) => item.color,
  getTitle: (item) => item.header,
  getDesc: (item) => item.desc,
  getMetric: (item) => item.metric,
  getUnit: (item) => item.unit,
};
