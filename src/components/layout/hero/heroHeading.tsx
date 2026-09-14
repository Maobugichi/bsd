export const HeroHeading = () => {
    return (
        <h1
            className="font-manrope leading-[1.15] tracking-wide font-bold text-left w-full text-[clamp(2.8rem,8vw,4.5rem)]"
        >
            <span className="block whitespace-nowrap">
                <span className="text-white">Built to </span>
                <span className="relative px-2 inline-block overflow-hidden align-middle">
                    <span className="absolute inset-0 overflow-hidden rounded-xl">
                        <span className="absolute inset-0 bg-black rounded-xl" />
                        <span className="absolute inset-0 bg-gradient-to-r from-black/0 via-white/20 to-black/0 animate-shimmer" />
                    </span>
                    <span className="relative z-10">Last.</span>
                </span>
            </span>
            <span className="block whitespace-nowrap">
                <span className="text-white">Built by Us.</span>
            </span>
        </h1>
    )
}