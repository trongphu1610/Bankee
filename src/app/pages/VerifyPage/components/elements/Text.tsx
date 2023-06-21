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
    color: ${theme.colors.blue['50']};
    text-decoration: underline;
  }
`,
)
export const ResentText = styled(Text)(
  ({ theme }: Theme) => `
  color: ${theme.colors.blue['50']};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.sm};
  line-height: ${theme.lineHeights.base};
  text-decoration: underline;
`,
)
export const PhoneText = styled(Text)(
  ({ theme }: Theme) => `
  color: ${theme.colors.blue['50']};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.sm};
  line-height: ${theme.lineHeights.base};
  text-decoration: underline;
`,
)
export const SuggestText = styled(Text)(
  ({ theme }: Theme) => `
   font-size: ${theme.fontSizes.xs};
`,
)
