import React, { useCallback, useEffect, useState } from 'react'
import {
  Box,
  Text,
  Image,
  Heading,
  Link,
  useTheme,
  useToast,
} from '@chakra-ui/react'
import { ContainerGroup } from 'app/pages/MainScreenPage/components/elements/Container'
import { LineProgressBar } from 'app/pages/MainScreenPage/components/LineProgressBar'
import {
  TextActivity,
  TextContent,
  TextMoney,
  TextTitle,
} from 'app/pages/MainScreenPage/components/elements/Text'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BoxContent } from 'app/pages/MainScreenPage/components/elements/Box'

type Items = {
  id: string
  name: string
  urlImage: string
  urlNavigate: string
}

type MainMoney = {
  items: Items[]
  mainscreenTotal: string
  mainscreenTotalSpend: string
  mainscreenTotalEarned: string
  id: string
}

const MAIN_IMAGE = [
  {
    id: '1',
    name: 'Transfer',
    urlImage: 'assets/send.png',
    urlNavigate: '/transferring',
  },
  {
    id: '2',
    name: 'My Card',
    urlImage: 'assets/card.png',
    urlNavigate: '/card_details',
  },
  {
    id: '3',
    name: 'Insight',
    urlImage: 'assets/growth.png',
    urlNavigate: '/details_screen',
  },
]

/**
 * @returns Component main screen page
 */
export function MainScreen() {
  const theme = useTheme()
  const toast = useToast()
  const navigate = useNavigate()
  const [mainMoney, setMainMoney] = useState<MainMoney>()

  /**
   * Fetch api by mock api have subdirectory is /moneys/mainscreenTotal
   */
  const fetchMainAPI = useCallback(async () => {
    try {
      const url = '/moneys/mainscreenTotal'
      const res = await axios.get(url)
      setMainMoney(res.data)
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
    fetchMainAPI()
  }, [fetchMainAPI])

  return (
    <ContainerGroup>
      <Box
        bg={theme.colors.blue['50']}
        display={'flex'}
        h={theme.sizes['324']}
        justifyContent={'space-around'}
      >
        <Box ml={theme.space['22']}>
          <Heading
            color={theme.colors.white}
            mt={theme.space['100']}
            pr={theme.space['20']}
            textAlign={'center'}
          >
            {mainMoney?.mainscreenTotal}
          </Heading>
          <Text color={theme.colors.white} textAlign={'center'}>
            Available balance
          </Text>
        </Box>
        <Box ml={theme.space['70']} mt={theme.space['97']}>
          <Image src={'assets/profile.png'} />
        </Box>
      </Box>
      <Box
        bg={theme.colors.white}
        borderRadius={theme.radii['10']}
        h={theme.sizes['212']}
        ml={theme.space['37']}
        mt={theme.space['124']}
        w={theme.sizes['346']}
      >
        <Box display={'flex'}>
          <Box display={'flex'} pl={theme.space['21']} pt={theme.space['27']}>
            <BoxContent bg={theme.colors.red['50']} />
            <Box>
              <TextActivity>Spend</TextActivity>
              <TextMoney>{mainMoney?.mainscreenTotalSpend}</TextMoney>
            </Box>
          </Box>
          <Box
            display={'flex'}
            ml={theme.space['72']}
            pl={theme.space['12']}
            pt={theme.space['27']}
          >
            <BoxContent bg={theme.colors.blue['40']} />
            <Box>
              <TextActivity>Earned</TextActivity>
              <TextMoney>{mainMoney?.mainscreenTotalEarned}</TextMoney>
            </Box>
          </Box>
        </Box>
        <Box
          borderBottom={theme.borders['1.5px']}
          mt={theme.space['20']}
          opacity={'0.2'}
        />
        <TextContent ml={theme.space['21']} mt={theme.space['21']}>
          You spent {mainMoney?.mainscreenTotalEarned} on dining out this month.
          <br />
          Let’s try to make it lower
        </TextContent>
        <Box
          color={theme.colors.blue['50']}
          ml={theme.space['21']}
          mt={theme.space['10']}
          textDecoration={'underline'}
        >
          <Link onClick={() => navigate('/details_screen')}>Tell me more</Link>
        </Box>
      </Box>
      <TextTitle ml={theme.space['36']} mt={theme.space['37']}>
        Activity
      </TextTitle>
      <Box display={'flex'} ml={theme.space['36']} mt={theme.space['19']}>
        {MAIN_IMAGE.map(({ id, name, urlImage, urlNavigate }: Items) => {
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
                  pl={theme.space['10']}
                  pt={theme.space['10']}
                  src={urlImage}
                  onClick={() => navigate(urlNavigate)}
                />
              </Box>
              <Text>{name}</Text>
            </Box>
          )
        })}
      </Box>
      <TextTitle ml={theme.space['36']} mt={theme.space['45']}>
        Complete Verification
      </TextTitle>
      <Box
        bg={theme.colors.white}
        h={theme.sizes['408']}
        ml={theme.space['36']}
        mt={theme.space['19']}
        w={theme.sizes.base}
      >
        <Text
          align={'end'}
          fontSize={theme.fontSizes['12']}
          fontWeight={theme.fontWeights.normal}
          lineHeight={theme.lineHeights['2.5']}
          pr={theme.space['25']}
          pt={theme.space['37']}
        >
          7 of 10 completed
        </Text>
        <LineProgressBar
          style={{
            width: theme.sizes['294'],
            height: theme.sizes['10'],
            marginLeft: theme.space['21'],
            marginTop: theme.space['22'],
          }}
          value={0.75}
        />
        <Box
          borderBottom={theme.borders['0.5px']}
          ml={theme.space['20']}
          mt={theme.space['25']}
          w={theme.sizes['294']}
        />
        <Box display={'flex'}>
          <Box>
            <Image
              ml={theme.space['21']}
              mt={theme.space['23']}
              src={'assets/user_icon.png'}
            />
          </Box>
          <Box ml={theme.space['16']} mt={theme.space['20']}>
            <Text
              fontSize={theme.fontSizes['14']}
              fontWeight={theme.fontWeights.bold}
              lineHeight={theme.lineHeights['18']}
            >
              Personal Information
            </Text>
            <TextContent mt={theme.space['13']}>
              When you register for an account, we <br />
              collectt personal informmation
            </TextContent>
            <Text
              color={theme.colors.blue['50']}
              fontSize={theme.fontSizes.xs}
              fontWeight={theme.fontWeights.bold}
              lineHeight={theme.lineHeights['4.5']}
              mt={theme.space['19']}
            >
              Continue
            </Text>
            <Box
              borderBottom={theme.borders['0.5px']}
              mt={theme.space['25']}
              w={theme.sizes['258']}
            />
          </Box>
        </Box>
        <Box display={'flex'}>
          <Image
            ml={theme.space['21']}
            mt={theme.space['12']}
            src={'assets/identity_card.png'}
          />
          <Text
            fontSize={theme.fontSizes['14']}
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights['4']}
            ml={theme.space['10']}
            mt={theme.space['16']}
          >
            Verification
          </Text>
        </Box>
        <Box
          borderBottom={theme.borders['0.5px']}
          ml={theme.space['52']}
          mt={theme.space['29']}
          w={theme.sizes['258']}
        />
        <Box display={'flex'}>
          <Image
            ml={theme.space['21']}
            mt={theme.space['12']}
            src={'assets/email.png'}
          />
          <Text
            fontSize={theme.fontSizes['14']}
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights['4']}
            ml={theme.space['10']}
            mt={theme.space['16']}
          >
            Confirm email
          </Text>
        </Box>
      </Box>
      <TextTitle ml={theme.space['36']} mt={theme.space['40']}>
        News and promo
      </TextTitle>
      <Box
        bg={theme.colors.white}
        borderRadius={theme.radii['10']}
        h={theme.sizes['320']}
        mb={theme.space['60']}
        ml={theme.space['37']}
        mt={theme.space['20']}
        w={theme.sizes['346']}
      >
        <Box
          bg={theme.colors.blue['50']}
          borderRadius={theme.radii['10']}
          h={theme.sizes['155']}
          w={theme.sizes['346']}
        >
          <Image src={'assets/group_1.png'} />
          <Image
            bottom={theme.space['443']}
            ml={theme.space['26']}
            position={'absolute'}
            src={'assets/group_2.png'}
          />
          <Text
            color={theme.colors.white}
            fontSize={theme.fontSizes['22']}
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights['7']}
            ml={theme.space['174']}
            mt={theme.space['116']}
          >
            Get $12 free!
          </Text>
        </Box>
        <Heading
          color={theme.colors.Gray['60']}
          fontSize={theme.fontSizes['16']}
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights['7']}
          ml={theme.space['21']}
          mt={theme.space['26']}
        >
          Share Invite your friends!
        </Heading>
        <TextContent ml={theme.space['21']} mt={theme.space['13']}>
          Invite friends register on our app. For every <br /> user you invite.
          you can earn up $12
        </TextContent>
        <Text
          color={theme.colors.blue['50']}
          fontSize={theme.fontSizes.sm}
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights['4.5']}
          ml={theme.space['21']}
          mt={theme.space['19']}
        >
          Invite Now
        </Text>
      </Box>
    </ContainerGroup>
  )
}
