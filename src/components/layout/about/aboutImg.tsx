import about400 from "../../../assets/about-400.webp";
import about600 from "../../../assets/about-600.webp";
import about1000 from "../../../assets/about-1000.webp";

export const AboutImage = () => {
  return (
    <div className="w-full h-[50%] md:h-[300px] lg:h-full lg:w-[40%] grid place-items-center lg:place-items-end">
      <img
        src={about600} 
        srcSet={`
          ${about400} 400w,
          ${about600} 800w, 
          ${about1000} 1200w
        `}
       
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 613px"
        className="rounded-xl w-full h-full object-cover md:h-[62%]"
        loading="lazy"
        alt="about image"
        width="613" 
        height="460"
      />
    </div>
  );
};
