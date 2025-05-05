import type { PAGE_QUERYResult } from "@/sanity/types";

type FeaturesProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["modules"]>[number],
  { _type: "features" }
>;

export function Features({ features, title }: FeaturesProps) {
  return (
    <section className="container mx-auto flex flex-col gap-8 py-16 text-center">
      {title
        ? (
            <h2 className="text-3xl font-medium text-center">
              {title}
            </h2>
          )
        : null}

      {Array.isArray(features)
        ? (
            <div className="grid grid-cols-3 gap-8">
              {features.map(feature => (
                <div key={feature._key} className="flex flex-col gap-4">
                  <h3 className="text-xl font-medium">
                    {feature.title}
                  </h3>
                  <p className="text-base">{feature.text}</p>
                </div>
              ))}
            </div>
          )
        : null}
    </section>
  );
}
