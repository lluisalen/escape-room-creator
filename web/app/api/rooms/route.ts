// app/api/rooms/route.ts
import { Room } from "@/app/lib/types";
import { NextResponse } from "next/server";

export async function GET() {
  // Aquí hauries de connectar amb la teva base de dades
  // Aquest és un exemple amb dades simulades
  const rooms: Room[] = [
    {
      id: "1",
      name: "Misteri a l'aula d'informàtica",
      description:
        "Els alumnes hauran de resoldre enigmes per trobar la contrasenya perduda.",
      entities: [],
    },
    {
      id: "2",
      name: "El laboratori secret",
      description: "Escape room sobre ciències naturals i experiments.",
      entities: [],
    },
  ];

  return NextResponse.json(rooms);
}
