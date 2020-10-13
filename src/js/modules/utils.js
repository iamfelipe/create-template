export const sum = (a, b) => a + b;

export const scrollsTop = () => {
  if (window) {
    try {
      // The new API
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }
};