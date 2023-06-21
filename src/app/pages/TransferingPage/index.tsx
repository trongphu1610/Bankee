import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useTheme,
  useToast,
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import { SearchIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { ContainerGroup } from 'app/pages/TransferingPage/components/elements/Container'
import { HeaderBox } from 'app/pages/TransferingPage/components/elements/Box'
import { User } from 'app/pages/TransferingPage/components/User'
import { TextHeader } from 'app/pages/TransferingPage/components/elements/Text'
import { Recent } from 'app/pages/TransferingPage/components/Recent'
import { useNavigate } from 'react-router-dom'
import { sortBy } from 'lodash'

type Users = {
  id: string
  firstName: string
  name: string
  phone: string
  urlImage: string
  lastVisited: null | number
  isButton: boolean
  onClick: () => void
}

type UsersDetail = {
  users: Users[]
}

/**
 * @returns Component transferring page
 */
export function Transferring() {
  const theme = useTheme()
  const toast = useToast()
  const navigate = useNavigate()
  const [contact, setContact] = useState<UsersDetail>()
  const [recent, setRecent] = useState<UsersDetail>()
  const [searchTerm, setSearchTerm] = useState('')

  // const recentUsers =
  //   recent?.users.filter(item => item.lastVisited !== null) || []

  /**
   * Handle sort user last visited and use sortBy, reverse lodash
   */
  const sortedRecentUsers = useMemo(() => {
    return sortBy(recent?.users, ['lastVisited']).reverse()
  }, [recent?.users])

  /**
   * Fetch api by mock api have subdirectory is /moneys/contact
   */
  const fetchContactAPI = useCallback(async () => {
    try {
      const url = '/moneys/contact'
      const res = await axios.get(url)
      setContact(res.data)
      setRecent(res.data)
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

  const updateContactLastVisited = useCallback(
    async (userId: string) => {
      const url = 'moneys/contact'
      await axios.put(url, {
        ...contact,
        users:
          contact?.users.map(u => {
            if (u.id !== userId) {
              return u
            }
            return {
              ...u,
              lastVisited: Date.now(),
              isButton: false,
            }
          }) || [],
      })
    },
    [contact],
  )

  useEffect(() => {
    fetchContactAPI()
  }, [fetchContactAPI])

  /**
   * Handle click get id user and navigate
   */
  const handleClickUser = (id: string) => {
    updateContactLastVisited(id)
    navigate(`/receipt/${id}`)
  }

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} event Handle onchange get value input
   */
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  /**
   * Handle search
   */
  const dataFilter = useMemo(() => {
    if (!contact?.users.length) return
    if (!searchTerm) return contact.users
    return contact.users.filter(
      item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.includes(searchTerm),
    )
  }, [searchTerm, contact])

  return (
    <ContainerGroup>
      <HeaderBox
        borderBottomLeftRadius={theme.radii['30']}
        borderBottomRightRadius={theme.radii['30']}
      >
        <Text
          fontSize={theme.fontSizes.xl}
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights['26']}
          pt={theme.space['64']}
          textAlign={'center'}
        >
          Transfer
        </Text>
      </HeaderBox>
      <Box
        display={'flex'}
        justifyContent={'start'}
        position={'absolute'}
        top={theme.sizes['112']}
      >
        <Box
          bg={theme.colors.blue['55']}
          borderRadius={'19px'}
          h={theme.sizes['62']}
          ml={theme.space['26']}
          mr={theme.space['38']}
          w={theme.sizes['62']}
        >
          <Image
            pl={theme.space['22']}
            pt={theme.space['22']}
            src={'assets/icon1.png'}
          />
          <TextHeader>Mobile</TextHeader>
        </Box>
        <Box
          bg={theme.colors.blue['55']}
          borderRadius={'19px'}
          h={theme.sizes['62']}
          mr={theme.space['38']}
          w={theme.sizes['62']}
        >
          <Image
            pl={theme.space['22']}
            pt={theme.space['22']}
            src={'assets/icon2.png'}
            onClick={() => navigate('/my_account')}
          />
          <TextHeader>Bank</TextHeader>
        </Box>
        <Box
          bg={theme.colors.blue['55']}
          borderRadius={theme.radii['19']}
          h={theme.sizes['62']}
          mr={theme.space['38']}
          w={theme.sizes['62']}
        >
          <Image
            h={theme.sizes['41']}
            pl={theme.space['22']}
            pt={theme.space['22']}
            src={'assets/icon3.png'}
            w={theme.sizes['41']}
          />
          <TextHeader>Online</TextHeader>
        </Box>
        <Box
          bg={theme.colors.blue['55']}
          borderRadius={theme.radii['19']}
          h={theme.sizes['62']}
          w={theme.sizes['62']}
        >
          <Image
            pl={theme.space['22']}
            pt={theme.space['22']}
            src={'assets/icon4.png'}
            onClick={() => navigate('/qr_code')}
          />
          <TextHeader>QR code</TextHeader>
        </Box>
      </Box>
      <Text
        color={theme.colors.Gray['60']}
        fontSize={theme.fontSizes['18']}
        fontWeight={theme.fontWeights.bold}
        lineHeight={theme.lineHeights['23']}
        ml={theme.space['28']}
        mt={theme.space['123']}
      >
        Recent
      </Text>
      <Box
        borderRadius={theme.radii['10']}
        display={'flex'}
        ml={theme.space['26']}
        mt={theme.space['14']}
        overflowX={'scroll'}
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {sortedRecentUsers.map(({ id, firstName, phone, urlImage }: Users) => {
          return (
            <Recent
              key={id}
              firstName={firstName}
              phone={phone}
              urlImage={urlImage}
            />
          )
        })}
      </Box>
      <Box
        bg={theme.colors.white}
        h={theme.sizes['428']}
        mt={theme.space['27']}
      >
        <Text
          color={theme.colors.Gray['60']}
          fontSize={theme.fontSizes['18']}
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights['23']}
          ml={theme.space['28']}
          pt={theme.space['18']}
        >
          All contats
        </Text>
        <Stack spacing={4}>
          <InputGroup ml={theme.space['25']} mt={theme.space['18']}>
            <InputLeftElement
              children={
                <SearchIcon ml={theme.space['58']} mt={theme.space['40']} />
              }
            />
            <Input
              bg={theme.colors.Alphas['80']}
              border={'none'}
              h={theme.sizes['50']}
              pl={theme.space['68']}
              placeholder={'search name or number..'}
              w={theme.sizes['364']}
              onChange={onChange}
            />
          </InputGroup>
        </Stack>
        {dataFilter &&
          dataFilter.map(({ name, phone, id, urlImage, isButton }) => {
            return (
              <User
                key={id}
                isButton={isButton}
                name={name}
                phone={phone}
                UrlImage={urlImage}
                onClick={() => handleClickUser(id)}
              />
            )
          })}
      </Box>
    </ContainerGroup>
  )
}
