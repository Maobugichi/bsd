export const cardVariants: Record<string, any> = {
  hidden: { opacity: 0, y: 100, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], 
    },
  }),
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: '0px 12px 25px rgba(0,0,0,0.1)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};