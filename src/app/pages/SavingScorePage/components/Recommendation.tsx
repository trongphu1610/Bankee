import React from 'react'
import { Box, useTheme } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'

type Recommendations = {
  activeNumber: string
  activeName: string
  description: string
}

/**
 * @returns Component Recommendation
 * @param {Recommendations} props Send props into a component
 */
export function Recommendation(props: Recommendations) {
  const theme = useTheme()

  return (
    <Box
      bg={theme.colors.white}
      borderRadius={theme.radii['10']}
      display={'flex'}
      h={theme.sizes['164']}
      justifyContent={'start'}
      ml={theme.space['28']}
      mt={theme.space['10']}
      w={theme.sizes['364']}
    >
      <Box
        bg={theme.colors.blue['50']}
        borderRadius={theme.radii['16']}
        h={theme.sizes['52']}
        ml={theme.space['16']}
        mt={theme.space['34']}
        w={theme.sizes['52']}
      >
        <Text
          color={theme.colors.white}
          pl={theme.space['14']}
          pt={theme.space['14']}
        >
          {props.activeNumber}
        </Text>
      </Box>
      <Box ml={theme.space['30']} mt={theme.space['30']}>
        <Text
          color={theme.colors.Alphas['75']}
          fontSize={theme.fontSizes['16']}
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights['4.5']}
        >
          {props.activeName}
        </Text>
        <Text
          color={theme.colors.Gray['60']}
          fontSize={theme.fontSizes.xs}
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights['4.5']}
          mt={theme.space['11']}
          w={theme.sizes['194']}
          wordBreak={'break-word'}
        >
          {props.description}
        </Text>
        <Text
          color={theme.colors.blue['50']}
          fontSize={theme.fontSizes.sm}
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights['4.5']}
          mt={theme.space['18']}
        >
          More details
        </Text>
      </Box>
    </Box>
  )
}
