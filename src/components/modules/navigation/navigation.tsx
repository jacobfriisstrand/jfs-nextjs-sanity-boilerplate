import { transformNavigationLinks } from "@/lib/utils/transform-navigation-link";
import { sanityFetch } from "@/sanity/lib/live";
import { CONTACT_INFO_QUERY, NAVIGATION_QUERY } from "@/sanity/lib/queries";

import NavigationWrapper from "./navigation-wrapper";

export default async function Navigation() {
  const [{ data: navigationData }, { data: contactInfo }] = await Promise.all([
    sanityFetch({
      query: NAVIGATION_QUERY,
    }),
    sanityFetch({
      query: CONTACT_INFO_QUERY,
    }),

  ]);

  if (!navigationData || !contactInfo?.contactInfo) {
    return null;
  }

  return (
    <NavigationWrapper
      leftMenu={transformNavigationLinks(navigationData.leftMenu)}
      rightMenu={transformNavigationLinks(navigationData.rightMenu)}
      contactInfo={contactInfo}
    />
  );
}
