import React from 'react'
import { Box, Image, useTheme } from '@chakra-ui/react'
import {
  TextPhone,
  TextTitle,
} from 'app/pages/TransferingPage/components/elements/Text'

type Users = {
  firstName: string
  phone: string
  urlImage: string
}

/**
 * @returns Component user
 * @param {Users} props Send props into a component
 */
export function Recent(props: Users) {
  const theme = useTheme()

  return (
    <Box
      bg={theme.colors.white}
      cursor={'pointer'}
      h={theme.sizes['164']}
      minW={theme.sizes['142']}
      mr={theme.space['10']}
    >
      <Image
        borderRadius={'25px'}
        h={theme.sizes['70']}
        ml={theme.space['35']}
        mt={theme.space['24']}
        pt={theme.space['4']}
        src={props.urlImage}
        w={theme.sizes['70']}
      />
      <TextTitle mt={theme.space['15']} textAlign={'center'}>
        {props.firstName}
      </TextTitle>
      <TextPhone textAlign={'center'}>{props.phone}</TextPhone>
    </Box>
  )
}
