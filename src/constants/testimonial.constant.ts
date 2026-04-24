import { Star, ShieldCheck, Award } from "lucide-react";

export const cardsData = [
    {
        id: 1,
        title: 'Reliable and Transparent',
        category: 'Construction & Safety',
        className: 'bg-[#1c1c1c]',
        description: "From the very beginning, the team showed outstanding transparency, professionalism, and responsiveness. Every phase of our warehouse expansion was managed with care and precision. They communicated clearly, met deadlines, and avoided cost overruns — a rare feat.",
        theme: 'emerald',
        Icon: ShieldCheck
    },
    {
        id: 2,
        title: 'Exceptional Quality & Design',
        category: 'MEP & Design',
        className: 'bg-[#242424]',
        description: "They transformed our outdated office into a sleek, modern environment that is both visually impressive and highly functional. From HVAC and acoustics to lighting and layout, every detail was thoughtfully executed with a balance of creativity and technical expertise.",
        theme: 'amber',
        Icon: Award
    },
    {
        id: 3,
        title: 'Tech-Forward Solutions',
        category: 'IT & Technology',
        className: 'bg-[#2a2a2a]',
        description: "They handled our data center cabling and VoIP deployment with impressive precision and efficiency. Every aspect of the infrastructure was planned and executed with care, minimizing downtime and ensuring a smooth transition.",
        theme: 'blue',
        Icon: Star
    },
];