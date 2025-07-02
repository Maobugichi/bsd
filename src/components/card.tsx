interface CardProps {
    className:string;
    children:React.ReactNode
}

export const Card:React.FC<CardProps> = ({className,children}) => {  
    return (
    <div className={`${className} p-2 flex flex-col    gap-3`}>
        {children}
    </div>
    )
}
