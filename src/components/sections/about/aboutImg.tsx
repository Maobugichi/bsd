import aboutImg from "../../../assets/bsd-about.webp";

export const AboutImage = () => {
    return(
        <div className="w-full [@media(min-width:1020px)_and_(max-width:1024px)]:h-[400px]   [@media(min-width:1020px)_and_(max-width:1024px)]:w-[90%] lg:w-[40%] h-[50%] md:h-[300px] lg:h-full grid [@media(min-width:1020px)_and_(max-width:1024px)]:place-items-start lg:place-items-end">
            <img loading="lazy" className="rounded-xl w-full object-fill h-full md:h-[62%] [@media(min-width:1020px)_and_(max-width:1024px)]:h-[80%]" src={aboutImg} alt="about image"/>
        </div>
        
    )
}