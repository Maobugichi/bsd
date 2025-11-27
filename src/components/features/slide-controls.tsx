import { ChevronLeft, ChevronRight } from "lucide-react"


interface ControlsProps {
  nextSlide: () => void;
  prevSlide: () => void;
}

export const SlideControls = ({nextSlide , prevSlide}:ControlsProps) => {
    return(
        <>
           <button
            onClick={prevSlide}
            className="
            absolute left-4 top-1/2 -translate-y-1/2 z-20
            w-12 h-12 bg-white/70 lg:bg-white/90 backdrop-blur-sm rounded-full
            flex items-center justify-center
            transition-all duration-300 ease-out
            opacity-80 lg:opacity-0 lg:group-hover:opacity-100
            active:scale-95 hover:bg-white hover:scale-110 hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-gray-900/20
            "
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
        
                <button
                 onClick={nextSlide}
                 className="
                  absolute right-4 top-1/2 -translate-y-1/2 z-20
                  w-12 h-12 bg-white/70 lg:bg-white/90 backdrop-blur-sm rounded-full
                  flex items-center justify-center
                  transition-all duration-300 ease-out
                  opacity-80 lg:opacity-0 lg:group-hover:opacity-100
                  active:scale-95 hover:bg-white hover:scale-110 hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-gray-900/20
                 "
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>
        </>
    )
}