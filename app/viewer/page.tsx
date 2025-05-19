"use client";

import { Room } from "@/app/lib/types";
import "aframe";
import { useEffect, useState } from "react";

export default function PlayEscapeRoom({
  params,
}: {
  params: { roomId: string };
}) {
  const [roomData, setRoomData] = useState<Room | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Carregar les dades de la sala
    const fetchRoom = async () => {
      try {
        const response = await fetch(`/api/rooms/${params.roomId}`);
        if (response.ok) {
          const data = await response.json();
          setRoomData(data);
        } else {
          console.error("Error carregant la sala");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();

    // Registrar els components per a les interaccions
    if (typeof window !== "undefined") {
      AFRAME.registerComponent("escape-interactive", {
        schema: {
          type: { type: "string", default: "question" },
          question: { type: "string", default: "" },
          answer: { type: "string", default: "" },
          feedback: { type: "string", default: "" },
          unlocks: { type: "string", default: "" },
        },
        init: function () {
          const el = this.el;
          const data = this.data;

          // Afegir event listener per a clicks
          el.addEventListener("click", function () {
            if (data.type === "question") {
              const userAnswer = prompt(data.question);
              if (
                userAnswer &&
                userAnswer.toLowerCase() === data.answer.toLowerCase()
              ) {
                alert(data.feedback || "Correcte!");

                // Desbloquejar un altre objecte si cal
                if (data.unlocks) {
                  const targetEl = document.querySelector("#" + data.unlocks);
                  if (targetEl) {
                    targetEl.setAttribute("visible", true);
                  }
                }
              } else {
                alert("Resposta incorrecta. Torna a provar-ho!");
              }
            } else if (data.type === "info") {
              alert(data.feedback || "Info");
            }
          });
        },
      });
    }
  }, [params.roomId]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Carregant...
      </div>
    );
  }

  return (
    <div className="h-screen">
      <a-scene embedded>
        <a-entity id="scene-content">
          {roomData && roomData.entities ? (
            <div
              dangerouslySetInnerHTML={{ __html: roomData.entities.join("\n") }}
            />
          ) : (
            <div>No s'ha trobat el contingut de la sala</div>
          )}
        </a-entity>
        <a-entity
          camera
          look-controls
          wasd-controls
          position="0 1.6 0"
        ></a-entity>
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </div>
  );
}
