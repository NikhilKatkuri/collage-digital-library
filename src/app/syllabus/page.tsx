'use client';
import Navbar from '@/components/Navbar';
import brunch, { RegulationType } from '@/data/brunch';
import React from 'react';

const Page = () => {
  // const [data, setData] = useState<Regulation[] | null>(null);
  const [courses, setCourses] = React.useState<string[]>([]);
  const [selectedCourse, setselectedCourse] = React.useState<{
    index: number;
    course: string;
  }>({
    index: 0,
    course: '',
  });
  const regu: RegulationType = 'hr-24';

  React.useEffect(() => {
    const brunchDataProcess = brunch.find(item => item.regulationType === regu);

    if (!brunchDataProcess) {
      console.warn(`No data found for regulation: ${regu}`);
      // setData([]);
      return;
    }

    const syllabusResources = brunchDataProcess.regulation.map(item => ({
      branch: item.branch,
      block: item.block.map(itemBlock => ({
        year: itemBlock.year,
        semesterBlock: itemBlock.semesterBlock.map(itemSemesterBlock => ({
          semester: itemSemesterBlock.semester,
          subjects: itemSemesterBlock.subjects.map(itemSubjects => ({
            name: itemSubjects.name,
            resource: itemSubjects.resource.filter(
              itemRes => itemRes.type === 'syllabus'
            ),
          })),
        })),
      })),
    }));

    // setData(syllabusResources);
    setCourses(syllabusResources.map(item => item.branch));
    setselectedCourse({
      index: 0,
      course: syllabusResources[0].branch,
    });
    console.log('Syllabus Resources:', syllabusResources);
  }, [regu]);

  return (
    <div className="h-screen w-screen">
      <Navbar />
      <main className="h-full w-full max-lg:px-4">
        <div className="mx-auto w-full max-w-4xl pt-24">
          <div className="flex h-full w-full flex-col gap-6">
            <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-[600px]">
              <h1 className="text-text-primary text-4xl font-semibold">
                Master Your Curriculum
              </h1>
              <p className="">
                Dive into every course, assignment, and paper with clarity. Your
                academic journey, fully organized and at your fingertips.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-wrap gap-4">
                {courses.map((item, index) => {
                  return (
                    <button
                      onClick={() => {
                        setselectedCourse({
                          index: index,
                          course: item,
                        });
                      }}
                      className={`px-4 py-1.5 text-sm font-semibold ${selectedCourse.index === index ? 'index-button' : 'text-text-tertiary hover:border-line-primary'} cursor-pointer rounded-full border border-transparent transition-all duration-300 ease-in-out`}
                      key={item}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
              <div className="border-line-primary grid h-10 w-full grid-cols-3 gap-3 border-t border-b text-sm">
                <div className="flex items-center gap-3">
                  <span>#</span>
                  <span>Subject</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Year</span>
                </div>
                <div className="flex items-center gap-3">
                  <button>download</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
