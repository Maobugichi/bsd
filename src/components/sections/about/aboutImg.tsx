import about400 from "../../../assets/about-400.webp";
import about600 from "../../../assets/about-600.webp";
import about1000 from "../../../assets/about-1000.webp";

export const AboutImage = () => {
  return (
    <div className="w-full h-[50%] md:h-[300px] lg:h-full lg:w-[40%] grid place-items-center lg:place-items-end">
      <img
        src={about400}
        srcSet={`
          ${about400} 400w,
          ${about600} 613w,
          ${about1000} 1000w
        `}
        sizes="(max-width: 640px) 400px, (max-width: 1020px) 613px, 1000px"
        className="rounded-xl w-full h-full object-cover md:h-[62%]"
        loading="lazy"
        alt="about image"
      />
    </div>
  );
};
