import { useState, useEffect,useRef } from "react";
import { motion } from "motion/react";

import {
  Star,
  ShieldCheck,
  Award,
} from 'lucide-react';


type CardStackProps = {
    className:string;
    children:React.ReactNode
}

const cards:CardStackProps[] = [
  {
    className: 'bg-black row-span-3 col-span-2 w-full',
    children: (
      <div className="p-6 flex flex-col h-full gap-5">
        <div className="grid gap-3">
          <h1 className="text-xl md:text-3xl font-semibold mb-3 text-white">Reliable and Transparent</h1>
          <p className="text-sm md:text-lg leading-relaxed text-[#ccc]">
              “From the very beginning, the team showed outstanding transparency, professionalism, and responsiveness. Every phase of our warehouse expansion was managed with care and precision. They communicated clearly, met deadlines, and avoided cost overruns — a rare feat. Their commitment to safety and quality stood out, consistently meeting and exceeding standards. This is more than just a construction company — it's a dependable partner we’ll continue working with.”
          </p>
        </div>
        <div className="w-14 h-14 grid place-items-center border-2 rounded-full bg-[#2D5C52] mt-4">
          <ShieldCheck className="text-white w-7 h-7" />
        </div>
      </div>
    )
  },
  {
    className: 'bg-[#1A1A1A] row-span-5 col-span-2 w-full',
    children: (
      <div className="p-6 flex flex-col h-full gap-5">
        <div className="grid gap-3">
          <h1 className="text-xl md:text-3xl text-white font-semibold mb-3">Exceptional Quality & Design</h1>
          <p className="text-sm md:text-lg leading-relaxed text-[#ccc]">
           “They transformed our outdated office into a sleek, modern environment that is both visually impressive and highly functional. From HVAC and acoustics to lighting and layout, every detail was thoughtfully executed with a balance of creativity and technical expertise. Their ability to deliver a polished, performance-driven workspace truly exceeded our expectations. It was one of the most seamless and rewarding MEP and design experiences we've had.”
          </p>
        </div>
        <div className="w-14 h-14 grid place-items-center border-2 rounded-full bg-[#C47A00] mt-4">
          <Award className="text-white w-7 h-7" />
        </div>
      </div>
    )
  },
  {
    className: 'bg-[#B2BEB5] col-span-2 row-span-2 w-full',
    children: (
      <div className="p-6 flex flex-col h-full gap-5">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-white mb-3">Tech-Forward Thinking</h1>
          <p className="text-sm md:text-lg leading-relaxed text-gray-700">
           “They handled our data center cabling and VoIP deployment with impressive precision and efficiency. Every aspect of the infrastructure was planned and executed with care, minimizing downtime and ensuring a smooth transition. Since implementation, our systems have run reliably, and their support team has been both responsive and knowledgeable. If you're looking for a scalable, future-proof IT setup backed by a dependable team, they’re the ones to call.”
          </p>
        </div>
        <div className="w-14 h-14 grid place-items-center border-2 rounded-full bg-black mt-4">
          <Star className="text-white w-7 h-7" />
        </div>
      </div>
    )
  },
];


export const StackedCards = () => {
    const [ cardStack , setCardStack ]= useState<CardStackProps[]>(cards);
    const intervalRef = useRef<number | null>(null)
    const constraintsRef = useRef(null)
    const moveTopCardBack = () => {
        const [ top, ...rest ] = cardStack;
        setCardStack([...rest , top ])
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            moveTopCardBack()
        },4000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    },[cardStack])

    return(
        <div ref={constraintsRef} className="relative  w-[90%] md:w-[80%] h-[55vh] md:h-96 mx-auto mt-20 ">
            {
                cardStack.map((card:CardStackProps,index:number) => {
                    const isTop = index === 0;
                    const z = cards.length - index
                    return(
                         <motion.div
                            key={card.className}
                            className={`absolute w-full h-full rounded-2xl shadow-xl cursor-pointer flex items-center justify-center text-xl font-bold ${card.className} ${isTop ? 'opacity-100' : 'opacity-75'}`}
                            style={{
                                zIndex:z,
                                top:index * -20,
                                scale:1 - index * 0.04
                            }}
                            drag={isTop ? 'x' : false}
                            dragConstraints={constraintsRef}
                            dragDirectionLock
                            onDragEnd={() => {
                                moveTopCardBack();
                                //return { x: 0 };
                            }}
                            //whileTap={isTop ? { scale: 0.95 } : {}}
                            animate={{ x:  0,  }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                         >
                            {card.children}
                        </motion.div>
                    )
                })
            }
         
        </div>
        
    )
}