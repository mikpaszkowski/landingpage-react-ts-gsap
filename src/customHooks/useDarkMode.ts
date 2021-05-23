import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../styles/theme";
import { DefaultTheme } from "styled-components";

export const useDarkMode = () => {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme: React.MouseEventHandler<HTMLButtonElement> = () => {
        if(theme === lightTheme){
            window.localStorage.setItem('theme', 'darkTheme');
            setTheme(darkTheme);
        }else{
            window.localStorage.setItem('theme', 'lightTheme');
            setTheme(lightTheme);
        }
    }
    useEffect(() => {
        if(window.localStorage.getItem('theme') === 'darkTheme'){
            setTheme(darkTheme);
        }else{
            setTheme(lightTheme)
        }
    }, []);

    return [theme, toggleTheme];
}