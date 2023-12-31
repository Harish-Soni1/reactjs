import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    theme: "light",
    darkMode: () => {},
    lightMode: () => {}
})

export const ThemeProvider = ThemeContext.Provider;

export const usetheme = () => {
    return useContext(ThemeContext);
}