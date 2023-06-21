import styled from '@emotion/styled'
import { Theme } from 'theme'
import { Text } from '@chakra-ui/layout'

export const TextHeader = styled(Text)(
  ({ theme }: Theme) => `
    color: ${theme.colors.white};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes['12']};
    line-height: ${theme.lineHeights['4.5']};
    margin-left: ${theme.space['12']};
    margin-top: ${theme.space['29']};
`,
)
export const TextTitle = styled(Text)(
  ({ theme }: Theme) => `
    color: ${theme.colors.Gray['60']};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights['4.5']};
`,
)
export const TextPhone = styled(Text)(
  ({ theme }: Theme) => `
    color: ${theme.colors.Alphas['75']};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes['12']};
    line-height: ${theme.lineHeights['2.5']};
`,
)
