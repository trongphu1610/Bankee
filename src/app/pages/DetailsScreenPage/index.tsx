import React, { useCallback, useEffect, useState } from 'react'
import { Box, Heading, Image, useTheme, useToast } from '@chakra-ui/react'
import { ContainerGroup } from 'app/pages/DetailsScreenPage/components/elements/container'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { Text } from '@chakra-ui/layout'
import {
  TextActivity,
  TextDetail,
  TextMoney,
  TextTitle,
} from 'app/pages/DetailsScreenPage/components/elements/Text'
import { BoxContent } from 'app/pages/DetailsScreenPage/components/elements/Box'
import axios from 'axios'
import { Chart1 } from 'app/pages/DetailsScreenPage/components/Chart1'
import { Chart2 } from 'app/pages/DetailsScreenPage/components/Chart2'
import { Transaction } from 'app/pages/DetailsScreenPage/components/Transaction'
import { CircleProgressBar } from 'app/pages/MoneySummaryPage/components/CircleProgressBar'
import { CategoryText } from 'app/pages/MoneySummaryPage/components/elements/Text'
import { Input } from 'app/pages/MoneySummaryPage/components/elements/Input'

type Items = {
  name: string
  moneyItem: string
  transactions: string
  id: string
}
type MoneyDetail = {
  items: Items[]
  moneyDetailTotal: string
  detailScreenTotalEarned: string
  detailScreenTotalSpend: string
  id: string
}
const URL_IMAGE = {
  item1: 'assets/pizza.png',
  item2: 'assets/amazon.png',
  item3: 'assets/subway.png',
}

/**
 * @returns Component details screen page
 */
export function DetailsScreen() {
  const theme = useTheme()
  const navigate = useNavigate()
  const toast = useToast()
  const [moneyDetails, setMoneyDetails] = useState<MoneyDetail>()

  /**
   * Fetch api by mock api have subdirectory is /moneys/moneyDetails
   */
  const fetchDetailsAPI = useCallback(async () => {
    try {
      const url = '/moneys/moneyDetails'
      const res = await axios.get(url)
      setMoneyDetails(res.data)
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
    fetchDetailsAPI()
  }, [fetchDetailsAPI])

  return (
    <ContainerGroup>
      <Box mt={theme.space['68']}>
        <ChevronLeftIcon
          boxSize={6}
          cursor={'pointer'}
          ml={theme.space['36']}
          position={'absolute'}
          onClick={() => navigate('/main_screen')}
        />
      </Box>
      <TextDetail
        cursor={'pointer'}
        mr={theme.space['20']}
        textAlign={'end'}
        onClick={() => navigate('/budget_details')}
      >
        Set Budget
      </TextDetail>
      <Heading
        fontSize={theme.fontSizes['22']}
        fontWeight={theme.fontWeights.bold}
        lineHeight={theme.lineHeights['7']}
        mt={theme.space['38']}
        textAlign={'center'}
      >
        Your balance is {moneyDetails?.moneyDetailTotal}
      </Heading>
      <Text
        color={theme.colors.Gray['70']}
        fontSize={theme.fontSizes.sm}
        fontWeight={theme.fontWeights.normal}
        lineHeight={theme.lineHeights.base}
        mt={theme.space['10']}
        textAlign={'center'}
      >
        By this time last month, you spent <br />
        slight higher <b>($2,719)</b>
      </Text>
      <Box mt={theme.space['46']} zIndex={1}>
        <Chart1 />
        <Box position={'absolute'} top={theme.space['250']}>
          <Chart2 />
        </Box>
      </Box>
      <Box
        bg={theme.colors.white}
        borderRadius={theme.radii['10']}
        h={theme.sizes['108']}
        ml={theme.space['22']}
        mt={theme.space['-30']}
        position={'absolute'}
        w={theme.sizes['370']}
        zIndex={2}
      >
        <Box display={'flex'}>
          <Box display={'flex'} pl={theme.space['42']} pt={theme.space['27']}>
            <BoxContent bg={theme.colors.blue['40']} />
            <Box>
              <TextActivity>Earned</TextActivity>
              <TextMoney>{moneyDetails?.detailScreenTotalEarned}</TextMoney>
            </Box>
          </Box>
          <Box
            display={'flex'}
            ml={theme.space['72']}
            pl={theme.space['12']}
            pt={theme.space['27']}
          >
            <BoxContent bg={theme.colors.red['50']} />
            <Box>
              <TextActivity>Spend</TextActivity>
              <TextMoney>{moneyDetails?.detailScreenTotalSpend}</TextMoney>
            </Box>
          </Box>
        </Box>
      </Box>
      <TextTitle ml={theme.space['36']} mt={theme.space['105']}>
        Top Transaction
      </TextTitle>
      {moneyDetails &&
        moneyDetails.items.map(
          ({ name, moneyItem, transactions, id }: Items) => {
            return (
              <Transaction
                key={id}
                money={moneyItem}
                name={name}
                numberTransaction={transactions}
                UrlImage={URL_IMAGE[id]}
              />
            )
          },
        )}
      <Box bg={theme.colors.Alphas['80']} mt={theme.space['14']}>
        <Heading
          fontSize={{ md: theme.space['18'] }}
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights['23']}
          pl={theme.space['27']}
          pt={theme.space['20']}
        >
          Top Category
        </Heading>
        <Box
          display={'flex'}
          flexDirection={'row'}
          ml={theme.space['14']}
          mt={theme.space['21']}
        >
          <Box
            bg={theme.colors.white}
            h={theme.sizes['194']}
            mb={theme.space['45']}
            ml={theme.space['12']}
            w={theme.sizes['174']}
          >
            <CircleProgressBar
              style={{
                width: theme.sizes['83'],
                height: theme.sizes['80'],
                marginLeft: theme.space['44'],
                marginTop: theme.space['20'],
              }}
              value={0.6}
            />
            <Image
              bottom={theme.space['-93']}
              ml={theme.space['28']}
              position={'absolute'}
              src="assets/humberger.png"
            />
            <CategoryText textAlign={'center'}>Lunch & Dinner</CategoryText>
            <Text textAlign={'center'}>$450</Text>
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
                marginTop: theme.space['20'],
              }}
              value={0.6}
            />
            <Image
              bottom={theme.space['-93']}
              ml={theme.space['28']}
              position={'absolute'}
              src="assets/medical.png"
            />
            <CategoryText textAlign={'center'}>Medical</CategoryText>
            <CategoryText textAlign={'center'}>Allowances</CategoryText>
            <Text textAlign={'center'}>$330</Text>
            <Input placeholder={'on track'} />
          </Box>
        </Box>
      </Box>
    </ContainerGroup>
  )
}
