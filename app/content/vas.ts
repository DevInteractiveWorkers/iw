import professionalOptions from "@/components/form/professionalOptions";

export interface VA {
  position: string;
  img: string;
  team: number;
}

// Flat list of your active, uncommented image paths
const activeImages = [
  "/team-2026/ANDERE/andere_04.png",
  "/team-2026/ANDERE/andere_05.png",
  "/team-2026/CAMILA/camila_01.png",
  "/team-2026/CHANTAL/chantal_01.png",
  "/team-2026/CLAUDIA/claudia_01_v2.png",
  "/team-2026/EDUARDO/eduardo_01.png",
  "/team-2026/EDUARDO/eduardo_02.png",
  "/team-2026/GABRIEL/gabriel_01.png",
  "/team-2026/FRANCESCO/francesco_01.png",
  "/team-2026/FRANCESCO/francesco_02.png",
  "/team-2026/FRANCESCO/francesco_03.png",
  "/team-2026/JOSE DANIEL/jose daniel_01.png",
  "/team-2026/JOSE DANIEL/jose daniel_02.png",
  "/team-2026/JOSE DANIEL/jose daniel_03.png",
  "/team-2026/OSWALDO/oswaldo_01.png",
  "/team-2026/OSWALDO/oswaldo_02.png",
  "/team-2026/OSWALDO/oswaldo_03.png",
  "/team-2026/SOFIA/sofia_01.png",
  "/team-2026/SOFIA/sofia_02.png",
  "/team-2026/SOFIA/sofia_03.png",
];

// Statically map professional options to the image pool in a fixed order
export const VAS: VA[] = professionalOptions.map((position, index) => ({
  position,
  img: activeImages[index % activeImages.length],
  team: (index % 10) + 1,
}));

export default VAS;
