import React, { useCallback, useState } from 'react'
import { PieChart, Cell, Pie, Sector } from 'recharts'
import { useTheme } from '@chakra-ui/react'

const data = [
  { name: '$400', value: 400 },
  { name: '$1200', value: 1200 },
  { name: '$1200', value: 1200 },
  { name: '$400', value: 400 },
  { name: '$400', value: 400 },
  { name: '$800', value: 800 },
]

/**
 * @returns Component render acitve shape
 */
const renderActiveShape = props => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props

  return (
    <g>
      <text
        dy={8}
        fontSize="22px"
        fontWeight="700"
        textAnchor="middle"
        x={cx}
        y={cy}
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        endAngle={endAngle}
        fill={fill}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
      />
      <Sector
        cx={cx}
        cy={cy}
        endAngle={endAngle}
        fill={fill}
        innerRadius={outerRadius}
        outerRadius={outerRadius + 15}
        startAngle={startAngle}
      />
    </g>
  )
}

/**
 * @returns Component pie chart
 */
export function PieChartComponent() {
  const theme = useTheme()
  const COLORS = [
    theme.colors.Pie['10'],
    theme.colors.Pie['20'],
    theme.colors.Pie['30'],
    theme.colors.Pie['40'],
    theme.colors.Pie['50'],
    theme.colors.Pie['60'],
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index)
    },
    [setActiveIndex],
  )

  return (
    <PieChart height={400} width={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        cx={200}
        cy={200}
        data={data}
        dataKey="value"
        innerRadius={60}
        outerRadius={120}
        onMouseEnter={onPieEnter}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  )
}
