export const fadeInDropAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { duration: 0.3, delay: 0.2 },
  variants: {
    visible: { translateY: 0, opacity: 1 },
    hidden: { translateY: "-30px", opacity: 0 },
  },
};

export const fadeInSlideAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { duration: 0.3, delay: 0.2 },
  variants: {
    visible: { translateY: 0, opacity: 1 },
    hidden: { translateY: "-30px", opacity: 0 },
  },
};
