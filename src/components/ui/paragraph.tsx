interface ParagraphProps {
className?:string;
content:React.ReactNode;
}

export const Paragraph:React.FC<ParagraphProps> = ({className, content}) => (<p className={`${className} text-lg md:text-xl w-full md:leading-8 leading-7 tracking-wide font-inter `}>{content}</p>) 