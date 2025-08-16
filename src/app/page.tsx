'use client';
import Navbar from '@/components/Navbar';
import { branches, BranchType } from '@/data/brunch';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page: React.FC = () => {
 
  const router = useRouter();
  const [selectedBranch, setSelectedBranch] = React.useState<BranchType>(
    branches[0]
  );

  return (
    <div className="h-screen w-full scroll-smooth" id="content">
      <Navbar />
      <main className="h-full w-full max-lg:px-4">
        <div className="mx-auto w-full max-w-4xl pt-24">
          <div className="flex h-full w-full flex-col gap-6">
            <div className="mx-auto mb-8">
              <Image
                src="/Tree.svg"
                alt="tree"
                height={160}
                width={160}
                className="sm:w-64"
              />
            </div>
            <div className="mx-auto grid grid-cols-1 max-md:gap-y-3 sm:grid-cols-[600px] md:grid-cols-2 md:gap-12">
              <h1 className="text-text-primary text-4xl font-semibold">
                All Your HITAM Study Resources in One Place
              </h1>
              <p className="">
                A central hub for HITAM students to access syllabus copies,
                course files, notes, and previous question papers. No more
                searching through scattered links.
              </p>
            </div>
            <div className="flex flex-wrap"></div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-4xl py-24">
          <div className="flex h-full w-full flex-col gap-10 md:text-center">
            <div className="mx-auto">
              <h1 className="text-text-primary text-2xl font-semibold">
                Quick access to your course resources.
              </h1>
              <h2 className="text-sm">
                From 1st year to final year — find syllabus, notes, and papers
                faster.
              </h2>
            </div>
            <div className="mx-auto max-w-full overflow-x-auto">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {branches.map((branch, index) => (
                  <button
                    onClick={() => {
                      setSelectedBranch(branch);
                      router.push(`${branch}`);
                    }}
                    key={index}
                    className={`cursor-pointer rounded-full px-5 py-2 font-semibold ${
                      selectedBranch === branch
                        ? 'index-button'
                        : 'select-button'
                    }`}
                  >
                    {branch}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
