import React from 'react'
import { ThemeType } from './theme.types'

const ThemeContext = React.createContext<ThemeType>({} as ThemeType)

type ThemeProviderProps = {
  theme: ThemeType
  children: React.ReactNode
}

export function ThemeProvider(props: ThemeProviderProps) {
  return <ThemeContext.Provider value={props.theme}>{props.children}</ThemeContext.Provider>
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error('useThemeContext should be used inside a <ThemeProvider>')
  }

  return context
}
