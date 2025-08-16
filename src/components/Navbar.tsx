"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type NavLinkaTypes = {
  name: string;
  path: string;
};
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const NavLinks: NavLinkaTypes[] = [
    {
      name: "home",
      path: "/home",
    },
    {
      name: "syllabus",
      path: "/syllabus",
    },
    {
      name: "Question-papers",
      path: "/Question-papers",
    },
    {
      name: "notes",
      path: "/notes",
    },
  ];
  return (
    <header className="h-16 md:px-8 w-full border-b-1 sticky top-0  ">
      <nav className="flex items-center justify-between mx-auto md:max-w-4xl w-full max-md:px-6 h-full ">
        <div className="">
          <Link href="/">
            <Image
              src="/Wordmark.svg"
              alt="--logo"
              height={1}
              width={4.64}
              className="aspect-[4.64/1] w-auto h-5"
            />
          </Link>
        </div>
        <div
          className={` flex md:gap-3 font-medium  ${
            isOpen
              ? "max-md:flex max-md:flex-col max-md:fixed max-md:top-16 max-md:w-56 max-md:bg-[var(--color-bg-translucent)] max-md:rounded-md  max-md:right-2 max-md:px-4 max-md:py-4 max-md:z-10 max-md:mt-2"
              : "max-md:hidden  "
          } `}
        >
          {NavLinks.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className="px-3 header-links py-1.5 rounded-md"
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="flex items-center space-x-2 md:space-x-3 rounded-md bg-[var(--color-bg-secondary)] px-2 h-8 font-medium  cursor-pointer"
          >
            <span className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
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

            <span className="hidden md:inline rounded-md bg-black px-2 py-0.5 text-xs text-white">
              Ctrl K
            </span>
          </button>

          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="cursor-pointer transition-all ease-in-out duration-200 active:scale-95 md:hidden"
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
