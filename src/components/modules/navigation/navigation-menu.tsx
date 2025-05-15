"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

import type { CONTACT_INFO_QUERYResult, NavigationLink } from "@/sanity/types";

import { NAVIGATION_ANIMATION } from "@/components/modules/navigation/constants/navigation-animation";
import ContactInfoBanner from "@/components/modules/navigation/contact-info-banner";
import { useScrollTrigger } from "@/components/modules/navigation/hooks/use-scroll-trigger";

gsap.registerPlugin();

type NavigationMenuProps = {
  leftMenu: NavigationLink[];
  rightMenu: NavigationLink[];
  isOpen: boolean;
  onClose: () => void;
  contactInfo: CONTACT_INFO_QUERYResult;
  onAnimationComplete?: () => void;
};

export default function NavigationMenu({ leftMenu, rightMenu, isOpen, onClose, contactInfo, onAnimationComplete }: NavigationMenuProps) {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const mediaQuery = gsap.matchMedia();

      // Mobile menu animation
      mediaQuery.add("(max-width: 1025px)", () => {
        const listItems = gsap.utils.toArray<HTMLElement>("nav ul li");
        const nav = container.current;

        if (!nav)
          return;

        tl.current = gsap
          .timeline({
            defaults: {
              duration: NAVIGATION_ANIMATION.DURATION.MENU,
              ease: NAVIGATION_ANIMATION.EASE,
            },
            onReverseComplete: onAnimationComplete,
          })
          .fromTo(
            nav,
            {
              opacity: 0,
              visibility: "hidden",
              pointerEvents: "none",
            },
            {
              opacity: 1,
              visibility: "visible",
              pointerEvents: "auto",
              backgroundColor: "var(--color-black-o-70)",
              backdropFilter: "blur(10px)",
              duration: NAVIGATION_ANIMATION.DURATION.MENU,
            },
          )
          .fromTo(
            listItems,
            {
              clipPath: "inset(-100% -10% 100% -10%)",
              translate: "0 100% 0",
              transition: "translate .6s var(--ease-cubic), clip-path .6s var(--ease-cubic)",
            },
            {
              clipPath: "inset(0 0% 0 0)",
              transition: "translate .6s var(--ease-cubic), clip-path .6s var(--ease-cubic)",
              translate: "0 0 0",
              stagger: NAVIGATION_ANIMATION.DURATION.STAGGER,
            },
            "-=0.2",
          )
          .reverse();
      });
    },
    { scope: container },
  );

  useScrollTrigger({
    elementRef: container,
    mediaQuery: "(min-width: 1026px)",
  });

  useGSAP(
    () => {
      if (tl.current) {
        tl.current.reversed(!isOpen);
      }
    },
    { dependencies: [isOpen] },
  );

  const renderMenuLinks = (links: NavigationLink[]) => (
    links.map((link) => {
      if (!link.label)
        return null;

      return (
        <li key={link.label} className="w-full">
          <Link
            href={link.url || "/"}
            className={`${pathname === link.url ? "underline" : ""} w-full`}
            target={link.linkType === "external" ? "_blank" : undefined}
            onClick={onClose}
            tabIndex={isOpen ? 0 : -1}
          >
            {link.label}
          </Link>
        </li>
      );
    })
  );

  return (
    <div
      ref={container}
      className="nav bg-transparent"
    >
      <nav
        aria-hidden={!isOpen}
        aria-expanded={isOpen}
      >
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-16 md:gap-[200px]">
          <ul className="md:flex md:justify-start w-full md:w-auto">
            {renderMenuLinks(leftMenu)}
          </ul>
          <ul className="md:flex md:justify-end w-full md:w-auto">
            {renderMenuLinks(rightMenu)}
          </ul>
        </div>
      </nav>
      <ContactInfoBanner contactInfo={contactInfo} isOpen={isOpen} />
    </div>
  );
}
