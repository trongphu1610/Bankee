import styled from '@emotion/styled'
import { PinInputField as NewInput } from '@chakra-ui/react'
import { Theme } from 'theme'

export const Input = styled(NewInput)(
  ({ theme }: Theme) => `
     border: ${theme.borders.none};
     border-radius: ${theme.radii.none};
     border-bottom: ${theme.borders['1px']};
     margin: ${theme.space['2']};
     height: ${theme.sizes['11']};
     padding-left: ${theme.space['28']};
     padding-bottom: ${theme.space['2']};
     font-size: ${theme.fontSizes['4xl']};
     font-weight: ${theme.fontWeights.bold};
     width: ${theme.space['76']};
     &:focus {
      border: none;
      outline:none;
     }
     &:hover {
      color: ${theme.colors.blue['50']};
      border-bottom: ${theme.borders['1px']};
     }
`,
)
