'use client';

import { useSearch } from '@/context/SearchContext';
import React from 'react';

const SearchComp: React.FC = () => {
  const { setIsSearching } = useSearch();

  return (
    <button
      onClick={() => setIsSearching(true)}
      type="button"
      className="bg-bg-secondary hover:bg-bg-tertiary flex h-8 cursor-pointer items-center space-x-2 rounded-md px-2 font-medium transition-colors max-md:hidden md:space-x-3"
    >
      <span className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </span>

      <span>Search docs</span>

      <span className="bg-bg-primary hidden rounded-md px-2 py-0.5 text-xs text-white md:inline">
        Ctrl K
      </span>
    </button>
  );
};

export default SearchComp;
