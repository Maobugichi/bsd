import { motion } from "motion/react";
import { forwardRef, type ReactNode } from "react";

interface ButtonProps {
    className?: string;
    onClick?: () => void;
    children?: ReactNode;
    variants?: { hover: { x: number; y: number } };
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, onClick, children, variants }, ref) => {
        return (
            <motion.button
                ref={ref}
                variants={variants}
                className={className}
                onClick={onClick}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";