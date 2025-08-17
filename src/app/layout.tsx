import type { Metadata } from 'next';
import '@/styles/globals.css';
import { SearchProvider } from '@/context/SearchContext';
import brunch from '@/data/brunch';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  title: {
    default: 'HITAM Digital Library | Syllabus, Notes & Question Papers',
    template: '%s | HITAM Digital Library'
  },
  description:
    'Access HITAM Digital Library for syllabus copies, class notes, assignments, and previous semester/mid exam question papers. Free and accessible anytime for HITAM students.',
  keywords: [
    'HITAM Digital Library',
    'HITAM Notes',
    'HITAM Question Papers',
    'HITAM Syllabus',
    'HITAM Assignments',
    'HITAM Previous Papers',
    'HITAM Course Files',
    'HITAM Engineering',
    'Hyderabad Institute of Technology and Management',
    'HITAM Resources',
    'Engineering Notes',
    'Study Materials',
    'Academic Resources',
    'College Library',
    'Digital Repository'
  ],
  authors: [{ name: 'Nikhil' }, { name: 'HITAM Digital Library Team' }],
  creator: 'Nikhil',
  publisher: 'HITAM Digital Library',
  category: 'Education',
  classification: 'Educational Resources',
  metadataBase: new URL('https://collage-digital-library.vercel.app'),
  openGraph: {
    title: 'HITAM Digital Library | Notes, Syllabus & Papers',
    description:
      'One-stop portal for HITAM students to access syllabus, notes, assignments, and previous question papers anytime, anywhere.',
    url: 'https://collage-digital-library.vercel.app',
    siteName: 'HITAM Digital Library',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HITAM Digital Library - Access syllabus, notes, and question papers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HITAM Digital Library | Notes, Syllabus & Papers',
    description: 'Access HITAM study materials, syllabus, notes, and question papers - all in one place.',
    images: ['/og-image.png'],
    creator: '@hitam_library',
    site: '@hitam_library'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://collage-digital-library.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  other: {
    'application-name': 'HITAM Digital Library',
    'apple-mobile-web-app-title': 'HITAM Library',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileColor': '#08090a',
    'msapplication-tap-highlight': 'no',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#08090a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data for Educational Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              "areaServed": "India",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Educational Resources",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Engineering Course Materials",
                      "description": "Syllabus, notes, and question papers for various engineering branches"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
      </head>
      <body className="">
        {/* Add your Google Analytics measurement ID here */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <SearchProvider data={brunch}>{children}</SearchProvider>
      </body>
    </html>
  );
}
