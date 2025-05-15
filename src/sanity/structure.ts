import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S =>
  S.list()
    .title("Menu")
    .items([
      S.documentTypeListItem("faq").title("FAQs"),
      S.divider().title("Pages"),
      S.listItem()
        .id("homePage")
        .schemaType("homePage")
        .title("Homepage")
        .child(
          S.editor()
            .id("homePage")
            .schemaType("homePage")
            .documentId("homePage"),
        ),
      S.documentTypeListItem("genericPage").title("Generic Pages"),
      S.documentTypeListItem("coursePage").title("Courses"),
      S.documentTypeListItem("productPage").title("Products"),
      S.divider().title("Settings"),
      S.listItem()
        .title("Global Settings")
        .icon(() => "🔧")
        .child(
          S.editor()
            .id("globalSettings")
            .schemaType("globalSettings")
            .documentId("globalSettings"),
        ),
      S.listItem()
        .title("Navigation")
        .icon(() => "🔗")
        .child(
          S.editor()
            .id("navigation")
            .schemaType("navigation")
            .title("Navigation")
            .documentId("navigation"),
        ),
      ...S.documentTypeListItems().filter(
        item =>
          item.getId()
          && !["genericPage", "faq", "globalSettings", "basePage", "homePage", "coursePage", "productPage", "navigation"].includes(item.getId()!),
      ),
    ]);
