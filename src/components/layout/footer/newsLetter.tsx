import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./sectionLabel";

export const Newsletter = () => (
    <div className="md:col-span-4 flex flex-col gap-5">
        <SectionLabel>Newsletter</SectionLabel>
        <p className="font-roboto text-base text-white/40 leading-relaxed">
            Industry news and project updates, straight to your inbox.
        </p>
        <div className="flex flex-col gap-2">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
                id="newsletter-email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/25 font-inter focus:outline-none focus:border-amber-500/40 transition-colors duration-300"
            />
            <button
                type="button"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-[#0a0a0a] text-sm font-bold font-montserrat tracking-wide transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
                Subscribe
                <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
            </button>
        </div>
    </div>
);