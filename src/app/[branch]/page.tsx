'use client';
import branches from '@/data/branches';
import {
  RegulationType,
  ResourceType,
  SubjectName,
  YearType,
} from '@/data/brunch';
import { useParams, notFound, useRouter } from 'next/navigation';
import { useState } from 'react';

type Regulation = {
  selectedIndex: number;
  regulation: RegulationType;
};
type year = {
  selectedIndex: number;
  year: YearType;
};
type Subject = {
  selectedIndex: number;
  subject: SubjectName;
};

export default function BranchPage() {
  // routing
  const params = useParams();
  const branchParam = params.branch?.toString().toUpperCase();

  const branch = branches.find(
    b => b.abbreviation.toUpperCase() === branchParam
  );

  const router = useRouter();
  // system

  const [ViewIndex, setViewIndex] = useState(['0']);
  const [Regulation, setRegulation] = useState<Regulation>({
    selectedIndex: 0,
    regulation: 'hr-22',
  });

  const [Year, setYear] = useState<year>({
    selectedIndex: 0,
    year: 'YEAR-1',
  });

  const [Subject, setSubject] = useState<Subject>({
    selectedIndex: 0,
    subject: '1',
  });
  if (!branch) return notFound();
  const regulations: RegulationType[] = ['hr-22', 'hr-24'];
  const years: YearType[] = ['YEAR-1', 'YEAR-2', 'YEAR-3', 'YEAR-4'];
  const resources: ResourceType[] = [
    'syllabus',
    'mid',
    'notes',
    'semester',
    'assignments',
  ];

  const subjects: SubjectName[] = [
    'Subject-1',
    'Subject-2',
    'Subject-3',
    'Subject-4',
    'Subject-5',
    'Subject-6',
  ];

  return (
    <div className="grid h-full w-screen grid-cols-1 gap-16 p-3 max-md:grid-rows-[90vh_90vh] md:grid-cols-[500px_auto] md:gap-10 md:p-6">
      <div className="overflow-hidden">
        <div className="overflow-y-scroll">
          <div className="mb-4">
            <button
              onClick={() => {
                router.back();
              }}
              className="cursor-pointer rounded-full bg-[var(--color-text-primary)] p-2 text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <h1 className="text-2xl font-bold">{branch.name}</h1>
          <p>Welcome to the {branch.abbreviation} resources page.</p>
          {ViewIndex.includes('0') && (
            <div className="my-5">
              <div className="grid grid-cols-2 gap-4">
                {regulations.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setRegulation({
                        selectedIndex: index,
                        regulation: item,
                      });
                      setViewIndex(prev => [...prev, '1']);
                    }}
                    className={`w-full px-4 py-3 ${
                      Regulation.selectedIndex === index
                        ? 'index-button'
                        : 'select-button'
                    } rounded-md text-left shadow transition`}
                  >
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          {ViewIndex.includes('1') && (
            <>
              <div className="border"></div>
              <div className="my-5">
                <div className="grid grid-cols-2 gap-4">
                  {years.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setYear({
                          selectedIndex: index,
                          year: item,
                        });
                        setViewIndex(prev => {
                          return [...prev, '2'];
                        });
                      }}
                      className={`w-full px-4 py-3 ${
                        Year.selectedIndex === index
                          ? 'index-button'
                          : 'select-button'
                      } rounded-md text-left shadow transition`}
                    >
                      <span>
                        {' '}
                        {item.charAt(0) + item.slice(1).toLocaleLowerCase()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
          {ViewIndex.includes('2') && (
            <>
              <div className="border"></div>
              <div className="my-5">
                <div className="grid grid-cols-2 gap-4">
                  {subjects.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSubject({
                          selectedIndex: index,
                          subject: item,
                        });
                        setViewIndex(prev => [...prev, '3']);
                      }}
                      className={`w-full px-4 py-3 ${
                        Subject.selectedIndex === index
                          ? 'index-button'
                          : 'select-button'
                      } rounded-md text-left shadow transition`}
                    >
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
          {ViewIndex.includes('3') && (
            <>
              <div className="border"></div>
              <div className="my-5">
                <div className="grid grid-cols-2 gap-4">
                  {resources.map((item, index) => (
                    <button
                      key={index}
                      className={`w-full px-4 py-3 ${
                        0 ? '' : 'select-button'
                      } rounded-md text-left shadow transition`}
                    >
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="h-full w-full">
        <div className="h-full w-full rounded-md bg-white/5"></div>
      </div>
    </div>
  );
}
