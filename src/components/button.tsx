import { motion } from "motion/react";
import type { GeneralProps } from "../interface";

interface ButtonProp {
    variants?: { hover: { x: number; y: number } }
}

type Props = GeneralProps & ButtonProp

export const Button:React.FC<Props> = ({className, content , variants}) => {
    console.log(variants)
    return(
        <motion.button 
        variants={variants}
        className={`${className}`}
        >
            {content}
        </motion.button>
    )
}