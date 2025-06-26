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
      S.documentTypeListItem("pageTypeOne").title("Page type one"),
      S.documentTypeListItem("pageTypeTwo").title("Page type two"),
      S.divider().title("Settings"),
      S.listItem()
        .title("Global settings")
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
      S.listItem()
        .title("Not found page")
        .icon(() => "🚨")
        .child(
          S.editor()
            .id("notFoundPage")
            .schemaType("notFoundPage")
            .title("Not found page")
            .documentId("notFoundPage"),
        ),
      ...S.documentTypeListItems().filter(
        item =>
          item.getId()
          && !["pageTypeOne", "faq", "globalSettings", "basePage", "homePage", "pageTypeTwo", "navigation", "notFoundPage"].includes(item.getId()!),
      ),
    ]);
