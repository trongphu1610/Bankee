import React, { useCallback, useEffect, useState } from 'react'
import { Box, Image, useTheme, useToast } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/layout'
import axios from 'axios'
import { Heading } from 'app/pages/MyAccountPage/components/elements/Heading'
import { HeaderBox } from 'app/pages/MyAccountPage/components/elements/Box'
import { ContainerGroup } from 'app/pages/MyAccountPage/components/elements/Container'
import { AccountComponent } from 'app/pages/MyAccountPage/components/AccountComponent'
import { useNavigate } from 'react-router-dom'

type Accounts = {
  heading: string
  title: string
  content: string
  money: string
  id: string
}

type AccountDetails = {
  items: Accounts[]
}

const URL_IMAGE = {
  item1: 'assets/bitmap.png',
  item2: 'assets/bitmap2.png',
  item3: 'assets/bitmap3.png',
}

/**
 * @returns Component my account page
 */
export function MyAccount() {
  const theme = useTheme()
  const navigate = useNavigate()
  const toast = useToast()
  const [account, setAccount] = useState<AccountDetails>()

  const fetchAccountAPI = useCallback(async () => {
    try {
      const url = 'moneys/my_account'
      const res = await axios.get(url)
      setAccount(res.data)
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
    fetchAccountAPI()
  }, [fetchAccountAPI])

  return (
    <ContainerGroup>
      <HeaderBox>
        <Box pt={theme.space['74']}>
          <ChevronLeftIcon
            boxSize={6}
            cursor={'pointer'}
            ml={theme.space['28']}
            position={'absolute'}
            onClick={() => navigate('/transferring')}
          />
          <Heading align={'center'} fontSize={{ md: theme.space['20'] }}>
            My Account
          </Heading>
        </Box>
        <Box display={'flex'} ml={theme.space['38']} mt={theme.space['30']}>
          <Box
            bg={theme.colors.Alphas['85']}
            borderRadius={theme.radii['16']}
            h={theme.sizes['51']}
            pl={theme.space['20']}
            pt={theme.space['17']}
            w={theme.sizes['51']}
          >
            <Image src={'assets/contact_account.png'} />
          </Box>
          <Text
            color={theme.colors.blue['50']}
            fontSize={theme.fontSizes['18']}
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights['23']}
            ml={theme.space['20']}
            mt={theme.space['15']}
          >
            Link new account
          </Text>
        </Box>
      </HeaderBox>
      <Box
        bg={theme.colors.Alphas['80']}
        ml={theme.space['-4']}
        w={theme.sizes['414']}
      >
        {account &&
          account.items.map(
            ({ heading, content, money, title, id }: Accounts) => {
              return (
                <AccountComponent
                  key={id}
                  content={content}
                  heading={heading}
                  money={money}
                  title={title}
                  urlImage={URL_IMAGE[id]}
                />
              )
            },
          )}
      </Box>
    </ContainerGroup>
  )
}
