// src/lib/configDocs.ts
const rawDocs = import.meta.glob("../content/configs/*.md", {
  as: "raw",
  eager: true,
});

const docs = Object.fromEntries(
  Object.entries(rawDocs).map(([path, content]) => {
    const key = path.split("/").pop()!.replace(".md", "");
    return [key, content as string];
  })
);

export function getConfigDoc(key: string): string | null {
  const parts = key.split("_");

  // Try most specific → least specific
  for (let i = parts.length; i > 0; i--) {
    const candidate = parts.slice(0, i).join("_");
    if (docs[candidate]) {
      return docs[candidate];
    }
  }

  return docs["default"] ?? null;
}
