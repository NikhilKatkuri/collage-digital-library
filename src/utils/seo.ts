import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

const BASE_URL = 'https://collage-digital-library.vercel.app';
const DEFAULT_IMAGE = '/og-image.png';

export function generateSEO({
  title,
  description,
  keywords = [],
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  publishedTime,
  modifiedTime,
}: SEOProps): Metadata {
  const fullTitle = title.includes('HITAM') ? title : `${title} | HITAM Digital Library`;
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  // Default keywords
  const defaultKeywords = [
    'HITAM',
    'Digital Library',
    'Engineering',
    'Education',
    'Study Materials',
    'Academic Resources',
  ];

  const allKeywords = [...new Set([...keywords, ...defaultKeywords])];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'HITAM Digital Library',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - HITAM Digital Library`,
        },
      ],
      locale: 'en_US',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@hitam_library',
      site: '@hitam_library',
    },
    alternates: {
      canonical: url,
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
  };
}

// Pre-configured SEO for common pages
export const pageSEO = {
  home: generateSEO({
    title: 'HITAM Digital Library | Syllabus, Notes & Question Papers',
    description: 'Access HITAM Digital Library for syllabus copies, class notes, assignments, and previous semester/mid exam question papers. Free and accessible anytime for HITAM students.',
    keywords: ['HITAM Digital Library', 'HITAM Notes', 'HITAM Question Papers', 'HITAM Syllabus'],
  }),
  
  notes: generateSEO({
    title: 'Class Notes',
    description: 'Access comprehensive class notes for all HITAM engineering branches and semesters. Download study materials and lecture notes for better exam preparation.',
    keywords: ['class notes', 'study materials', 'lecture notes', 'engineering notes'],
    path: '/notes',
  }),
  
  syllabus: generateSEO({
    title: 'Syllabus',
    description: 'Download official syllabus for all HITAM engineering courses and branches. Get the latest curriculum and course structure for academic planning.',
    keywords: ['syllabus', 'curriculum', 'course structure', 'academic planning'],
    path: '/syllabus',
  }),
  
  questionPapers: generateSEO({
    title: 'Question Papers',
    description: 'Access previous semester and mid-term examination question papers for all HITAM engineering branches. Download past exam papers for better preparation.',
    keywords: ['question papers', 'previous papers', 'exam papers', 'past papers'],
    path: '/Question-papers',
  }),
  
  documents: generateSEO({
    title: 'Documents & Resources',
    description: 'Access important documents, assignments, lab manuals, and additional academic resources for HITAM engineering students.',
    keywords: ['documents', 'assignments', 'lab manuals', 'academic resources'],
    path: '/Doc',
  }),
};

export default generateSEO;
