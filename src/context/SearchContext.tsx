'use client';

import {
  BranchType,
  RegulationData,
  RegulationType,
  ResourceType,
  SemesterType,
  SubjectName,
  YearType,
} from '@/data/brunch';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
  useCallback,
} from 'react';

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
  performSearch: (query: string) => void;
  isLoading: boolean;
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Memoize the flattened search data for better performance
  const searchableData = useMemo(() => {
    const flattened: Array<{
      regulationType: RegulationType;
      branch: BranchType;
      year: YearType;
      semester: SemesterType;
      subjectName?: string;
      resourceType?: ResourceType;
      resourceUrl?: string;
      searchText: string;
    }> = [];

    if (!Array.isArray(data)) return flattened;

    data.forEach(regData => {
      const { regulationType, regulation } = regData;
      if (!Array.isArray(regulation)) return;

      regulation.forEach(reg => {
        const { branch, block } = reg;
        if (!Array.isArray(block)) return;

        block.forEach(blk => {
          const { year, semesterBlock } = blk;
          if (!Array.isArray(semesterBlock)) return;

          semesterBlock.forEach(sem => {
            const { semester, subjects } = sem;

            // Add base entry for regulation/branch/year/semester
            flattened.push({
              regulationType,
              branch,
              year,
              semester,
              searchText:
                `${regulationType} ${branch} ${year} ${semester}`.toLowerCase(),
            });

            if (!Array.isArray(subjects)) return;

            subjects.forEach(subj => {
              const { name, resource } = subj;

              // Add subject entry
              flattened.push({
                regulationType,
                branch,
                year,
                semester,
                subjectName: name,
                searchText:
                  `${regulationType} ${branch} ${year} ${semester} ${name}`.toLowerCase(),
              });

              if (Array.isArray(resource)) {
                resource.forEach(res => {
                  flattened.push({
                    regulationType,
                    branch,
                    year,
                    semester,
                    subjectName: name,
                    resourceType: res.type,
                    resourceUrl: res.url,
                    searchText:
                      `${regulationType} ${branch} ${year} ${semester} ${name} ${res.type}`.toLowerCase(),
                  });
                });
              }
            });
          });
        });
      });
    });

    return flattened;
  }, [data]);

  // Keyboard handling
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

  const performSearchInternal = useCallback(
    (query: string) => {
      if (!query.trim()) {
        setSearchResults([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const lowerQuery = query.toLowerCase();

      // Use the pre-computed searchable data for faster searching
      const results = searchableData
        .filter(item => item.searchText.includes(lowerQuery))
        .slice(0, 50) // Limit results to improve performance
        .map(item => ({
          regulationType: item.regulationType,
          branch: item.branch,
          year: item.year,
          semester: item.semester,
          subjectName: item.subjectName,
          resourceType: item.resourceType,
          resourceUrl: item.resourceUrl,
        }));

      setSearchResults(results);
      setIsLoading(false);
    },
    [searchableData, setIsLoading]
  );

  // Debounced search function
  const debouncedSearch = useCallback(
    (query: string) => {
      const timeoutId = setTimeout(() => {
        performSearchInternal(query);
      }, 300); // 300ms delay

      return () => clearTimeout(timeoutId);
    },
    [performSearchInternal]
  );

  const performSearch = useCallback(
    (query: string) => {
      if (!query.trim()) {
        setSearchResults([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const cleanup = debouncedSearch(query);
      return cleanup;
    },
    [debouncedSearch, setIsLoading]
  );

  return (
    <SearchContext.Provider
      value={{
        isSearching,
        setIsSearching,
        searchQuery,
        setSearchQuery,
        searchResults,
        performSearch,
        isLoading,
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
                      performSearch(e.target.value);
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
                {isLoading && (
                  <div className="p-8 text-center">
                    <div className="text-text-tertiary mb-2">
                      <svg
                        className="mx-auto h-8 w-8 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                    <div className="text-text-secondary text-sm">
                      Searching...
                    </div>
                  </div>
                )}

                {!isLoading && searchResults.length > 0 && (
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

                {!isLoading && searchQuery && searchResults.length === 0 && (
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

                {!isLoading && !searchQuery && (
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
