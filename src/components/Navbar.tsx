'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type NavLinkaTypes = {
  name: string;
  path: string;
};
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const NavLinks: NavLinkaTypes[] = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'syllabus',
      path: '/syllabus',
    },
    {
      name: 'Question-papers',
      path: '/Question-papers',
    },
    {
      name: 'notes',
      path: '/notes',
    },
  ];
  return (
    <header className="sticky top-0 h-16 w-full border-b-1 backdrop-blur-2xl md:px-8">
      <nav className="mx-auto flex h-full w-full items-center justify-between max-md:px-6 md:max-w-4xl">
        <div className="">
          <Link href="/">
            <Image
              src="/Wordmark.svg"
              alt="--logo"
              height={1}
              width={4.64}
              className="aspect-[4.64/1] h-5 w-auto"
            />
          </Link>
        </div>
        <div
          className={`flex font-medium md:gap-3 ${
            isOpen
              ? 'max-md:bg-bg-level-2 max-md:fixed max-md:top-16 max-md:right-2 max-md:z-10 max-md:mt-2 max-md:flex max-md:w-56 max-md:flex-col max-md:rounded-md max-md:px-4 max-md:py-4'
              : 'max-md:hidden'
          } `}
        >
          {NavLinks.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className="header-links rounded-md px-3 py-1.5"
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="bg-bg-secondary flex h-8 cursor-pointer items-center space-x-2 rounded-md px-2 font-medium max-md:hidden md:space-x-3"
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
          <button
            onClick={() => {
              window.open('https://www.webprosindia.com/hitam', '_blank');
            }}
            className="bg-text-primary text-bg-primary h-8 cursor-pointer rounded-lg px-3 transition-all duration-200 ease-in-out active:scale-95"
          >
            Hitam
          </button>
          <button className="cursor-pointer transition-all duration-200 ease-in-out active:scale-95 md:hidden">
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
          </button>

          <button
            onClick={() => {
              setIsOpen(prev => !prev);
            }}
            className="cursor-pointer transition-all duration-200 ease-in-out active:scale-95 md:hidden"
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
