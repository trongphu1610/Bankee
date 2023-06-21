import React, { useCallback, useEffect, useState } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Image,
  useTheme,
  useToast,
} from '@chakra-ui/react'
import {
  Heading,
  HeadingMoney,
} from 'app/pages/MoneySummaryPage/components/elements/Heading'
import {
  Text,
  CategoryText,
} from 'app/pages/MoneySummaryPage/components/elements/Text'
import { ContainerGroup } from 'app/pages/MoneySummaryPage/components/elements/Container'
import { Input } from 'app/pages/MoneySummaryPage/components/elements/Input'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { CircleProgressBar } from 'app/pages/MoneySummaryPage/components/CircleProgressBar'
import axios from 'axios'

type Money = {
  moneyTotal: string
  moneyCategoryItem1: string
  moneyCategoryItem2: string
  id: string
}

/**
 * @returns Component money summary page
 */
export function MoneySummary() {
  const theme = useTheme()
  const navigate = useNavigate()
  const toast = useToast()
  const [money, setMoney] = useState<Money>()

  /**
   * Fetch api by mock api have subdirectory is /moneys/moneyTotal
   */
  const fetchMoney = useCallback(async () => {
    try {
      const url = '/moneys/moneyTotal'
      const res = await axios.get(url)
      setMoney(res.data)
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
    }
  }, [toast])
  useEffect(() => {
    fetchMoney()
  }, [fetchMoney])

  return (
    <ContainerGroup>
      <Box mt={theme.space['58']}>
        <ChevronLeftIcon
          boxSize={6}
          cursor={'pointer'}
          ml={theme.space['21']}
          position={'absolute'}
          onClick={() => navigate('/touch_confirmation')}
        />
        <Heading align={'center'} fontSize={{ md: '20px' }}>
          Summary
        </Heading>
      </Box>
      <Container
        alignItems="center"
        display="flex"
        flexDirection={'column'}
        justifyContent={'center'}
        minWidth="max-content"
        mt={theme.space['14']}
      >
        <Box>
          <Image h={theme.sizes['144']} src="assets/money_summary.png" />
        </Box>
        <Box mt={theme.space['28']}>
          <Heading fontSize={{ md: theme.space['21'] }}>
            This month spending
          </Heading>
        </Box>
        <HeadingMoney>{money?.moneyTotal}</HeadingMoney>
        <Box>
          <Flex
            alignItems="center"
            flexDirection="column"
            mt={theme.space['10']}
          >
            <Text>Well done you have maintain your</Text>
            <Text> spending under control</Text>
          </Flex>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <ButtonGroup
            alignItems={'center'}
            flexDirection={'column'}
            gap="7px"
            justifyContent="center"
          >
            <Button
              loadingText="Submitting"
              type={'submit'}
              onClick={() => navigate('/main_screen')}
            >
              Great
            </Button>
          </ButtonGroup>
        </Box>
      </Container>
      <Box bg={theme.colors.Alphas['80']} mt={theme.space['20']}>
        <Heading fontSize={{ md: theme.space['20'] }} pt={theme.space['20']}>
          Top Category
        </Heading>
        <Box display={'flex'} flexDirection={'row'} mt={theme.space['21']}>
          <Box
            bg={theme.colors.white}
            h={theme.sizes['194']}
            mb={theme.space['30']}
            ml={theme.space['12']}
            w={theme.sizes['174']}
          >
            <CircleProgressBar
              style={{
                width: theme.sizes['83'],
                height: theme.sizes['80'],
                marginLeft: theme.space['44'],
                marginTop: theme.space['18'],
              }}
              value={0.6}
            />
            <Image
              bottom={{ md: theme.sizes['258'], base: theme.sizes['236'] }}
              ml={theme.space['28']}
              position={'absolute'}
              src="assets/humberger.png"
            />
            <CategoryText textAlign={'center'}>Lunch & Dinner</CategoryText>
            <Text textAlign={'center'}>{money?.moneyCategoryItem1}</Text>
            <Input mt={theme.space['14']} placeholder={'on track'} />
          </Box>
          <Box
            bg={theme.colors.white}
            h={theme.sizes['194']}
            mb={theme.space['30']}
            ml={theme.space['12']}
            w={theme.sizes['174']}
          >
            <CircleProgressBar
              style={{
                width: theme.sizes['83'],
                height: theme.sizes['75'],
                marginLeft: theme.space['44'],
                marginTop: theme.space['18'],
              }}
              value={0.6}
            />
            <Image
              bottom={{ md: theme.sizes['258'], base: theme.sizes['236'] }}
              ml={theme.space['28']}
              position={'absolute'}
              src="assets/medical.png"
            />
            <CategoryText textAlign={'center'}>Medical</CategoryText>
            <CategoryText textAlign={'center'}>Allowances</CategoryText>
            <Text textAlign={'center'}>{money?.moneyCategoryItem2}</Text>
            <Input placeholder={'on track'} />
          </Box>
        </Box>
      </Box>
    </ContainerGroup>
  )
}
