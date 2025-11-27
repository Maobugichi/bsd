interface CurrentProps {
    length: number;
    currentIndex:number;
}


export const Current = ({ currentIndex , length}:CurrentProps) => {
    return(
          <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md rounded-full px-3 z-30 py-1 border border-white/20">
          <span className="text-white text-sm font-medium">
            {currentIndex + 1} / {length}
          </span>
        </div>
  
    )
}