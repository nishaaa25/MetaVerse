export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};
export const imgVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.2,
      duration: 1.2,
    },
  },
};
export const textVariants = {
  hidden: { y: "40px" },
  visible: {
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.7,
      type: "spring",
    },
  },
};
