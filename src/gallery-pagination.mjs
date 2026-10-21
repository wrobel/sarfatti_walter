export const INITIAL_GALLERY_SIZE = 9;
export const GALLERY_PAGE_SIZE = 6;

export function nextGallerySize(current, total) {
  return Math.min(current + GALLERY_PAGE_SIZE, total);
}
