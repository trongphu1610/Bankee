import React, { useCallback, useEffect, useState } from 'react'
import { Box, Button, Image, useTheme, useToast } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import { ContainerGroup } from 'app/pages/ReceiptPage/components/elements/Container'
import { HeaderBox } from 'app/pages/ReceiptPage/components/elements/Box'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {
  TextContent,
  TextTitle,
} from 'app/pages/ReceiptPage/components/elements/Text'

type Users = {
  name: string
  urlImage: string
  numberUser: string
  amount: string
  transfer: string
}

/**
 * @returns Component receipt page
 */
export function Receipt() {
  const theme = useTheme()
  const { id } = useParams()
  const navigate = useNavigate()
  const toast = useToast()
  const [receipt, setReceipt] = useState<Users>()

  /**
   * Fetch api by mock api have subdirectory is /moneys/transferring
   */
  const fetchReceiptAPI = useCallback(async () => {
    try {
      const url = `/moneys/contact`
      await axios.get(url).then(response => {
        const user = response.data.users.find(user => user.id === id)
        setReceipt(user)
      })
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
  }, [id, toast])

  useEffect(() => {
    fetchReceiptAPI()
  }, [fetchReceiptAPI])

  return (
    <ContainerGroup>
      <HeaderBox>
        <Text
          fontSize={theme.fontSizes.xl}
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights['26']}
          position={'relative'}
          textAlign={'center'}
          top={theme.sizes['106']}
        >
          My Receipt
        </Text>
        <Image
          ml={theme.space['76']}
          mt={theme.space['27']}
          src="/assets/shapes.png"
        />
        <Box
          bg={theme.colors.white}
          borderRadius={theme.radii['16']}
          h={theme.sizes['527']}
          ml={theme.space['32']}
          mt={theme.space['40']}
          pt={theme.space['1i']}
          w={theme.sizes['357']}
        >
          <Box />
          <Box
            bg={theme.colors.yellow['50']}
            borderRadius={theme.radii['25']}
            h={theme.sizes['74']}
            ml={theme.space['142']}
            mt={theme.space['22']}
            pt={theme.space['1i']}
            w={theme.sizes['74']}
          >
            <Image
              ml={theme.space['23']}
              mt={theme.space['21']}
              src={'/assets/burger.png'}
              w={theme.sizes['30']}
            />
          </Box>
          <Text
            color={theme.colors.Gray['60']}
            fontSize={theme.fontSizes.xl}
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights['4.5']}
            mb={theme.space['16']}
            mt={theme.space['12']}
            textAlign={'center'}
          >
            Transfer done
          </Text>

          <Box
            borderBottom={theme.borders['1px']}
            ml={theme.space['24']}
            w={theme.sizes['310']}
          />
          <Box alignItems={'center'} display={'flex'} justifyContent={'start'}>
            <Image
              borderRadius={'20px'}
              h={theme.sizes['54']}
              mb={theme.space['28']}
              ml={theme.space['22']}
              mr={theme.space['20']}
              mt={theme.space['30']}
              src={receipt?.urlImage}
              w={theme.sizes['54']}
            />
            <Box>
              <TextTitle>Recipient</TextTitle>
              <TextContent>{receipt?.name}</TextContent>
            </Box>
          </Box>
          <Box ml={theme.space['26']} mt={theme.space['9']}>
            <TextTitle>Reference number</TextTitle>
            <TextContent>{receipt?.numberUser}</TextContent>
          </Box>
          <Box display={'flex'} ml={theme.space['26']} mt={theme.space['40']}>
            <Box mr={theme.space['78']}>
              <TextTitle>Amount sent</TextTitle>
              <TextContent>{receipt?.amount}</TextContent>
            </Box>
            <Box>
              <TextTitle>Transfer fee</TextTitle>
              <TextContent>{receipt?.transfer}</TextContent>
            </Box>
          </Box>
          <Button
            ml={theme.space['53']}
            mt={theme.space['52']}
            w={theme.sizes['261']}
            onClick={() => navigate('/transferring')}
          >
            Share
          </Button>
        </Box>
        <Text
          color={theme.colors.white}
          fontSize={theme.fontSizes['16']}
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights['4.5']}
          ml={theme.sizes['2i']}
          mt={theme.space['42']}
          textAlign={'center'}
        >
          It will take less than 24 hours to <br />
          process it
        </Text>
        <Box
          bg={theme.colors.blue['50']}
          borderRadius={theme.radii['99']}
          bottom={theme.sizes['482']}
          h={theme.space['31']}
          left={theme.space['10']}
          position={'relative'}
          w={theme.sizes['32']}
        />
        <Box
          bg={theme.colors.blue['50']}
          borderRadius={theme.radii['99']}
          bottom={theme.sizes['512']}
          h={theme.space['31']}
          left={theme.space['379']}
          position={'relative'}
          w={theme.sizes['32']}
        />
      </HeaderBox>
    </ContainerGroup>
  )
}
