import React, { createContext, useState, useEffect } from 'react';
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedThem === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else if (savedTheme === 'light') {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);
    const toogleTheme = () => {
        setDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }
    return (
        <ThemeContext.Provider value={{ isDarkMode, toogleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
