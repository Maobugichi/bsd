import aboutImg from "../../assets/bsd-about.jpg"

export const AboutImage = () => {
    return(
        <div className="w-full lg:w-[40%] h-[20%] md:h-[60%]">
            <img className="rounded-xl w-full object-fill h-full" src={aboutImg} alt="about image"/>
        </div>
        
    )
}