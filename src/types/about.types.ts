import { colorVariants } from "@/constants/color-variants";
import type { FC } from "react";


export type IconKey = 'settings' | 'building2' | 'userCheck' | 'circuitBoard';
export type ColorKey = keyof typeof colorVariants;

export interface HighlightAdapter<T> {
  getIcon: (item: T) => FC<React.SVGProps<SVGSVGElement>>;
  getColor: (item: T) => keyof typeof colorVariants;
  getTitle: (item: T) => string;
  getDesc: (item: T) => string;
  getMetric: (item: T) => string;
  getUnit: (item: T) => string;
  getGrid?: (item: T) => string;
}



export type IconMap =  Record<IconKey, React.FC<React.SVGProps<SVGSVGElement>>>