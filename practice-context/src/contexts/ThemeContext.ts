import react from 'react';
export interface ITheme {
    background: string;
    color: string;
}
interface IThemes {
    dark: ITheme;
    light: ITheme;
}

export const Themes: IThemes = {
    dark: {
        background: "blue",
        color: "white"
    },
    light: {
        background: "pink",
        color: "black"
    }
}

export const ThemeContext = react.createContext<ITheme>(Themes.light)