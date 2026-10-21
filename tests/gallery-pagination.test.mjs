import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { INITIAL_GALLERY_SIZE, nextGallerySize } from "../src/gallery-pagination.mjs";

const data = JSON.parse(await readFile(new URL("../src/gallery-data.json", import.meta.url)));
for (const [name, works] of Object.entries(data)) {
  test(`${name}: Show More reaches every artwork without exceeding the total`, () => {
    assert.equal(works.length, name === "modern" ? 58 : 35);
    let count = INITIAL_GALLERY_SIZE;
    let clicks = 0;
    while (count < works.length) {
      const next = nextGallerySize(count, works.length);
      assert.ok(next > count && next <= works.length);
      count = next;
      assert.ok(++clicks < 20);
    }
    assert.equal(count, works.length);
    assert.equal(nextGallerySize(count, works.length), count);
  });
  test(`${name}: all high-resolution images and thumbnails exist`, async () => {
    for (const work of works) {
      assert.ok(work.title && work.image && work.source);
      for (const prefix of ["", "thumbnails/"]) {
        const file = new URL(`../public/assets/${prefix}${work.image}`, import.meta.url);
        assert.ok((await stat(file)).size > 0, file.pathname);
        const bytes = await readFile(file);
        assert.equal(bytes[0], 0xff, "expected a JPEG, not an error page");
        assert.equal(bytes[1], 0xd8);
      }
    }
  });
}
