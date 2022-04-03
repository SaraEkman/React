import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import { ThemedButton } from './components/ThemedButton'
import { ITheme, ThemeContext, Themes } from './contexts/ThemeContext'

interface IStyledAppProps {
  Theme: ITheme
}

const SyledApp = styled.div`
  background-color: ${(props: IStyledAppProps) => props.Theme.background};
  color: ${(props: IStyledAppProps) => props.Theme.color};
`

function App() {
  const [theme, setTheme] = useState<ITheme>(Themes.dark)

  const changeTheme = () => {
    if (theme === Themes.light) {
      setTheme(Themes.dark)
    } else setTheme(Themes.light)
  }

  const handleClick = () => {
    console.log("Du är bäst Hallllo");
    
  }

  return (
    <ThemeContext.Provider value={theme}>
      <SyledApp Theme={theme}>
        <ThemedButton childern="Heje" onClick={changeTheme}></ThemedButton>
        <ThemedButton childern="hallllo" onClick={handleClick}></ThemedButton>
        <ThemedButton childern="Va"></ThemedButton>
      </SyledApp>
    </ThemeContext.Provider>
  )
}

export default App
