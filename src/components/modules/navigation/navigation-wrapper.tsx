"use client";

import { useEffect, useState } from "react";

import type { CONTACT_INFO_QUERYResult, NavigationLink } from "@/sanity/types";

import NavigationHeader from "./navigation-header";
import NavigationMenu from "./navigation-menu";

type NavigationWrapperProps = {
  rightMenu: NavigationLink[];
  leftMenu: NavigationLink[];
  contactInfo: CONTACT_INFO_QUERYResult;
};

export default function NavigationWrapper({ leftMenu, rightMenu, contactInfo }: NavigationWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full">
      <NavigationHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavigationMenu
        leftMenu={leftMenu}
        rightMenu={rightMenu}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        contactInfo={contactInfo}
      />
    </header>
  );
}
