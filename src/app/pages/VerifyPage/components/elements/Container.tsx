import styled from '@emotion/styled'
import { Container } from '@chakra-ui/react'
import { Theme } from 'theme'

export const ContainerWrap = styled(Container)(
  ({ theme }: Theme) => `
    background: ${theme.colors.white};
    width: ${theme.sizes.w};
    height: ${theme.sizes.full};
`,
)
