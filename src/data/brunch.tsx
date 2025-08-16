export type ResourceType =
  | 'syllabus'
  | 'notes'
  | 'semester'
  | 'mid'
  | 'assignments';

type resource = {
  type: ResourceType;
  url: string;
};
export type SubjectName = string;
type subjectType = {
  name: SubjectName;
  resource: resource[];
};

export type YearType = 'YEAR-1' | 'YEAR-2' | 'YEAR-3' | 'YEAR-4';
type BlockType = {
  year: YearType;
  subjects: subjectType[];
};

export type branchType = 'CSE' | 'DS' | 'ME' | 'EEE' | 'ECE' | 'AI-ML';
type regulation = {
  branch: branchType;
  block: BlockType[];
};

export type RegulationType = 'hr-22' | 'hr-24';
type brunchType = {
  regulationType: RegulationType;
  regulation: regulation[];
};

const brunch: brunchType[] = [
  {
    regulationType: 'hr-22',
    regulation: [
      {
        branch: 'CSE',
        block: [
          {
            year: 'YEAR-1',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
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
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',

                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
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
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
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
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
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
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
        ],
      },
      {
        branch: 'AI-ML',
        block: [
          {
            year: 'YEAR-1',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    regulationType: 'hr-24',
    regulation: [
      {
        branch: 'CSE',
        block: [
          {
            year: 'YEAR-1',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
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
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
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
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
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
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
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
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
        ],
      },
      {
        branch: 'AI-ML',
        block: [
          {
            year: 'YEAR-1',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-2',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-3',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
            ],
          },
          {
            year: 'YEAR-4',
            subjects: [
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
                ],
              },
              {
                name: '',
                resource: [
                  { type: 'assignments', url: '' },
                  { type: 'mid', url: '' },
                  { type: 'notes', url: '' },
                  { type: 'semester', url: '' },
                  { type: 'syllabus', url: '' },
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
