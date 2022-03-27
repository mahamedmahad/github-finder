import React, {createContext, useEffect, useState} from 'react';


/**
 * If the browser supports local storage, check if there's a stored theme preference. If there is, use that. If there
 * isn't, check if the user prefers dark mode. If they do, use dark mode. If they don't, use light mode
 * @returns The value of the localStorage item 'current-theme' or 'light' if it doesn't exist.
 */
const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        /* This is checking if there is a local storage item named 'current-theme'. If there is, it returns the value of
        that item. If there isn't, it returns null. */
        const storedPrefs = window.localStorage.getItem('current-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }


    }
    return 'light';

};

//
export const ThemeContext = createContext();

const ThemeProvider = ({initialTheme, children}) => {
    const [theme, setTheme] = useState(getInitialTheme)

    /**
     * If the current theme is dark, remove the light class from the root element and add the dark class. If the current
     * and vise-versa
     * @param existing - The current theme.
     */
    const checkTheme = (existing) => {
        const root = window.document.documentElement;
        const isDark = existing === 'dark';

        root.classList.add(existing);
        root.classList.remove(isDark ? 'light' : 'dark');

        localStorage.setItem('current-theme', existing);
    };

    if (initialTheme) {
        checkTheme(initialTheme);
    }


    /* renders whenever the theme changes. */
    useEffect(() => {
        checkTheme(theme);

    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;