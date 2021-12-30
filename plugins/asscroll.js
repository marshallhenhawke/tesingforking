import Vue from "vue";

import ASSCroll from "@ashthornton/asscroll";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const asscrollOptions = {
  // disableRaf: true,
  // ease: 0.075 // default
  // customScrollbar: true
};

const asScroll = new ASSCroll(asscrollOptions);

document.documentElement.scrollTop = 0;

// each time asScroll updates, tell ScrollTrigger to update too (sync positioning)
asScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.defaults({
  scroller: ".innerscroller",
  markers: true
});

ScrollTriggerProxy();

asScroll.on("raf", ScrollTrigger.update);

ScrollTrigger.addEventListener("refresh", () => asScroll.onResize());

// after everything is set up, refresh() ScrollTrigger and update asscroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

asScroll.enable(false, true, document.querySelector(".innerscroller"));
asScroll.onResize(window.innerWidth, window.innerHeight);

function ScrollTriggerProxy() {
  return ScrollTrigger.scrollerProxy(".innerscroller", {
    scrollTop(value) {
      return arguments.length
        ? asScroll.scrollTo(value)
        : -asScroll.smoothScrollPos;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  });
}

Object.defineProperty(Vue.prototype, "gsap", {
  value: gsap
});
Object.defineProperty(Vue.prototype, "ScrollTrigger", {
  value: ScrollTrigger
});

export default (context, inject) => {
  inject("asScroll", asScroll);
};
