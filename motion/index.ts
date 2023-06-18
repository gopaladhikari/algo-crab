export const navVariant = {
  hidden: {
    y: -80,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      dampling: 20,
      stiffness: 110,
      mass: 0.75,
    },
  },
};
