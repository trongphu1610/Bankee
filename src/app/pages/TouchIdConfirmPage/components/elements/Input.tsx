import styled from '@emotion/styled'
import { Input as NewInput } from '@chakra-ui/react'
import { Theme } from 'theme'

export const Input = styled(NewInput)(
  ({ theme }: Theme) => `
     border: ${theme.borders.none};
     border-radius: ${theme.radii['16']};
     margin: ${theme.space['2']};
     font-size: ${theme.fontSizes['4xl']};
     font-weight: ${theme.fontWeights.bold};
     width: ${theme.space['52']};
     height: ${theme.space['52']};
     background: ${theme.colors.Alphas['50']};
     &:focus {
      background: ${theme.colors.blue['50']};
      color: ${theme.colors.white};
     }
`,
)
