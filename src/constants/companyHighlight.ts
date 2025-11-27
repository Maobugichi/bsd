type IconKey = 'settings' | 'building2' | 'userCheck' | 'circuitBoard' | 'clipboardList';

interface Highlight {
  header: string;
  desc: string;
  icon: IconKey;
}


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