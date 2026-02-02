import type { CardStackProps } from "../types"
import { 
  Star,
  ShieldCheck,
  Award,
} from "lucide-react";

export const cards: CardStackProps[]= [
  {
    id: 1,
    title: 'Reliable and Transparent',
    category: 'Construction & Safety',
    className: 'bg-gradient-to-br from-slate-900 to-slate-800',
    children: (
      <div className="flex flex-col h-fit py-20 px-4 md:px-8 gap-3 md:gap-5">
        <div className="grid gap-3">
          <div className="flex items-center gap-2  mb-2">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Construction & Safety</span>
          </div>
          <h1 className="text-xl md:text-3xl font-semibold mb-3 text-white">Reliable and Transparent</h1>
          <p className="text-md tracking-wide md:text-lg  leading-10 text-slate-300">
            "From the very beginning, the team showed outstanding transparency, professionalism, and responsiveness. Every phase of our warehouse expansion was managed with care and precision. They communicated clearly, met deadlines, and avoided cost overruns — a rare feat. Their commitment to safety and quality stood out, consistently meeting and exceeding standards."
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-600/20 border-2 border-emerald-600/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <ShieldCheck className="text-emerald-400 w-7 h-7" />
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Exceptional Quality & Design',
    category: 'MEP & Design',
    className: 'bg-gradient-to-br from-gray-900 to-gray-800',
    children: (
      <div className="flex md:px-8 flex-col h-fit py-20 px-4 gap-3 md:gap-5">
        <div className="grid gap-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">MEP & Design</span>
          </div>
          <h1 className="text-xl md:text-3xl font-semibold mb-3 text-white">Exceptional Quality & Design</h1>
          <p className="text-md md:text-lg tracking-wide leading-10 text-slate-300">
            "They transformed our outdated office into a sleek, modern environment that is both visually impressive and highly functional. From HVAC and acoustics to lighting and layout, every detail was thoughtfully executed with a balance of creativity and technical expertise. Their ability to deliver a polished, performance-driven workspace truly exceeded our expectations."
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-600/20 border-2 border-amber-600/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Award className="text-amber-400 w-7 h-7" />
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Tech-Forward Solutions',
    category: 'IT & Technology',
    className: 'bg-gradient-to-br from-slate-700 to-slate-600',
    children: (
      <div className="flex flex-col md:px-8 h-fit py-20 px-4 gap-3 md:gap-5">
        <div className="grid gap-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">IT & Technology</span>
          </div>
          <h1 className="text-xl md:text-3xl font-semibold mb-3 text-white">Tech-Forward Solutions</h1>
          <p className="text-md md:text-lg tracking-wide leading-10 text-slate-300">
            "They handled our data center cabling and VoIP deployment with impressive precision and efficiency. Every aspect of the infrastructure was planned and executed with care, minimizing downtime and ensuring a smooth transition. Since implementation, our systems have run reliably, and their support team has been both responsive and knowledgeable."
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600/20 border-2 border-blue-600/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Star className="text-blue-400 w-7 h-7" />
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </div>
    )
  },
];