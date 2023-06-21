import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import { Theme } from 'theme'

export const HeaderBox = styled(Box)(
  ({ theme }: Theme) => `
    background: ${theme.colors.blue['50']};
    margin-bottom: ${theme.space['-90']};
    height: ${theme.sizes['290']};
    color: ${theme.colors.white};
`,
)
