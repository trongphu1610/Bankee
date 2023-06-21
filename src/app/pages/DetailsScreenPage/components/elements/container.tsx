import styled from '@emotion/styled'
import { Container } from '@chakra-ui/react'
import { Theme } from 'theme'

export const ContainerGroup = styled(Container)(
  ({ theme }: Theme) => `
    background: ${theme.colors.Alphas['80']};
    width: ${theme.sizes.w};
    height: ${theme.sizes.full};
    padding-left: ${theme.space[0]};
    padding-right: ${theme.space[0]};
`,
)
