import Script from "next/script"

interface SEOSchemaProps {
  schema: Record<string, any>
}

export function SEOSchema({ schema }: SEOSchemaProps) {
  return (
    <Script
      id="seo-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

interface BreadcrumbProps {
  items: Array<{ name: string; url: string }>
}

export function BreadcrumbSchema({ items }: BreadcrumbProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <SEOSchema schema={schema} />
}
