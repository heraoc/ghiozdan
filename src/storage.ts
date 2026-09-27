// Preferințe ținute minte pe dispozitiv (clasa, limba).
// localStorage poate lipsi sau arunca erori (mod privat, stocare blocată),
// iar atunci site-ul merge mai departe cu valorile implicite.

export function loadPref<T extends string | number>(key: string, allowed: readonly T[], fallback: T): T {
  try {
    const saved = localStorage.getItem(`ghiozdan.${key}`);
    const match = allowed.find((v) => String(v) === saved);
    if (match !== undefined) return match;
  } catch {
    // ignorăm
  }
  return fallback;
}

export function savePref(key: string, value: string | number) {
  try {
    localStorage.setItem(`ghiozdan.${key}`, String(value));
  } catch {
    // ignorăm
  }
}
