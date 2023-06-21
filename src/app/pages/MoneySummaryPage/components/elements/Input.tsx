import styled from '@emotion/styled'
import { Input as NewInput } from '@chakra-ui/react'
import { Theme } from 'theme'

export const Input = styled(NewInput)(
  ({ theme }: Theme) => `
     border-radius: ${theme.radii['20']};
     font-size: ${theme.fontSizes['12']};
     font-weight: ${theme.fontWeights.medium};
     width: ${theme.sizes['90']};
     height: ${theme.sizes['30']};
     background: ${theme.colors.Alphas['80']};
     padding-left: ${theme.space['21']};
     margin-left: ${theme.space['40']};
     &:focus {
      background: ${theme.colors.blue['50']};
      color: ${theme.colors.white};
     }
`,
)
