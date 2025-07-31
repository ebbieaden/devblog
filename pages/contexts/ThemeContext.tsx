import { createContext, useEffect, useState, ReactNode } from "react";

export const ThemeContext = createContext({
    darkMode: false,
    toggleTheme: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);

        // const root = window.document.documentElement;
        // if (darkMode) {
        //     root.classList.add('dark');
        // } else {
        //     root.classList.remove('dark');
        // }
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
