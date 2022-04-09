export interface Project {
  id: number;
  name: string;
  tech: Array<string>;
  description: string;
  image: string;
}

export const projects = [
  {
    id: 1,
    name: 'Projet 1',
    tech: ["C", " C", " C", " C"],
    description: 'DESC PROJET 1',
    image: "../assets/projets/red.png",
  },
  {
    id: 2,
    name: 'Projet 2',
    tech: ["Js", " Js", " Js", " Js"],
    description: null,
    image: null,
  },
  {
    id: 3,
    name: 'Projet 3',
    tech: ["C++", " C++", " C++", " C++"],
    description: "Description du projet, wow que de détails et de professionnalisme",
    image: null,
  },
];
