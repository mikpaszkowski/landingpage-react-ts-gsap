import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../styles/theme";
import { DefaultTheme } from "styled-components";

export const useTheme = (): { theme: DefaultTheme, toggleTheme: () => void} => {
   const readFromLocalStorage = (): boolean => JSON.parse(window.localStorage.getItem("darkModeEnabled") || "false");
   const saveToLocalStorage = (state: boolean) => window.localStorage.setItem("darkModeEnabled", `${state}`);

   const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(readFromLocalStorage());
   const toggleTheme = () => setDarkModeEnabled(prevValue => !prevValue);

   useEffect(() => saveToLocalStorage(darkModeEnabled), [darkModeEnabled]);

   return {
       theme: darkModeEnabled ? darkTheme : lightTheme,
       toggleTheme
   }
}