import React from 'react'
import { Text } from '@chakra-ui/layout'
import { Box, Image, Switch, useTheme } from '@chakra-ui/react'

type Account = {
  heading: string
  title: string
  content: string
  money: string
  urlImage: string
}

/**
 * @returns Component account component
 * @param {Account} props Send props into a component
 */
export function AccountComponent(props: Account) {
  const theme = useTheme()

  return (
    <>
      <Text
        color={theme.colors.Gray['60']}
        fontSize={theme.fontSizes['18']}
        fontWeight={theme.fontWeights.bold}
        lineHeight={theme.lineHeights['23']}
        pl={theme.space['39']}
        pt={theme.space['22']}
      >
        {props.heading}
      </Text>
      <Box
        bg={theme.colors.white}
        borderRadius={'10px'}
        h={theme.sizes['198']}
        ml={theme.space['37']}
        mt={theme.space['12']}
        pl={theme.space['22']}
        pt={theme.space['29']}
        w={theme.sizes['340']}
      >
        <Box display={'flex'}>
          <Box mr={theme.space['22']}>
            <Image src={props.urlImage} />
          </Box>
          <Box mr={theme.space['110']} pt={theme.space['1']}>
            <Text
              color={theme.colors.Gray['60']}
              fontSize={theme.fontSizes['16']}
              fontWeight={theme.fontWeights.bold}
              lineHeight={theme.lineHeights['4.5']}
            >
              {props.title}
            </Text>
            <Text
              color={theme.colors.Gray['60']}
              fontSize={theme.fontSizes.xs}
              fontWeight={theme.fontWeights.normal}
              lineHeight={theme.lineHeights['4.5']}
            >
              {props.content}
            </Text>
          </Box>
          <Box display={'flex'} pt={theme.space['1']}>
            <Box
              bg={theme.colors.Alphas['77']}
              borderRadius={theme.radii['99']}
              h={theme.sizes['4']}
              mr={theme.space['2.5']}
              w={theme.sizes['4']}
            />
            <Box
              bg={theme.colors.Alphas['77']}
              borderRadius={theme.radii['99']}
              h={theme.sizes['4']}
              mr={theme.space['2.5']}
              w={theme.sizes['4']}
            />
            <Box
              bg={theme.colors.Alphas['77']}
              borderRadius={theme.radii['99']}
              h={theme.sizes['4']}
              mr={theme.space['2.5']}
              w={theme.sizes['4']}
            />
          </Box>
        </Box>
        <Box
          borderBottom={theme.borders['0.8px']}
          mt={theme.space['30']}
          w={theme.sizes['296']}
        />
        <Box display={'flex'} mt={theme.space['22']}>
          <Box mr={theme.space['148']}>
            <Text
              color={theme.colors.Gray['60']}
              fontSize={theme.fontSizes.xs}
              fontWeight={theme.fontWeights.normal}
              lineHeight={theme.lineHeights['4.5']}
            >
              Available balance
            </Text>
            <Text
              color={theme.colors.Gray['60']}
              fontSize={theme.fontSizes['16']}
              fontWeight={theme.fontWeights.bold}
              lineHeight={theme.lineHeights['4.5']}
            >
              {props.money}
            </Text>
          </Box>
          <Box mt={theme.space['4']}>
            <Switch colorScheme={'purple'} size={'lg'} />
          </Box>
        </Box>
      </Box>
    </>
  )
}
