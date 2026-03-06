export const languages = {
  pl: "Polski",
  en: "English",
} as const;

export const defaultLang = "pl" as const;

export const ui = {
  pl: {
    "nav.home": "Home",
    "nav.about": "O nas",
    "nav.windsurfing": "Windsurfing",
    "nav.surfing": "Surfing",
    "nav.location": "Lokalizacja",
    "nav.pricing": "Cennik",
    "nav.contact": "Kontakt",
    "footer.rights": "Wszelkie prawa zastrzeżone",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.windsurfing": "Windsurfing",
    "nav.surfing": "Surfing",
    "nav.location": "Location",
    "nav.pricing": "Prices",
    "nav.contact": "Contact",
    "footer.rights": "All rights reserved",
  },
} as const;

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalePath(lang: Lang, anchor = "") {
  const base = lang === defaultLang ? "/" : `/${lang}/`;
  return `${base}${anchor}`;
}
