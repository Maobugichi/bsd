import { NAV_LINKS } from "./footer";
import { SectionLabel } from "./sectionLabel";

export const NavColumns = () => (
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