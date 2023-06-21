import React, { FormEvent, useState } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  useTheme,
  useToast,
} from '@chakra-ui/react'
import { Heading } from 'app/pages/TouchIdConfirmPage/components/elements/Heading'
import { Text } from 'app/pages/TouchIdConfirmPage/components/elements/Text'
import { ContainerGroup } from 'app/pages/TouchIdConfirmPage/components/elements/Container'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { Input } from 'app/pages/TouchIdConfirmPage/components/elements/Input'
import { ButtonNumber } from 'app/pages/TouchIdConfirmPage/components/elements/ButtonNumber'

/**
 * @returns Component touch id confirm page
 */
export function TouchIdConfirm() {
  const theme = useTheme()
  const navigate = useNavigate()
  const toast = useToast()
  const [valueInput, setValueInput] = useState<string[]>(['', '', '', ''])
  const [currentIndex, setCurrentIndex] = useState(0)

  /**
   * @param {string} inputValue Value input
   * handle click button Number
   */
  const handleClick = (inputValue: string) => {
    const newValue = valueInput.map((value: string, index: number) => {
      if (index !== currentIndex) {
        return value
      }
      return inputValue
    })
    setValueInput(newValue)
    setCurrentIndex(Math.max(currentIndex + 1, inputValue.length))

    const passValue = valueInput.map((value: string, index: number) => {
      if (index !== currentIndex) {
        return value
      }
      return '*'
    })
    setTimeout(() => {
      setValueInput(passValue)
    }, 300)
  }

  /**
   * @param {number} inputIndex Index next input
   * Take index input when focus input
   */
  const handleFocus = (inputIndex: number) => {
    setCurrentIndex(inputIndex)
  }

  /**
   * @param {FormEvent} e Submit event
   * Next page have subdirectory is /money_summary
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast({
      title: 'Success',
      description: 'Đăng nhập thành công',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
    navigate('/money_summary')
  }

  return (
    <ContainerGroup>
      <ChevronLeftIcon
        boxSize={6}
        cursor={'pointer'}
        ml={theme.space['16']}
        mt={theme.space['56']}
        onClick={() => navigate('/touch_id')}
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
        <Box mt={theme.space['30']}>
          <Heading align={'center'}>Set your PIN</Heading>
        </Box>
        <Box>
          <Flex alignItems="center" flexDirection="column">
            <Text>You will use this to login next time</Text>
          </Flex>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box
            h={theme.sizes['94']}
            mt={theme.space['21']}
            textAlign={'center'}
          >
            {valueInput.map((value: string, inputIndex: number) => (
              <Input
                key={inputIndex}
                defaultValue={value}
                maxLength={1}
                pt={theme.space['1']}
                textAlign={'center'}
                type={'text'}
                onFocus={() => handleFocus(inputIndex)}
              />
            ))}
          </Box>
          <Box>
            {[
              ['1', '2', '3'],
              ['4', '5', '6'],
              ['7', '8', '9'],
            ].map((item: string[], i: number) => (
              <Box key={i}>
                {item.map((number: string) => (
                  <ButtonNumber
                    key={number}
                    onClick={() => handleClick(number)}
                  >
                    {number}
                  </ButtonNumber>
                ))}
              </Box>
            ))}
            <Box>
              <ButtonNumber />
              <ButtonNumber onClick={() => handleClick('0')}>0</ButtonNumber>
              <ButtonNumber />
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            w={'100%'}
          >
            <ButtonGroup
              alignItems={'center'}
              flexDirection={'column'}
              gap="7px"
              justifyContent="center"
              w={theme.sizes.full}
            >
              <Button loadingText="Submitting" type={'submit'}>
                Save PIN
              </Button>
            </ButtonGroup>
          </Box>
        </form>
      </Container>
    </ContainerGroup>
  )
}
