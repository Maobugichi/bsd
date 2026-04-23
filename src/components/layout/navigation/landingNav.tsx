import { Logo } from "../../ui/logo";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { RefObject } from "react";

interface LandingNavProps {
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
  refs: {
    heroRef: RefObject<HTMLElement>;
    aboutRef: RefObject<HTMLElement>;
    featureRef: RefObject<HTMLElement>;
    galleryRef: RefObject<HTMLElement>;
    testimonialRef: RefObject<HTMLElement>;
    faqRef: RefObject<HTMLElement>;
  };
}

const listItems = [
  { key: "heroRef", name: "Home" },
  { key: "galleryRef", name: "Projects" },
  { key: "featureRef", name: "Services" },
  { key: "aboutRef", name: "About" },
];

export const LandingNav = ({ scrollToSection, refs }: LandingNavProps) => {
  const [show, setIsShow] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("heroRef");

  const handleNavClick = (itemKey: string) => {
    setActiveTab(itemKey);
    scrollToSection(refs[itemKey as keyof typeof refs]);
    setIsShow(false);
  };

  return (
    <>
      {/* Desktop nav */}
      <nav className="bg-black/80 backdrop-blur-lg text-white fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07]">
        <div className="w-[90%] max-w-7xl mx-auto h-20 flex items-center justify-between">
          <Logo />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center">
              {listItems.map((item) => {
                const isActive = activeTab === item.key;
                return (
                  <li key={item.key}>
                    <button
                      onClick={() => handleNavClick(item.key)}
                      className={`
                        relative px-5 h-20 flex items-center
                        font-montserrat text-base font-bold tracking-wide
                        transition-colors duration-300
                        ${isActive ? "text-amber-400" : "text-white/40 hover:text-white"}
                      `}
                    >
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-500" />
                      )}
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>

            
           <a   href="mailto:info@bsdlight.com"
              className="flex items-center gap-2 px-6 py-3
                         bg-amber-500 hover:bg-amber-400
                         text-[#0a0a0a] text-base font-bold font-montserrat tracking-wide
                         transition-colors duration-300 group"
            >
              Contact Us
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsShow(true)}
            className="lg:hidden p-2 hover:bg-white/5 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} className="text-white/70" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {show && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] lg:hidden flex flex-col bg-[#0a0a0a]"
          >
            {/* Mobile header */}
            <div className="h-20 flex justify-between items-center px-6 border-b border-white/[0.07]">
              <Logo />
              <button
                onClick={() => setIsShow(false)}
                className="p-2 hover:bg-white/5 transition-colors"
                aria-label="Close menu"
              >
                <X size={22} className="text-white/60" />
              </button>
            </div>

            {/* Mobile links */}
            <div className="flex-1 flex flex-col justify-between px-6 pt-4 pb-10">
              <ul className="flex flex-col">
                {listItems.map((item, i) => (
                  <motion.li
                    key={item.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.key)}
                      className={`
                        w-full text-left py-5 flex items-center justify-between
                        border-b border-white/[0.06]
                        transition-colors duration-300
                        ${activeTab === item.key ? "text-amber-400" : "text-white/40 hover:text-white"}
                      `}
                    >
                      <span className="font-montserrat text-4xl font-bold tracking-tight leading-none">
                        {item.name}
                      </span>
                      <span className={`font-inter text-xs tracking-widest tabular-nums transition-colors duration-300
                        ${activeTab === item.key ? "text-amber-500/60" : "text-white/15"}`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>

              {/* CTA at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.35 }}
                className="flex flex-col gap-4"
              >
                
              <a    href="mailto:info@bsdlight.com"
                  className="w-full flex items-center justify-center gap-2 py-4
                             bg-amber-500 hover:bg-amber-400 text-[#0a0a0a]
                             text-base font-bold font-montserrat tracking-wide
                             transition-colors duration-300 group"
                >
                  Contact Us
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </a>
                <p className="font-inter text-xs text-white/20 text-center tracking-widest uppercase">
                  Built with precision
                </p>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};