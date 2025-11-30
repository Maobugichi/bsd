
export interface HighlightItem {
  id:string;
  header: string;
  desc: string;
  icon:  React.FC<React.SVGProps<SVGSVGElement>>;
  metric: string;
  unit: string;
  color: 'emerald' | 'blue' | 'purple' | 'orange' | 'red' | 'amber'
}