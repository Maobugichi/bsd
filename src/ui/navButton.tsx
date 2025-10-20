import { Button } from "../components/button"

export const NavButton = () => {
    const details = [
        {
            content:'Contact Us',
            className:'text-black h-full text-lg '
        },
        
    ]

    return(
        <div className="flex h-full items-center justify-between">
            {details.map((detail:{content:string, className:string}) => <Button className={`${detail.className} `} content={detail.content}/>)}
        </div>
    )
}