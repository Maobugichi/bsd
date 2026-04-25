import { motion } from "motion/react";
import { Button } from "../button";
import { forwardRef } from "react";

interface StackProps {
    className:string;
    buttons:{className:string,content:string, variants:{ hover: { x:number, y:number}}}[];
}

export const StackBtn = forwardRef<HTMLButtonElement, StackProps>(
  ({ className, buttons }, ref) => {
    return (
      <motion.div className={className} whileHover="hover">
        {buttons.map((buttonItem, i) => (
          <Button
            ref={ref}
            key={i}
           
            className={buttonItem.className}
            variants={buttonItem.variants}
          >
            {buttonItem.content}
          </Button>
        ))}
      </motion.div>
    );
  }
);