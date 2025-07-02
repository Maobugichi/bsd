import aboutImg from "../../assets/bsd-about.jpg"

export const AboutImage = () => {
    return(
        <div className="w-full md:w-[40%] h-[60%]">
            <img className="rounded-xl w-full object-fill h-full" src={aboutImg} alt="about image"/>
        </div>
        
    )
}