import { GeneralProps } from "../interface"

export const Paragraph:React.FC<GeneralProps> = ({className, content}) => (<p className={`${className}`}>{content}</p>) 