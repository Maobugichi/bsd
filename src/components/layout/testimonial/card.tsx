import { CardStackProps } from '../../../types/testimonial.types';

interface CardProps extends CardStackProps {
  isTop: boolean;
  transform: string;
  isDragging: boolean;
  onDragStart: (e: React.MouseEvent | React.TouchEvent) => void;
  onDragMove: (e: React.MouseEvent | React.TouchEvent) => void;
  onDragEnd: () => void;
  onClick: () => void;
  zIndex: number;
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
      absolute w-full h-[73vh] sm:h-[75vh] md:h-[80vh] 
      shadow-xl cursor-pointer
      ${className}
      border border-white/10
      transition-all duration-300 ease-out
      ${isTop ? 'opacity-100' : 'opacity-75'}
      ${isDragging && isTop ? 'cursor-grabbing' : 'cursor-grab'}
    `}
    style={{ 
      transform, 
      top: 0, 
      left: 0, 
      zIndex: isTop ? 10 : zIndex 
    }}
    onMouseDown={isTop ? onDragStart : undefined}
    onMouseMove={onDragMove}
    onMouseUp={onDragEnd}
    onTouchStart={isTop ? onDragStart : undefined}
    onTouchMove={onDragMove}
    onTouchEnd={onDragEnd}
    onClick={!isDragging && isTop ? onClick : undefined}
  >
    <div className='tracking-wider font-roboto  text-md sm:text-base font-light'>{children}</div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent  sm:rounded-3xl pointer-events-none" />
    {isTop && (
      <div className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 w-10 sm:w-12 h-1 bg-white/30 rounded-full" />
    )}
  </div>
);