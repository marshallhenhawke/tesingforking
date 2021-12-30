// import { gsap, ScrollTrigger } from "gsap/all";

export default {
  mounted() {
    // Comes from plugin
    this.$asScroll.enable(
      false,
      true,
      document.querySelector(".innerscroller")
    );
  },

  beforeDestroy() {
    // Comes from plugin
    this.$asScroll.disable();
  }
};
