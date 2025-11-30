import { Logo } from "../../ui/logo"
import { Menu, X } from 'lucide-react';
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

export const LandingNav = ({ scrollToSection, refs }: LandingNavProps) => {
  const [show, setIsShow] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('heroRef');
 
  const listItems = [
    { key: "heroRef", name: "Home" },
    { key: "galleryRef", name: "Projects" },
    { key: "featureRef", name: "Services" },
    { key: "aboutRef", name: "About" },
  ];

  function showNav() {
    setIsShow(true);
  }

  function closeNav() {
    setIsShow(false);
  }

  const handleNavClick = (itemKey: string) => {
    setActiveTab(itemKey);
    scrollToSection(refs[itemKey as keyof typeof refs]);
    closeNav();
  };

  return (
    <>
      <nav 
        className="font-inter overflow-hidden bg-white/80 flex items-center lg:py-10 px-6 text-base justify-between backdrop-blur-lg text-black fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-full h-16 border border-gray-200 shadow-lg shadow-black/5"
      >
        <Logo />
      
        <div className="hidden lg:flex items-center gap-2">
          <ul className="flex items-center gap-5">
            {listItems.map((item) => {
              const isActive = activeTab === item.key;
              
              return (
                <li key={item.key}>
                  <button
                    onClick={() => handleNavClick(item.key)}
                    className={`
                      group relative px-5 py-2 rounded-full text-lg font-medium
                      transition-all duration-300 ease-out
                      ${isActive 
                        ? 'text-white scale-105' 
                        : 'text-gray-700 hover:text-gray-900 hover:scale-105'
                      }
                    `}
                  >
                   
                    {isActive && (
                      <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 bg-gradient-to-r from-[#333] to-[#000] rounded-full" />
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer" />
                      </span>
                    )}
                    
                  
                    {!isActive && (
                      <span className="absolute inset-0 bg-orange-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                    
                    <span className="relative z-10">{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          
          
          <button 
            className="ml-3 relative text-white text-lg px-6 py-3 rounded-full bg-gradient-to-r from-[#333] to-[#000] font-medium hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20"
          >
            <span className="relative z-10"><a href="mailto:info@example.com" >Contact Us</a></span> 
          </button>
        </div>

     
        <div className="lg:hidden">
          <button 
            onClick={showNav}
            className="p-2 hover:bg-orange-50 rounded-full transition-colors"
          >
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>
      </nav>

    
      <AnimatePresence>
        {show && (
          <motion.nav
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 300,
              opacity: { duration: 0.2 }
            }}
            className="fixed inset-0 z-[60] lg:hidden flex flex-col bg-[#f9fbfd] rounded-t-xl"
          >
            <div className="h-20 flex justify-between items-center px-6 border-b border-solid border-gray-200/50 bg-white/80 backdrop-blur-lg sticky top-0 z-10">
              <Logo />
              <button 
                onClick={closeNav}
                className="p-3 hover:bg-orange-50 rounded-full transition-colors"
              >
                <X size={32} className="text-gray-700" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pb-8">
              <ul className="flex flex-col gap-2 p-6 mt-8">
                {listItems.map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => handleNavClick(item.key)}
                      className={`
                        w-full text-left px-6 py-4 rounded-xl text-base font-medium
                        transition-all duration-300
                        ${activeTab === item.key
                          ? 'bg-gradient-to-r from-[#333] to-[#000] text-white shadow-lg shadow-orange-500/20' 
                          : 'text-gray-700 hover:bg-orange-50 hover:shadow-sm'
                        }
                      `}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
                
                <li className="mt-6 pt-6 border-t border-gray-200/50">
                  <button 
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#333] to-[#000] text-white text-base font-medium  hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                  >
                     <a href="mailto:info@example.com" >Contact Us</a>
                  
                  </button>
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};