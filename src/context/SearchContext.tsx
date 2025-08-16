'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

// Define types (unchanged)
export type ResourceType =
  | 'syllabus'
  | 'notes'
  | 'semester regular'
  | 'semester supply'
  | 'mid 1'
  | 'mid 2'
  | 'assignments';

export const resources: ResourceType[] = [
  'syllabus',
  'notes',
  'semester regular',
  'semester supply',
  'mid 1',
  'mid 2',
  'assignments',
];

export type Resource = {
  type: ResourceType;
  url: string;
};

export type SubjectName = string;

export type Subject = {
  name: SubjectName;
  resource: Resource[];
};

export type SemesterType =
  | 'SEMESTER-1'
  | 'SEMESTER-2'
  | 'SEMESTER-3'
  | 'SEMESTER-4'
  | 'SEMESTER-5'
  | 'SEMESTER-6'
  | 'SEMESTER-7'
  | 'SEMESTER-8';

export type Semester = {
  semester: SemesterType;
  subjects: Subject[];
};

export type YearType = 'YEAR-1' | 'YEAR-2' | 'YEAR-3' | 'YEAR-4';

export type Block = {
  year: YearType;
  semesterBlock: Semester[];
};

export type BranchType = 'CSE' | 'DS' | 'ME' | 'EEE' | 'ECE' | 'AI-ML';

export type Regulation = {
  branch: BranchType;
  block: Block[];
};

export type RegulationType = 'hr-22' | 'hr-24';

export type RegulationData = {
  regulationType: RegulationType;
  regulation: Regulation[];
};

export type SearchResult = {
  regulationType: RegulationType;
  branch: BranchType;
  year: YearType;
  semester: SemesterType;
  subjectName?: SubjectName;
  resourceType?: ResourceType;
  resourceUrl?: string;
};

interface SearchContextType {
  isSearching: boolean;
  setIsSearching: (isSearching: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: SearchResult[];
  performSearch: (query: string, data: RegulationData[]) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({
  children,
  data,
}: {
  children: ReactNode;
  data: RegulationData[];
}) => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isSearching) {
        setIsSearching(false);
      }
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearching(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearching]);

  const performSearch = (query: string, regulationData: RegulationData[]) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    if (!Array.isArray(regulationData)) {
      console.error('regulationData is not an array:', regulationData);
      setSearchResults([]);
      return;
    }

    regulationData.forEach(regData => {
      const { regulationType, regulation } = regData;
      if (!Array.isArray(regulation)) {
        console.warn(`No regulation array for ${regulationType}`);
        return;
      }
      regulation.forEach(reg => {
        const { branch, block } = reg;
        if (!Array.isArray(block)) {
          console.warn(`No block array for ${branch}`);
          return;
        }
        block.forEach(blk => {
          const { year, semesterBlock } = blk;
          if (!Array.isArray(semesterBlock)) {
            console.warn(`No semesterBlock array for ${year}`);
            return;
          }
          semesterBlock.forEach(sem => {
            const { semester, subjects } = sem;
            if (
              regulationType?.toLowerCase()?.includes(lowerQuery) ||
              branch?.toLowerCase()?.includes(lowerQuery) ||
              year?.toLowerCase()?.includes(lowerQuery) ||
              semester?.toLowerCase()?.includes(lowerQuery)
            ) {
              results.push({ regulationType, branch, year, semester });
            }
            if (!Array.isArray(subjects)) {
              console.warn(`No subjects array for ${semester}`);
              return;
            }
            subjects.forEach(subj => {
              const { name, resource } = subj;
              if (name?.toLowerCase()?.includes(lowerQuery)) {
                results.push({
                  regulationType,
                  branch,
                  year,
                  semester,
                  subjectName: name,
                });
                if (Array.isArray(resource)) {
                  const sortedResources = [...resource].sort((a, b) => {
                    return (
                      resources.indexOf(a.type) - resources.indexOf(b.type)
                    );
                  });
                  sortedResources.forEach(res => {
                    results.push({
                      regulationType,
                      branch,
                      year,
                      semester,
                      subjectName: name,
                      resourceType: res.type,
                      resourceUrl: res.url,
                    });
                  });
                }
              }
              if (Array.isArray(resource)) {
                resource.forEach(res => {
                  if (res.type?.toLowerCase()?.includes(lowerQuery)) {
                    results.push({
                      regulationType,
                      branch,
                      year,
                      semester,
                      subjectName: name,
                      resourceType: res.type,
                      resourceUrl: res.url,
                    });
                  }
                });
              } else {
                console.warn(`No resource array for ${name}`);
              }
            });
          });
        });
      });
    });

    setSearchResults(results);
  };

  return (
    <SearchContext.Provider
      value={{
        isSearching,
        setIsSearching,
        searchQuery,
        setSearchQuery,
        searchResults,
        performSearch,
      }}
    >
      <div className="">
        {children}
        {isSearching && (
          <div
            onClick={() => setIsSearching(false)}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-20 backdrop-blur-sm transition-all duration-300"
          >
            <div
              className="bg-bg-secondary border-border-primary shadow-high mx-4 w-full max-w-2xl rounded-xl border"
              onClick={e => e.stopPropagation()}
            >
              <div className="border-border-primary border-b p-4">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-text-tertiary h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for subjects, notes, question papers..."
                    value={searchQuery}
                    onChange={e => {
                      setSearchQuery(e.target.value);
                      performSearch(e.target.value, data);
                    }}
                    className="text-text-primary placeholder-text-tertiary flex-1 bg-transparent text-lg outline-none"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsSearching(false)}
                    className="text-text-quaternary hover:text-text-secondary rounded-md p-1 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {searchResults.length > 0 && (
                  <div className="p-2">
                    <div className="text-text-tertiary mb-2 px-2 text-sm">
                      {searchResults.length} results found
                    </div>
                    {searchResults.map((result, index) => (
                      <div
                        onClick={() => {
                          console.log('Result clicked:', result);
                        }}
                        key={index}
                        className="hover:bg-bg-tertiary group cursor-pointer rounded-lg p-3 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="mb-1 flex items-center space-x-2">
                              <span className="bg-accent/10 text-accent rounded-md px-2 py-1 text-xs font-medium">
                                {result.regulationType.toUpperCase()}
                              </span>
                              <span className="bg-bg-quaternary text-text-secondary rounded-md px-2 py-1 text-xs">
                                {result.branch}
                              </span>
                            </div>
                            <div className="text-text-primary mb-1 font-medium">
                              {result.year} - {result.semester}
                              {result.subjectName && ` - ${result.subjectName}`}
                            </div>
                            {result.resourceType && (
                              <div className="text-text-tertiary text-sm">
                                Resource: {result.resourceType}
                              </div>
                            )}
                          </div>
                          {result.resourceUrl && (
                            <a
                              href={result.resourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-accent hover:bg-accent-hover rounded-md px-3 py-1.5 text-xs text-white opacity-0 transition-colors group-hover:opacity-100"
                              onClick={e => e.stopPropagation()}
                            >
                              Open
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {searchQuery && searchResults.length === 0 && (
                  <div className="p-8 text-center">
                    <div className="text-text-quaternary mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="mx-auto mb-4 h-12 w-12 opacity-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </div>
                    <div className="text-text-secondary mb-1 font-medium">
                      No results found
                    </div>
                    <div className="text-text-quaternary text-sm">
                      Try searching for different keywords
                    </div>
                  </div>
                )}

                {!searchQuery && (
                  <div className="p-8 text-center">
                    <div className="text-text-quaternary mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="mx-auto h-12 w-12 opacity-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </div>
                    <div className="text-text-secondary mb-2 font-medium">
                      Start typing to search
                    </div>
                    <div className="text-text-quaternary mb-4 text-sm">
                      Search for subjects, notes, question papers, and more
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="bg-bg-quaternary text-text-tertiary rounded-md px-2 py-1 text-xs">
                        CSE
                      </span>
                      <span className="bg-bg-quaternary text-text-tertiary rounded-md px-2 py-1 text-xs">
                        Notes
                      </span>
                      <span className="bg-bg-quaternary text-text-tertiary rounded-md px-2 py-1 text-xs">
                        Question Papers
                      </span>
                      <span className="bg-bg-quaternary text-text-tertiary rounded-md px-2 py-1 text-xs">
                        Syllabus
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-border-primary border-t p-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="text-text-quaternary flex items-center space-x-4">
                    <span>Press ESC to close</span>
                    <span>↑↓ to navigate</span>
                    <span>↵ to select</span>
                  </div>
                  <div className="text-text-quaternary flex items-center space-x-1">
                    <span>Search made by</span>
                    <span className="text-accent font-medium">Nikhil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error('useSearch must be used within SearchProvider');
  return context;
};
