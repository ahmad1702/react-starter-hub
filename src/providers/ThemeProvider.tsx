import React, { createContext, useContext, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { DaisyUITheme } from '../styles/themes';

type ThemeProviderProps = {
    theme: DaisyUITheme;
    setTheme: React.Dispatch<React.SetStateAction<DaisyUITheme>>;
    changeTheme: (newTheme: DaisyUITheme) => void
}

export const ThemeContext = createContext<ThemeProviderProps>({
    theme: "night",
    setTheme: () => null,
    changeTheme: () => null
})
export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useLocalStorageState<DaisyUITheme>('theme', {
        defaultValue: 'night'
    })

    const changeTheme = (newTheme: DaisyUITheme) => {
        setTheme(newTheme)
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])
    const providerValue = { theme, setTheme, changeTheme}

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider