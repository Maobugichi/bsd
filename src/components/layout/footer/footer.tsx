import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const NAV_LINKS: Record<string, string[]> = {
    Company: ["About Us", "Our Services", "Careers", "Contact"],
    Support: ["Help Center", "FAQs", "Terms of Use", "Privacy Policy"],
};

const CONTACT_ITEMS = [
    { icon: Mail,   label: "info@bsdlight.com", href: "mailto:info@bsdlight.com" },
    { icon: Phone,  label: "070 1837 3588",      href: "tel:+2347018373588"       },
    { icon: MapPin, label: "Lagos, Nigeria",      href: null                       },
] as const;

// ── Sub-components ────────────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-montserrat text-xs font-bold tracking-[0.18em] uppercase text-white/30">
        {children}
    </h3>
);

const Brand = () => (
    <div className="md:col-span-4 flex flex-col gap-7">
        <div>
            <span className="font-montserrat text-3xl font-bold text-white tracking-tight">
                BSD<span className="text-amber-500">Light</span>
            </span>
            <p className="font-roboto text-base text-white/35 leading-relaxed mt-3 max-w-xs">
                Global construction, design, and infrastructure — built to last, delivered with precision.
            </p>
        </div>

        <ul className="flex flex-col gap-3">
            {CONTACT_ITEMS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                    {href ? (
                        <a href={href} className="flex items-center gap-3 group w-fit">
                            <Icon size={15} className="text-amber-500/70 shrink-0 group-hover:text-amber-400 transition-colors duration-300" />
                            <span className="font-inter text-sm text-white/45 group-hover:text-white/75 transition-colors duration-300">
                                {label}
                            </span>
                        </a>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Icon size={15} className="text-amber-500/70 shrink-0" />
                            <span className="font-inter text-sm text-white/45">{label}</span>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

const NavColumns = () => (
    <div className="md:col-span-4 grid grid-cols-2 gap-8">
        {Object.entries(NAV_LINKS).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-5">
                <SectionLabel>{heading}</SectionLabel>
                <ul className="flex flex-col gap-3">
                    {links.map((item) => (
                        <li key={item}>
                            <a
                                href="#"
                                className="font-roboto text-sm text-white/50 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group w-fit"
                            >
                                <span className="w-0 h-[1px] bg-amber-500 group-hover:w-3 transition-all duration-300 shrink-0" />
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

const Newsletter = () => (
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

const BottomBar = () => (
    <div className="border-t border-white/[0.06] py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-roboto text-sm text-white/30">
            © {new Date().getFullYear()} BSDLight. All rights reserved.
        </span>
        <span className="font-inter text-xs text-white/15 tracking-[0.2em] uppercase">
            Built with precision
        </span>
    </div>
);



export const Footer = () => (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        <div className="w-[90%] max-w-7xl mx-auto">
            <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
                <Brand />
                <NavColumns />
                <Newsletter />
            </div>
            <BottomBar />
        </div>
    </footer>
);