export const HeroHeading = () => {
    return (
        <h1
            className="font-montserrat leading-[1.15] tracking-wide font-bold text-center w-full"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 4.5rem)' }}
        >
            <span className="block md:whitespace-nowrap">
                <span className="text-white">The World&apos;s Best </span>
                <span className="relative px-2 inline-block overflow-hidden align-middle">
                    <span className="absolute inset-0 overflow-hidden rounded-xl">
                        <span className="absolute inset-0 bg-black rounded-xl" />
                        <span className="absolute inset-0 bg-gradient-to-r from-black/0 via-white/20 to-black/0 animate-shimmer" />
                    </span>
                    <span className="relative z-10">Buildings</span>
                </span>
            </span>
            <span className="block md:whitespace-nowrap">
                <span className="text-white">Didn&apos;t Build </span>
                <span className="relative inline-block">
                    <span className="relative z-10">Themselves.</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent blur-sm" />
                </span>
            </span>
        </h1>
    )
}