import { createContext } from "react";

export const ThemeContext = createContext();

export const theme = {
  light: {
    color: "light",
  },
  dark: {
    color: "dark",
  },
};
