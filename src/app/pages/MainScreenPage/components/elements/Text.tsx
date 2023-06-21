import styled from '@emotion/styled'
import { Text } from '@chakra-ui/layout'
import { Theme } from 'theme'

export const TextContent = styled(Text)(
  ({ theme }: Theme) => `
  color: ${theme.colors.Gray['60']};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.xs};
  line-height: ${theme.lineHeights['20']};
`,
)

export const TextTitle = styled(Text)(
  ({ theme }: Theme) => `
  color: ${theme.colors.Gray['60']};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes['18']};
  line-height: ${theme.lineHeights['23']};
`,
)

export const TextActivity = styled(Text)(
  ({ theme }: Theme) => `
  color: ${theme.colors.Gray['70']};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes['11']};
  line-height: ${theme.lineHeights['2']};
`,
)

export const TextMoney = styled(Text)(
  ({ theme }: Theme) => `
  color: ${theme.colors.Gray['60']};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes['1xl']};
  line-height: ${theme.lineHeights['8']};
`,
)
