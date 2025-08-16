'use client';
import Navbar from '@/components/Navbar';
import brunch, {
  Regulation,
  regulations,
  RegulationType,
  Resource,
  SemesterType,
  years,
  YearType,
} from '@/data/brunch';
import React from 'react';
type Table = {
  semester: SemesterType;
  name: string;
  resource: Resource[];
};
const Page = () => {
  const [data, setData] = React.useState<Regulation[] | null>(null);
  const [courses, setCourses] = React.useState<string[]>([]);
  const [selectedCourse, setselectedCourse] = React.useState<{
    index: number;
    course: string;
  }>({
    index: 0,
    course: '',
  });
  const [selectedYear, setselectedYear] = React.useState<{
    index: number;
    year: YearType;
  }>({
    index: 0,
    year: 'YEAR-1',
  });
  const [Table, setTable] = React.useState<Table[] | null>(null);

  const [regu, setRegu] = React.useState<RegulationType>('hr-22');
  React.useEffect(() => {
    const brunchDataProcess = brunch.find(item => item.regulationType === regu);

    if (!brunchDataProcess) {
      console.warn(`No data found for regulation: ${regu}`);
      setData([]);
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

    setData(syllabusResources);
    setCourses(syllabusResources.map(item => item.branch));
    setselectedCourse({
      index: 0,
      course: syllabusResources[0].branch,
    });
    console.log('Syllabus Resources:', syllabusResources);
  }, [regu]);

  React.useEffect(() => {
    function Update() {
      if (data === null) return;
      const filteredData = data.find(
        item => item.branch === selectedCourse.course
      );
      if (!filteredData) return;
      const block = filteredData.block.find(
        item => item.year === selectedYear.year
      );
      if (!block) return;
      const subjects = block.semesterBlock.map(item => ({
        semester: item.semester,
        subjects: item.subjects.map(itemSubject => ({
          name: itemSubject.name,
          resource: itemSubject.resource,
        })),
      }));
      const custom = subjects.flatMap(item =>
        item.subjects.map(sub => ({
          semester: item.semester,
          ...sub,
        }))
      );
      setTable(custom);
    }
    Update();
  }, [data, selectedCourse.course, selectedYear.year]);
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <main className="h-full w-full max-lg:px-4">
        <div className="mx-auto w-full max-w-4xl py-24">
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
              <div className="border-line-secondary/50 w-full overflow-x-hidden border-2 border-dashed"></div>

              <div className="flex flex-wrap gap-4">
                {regulations.map(item => {
                  return (
                    <button
                      onClick={() => {
                        setRegu(item);
                      }}
                      className={`px-4 py-1.5 text-sm font-semibold ${regu === item ? 'index-button' : 'text-text-tertiary hover:border-line-primary'} cursor-pointer rounded-lg border border-transparent transition-all duration-300 ease-in-out`}
                      key={item}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
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
                      className={`px-4 py-1.5 text-sm font-semibold ${selectedCourse.index === index ? 'index-button' : 'text-text-tertiary hover:border-line-primary'} cursor-pointer rounded-lg border border-transparent transition-all duration-300 ease-in-out`}
                      key={item}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
              <div className="border-line-secondary/50 w-full overflow-x-hidden border-2 border-dashed"></div>
              <div className="flex flex-wrap gap-4">
                {years.map((item, index) => {
                  return (
                    <button
                      onClick={() => {
                        setselectedYear({
                          index: index,
                          year: item,
                        });
                      }}
                      className={`px-4 py-1.5 text-sm font-semibold ${selectedYear.index === index ? 'index-button' : 'text-text-tertiary hover:border-line-primary'} cursor-pointer rounded-lg border border-transparent transition-all duration-300 ease-in-out`}
                      key={item}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
              <div className="w-full overflow-x-scroll">
                <div className="min-w-[600px]">
                  {/* Table Header */}
                  <div className="border-line-primary grid h-10 w-full grid-cols-3 items-center gap-3 border-t border-b px-3 text-sm font-semibold">
                    <div className="grid grid-cols-[30px_auto] items-center gap-3">
                      <span>#</span>
                      <span>Subject</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Semester</span>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                      <span>Action</span>
                    </div>
                  </div>

                  {/* Table Rows */}
                  {Table &&
                    Table.map((item, index) => (
                      <div
                        key={index}
                        className="hover:bg-line-quaternary grid h-12 w-full grid-cols-3 items-center gap-3 rounded-lg px-3 text-sm transition"
                      >
                        <div className="grid grid-cols-[30px_auto] items-center gap-3">
                          <span>{index < 9 ? `0${index + 1}` : index + 1}</span>
                          <span className="truncate">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>{item.semester}</span>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                          <button className="bg-text-secondary text-bg-primary hover:bg-text-primary rounded px-3 py-1 transition">
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
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
