import React, { useCallback, useEffect, useState } from 'react'
import { Text } from '@chakra-ui/layout'
import { Box, Image, useTheme, useToast } from '@chakra-ui/react'
import { ContainerGroup } from 'app/pages/QRCodePage/components/elements/Container'
import { HeaderBox } from 'app/pages/QRCodePage/components/elements/Box'
import axios from 'axios'
import Barcode from 'react-barcode'
import QRCode from 'qrcode.react'

type User = {
  id: string
  urlImage: string
}

const VALUE_QR_CODE = `${process.env.REACT_APP_API_URL}/moneys/user`

/**
 * @returns Component qr code page
 */
export function QRCodePage() {
  const theme = useTheme()
  const toast = useToast()
  const [valueCode, setValueCode] = useState<User>({ id: '', urlImage: '' })

  const fetchAPI = useCallback(async () => {
    try {
      const url = '/moneys/user'
      const res = await axios.get(url)
      setValueCode(res.data)
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
    fetchAPI()
  }, [fetchAPI])

  return (
    <ContainerGroup>
      <HeaderBox>
        <Text
          fontSize={theme.fontSizes.xl}
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights['26']}
          pt={theme.space['96']}
          textAlign={'center'}
        >
          My QR Code
        </Text>
        <Box
          bg={theme.colors.white}
          borderRadius={theme.radii['16']}
          h={theme.sizes['440']}
          ml={theme.space['32']}
          mt={theme.space['58']}
          pl={theme.space['20']}
          pt={theme.space['1i']}
          w={theme.sizes['340']}
        >
          <Box display={'flex'} pt={theme.space['1i']}>
            <Box
              ml={theme.space['15']}
              mr={theme.space['20']}
              mt={theme.space['20']}
            >
              <Image
                borderRadius={theme.radii['20']}
                h={theme.sizes['54']}
                src={valueCode.urlImage}
                w={theme.sizes['54']}
              />
            </Box>
            <Box mt={theme.space['30']}>
              <Text
                color={theme.colors.Alphas['75']}
                fontSize={theme.fontSizes['12']}
                fontWeight={theme.fontWeights.bold}
                lineHeight={theme.lineHeights['2.5']}
              >
                Profile name
              </Text>
              <Text
                color={theme.colors.Gray['60']}
                fontSize={theme.fontSizes['16']}
                fontWeight={theme.fontWeights.bold}
                lineHeight={theme.lineHeights['4.5']}
                mt={theme.space['1']}
              >
                Hailey Sanders
              </Text>
            </Box>
          </Box>
          <Box
            borderBottom={theme.borders['1px']}
            mr={theme.space['18']}
            mt={theme.space['26']}
          />
          <Box ml={theme.space['53']} mt={theme.space['17']}>
            <Barcode
              displayValue={false}
              format={valueCode.id !== '' ? 'CODE128' : 'upc'}
              value={valueCode.id}
            />
          </Box>
          <Box ml={theme.sizes['80']} mt={theme.space['30']}>
            <QRCode
              height={theme.sizes['148']}
              renderAs="canvas"
              value={VALUE_QR_CODE}
              width={theme.sizes['148']}
            />
          </Box>
          <Box
            bottom={theme.sizes['120']}
            left={theme.sizes['100i']}
            position={'relative'}
          />
        </Box>
        <Box
          bg={theme.colors.blue['47']}
          borderRadius={theme.radii['10']}
          display={'flex'}
          h={theme.sizes['131']}
          ml={theme.space['32']}
          mt={theme.space['32']}
          w={theme.sizes['340']}
        >
          <Box
            bg={theme.colors.white}
            borderRadius={theme.radii['19']}
            h={theme.sizes['54']}
            ml={theme.space['23']}
            mr={theme.space['15']}
            mt={theme.space['17']}
            w={theme.sizes['54']}
          >
            <Image
              pl={theme.space['17']}
              pt={theme.space['14']}
              src={'assets/idea.png'}
            />
          </Box>
          <Box mt={theme.space['26']}>
            <Text
              color={theme.colors.Alphas['40']}
              fontSize={theme.fontSizes['14']}
              fontWeight={theme.fontWeights.bold}
              lineHeight={theme.lineHeights['4.5']}
            >
              Simply show the QR code and <br /> your friends can scan and tap!
            </Text>
            <Text
              color={theme.colors.white}
              fontSize={theme.fontSizes.sm}
              fontWeight={theme.fontWeights.bold}
              lineHeight={theme.lineHeights['4.5']}
              mt={theme.space['19']}
            >
              More details
            </Text>
          </Box>
        </Box>
      </HeaderBox>
    </ContainerGroup>
  )
}
