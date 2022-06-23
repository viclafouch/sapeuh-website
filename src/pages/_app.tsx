import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globals } from '@theme/global'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={globals} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
