import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const home = JSON.parse(await readFile(new URL("../src/home-data.json", import.meta.url)));
function jpegDimensions(bytes) {
  assert.equal(bytes.readUInt16BE(0), 0xffd8);
  for (let offset = 2; offset < bytes.length;) {
    assert.equal(bytes[offset], 0xff);
    const marker = bytes[offset + 1];
    const length = bytes.readUInt16BE(offset + 2);
    if ([0xc0, 0xc1, 0xc2].includes(marker)) {
      return { height: bytes.readUInt16BE(offset + 5), width: bytes.readUInt16BE(offset + 7) };
    }
    offset += length + 2;
  }
  throw new Error("JPEG dimensions not found");
}

test("all nine home tiles have separate cropped thumbnails and complete images", async () => {
  assert.equal(home.length, 9);
  for (const item of home) {
    assert.notEqual(item.image, item.thumbnail);
    assert.ok((await stat(new URL(`../public/assets/${item.thumbnail}`, import.meta.url))).size > 0);
    const bytes = await readFile(new URL(`../public/assets/${item.image}`, import.meta.url));
    const dimensions = jpegDimensions(bytes);
    assert.ok(Math.max(dimensions.width, dimensions.height) >= 1000, item.title);
    assert.ok(Math.abs(dimensions.width / dimensions.height - item.width / item.height) < 0.01,
      `${item.title}: lightbox must retain the original full-image aspect ratio`);
  }
});
