import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const NAV_LINKS = {
  Company: ["About Us", "Our Services", "Careers", "Contact"],
  Support: ["Help Center", "FAQs", "Terms of Use", "Privacy Policy"],
};

export const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Amber top accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="w-[90%] max-w-7xl mx-auto">

        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">

          {/* Brand block — wider */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div>
              <span className="font-montserrat text-2xl font-bold text-white tracking-tight">
                BSD<span className="text-amber-500">Light</span>
              </span>
              <p className="font-inter text-sm text-white/35 leading-relaxed mt-3 max-w-xs">
                Global construction, design, and infrastructure — built to last, delivered with precision.
              </p>
            </div>

            {/* Contact */}
            <ul className="flex flex-col gap-2.5">
              {[
                { icon: Mail, label: "info@bsdlight.com", href: "mailto:info@bsdlight.com" },
                { icon: Phone, label: "070 1837 3588", href: "tel:+2347018373588" },
                { icon: MapPin, label: "Lagos, Nigeria", href: null },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  {href ? (
                    
                   <a   href={href}
                      className="flex items-center gap-3 group w-fit"
                    >
                      <Icon size={13} className="text-amber-500/70 shrink-0 group-hover:text-amber-400 transition-colors duration-300" />
                      <span className="font-inter text-sm text-white/40 group-hover:text-white/70 transition-colors duration-300">
                        {label}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Icon size={13} className="text-amber-500/70 shrink-0" />
                      <span className="font-inter text-sm text-white/40">{label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            {Object.entries(NAV_LINKS).map(([heading, links]) => (
              <div key={heading} className="flex flex-col gap-5">
                <h3 className="font-montserrat text-[11px] font-bold tracking-[0.18em] uppercase text-white/25">
                  {heading}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {links.map((item) => (
                    <li key={item}>
                      
                       <a href="#"
                        className="font-inter text-sm text-white/45 hover:text-amber-400
                                   transition-colors duration-300 flex items-center gap-2 group w-fit"
                      >
                        <span className="w-0 h-[1px] bg-amber-500 group-hover:w-2.5 transition-all duration-300 shrink-0" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <h3 className="font-montserrat text-[11px] font-bold tracking-[0.18em] uppercase text-white/25">
              Newsletter
            </h3>
            <p className="font-inter text-sm text-white/35 leading-relaxed">
              Industry news and project updates, straight to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08]
                           text-white text-sm placeholder-white/20 font-inter
                           focus:outline-none focus:border-amber-500/40
                           transition-colors duration-300"
              />
              <button
                type="button"
                className="w-full py-3 bg-amber-500 hover:bg-amber-400
                           text-[#0a0a0a] text-sm font-bold font-montserrat tracking-wide
                           transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                Subscribe
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-inter text-xs text-white/25">
            © {new Date().getFullYear()} BSDLight. All rights reserved.
          </span>
          <span className="font-inter text-xs text-white/15 tracking-[0.2em] uppercase">
            Built with precision
          </span>
        </div>
      </div>
    </footer>
  );
};