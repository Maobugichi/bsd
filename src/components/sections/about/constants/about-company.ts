import type { HighlightAdapter } from "../types";


export const aboutCompany = [
  {
    id:1,
    header: 'Premier Engineering Solutions',
    desc: 'Leading provider of tailored services across building construction and electro-mechanical sectors.',
    icon: 'settings' as const,
    color: 'teal' as const,
    metric: '15+',
    unit: 'Years'
  },
  {
    id:2,
    header: 'MEP Contracting Experts',
    desc: 'Top-tier contractor with experienced staff delivering landmark projects across Nigeria.',
    icon: 'building2' as const,
    color: 'indigo' as const,
    metric: '200+',
    unit: 'Projects'
  },
  {
    id:3,
    header: 'Client-Centric Services',
    desc: 'Customized solutions aligned with quality standards, delivered on-time and on-budget.',
    icon: 'userCheck' as const,
    color: 'rose' as const,
    metric: '98%',
    unit: 'Satisfaction'
  },
  {
    id:4,
    header: 'Comprehensive MEP Solutions',
    desc: 'Specializing in design, installation, and maintenance of Electro-Mechanical systems.',
    icon: 'circuitBoard' as const,
    color: 'amber' as const,
    metric: '50+',
    unit: 'Specialists'
  },
] as const;


