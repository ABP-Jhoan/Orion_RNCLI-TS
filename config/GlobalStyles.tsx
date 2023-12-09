import { useAppSelector } from "./Redux/hooks"

export const useStyles = () => {
  const theme = useAppSelector((state) => state.theme.theme)
  const lightStyles = {
    backgroundColor: '#fff',
    secondaryColor: '#215877',
    drawerItemFontColor: '#636363',
    fontColor: '#000',
    fontCardColor: '#8f8f8f',
    resaltadoPrincipal: '#215877',
    resaltadoSecundario: '#5fb2f9',
  }
  const darkStyles = {
    backgroundColor: '#0F1C2E',
    secondaryColor: '#374357',
    drawerItemFontColor: '#fff',
    fontColor: '#fff',
    fontCardColor: '#fff',
    resaltadoPrincipal: '#5fb2f9',
    resaltadoSecundario: '#5fb2f9',
  }
  return theme ?  lightStyles : darkStyles
}