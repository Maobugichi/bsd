import { Header } from "../ui/header";
import { Paragraph } from "../ui/paragraph";
import  FeatureCard  from "../services/featureCard";
import { forwardRef } from "react";
import { Layers } from "lucide-react";
import { ShimmerBadge } from "../ui/shimmerBadge";
export const Feature = forwardRef<HTMLElement>((_props,ref) => {
  return (
    <section ref={ref} className="font-montserrat md:py-20 pt-10 pb-28 h-fit  font-inter flex flex-col gap-5 text-black  text-left">
      <div className="w-[85%] [@media(min-width:1020px)_and_(max-width:1024px)]:w-[75%] mx-auto grid gap-10">
        <div className="grid gap-5 md:gap-0">
          <ShimmerBadge text="Services" icon={Layers} width="w-32"/>
          <Header
            level={2}
            className=" md:h-16 text-3xl md:text-4xl font-semibold"
          >
            Our Services
          </Header>
    
          <Paragraph
            className=""
            content={
              <>
                Whether you're improving your home, optimizing a workspace, or starting small-scale developments, our light construction services make it simple. No need for a large crew or complex planning  we handle renovations, fittings, drywall, partitions, finishes, and more. Quick setup, quality results, and the flexibility to build exactly what you need, when you need it.
              </>
            }
          />
        </div>
      
        <FeatureCard />
       </div>
    </section>
  );
});