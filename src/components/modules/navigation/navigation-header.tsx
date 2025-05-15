"use client";

import { useGSAP } from "@gsap/react";
import Logo from "@public/assets/black-logo.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import { NAVIGATION_ANIMATION } from "@/components/modules/navigation/constants/navigation-animation";
import { useScrollTrigger } from "@/components/modules/navigation/hooks/use-scroll-trigger";
import HamburgerButton from "@/components/ui/hamburger-button";

type NavigationHeaderProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

gsap.registerPlugin(ScrollTrigger);

export default function NavigationHeader({ isOpen, setIsOpen }: NavigationHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!hamburgerRef.current)
        return;

      tl.current = gsap
        .timeline({
          defaults: {
            duration: NAVIGATION_ANIMATION.DURATION.HAMBURGER,
            ease: NAVIGATION_ANIMATION.EASE,
          },
          paused: true,
        })
        .to(hamburgerRef.current, {
          rotation: NAVIGATION_ANIMATION.ROTATION.HAMBURGER,
          duration: NAVIGATION_ANIMATION.DURATION.HAMBURGER,
        });
    },
    { scope: headerRef },
  );

  useScrollTrigger({
    elementRef: headerRef,
    mediaQuery: "(max-width: 1026px)",
    isOpen,
  });

  // Add effect to control timeline based on isOpen state
  useGSAP(
    () => {
      if (tl.current) {
        if (isOpen) {
          tl.current.play();
        }
        else {
          tl.current.reverse();
        }
      }
    },
    { dependencies: [isOpen] },
  );

  return (
    <div ref={headerRef} className="flex flex-col items-center justify-center gap-4 px-16 py-12 z-[200] relative md:w-fit bg-transparent">
      <div className="grid grid-cols-3 items-center justify-center gap-4 w-full md:grid-cols-1 md:w-fit">
        <Link href="/" className="col-start-2 w-fit mx-auto md:col-start-1 flex justify-center md:fixed md:top-12 md:left-1/2 md:translate-x-[-50%]" onClick={() => setIsOpen(false)}>
          <Logo className="w-[100px]" fill="var(--color-white)" />
        </Link>
        <HamburgerButton
          ref={hamburgerRef}
          isOpen={isOpen}
          buttonProps={{
            "className": "col-start-3 justify-self-end md:hidden text-white",
            "type": "button",
            "aria-label": isOpen ? "Luk menu" : "Åben menu",
            "onClick": () => setIsOpen(!isOpen),
          }}
        />
      </div>
    </div>
  );
}
