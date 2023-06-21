import React from 'react'
import styled from '@emotion/styled'
import {
  Flex as NewFlex,
  Heading as NewHeading,
  Text as NewText,
} from '@chakra-ui/react'
import { Theme } from 'theme'
import { useNavigate } from 'react-router-dom'

const Text = styled(NewText)(
  ({ theme }: Theme) => `
    color: ${theme.colors.white};
    font-weight: ${theme.fontWeights.normal};
    font-size:${theme.fontSizes['xl']};
    line-height:${theme.lineHeights['7']};
`,
)
const Heading = styled(NewHeading)(
  ({ theme }: Theme) => `
    color: ${theme.colors.white};
    font-weight: ${theme.fontWeights.bold};
    font-size:${theme.fontSizes['6xl']};
    line-height:${theme.lineHeights['14']}
`,
)
const Flex = styled(NewFlex)(
  ({ theme }: Theme) => `
    background: ${theme.colors.blue['50']};
    width: ${theme.sizes.full};
    height:${theme.sizes.full};
`,
)

/**
 * @returns Component splash page
 */
export function Splash() {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/signup')
  }, 3000)

  return (
    <Flex
      alignItems="center"
      flexDirection={'column'}
      gap="2"
      justifyContent={'center'}
      minWidth="max-content"
    >
      <Heading fontSize={'6xl'}>Bankee</Heading>
      <Text>Bank, Finance Kit</Text>
    </Flex>
  )
}
