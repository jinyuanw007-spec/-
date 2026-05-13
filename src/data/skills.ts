export interface Skill {
  id: number;
  name: string;
  level: number;
}

export const skills: Skill[] = [
  { id: 1, name: 'React', level: 95 },
  { id: 2, name: 'TypeScript', level: 90 },
  { id: 3, name: 'JavaScript', level: 95 },
  { id: 4, name: 'Node.js', level: 85 },
  { id: 5, name: 'Python', level: 80 },
  { id: 6, name: 'Tailwind CSS', level: 90 },
  { id: 7, name: 'Git', level: 85 },
  { id: 8, name: 'Docker', level: 70 },
];
