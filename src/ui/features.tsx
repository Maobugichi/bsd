import { motion } from "motion/react";
import { Header } from "../components/header";
import { Paragraph } from "../components/paragraph";
import { FeatureCard } from "./featureCard";

export const Feature = () => {
  return (
    <section className=" font-montserrat mt-20 md:mt-0 h-[230vh] md:h-[130vh] font-inter flex flex-col gap-5 text-black  text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 300, damping: 25 }}
      >
        <Header
          level={2}
          className="w-full mx-auto h-16 text-3xl md:text-4xl font-semibold "
        >
          Our Services
        </Header>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
      
      >
        <Paragraph
          className="font-roboto text-sm w-[90%] md:text-lg md:w-[70%] mx-auto "
          content={
            <>
              Whether you're improving your home, optimizing a workspace, or starting small-scale developments, our light construction services make it simple. No need for a large crew or complex planning — we handle renovations, fittings, drywall, partitions, finishes, and more. Quick setup, quality results, and the flexibility to build exactly what you need, when you need it.
            </>
          }
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 300, damping: 25 }}
        className="w-full"
      >
        <FeatureCard />
      </motion.div>
    </section>
  );
};