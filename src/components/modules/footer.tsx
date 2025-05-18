import type { Organization, WithContext } from "schema-dts";

import Logo from "@public/assets/black-logo.svg";
import Instagram from "@public/assets/instagram-logo.svg";
import LinkedIn from "@public/assets/linkedin-logo.svg";
import Link from "next/link";

import type { FOOTER_QUERYResult } from "@/sanity/types";

import { JSONLD } from "@/components/json-ld";
import { sanityFetch } from "@/sanity/lib/live";
import { FOOTER_QUERY } from "@/sanity/lib/queries";

type FooterProps = NonNullable<FOOTER_QUERYResult>;

function generateFooterData(footerData: FooterProps): WithContext<Organization> {
  const organizationData: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": footerData.companyName || undefined,
    "address": footerData.address
      ? {
          "@type": "PostalAddress",
          "streetAddress": `${footerData.address.streetName} ${footerData.address.streetNumber}`,
          "addressLocality": footerData.address.city || undefined,
          "postalCode": footerData.address.zipCode || undefined,
          "addressRegion": footerData.address.floor || undefined,
        }
      : undefined,
    "contactPoint": footerData.contactInfo
      ? [{
          "@type": "ContactPoint",
          "telephone": footerData.contactInfo.phone || undefined,
          "email": footerData.contactInfo.email || undefined,
          "contactType": "customer service",
        }]
      : undefined,
    "sameAs": [
      ...(footerData.socialLinks?.instagram ? [footerData.socialLinks.instagram] : []),
      ...(footerData.socialLinks?.linkedIn ? [footerData.socialLinks.linkedIn] : []),
    ],
  };

  return organizationData;
}

export default async function Footer() {
  const { data: footerData } = await sanityFetch({
    query: FOOTER_QUERY,
  });

  if (!footerData)
    return null;

  const organizationData = generateFooterData(footerData);

  return (
    <div className="wrapper pb-20">
      <footer>
        <JSONLD data={organizationData} />
        <div className="grid grid-cols-[auto_auto] items-center *:p-12 border border-black *:size-full">
          <address className="not-italic contents *:p-12 *:size-full *:flex *:items-center">
            {footerData?.contactInfo?.email && (
              <div className="border-b border-black">
                <Link className="link-hover-opacity" href={`mailto:${footerData.contactInfo.email}`}>{footerData.contactInfo.email}</Link>
              </div>
            )}
            {footerData?.contactInfo?.phone && (
              <div className="border-b border-black">
                <Link className="link-hover-opacity" href={`tel:${footerData.contactInfo.phone}`}>{footerData.contactInfo.phone}</Link>
              </div>
            )}

            {footerData?.address?.streetName && footerData?.address?.streetNumber && footerData?.address?.zipCode && footerData?.address?.city && footerData?.address?.floor && (
              <div className="col-start-1 border-b border-black md:border-none md:row-span-2 md:row-start-3 md:items-end">
                <p>
                  {footerData.address.streetName}
                  {" "}
                  {footerData.address.streetNumber}
                  <br />
                  {footerData.address.floor}
                  <br />
                  {footerData.address.zipCode}
                  {" "}
                  {footerData.address.city}
                </p>
              </div>
            )}
          </address>
          <div className="border-b border-black col-start-2 row-start-1">
            <Logo className="max-w-[100px] ml-auto" fill="var(--color-black)" />
          </div>
          <div className="border-b border-black col-start-2 row-start-2">
            {footerData?.socialLinks && (
              <nav aria-label="Social Links" className="flex gap-4 justify-self-end">
                {footerData.socialLinks.instagram && (
                  <Link aria-label="Instagram" href={footerData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="link-hover-opacity">
                    <Instagram fill="var(--color-black)" className="m-4" />
                  </Link>
                )}
                {footerData.socialLinks.linkedIn && (
                  <Link aria-label="LinkedIn" href={footerData.socialLinks.linkedIn} target="_blank" rel="noopener noreferrer" className="link-hover-opacity">
                    <LinkedIn fill="var(--color-black)" className="m-4" />
                  </Link>
                )}
              </nav>
            )}
          </div>
          {footerData?.vatNumberObject && (
            <div className="col-start-2 row-start-3 flex justify-end items-end flex-col border-b border-black md:border-none">
              <p className=" text-xs text-right text-balance">
                {footerData.vatNumberObject.vatNumberHeading}
                <br />
                {footerData.vatNumberObject.vatNumber}
              </p>
            </div>
          )}
          {footerData?.copyright && <p className="col-start-1 col-span-2 text-xs text-center md:text-right md:row-start-4">{footerData.copyright}</p>}
        </div>
      </footer>
    </div>
  );
}
