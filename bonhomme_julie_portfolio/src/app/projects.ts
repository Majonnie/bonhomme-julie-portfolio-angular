export interface Project {
  id: number;
  name: string;
  tech: Array<string>;
  date: string;
  description: string;
  image: string;
  lien_VM: string;
  lien_GH: string;
}

export const projects = [
  //Entrer les projets du plus vieux au plus récent
  {
    id: 1,
    name: 'Projet 1',
    tech: ["C", " C", " C", " C"],
    date: "Novembre 2022",
    description: 'DESC PROJET 1',
    image: "../assets/projets/red.png",
    lien_VM: "TRUC",
    lien_GH: "GH",
  },
  {
    id: 2,
    name: 'Projet 2',
    tech: ["Js", " Js", " Js", " Js"],
    date: "Novembre 2022",
    description: null,
    image: null,
    lien_VM: "TRUC",
    lien_GH: "GH",
  },
  {
    id: 3,
    name: 'Projet 3',
    tech: ["C++", " C++", " C++", " C++"],
    date: "Novembre 2022",
    description: "Description du projet, wow que de détails et de professionnalisme",
    image: null,
    lien_VM: null,
    lien_GH: "GH",
  },
];
