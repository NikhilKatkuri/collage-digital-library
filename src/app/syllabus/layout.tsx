import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Syllabus',
  description: 'Download official syllabus for all HITAM engineering courses and branches. Get the latest curriculum and course structure for academic planning.',
  keywords: [
    'HITAM syllabus',
    'course syllabus',
    'engineering syllabus',
    'academic curriculum',
    'course structure',
    'HITAM curriculum',
    'semester syllabus',
    'degree syllabus'
  ],
  openGraph: {
    title: 'Syllabus | HITAM Digital Library',
    description: 'Download official syllabus for all HITAM engineering courses and branches.',
    url: '/syllabus',
  },
  alternates: {
    canonical: 'https://collage-digital-library.vercel.app/syllabus',
  },
};

export default function SyllabusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
