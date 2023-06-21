import React from 'react'
import { Box, Image, useTheme } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'

type TransactionProps = {
  name: string
  numberTransaction: string
  money: string
  UrlImage: string
}

/**
 * @returns Component Transaction
 * @param {TransactionProps} props Send props into a component
 */
export function Transaction(props: TransactionProps) {
  const theme = useTheme()
  return (
    <Box
      alignItems={'center'}
      borderBottom={theme.borders['0.8px']}
      display={'flex'}
      h={theme.sizes['90']}
      justifyContent={'start'}
      ml={theme.space['27']}
      w={theme.sizes['366']}
    >
      <Box
        bg={theme.colors.white}
        borderRadius={'16px'}
        h={theme.sizes['45']}
        mt={theme.space['2']}
        w={theme.sizes['45']}
      >
        <Image
          pl={theme.space['2']}
          pt={theme.space['2']}
          src={props.UrlImage}
        />
      </Box>
      <Box ml={theme.space['26']} mt={theme.space['2']}>
        <Text
          color={theme.colors.Gray['60']}
          fontSize={theme.fontSizes['16']}
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights['4.5']}
        >
          {props.name}
        </Text>
        <Text
          color={theme.colors.Gray['70']}
          fontSize={theme.fontSizes.sm}
          fontWeight={theme.fontWeights.normal}
          lineHeight={theme.lineHeights['4.5']}
        >
          {props.numberTransaction}
        </Text>
      </Box>
      <Text
        color={theme.colors.Gray['60']}
        fontSize={theme.fontSizes['18']}
        fontWeight={theme.fontWeights.bold}
        lineHeight={theme.lineHeights['23']}
        ml={theme.space['156']}
        mt={theme.space['2']}
      >
        {props.money}
      </Text>
    </Box>
  )
}
