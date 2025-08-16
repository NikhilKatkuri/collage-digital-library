'use client';

import {
  branches,
  regulations,
  RegulationType,
  resources,
  years,
  YearType,
} from '@/data/brunch';
import { notFound, useParams, useRouter } from 'next/navigation';
import React from 'react';

const BranchPage: React.FC = () => {
  // router
  const router = useRouter();
  // control bar
  const [isOpen, setIsOpen] = React.useState(false);
  // params
  const params = useParams();
  const branchParam = params.branch?.toString().toLowerCase();
  const isBranch = branches.find(a => a.toLowerCase() === branchParam);

  // controls
  const subjects = [
    'SUBJECT-1',
    'SUBJECT-2',
    'SUBJECT-3',
    'SUBJECT-4',
    'SUBJECT-5',
    'SUBJECT-6',
  ];
  const [regulation, setRegulation] = React.useState<RegulationType>(
    regulations[0]
  );
  const [year, setYear] = React.useState<YearType>(years[0]);
  const [subject, setSubject] = React.useState<string>(subjects[0]);
  const [resource, setResource] = React.useState<string>(resources[0]);
  if (!isBranch) return notFound();

  return (
    <div className="relative h-screen w-screen">
      <header className="flex h-16 w-full items-center gap-4 border-b-1 px-2 max-md:justify-between sm:px-4 md:px-3">
        <button
          onClick={() => router.back()}
          className="border-text-tertiary/40 hover:bg-text-primary hover:text-bg-level-2 text-text-primary cursor-pointer rounded-full border-2 border-dashed p-2"
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
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="cursor-pointer transition-all duration-200 ease-in-out active:scale-95"
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </header>
      <div className={`flex h-[calc(100%-4rem)] w-screen items-center gap-2`}>
        <div
          className={`${isOpen ? 'max-md:left-0' : 'max-md:left-[-500px] md:hidden'} bg-bg-primary border-text-tertiary h-full w-full max-w-96 overflow-hidden border-r-2 border-dashed p-3 transition-all duration-300 ease-in-out *:text-sm *:font-medium max-md:fixed max-md:top-16 max-md:w-screen max-md:max-w-96`}
        >
          <div className="h-full overflow-y-scroll">
            <div className="my-5">
              <div className="grid grid-cols-2 gap-4">
                {regulations.map(item => (
                  <button
                    key={item}
                    onClick={() => setRegulation(item)}
                    className={`w-full px-4 py-3 ${
                      regulation === item
                        ? 'index-button-level-2'
                        : 'select-button'
                    } rounded-md text-left shadow transition`}
                  >
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-text-tertiary border-1 border-dashed"></div>
            <div className="my-5">
              <div className="grid grid-cols-2 gap-4">
                {years.map(item => (
                  <button
                    key={item}
                    onClick={() => setYear(item)}
                    className={`w-full px-4 py-3 ${
                      year === item ? 'index-button-level-2' : 'select-button'
                    } rounded-md text-left shadow transition`}
                  >
                    <span>
                      {item.charAt(0) + item.slice(1).toLocaleLowerCase()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-text-tertiary border-1 border-dashed"></div>
            <div className="my-5">
              <div className="grid grid-cols-2 gap-4">
                {subjects.map(item => (
                  <button
                    key={item}
                    onClick={() => setSubject(item)}
                    className={`w-full px-4 py-3 ${
                      subject === item
                        ? 'index-button-level-2'
                        : 'select-button'
                    } rounded-md text-left shadow transition`}
                  >
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-text-tertiary border-1 border-dashed"></div>
            <div className="my-5">
              <div className="grid grid-cols-2 gap-4">
                {resources.map(item => (
                  <button
                    key={item}
                    onClick={() => setResource(item)}
                    className={`w-full px-4 py-3 ${
                      resource === item
                        ? 'index-button-level-2'
                        : 'select-button'
                    } rounded-md text-left shadow transition`}
                  >
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex ${isOpen ? 'md:w-[calc(100%-24rem)]' : 'md:w-full'} bg-bg-tint h-full w-full self-end transition-all duration-300 ease-in-out`}
        >
          <iframe
            src={`https://drive.google.com/file/d/${
              !0 ? '1AO2pJy2qXdQfl4WmGl9yERJ0tC-qdGH1' : 0
            }/preview`}
            width="100%"
            height="100%"
            sandbox="allow-scripts allow-same-origin"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BranchPage;
