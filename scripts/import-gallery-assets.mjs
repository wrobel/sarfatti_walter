// One-time migration helper; the deployed website uses local files only.
// gallery-data.json was extracted from the published Wix galleries on 2026-10-21.
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
const root = new URL("../", import.meta.url);
const data = JSON.parse(await readFile(new URL("src/gallery-data.json", root)));
const directory = new URL("public/assets/", root);
await mkdir(new URL("thumbnails/", directory), { recursive: true });
const works = [...new Map(Object.values(data).flat().map(item => [item.image, item])).values()];
const jobs = works.flatMap(item => [1600, 640].map(size => ({ item, size })));
let next = 0;
async function worker() {
  while (next < jobs.length) {
    const { item, size } = jobs[next++];
    const target = new URL(`${size === 640 ? "thumbnails/" : ""}${item.image}`, directory);
    if (await stat(target).then(s => s.size > 0).catch(() => false)) continue;
    const source = `https://static.wixstatic.com/media/${item.source}/v1/fit/w_${size},h_${size},q_90/${item.source}`;
    let lastError;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const response = await fetch(source);
        if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) throw new Error(`Invalid image response: ${response.status}`);
        await writeFile(target, new Uint8Array(await response.arrayBuffer()));
        lastError = null;
        break;
      } catch (error) { lastError = error; }
    }
    if (lastError) throw lastError;
  }
}
await Promise.all(Array.from({ length: 6 }, worker));
console.log(`Imported ${works.length} artworks with sharp 640px thumbnails and up-to-1600px lightbox images.`);
