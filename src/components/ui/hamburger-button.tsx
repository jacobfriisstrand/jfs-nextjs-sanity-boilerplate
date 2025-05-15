"use client";

import type { ButtonHTMLAttributes, SVGProps } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type HamburgerButtonProps = {
  svgProps?: SVGProps<SVGSVGElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  isOpen?: boolean;
};

export function HamburgerButton({ ref, svgProps, buttonProps, isOpen }: HamburgerButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!buttonRef.current)
        return;

      tl.current = gsap
        .timeline({
          defaults: { duration: 0.3, ease: "power2.inOut" },
          paused: true,
        })
        .to(buttonRef.current, {
          rotation: 45,
          color: "var(--color-white)",
          duration: 0.3,
        });
    },
    { scope: buttonRef },
  );

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
    <button
      ref={ref}
      type="button"
      {...buttonProps}
      className={cn("size-24", buttonProps?.className)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" {...svgProps}>
        {/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
        <path fill="currentColor" d="M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z"></path>
      </svg>
    </button>
  );
}

HamburgerButton.displayName = "HamburgerButton";

export default HamburgerButton;
