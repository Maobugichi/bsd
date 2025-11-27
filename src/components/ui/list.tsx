import { motion } from "motion/react";

interface ListProps {
    className:string;
    content:string;
    href:string
}

export const List:React.FC<ListProps> = ({className , content, href}) => (<motion.li className={`${className} cursor-pointer`}><a href={href}>{content}</a></motion.li>)