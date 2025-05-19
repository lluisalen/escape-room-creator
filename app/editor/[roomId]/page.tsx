"use client";

import { Room } from "@/app/lib/types";
import EscapeRoomEditor from "@/components/editor/EscapeRoomEditor";
import { useEffect, useState } from "react";

export default function EditorPage({ params }: { params: { roomId: string } }) {
  const [roomData, setRoomData] = useState<Room>({
    id: params.roomId,
    name: "Nova sala d'escape",
    description: "Descripció de la sala d'escape",
    entities: [],
  });

  // Aquí podries carregar les dades de la sala si existeix
  useEffect(() => {
    if (params.roomId !== "new") {
      // Carregar dades de la sala
      // fetch(`/api/rooms/${params.roomId}`)...
    }
  }, [params.roomId]);

  return (
    <div className="min-h-screen bg-gray-100">
      <EscapeRoomEditor roomData={roomData} setRoomData={setRoomData} />
    </div>
  );
}
