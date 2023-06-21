import React from 'react'
import { Box, Image, useTheme } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import { LineProgressBar } from './LineProgressBar'

type ExpensesBoxProps = {
  name: string
  transactions: string
  money: string
  value: number
  urlImage: string
}

/**
 * @returns Component expenses box
 * @param {ExpensesBoxProps} props Send props into a component
 */
export function ExpensesBox(props: ExpensesBoxProps) {
  const theme = useTheme()

  return (
    <>
      <Box display={'flex'} ml={theme.space['37']} mt={theme.space['22']}>
        <Box mr={theme.space['26']} mt={theme.space['10']}>
          <Image src={props.urlImage} />
        </Box>
        <Box mr={theme.space['78']} w={theme.sizes['169']}>
          <Text
            color={theme.colors.Gray['60']}
            fontSize={theme.fontSizes['16']}
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights['4.5']}
            mb={theme.space['10']}
          >
            {props.name}
          </Text>
          <Text
            color={theme.colors.Gray['60']}
            fontSize={theme.fontSizes.sm}
            fontWeight={theme.fontWeights.normal}
            lineHeight={theme.lineHeights['4.5']}
          >
            {props.transactions}
          </Text>
        </Box>
        <Box mt={theme.space['12']}>
          <Text
            color={theme.colors.Gray['60']}
            fontSize={theme.fontSizes.xl}
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights['26']}
          >
            {props.money}
          </Text>
        </Box>
      </Box>
      <LineProgressBar
        style={{
          width: theme.sizes['286'],
          height: theme.sizes['6i'],
          marginLeft: theme.space['86'],
          marginTop: theme.space['14'],
        }}
        value={props.value}
      />
      <Box
        borderBottom={theme.borders['0.5px']}
        ml={theme.space['29']}
        mt={theme.space['22']}
        w={theme.sizes['346']}
      />
    </>
  )
}
