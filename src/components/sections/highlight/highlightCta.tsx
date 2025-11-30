import { ArrowRight } from "lucide-react"

export const HighlightCta = () => {
    return(
         <div className="text-center ">
            <a 
            href="mailto:project@bsdlight.com?subject=Project Inquiry&body=Hello, I would like to discuss a project."
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#333]  to-[#000] overflow-hidden relative text-white rounded-2xl md:mt-0 mt-20 px-8 py-4 transition-all duration-300 hover:bg-gray-800 hover:scale-105 cursor-pointer group"
            >
                 <span className="absolute inset-0 overflow-hidden rounded-2xl">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </span>
               <span className="font-semibold text-md [@media(min-width:350px)_and_(max-width:360px)]:text-sm md:text-lg">Ready to start your project?</span>
               <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
      </div>
    )
}