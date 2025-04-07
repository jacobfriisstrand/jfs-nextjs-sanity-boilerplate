import { ImageResponse } from "next/og";

export const runtime = "edge";

const dimensions = {
  width: 1200,
  height: 630,
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  return new ImageResponse(
    (
      <div tw="flex w-full h-full bg-blue-500 text-white p-10">
        <h1 tw="text-6xl font-bold">{title || "Missing title parameter"}</h1>
      </div>
    ),
    dimensions,
  );
}
