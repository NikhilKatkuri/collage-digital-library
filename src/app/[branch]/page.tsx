'use client';
import branches from '@/data/branches';
import brunch, {
  branchType,
  RegulationType,
  ResourceType,
  SubjectName,
  YearType,
} from '@/data/brunch';
import { useParams, notFound, useRouter } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';

type Regulation = { selectedIndex: number; regulation: RegulationType };
type Year = { selectedIndex: number; year: YearType };
type Subject = { selectedIndex: number; subject: SubjectName };
type Resource = { selectedIndex: number; resource: ResourceType };
type Data = {
  regulation: RegulationType;
  branch: branchType;
  year: YearType;
  subject: SubjectName;
  resource: ResourceType;
};

export default function BranchPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<Data | null>(null);
  const [driveUrl, setDriveUrl] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const router = useRouter();
  const branchParam = params.branch?.toString().toUpperCase();

  const branch = useMemo(
    () => branches.find(b => b.abbreviation.toUpperCase() === branchParam),
    [branchParam]
  );

  const [regulation, setRegulation] = useState<Regulation>(() => ({
    selectedIndex: 0,
    regulation: 'hr-22',
  }));
  const [year, setYear] = useState<Year>(() => ({
    selectedIndex: 0,
    year: 'YEAR-1',
  }));
  const [subject, setSubject] = useState<Subject>(() => ({
    selectedIndex: 0,
    subject: 'Subject-1',
  }));
  const [resource, setResource] = useState<Resource>(() => ({
    selectedIndex: 0,
    resource: 'syllabus',
  }));

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

  useEffect(() => {
    if (!branch) return;

    const updateData = () => {
      const reg = brunch.find(a => a.regulationType === regulation.regulation);
      if (!reg) return;

      const branchData = reg.regulation.find(
        a => a.branch === branch.abbreviation
      );
      if (!branchData) return;

      const yearData = branchData.block.find(a => a.year === year.year);
      if (!yearData) return;

      const subjectData = yearData.subjects.find(
        a => a.name.toLowerCase() === subject.subject.toLowerCase()
      );
      if (!subjectData) return;

      const resourceData = subjectData.resource.find(
        a => a.type.toLowerCase() === resource.resource.toLowerCase()
      );

      setData({
        branch: branch.abbreviation,
        regulation: regulation.regulation,
        year: year.year,
        subject: subject.subject,
        resource: resource.resource,
      });

      setDriveUrl(resourceData?.url || null);
    };

    updateData();
  }, [
    branch,
    regulation.regulation,
    year.year,
    subject.subject,
    resource.resource,
  ]);

  if (!branch) return notFound();

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
          className={`${isOpen ? 'max-md:left-0' : 'max-md:left-[-500px] md:hidden'} bg-bg-primary border-text-tertiary h-full w-full max-w-96 overflow-hidden border-r-2 border-dashed p-3 transition-all duration-300 ease-in-out max-md:fixed max-md:top-16 max-md:w-screen max-md:max-w-96`}
        >
          <div className="h-full overflow-y-scroll">
            <div className="my-5">
              <div className="grid grid-cols-2 gap-4">
                {regulations.map((item, index) => (
                  <button
                    key={item}
                    onClick={() =>
                      setRegulation({ selectedIndex: index, regulation: item })
                    }
                    className={`w-full px-4 py-3 ${
                      regulation.selectedIndex === index
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
                {years.map((item, index) => (
                  <button
                    key={item}
                    onClick={() =>
                      setYear({ selectedIndex: index, year: item })
                    }
                    className={`w-full px-4 py-3 ${
                      year.selectedIndex === index
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
                {subjects.map((item, index) => (
                  <button
                    key={item}
                    onClick={() =>
                      setSubject({ selectedIndex: index, subject: item })
                    }
                    className={`w-full px-4 py-3 ${
                      subject.selectedIndex === index
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
                {resources.map((item, index) => (
                  <button
                    key={item}
                    onClick={() =>
                      setResource({ selectedIndex: index, resource: item })
                    }
                    className={`w-full px-4 py-3 ${
                      resource.selectedIndex === index
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
              !driveUrl ? '1AO2pJy2qXdQfl4WmGl9yERJ0tC-qdGH1' : driveUrl
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
}
