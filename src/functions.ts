import { lightTheme, darkTheme, Theme } from "./theme";

export const getTheme = (): Theme => {
  const theme = window.localStorage.getItem("theme");
  if (theme) {
    return theme === "dark" ? darkTheme : lightTheme;
  } else {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? darkTheme
      : lightTheme;
  }
};

export const storeTheme = (theme: Theme) => {
  if (theme === darkTheme) {
    window.localStorage.setItem("theme", "dark");
  } else {
    window.localStorage.setItem("theme", "light");
  }
};
