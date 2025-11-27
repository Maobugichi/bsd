 import {
  Settings,
  Building2,
  UserCheck,
  CircuitBoard,
  ClipboardList
} from 'lucide-react';

type IconKey = 'settings' | 'building2' | 'userCheck' | 'circuitBoard' | 'clipboardList';




export const icons:Record<IconKey, React.FC<React.SVGProps<SVGSVGElement>>> = {
  settings: Settings,
  building2: Building2,
  userCheck: UserCheck,
  circuitBoard: CircuitBoard,
  clipboardList: ClipboardList
};