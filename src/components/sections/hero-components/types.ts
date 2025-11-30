import type { RefObject } from "react";

export interface HeroRefs {
     refs: {
        heroRef: RefObject<HTMLElement>;
        featureRef: RefObject<HTMLButtonElement>;
     }
}