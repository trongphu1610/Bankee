import React from 'react'
import { AreaChart, Area } from 'recharts'
import { useTheme } from '@chakra-ui/react'

const data = [
  {
    name: 'A',
    uv: 520,
  },
  {
    name: 'B',
    uv: 850,
  },
  {
    name: 'C',
    uv: 740,
  },
  {
    name: 'D',
    uv: 725,
  },
  {
    name: 'E',
    uv: 1100,
  },
  {
    name: 'F',
    uv: 1130,
  },
  {
    name: 'G',
    uv: 1180,
  },
  {
    name: 'H',
    uv: 1190,
  },
  {
    name: 'I',
    uv: 1200,
  },
  {
    name: 'J',
    uv: 1350,
  },
  {
    name: 'K',
    uv: 1360,
  },
  {
    name: 'L',
    uv: 1700,
  },
  {
    name: 'M',
    uv: 1580,
  },
  {
    name: 'N',
    uv: 1700,
  },
]

/**
 * @returns Component chart1
 */
export function Chart1() {
  const theme = useTheme()
  return (
    <AreaChart
      data={data}
      height={147}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      width={414}
    >
      <Area
        dataKey="uv"
        fill={theme.colors.blue['35']}
        stroke={theme.colors.blue['35']}
        type="monotone"
      />
    </AreaChart>
  )
}
