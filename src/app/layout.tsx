import type { Metadata } from "next";
import "@/styles/globals.css";

// raw data taken from Chatgpt
export const metadata: Metadata = {
  title: "HITAM Digital Library | Syllabus, Notes & Question Papers",
  description:
    "HITAM Digital Library provides syllabus copies, notes, course files, and previous question papers for HITAM students. Accessible anytime, anywhere.",
  keywords: [
    "HITAM Digital Library",
    "HITAM Notes",
    "HITAM Question Papers",
    "HITAM Syllabus",
    "HITAM Engineering",
    "Hyderabad Institute of Technology and Management",
  ],
  authors: [{ name: "HITAM Digital Library Team" }],
  creator: "HITAM Digital Library",
  publisher: "HITAM Campus",
  metadataBase: new URL("https://your-app.vercel.app"), // replace with actual vercel/custom domain
  openGraph: {
    title: "HITAM Digital Library",
    description:
      "Access HITAM syllabus, notes, and previous question papers in one place.",
    url: "https://your-app.vercel.app", // update after deploy
    siteName: "HITAM Digital Library",
    images: [
      {
        url: "https://your-app.vercel.app/og-image.png", // add preview image in /public
        width: 1200,
        height: 630,
        alt: "HITAM Digital Library",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HITAM Digital Library",
    description:
      "A one-stop portal for HITAM students with syllabus, notes, and question papers.",
    images: ["https://your-app.vercel.app/og-image.png"],
    creator: "@your_twitter_handle", // optional
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://your-app.vercel.app",
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
      </head>
      <body className="">{children}</body>
    </html>
  );
}
