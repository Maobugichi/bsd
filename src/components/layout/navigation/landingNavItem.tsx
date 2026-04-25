const NAV_ITEMS = [
    { key: "heroRef",    name: "Home"     },
    { key: "galleryRef", name: "Projects" },
    { key: "featureRef", name: "Services" },
    { key: "aboutRef",   name: "About"    },
] as const;

type NavKey = typeof NAV_ITEMS[number]["key"];

interface ListItemProps {
    activeTab: NavKey;
    onNavClick: (key: NavKey) => void;
}



export const ListItem = ({ activeTab, onNavClick }: ListItemProps) => (
    <ul className="flex lg:flex-row flex-col">
        {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.key;
            return (
                <li key={item.key}>
                    <button
                        onClick={() => onNavClick(item.key)}
                        className={`relative px-5 h-20 flex items-center font-roboto text-sm font-bold tracking-wide transition-colors duration-300 ${
                            isActive ? "text-amber-400" : "text-white/50 hover:text-white"
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
);

export type { NavKey };
export { NAV_ITEMS };