import React from 'react'
import { Box, Image, useTheme } from '@chakra-ui/react'
import { LineProgressBar } from 'app/pages/BudgetDetailsPage/components/LineProgressBar'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { BoxWrap } from 'app/pages/BudgetDetailsPage/components/elements/Box'
import {
  ContentText,
  MoneyText,
  TitleText,
  TotalMoneyText,
} from 'app/pages/BudgetDetailsPage/components/elements/Text'

type BuggetBoxProps = {
  title: string
  money: string
  UrlImage: string
  value: number
  color: string
}

/**
 * @returns Component bugget box
 */
export function BuggetBox(props: BuggetBoxProps) {
  const theme = useTheme()
  return (
    <BoxWrap position={'relative'}>
      <Box
        alignItems={'center'}
        display={'flex'}
        justifyContent={'start'}
        pt={theme.space['32']}
      >
        <Image ml={theme.space['20']} src={props.UrlImage} />
        <TitleText ml={theme.space['16']}>{props.title}</TitleText>
        <MoneyText position={'absolute'} right={theme.space['36']}>
          ${props.money}/day
        </MoneyText>
      </Box>
      <Box>
        <LineProgressBar
          color={props.color}
          style={{
            width: theme.sizes['328'],
            height: theme.sizes['42'],
            marginLeft: theme.space['12'],
            marginTop: theme.space['18'],
          }}
          value={props.value}
        />
        <Box
          borderRight={theme.borders['2px']}
          bottom={theme.space['70']}
          h={theme.sizes['53']}
          position={'absolute'}
          right={theme.space['96']}
        />
        <TotalMoneyText
          bottom={theme.space['88']}
          position={'absolute'}
          right={theme.space['46']}
        >
          $900
        </TotalMoneyText>
      </Box>
      <Box
        borderBottom={theme.borders['0.5px']}
        ml={theme.space['10']}
        pt={theme.space['20']}
        w={theme.sizes['328']}
      />
      <Box
        alignItems={'center'}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        ml={theme.space['10']}
        mr={theme.space['86']}
        pt={theme.space['16']}
      >
        <CheckCircleIcon color={theme.colors.blue['50']} />
        <ContentText ml={theme.space['10']}>
          Your food spending is still on track
        </ContentText>
      </Box>
    </BoxWrap>
  )
}
