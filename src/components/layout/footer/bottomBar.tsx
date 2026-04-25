export const BottomBar = () => (
    <div className="border-t border-white/[0.06] py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-roboto text-sm text-white/30">
            © {new Date().getFullYear()} BSDLight. All rights reserved.
        </span>
        <span className="font-inter text-xs text-white/15 tracking-[0.2em] uppercase">
            Built with precision
        </span>
    </div>
);
