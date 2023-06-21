import styled from '@emotion/styled'
import { Theme } from 'theme'
import { Box } from '@chakra-ui/react'

export const BoxContent = styled(Box)(
  ({ theme }: Theme) => `
  width: ${theme.sizes['10']};
  height: ${theme.sizes['10']};
  border-radius: ${theme.radii['99']};
  margin-right: ${theme.space['10']};
  margin-top: ${theme.space['25']};
`,
)
