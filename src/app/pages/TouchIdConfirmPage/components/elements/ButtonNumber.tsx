import styled from '@emotion/styled'
import { Button as CharkaButton } from '@chakra-ui/react'
import { Theme } from 'theme'

export const ButtonNumber = styled(CharkaButton)(
  ({ theme }: Theme) => `
     border: ${theme.borders.none};
     border-radius: ${theme.radii['16']};
     margin: ${theme.space['2']};
     font-size: ${theme.fontSizes['1xl']};
     font-weight: ${theme.fontWeights.bold};
     width: ${theme.space['52']};
     height: ${theme.space['52']};
     background: ${theme.colors.white};
     color: ${theme.colors.Gray['60']};
     padding-left:  ${theme.space['52']};
     padding-right:  ${theme.space['52']};
     padding-bottom: ${theme.space['30']};
     &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.Gray['60']};
     }
`,
)
