'use client';

interface StructuredDataProps {
  data: object;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  );
}

// Common structured data schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "HITAM Digital Library",
  "alternateName": "Hyderabad Institute of Technology and Management Digital Library",
  "url": "https://collage-digital-library.vercel.app",
  "logo": "https://collage-digital-library.vercel.app/logo.svg",
  "description": "Digital library providing access to syllabus, notes, assignments, and question papers for HITAM students",
  "sameAs": [
    "https://github.com/NikhilKatkuri/collage-digital-library"
  ],
  "serviceType": "Educational Resource Platform",
  "areaServed": "India"
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HITAM Digital Library",
  "url": "https://collage-digital-library.vercel.app",
  "description": "Access HITAM Digital Library for syllabus copies, class notes, assignments, and previous semester/mid exam question papers",
  "publisher": {
    "@type": "Organization",
    "name": "HITAM Digital Library",
    "logo": {
      "@type": "ImageObject",
      "url": "https://collage-digital-library.vercel.app/logo.svg"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://collage-digital-library.vercel.app/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
