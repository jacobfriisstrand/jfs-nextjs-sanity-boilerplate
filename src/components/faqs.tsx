import type { FAQPage, WithContext } from "schema-dts";

import { PortableText } from "next-sanity";

import type { PAGE_QUERYResult } from "@/sanity/types";

import { JSONLD } from "./json-ld";

function generateFaqData(faqs: FAQsProps["faqs"]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs?.map(faq => ({
      "@type": "Question",
      "name": faq.title!,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.text!,
      },
    })),
  };
}

type FAQsProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["pageBuilder"]>[number],
  { _type: "faqs" }
>;

export function FAQs({ _key, title, faqs }: FAQsProps) {
  const faqData = generateFaqData(faqs);

  return (
    <section className="mx-auto flex flex-col gap-8 py-16">
      <JSONLD data={faqData} />
      {title
        ? (
            <h2 className="text-3xl font-medium text-center">
              {title}
            </h2>
          )
        : null}
      {Array.isArray(faqs)
        ? (
            <div className="max-w-2xl mx-auto border-b">
              {faqs.map(faq => (
                <details
                  key={faq._id}
                  className="px-4 border-t"
                  name={_key}
                >
                  <summary className="text-xl font-medium list-none cursor-pointer py-4 flex items-center justify-between">
                    {faq.title}
                    <span className="transform origin-center rotate-90 group-open:-rotate-90 transition-transform duration-200">
                      &larr;
                    </span>
                  </summary>
                  <div className="pb-4">
                    {faq.body ? <PortableText value={faq.body} /> : null}
                  </div>
                </details>
              ))}
            </div>
          )
        : null}
    </section>
  );
}
