import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Class Notes',
  description: 'Access comprehensive class notes for all HITAM engineering branches and semesters. Download study materials and lecture notes for better exam preparation.',
  keywords: [
    'HITAM notes',
    'class notes', 
    'study materials',
    'lecture notes',
    'engineering notes',
    'HITAM study resources',
    'academic notes',
    'course materials'
  ],
  openGraph: {
    title: 'Class Notes | HITAM Digital Library',
    description: 'Access comprehensive class notes for all HITAM engineering branches and semesters.',
    url: '/notes',
  },
  alternates: {
    canonical: 'https://collage-digital-library.vercel.app/notes',
  },
};

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
