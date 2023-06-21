import styled from '@emotion/styled'
import { Text } from '@chakra-ui/layout'
import { Theme } from 'theme'

export const TextTitle = styled(Text)(
  ({ theme }: Theme) => `
    color: ${theme.colors.Alphas['75']};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes['12']};
    line-height: ${theme.lineHeights['2.5']};
`,
)
export const TextContent = styled(Text)(
  ({ theme }: Theme) => `
    color: ${theme.colors.Gray['60']};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.sm};
    line-height: ${theme.lineHeights['4.5']};
`,
)
