import styled from '@emotion/styled'
import { Text as TitleText } from '@chakra-ui/layout'
import { Theme } from 'theme'

export const Text = styled(TitleText)(
  ({ theme }: Theme) => `
  color: ${theme.colors.Gray['70']};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.sm};
  line-height: ${theme.lineHeights.base};
`,
)
export const CategoryText = styled(Text)(
  ({ theme }: Theme) => `
  color: ${theme.colors.Gray['60']};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.sm};
  line-height: ${theme.lineHeights['4']};
`,
)
