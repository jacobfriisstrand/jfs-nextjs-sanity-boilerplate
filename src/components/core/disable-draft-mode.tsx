"use client";

import { useVisualEditingEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
  const environment = useVisualEditingEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (
    environment === "presentation-iframe"
    || environment === "presentation-window"
  ) {
    return null;
  }

  return (
    <a
      href="/api/draft-mode/disable"
      className="fixed bottom-4 right-4 bg-gray-50 px-4 py-2"
    >
      Disable Draft Mode
    </a>
  );
}
