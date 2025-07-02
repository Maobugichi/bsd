 import {
  Settings,
  Building2,
  UserCheck,
  CircuitBoard,
  ClipboardList
} from 'lucide-react';

type IconKey = 'settings' | 'building2' | 'userCheck' | 'circuitBoard' | 'clipboardList';

interface Highlight {
  header: string;
  desc: string;
  icon: IconKey;
}

export const icons:Record<IconKey, React.FC<React.SVGProps<SVGSVGElement>>> = {
  settings: Settings,
  building2: Building2,
  userCheck: UserCheck,
  circuitBoard: CircuitBoard,
  clipboardList: ClipboardList
};

 
 export const buttons = [
            {
                className:'bg-black text-white w-42 text-lg h-15 rounded-sm -left-10 relative md:left-10 z-20  border-solid',
                content:'Our Services',
                variants: { hover: { x: -8, y: -8 } }
            },
            {
                className:'bg-[#D5D4F9] w-42 text-lg h-15 rounded-sm -left-10 md:left-10 -top-15 relative border border-solid border-black z-15',
                content:'',
                variants: { hover: { x: 2, y: 2 } }
            },
            {
                className:'bg-[#F4F6F8] w-42 text-lg h-15 rounded-sm -left-10  md:left-10 relative -top-31 border border-solid border-black z-10',
                content:'',
                variants: { hover: { x: 10, y: 10 } }
            },
    ]

     export const cardCta = [
            {
                className:'bg-black w-full text-lg h-15 rounded-sm relative  z-20  border-solid',
                content:'Find out how',
                variants: { hover: { x: -8, y: -8 } }
            },
            {
                className:'bg-yellow-400 w-full text-lg h-15 rounded-sm  -top-15 relative border border-solid border-black z-15',
                content:'',
                variants: { hover: { x: 2, y: 2 } }
            },
            {
                className:'bg-orange-400 w-full text-lg h-15 rounded-sm -top-31 relative  border border-solid border-black z-10',
                content:'',
                variants: { hover: { x: 10, y: 10 } }
            },
    ]

export const companyHighlights: Highlight[] = [
  {
    header: 'Premier Engineering Solutions Provider',
    desc: 'BSD Light Limited is one of the leading engineering solutions providers and project specialists, delivering tailored services across building construction and electro-mechanical sectors.',
    icon: 'settings'
  },
  {
    header: 'Experts in Building, Mechanical & Electrical Contracting',
    desc: 'BSD LIGHT is a top-tier Building, Mechanical, and Electrical engineering contractor, backed by experienced staff who have contributed to landmark projects including residential buildings, office towers, banks, and malls.',
    icon: 'building2' // ✅ matches the icons object key
  },
  {
    header: 'Customized, Client-Centric Services',
    desc: 'We offer flawless, customized services aligned with our clients’ quality standards, engaging early in each project to ensure on-time and on-budget delivery.',
    icon: 'userCheck'
  },
  {
    header: 'Comprehensive MEP Contracting in Nigeria',
    desc: 'BSD LIGHT LIMITED specializes in the design, construction, installation, and maintenance of Electro-Mechanical systems, networks, and utilities across Nigeria.',
    icon: 'circuitBoard'
  },
  
];
