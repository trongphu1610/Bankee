import React, { useCallback, useEffect, useState } from 'react'
import { Box, Button, Switch, useTheme, useToast } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { ContainerGroup } from 'app/pages/MonthlyBudgetPage/components/elements/Container'
import { Heading } from 'app/pages/MonthlyBudgetPage/components/elements/Heading'
import { Text } from '@chakra-ui/layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type Monthly = {
  id: string
  money_monthly: string
}

/**
 * @returns Component monthly budget page
 */
export function MonthlyBudget() {
  const theme = useTheme()
  const navigate = useNavigate()
  const toast = useToast()
  const [monthly, setMonthly] = useState<Monthly>()

  /**
   * Fetch api by mock api have subdirectory is /moneys/monthly
   */
  const fetchMonthlyAPI = useCallback(async () => {
    try {
      const url = '/moneys/money_monthly'
      const res = await axios.get(url)
      setMonthly(res.data)
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
    fetchMonthlyAPI()
  }, [fetchMonthlyAPI])

  return (
    <ContainerGroup>
      <Box mt={theme.space['75']}>
        <ChevronLeftIcon
          boxSize={6}
          cursor={'pointer'}
          ml={theme.space['21']}
          position={'absolute'}
          onClick={() => navigate('/receipt/user1')}
        />
        <Heading align={'center'} fontSize={{ md: theme.fontSizes.xl }}>
          Monthly Budget Setting
        </Heading>
      </Box>
      <Text
        fontSize={theme.fontSizes['5xl']}
        fontWeight={theme.fontWeights.bold}
        lineHeight={theme.lineHeights['12']}
        mt={theme.space['120']}
        textAlign={'center'}
      >
        {monthly?.money_monthly}
      </Text>
      <Box
        bg={theme.colors.Alphas['45']}
        borderRadius={theme.radii['10']}
        display={'flex'}
        h={theme.sizes['75']}
        ml={theme.space['37']}
        mt={theme.space['140']}
        w={theme.sizes['340']}
      >
        <Box pl={theme.space['22']} pt={theme.space['15']}>
          <Text
            color={theme.colors.Gray['60']}
            fontSize={theme.fontSizes['16']}
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights['4.5']}
          >
            Category budget
          </Text>
          <Text
            color={theme.colors.Gray['60']}
            fontSize={theme.fontSizes.xs}
            fontWeight={theme.fontWeights.normal}
            lineHeight={theme.lineHeights['4.5']}
          >
            You set budget for 3 categories
          </Text>
        </Box>
        <Box ml={theme.space['60']} mt={theme.space['20']}>
          <Switch colorScheme={'purple'} size={'lg'} />
        </Box>
      </Box>
      <Button
        fontSize={theme.fontSizes['17']}
        h={theme.space['60']}
        lineHeight={theme.lineHeights['5']}
        ml={theme.space['37']}
        mt={theme.space['16']}
        onClick={() => navigate('/expenses_screen')}
      >
        Continue
      </Button>
    </ContainerGroup>
  )
}
