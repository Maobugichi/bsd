import { motion } from "motion/react";
import { Button } from "./button";

interface StackProps {
    className:string;
    buttons:{className:string,content:string, variants:{ hover: { x:number, y:number}}}[]
}

export const StackBtn:React.FC<StackProps> = ({className,buttons}) => {
    
    return(
          <motion.div 
            className={`${className}`}
            whileHover="hover"
            >
                {buttons.map((buttonItem:{className:string, content:string, variants: { hover: { x: number; y: number } }}, i:number ) => (<Button key={i} content={buttonItem.content} className={buttonItem.className} variants={buttonItem.variants}/>))}
          </motion.div>
    )
}