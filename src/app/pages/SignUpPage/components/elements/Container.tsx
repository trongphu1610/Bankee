import styled from '@emotion/styled'
import { Container } from '@chakra-ui/react'
import { Theme } from 'theme'

export const ContainerWrap = styled(Container)(
  ({ theme }: Theme) => `
    background: ${theme.colors.white};
    width: ${theme.sizes.full};
    height: ${theme.sizes.full};
    margin-bottom: ${theme.space['48']};
`,
)
