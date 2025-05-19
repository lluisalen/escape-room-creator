// types/Room.ts
export interface Room {
  id: string;
  name: string;
  description: string;
  entities: string[];
}

// types/Object3D.ts
export interface Object3D {
  name: string;
  component: string;
  properties: Record<string, string>;
}

// types/Interaction.ts
export interface Interaction {
  type: "question" | "key" | "info";
  question?: string;
  answer?: string;
  feedback?: string;
  unlocks?: string;
}
