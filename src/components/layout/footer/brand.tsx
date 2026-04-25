import { CONTACT_ITEMS } from "./footer";

export const Brand = () => (
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
