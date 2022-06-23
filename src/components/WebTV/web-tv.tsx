import React from 'react'
import Script from 'next/script'

import * as Styled from './web-tv.styled'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const Twitch: any

const TWITCH_ID = 'twitch-embed'

const WebTV = () => {
  const handleLoad = () => {
    // eslint-disable-next-line
    new Twitch.Embed(TWITCH_ID, {
      width: '100%',
      height: '100%',
      channel: 'sapeuh'
    })
  }

  return (
    <Styled.Container>
      <Script src="https://embed.twitch.tv/embed/v1.js" onLoad={handleLoad} />
      <Styled.EmbedContainer id={TWITCH_ID} />
    </Styled.Container>
  )
}

export default WebTV
