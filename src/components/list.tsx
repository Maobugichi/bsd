import { motion } from "motion/react";

interface ListProps {
    className:string;
    content:string
}

export const List:React.FC<ListProps> = ({className , content}) => (<motion.li className={`${className}`}>{content}</motion.li>)