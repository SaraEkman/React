import { useContext } from 'react'
import styled from 'styled-components'
import { ITheme, ThemeContext } from '../contexts/ThemeContext'

interface IButtonProps {
  theme: ITheme
}

interface IThemedButtonProps {
    childern: string;
    onClick?: () => void;
}

export const Button = styled.button`
  background-color: ${(props: IButtonProps) => props.theme.background};
  padding: 15px;
  margin: 20px;
  font-size: 20px;
  color: ${(props: IButtonProps) => props.theme.color};
`

export const ThemedButton = (props: IThemedButtonProps) => {
  const Theme: ITheme = useContext(ThemeContext)

  return (
    <Button theme={Theme} onClick={props.onClick}>
      {props.childern}
    </Button>
  )
}
