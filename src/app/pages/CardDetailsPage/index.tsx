import React from 'react'
import { Box, Image, Switch, useTheme } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import { ContainerGroup } from 'app/pages/CardDetailsPage/components/elements/Container'
import { HeaderBox } from 'app/pages/CardDetailsPage/components/elements/Box'
import { Heading } from 'app/pages/CardDetailsPage/components/elements/Heading'

type Items = {
  id: string
  name: string
  urlImage: string
}

const MAIN_IMAGE = [
  {
    id: '1',
    name: 'Lock Card',
    urlImage: 'assets/lock.png',
  },
  {
    id: '2',
    name: 'Change PIN',
    urlImage: 'assets/shield.png',
  },
  {
    id: '3',
    name: 'Top Up',
    urlImage: 'assets/credit.png',
  },
]

/**
 * @returns Component card details page
 */
export function CardDetails() {
  const theme = useTheme()

  return (
    <ContainerGroup>
      <HeaderBox
        borderBottomLeftRadius={theme.radii['30']}
        borderBottomRightRadius={theme.radii['30']}
      >
        <Heading
          fontSize={{ md: theme.fontSizes.xl }}
          pt={theme.space['134']}
          textAlign={'center'}
        >
          Your Platnium Card
        </Heading>
      </HeaderBox>
      <Image
        mb={theme.space['-120']}
        ml={theme.space['71']}
        src={'assets/rectangle.png'}
      />
      <Image ml={theme.space['94']} src={'assets/chip.png'} />
      <Image
        mb={theme.space['-14']}
        ml={theme.space['270']}
        mt={theme.space['20']}
        src={'assets/logo.png'}
      />
      <Text
        color={theme.colors.white}
        fontSize={theme.fontSizes['12']}
        fontWeight={theme.fontWeights.medium}
        lineHeight={theme.lineHeights['2.5']}
        ml={theme.space['96']}
      >
        Adam Wise
      </Text>
      <Box display={'flex'} ml={theme.space['36']} mt={theme.space['56']}>
        {MAIN_IMAGE.map(({ id, name, urlImage }: Items) => {
          return (
            <Box
              key={id}
              alignItems={'center'}
              bg={theme.colors.white}
              display={'flex'}
              flexDirection={'column'}
              h={theme.sizes['114']}
              justifyContent={'center'}
              mr={theme.space['12']}
              w={theme.sizes['107']}
            >
              <Box
                bg={theme.colors.blue['50']}
                borderRadius={theme.radii['10']}
                h={theme.sizes['38']}
                mb={theme.space['16']}
                w={theme.sizes['38']}
              >
                <Image
                  cursor={'pointer'}
                  pl={theme.space['11']}
                  pt={theme.space['11']}
                  src={urlImage}
                />
              </Box>
              <Text
                fontSize={theme.fontSizes.xs}
                fontWeight={theme.fontWeights.normal}
                lineHeight={theme.lineHeights['17']}
              >
                {name}
              </Text>
            </Box>
          )
        })}
      </Box>
      <Text
        color={theme.colors.Gray['60']}
        fontSize={theme.fontSizes.xl}
        fontWeight={theme.fontWeights.bold}
        lineHeight={theme.lineHeights['26']}
        ml={theme.space['36']}
        mt={theme.space['48']}
      >
        Settings
      </Text>
      <Box display={'flex'} ml={theme.space['36']} mt={theme.space['45']}>
        <Box mr={theme.space['114']}>
          <Text
            color={theme.colors.Gray['60']}
            fontSize={theme.fontSizes['16']}
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights['4.5']}
          >
            Set card limit
          </Text>
          <Text
            color={theme.colors.Gray['70']}
            fontSize={theme.fontSizes.xs}
            fontWeight={theme.fontWeights.normal}
            lineHeight={theme.lineHeights['4.5']}
            mt={theme.space['1']}
          >
            You set budget for 3 categories
          </Text>
        </Box>
        <Box mt={theme.space['14']}>
          <Switch colorScheme={'purple'} size={'lg'} />
        </Box>
      </Box>
      <Box
        borderBottom={theme.borders['0.8px']}
        ml={theme.space['34']}
        mt={theme.space['15']}
        w={theme.space['343']}
      />
      <Box display={'flex'} ml={theme.space['36']} mt={theme.space['23']}>
        <Box mr={theme.space['114']}>
          <Text
            color={theme.colors.Gray['60']}
            fontSize={theme.fontSizes['16']}
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights['4.5']}
          >
            Set card limit
          </Text>
          <Text
            color={theme.colors.Gray['70']}
            fontSize={theme.fontSizes.xs}
            fontWeight={theme.fontWeights.normal}
            lineHeight={theme.lineHeights['4.5']}
            mt={theme.space['1']}
          >
            You set budget for 3 categories
          </Text>
        </Box>
        <Box mt={theme.space['14']}>
          <Switch colorScheme={'purple'} size={'lg'} />
        </Box>
      </Box>
    </ContainerGroup>
  )
}
