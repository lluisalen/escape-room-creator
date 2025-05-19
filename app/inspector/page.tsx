"use client";

import { useEffect, useRef, useState } from "react";

export default function InspectorPage() {
  const sceneRef = useRef(null);
  const [roomContent, setRoomContent] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aframe");
    }
  }, []);

  return (
    <iframe
      src="/assets/rooms/room-1.html"
      style={{ width: "100vw", height: "100vh", border: "none" }}
    />
  );
}
