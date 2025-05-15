import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { NAVIGATION_ANIMATION } from "@/components/modules/navigation/constants/navigation-animation";

gsap.registerPlugin(ScrollTrigger);

type UseScrollTriggerProps = {
  elementRef: React.RefObject<HTMLElement | null>;
  mediaQuery?: string;
  backgroundColor?: string;
  duration?: number;
  start?: string;
  end?: string;
  toggleActions?: string;
  showMarkers?: boolean;
  isOpen?: boolean;
};

export function useScrollTrigger({
  elementRef,
  mediaQuery = "(max-width: 1026px)",
  backgroundColor = "var(--color-black)",
  duration = NAVIGATION_ANIMATION.DURATION.HAMBURGER,
  toggleActions = "play none none reverse",
  showMarkers = false,
  isOpen = false,
}: UseScrollTriggerProps) {
  useGSAP(
    () => {
      if (!elementRef.current)
        return;

      const mediaQueryInstance = gsap.matchMedia();

      mediaQueryInstance.add(mediaQuery, () => {
        // Kill any existing ScrollTrigger instances
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        gsap.to(elementRef.current, {
          scrollTrigger: {
            scrub: 1,
            start: () => `${innerHeight / 2}top`,
            end: () => `${innerHeight / 2}top`,
            toggleActions,
            markers: showMarkers
              ? {
                  startColor: "green",
                  endColor: "red",
                  fontSize: "12px",
                  indent: 20,
                }
              : false,
          },
          backgroundColor: isOpen ? "transparent" : backgroundColor,
          duration,
          ease: NAVIGATION_ANIMATION.EASE,
        });
      });
    },
    { scope: elementRef, dependencies: [isOpen] },
  );
}
