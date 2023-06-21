import React, { FormEvent } from 'react'
import {
  Box,
  Button,
  Flex,
  ButtonGroup,
  FormControl,
  useTheme,
} from '@chakra-ui/react'
import { Text } from 'app/pages/MobileNumberPage/components/elements/Text'
import { Heading } from 'app/pages/MobileNumberPage/components/elements/Heading'
import { ContainerWrap } from 'app/pages/MobileNumberPage/components/elements/Container'
import PhoneInput from 'react-phone-input-2'
import { useNavigate } from 'react-router-dom'
import { usePhone } from 'contexts/phoneContext'

/**
 * @returns Component mobile number page
 */
export function MobileNumber() {
  const theme = useTheme()
  const navigate = useNavigate()
  const { phone, setPhoneNumber } = usePhone()

  /**
   * @param {FormEvent} e Submit event
   * Next page have subdirectory is /verify_number
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/verify_number')
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
      <Box p="2">
        <Heading>Mobile Number</Heading>
      </Box>
      <Box>
        <Flex alignItems="center" flexDirection="column">
          <Text>Please enter your valid phone number. We will</Text>
          <Text>send you 4-digit code to verify account.</Text>
        </Flex>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        w={'100%'}
      >
        <form onSubmit={handleSubmit}>
          <FormControl
            alignItems="center"
            display={'flex'}
            flexDirection="column"
            gap="2"
            justifyContent={'center'}
            mt={theme.space['35']}
          >
            <PhoneInput
              buttonStyle={{
                border: 'none',
              }}
              containerStyle={{ left: '38px' }}
              country="vn"
              inputStyle={{
                color: theme.colors.Gray['80'],
                backgroundColor: theme.colors.Alphas['60'],
                border: 'none',
                borderRadius: theme.radii['15'],
                width: theme.sizes['82'],
                height: theme.sizes['13'],
              }}
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhoneNumber}
            />
            <ButtonGroup
              alignItems={'center'}
              flexDirection={'column'}
              gap="7px"
              justifyContent="center"
              mt={theme.space['170']}
              w={'100%'}
            >
              <Button loadingText="Submitting" type={'submit'}>
                Send Code
              </Button>
            </ButtonGroup>
          </FormControl>
        </form>
      </Box>
    </ContainerWrap>
  )
}
