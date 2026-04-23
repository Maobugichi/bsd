interface CurrentProps {
    length: number;
    currentIndex: number;
}

export const Current = ({ currentIndex, length }: CurrentProps) => {
    return (
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-[#1c1c1c]/80 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
            <span className="text-amber-400 text-sm font-montserrat font-bold tabular-nums">
                {currentIndex + 1}
            </span>
            <span className="text-white/20 text-sm">/</span>
            <span className="text-white/40 text-sm font-inter tabular-nums">
                {length}
            </span>
        </div>
    )
}