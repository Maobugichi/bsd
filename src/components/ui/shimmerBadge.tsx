import { LucideIcon } from "lucide-react";

interface ShimmerBadgeProps {
    text: string;
    icon: LucideIcon;
    width?: string;
}

export const ShimmerBadge = ({ text, icon: Icon }: ShimmerBadgeProps) => {
    return (
        <div className="inline-flex w-fit items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-700 text-sm font-semibold relative overflow-hidden rounded-none px-4 py-1.5 mb-2">
            <Icon className="w-4 h-4 text-amber-500" />

            <span className="absolute inset-0 overflow-hidden rounded-none">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent animate-shimmer" />
            </span>

            <span className="relative">{text}</span>
        </div>
    );
};