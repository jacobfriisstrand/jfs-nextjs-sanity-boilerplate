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

  const transformMenu = (menu: typeof navigationData.leftMenu) =>
    menu?.map((item: NonNullable<typeof navigationData.leftMenu>[number]) => ({
      ...item,
      label: item.label ?? undefined,
      linkType: item.linkType ?? undefined,
      url: item.url ?? undefined,
      page: item.page
        ? {
            _ref: item.page._id,
            _type: "reference" as const,
            _weak: false,
          }
        : undefined,
    })) ?? [];

  return (
    <NavigationWrapper
      leftMenu={transformMenu(navigationData.leftMenu)}
      rightMenu={transformMenu(navigationData.rightMenu)}
      contactInfo={contactInfo}
    />
  );
}
