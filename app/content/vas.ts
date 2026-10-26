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

// Team 1: Front-Office, Marketing & Revenue Operations
const team1Positions = [
  "Dispatchers",
  "Customer Service Agent",
  "Sales Agent",
  "Schedulers",
  "Social Media Manager",
  "Graphic Designer",
  "Web Developer",
  "Copywriter",
  "Video Editor",
  "Intake Coordinators",
  "ADS Specialist",
  "Telemarketing Agent",
];

// Team 2: Back-Office, Administrative & Specialized Support
const team2Positions = [
  "General Virtual Assistant",
  "Administrative Assistant",
  "Executive Operational Assistant",
  "Recruiters",
  "HR Coordinators",
  "Helpdesk & Ticket Triage Agent",
  "Insurance Assistant",
  "Transcriptionist",
  "Medical Scriber",
  "Legal Assistant",
  "Accountant",
];

// Statically map positions to the image pool in a fixed order
export const VAS: VA[] = [
  ...team1Positions.map((position) => ({ position, team: 1 })),
  ...team2Positions.map((position) => ({ position, team: 2 })),
].map((va, index) => ({
  ...va,
  img: activeImages[index % activeImages.length],
}));

export default VAS;
