import { ThemeProvider as EThemeProvider } from '@emotion/react'

export const THEME = {
  palette: {
    actions: {
      disabledBackgroundColor: '#c4c4c4',
      disabledColor: 'rgba(255, 255, 255, 0.75)',
      loadingBackgroundColor: '#e5e5e5'
    },
    primary: {
      contrastText: '#ffffff',
      dark: '#000000',
      light: '#131313',
      main: '#000000'
    },
    success: {
      contrastText: '#ffffff',
      dark: '#0e9e57',
      light: '#52e39b',
      main: '#26d07c'
    },
    error: {
      contrastText: '#ffffff',
      dark: '#cc1d31',
      light: '#ed4256',
      main: '#f4364c'
    },
    common: {
      dark: '#000000',
      light: '#ffffff',
      grey: '#595959'
    },
    divider: '#e5e5e5'
  }
}

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  return <EThemeProvider theme={THEME}>{children}</EThemeProvider>
}
