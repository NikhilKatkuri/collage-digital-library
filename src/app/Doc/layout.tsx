import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documents & Resources',
  description: 'Access important documents, assignments, lab manuals, and additional academic resources for HITAM engineering students.',
  keywords: [
    'HITAM documents',
    'academic documents',
    'assignments',
    'lab manuals',
    'project reports',
    'academic resources',
    'engineering documents',
    'HITAM resources',
    'study documents',
    'course materials'
  ],
  openGraph: {
    title: 'Documents & Resources | HITAM Digital Library',
    description: 'Access important documents, assignments, lab manuals, and additional academic resources.',
    url: '/Doc',
  },
  alternates: {
    canonical: 'https://collage-digital-library.vercel.app/Doc',
  },
};

export default function DocLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
