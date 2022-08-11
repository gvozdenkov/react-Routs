import { createContext } from "react";

export const TranslationContext = createContext();

export const translation = {
  en: {
    nav: {
      home: "Home",
      review: "Emoji Review",
      aboutMe: "About me",
      aboutUs: "About us",
    },
  },
  ru: {
    nav: {
      home: "Домой",
      review: "Обзор Emoji",
      aboutMe: "Обо мне",
      aboutUs: "О нас",
    },
  },
};
