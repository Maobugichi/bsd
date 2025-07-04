import { motion } from "motion/react";
import type { GeneralProps } from "../interface";
import { forwardRef } from "react";
interface ButtonProp {
    variants?: { hover: { x: number; y: number } }
}

type Props = GeneralProps & ButtonProp

export const Button = forwardRef<HTMLElement, Props>(({className, content , variants},ref) => {
    const scrollToSection = (ref:any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

    return(
        <motion.button 
        variants={variants}
        className={`${className}`}
        onClick={() => {
            scrollToSection(ref)
        }}
        >
            {content}
        </motion.button>
    )
})