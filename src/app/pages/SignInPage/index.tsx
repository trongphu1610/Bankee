import React, { ChangeEvent, useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  ButtonGroup,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from '@chakra-ui/react'

import {
  Text,
  TextError,
  ForgotText,
} from 'app/pages/SignInPage/components/elements/Text'
import { useFormik } from 'formik'
import { validateEmail, validatePassWord } from 'utils/authenRegex'
import { Input } from 'app/pages/SignInPage/components/elements/Input'
import { ContainerWrap } from 'app/pages/SignInPage/components/elements/Container'
import { Heading } from 'app/pages/SignInPage/components/elements/Heading'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type User = {
  email: string
  password: string
}

/**
 * @param {User} values get value input
 * Validate input
 */
export const validate = (values: User) => {
  const errors: Partial<User> = {}
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
  return errors
}

/**
 * @returns Component sign in page
 */
export function SignIn() {
  const [show, setShow] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const toast = useToast()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async (values: User) => {
      setIsLoading(true)
      try {
        const url = '/singup'
        const userByEmail = await axios.get(url, {
          params: { email: values.email },
        })
        if (userByEmail.data.length === 0) {
          throw new Error('Email is not registered')
        }
        const userByEmailAndPassword = userByEmail.data.find(
          (user: User) => user.password === values.password,
        )
        if (!userByEmailAndPassword) {
          throw new Error('password wrong')
        }
        toast({
          title: 'Success',
          description: 'Đăng nhập thành công',
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
        navigate('/mobile_number')
        setIsLoading(false)
      } catch (error) {
        let message = 'Unknown Error'
        if (error instanceof Error) message = error.message
        toast({
          title: 'Error',
          description: message,
          status: 'error',
          duration: 4000,
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
      <Box ml="8px" p="2">
        <Heading>Welcome Back!</Heading>
      </Box>
      <Box>
        <Box
          alignItems={'center'}
          display={'flex'}
          flexDirection={{ sm: 'column', md: 'row' }}
          mb={{ sm: '14px' }}
        >
          <Text mb={'4px'}>Sign in to continue</Text>
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} mt={'26px'} w={'100%'}>
        <form onSubmit={formik.handleSubmit}>
          <Flex
            align={'start'}
            flexDirection={'column'}
            justify={'center'}
            mt={'8px'}
          >
            <InputGroup mt="8px" pl={'2rem'} pr={'2rem'}>
              <Input
                name="email"
                placeholder="Email"
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
            <InputGroup mt={'2'} pl={'2rem'} pr={'2rem'}>
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
              <InputRightElement right="22px" top="16px" width="4.5rem">
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
            <ForgotText alignSelf={'self-end'}>Forgot Password?</ForgotText>
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
                Sign in My Account
              </Button>
            </ButtonGroup>
          </Flex>
        </form>
      </Box>
      <Box>
        <Flex ml={'2px'}>
          <Text mt="12px">
            Don't have an account?
            <strong onClick={() => navigate('/signup')}> - Sign Up</strong>
          </Text>
        </Flex>
      </Box>
    </ContainerWrap>
  )
}
