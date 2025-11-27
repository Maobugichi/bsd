import type { SlideType } from "./types";

interface SlideProps {
    slide:SlideType;
    isActive:boolean
}

export const Slide = ({slide, isActive}:SlideProps) => {
    return(
         <div
            key={slide.id}
            className={`
              absolute inset-0 transition-all duration-700 ease-in-out
              ${isActive
                ? 'opacity-100 translate-x-0' 
                : isActive
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
              }
            `}
            style={{ backgroundColor: slide.bg }}
          >
           
            <div className="absolute inset-0 bg-black/20 z-10 rounded-2xl" />
            <img
              src={slide.image}
              alt={`Construction project ${slide.id}`}
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
    )
}