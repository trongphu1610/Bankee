import React, { ChangeEvent, useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  ButtonGroup,
  Checkbox,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from '@chakra-ui/react'

import { Text, TextError } from 'app/pages/SignUpPage/components/elements/Text'
import { useFormik } from 'formik'
import { validateEmail, validatePassWord } from 'utils/authenRegex'
import { Input } from 'app/pages/SignUpPage/components/elements/Input'
import { Heading } from 'app/pages/SignUpPage/components/elements/Heading'
import { ContainerWrap } from 'app/pages/SignUpPage/components/elements/Container'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type User = {
  name: string
  email: string
  password: string
  agreedToTerms: boolean | string
}

/**
 * @param {User} values get value input
 * Validate input
 */
export const validate = (values: User) => {
  const errors: Partial<User> = {}
  if (!values.name) {
    errors.name = 'Full Name is Required.'
  } else if (values.name.length > 20) {
    errors.name = 'Must be 20 characters or less'
  }
  if (!values.email) {
    errors.email = 'Email is Required.'
  } else if (!validateEmail.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Password is Required.'
  } else if (!validatePassWord.test(values.password)) {
    errors.password = 'Invalid Password address'
  }
  if (!values.agreedToTerms) {
    errors.agreedToTerms = 'You must agree to terms and conditions to continue'
  }
  return errors
}

/**
 * @returns Component sign up page
 */
export function SignUp() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      agreedToTerms: false,
    },
    validate,
    onSubmit: async (values: User) => {
      setIsLoading(true)
      try {
        const url = '/singup'
        await axios.post(url, values)
        setIsLoading(false)
        navigate('/signin')
      } catch (error) {
        let message = 'Unknown Error'
        if (error instanceof Error) message = error.message
        toast({
          title: 'Error',
          description: message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        setIsLoading(false)
      }
    },
  })

  /**
   * Handle click show pass
   */
  const handleClick = () => setShow(!show)
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
      <Box mb="4px" ml="8px" p="2">
        <Heading>Welcome!</Heading>
      </Box>
      <Box>
        <Box
          alignItems={'center'}
          display={'flex'}
          flexDirection={{ sm: 'column', md: 'row' }}
          mb={{ sm: '14px' }}
        >
          <Text ml={{ sm: '4px' }} pr={{ sm: '0', md: '4px' }}>
            Please provide following
          </Text>
          <Text mb={{ sm: '10px', md: '0px' }}>
            details for your new account
          </Text>
        </Box>
      </Box>
      <Box w={'100%'}>
        <form onSubmit={formik.handleSubmit}>
          <Flex
            align={'center'}
            flexDirection={'column'}
            justify={'center'}
            mt={'8px'}
          >
            <Box mt={'2'} w={'82'}>
              <InputGroup>
                <Input
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    formik.handleChange(e)
                  }}
                />
              </InputGroup>
              {formik.touched.name && formik.errors.name ? (
                <TextError>{formik.errors.name}</TextError>
              ) : null}
            </Box>
            <Box mt="8px" w={'82'}>
              <InputGroup>
                <Input
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    formik.handleChange(e)
                  }}
                />
              </InputGroup>
              {formik.touched.email && formik.errors.email ? (
                <TextError>{formik.errors.email}</TextError>
              ) : null}
            </Box>
            <Box mt={'2'} w={'82'}>
              <InputGroup>
                <Input
                  border="none"
                  name="password"
                  placeholder="Password"
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    formik.handleChange(e)
                  }}
                />
                <InputRightElement right="-2px" top="16px" width="4.5rem">
                  {!show ? (
                    <ViewIcon
                      color="Alphas.70"
                      cursor="pointer"
                      onClick={handleClick}
                    />
                  ) : (
                    <ViewOffIcon
                      color="Alphas.70"
                      cursor="pointer"
                      onClick={handleClick}
                    />
                  )}
                </InputRightElement>
              </InputGroup>
              {formik.touched.password && formik.errors.password ? (
                <TextError>{formik.errors.password}</TextError>
              ) : null}
            </Box>
            <Box w={'82'}>
              <Flex flexDirection="column" mt="16">
                <Flex gap="2" justifyContent={'flex-start'}>
                  <Checkbox
                    colorScheme={'blue'}
                    isChecked={formik.values.agreedToTerms}
                    mb="2"
                    name="agreedToTerms"
                    size={'size_26'}
                    onBlur={formik.handleBlur}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      formik.handleChange(e)
                    }}
                  >
                    <Box
                      display={{ sm: 'flex', md: 'flex' }}
                      flexDirection={{ sm: 'column', md: 'row' }}
                    >
                      <Text
                        fontSize={'xs'}
                        letterSpacing={['50']}
                        lineHeight={'4'}
                        pr={'4px'}
                        pt={{ sm: '14px', md: '0px' }}
                      >
                        By creating your account you have to agree
                      </Text>
                      <Text>with our Teams and Conditions.</Text>
                    </Box>
                  </Checkbox>
                </Flex>
              </Flex>
              {formik.touched.agreedToTerms && formik.errors.agreedToTerms ? (
                <TextError>{formik.errors.agreedToTerms}</TextError>
              ) : null}
            </Box>
            <ButtonGroup
              alignItems={'center'}
              flexDirection={'column'}
              gap="7px"
              justifyContent="center"
              mt="32"
              w={'100%'}
            >
              <Button
                isLoading={isloading}
                loadingText="Submitting"
                type={'submit'}
              >
                Sign up my Account
              </Button>
              <Button size={'md'} variant={'solid'}>
                Sign up with Phone Number
              </Button>
            </ButtonGroup>
          </Flex>
        </form>
      </Box>
      <Box>
        <Flex ml={'2px'}>
          <Text mt="12px">
            Already have an account? <strong> - Sign In</strong>
          </Text>
        </Flex>
      </Box>
    </ContainerWrap>
  )
}
