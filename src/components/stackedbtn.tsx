import { motion } from "motion/react";
import { Button } from "./button";
import { forwardRef } from "react";

interface StackProps {
    className:string;
    buttons:{className:string,content:string, variants:{ hover: { x:number, y:number}}}[];
}

export const StackBtn= forwardRef<HTMLElement, StackProps>(({className,buttons},ref) => {
    return(
          <motion.div 
            className={`${className}`}
            whileHover="hover"
            >
                {buttons.map((buttonItem:{className:string, content:string, variants: { hover: { x: number; y: number } }}, i:number ) => (<Button ref={ref} key={i} content={buttonItem.content} className={buttonItem.className} variants={buttonItem.variants}/>))}
          </motion.div>
    )
})