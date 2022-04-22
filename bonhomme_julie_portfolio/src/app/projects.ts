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
  //Entrer les projets du plus vieux au plus récent (l'ordre sera inversé sur le site)
  {
    id: 1,
    name: 'Hyrule Castle',
    tech: ["Bash"],
    date: "Septembre 2022",
    description: "Jeu en lignes de commandes de combats en tour par tour basé sur l'univers de Zelda." +
      " Le joueur doit affronter des monstres puis un boss et peut choisir d’attaquer ou de se soigner à chaque tour.",
    image: "../assets/projets/hyrule_castle.png",
    lien_VM: null,
    lien_GH: "https://github.com/Majonnie/hyrule-castle",
  },
  {
    id: 2,
    name: 'Clicker Game',
    tech: ["HTML"," CSS"," PHP (Laravel)"],
    date: "Novembre 2021",
    description: "Jeu consistant à obtenir un maximum de ressources en cliquant" +
      " répétitivement sur un bouton et en achetant des améliorations.",
    image: "../assets/projets/clicker_game.png",
    lien_VM: "TRUC",
    lien_GH: "https://github.com/Majonnie/MyClickerGame",
  },
  {
    id: 3,
    name: 'Liberty Commerce',
    tech: ["HTML", " CSS", " PHP (Laravel)"],
    date: "Novembre 2021",
    description: "Création d'un site d'e-commerce à l'aide du framework Laravel : catalogue trié par pays," +
      " gestion des produits pour les administrateurs, panier, profil de l'utilisateur avec historique des commandes...",
    image: "../assets/projets/liberty_commerce.png",
    lien_VM: "TRUC",
    lien_GH: "https://github.com/Majonnie/LibertyCommerce",
  },
  {
    id: 4,
    name: 'Réalisation d’un site pour J2B',
    tech: ["HTML", " CSS", " PHP (Symfony)"],
    date: "Décembre 2021",
    description: "Création d'un outil de génération de factures afin de répondre à un besoin d'organisation de l'entreprise.",
    image: "../assets/projets/site_J2B.png",
    lien_VM: "TRUC",
    lien_GH: "https://github.com/garoNits/J2BCamp",
  },
  {
    id: 5,
    name: 'my_ls',
    tech: ["C"],
    date: "Janvier 2022",
    description: "Réimplémentation de la commande ls en C.",
    image: "../assets/projets/my_ls.png",
    lien_VM: null,
    lien_GH: "https://github.com/Majonnie/my_ls",
  },
  {
    id: 6,
    name: 'Défi Graven (Dream Travel)',
    tech: ["Godot", " GDScript"],
    date: "Mars 2022",
    description: "Création d'un jeu-vidéo rogue-like (en travaillant principalement sur la construction de maps avec les tilemaps," +
      " le design et les animations du personnage et des ennemis, la caméra et les mouvements).",
    image: "../assets/projets/dream_travel.png",
    lien_VM: null,
    lien_GH: "https://github.com/Majonnie/CodeCampsGraven/tree/fusion-back",
  },
];
