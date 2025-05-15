import Link from "next/link";

import type { CONTACT_INFO_QUERYResult } from "@/sanity/types";

type ContactInfoBannerProps = {
  contactInfo: CONTACT_INFO_QUERYResult;
  isOpen: boolean;
};

export default function ContactInfoBanner({ contactInfo, isOpen }: ContactInfoBannerProps) {
  return (
    <address className="border-t flex justify-between text-white border-white-o-50 pt-16 not-italic sm:w-1/2 sm:ml-auto md:hidden">
      <Link tabIndex={isOpen ? 0 : -1} href={`tel:${contactInfo?.contactInfo?.phone}`}>{contactInfo?.contactInfo?.phone}</Link>
      <Link tabIndex={isOpen ? 0 : -1} href={`mailto:${contactInfo?.contactInfo?.email}`}>{contactInfo?.contactInfo?.email}</Link>
    </address>
  );
}
