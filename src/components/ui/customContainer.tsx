import { ReactNode, useRef } from "react";
import { useCardStackAnimation } from "@/hook";
import { useMediaQuery } from "react-responsive";

interface CustomContainerProps<T> {
  items: readonly T[];
  id?: string;
  renderCard: (item: T, index: number, ref: (el: HTMLDivElement | null) => void) => ReactNode;
  className?: string;
  enableAnimation?:boolean,
  cardsRef?: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export function CustomConatiner<T>({
  items,
  id = "stack-cards",
  renderCard,
  className = "",
  cardsRef
}: CustomContainerProps<T>) {

  
const isMobile = useMediaQuery({ maxWidth: 767 });
const internalRef = useRef<(HTMLDivElement | null)[]>([]);
const finalRef = cardsRef ?? internalRef;

  useCardStackAnimation({
    cardsRef:finalRef,
    id,
    enabled:isMobile
  });

  return (
    <div className={`flex flex-col h-fit  ${className}`}>
      {items.map((item, i) =>
        renderCard(item, i, (el) => (finalRef.current[i] = el))
      )}
    </div>
  );
}
