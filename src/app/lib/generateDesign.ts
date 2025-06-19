// /src/lib/generateDesign.ts
import { Design } from "../data/designs";

export async function generateDesign(level: "easy" | "medium" | "hard"): Promise<Design> {
  const res = await fetch("/api/generate-design", {
    method: "POST",
    body: JSON.stringify({ level }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to generate design");

  const data = await res.json();

  return {
    id: Date.now(),
    html: data.html,
    label: data.label,
    colors: [], // Optional: extract colors later
  };
}
