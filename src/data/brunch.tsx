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
                    name: 'MATHS-1',
                    resource: [
                      {
                        type: 'assignments',
                        url: '',
                      },
                      {
                        type: 'mid 1',
                        url: '',
                      },
                      {
                        type: 'mid 2',
                        url: '',
                      },
                      {
                        type: 'notes',
                        url: '',
                      },
                      {
                        type: 'semester regular',
                        url: '',
                      },
                      {
                        type: 'semester supply',
                        url: '',
                      },
                      {
                        type: 'syllabus',
                        url: '',
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
