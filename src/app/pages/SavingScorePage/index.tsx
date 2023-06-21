import React from 'react'
import { Image, useTheme } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import { ContainerGroup } from 'app/pages/SavingScorePage/components/elements/Container'
import { HeaderBox } from 'app/pages/SavingScorePage/components/elements/Box'
import { Recommendation } from 'app/pages/SavingScorePage/components/Recommendation'

/**
 * @returns Component saving score page
 */
export function SavingScore() {
  const theme = useTheme()

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
          position={'relative'}
          textAlign={'center'}
          top={theme.sizes['76']}
        >
          Finance Score
        </Text>
        <Image
          ml={theme.space['76']}
          mt={theme.space['34']}
          src="assets/ilustration.png"
        />
        <Text
          fontSize={theme.fontSizes['22']}
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights['28']}
          mt={theme.space['14']}
          textAlign={'center'}
        >
          It can be better!
        </Text>
        <Text
          fontSize={theme.fontSizes['18']}
          fontWeight={theme.fontWeights.normal}
          lineHeight={theme.lineHeights['25']}
          textAlign={'center'}
        >
          Below are some recommendations
        </Text>
      </HeaderBox>
      <Text
        color={theme.colors.Gray['60']}
        fontSize={theme.fontSizes['18']}
        fontWeight={theme.fontWeights.bold}
        lineHeight={theme.lineHeights['23']}
        ml={theme.space['28']}
        mt={theme.space['144']}
      >
        Recommendation
      </Text>
      <Recommendation
        activeName={'Spending'}
        activeNumber={'+17'}
        description={`You spent $468 on food. That’s 50% higher than normal`}
      />
      <Recommendation
        activeName={'Credit'}
        activeNumber={'+8'}
        description={`You paid $120 for annual credit card fee. Let’s try to make it`}
      />
    </ContainerGroup>
  )
}
