import logo84 from "../../assets/logo84.webp";
import logo168 from "../../assets/logo168.webp";
import logo200 from "../../assets/logo200.webp";

export const Logo = () => (
  <img
    src={logo84} 
    srcSet={`${logo84} 84w, ${logo168} 168w, ${logo200} 200w`}
    sizes="(min-width: 768px) 168px, (min-width: 1024px) 200px, 84px"
    className="h-10 w-12 md:h-20 md:w-42"
    alt="bsd logo"
    loading="lazy"
  />
);
