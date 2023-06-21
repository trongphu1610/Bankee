import React, { useCallback, useEffect, useState } from 'react'
import { ContainerGroup } from 'app/pages/BudgetDetailsPage/components/elements/Container'
import { Text, useTheme, useToast } from '@chakra-ui/react'
import {
  Heading,
  HeadingMoney,
} from 'app/pages/BudgetDetailsPage/components/elements/Heading'

import axios from 'axios'
import { HeaderBox } from 'app/pages/BudgetDetailsPage/components/elements/Box'
import { BuggetBox } from 'app/pages/BudgetDetailsPage/components/BuggetBox'

type Items = {
  name: string
  money: string
  moneyItem: string
  id: string
}

type MoneyBudget = {
  items: Items[]
  moneyBudgetTotal: string
  id: string
}

const MAXIMUM_MONEY = 900

const URL_IMAGE = {
  item1: 'assets/burger.png',
  item2: 'assets/house.png',
  item3: 'assets/pill.png',
}

/**
 * @returns Component budgetDetails page
 */
export function BudgetDetails() {
  const theme = useTheme()
  const toast = useToast()
  const [moneyBudget, setMoneyBudget] = useState<MoneyBudget>()

  /**
   * Fetch api by mock api have subdirectory is /moneys/moneyBudget
   */
  const fetchBudgetAPI = useCallback(async () => {
    try {
      const url = '/moneys/moneyBudget'
      const res = await axios.get(url)
      setMoneyBudget(res.data)
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
    fetchBudgetAPI()
  }, [fetchBudgetAPI])
  return (
    <ContainerGroup>
      <HeaderBox
        borderBottomLeftRadius={theme.radii['30']}
        borderBottomRightRadius={theme.radii['30']}
      >
        <Heading
          fontSize={{ md: theme.fontSizes.xl }}
          pt={theme.space['60']}
          textAlign={'center'}
        >
          Budget
        </Heading>
        <HeadingMoney mt={theme.space['36']} textAlign={'center'}>
          ${moneyBudget?.moneyBudgetTotal}
        </HeadingMoney>
        <Text textAlign={'center'}>spent this month</Text>
      </HeaderBox>
      {moneyBudget &&
        moneyBudget.items.map(({ name, money, moneyItem, id }: Items) => {
          return (
            <BuggetBox
              key={id}
              color={theme.colors.blue['50']}
              money={money}
              title={name}
              UrlImage={URL_IMAGE[id]}
              value={Number(moneyItem) / MAXIMUM_MONEY}
            />
          )
        })}
    </ContainerGroup>
  )
}
