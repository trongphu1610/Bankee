import styled from '@emotion/styled'
import { Text as TitleText } from '@chakra-ui/layout'
import { Theme } from 'theme'

export const Text = styled(TitleText)(
  ({ theme }: Theme) => `
  color: ${theme.colors.Gray['70']};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.sm};
  line-height: ${theme.lineHeights.base};
  & > strong {
    font-weight: ${theme.fontWeights.bold};
  }
`,
)
export const ForgotText = styled(Text)(
  ({ theme }: Theme) => `
  color: ${theme.colors.Gray['70']};
  font-size: ${theme.fontSizes['12']};
  line-height: ${theme.lineHeights['16']};
  margin-right: ${theme.space['32']};
  & > strong {
    font-weight: ${theme.fontWeights.bold};
  }
`,
)

export const TextError = styled(Text)(
  ({ theme }: Theme) => `
  color: ${theme.colors.Red};
`,
)
