import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, html } = body;

    if (!id || !html) {
      return NextResponse.json({ error: "Missing id or html" }, { status: 400 });
    }

    const savePath = path.join(process.cwd(), "public", "rooms", `${id}.html`);
    fs.writeFileSync(savePath, html, "utf-8");

    return NextResponse.json({ message: "Scene saved" });
  } catch (error) {
    console.error("Error saving scene:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
