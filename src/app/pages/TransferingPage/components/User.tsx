import React from 'react'
import { Box, Button, Image, useTheme } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'

type Users = {
  name: string
  phone: string
  UrlImage: string
  isButton: boolean
  onClick: () => void
}

/**
 * @returns Component user
 * @param {Users} props Send props into a component
 */
export function User(props: Users) {
  const theme = useTheme()
  const { onClick, isButton } = props

  return (
    <Box
      alignItems={'center'}
      borderBottom={theme.borders['0.8px']}
      display={'flex'}
      h={theme.sizes['100i']}
      justifyContent={'start'}
      ml={theme.space['14']}
      pb={theme.space['10']}
      w={theme.sizes['390']}
    >
      <Box
        bg={theme.colors.white}
        borderRadius={theme.radii['16']}
        cursor={'pointer'}
        h={theme.sizes['45']}
        mb={theme.space['10']}
        ml={theme.space['10']}
      >
        <Image
          borderRadius={'20px'}
          h={theme.sizes['54']}
          mt={theme.sizes['2']}
          src={props.UrlImage}
          w={theme.sizes['54']}
        />
      </Box>
      <Box ml={theme.space['20']} mt={theme.space['16']} w={theme.sizes['121']}>
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
          {props.phone}
        </Text>
      </Box>
      {isButton && (
        <Button
          bg={theme.colors.Alphas['75']}
          borderRadius={theme.radii['5']}
          color={theme.colors.white}
          fontSize={theme.fontSizes['12']}
          fontWeight={theme.fontWeights.normal}
          h={theme.sizes['35']}
          lineHeight={theme.lineHeights['2.5']}
          ml={theme.space['104']}
          mt={theme.space['16']}
          w={theme.sizes['73']}
          onClick={onClick}
        >
          invite
        </Button>
      )}
    </Box>
  )
}
