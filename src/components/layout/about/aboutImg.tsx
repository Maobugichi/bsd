import about600 from "../../../assets/about-400.jpeg";


export const AboutImage = () => {
  return (
    <div className="w-full  md:h-[300px] lg:w-[40%] lg:h-auto grid place-items-center lg:place-items-end">
      <img
        src={about600} 
        
       
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 613px"
        className="rounded-xl w-full h-[90%] object-fill "
        loading="lazy"
        alt="about image"
        width="613" 
        height="460"
      />
    </div>
  );
};
