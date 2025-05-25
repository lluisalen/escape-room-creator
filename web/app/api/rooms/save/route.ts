import { Room } from "@/app/lib/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data: Room = await request.json();

    // Guardar a la base de dades
    console.log("Guardant sala:", data);

    // Simular un ID si és una sala nova
    if (!data.id || data.id === "new") {
      data.id = Date.now().toString();
    }

    // Aquí hauries de connectar amb la teva base de dades per guardar les dades

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error guardant la sala:", error);
    return NextResponse.json(
      { error: "Error guardant la sala" },
      { status: 500 }
    );
  }
}
