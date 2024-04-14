import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { ITheme, THEME } from '../dto/theme'
import { TAILWIND_APP_THEME } from '../storage/storageConfig'

interface ThemeContextProps {
  isDarkMode: boolean
  handleToggleTheme: () => void
}

interface ThemeProviderProps {
  children: React.ReactNode
}
const ThemeContext = createContext({} as ThemeContextProps)

function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  const isClient =
    typeof window !== 'undefined' && typeof localStorage !== 'undefined'

  function getTheme() {
    if (!isClient) return THEME.light
    const response = localStorage.getItem(TAILWIND_APP_THEME)

    const theme = response ? JSON.parse(response) : THEME.light

    return theme as ITheme
  }

  function updateTheme(theme: ITheme) {
    if (!isClient) return
    localStorage.setItem(TAILWIND_APP_THEME, JSON.stringify(theme))
  }

  const isTheSystemThemeDarkMode =
    isClient && window.matchMedia('(prefers-color-scheme: dark)').matches
  const isTheLocalStorageThemeDarkMode = getTheme() === THEME.dark
  const isDefaultThemeDarkMode =
    isClient && isTheSystemThemeDarkMode && isTheLocalStorageThemeDarkMode

  const [isDarkMode, setIsDarkMode] = useState(isDefaultThemeDarkMode)

  const handleToggleTheme = useCallback(() => {
    setIsDarkMode((prevState) => !prevState)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const rootElement = window.document.documentElement

    if (isDarkMode) {
      rootElement.classList.add(THEME.dark)
      updateTheme(THEME.dark)
    } else {
      rootElement.classList.remove(THEME.dark)
      updateTheme(THEME.light)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient, isDarkMode])

  const contextValue = useMemo(
    () => ({ isDarkMode, handleToggleTheme }),
    [isDarkMode, handleToggleTheme],
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
