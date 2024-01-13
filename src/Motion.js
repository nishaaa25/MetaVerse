export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export const imgVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 10,
    transition: {
      delay: 0.2,
      duration: 1.2,
    },
  },
};
export const textVariants = {
  hidden: { y: "40px", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      type: "spring",
    },
  },
};
export const headingTextVariants = {
  hidden: { y: "60px", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};
export const AboutTextVariants = {
  hidden: { y: "100px", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 2,
      type: "spring",
    },
  },
};
export const taglineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
export const staggerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration:1,
      type: "spring",
      staggerChildren: 0.5,
    },
  },
};
export const planetVariants = {
  hidden: {
    opacity: 0,
    x: "-90px",
    z: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    z: 30,
    transition: {
      duration: 0.3,
    },
  },
};
export const sideTextVariants = {
  hidden: {
    x: "10%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
    },
  },
};
export const sideTextVariants2 = {
  hidden: {
    x: "-10%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
    },
  },
};
export const guidePlanetImgVariants = {
  hidden: {
    rotate: "140deg",
    x: "-600px",
  },
  visible: {
    rotate: 0,
    x: 0,
    transition: {
      delay: 0.7,
      duration: 1,
    },
  },
};
export const whatsnewPlanetImgVariants = {
  hidden: {
    rotate: "140deg",
    x: "600px",
  },
  visible: {
    rotate: 0,
    x: 0,
    transition: {
      delay: 0.7,
      duration: 1,
    },
  },
};
export const mapVariants = {
  hidden: {
    y: "120px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 1,
    },
  },
};
export const planetVariants2 = {
  hidden: { opacity: 0, y: "200px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};
export const founderTextVariants = {
  hidden: { opacity: 0, x: "-200px" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      duration: 1,
    },
  },
};
export const founderIMgVariants = {
  hidden: { opacity: 0, x: "200px" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      duration: 1,
    },
  },
};
export const stampVariants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 1,
    },
  },
};
export const footerVariants = {
  hidden: {
    y: "10vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.6,
    },
  },
};
