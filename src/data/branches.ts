export type Branch = {
  id: number;
  name: string;
  abbreviation: string;
};

const branches: Branch[] = [
  { id: 1, name: 'Computer Science & Engineering', abbreviation: 'CSE' },
  {
    id: 2,
    name: 'Data Science',
    abbreviation: 'DS',
  },
  {
    id: 3,
    name: 'Machine Learning',
    abbreviation: 'AI-ML',
  },
  { id: 4, name: 'Mechanical Engineering', abbreviation: 'ME' },
  { id: 5, name: 'Electrical Engineering', abbreviation: 'EE' },
  {
    id: 6,
    name: 'Electronics & Communication Engineering',
    abbreviation: 'ECE',
  },
];

export default branches;
