import styled from '@emotion/styled'
import { Input as NewInput } from '@chakra-ui/react'
import { Theme } from 'theme'

export const Input = styled(NewInput)(
  ({ theme }: Theme) => `
   border: ${theme.borders.none};
   border-radius: ${theme.radii['10']};
   background: ${theme.colors.Alphas['60']};
   height: ${theme.sizes['11']};
   padding-left:${theme.space['32']};
   &::placeholder {
    color: ${theme.colors.Gray['80']};
    font-size:${theme.fontSizes.sm};
    line-height:${theme.lineHeights.base};
    font-weight: ${theme.fontWeights.normal};
   }
   &:focus {
    border-color: ${theme.colors.blue['50']};
    background: ${theme.colors.blue['60']};
   }
`,
)
