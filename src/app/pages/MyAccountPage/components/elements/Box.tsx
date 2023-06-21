import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import { Theme } from 'theme'

export const HeaderBox = styled(Box)(
  ({ theme }: Theme) => `
    background: ${theme.colors.white};
    height: ${theme.sizes['208']};
`,
)
