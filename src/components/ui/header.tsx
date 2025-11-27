import React from "react";

interface HeaderProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children:React.ReactNode;
    className?:string
}

export const Header:React.FC<HeaderProps> = ({level = 1, children ,  className}) => {
    const tag = `h${level}` as keyof JSX.IntrinsicElements;
    return React.createElement(tag as string ,{className}, children)
}