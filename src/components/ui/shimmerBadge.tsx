import { LucideIcon } from "lucide-react";

interface ShimmerBadgeProps {
  text: string;
  icon: LucideIcon;
  width?: string; // default width
}

export const ShimmerBadge = ({ text, icon: Icon }: ShimmerBadgeProps) => {
  return (
    <div
      className={`inline-flex w-fit items-center gap-2 bg-gradient-to-r from-[#333] to-[#000] text-white text-sm font-semibold shadow-lg relative overflow-hidden rounded-full px-4 py-1 mb-6`}
    >
      <Icon className="w-4 h-4 text-blue-400" />

      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      </span>

      <span className="relative flex items-center gap-2">
        {text}
      </span>
    </div>
  );
};
