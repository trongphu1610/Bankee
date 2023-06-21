import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import { Theme } from 'theme'

export const BoxWrap = styled(Box)(
  ({ theme }: Theme) => `
    background: ${theme.colors.white};
    width: ${theme.sizes['363']};
    height: ${theme.sizes['194']};
    margin-left: ${theme.space['26']};
    margin-bottom: ${theme.space['14']};
    border-radius: ${theme.radii['10']};
`,
)
export const HeaderBox = styled(Box)(
  ({ theme }: Theme) => `
    background: ${theme.colors.blue['50']};
    margin-bottom: ${theme.space['98']};
    height: ${theme.sizes['324']};
    color: ${theme.colors.white};
`,
)
