interface ParagraphProps {
className?:string;
content:React.ReactNode;
}

export const Paragraph:React.FC<ParagraphProps> = ({className, content}) => (<p className={`${className} tracking-widest md:max-w-3xl md:w-[80%] text-gray-600   leading-relaxed  text-lg`}>{content}</p>) 