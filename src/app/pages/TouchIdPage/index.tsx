import React from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Image,
  useTheme,
} from '@chakra-ui/react'
import { Heading } from 'app/pages/TouchIdPage/components/elements/Heading'
import { Text } from 'app/pages/TouchIdPage/components/elements/Text'
import { ContainerGroup } from 'app/pages/TouchIdPage/components/elements/Container'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

/**
 * @returns Component touch id page
 */
export function TouchId() {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <ContainerGroup>
      <ChevronLeftIcon
        boxSize={6}
        cursor={'pointer'}
        ml={theme.space['21']}
        mt={theme.space['48']}
        onClick={() => navigate('/account_create')}
      />
      <Container
        alignItems="center"
        display="flex"
        flexDirection={'column'}
        gap="2"
        justifyContent={'center'}
        minWidth="max-content"
        pt={theme.space['24']}
      >
        <Box mr={theme.space['16']}>
          <Image boxSize={'230px'} src="assets/finger_id.png" />
        </Box>
        <Box mt={theme.space['18']} p="2">
          <Heading align={'center'}>Use Touch ID to</Heading>
          <Heading>authorise payments</Heading>
        </Box>
        <Box>
          <Flex alignItems="center" flexDirection="column">
            <Text>Activate touch ID so you Don’t need </Text>
            <Text>to confirm your PIN every time you</Text>
            <Text>want to send money</Text>
          </Flex>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          mt={theme.space['30']}
          w={'100%'}
        >
          <ButtonGroup
            alignItems={'center'}
            flexDirection={'column'}
            gap="7px"
            justifyContent="center"
            w={'100%'}
          >
            <Button
              loadingText="Submitting"
              type={'submit'}
              onClick={() => navigate('/touch_confirmation')}
            >
              Activate Now
            </Button>
            <Button size={'md'} variant={'solid'}>
              Skip This
            </Button>
          </ButtonGroup>
        </Box>
      </Container>
    </ContainerGroup>
  )
}
