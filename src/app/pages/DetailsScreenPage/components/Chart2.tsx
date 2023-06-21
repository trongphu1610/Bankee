import React from 'react'
import { AreaChart, Area } from 'recharts'
import { useTheme } from '@chakra-ui/react'

const data = [
  {
    name: 'A',
    uv: 950,
  },
  {
    name: 'B',
    uv: 740,
  },
  {
    name: 'C',
    uv: 960,
  },
  {
    name: 'D',
    uv: 970,
  },
  {
    name: 'E',
    uv: 950,
  },
  {
    name: 'F',
    uv: 1000,
  },
  {
    name: 'G',
    uv: 1150,
  },
  {
    name: 'H',
    uv: 1450,
  },
  {
    name: 'I',
    uv: 1550,
  },
  {
    name: 'J',
    uv: 1680,
  },
  {
    name: 'K',
    uv: 1780,
  },
]

/**
 * @returns Component chart2
 */
export function Chart2() {
  const theme = useTheme()
  return (
    <AreaChart
      data={data}
      height={158}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      width={321}
    >
      <Area
        dataKey="uv"
        fill={theme.colors.blue['45']}
        stroke={theme.colors.blue['45']}
        type="monotone"
      />
    </AreaChart>
  )
}
