export const slugify = (text: string | undefined | null) =>
  (text ?? '')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')       // remove special chars
    .replace(/\s+/g, '-')           // spaces to dashes
    .replace(/-+/g, '-')            // collapse multiple dashes
    .trim();
