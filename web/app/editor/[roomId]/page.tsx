'use client';
import { useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function EditorPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const params = useParams();
  const id = params.roomId as string;
  const [newName, setNewName] = useState("");

  const handleSave = () => {
    iframeRef.current?.contentWindow?.postMessage("export-scene", "*");
  };

  const handleRename = async () => {
    if (!newName) return alert("Introduce un nuevo nombre");

    const res = await fetch("/api/rename-room", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ oldId: id, newId: newName }),
    });

    if (res.ok) {
      alert("Renombrado!");
      window.location.href = `/editor/${newName}`;
    } else {
      alert("Error al renombrar");
    }
  };

  // ... useEffect para guardar (sin cambios)

  return (
    <div>
      <button onClick={handleSave} style={{ position: "absolute", top: 10, left: 10 }}>
        Guardar cambios
      </button>

      <input
        type="text"
        placeholder="Nuevo nombre"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        style={{ position: "absolute", top: 10, left: 150 }}
      />

      <button onClick={handleRename} style={{ position: "absolute", top: 10, left: 300 }}>
        Renombrar
      </button>
    <br></br>
    <br></br>
    <br></br>
      <iframe
        ref={iframeRef}
        src={`/rooms/${id}.html`}
        style={{ width: "100vw", height: "100vh", border: "none" }}
      />
    </div>
  );
}



// export default function EditorPage() {
//   const iframeRef = useRef<HTMLIFrameElement>(null);
//   const params = useParams();
//   const id = params.roomId;

//   const handleSave = () => {
//     iframeRef.current?.contentWindow?.postMessage("export-scene", "*");
//   };

//   useEffect(() => {
//     const receive = async (event: MessageEvent) => {
//       if (event.data?.type === "scene-export") {
//         const res = await fetch("/api/save-scene", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             id,
//             html: event.data.html,
//           }),
//         });
//         if (res.ok) alert("Escena guardada!");
//         else alert("Error al guardar");
//       }
//     };

//     window.addEventListener("message", receive);
//     return () => window.removeEventListener("message", receive);
//   }, [id]);

//   return (
//     <div>
//       <button
//         onClick={handleSave}
//         style={{ position: "absolute", top: 10, left: 10, zIndex: 10 }}
//       >
//         Guardar cambios
//       </button>
//       <br></br>
//       <br></br>
//       <br></br> 
//       <iframe
//         ref={iframeRef}
//         src={`/rooms/${id}.html`}
//         style={{ width: "100vw", height: "100vh", border: "none" }}
//       />
//     </div>
//   );
// }
