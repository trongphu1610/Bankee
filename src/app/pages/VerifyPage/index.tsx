import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  ButtonGroup,
  FormControl,
  useToast,
  useTheme,
  PinInput,
} from '@chakra-ui/react'
import {
  PhoneText,
  ResentText,
  SuggestText,
  Text,
} from 'app/pages/VerifyPage/components/elements/Text'
import { Heading } from 'app/pages/VerifyPage/components/elements/Heading'
import { ContainerWrap } from 'app/pages/VerifyPage/components/elements/Container'
import { useNavigate } from 'react-router-dom'
import { Input } from 'app/pages/VerifyPage/components/elements/Input'
import { usePhone } from 'contexts/phoneContext'

/**
 * @returns Component verify number page
 */
export function VerifyNumber() {
  const theme = useTheme()
  const navigate = useNavigate()
  const toast = useToast()
  const { phone } = usePhone()

  const [inputValue, setInputValue] = useState({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
  })

  /**
   * @param {FormEvent} e Submit event
   * Next page have subdirectory is /account_create
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isSuccess = Object.values(inputValue).every(
      (value: string) => value === '0',
    )
    if (!isSuccess) {
      return toast({
        title: 'Error',
        description: 'Not a Digit Code',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    toast({
      title: 'Success',
      description: 'Đăng nhập thành công',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
    navigate('/account_create')
  }
  return (
    <ContainerWrap
      alignItems="center"
      display="flex"
      flexDirection={'column'}
      gap="2"
      justifyContent={'center'}
      maxW={{ base: '100%', md: '75%', xl: '50%' }}
      minWidth="max-content"
    >
      <Box mt={theme.space['76']} p="2">
        <Heading>Verify Account!</Heading>
      </Box>
      <Box>
        <Flex alignItems="center" flexDirection="column">
          <Text>Enter 4-digit Code code we have sent to at</Text>
          <PhoneText>{`+${phone}`}</PhoneText>
        </Flex>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        mt={theme.space['24']}
        w={'100%'}
      >
        <form onSubmit={handleSubmit}>
          <FormControl
            alignItems="center"
            display={'flex'}
            flexDirection="column"
            gap="2"
            justifyContent={'center'}
          >
            <Box gap={'2px'}>
              <PinInput placeholder={''}>
                <Input
                  value={inputValue.value1}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setInputValue({ ...inputValue, value1: e.target.value })
                  }}
                />
                <Input
                  value={inputValue.value2}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setInputValue({ ...inputValue, value2: e.target.value })
                  }}
                />
                <Input
                  value={inputValue.value3}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setInputValue({ ...inputValue, value3: e.target.value })
                  }}
                />
                <Input
                  value={inputValue.value4}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setInputValue({ ...inputValue, value4: e.target.value })
                  }}
                />
              </PinInput>
            </Box>
            <Flex
              alignItems={'center'}
              flexDirection={'column'}
              justifyContent="center"
              mt={theme.space['26']}
            >
              <Text>Didn't not received the code?</Text>
              <ResentText mt={'6px'}>Resend Code</ResentText>
            </Flex>
            <ButtonGroup
              alignItems={'center'}
              flexDirection={'column'}
              gap="7px"
              justifyContent="center"
              mt={theme.space['160']}
              w={'100%'}
            >
              <Button loadingText="Submitting" type={'submit'}>
                Proceed
              </Button>
            </ButtonGroup>
          </FormControl>
        </form>
        <Flex
          alignItems={'center'}
          flexDirection={'column'}
          justifyContent="center"
          mt={theme.space['21']}
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
