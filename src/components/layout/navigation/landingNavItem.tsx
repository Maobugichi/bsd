import type { RefObject } from "react";

interface ListItemProps {
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
  refs: {
    heroRef: RefObject<HTMLElement>;
    aboutRef: RefObject<HTMLElement>;
    featureRef: RefObject<HTMLElement>;
    galleryRef: RefObject<HTMLElement>;
    testimonialRef: RefObject<HTMLElement>;
    faqRef: RefObject<HTMLElement>;
  };
  closeNav: () => void;
  activeTab: string;
}

const listItems = [
  { key: "heroRef", name: "Home" },
  { key: "galleryRef", name: "Projects" },
  { key: "featureRef", name: "Services" },
  { key: "aboutRef", name: "About" },
];

export const ListItem = ({ scrollToSection, refs, closeNav, activeTab }: ListItemProps) => {
  return (
    <ul className="flex lg:flex-row flex-col">
      {listItems.map((item) => {
        const isActive = activeTab === item.key;
        return (
          <li
            key={item.key}
            onClick={() => {
              scrollToSection(refs[item.key as keyof typeof refs]);
              closeNav();
            }}
            className={`
              relative cursor-pointer px-5 h-20 flex items-center
              font-montserrat text-sm font-bold tracking-wide
              transition-colors duration-300
              ${isActive ? "text-amber-400" : "text-white/50 hover:text-white"}
            `}
          >
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-500" />
            )}
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};