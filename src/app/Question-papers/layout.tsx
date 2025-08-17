import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Question Papers',
  description: 'Access previous semester and mid-term examination question papers for all HITAM engineering branches. Download past exam papers for better preparation.',
  keywords: [
    'HITAM question papers',
    'previous papers',
    'exam papers',
    'past papers',
    'semester papers',
    'mid-term papers',
    'engineering question papers',
    'HITAM exams',
    'test papers',
    'sample papers'
  ],
  openGraph: {
    title: 'Question Papers | HITAM Digital Library',
    description: 'Access previous semester and mid-term examination question papers for all HITAM engineering branches.',
    url: '/Question-papers',
  },
  alternates: {
    canonical: 'https://collage-digital-library.vercel.app/Question-papers',
  },
};

export default function QuestionPapersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
