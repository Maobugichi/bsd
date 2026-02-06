interface ParagraphProps {
className?:string;
content:React.ReactNode;
}

export const Paragraph:React.FC<ParagraphProps> = ({className, content}) => (<p className={`${className}`}>{content}</p>) 