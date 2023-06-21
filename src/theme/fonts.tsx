import { Global } from '@emotion/react'
import React from 'react'

/**
 * Build font family
 */
const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'DM Sans', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
      }
      `}
  />
)

export default Fonts
