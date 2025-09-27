import aboutImg from "../../assets/bsd-about.jpg"

export const AboutImage = () => {
    return(
        <div className="w-full lg:w-[40%] h-[20%] md:h-full grid place-items-end">
            <img className="rounded-xl w-full object-fill h-[62.5%] md:mb-20 md-0" src={aboutImg} alt="about image"/>
        </div>
        
    )
}