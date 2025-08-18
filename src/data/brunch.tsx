// Resource Types
export type ResourceType =
  | 'syllabus'
  | 'notes'
  | 'semester regular'
  | 'semester supply'
  | 'mid 1'
  | 'mid 2'
  | 'assignments';

export type Resource = {
  type: ResourceType;
  url: string;
};

// Subject Types
export type SubjectName = string;

export type Subject = {
  name: SubjectName;
  resource: Resource[];
};

// Semester Types
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
  keyword?: string[];
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

// Regulation Data Type
export type RegulationType = 'hr-22' | 'hr-24';

export type RegulationData = {
  regulationType: RegulationType;
  regulation: Regulation[];
};
export const branches: BranchType[] = [
  'CSE',
  'DS',
  'ME',
  'EEE',
  'ECE',
  'AI-ML',
];
export const regulations: RegulationType[] = ['hr-22', 'hr-24'];
export const years: YearType[] = ['YEAR-1', 'YEAR-2', 'YEAR-3', 'YEAR-4'];
export const semesters: SemesterType[] = [
  'SEMESTER-1',
  'SEMESTER-2',
  'SEMESTER-3',
  'SEMESTER-4',
  'SEMESTER-5',
  'SEMESTER-6',
  'SEMESTER-7',
  'SEMESTER-8',
];
export const resources: ResourceType[] = [
  'syllabus',
  'notes',
  'semester regular',
  'semester supply',
  'mid 1',
  'mid 2',
  'assignments',
];

const brunch: RegulationData[] = [
  {
    regulationType: 'hr-24',
    regulation: [
      {
        branch: 'AI-ML',
        block: [
          {
            year: 'YEAR-1',
            semesterBlock: [
              {
                semester: 'SEMESTER-1',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-2',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            semesterBlock: [
              {
                semester: 'SEMESTER-3',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-4',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            semesterBlock: [
              {
                semester: 'SEMESTER-5',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-6',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            semesterBlock: [
              {
                semester: 'SEMESTER-7',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-8',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        branch: 'CSE',
        block: [
          {
            year: 'YEAR-1',
            semesterBlock: [
              {
                semester: 'SEMESTER-1',
                subjects: [
                  {
                    name: 'MAC',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/1kOf6KaJUH1dUsJYw9I6ecFVhZpsefi84/view?usp=drive_link',
                      },
                    ],
                  },
                  {
                    name: 'AP',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/1W7L6JGkVc-FqZkG_syBHGXuL3gmqxeIo/view?usp=drive_link',
                      },
                    ],
                  },
                  {
                    name: 'BEEE',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'PPS ( C PROGRAMMING )',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/1inr6hOsw-_bMDqXfNNxyEbrgTzfBUV6N/view?usp=drive_link',
                      },
                    ],
                  },
                  {
                    name: 'ESE',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/1xmmD1yrENU9o-sc_D3VCIyrb5NhSkM6i/view?usp=drive_link',
                      },
                    ],
                  },
                  {
                    name: 'ESE-LAB',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/1TIxLRqoPv-lwRbL7zHg9UYLeEVvY_n11/view?usp=drive_link',
                      },
                    ],
                  },
                  {
                    name: 'BEEE-LAB',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'AP-LAB',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/1W7L6JGkVc-FqZkG_syBHGXuL3gmqxeIo/view?usp=drive_link',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-2',
                subjects: [
                  {
                    name: 'ODEV',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'PP',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'DS IN C',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'CHEMISTRY',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'DT-LAB',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'EWS/ITWS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            semesterBlock: [
              {
                semester: 'SEMESTER-3',
                subjects: [
                  {
                    name: 'DISCRETE MATHEMATICS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'OOP-JAVA',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'DBMS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'COA',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'AECS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'UHV',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-4',
                subjects: [
                  {
                    name: 'PAS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'OS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'FLAT',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'DAA',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'CN',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'CN-LAB',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'CONSTITUTION OF INDIA',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            semesterBlock: [
              {
                semester: 'SEMESTER-5',
                subjects: [
                  {
                    name: 'FULL STACK',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'CD',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'OE-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SWE',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'PE-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'Environmental Science',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-6',
                subjects: [
                  {
                    name: 'PE-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'PE-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'OE-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            semesterBlock: [
              {
                semester: 'SEMESTER-7',
                subjects: [
                  {
                    name: 'CNS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'CC',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'PE-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'BEF',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'EE',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'OE-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-8',
                subjects: [
                  {
                    name: 'HCI',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'PE-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'PE-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'Research Methodology/Essence of Indian Traditional knowledge',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        branch: 'DS',
        block: [
          {
            year: 'YEAR-1',
            semesterBlock: [
              {
                semester: 'SEMESTER-1',
                subjects: [
                  {
                    name: 'MAC',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '1kOf6KaJUH1dUsJYw9I6ecFVhZpsefi84',
                      },
                    ],
                  },
                  {
                    name: 'Chemistry',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '1Q-SBHMdRKrvuCGf9klaPmpETTpDd80Ut',
                      },
                    ],
                  },
                  {
                    name: 'BEFA',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '1mOWeoPaiL1OHWqE5g7pY-wlJj7eAMEgi',
                      },
                    ],
                  },
                  {
                    name: 'DT-LAB',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '14cEkhkIxwgzYZprq2Ej_avVrOEGbiPd9',
                      },
                    ],
                  },
                  {
                    name: 'PPS ( C LANGUAGE )',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '1inr6hOsw-_bMDqXfNNxyEbrgTzfBUV6N',
                      },
                    ],
                  },
                  {
                    name: 'Engineering/IT Workshop',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '1jGs1s5Lg9fP7LEwkSy-4RlvtCajgXiNZ',
                      },
                    ],
                  },
                  {
                    name: 'CHEMISTRY LAB',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '1KjGGd61a8Qj_flDHy2wVyln10Ph4ZHV4',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-2',
                subjects: [
                  {
                    name: 'ODEV',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '1k9LIUjHMBw6r8hVDLrfeG6Gx3oeJUHjX',
                      },
                    ],
                  },
                  {
                    name: 'AP',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/12ootcd49wb8Fq5cPjZgmcX5rrWsOeil_/view?usp=sharing',
                      },
                    ],
                  },
                  {
                    name: 'BWD',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/1YuyauYtAAfCrXGX169u2jl55NNn9cszg/view?usp=drive_link',
                      },
                    ],
                  },
                  {
                    name: 'FDHD',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/14wltJjKCbozd_gNb4dqIzsBUuG-vIRCs/view?usp=drive_link',
                      },
                    ],
                  },
                  {
                    name: 'AP-LAB',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/1W7L6JGkVc-FqZkG_syBHGXuL3gmqxeIo/view?usp=drive_link',
                      },
                    ],
                  },
                  {
                    name: 'ESE',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'ESE-LAB',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/1TIxLRqoPv-lwRbL7zHg9UYLeEVvY_n11/view?usp=drive_link',
                      },
                    ],
                  },
                  {
                    name: 'DHD-LAB',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/1hJ-SqRTk5XJPaDk2nHAubnlxDUJLnyvb/view?usp=drive_link',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            semesterBlock: [
              {
                semester: 'SEMESTER-3',
                subjects: [
                  {
                    name: 'DIS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/1fHpkO51yplipRWKTr_W0u6ElbMnjUWH8/view?usp=sharing',
                      },
                    ],
                  },
                  {
                    name: 'DBMS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/17qhL-qFfn0FjIf6BVxO3QBSew58LwdEd/view?usp=sharing',
                      },
                    ],
                  },
                  {
                    name: 'DS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/1rEAqSSPXfkqkgk_QH8pXcziImiixV31V/view?usp=drive_link',
                      },
                    ],
                  },
                  {
                    name: 'OS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/16eO88FeGpcbNaDJNEc8jRGDrgoTwL86j/view?usp=drive_link',
                      },
                    ],
                  },
                  {
                    name: 'PYTHON',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: 'https://drive.google.com/file/d/10IfEm8VPOtwDYbcJSTn4ufLUDlNzpcXK/view?usp=drive_link',
                      },
                    ],
                  },
                  {
                    name: 'UHV',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-4',
                subjects: [
                  {
                    name: 'SMF',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'OOP-JAVA',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'INTRO DS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'CN',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SWE',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'CN-LAB',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            semesterBlock: [
              {
                semester: 'SEMESTER-5',
                subjects: [
                  {
                    name: 'DMDA',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'FULL STACK DEV',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'CC',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'INTRO ML',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'DAA',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'AECS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'ES',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-6',
                subjects: [
                  {
                    name: 'PE-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'OE-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'PE-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            semesterBlock: [
              {
                semester: 'SEMESTER-7',
                subjects: [
                  {
                    name: 'BIG DATA ANALYTICS',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'DATA VISUALIZATION',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'OE-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'PE-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'OE-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'GENDER SENSITIZATION',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-8',
                subjects: [
                  {
                    name: 'PE-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'PE-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'PE-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'OE-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'Research Methodology/Essence of Indian Traditional knowledge',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        branch: 'ECE',
        block: [
          {
            year: 'YEAR-1',
            semesterBlock: [
              {
                semester: 'SEMESTER-1',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-2',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            semesterBlock: [
              {
                semester: 'SEMESTER-3',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-4',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            semesterBlock: [
              {
                semester: 'SEMESTER-5',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-6',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            semesterBlock: [
              {
                semester: 'SEMESTER-7',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-8',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        branch: 'EEE',
        block: [
          {
            year: 'YEAR-1',
            semesterBlock: [
              {
                semester: 'SEMESTER-1',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-2',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            semesterBlock: [
              {
                semester: 'SEMESTER-3',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-4',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            semesterBlock: [
              {
                semester: 'SEMESTER-5',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-6',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            semesterBlock: [
              {
                semester: 'SEMESTER-7',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-8',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        branch: 'ME',
        block: [
          {
            year: 'YEAR-1',
            semesterBlock: [
              {
                semester: 'SEMESTER-1',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-2',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            semesterBlock: [
              {
                semester: 'SEMESTER-3',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-4',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            semesterBlock: [
              {
                semester: 'SEMESTER-5',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-6',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            semesterBlock: [
              {
                semester: 'SEMESTER-7',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-8',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    regulationType: 'hr-22',
    regulation: [
      {
        branch: 'AI-ML',
        block: [
          {
            year: 'YEAR-1',
            semesterBlock: [
              {
                semester: 'SEMESTER-1',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-2',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            semesterBlock: [
              {
                semester: 'SEMESTER-3',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-4',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            semesterBlock: [
              {
                semester: 'SEMESTER-5',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-6',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            semesterBlock: [
              {
                semester: 'SEMESTER-7',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-8',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        branch: 'CSE',
        block: [
          {
            year: 'YEAR-1',
            semesterBlock: [
              {
                semester: 'SEMESTER-1',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-2',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            semesterBlock: [
              {
                semester: 'SEMESTER-3',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-4',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            semesterBlock: [
              {
                semester: 'SEMESTER-5',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-6',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            semesterBlock: [
              {
                semester: 'SEMESTER-7',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-8',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        branch: 'DS',
        block: [
          {
            year: 'YEAR-1',
            semesterBlock: [
              {
                semester: 'SEMESTER-1',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-2',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            semesterBlock: [
              {
                semester: 'SEMESTER-3',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-4',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            semesterBlock: [
              {
                semester: 'SEMESTER-5',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-6',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            semesterBlock: [
              {
                semester: 'SEMESTER-7',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-8',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        branch: 'ECE',
        block: [
          {
            year: 'YEAR-1',
            semesterBlock: [
              {
                semester: 'SEMESTER-1',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-2',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            semesterBlock: [
              {
                semester: 'SEMESTER-3',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-4',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            semesterBlock: [
              {
                semester: 'SEMESTER-5',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-6',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            semesterBlock: [
              {
                semester: 'SEMESTER-7',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-8',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        branch: 'EEE',
        block: [
          {
            year: 'YEAR-1',
            semesterBlock: [
              {
                semester: 'SEMESTER-1',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-2',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            semesterBlock: [
              {
                semester: 'SEMESTER-3',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-4',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            semesterBlock: [
              {
                semester: 'SEMESTER-5',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-6',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            semesterBlock: [
              {
                semester: 'SEMESTER-7',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-8',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        branch: 'ME',
        block: [
          {
            year: 'YEAR-1',
            semesterBlock: [
              {
                semester: 'SEMESTER-1',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-2',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            semesterBlock: [
              {
                semester: 'SEMESTER-3',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-4',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            semesterBlock: [
              {
                semester: 'SEMESTER-5',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-6',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            semesterBlock: [
              {
                semester: 'SEMESTER-7',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
              {
                semester: 'SEMESTER-8',
                subjects: [
                  {
                    name: 'SUBJECT-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-2',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-3',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-4',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-5',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                  {
                    name: 'SUBJECT-6',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default brunch;
