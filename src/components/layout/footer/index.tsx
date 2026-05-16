import { Mail, Phone, MapPin } from "lucide-react";
import { Brand } from "./brand";
import { NavColumns } from "./navcolumns";
import { Newsletter } from "./newsLetter";
import { BottomBar } from "./bottomBar";



export const NAV_LINKS: Record<string, string[]> = {
    Company: ["About Us", "Our Services", "Careers", "Contact"],
    Support: ["Help Center", "FAQs", "Terms of Use", "Privacy Policy"],
};

export const CONTACT_ITEMS = [
    { icon: Mail,   label: "info@bsdlight.com", href: "mailto:info@bsdlight.com" },
    { icon: Phone,  label: "070 1837 3588",      href: "tel:+2347018373588"       },
    { icon: MapPin, label: "Lagos, Nigeria",      href: null                       },
] as const;



export const Footer = () => (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        <div className="w-[90%] max-w-7xl mx-auto">
            <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
                <Brand />
                <NavColumns />
                <Newsletter />
            </div>
            <BottomBar />
        </div>
    </footer>
);