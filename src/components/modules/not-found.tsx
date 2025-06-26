import Link from "next/link";

import type { ExtendedNavigationLink } from "@/lib/utils/transform-navigation-link";
import type { NavigationLink } from "@/sanity/types";

import { getNavigationHref } from "@/lib/utils/transform-navigation-link";

type NotFoundProps = {
  linkList: NavigationLink[];
};

export default function NotFound({ linkList }: NotFoundProps) {
  return (
    <div>
      {linkList.map((link, index) => (
        <li key={index}>
          <Link
            href={getNavigationHref(link as ExtendedNavigationLink)}
            className="text-white hover:underline"
            target={link.linkType === "external" ? "_blank" : undefined}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </div>
  );
}
