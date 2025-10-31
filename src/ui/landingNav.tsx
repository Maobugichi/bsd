import { Logo } from "../components/logo"
import { Menu, X } from 'lucide-react';
import { useState } from "react";
import { motion } from "motion/react";
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
                      : 'text-gray-600 hover:text-gray-900 hover:scale-105'
                    }
                  `}
                >
               
                  {isActive && (
                    <>
                      <span className="absolute inset-0 bg-black rounded-full" />
                      <span className="absolute inset-0 bg-gradient-to-r from-black/0 via-white/20 to-black/0 animate-shimmer" />
                    </>
                  )}
                  
                
                  {!isActive && (
                    <span className="absolute inset-0 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  
                  <span className="relative z-10">{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
        
       
        <button 
          className="ml-3 relative  text-white  text-lg px-6 py-3 rounded-full bg-black  font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg shadow-black/10"
        >
                
         <span className="relative z-10">Contact Us</span> 
        </button>
      </div>

     
      <div className="lg:hidden">
        <button 
          onClick={showNav}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      
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
            className="fixed inset-0  lg:hidden left-0 right-0 z-20 w-full h-[90vh] rounded-md top-0 flex flex-col bg-[#f9fbfd]"
        >
            <div className="h-16 rounded-md flex justify-between items-center px-6 border-b border-solid border-gray-200 bg-white/80 backdrop-blur-lg">
                <Logo />
                <button 
                    onClick={closeNav}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X size={32} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto">
            <ul className="flex flex-col gap-2 p-6 mt-8">
                {listItems.map((item) => (
                <li key={item.key}>
                    <button
                    onClick={() => handleNavClick(item.key)}
                    className={`
                        w-full text-left px-4 py-3 rounded-lg text-base font-medium
                        transition-all duration-300
                        ${activeTab === item.key
                        ? 'bg-black text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                        }
                    `}
                    >
                    {item.name}
                    </button>
                </li>
                ))}
                
                <li className="mt-4">
                <button 
                    className="w-full px-4 py-3 rounded-lg bg-black text-white text-base font-medium hover:bg-gray-800 transition-all duration-300"
                >
                    Contact Us
                </button>
                </li>
            </ul>
            </div>
        </motion.nav>
        )}

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};