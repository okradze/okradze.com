import { createContext, useLayoutEffect, useState } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  useLayoutEffect(() => {
    const initialTheme = localStorage.getItem('theme')

    if (initialTheme && initialTheme !== theme) {
      setTheme(initialTheme)
    }
  }, [])

  const changeTheme = theme => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
