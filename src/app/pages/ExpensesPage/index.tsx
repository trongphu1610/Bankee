import React, { useCallback, useEffect, useState } from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, useTheme, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { Heading } from 'app/pages/ExpensesPage/components/elements/Heading'
import { ContainerGroup } from 'app/pages/ExpensesPage/components/elements/container'
import { PieChartComponent } from 'app/pages/ExpensesPage/components/PieChart'
import { ExpensesBox } from 'app/pages/ExpensesPage/components/ExpensesBox'
import { useNavigate } from 'react-router-dom'

type Expenses = {
  id: string
  name: string
  transactions: string
  moneyItem: string
  lineBar: string
}

type ExpensesScreen = {
  items: Expenses[]
}

const MAXIMUM_BAR = 900

const URL_IMAGE = {
  item1: 'assets/burger.png',
  item2: 'assets/pill.png',
  item3: 'assets/gas.jpg',
  item4: 'assets/house.png',
}

/**
 * @returns Component expenses screen page
 */
export function ExpenseScreen() {
  const theme = useTheme()
  const navigate = useNavigate()
  const toast = useToast()
  const [expenses, setExpenses] = useState<ExpensesScreen>()

  const fetchExpensesAPI = useCallback(async () => {
    try {
      const url = 'moneys/moneyExpenses'
      const res = await axios.get(url)
      setExpenses(res.data)
    } catch (error) {
      let message = 'Unknow Error'
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
    fetchExpensesAPI()
  }, [fetchExpensesAPI])

  return (
    <ContainerGroup>
      <Box mt={theme.space['75']}>
        <ChevronLeftIcon
          boxSize={6}
          cursor={'pointer'}
          ml={theme.space['21']}
          position={'absolute'}
          zIndex={'1'}
          onClick={() => navigate('/monthly_budget')}
        />
        <Heading align={'center'} fontSize={{ md: theme.fontSizes.xl }}>
          Expenses
        </Heading>
      </Box>
      <Box mt={theme.space['-41']}>
        <PieChartComponent />
      </Box>
      <Box mt={theme.space['-44']}>
        {expenses &&
          expenses.items.map(
            ({ id, name, moneyItem, transactions, lineBar }: Expenses) => {
              return (
                <ExpensesBox
                  key={id}
                  money={moneyItem}
                  name={name}
                  transactions={transactions}
                  urlImage={URL_IMAGE[id]}
                  value={Number(lineBar) / MAXIMUM_BAR}
                />
              )
            },
          )}
      </Box>
    </ContainerGroup>
  )
}
