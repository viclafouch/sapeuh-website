import { LibTheme } from 'some-lib'

import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      actions: {
        disabledBackgroundColor: string
        disabledColor: string
        loadingBackgroundColor: string
      }
      primary: {
        contrastText: string
        dark: string
        light: string
        main: string
      }
      success: {
        contrastText: string
        dark: string
        light: string
        main: string
      }
      error: {
        contrastText: string
        dark: string
        light: string
        main: string
      }
      common: {
        dark: string
        light: string
        grey: string
      }
      divider: string
    }
  }
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends LibTheme {}
}
