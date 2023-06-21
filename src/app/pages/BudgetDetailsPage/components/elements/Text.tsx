import styled from '@emotion/styled'
import { Text } from '@chakra-ui/layout'
import { Theme } from 'theme'

export const TitleText = styled(Text)(
  ({ theme }: Theme) => `
  color: ${theme.colors.Gray['60']};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes['16']};
`,
)
export const MoneyText = styled(Text)(
  ({ theme }: Theme) => `
  color: ${theme.colors.Gray['60']};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes['14']};
`,
)
export const TotalMoneyText = styled(Text)(
  ({ theme }: Theme) => `
  color: ${theme.colors.blue['30']};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes['14']};
`,
)
export const ContentText = styled(Text)(
  ({ theme }: Theme) => `
  color: ${theme.colors.Alphas['75']};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.xs};
`,
)
