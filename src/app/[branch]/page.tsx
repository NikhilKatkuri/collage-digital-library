'use client';

import brunch, {
  branches,
  regulations,
  RegulationType,
  resources,
  years,
  YearType,
} from '@/data/brunch';
import { getDriveFileId } from '@/utils/getdriveId';
import { notFound, useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const BranchPage: React.FC = () => {
  // router
  const router = useRouter();
  // control bar
  const [isOpen, setIsOpen] = React.useState(true);
  // params
  const params = useParams();
  const branchParam = params.branch?.toString().toLowerCase();
  const isBranch = branches.find(a => a.toLowerCase() === branchParam);

  // controls
  const [subjects, setSubjects] = useState<string[]>([
    'SUBJECT-1',
    'SUBJECT-2',
    'SUBJECT-3',
    'SUBJECT-4',
    'SUBJECT-5',
    'SUBJECT-6',
  ]);

  const [regulation, setRegulation] = React.useState<RegulationType>(
    regulations[0]
  );
  const [year, setYear] = React.useState<YearType>(years[0]);
  const [selectedSubject, setSelectedSubject] = React.useState<string>(subjects[0]);
  const [semester, setSemester] = React.useState<string[]>([]);
  const [SelectedSemester, setSelectedSemester] =
    React.useState<string>('Semester-1');
  const [resource, setResource] = React.useState<string>(resources[0]);

  const [driveID, setDriveID] = React.useState<string | null>(null);

  React.useEffect(() => {
    function Update() {
      const _regulation = brunch.find(
        item => item.regulationType === regulation
      );
      if (_regulation === null || _regulation === undefined) return;
      
      const _year = _regulation.regulation.find(
        item => item.branch.toLowerCase() === branchParam
      )?.block;

      if (_year === null || _year === undefined) return;
      
      const _block = _year.find(
        item => item.year.toLowerCase() === year.toLowerCase()
      );

      if (_block === null || _block === undefined) return;
      
      setSemester(_block.semesterBlock.map(item => item.semester));
      
      const _semester = _block.semesterBlock.find(
        item => item.semester.toLowerCase() === SelectedSemester.toLowerCase()
      );

      if (_semester === null || _semester === undefined) return;
       
      setSubjects(_semester.subjects.map(item => item.name));
 
      const _selectedSubject = _semester.subjects.find(
        item => item.name === selectedSubject
      );
      
      if (_selectedSubject === null || _selectedSubject === undefined) {
        setDriveID(null);
        return;
      }
       
      const url = _selectedSubject.resource.find(
        item => item.type.toLowerCase() === resource.toLowerCase()
      );
      
      if (!url) {
        setDriveID(null);
        return;
      }
      const driveID = getDriveFileId(url.url);
      setDriveID(driveID);
      console.log('Drive URL:', url.url);
    }
    Update();
  }, [SelectedSemester, branchParam, regulation, resource, selectedSubject, year]);

 
  React.useEffect(() => {
    if (subjects.length > 0 && !subjects.includes(selectedSubject)) {
      setSelectedSubject(subjects[0]);
    }
  }, [subjects, selectedSubject]);

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
                {semester.map(item => (
                  <button
                    key={item}
                    onClick={() => setSelectedSemester(item)}
                    className={`w-full px-4 py-3 ${
                      SelectedSemester === item
                        ? 'index-button-level-2'
                        : 'select-button'
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
                    onClick={() => setSelectedSubject(item)}
                    className={`w-full px-4 py-3 ${
                      selectedSubject === item
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
          {driveID ? (
            <iframe
              src={`https://drive.google.com/file/d/${driveID}/preview`}
              width="100%"
              height="100%"
              sandbox="allow-scripts allow-same-origin"
              allow="autoplay"
              title={`${selectedSubject} - ${resource}`}
            ></iframe>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center"> 
                <h3 className="text-xl font-semibold mb-2">No Content Available</h3>
                 <p className="text-gray-600">
                  {selectedSubject && resource 
                    ? `No ${resource} found for ${selectedSubject}`
                    : 'Please select a subject and resource type to view content'
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BranchPage;
