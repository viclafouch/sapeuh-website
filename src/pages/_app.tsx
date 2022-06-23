import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globals } from '@theme/global'
import { ThemeProvider } from '@theme/theme'

export type NextPageWithLayout = NextPage & {
  getLayout: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return page
    })

  return (
    <ThemeProvider>
      <Global styles={globals} />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default MyApp
