import styled from '@emotion/styled'
import { Heading as NewHeading } from '@chakra-ui/layout'
import { Theme } from 'theme'

export const Heading = styled(NewHeading)(
  ({ theme }: Theme) => `
  color: ${theme.colors.Gray['60']};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes['4xl']};
  line-height: ${theme.lineHeights['11']};
`,
)
