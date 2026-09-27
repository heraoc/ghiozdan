/** Normalizează textul pentru căutare: fără diacritice și majuscule („stiinte” găsește „Științe”). */
export function normalize(text: string) {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}

export function matches(query: string, ...fields: string[]) {
  const q = normalize(query);
  return !q || fields.some((f) => normalize(f).includes(q));
}
