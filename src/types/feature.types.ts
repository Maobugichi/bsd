export interface FeatureType {
  id: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  gridClass: string;
  color: 'teal' | 'indigo' | 'rose' | 'amber' | 'emerald' | 'violet';
  metric: string;
  unit: string;
}