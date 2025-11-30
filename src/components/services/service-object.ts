import {
  Hammer,
  Wrench,
  Computer,
  Globe,
  Building2,
  Construction,
} from 'lucide-react';
import type { ServiceType } from './types';

export const services: ServiceType[] = [
  {
    id: 'construction',
    title: 'Building Construction',
    description:
      'We deliver expert construction and maintenance services, ensuring strong, durable structures with ongoing support for reliability and efficiency. Every project built to last with quality.',
    icon: Hammer,
    gridClass: '',
    color: 'teal',
    metric: '500+',
    unit: 'Projects',
  },
  {
    id: 'design',
    title: 'M&D Design & Installation',
    description:
      "We provide tailored mechanical and design installations from layout planning to HVAC, electrical, and plumbing integration. Creative solutions meet technical precision for lasting performance.",
    icon: Wrench,
    gridClass: '',
    color: 'indigo',
    metric: '250+',
    unit: 'Installations',
  },
  {
    id: 'it-telecom',
    title: 'IT & Telecom Services',
    description:
      'We offer cloud, VoIP, cybersecurity, and network solutions to keep your business connected, protected, and productive. Modern technology infrastructure that scales with your growth needs.',
    icon: Computer,
    gridClass: '',
    color: 'rose',
    metric: '100+',
    unit: 'Clients',
  },
  {
    id: 'import-export',
    title: 'Import & Export',
    description:
      'From product sourcing to final delivery, we simplify international trade with reliability and compliance. Our global network handles customs, logistics, and quality across multiple markets.',
    icon: Globe,
    gridClass: '',
    color: 'amber',
    metric: '50+',
    unit: 'Countries',
  },
  {
    id: 'property',
    title: 'Property Development',
    description:
      'High-quality residential and commercial real estate from design to delivery. Modern developments that create lasting value and transform communities with innovative architectural solutions.',
    icon: Building2,
    gridClass: '',
    color: 'emerald',
    metric: '30+',
    unit: 'Properties',
  },
  {
    id: 'renovation',
    title: 'Refurbishment',
    description:
      'Modern, value-enhancing transformations for residential and commercial spaces. Expert renovations that breathe new life into existing structures with attention to detail and quality.',
    icon: Construction,
    gridClass: '',
    color: 'violet',
    metric: '150+',
    unit: 'Renovations',
  },
];

