import { Logo } from "../../ui/logo";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigationContext } from "@/context/navigation.context";



const NAV_ITEMS = [
    { key: "heroRef",    name: "Home"     },
    { key: "galleryRef", name: "Projects" },
    { key: "featureRef", name: "Services" },
    { key: "aboutRef",   name: "About"    },
] as const;

type RefKey = typeof NAV_ITEMS[number]["key"];



const ContactLink = ({ className }: { className?: string }) => (
    <a
        href="mailto:info@bsdlight.com"
        className={`flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-[#0a0a0a] font-bold font-roboto text-base tracking-wide transition-colors duration-300 group ${className}`}
    >
        Contact Us
        <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
        />
    </a>
);

const DesktopNav = ({
    activeTab,
    onNavClick,
}: {
    activeTab: RefKey;
    onNavClick: (key: RefKey) => void;
}) => (
    <div className="hidden lg:flex items-center gap-8">
        <ul className="flex items-center">
            {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.key;
                return (
                    <li key={item.key}>
                        <button
                            onClick={() => onNavClick(item.key)}
                            className={`relative px-5 h-20 flex items-center font-roboto text-lg font-light tracking-wide transition-colors duration-300 ${
                                isActive ? "text-amber-400" : "text-white/40 hover:text-white"
                            }`}
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
        <ContactLink />
    </div>
);

const MobileMenu = ({
    activeTab,
    onNavClick,
    onClose,
}: {
    activeTab: RefKey;
    onNavClick: (key: RefKey) => void;
    onClose: () => void;
}) => (
    <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
        className="fixed inset-0 z-[60] lg:hidden flex flex-col bg-[#0a0a0a]"
    >
        {/* Header */}
        <div className="h-20 flex justify-between items-center px-6 border-b border-white/[0.07]">
            <Logo />
            <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 transition-colors"
                aria-label="Close menu"
            >
                <X size={22} className="text-white/60" />
            </button>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col justify-between px-6 pt-4 pb-10">
            <ul className="flex flex-col">
                {NAV_ITEMS.map((item, i) => (
                    <motion.li
                        key={item.key}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                        <button
                            onClick={() => onNavClick(item.key)}
                            className={`w-full text-left py-5 flex items-center justify-between border-b border-white/[0.06] transition-colors duration-300 ${
                                activeTab === item.key
                                    ? "text-amber-400"
                                    : "text-white/40 hover:text-white"
                            }`}
                        >
                            <span className="font-montserrat text-4xl font-bold tracking-tight leading-none">
                                {item.name}
                            </span>
                            <span className={`font-inter text-xs tracking-widest tabular-nums transition-colors duration-300 ${activeTab === item.key ? "text-amber-500/60" : "text-white/15"}`}>
                                {String(i + 1).padStart(2, "0")}
                            </span>
                        </button>
                    </motion.li>
                ))}
            </ul>

          
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.35 }}
                className="flex flex-col gap-4"
            >
                <ContactLink className="w-full justify-center py-4" />
                <p className="font-inter text-xs text-white/20 text-center tracking-widest uppercase">
                    Built with precision
                </p>
            </motion.div>
        </div>
    </motion.nav>
);

// ── LandingNav ────────────────────────────────────────────────────────────────

export const LandingNav = () => {
    const { refs, scrollToSection } = useNavigationContext();
    const [show, setIsShow] = useState(false);
    const [activeTab, setActiveTab] = useState<RefKey>("heroRef");

    const handleNavClick = (key: RefKey) => {
        setActiveTab(key);
        scrollToSection(refs[key]);
        setIsShow(false);
    };

    return (
        <>
            <nav className="bg-black/80 backdrop-blur-lg text-white fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07]">
                <div className="w-[90%] max-w-7xl mx-auto h-20 flex items-center justify-between">
                    <Logo />
                    <DesktopNav activeTab={activeTab} onNavClick={handleNavClick} />
                    <button
                        onClick={() => setIsShow(true)}
                        className="lg:hidden p-2 hover:bg-white/5 transition-colors"
                        aria-label="Open menu"
                    >
                        <Menu size={35} className="text-white/70" />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {show && (
                    <MobileMenu
                        activeTab={activeTab}
                        onNavClick={handleNavClick}
                        onClose={() => setIsShow(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};