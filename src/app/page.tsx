"use client";
import Navbar from "@/components/Navbar";
import branches from "@/data/branches";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Page: React.FC = () => {
  const router = useRouter();
  const [selectedBranch, setSelectedBranch] = React.useState<number>(0);
  return (
    <div className="h-screen w-full" id="content">
      <Navbar />
      <main className="h-full w-full max-lg:px-4">
        <div className="pt-24  w-full max-w-4xl mx-auto">
          <div className="w-full h-full flex flex-col gap-6">
            <div className="mx-auto mb-8">
              <Image
                src="/Tree.svg"
                alt="tree"
                height={160}
                width={160}
                className="sm:w-64"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[600px] max-md:gap-y-3 md:grid-cols-2 md:gap-12 mx-auto">
              <h1 className="font-semibold text-4xl text-[var(--color-text-primary)]    ">
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
        <div className="py-24 w-full max-w-4xl mx-auto">
          <div className="w-full h-full flex flex-col gap-10 md:text-center">
            <div className="mx-auto  ">
              <h1 className="text-[var(--color-text-primary)] text-2xl font-semibold">
                Quick access to your course resources.
              </h1>
              <h2 className="text-sm">
                From 1st year to final year — find syllabus, notes, and papers
                faster.
              </h2>
            </div>
            <div className="max-w-full overflow-x-auto mx-auto">
              <div className="flex items-center gap-4 min-w-max ">
                {branches.map((branch, index) => (
                  <button
                    onClick={() => {
                      setSelectedBranch(branch.id);
                      router.push(`${branch.abbreviation}`);
                    }}
                    key={index}
                    className={`px-5 py-2 cursor-pointer rounded-full font-semibold ${
                      selectedBranch === branch.id
                        ? "index-button"
                        : "select-button"
                    }`}
                  >
                    {branch.abbreviation}
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
