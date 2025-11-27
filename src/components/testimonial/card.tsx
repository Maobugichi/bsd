import { CardStackProps } from './types';

interface CardProps extends CardStackProps {
  isTop: boolean;
  transform: string;
  isDragging: boolean;
  onDragStart: (e: React.MouseEvent | React.TouchEvent) => void;
  onDragMove: (e: React.MouseEvent | React.TouchEvent) => void;
  onDragEnd: () => void;
  onClick: () => void;
  zIndex:number
}

export const Card = ({
  children,
  className,
  isTop,
  transform,
  isDragging,
  onDragStart,
  onDragMove,
  onDragEnd,
  onClick,
  zIndex
}: CardProps) => (
  <div
    className={`
      absolute w-full h-full rounded-3xl shadow-xl cursor-pointer
      ${className}
      border border-white/10
      transition-all duration-300 ease-out z-[${zIndex}]
      ${isTop ? 'opacity-100' : 'opacity-75'}
      ${isDragging && isTop ? 'cursor-grabbing' : 'cursor-grab'}
    `}
    style={{ transform, top: 0, left: 0, zIndex: isTop ? 10 : 1 }}
    onMouseDown={isTop ? onDragStart : undefined}
    onMouseMove={onDragMove}
    onMouseUp={onDragEnd}
    onTouchStart={isTop ? onDragStart : undefined}
    onTouchMove={onDragMove}
    onTouchEnd={onDragEnd}
    onClick={!isDragging && isTop ? onClick : undefined}
  >
    {children}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none" />
    {isTop && <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full" />}
  </div>
);
