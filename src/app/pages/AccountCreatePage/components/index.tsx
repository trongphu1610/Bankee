import React from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  useTheme,
} from '@chakra-ui/react'
import { Heading } from 'app/pages/AccountCreatePage/components/elements/Heading'
import {
  SuggestText,
  Text,
} from 'app/pages/AccountCreatePage/components/elements/Text'
import { ContainerWrap } from 'app/pages/AccountCreatePage/components/elements/Container'
import { useNavigate } from 'react-router-dom'

/**
 * @returns Component accountCreate page
 */
export function AccountCreate() {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <ContainerWrap
      alignItems="center"
      display="flex"
      flexDirection={'column'}
      gap="2"
      justifyContent={'center'}
      maxW={{ base: '100%', md: '75%', xl: '50%' }}
      minWidth="max-content"
      pt={theme.space['24']}
    >
      <Box mr={theme.space['16']}>
        <Image boxSize={'210px'} src="assets/thumbs_up.png" />
      </Box>
      <Box mt={theme.space['76']} p="2">
        <Heading>Account Created!</Heading>
      </Box>
      <Box>
        <Flex alignItems="center" flexDirection="column">
          <Text>Dear user your account has been created </Text>
          <Text>successfully. Continue to start using app </Text>
        </Flex>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        mt={theme.space['110']}
        w={'100%'}
      >
        <ButtonGroup
          alignItems={'center'}
          flexDirection={'column'}
          gap="7px"
          justifyContent="center"
          w={'100%'}
        >
          <Button onClick={() => navigate('/touch_id')}>Continue</Button>
        </ButtonGroup>
        <Flex
          alignItems={'center'}
          flexDirection={'column'}
          justifyContent="center"
          mt={theme.space['2']}
        >
          <SuggestText>
            by clicking start you agree to our <strong>Privacy Policy</strong>
          </SuggestText>
          <SuggestText>
            our <strong>Teams and Conditions</strong>
          </SuggestText>
        </Flex>
      </Box>
    </ContainerWrap>
  )
}
