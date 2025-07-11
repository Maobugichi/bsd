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
    //footerRef: RefObject<HTMLElement>;
  };
  closeNav:() => void
}

export const ListItem = ({ scrollToSection, refs, closeNav }: ListItemProps) => {
   const listItems = [
  { key: "heroRef", name: "Home" },
  { key: "galleryRef", name: "Projects" },
  { key: "featureRef", name: "Services" },
  { key: "aboutRef", name: "About" },
];
    return(
        <ul className="flex lg:flex-row flex-col md:h-[60%] h-[40%]  lg:h-full  mt-20 md:mt-0 text-md justify-between p-6 md:items-center  lg:w-1/2">
        {listItems.map((item) => (
            <li
            key={item.key}
            className="cursor-pointer"
            onClick={() => {
                scrollToSection(refs[item.key as keyof typeof refs])
                closeNav()
            }}
            >
            {item.name}
            </li>
        ))}
        </ul>
    )
}